const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CpWebpackPlugin = require('cp-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
    new CpWebpackPlugin({
      from: path.resolve('./static'),
      to: path.resolve('./dist'),
    })
  ],
  devServer: {
    host: "0.0.0.0",
    port: 5000,
    open: "Google Chrome",
    hot: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      include: [ path.resolve(__dirname, 'src') ],
      use: ['style-loader', 'css-loader']
    }]
  }
};
