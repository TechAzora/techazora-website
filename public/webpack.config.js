const SitemapPlugin = require('sitemap-webpack-plugin').default;

const options = {
  base: 'https://techazora.com',
  paths: [
    '/',
    '/about',
    '/contact',
    // Add more paths
  ],
  options: {
    changefreq: 'daily',
    priority: 0.7,
  },
};

module.exports = {
  // Your existing config...
  plugins: [
    new SitemapPlugin(options.base, options.paths, options.options)
  ],
};
