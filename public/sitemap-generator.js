const fs = require('fs');
const path = require('path');

const generateSitemap = () => {
  const baseUrl = 'https://techazora.com';

  const routes = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/about', changefreq: 'monthly', priority: 0.7 },
    { path: '/contact', changefreq: 'monthly', priority: 0.7 },
    // Add more routes here
  ];

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">';

  routes.forEach(route => {
    sitemap += `<url>`;
    sitemap += `<loc>${baseUrl}${route.path}</loc>`;
    sitemap += `<changefreq>${route.changefreq}</changefreq>`;
    sitemap += `<priority>${route.priority}</priority>`;
    sitemap += `</url>`;
  });

  sitemap += '</urlset>';

  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemap);
};

generateSitemap();
