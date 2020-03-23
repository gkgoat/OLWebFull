let esm = require('esm')(module);
let path = require('path');
module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.module.rules.push(      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader',options: {inline: true,fallback: false} }
      });
      config.module.rules.push(      {
        test: /\.tsx?$/,
        use: ['ts-loader',{        loader: 'babel-loader',
        options: {presets: ["next/babel"]},}],
        exclude: /node_modules/,
      });
      config.plugins.push(new (esm('./src/wp/plugin.js').default)(c => c));
      config.resolve.alias['browsix'] = path.resolve(__dirname, 'src/browsix/')
      return config
    },
    webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
    },
  }