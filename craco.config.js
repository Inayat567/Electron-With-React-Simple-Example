const nodeExternals = require("webpack-node-externals");
const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  plugins: [
    {
      plugin: require("craco-babel-loader"),
      options: {
        includes: [resolveApp("../shared")],
      },
    },
  ],
  webpack: {
    configure: {
      target: "electron-renderer",
      externals: [
        nodeExternals({
          allowlist: [/webpack(\/.*)?/, "electron-devtools-installer"],
        }),
      ],
    },
  },
};
