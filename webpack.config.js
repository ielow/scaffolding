const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: ['node_modules'],
        loaders: ['html-loader', 'pug-html-loader']
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: ['babel-loader', 'ts-loader']
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js",".pug"]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Scaffolding',
      hash: true,
      template: './app/views/index.pug',
      exclude: ['node_modules', 'views/layout']
    })
  ]
}
