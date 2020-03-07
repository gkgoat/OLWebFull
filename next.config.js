let esm = require('esm')(module);
module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config
      config.module.rules.push(      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader',options: {inline: true,fallback: false} }
      });
      config.plugins.push(esm('./src/wp/plugin.js').default)
      return config
    },
    webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
    },
  }