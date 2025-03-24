/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack for now as it might be causing the reload issues
  experimental: {
    turbo: false
  }
}

module.exports = nextConfig 