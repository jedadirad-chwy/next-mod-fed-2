/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "next2",
        library: { type: "var", name: "remote" },
        remotes: {
          next1:
            "next1@http://localhost:3001/_next/static/chunks/remoteEntry.js",
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Button": "./components/Button",
          "./Checkout": "./pages/checkout",
          "./pages-map": "./pages-map.js",
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
