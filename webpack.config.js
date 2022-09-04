import { fileURLToPath, URL } from "node:url";
import path from "path";
import zlib from "zlib";

import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";

import { VueLoaderPlugin } from "vue-loader";

const config = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(path.resolve(), "dist"),
    filename: "src/main.ts",
  },
  devServer: {
    devMiddleware: {
      mimeTypes: { ts: "text/javascript" },
    },
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)(\?.*)?$/,
        use: [
          "vue-style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "resolve-url-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(svg|woff2|json|avif|mp4|aac)(\?.*)?$/,
        use: "file-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "index.html" }],
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg|woff2)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
  resolve: {
    extensions: [".js", ".vue", ".ts"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  performance: {
    hints: false,
  },
};

export default config;
