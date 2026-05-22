import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Morning-Dew-Sample" : "",
  assetPrefix: isProd ? "/Morning-Dew-Sample/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
