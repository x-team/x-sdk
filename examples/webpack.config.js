
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


//if we are on the gh-pages branch then build elements into project's root dir
if (process.env.BRANCH === 'gh-pages') {
  outputPath = path.join(__dirname, '../');
} else {
  outputPath = path.join(__dirname, '/dist');
}

module.exports = {

  entry: [
    '!!style!css!./src/styles/index.css',
    path.join(__dirname, '/bootstrap')
  ],
  output: {
      path: outputPath,
      filename: 'index.js',
      publicPath: '/'
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
        test: /\.(css|scss)$/,
        loaders: ['style', 'css?sourceMap&modules&importLoaders=1','postcss','sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty'
  }
};
