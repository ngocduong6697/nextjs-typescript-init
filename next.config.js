const nextTranslate = require("next-translate");
const path = require("node:path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // config alias import
  webpack(config) {
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
    COOKIE_EXPIRED_DAYS: process.env.COOKIE_EXPIRED_DAYS,
  },
};

module.exports = nextConfig;
