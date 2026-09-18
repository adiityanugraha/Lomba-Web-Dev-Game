import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Static JPG/PNG/WebP under public/ are pre-compressed (scripts/optimize-images.mjs).
  images: { unoptimized: true },
  experimental: {
    // Tree-shake react-icons: only the Fa/Si/Tb icons actually imported ship.
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
};

export default nextConfig;
