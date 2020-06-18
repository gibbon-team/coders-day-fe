const path = require("path");
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "coders",
    projectName: "app",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    entry: path.resolve(__dirname, "src/coders-app.tsx"),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [path.resolve(__dirname, "node_modules")],
          loader: "babel-loader",
        },
        {
          test: /\.css$/i,
          exclude: [path.resolve(__dirname, "node_modules")],
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
      modules: [path.resolve(__dirname, "./src"), "node_modules"],
    },
    devServer: {
      port: 9001,
    },
    externals: ["@material-ui/core", "react", "react-dom"],
  });
};
