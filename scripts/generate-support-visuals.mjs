import fs from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const OUT_DIR = "public/assets/images/generated";

function svgShell({ title, background, content }) {
  return `
    <svg width="1600" height="1000" viewBox="0 0 1600 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="${title}-shadow" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">
          <feDropShadow dx="0" dy="34" stdDeviation="38" flood-color="#171513" flood-opacity="0.12"/>
        </filter>
        <linearGradient id="${title}-grain" x1="0" y1="0" x2="1600" y2="1000" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.72"/>
          <stop offset="1" stop-color="white" stop-opacity="0.08"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" rx="72" fill="${background}"/>
      <rect x="1" y="1" width="1598" height="998" rx="71" stroke="#171513" stroke-opacity="0.06" stroke-width="2"/>
      <circle cx="1330" cy="180" r="340" fill="url(#${title}-grain)" opacity="0.56"/>
      <circle cx="220" cy="820" r="300" fill="url(#${title}-grain)" opacity="0.42"/>
      ${content}
    </svg>`;
}

function lexflowSvg() {
  const nodes = [
    [245, 210, 210, 118],
    [565, 210, 210, 118],
    [885, 210, 210, 118],
    [1205, 210, 210, 118],
    [395, 565, 210, 118],
    [715, 565, 210, 118],
    [1035, 565, 210, 118],
  ];

  const nodeMarkup = nodes
    .map(
      ([x, y, w, h], index) => `
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="34" fill="#FFFFFF" fill-opacity="${index % 2 ? 0.78 : 0.94}" filter="url(#lexflow-shadow)"/>
        <rect x="${x + 28}" y="${y + 30}" width="${w - 56}" height="12" rx="6" fill="#5C7BDA" fill-opacity="0.34"/>
        <rect x="${x + 28}" y="${y + 58}" width="${w - 92}" height="10" rx="5" fill="#171513" fill-opacity="0.13"/>
        <rect x="${x + 28}" y="${y + 82}" width="${w - 124}" height="10" rx="5" fill="#171513" fill-opacity="0.09"/>
      `,
    )
    .join("");

  return svgShell({
    title: "lexflow",
    background: "#EEF3FF",
    content: `
      <path d="M455 269 C520 269 500 269 565 269" stroke="#5C7BDA" stroke-width="6" stroke-linecap="round" stroke-opacity="0.5"/>
      <path d="M775 269 C840 269 820 269 885 269" stroke="#5C7BDA" stroke-width="6" stroke-linecap="round" stroke-opacity="0.5"/>
      <path d="M1095 269 C1160 269 1140 269 1205 269" stroke="#5C7BDA" stroke-width="6" stroke-linecap="round" stroke-opacity="0.5"/>
      <path d="M350 328 C380 420 395 470 500 565" stroke="#5C7BDA" stroke-width="5" stroke-linecap="round" stroke-opacity="0.42"/>
      <path d="M690 328 C710 420 730 470 820 565" stroke="#5C7BDA" stroke-width="5" stroke-linecap="round" stroke-opacity="0.42"/>
      <path d="M1010 328 C1030 420 1050 470 1140 565" stroke="#5C7BDA" stroke-width="5" stroke-linecap="round" stroke-opacity="0.42"/>
      ${nodeMarkup}
      <circle cx="800" cy="448" r="84" fill="#FFFFFF" fill-opacity="0.95" filter="url(#lexflow-shadow)"/>
      <path d="M760 448 L792 480 L846 414" stroke="#5C7BDA" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M200 780 H1400" stroke="#5C7BDA" stroke-width="2" stroke-opacity="0.16" stroke-dasharray="10 18"/>
    `,
  });
}

