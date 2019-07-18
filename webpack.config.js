const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
  console.log("env is", env.production)
  const isProduction = env.production;
  return({
    mode: isProduction ? "production" : "development",
    entry: "./src",
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
      minimize: isProduction ? true : false,
      minimizer: [
        new TerserPlugin({
          parallel: true,
        })
      ]
    },
    externals: {
      react: "react",
      "react-dom": "react-dom",
      lodash: {
        commonjs: "lodash",
        commonjs2: "lodash",
        amd: "lodash",
        root: "_"
      },
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          (isProduction ? "*production*" : "*development*")
        ]
      })
    ],
    output: {
      filename: isProduction ? "use-form-linker.production.min.js" : "use-form-linker.development.js",
      path: path.join(__dirname, "dist"),
      library: "use-form-linker",
      libraryTarget: "commonjs2",
    }
  });
};
