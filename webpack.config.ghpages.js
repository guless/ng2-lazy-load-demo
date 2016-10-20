const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.config.prod");

module.exports = merge({}, config, {
  entry: {
    bundle: "./src/index",
    bundle_aot: "./src/index-aot"
  },
  output: {
    publicPath: "https://winpzs.github.io/ng2-lazy-load-demo/dist/"
  }
});
