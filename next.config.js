/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable Turbopack for now as it might be causing the reload issues
  experimental: {
    turbo: false
  }
}

module.exports = nextConfig 