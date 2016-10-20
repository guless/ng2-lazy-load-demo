const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge({}, config, {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ],
  entry: {
    bundle: "./src/index",
    bundle_aot: "./src/index-aot"
  },
  devtool: "sourcemap"
});
