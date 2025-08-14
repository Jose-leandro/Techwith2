// next.config.js
module.exports = {
  eslint: {
    // Skip ESLint during production build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TypeScript type checking during production build
    ignoreBuildErrors: true,
  },
};
