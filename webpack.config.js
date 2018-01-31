/**
 * webpack config
 */
const Webpack = require('webpack');
module.exports = {
  entry: __dirname + "/index.js",
  output: {
    path: __dirname + "/dist",
    filename: 'algorithm.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          plugins: [
            'add-module-exports'
          ],
          presets: [
            'es2015'
          ]
        }
      }
    ]
  },
};
