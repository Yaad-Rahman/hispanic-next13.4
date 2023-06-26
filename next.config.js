/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: "",
  reactStrictMode: true,
};

module.exports = nextConfig;
