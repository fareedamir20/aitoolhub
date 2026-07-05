const fs = require('fs');

const dataFile = 'src/data.ts';
let content = fs.readFileSync(dataFile, 'utf8');

const newArticle = `  {
    title: "The Dawn of Autonomous Enterprise Agents: How AI is Moving Beyond Chat in July 2026",
    cat: "AI News & Trends",
    slug: "autonomous-enterprise-agents-july-2026",
    toolName: "Agentic Workflows",
    price: "Varies",
    rating: 5.0,
    pros: ["True autonomy", "Multi-step reasoning", "Cross-platform integration"],
    cons: ["High compute cost", "Requires strict guardrails"],
    verdict: "Agentic AI is the most significant leap since the LLM itself, completely redefining digital labor.",
    audience: "Enterprise leaders, developers, operations managers",
    competitor: "Traditional automation",
    features: ["Task decomposition", "Self-correction", "Tool use", "Long-term memory"],
    customContent: true
  }`;

// I need to properly inject this into the rawPosts array in src/data.ts
// I'll find the start of the array and insert it.
content = content.replace(/const rawPosts = \[/, 'const rawPosts = [\n' + newArticle + ',');

fs.writeFileSync(dataFile, content);
console.log('Added new article object');
