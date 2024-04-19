/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development", // Puedes cambiar a 'production' para la versión final
  entry: "./src/examples/index.jsx",
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", title: "React Big Schedule" }),
    new ESLintWebpackPlugin({ emitError: true, emitWarning: false, failOnError: true, extensions: ["js", "jsx"] }),
  ],
  devServer: {
    static: { directory: path.join(__dirname, "..", "dist") },
    historyApiFallback: true,

    compress: true,
    port: 5173,
  },
};
