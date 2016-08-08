var path = require('path');

module.exports = {

  entry: path.join(__dirname, '/src'),
  output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js',
      library: 'x-sdk',
      libraryTarget: 'umd'
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
    ]
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty'
  }
};
