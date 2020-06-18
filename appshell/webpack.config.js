const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv) => ({
  entry: path.resolve(__dirname, 'src/root-config.js'),
  output: {
    filename: 'root-config.js',
    libraryTarget: 'system',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/index.html',
    }),
  ],
  externals: ['single-spa', /^@coders\/.+$/],
})
