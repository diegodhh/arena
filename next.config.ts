import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/arena",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
