var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './web/src/Main.jsx',
  output: { path: __dirname, filename: './server/public/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  externals:{
    "$":"$",
    "jQuery":"jQuery",
  }
};
