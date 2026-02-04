import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  reactStrictMode: true,
};

export default nextConfig;