function capsoSvg() {
  const phones = [220, 485, 750, 1015, 1280]
    .map(
      (x, index) => `
        <rect x="${x}" y="${index % 2 ? 320 : 260}" width="168" height="322" rx="46" fill="#FFFFFF" filter="url(#capso-shadow)"/>
        <rect x="${x + 18}" y="${index % 2 ? 382 : 322}" width="132" height="128" rx="26" fill="${index % 2 ? "#FFE6DD" : "#E8F1EE"}"/>
        <rect x="${x + 28}" y="${index % 2 ? 540 : 480}" width="112" height="12" rx="6" fill="#DD7B66" fill-opacity="0.34"/>
        <rect x="${x + 28}" y="${index % 2 ? 568 : 508}" width="76" height="10" rx="5" fill="#171513" fill-opacity="0.12"/>
      `,
    )
    .join("");

  return svgShell({
    title: "capso",
    background: "#FFF0EA",
    content: `
      <path d="M170 500 C410 220 620 720 830 438 C1010 196 1200 640 1430 360" stroke="#DD7B66" stroke-width="10" stroke-linecap="round" stroke-opacity="0.26"/>
      <path d="M188 570 C430 340 642 760 850 500 C1050 250 1240 690 1420 470" stroke="#171513" stroke-width="4" stroke-linecap="round" stroke-opacity="0.12" stroke-dasharray="18 18"/>
      ${phones}
      <rect x="610" y="710" width="380" height="76" rx="38" fill="#FFFFFF" fill-opacity="0.96" filter="url(#capso-shadow)"/>
      <circle cx="664" cy="748" r="18" fill="#DD7B66" fill-opacity="0.72"/>
      <rect x="706" y="732" width="214" height="12" rx="6" fill="#171513" fill-opacity="0.14"/>
      <rect x="706" y="760" width="154" height="10" rx="5" fill="#171513" fill-opacity="0.09"/>
      <circle cx="1290" cy="160" r="58" fill="#DD7B66" fill-opacity="0.22"/>
      <circle cx="1360" cy="210" r="24" fill="#DD7B66" fill-opacity="0.22"/>
    `,
  });
}

function stylrSvg() {
  return svgShell({
    title: "stylr",
    background: "#F9ECF1",
    content: `
      <rect x="130" y="150" width="420" height="650" rx="54" fill="#FFFFFF" fill-opacity="0.86" filter="url(#stylr-shadow)"/>
      <rect x="190" y="220" width="300" height="390" rx="150" fill="#496273" fill-opacity="0.84"/>
      <path d="M265 608 C310 520 368 520 414 608" stroke="#FFFFFF" stroke-width="20" stroke-linecap="round" opacity="0.72"/>
      <rect x="636" y="120" width="360" height="270" rx="42" fill="#171513" fill-opacity="0.82" filter="url(#stylr-shadow)"/>
      <rect x="682" y="166" width="268" height="178" rx="30" fill="#FFFFFF" fill-opacity="0.12"/>
      <rect x="720" y="452" width="548" height="150" rx="50" fill="#FFFFFF" fill-opacity="0.92" filter="url(#stylr-shadow)"/>
      <circle cx="790" cy="527" r="36" fill="#8B4B67" fill-opacity="0.42"/>
      <circle cx="900" cy="527" r="36" fill="#496273" fill-opacity="0.38"/>
      <circle cx="1010" cy="527" r="36" fill="#AEBFA7" fill-opacity="0.58"/>
      <circle cx="1120" cy="527" r="36" fill="#171513" fill-opacity="0.22"/>
      <rect x="1090" y="655" width="330" height="185" rx="46" fill="#FFFFFF" fill-opacity="0.88" filter="url(#stylr-shadow)"/>
      <rect x="1135" y="700" width="240" height="18" rx="9" fill="#8B4B67" fill-opacity="0.32"/>
      <rect x="1135" y="742" width="190" height="14" rx="7" fill="#171513" fill-opacity="0.12"/>
      <rect x="1135" y="778" width="138" height="14" rx="7" fill="#171513" fill-opacity="0.09"/>
      <path d="M560 760 C720 650 820 750 960 644 C1090 548 1200 570 1390 460" stroke="#8B4B67" stroke-width="7" stroke-linecap="round" stroke-opacity="0.24"/>
    `,
  });
}

async function render(name, svg) {
  const target = path.join(OUT_DIR, name);
  await sharp(Buffer.from(svg)).png().toFile(target);
  console.log(`created ${target}`);
}

await fs.mkdir(OUT_DIR, { recursive: true });
await render("lexflow-support.png", lexflowSvg());
await render("capso-support.png", capsoSvg());
await render("stylr-support.png", stylrSvg());
