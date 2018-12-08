const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extraPlugins = [];

if (process.env.ANALYZE) {
  extraPlugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  mode: 'production',

  entry: {
    app: './src/app.tsx'
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/',
  },

  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.d.ts'],
    alias: {
      Src: path.resolve('./src'),
      Components: path.resolve('./src', 'components'),
      Containers: path.resolve('./client', 'containers'),
    }
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
          loader: 'babel-loader',
        },
        {
          loader: 'awesome-typescript-loader'
        }
      ],
      exclude: /node_modules/,
    }, ]
  },

  plugins: [
    ...extraPlugins,
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: process.cwd()
    }),
  ]
}
