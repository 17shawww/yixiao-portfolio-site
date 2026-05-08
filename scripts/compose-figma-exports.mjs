import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const ROOT = "/Users/shaw/Desktop/yixiao-portfolio-site";
const CANDIDATES = path.join(ROOT, ".tmp/figma-candidates");
const OUT = path.join(ROOT, "public/assets/images");

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function pngMetadata(input) {
  const metadata = await sharp(input).metadata();
  return {
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
  };
}

async function roundedImage(input, width, height, radius = 36) {
  const image = await sharp(input)
    .resize(width, height, { fit: "cover" })
    .ensureAlpha()
    .png()
    .toBuffer();

  const mask = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" rx="${radius}" fill="white"/>
    </svg>
  `);

  return sharp(image)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function containedImage(input, width, height, radius = 36) {
  const image = await sharp(input)
    .resize(width, height, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .ensureAlpha()
    .png()
    .toBuffer();

  const mask = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" rx="${radius}" fill="white"/>
    </svg>
  `);

  return sharp(image)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

function panelShadow(width, height, radius = 36, opacity = 0.16) {
  return Buffer.from(`
    <svg width="${width + 120}" height="${height + 120}" viewBox="0 0 ${width + 120} ${height + 120}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="28" stdDeviation="30" flood-color="#111827" flood-opacity="${opacity}"/>
        </filter>
      </defs>
      <rect x="60" y="46" width="${width}" height="${height}" rx="${radius}" fill="white" filter="url(#shadow)"/>
    </svg>
  `);
}

async function saveTransparentCanvas(output, width, height, composites) {
  await ensureDir(output);
  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite(composites)
    .png()
    .toFile(output);
}

async function card(input, width, height, radius = 42) {
  const image = await containedImage(input, width, height, radius);
  return {
    input: image,
    width,
    height,
    radius,
  };
}

async function createWideCard({ input, output, width = 2200, height, imageWidth = 1960, imageHeight = 735 }) {
  const outputHeight = height ?? imageHeight + 220;
  const panel = await card(input, imageWidth, imageHeight, 36);
  const left = Math.round((width - imageWidth) / 2);
  const top = Math.round((outputHeight - imageHeight) / 2);
  await saveTransparentCanvas(output, width, outputHeight, [
    { input: panelShadow(imageWidth, imageHeight, panel.radius, 0.14), left: left - 60, top: top - 46 },
    { input: panel.input, left, top },
  ]);
}

async function createPhoneComposite({ inputs, output, width = 1800, height = 1180 }) {
  const phoneHeight = 940;
  const phoneBuffers = await Promise.all(
    inputs.map((input) =>
      sharp(input)
        .resize({ height: phoneHeight, fit: "contain" })
        .ensureAlpha()
        .png()
        .toBuffer({ resolveWithObject: true }),
    ),
  );

  const positions = [
    { left: 90, top: 170 },
    { left: 450, top: 60 },
    { left: 810, top: 170 },
    { left: 1170, top: 90 },
  ];

  const composites = [];
  for (const [index, item] of phoneBuffers.entries()) {
    const { width: phoneWidth, height: resizedHeight } = item.info;
    const pos = positions[index];
    composites.push({
      input: panelShadow(phoneWidth, resizedHeight, 86, 0.18),
      left: pos.left - 60,
      top: pos.top - 46,
    });
    composites.push({ input: item.data, left: pos.left, top: pos.top });
  }

  await saveTransparentCanvas(output, width, height, composites);
}

async function createTwoPanel({ leftInput, rightInput, output, width = 2100, height = 1180 }) {
  const left = await card(leftInput, 880, 680, 42);
  const right = await card(rightInput, 880, 680, 42);
  await saveTransparentCanvas(output, width, height, [
    { input: panelShadow(left.width, left.height, left.radius, 0.13), left: 115, top: 205 },
    { input: left.input, left: 175, top: 251 },
    { input: panelShadow(right.width, right.height, right.radius, 0.13), left: 1105, top: 205 },
    { input: right.input, left: 1165, top: 251 },
  ]);
}

