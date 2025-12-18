/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  cacheLife: {
    fiveMin: {
      stale: 60 * 5, // 5 minutes
      revalidate: 60 * 5, // 5 minutes
      expire: 60 * 60, // 1 hour
    },
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
