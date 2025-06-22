import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    // Allow ngrok domains
    "*.ngrok.io",
    "*.ngrok-free.app",
    "*.ngrok.app",
    // Add your specific ngrok domain if needed
    "a1c2-125-163-58-107.ngrok-free.app",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "**.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