async function createLexflowUi() {
  const source = path.join(CANDIDATES, "lexflow-touchpoint.png");
  const cropped = await sharp(source).extract({ left: 0, top: 0, width: 430, height: 385 }).png().toBuffer();
  const output = path.join(OUT, "lexflow/ui.png");
  const panel = await card(cropped, 1320, 860, 42);
  await saveTransparentCanvas(output, 1800, 1180, [
    { input: panelShadow(panel.width, panel.height, panel.radius, 0.15), left: 180, top: 140 },
    { input: panel.input, left: 240, top: 186 },
  ]);
}

async function createLexflowCover() {
  const source = path.join(CANDIDATES, "lexflow-userflow.png");
  const cropped = await sharp(source).extract({ left: 135, top: 0, width: 760, height: 385 }).png().toBuffer();
  await createWideCard({
    input: cropped,
    output: path.join(OUT, "lexflow/cover.png"),
    imageWidth: 1880,
    imageHeight: 950,
  });
}

async function createAll() {
  await createLexflowCover();

  await createWideCard({
    input: path.join(CANDIDATES, "lexflow-system.png"),
    output: path.join(OUT, "lexflow/flow.png"),
    imageWidth: 1980,
    imageHeight: 746,
  });

  await createLexflowUi();

  await createPhoneComposite({
    inputs: [
      path.join(CANDIDATES, "capso-phone-home.png"),
      path.join(CANDIDATES, "capso-phone-album.png"),
      path.join(CANDIDATES, "capso-phone-generate.png"),
      path.join(CANDIDATES, "capso-phone-mood.png"),
    ],
    output: path.join(OUT, "capso/cover.png"),
  });

  await createTwoPanel({
    leftInput: path.join(CANDIDATES, "capso-phone-generate.png"),
    rightInput: path.join(CANDIDATES, "capso-phone-mood.png"),
    output: path.join(OUT, "capso/ui.png"),
    width: 2100,
    height: 1180,
  });

  await createWideCard({
    input: path.join(CANDIDATES, "capso-flow.png"),
    output: path.join(OUT, "capso/flow.png"),
    imageWidth: 1780,
    imageHeight: 1000,
  });

  await createWideCard({
    input: path.join(CANDIDATES, "capso-research.png"),
    output: path.join(OUT, "capso/research.png"),
    imageWidth: 1780,
    imageHeight: 1000,
  });

  await createWideCard({
    input: path.join(CANDIDATES, "stylr-app.png"),
    output: path.join(OUT, "stylr/cover.png"),
    imageWidth: 1960,
    imageHeight: 616,
  });

  await createWideCard({
    input: path.join(CANDIDATES, "stylr-flow.png"),
    output: path.join(OUT, "stylr/flow.png"),
    imageWidth: 1960,
    imageHeight: 616,
  });

  await createWideCard({
    input: path.join(CANDIDATES, "stylr-vr.png"),
    output: path.join(OUT, "stylr/vr.png"),
    imageWidth: 1960,
    imageHeight: 616,
  });

  await createWideCard({
    input: path.join(CANDIDATES, "stylr-app.png"),
    output: path.join(OUT, "stylr/ui.png"),
    imageWidth: 1960,
    imageHeight: 616,
  });

  const files = [
    "lexflow/cover.png",
    "lexflow/flow.png",
    "lexflow/ui.png",
    "capso/cover.png",
    "capso/ui.png",
    "capso/flow.png",
    "capso/research.png",
    "stylr/cover.png",
    "stylr/flow.png",
    "stylr/ui.png",
    "stylr/vr.png",
  ];

  const summary = [];
  for (const file of files) {
    const absolute = path.join(OUT, file);
    const meta = await pngMetadata(absolute);
    summary.push(`${file}: ${meta.width}x${meta.height}`);
  }

  console.log(summary.join("\n"));
}

createAll().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
