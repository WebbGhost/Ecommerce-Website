/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MONGODB_URL:
      "mongodb+srv://webghost:nwwXHIQq3bQBHEk8@cluster0.qykfjfg.mongodb.net/Ecommerce?retryWrites=true&w=majority",
      API_URL: "http://localhost:3000"
  },
};

module.exports = nextConfig;
