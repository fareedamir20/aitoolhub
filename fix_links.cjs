const fs = require('fs');

function replaceLink(file) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('react-router-dom')) return;
    
    // add import { Link } from 'react-router-dom';
    content = content.replace("import { Helmet } from 'react-helmet-async';", "import { Helmet } from 'react-helmet-async';\nimport { Link } from 'react-router-dom';");
    
    // replace <a href="/something"> with <Link to="/something">
    content = content.replace(/<a href="(\/[^"]+)"([^>]*)>(.*?)<\/a>/g, '<Link to="$1"$2>$3</Link>');
    
    fs.writeFileSync(file, content);
}

replaceLink('src/pages/TermsOfService.tsx');
replaceLink('src/pages/EditorialPolicy.tsx');
replaceLink('src/pages/SitemapPage.tsx');

console.log('Fixed links in pages');
