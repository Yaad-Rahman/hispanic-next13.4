/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  reactStrictMode: true,
  transpilePackages: ['@square/web-sdk', 'react-square-web-payments-sdk'],
  experimental: {
    appDir: true,
    esmExternals: 'loose',
  },
  cssModules: true,
};

module.exports = nextConfig;
