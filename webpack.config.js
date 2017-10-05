const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {NoEmitOnErrorsPlugin}= require('webpack');

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
    { test: /\.hbs$/, loaders:['handlebars-loader','pug-html-loader']},
    {
      test: /\.ts$/,
      exclude: [/node_modules/],
      loader: ['babel-loader', 'ts-loader']
    },
    {
      test: [/\.scss$/, /\.sass$/],
      exclude: [/node_modules/,/publicPath/],
      use: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use: [
        {loader:'postcss-loader' ,options:{"sourceMap":true}},
        {loader:'sass-loader'}
        ]
      })
    },
    {
      test:/\.css$/,
      exclude:[/node_modules/],
      use:ExtractTextPlugin.extract({
        fallback:'style-loader',
        use: 'postcss-loader'
      })
    },
      {
        "test": /\.(eot|svg|cur)$/,
        "loader": "file-loader?name=[name].[hash:20].[ext]"
      },
      {
        "test": /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        "loader": "url-loader?name=[name].[hash:20].[ext]&limit=10000"
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".pug",".scss",".sass",".css",".hbs"]
  },
  plugins: [
  new NoEmitOnErrorsPlugin(),
  new HTMLWebpackPlugin({
    title: 'Scaffolding',
    hash: true,
    template: './app/views/index.pug',
    exclude: [/node_modules/]
  }),
  new CopyWebpackPlugin([
      {
        "context": "app",
        "to": "",
        "from": {
          "glob": "assets/**/*",
          "dot": true
        }
      }
    ]),
  new ExtractTextPlugin('stylesheets/styles.min.css')
  ],
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": false
  },
  "devServer": {
    "historyApiFallback": true
  }
}
