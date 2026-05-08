import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/resume`, priority: 0.7 },
    { url: `${base}/projects/lexflow`, priority: 0.9 },
    { url: `${base}/projects/capso`, priority: 0.9 },
    { url: `${base}/projects/modular-navigation-shoe`, priority: 0.85 },
    { url: `${base}/projects/sensory-garden-labyrinth`, priority: 0.85 },
  ];
}
