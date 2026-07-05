const fs = require('fs');

const dataFile = 'src/data.ts';
let content = fs.readFileSync(dataFile, 'utf8');

content = content.replace(
  `const isTutorial = post.cat === 'AI Tutorials';\n  let html = \``,
  `const isTutorial = post.cat === 'AI Tutorials';\n  const isReview = post.cat === 'AI Tool Reviews' || post.cat === 'Best AI Tools Lists';\n  let html = \``
);

fs.writeFileSync(dataFile, content);
console.log('Fixed data.ts variables');
