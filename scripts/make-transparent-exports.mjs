import fs from "node:fs";
import path from "node:path";

import sharp from "sharp";

const OUTPUTS = [
  "public/assets/images/lexflow/cover.png",
  "public/assets/images/lexflow/flow.png",
  "public/assets/images/lexflow/ui.png",
  "public/assets/images/capso/cover.png",
  "public/assets/images/capso/ui.png",
  "public/assets/images/stylr/cover.png",
  "public/assets/images/stylr/flow.png",
  "public/assets/images/stylr/ui.png",
];

const BRIGHTNESS_THRESHOLD = 172;
const SATURATION_THRESHOLD = 54;
const SEED_TOLERANCE = 30;
const FLOOD_TOLERANCE = 34;
const CLUSTER_STEP = 16;

function quantize(value) {
  return Math.round(value / CLUSTER_STEP) * CLUSTER_STEP;
}

function brightness(red, green, blue) {
  return red * 0.2126 + green * 0.7152 + blue * 0.0722;
}

function saturation(red, green, blue) {
  return Math.max(red, green, blue) - Math.min(red, green, blue);
}

function distanceSquared(red, green, blue, candidate) {
  return (
    (red - candidate.red) * (red - candidate.red) +
    (green - candidate.green) * (green - candidate.green) +
    (blue - candidate.blue) * (blue - candidate.blue)
  );
}

function isCloseToCandidate(red, green, blue, candidates, toleranceSquared) {
  for (const candidate of candidates) {
    if (distanceSquared(red, green, blue, candidate) <= toleranceSquared) {
      return true;
    }
  }

  return false;
}

function collectBorderSamples(data, width, height) {
  const samples = [];
  const stride = Math.max(4, Math.round(Math.min(width, height) / 180));

  const pushPixel = (x, y) => {
    const index = (y * width + x) * 4;
    samples.push({
      red: data[index],
      green: data[index + 1],
      blue: data[index + 2],
      alpha: data[index + 3],
    });
  };

  for (let x = 0; x < width; x += stride) {
    pushPixel(x, 0);
    pushPixel(x, height - 1);
  }

  for (let y = 0; y < height; y += stride) {
    pushPixel(0, y);
    pushPixel(width - 1, y);
  }

  return samples;
}

function findBackgroundCandidates(samples) {
  const clusters = new Map();

  for (const sample of samples) {
    if (sample.alpha < 240) {
      continue;
    }

    if (brightness(sample.red, sample.green, sample.blue) < BRIGHTNESS_THRESHOLD) {
      continue;
    }

    if (saturation(sample.red, sample.green, sample.blue) > SATURATION_THRESHOLD) {
      continue;
    }

    const key = [
      quantize(sample.red),
      quantize(sample.green),
      quantize(sample.blue),
    ].join("-");

    const existing = clusters.get(key);

    if (existing) {
      existing.count += 1;
      existing.red += sample.red;
      existing.green += sample.green;
      existing.blue += sample.blue;
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
    .filter((cluster) => cluster.count >= 4)
    .slice(0, 3)
    .map((cluster) => ({
      red: Math.round(cluster.red / cluster.count),
      green: Math.round(cluster.green / cluster.count),
      blue: Math.round(cluster.blue / cluster.count),
    }));
}

async function makeBackgroundTransparent(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const samples = collectBorderSamples(data, info.width, info.height);
  const candidates = findBackgroundCandidates(samples);

  if (candidates.length === 0) {
    return { file, removedPixels: 0, skipped: true };
  }

  const seedToleranceSquared = SEED_TOLERANCE * SEED_TOLERANCE;
  const floodToleranceSquared = FLOOD_TOLERANCE * FLOOD_TOLERANCE;
  const totalPixels = info.width * info.height;
  const queue = new Uint32Array(totalPixels);
  const visited = new Uint8Array(totalPixels);

  let head = 0;
  let tail = 0;

  const maybeEnqueue = (x, y, toleranceSquared) => {
    if (x < 0 || y < 0 || x >= info.width || y >= info.height) {
      return;
    }

    const offset = y * info.width + x;

    if (visited[offset]) {
      return;
    }

    const index = offset * 4;
    const red = data[index];
    const green = data[index + 1];
    const blue = data[index + 2];
    const alpha = data[index + 3];

    if (alpha < 16) {
      visited[offset] = 1;
      queue[tail++] = offset;
      return;
    }

    if (!isCloseToCandidate(red, green, blue, candidates, toleranceSquared)) {
      return;
    }

    visited[offset] = 1;
    queue[tail++] = offset;
  };

  for (let x = 0; x < info.width; x += 1) {
    maybeEnqueue(x, 0, seedToleranceSquared);
    maybeEnqueue(x, info.height - 1, seedToleranceSquared);
  }

  for (let y = 0; y < info.height; y += 1) {
    maybeEnqueue(0, y, seedToleranceSquared);
    maybeEnqueue(info.width - 1, y, seedToleranceSquared);
  }

  let removedPixels = 0;

  while (head < tail) {
    const offset = queue[head++];
    const x = offset % info.width;
    const y = Math.floor(offset / info.width);
    const index = offset * 4;

    if (data[index + 3] !== 0) {
      data[index + 3] = 0;
      removedPixels += 1;
    }

    maybeEnqueue(x + 1, y, floodToleranceSquared);
    maybeEnqueue(x - 1, y, floodToleranceSquared);
    maybeEnqueue(x, y + 1, floodToleranceSquared);
    maybeEnqueue(x, y - 1, floodToleranceSquared);
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  }).png().toFile(file);

  return { file, removedPixels, skipped: false };
}

async function main() {
  const backupDir = path.resolve(".tmp/image-backups");

  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  for (const relativeFile of OUTPUTS) {
    const file = path.resolve(relativeFile);
    const backup = path.join(backupDir, relativeFile.replace(/[\\/]/g, "__").replace(/\.png$/, ".raw.png"));

    if (!fs.existsSync(file)) {
      console.warn(`skip missing ${relativeFile}`);
      continue;
    }

    if (!fs.existsSync(backup)) {
      fs.copyFileSync(file, backup);
    }

    const result = await makeBackgroundTransparent(file);

    if (result.skipped) {
      console.log(`kept ${relativeFile} (no safe light background found)`);
      continue;
    }

    console.log(`updated ${relativeFile} (${result.removedPixels.toLocaleString()} pixels transparent)`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
