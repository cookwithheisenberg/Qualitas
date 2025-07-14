import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
