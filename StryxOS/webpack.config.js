import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer";
import { VueLoaderPlugin } from "vue-loader";
import { fileURLToPath, URL } from "node:url";

const config = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(path.resolve(), "dist"),
    filename: "bundle.ts",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
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
      {
        test: /\.(png)(\?.*)?$/,
        loader: "sharp-loader",
        options: {
          name: "[name].[hash:8].[ext]",
          cacheDirectory: true,
          presets: {
            default: () => {
              return ["avif", { format: "avif", quality: 75, effort: 9 }];
            },
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "index.html" }],
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [".js", ".vue", ".ts"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
};

export default config;
