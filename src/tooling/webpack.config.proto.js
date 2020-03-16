module.exports = require('../../next.config.js').webpack({  entry: {index: './index.js'},
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
},
output: {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist'),
},
plugins: [

  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1,
  }),
  new (esm('../wp/plugin.js').default)(t => e => require('react').createElement(e.type,Object.assign({},e.props,{children: e.props.children.concat([t])}))),
],},{webpack: require('webpack')})