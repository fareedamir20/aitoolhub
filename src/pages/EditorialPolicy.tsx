import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';

export const EditorialPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Helmet>
        <title>Editorial Policy & Disclaimer | AI Tools Hub</title>
        <meta name="description" content="Read our editorial policy detailing our review methodology, independence, and affiliate disclosure." />
      </Helmet>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Editorial Policy</h1>
      </div>
      
      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <p className="text-slate-500 italic mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <p>
          At AI Tools Hub, our primary goal is to help you navigate the complex and rapidly expanding world of artificial intelligence software. To do this effectively, we must maintain strict editorial integrity. This policy outlines how we select tools, how we test them, and how we ensure our independence.
        </p>

        <h2>1. How We Select Tools for Review</h2>
        <p>
          We do not review every AI tool that launches. We curate our review pipeline based on relevance, utility, and market demand. Tools are selected based on:
        </p>
        <ul>
          <li><strong>Audience Interest:</strong> Tools our readers are actively searching for or asking about.</li>
          <li><strong>Innovation:</strong> Software that introduces a novel workflow or significant technological leap (e.g., a new underlying LLM or diffusion model).</li>
          <li><strong>Market Relevance:</strong> Major updates to established industry players.</li>
        </ul>

        <h2>2. Our Testing and Evaluation Methodology</h2>
        <p>
          We believe in hands-on testing. We do not aggregate reviews from other sites or rewrite press releases. Our evaluation criteria include:
        </p>
        <ul>
          <li><strong>Performance and Output Quality:</strong> Does the tool actually do what it claims? We test for accuracy, speed, and instances of failure (like hallucinations in text models).</li>
          <li><strong>Ease of Use:</strong> We evaluate the user interface and learning curve. Is it accessible to a beginner, or does it require prompt engineering expertise?</li>
          <li><strong>Pricing and Value:</strong> We compare the cost against its competitors. We explicitly check if the ROI justifies the monthly subscription.</li>
          <li><strong>Features:</strong> We test the specific features offered in both free and paid tiers to determine if the paywall is justified.</li>
        </ul>

        <h2>3. Editorial Independence</h2>
        <p>
          Our editorial content is not dictated by advertisers, partners, or software vendors. We maintain a strict separation between advertising and editorial. 
        </p>
        <p>
          <strong>No Pay-for-Positive-Reviews:</strong> We do not accept payment in exchange for positive reviews. If a company provides us with a free testing account, this does not guarantee a favorable review. If a tool performs poorly in our tests, we will explicitly state its shortcomings.
        </p>

        <h2>4. Affiliate Link Disclosure</h2>
        <p>
          To keep AI Tools Hub free for our readers, we participate in affiliate marketing programs. When you click on a link to a tool from our site and make a purchase, we may earn a commission. 
        </p>
        <p>
          Crucially, our participation in affiliate programs does not influence our evaluation. We apply the same rigorous testing methodology to all tools, regardless of whether they have an affiliate program or not. We will recommend the best tool for the job, period.
        </p>

        <h2>5. Correction and Update Policy</h2>
        <p>
          The AI landscape is notoriously fast-paced. Models are updated, pricing changes, and new features drop overnight. While we strive for accuracy at the time of publication, articles may occasionally become outdated.
        </p>
        <p>
          When we identify a material factual error, we will correct it immediately and add a clarification note. For major product updates, we aim to revisit and update our reviews periodically to reflect the current state of the software.
        </p>

        <h2>6. Contact the Editors</h2>
        <p>
          If you have questions about our editorial guidelines, or if you spot an error or outdated pricing in one of our articles, please reach out to us via our <a href="/contact">Contact Us</a> page or email us at <strong>contact@aistoolshubs.com</strong>.
        </p>
      </div>
    </div>
  );
};
