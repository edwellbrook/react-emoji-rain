const path = require('path');

module.exports = {
  entry: './example/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },

  devServer: {
    contentBase: './example',
    host: 'localhost',
  },
};
