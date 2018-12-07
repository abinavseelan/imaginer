const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: './src/index.tsx'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    inline: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
            loader: 'babel-loader',
          },
          {
            loader: 'awesome-typescript-loader'
          }
        ],
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: process.cwd()
    }),
  ]
}
