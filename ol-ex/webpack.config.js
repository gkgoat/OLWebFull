const path = require('path');
const webpack = require('webpack');
let esm = require('esm')(module);

module.exports = {
  entry: {index: './index.js',background: './background.js'},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {presets: ["next/babel"]},
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      fs: './fs.polyfill.js'

    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [

    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new (esm('../src/wp/plugin.js').default)(t => e => require('react').createElement(e.type,Object.assign({},e.props,{children: e.props.children.concat([t])}))),
  ],
};