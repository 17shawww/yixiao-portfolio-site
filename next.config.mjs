/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath
    ? {
        assetPrefix: basePath,
        basePath,
      }
    : {}),
};

export default nextConfig;
