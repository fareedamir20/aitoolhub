import fs from 'fs';
import { BLOG_POSTS, CATEGORIES } from './src/data.js';

const DOMAIN = 'https://aistoolshubs.netlify.app';

const staticRoutes = [
  '',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/editorial-policy',
  '/sitemap'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static routes
for (const route of staticRoutes) {
  sitemap += `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
}

// Add category routes
for (const category of CATEGORIES) {
  sitemap += `  <url>
    <loc>${DOMAIN}/category/${encodeURIComponent(category)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

// Add article routes
for (const post of BLOG_POSTS) {
  sitemap += `  <url>
    <loc>${DOMAIN}/article/${post.slug}</loc>
    <lastmod>${post.publishedAt.split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`;
}

sitemap += `</urlset>`;

if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
}

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully at public/sitemap.xml');
