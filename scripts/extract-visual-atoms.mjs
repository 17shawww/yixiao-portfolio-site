import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const ROOT = "/Users/shaw/Desktop/yixiao-portfolio-site";
const SOURCE = path.join(ROOT, ".tmp/figma-atoms");
const CANDIDATES = path.join(ROOT, ".tmp/figma-candidates");
const OUT = path.join(ROOT, "public/assets/images");

const ATOMS = [
  ["lexflow/atoms/journey-map.png", path.join(SOURCE, "lexflow-journey-node.png"), { removeBackground: true }],
  ["lexflow/atoms/information-architecture.png", path.join(SOURCE, "lexflow-ia-node.png"), { removeBackground: true }],
  ["lexflow/atoms/app-screens.png", path.join(SOURCE, "lexflow-app-screens-node.png"), { removeBackground: true }],
  ["lexflow/atoms/card-system.png", path.join(SOURCE, "lexflow-card-system-node.png"), { removeBackground: true }],
  ["lexflow/atoms/prototype-card-test.png", path.join(SOURCE, "lexflow-test-card-node.png"), { removeBackground: false }],
  ["lexflow/atoms/prototype-feedback.png", path.join(SOURCE, "lexflow-feedback-node.png"), { removeBackground: false }],
  ["lexflow/atoms/service-flow.png", path.join(SOURCE, "lexflow-service-flow-node.png"), { removeBackground: true }],

  ["capso/atoms/phone-home.png", path.join(SOURCE, "capso-phone-home-node.png"), { removeBackground: true }],
  ["capso/atoms/phone-album.png", path.join(SOURCE, "capso-phone-album-node.png"), { removeBackground: true }],
  ["capso/atoms/phone-generate.png", path.join(SOURCE, "capso-phone-generate-node.png"), { removeBackground: true }],
  ["capso/atoms/phone-mood.png", path.join(SOURCE, "capso-phone-mood-node.png"), { removeBackground: true }],
  ["capso/atoms/research-panel.png", path.join(SOURCE, "capso-research-node.png"), { removeBackground: false }],
  ["capso/atoms/flow-map.png", path.join(CANDIDATES, "capso-flow.png"), { removeBackground: true, crop: { left: 0, top: 60, width: 610, height: 410 } }],

  ["stylr/atoms/phone-pair.png", path.join(SOURCE, "stylr-phone-pair-node.png"), { removeBackground: true }],
  ["stylr/atoms/angled-phone.png", path.join(SOURCE, "stylr-angled-phone-node.png"), { removeBackground: true }],
  ["stylr/atoms/profile-phone.png", path.join(SOURCE, "stylr-profile-phone-node.png"), { removeBackground: true }],
  ["stylr/atoms/user-flow.png", path.join(SOURCE, "stylr-user-flow-node.png"), { removeBackground: true }],
  ["stylr/atoms/framework.png", path.join(SOURCE, "stylr-framework-node.png"), { removeBackground: true }],
  ["stylr/atoms/virtual-closet.png", path.join(SOURCE, "stylr-closet-node.png"), { removeBackground: false }],
  ["stylr/atoms/vr-room-a.png", path.join(SOURCE, "stylr-vr-1-node.png"), { removeBackground: false }],
  ["stylr/atoms/vr-room-b.png", path.join(SOURCE, "stylr-vr-2-node.png"), { removeBackground: false }],
];

const CLUSTER_STEP = 12;
const FLOOD_TOLERANCE = 38;
const EDGE_TOLERANCE = 26;

function quantize(value) {
  return Math.round(value / CLUSTER_STEP) * CLUSTER_STEP;
}

function distanceSquared(red, green, blue, candidate) {
  return (
    (red - candidate.red) * (red - candidate.red) +
    (green - candidate.green) * (green - candidate.green) +
    (blue - candidate.blue) * (blue - candidate.blue)
  );
}

function borderCandidates(data, width, height) {
  const clusters = new Map();
  const samples = [];
  const stride = Math.max(1, Math.floor(Math.min(width, height) / 160));

  const add = (x, y) => {
    const index = (y * width + x) * 4;
    samples.push({
      red: data[index],
      green: data[index + 1],
      blue: data[index + 2],
      alpha: data[index + 3],
    });
  };

  for (let x = 0; x < width; x += stride) {
    add(x, 0);
    add(x, height - 1);
  }

  for (let y = 0; y < height; y += stride) {
    add(0, y);
    add(width - 1, y);
  }

  for (const sample of samples) {
    if (sample.alpha < 240) continue;

    const key = [quantize(sample.red), quantize(sample.green), quantize(sample.blue)].join("-");
    const current = clusters.get(key);

    if (current) {
      current.count += 1;
      current.red += sample.red;
      current.green += sample.green;
      current.blue += sample.blue;
      continue;
    }

    clusters.set(key, {
      count: 1,
      red: sample.red,
      green: sample.green,
      blue: sample.blue,
    });
  }

  return [...clusters.values()]
    .sort((left, right) => right.count - left.count)
    .slice(0, 4)
    .map((cluster) => ({
      red: Math.round(cluster.red / cluster.count),
      green: Math.round(cluster.green / cluster.count),
      blue: Math.round(cluster.blue / cluster.count),
    }));
}

function closeToAny(red, green, blue, candidates, toleranceSquared) {
  return candidates.some((candidate) => distanceSquared(red, green, blue, candidate) <= toleranceSquared);
}

function floodRemoveBackground(data, width, height) {
  const candidates = borderCandidates(data, width, height);
  if (candidates.length === 0) return;

  const queue = new Uint32Array(width * height);
  const visited = new Uint8Array(width * height);
  const edgeTolerance = EDGE_TOLERANCE * EDGE_TOLERANCE;
  const floodTolerance = FLOOD_TOLERANCE * FLOOD_TOLERANCE;
  let head = 0;
  let tail = 0;

  const enqueue = (x, y, toleranceSquared) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;

    const offset = y * width + x;
    if (visited[offset]) return;

    const index = offset * 4;
    const alpha = data[index + 3];

    if (alpha < 10 || closeToAny(data[index], data[index + 1], data[index + 2], candidates, toleranceSquared)) {
      visited[offset] = 1;
      queue[tail++] = offset;
    }
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0, edgeTolerance);
    enqueue(x, height - 1, edgeTolerance);
  }

  for (let y = 0; y < height; y += 1) {
    enqueue(0, y, edgeTolerance);
    enqueue(width - 1, y, edgeTolerance);
  }

  while (head < tail) {
    const offset = queue[head++];
    const x = offset % width;
    const y = Math.floor(offset / width);
    data[offset * 4 + 3] = 0;

    enqueue(x + 1, y, floodTolerance);
    enqueue(x - 1, y, floodTolerance);
    enqueue(x, y + 1, floodTolerance);
    enqueue(x, y - 1, floodTolerance);
  }
}

async function processAtom([relativeOutput, input, options]) {
  const output = path.join(OUT, relativeOutput);
  await fs.mkdir(path.dirname(output), { recursive: true });

  let pipeline = sharp(input).ensureAlpha();

  if (options.crop) {
    pipeline = pipeline.extract(options.crop);
  }

  const { data, info } = await pipeline.raw().toBuffer({ resolveWithObject: true });

  if (options.removeBackground) {
    floodRemoveBackground(data, info.width, info.height);
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 4 })
    .png()
    .toFile(output);

  const meta = await sharp(output).metadata();
  return `${relativeOutput}: ${meta.width}x${meta.height}`;
}

const summary = [];

for (const atom of ATOMS) {
  summary.push(await processAtom(atom));
}

console.log(summary.join("\n"));
