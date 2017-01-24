'use strict';

var path = require('path');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
  entry: {
    demo1: __dirname + '/demo1/app.js',
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname,
    filename: '[name]/build.js',
  },
  webpackServer: {
    hot: true,
  },
  debug: true,
  module: {
    loaders: [
      {
        test: /\.scss/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.js$/,
        loaders: ['babel', path.resolve(__dirname, '../')],
        include: [
          __dirname,
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'rc-wrapper-loader': path.resolve(__dirname, '../')
    },
  },
};
