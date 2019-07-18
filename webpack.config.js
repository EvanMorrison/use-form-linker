const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
        },
        {
          loader: "eslint-loader",
          options: {
            emitWarning: true,
            failOnWarning: true,
          },
        }]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      })
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    lodash: "lodash"
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: "[name].production.min.js",
    path: path.join(__dirname, "dist"),
    library: "use-form-linker",
    libraryTarget: "commonjs2",
  }
};
