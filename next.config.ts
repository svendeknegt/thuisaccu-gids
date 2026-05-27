import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/product/bluetti-ac500-b300s",
        destination: "/product/bluetti-elite-300",
        permanent: true,
      },
      {
        source: "/product/bluetti-ep500-pro",
        destination: "/product/bluetti-elite-300",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.s-bol.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
    ],
  },
};

export default nextConfig;
