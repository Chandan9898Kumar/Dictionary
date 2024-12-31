const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },

  devtool: isProd ? "eval-cheap-module-source-map" : "source-map",

  output: {
    path: path.resolve(__dirname, "/build"),
    publicPath: "/",
    pathinfo: true,
    filename: process.env.NODE_ENV === "production" ? "[name].[chunkhash].js" : "[name].[fullhash].js",
    chunkFilename: process.env.NODE_ENV === "production" ? "chunk.[name].[chunkhash].js" : "chunk.[name].[fullhash].js",
    libraryTarget: "umd",
    clean: true, // Clean the output directory before emit.
    assetModuleFilename: "[name][ext]",
    sourceMapFilename: "[name].js.map",
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "./src/Components/Favicon/favicon-32x32.png",
      template: "./src/index.html",
      minify: {
        removeComments: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
      },
      inject: true,
      hash: true,
      title: "development",
      description: "Just copy/paste my actual stuff here",
    }),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpg|webp|mp4|wav|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
