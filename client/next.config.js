const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
