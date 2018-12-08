const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: './src/app.tsx'
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

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.d.ts'],
     alias: {
      Src: path.resolve('./src'),
      Components: path.resolve('./src', 'components'),
      Containers: path.resolve('./client', 'containers'),
     }
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
