
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: path.join(__dirname, '/bootstrap'),
  output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loaders: process.env.PRODUCTION ? ['babel'] : ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  },
  plugins: [ new HtmlWebpackPlugin()],
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty'
  }
};
