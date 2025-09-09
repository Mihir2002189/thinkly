/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build (good for dev)
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TS errors during build (optional for MVP/dev)
  },
  images: {
    unoptimized: true, // Disable built-in image optimization (good if using external images or Vercel not used)
  },
  reactStrictMode: true, // Helps catch potential bugs in dev
  trailingSlash: false, // Clean URLs without trailing slashes
  experimental: {
    serverActions: true, // Enable server actions (if needed later)
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'Thinkly',
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig;
