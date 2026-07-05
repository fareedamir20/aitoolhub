import React from 'react';
import { Helmet } from 'react-helmet-async';

export const EditorialPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 prose prose-slate">
      <Helmet>
        <title>Editorial Policy & Disclaimer | AI Tools Hub</title>
        <meta name="description" content="Read our editorial policy and affiliate disclaimer for AI Tools Hub." />
      </Helmet>
      <h1>Editorial Policy & Disclaimer</h1>
      <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      
      <h2>1. Our Mission</h2>
      <p>
        AI Tools Hub is dedicated to providing high-quality, accurate, and objective information about artificial intelligence tools, software, and platforms. Our goal is to empower freelancers, marketers, students, and businesses to make informed decisions.
      </p>

      <h2>2. Editorial Independence</h2>
      <p>
        Our editorial content is not influenced by our advertisers or affiliate partners. Our reviews, rankings, and tutorials are based on the independent research and testing conducted by our editorial team. We strive to highlight both the strengths and weaknesses of the tools we cover.
      </p>

      <h2>3. Accuracy and Corrections</h2>
      <p>
        We aim to keep our content as accurate and up-to-date as possible. However, the AI industry evolves rapidly, and software features or pricing may change without notice. If we make a material error, we will correct it promptly and add a note acknowledging the correction.
      </p>

      <h2>4. Affiliate Disclaimer</h2>
      <p>
        AI Tools Hub participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites. This comes at no additional cost to you.
      </p>
      <p>
        This affiliate funding helps support our website and allows us to continue creating free, high-quality content. Please note that we only recommend products and services that we genuinely believe offer value to our readers.
      </p>

      <h2>5. Informational Purposes Only</h2>
      <p>
        The content on AI Tools Hub is for informational and educational purposes only. It does not constitute professional business, financial, or legal advice. You should always conduct your own research before making purchasing decisions for your business or personal use.
      </p>

      <h2>6. Sponsored Content</h2>
      <p>
        On occasion, we may publish sponsored posts. These posts are clearly marked as "Sponsored" or "Brought to you by [Brand Name]". Even with sponsored content, we maintain our commitment to providing honest assessments.
      </p>

      <h2>7. Contact the Editors</h2>
      <p>
        If you have questions about our editorial guidelines, or if you spot an error in one of our articles, please reach out to us via our <a href="/contact">Contact Us</a> page.
      </p>
    </div>
  );
};
