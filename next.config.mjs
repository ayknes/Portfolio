/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      // For client-side compilation
      if (!isServer) {
        config.optimization.moduleIds = 'named';
      }
      return config;
    },
  }
  
export default nextConfig;

