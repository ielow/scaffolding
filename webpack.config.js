const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/index.ts',
  output: {
    filename: 'scripts/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: [/node_modules/],
        loaders: ['html-loader', 'pug-html-loader']
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/,/publicPath/],
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use: ['postcss-loader','sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".pug",".scss"]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Scaffolding',
      hash: true,
      template: './app/views/index.pug',
      exclude: ['node_modules', 'views/layout']
    }),
    new ExtractTextPlugin('stylesheets/styles.min.css')
  ]
}
