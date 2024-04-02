/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    // Only run ESLint on these directories during production builds (next build) and (next lint)
    dirs: ["app", "components", "db", "server"],
  },
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
