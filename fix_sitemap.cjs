const fs = require('fs');

let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
sitemap = sitemap.replace(/\/article\//g, '/post/');

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Fixed sitemap.xml');
