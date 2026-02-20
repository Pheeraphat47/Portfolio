import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Wildcard to allow all hostnames
        pathname: '/**', // Wildcard to allow all paths
      },
      {
        protocol: 'http', // Include HTTP for broader compatibility
        hostname: '**',
        pathname: '/**',
      },
    ],
    domains: [
      'media.licdn.com',
      'encrypted-tbn0.gstatic.com',
      'www.infoquest.co.th',
    ],
  },
};

export default nextConfig;
