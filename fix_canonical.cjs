const fs = require('fs');

function replaceCanonical(file) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/https:\/\/example.com/g, 'https://aistoolshubs.netlify.app');
    fs.writeFileSync(file, content);
}

replaceCanonical('src/pages/Article.tsx');
replaceCanonical('src/pages/Category.tsx');
replaceCanonical('src/pages/Home.tsx');
replaceCanonical('src/components/Shared.tsx'); // Just in case
replaceCanonical('public/sitemap.xml'); // Just in case, even though we already generated it with DOMAIN

console.log('Fixed canonical URLs');
