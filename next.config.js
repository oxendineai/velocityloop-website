/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for production
  compress: true,
  // Enable React Server Components
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig