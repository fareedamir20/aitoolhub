import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Info } from 'lucide-react';

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Helmet>
        <title>About Us | AI Tools Hub</title>
        <meta name="description" content="Learn about AI Tools Hub, our mission, testing methodology, and the team behind our expert AI software reviews." />
      </Helmet>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <Info className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">About Us</h1>
      </div>
      
      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <h2>Who We Are</h2>
        <p>
          Welcome to AI Tools Hub. We are an independent software review and education platform dedicated to testing, analyzing, and explaining artificial intelligence tools. Founded by a team of web developers, tech analysts, and AI practitioners, our platform was built to solve a specific problem: the overwhelming noise in the AI software market.
        </p>
        <p>
          New AI applications launch every single day, often accompanied by exaggerated marketing claims. Our goal is to cut through that hype. We spend our time testing language models, image generators, productivity automation software, and business APIs so you don't have to waste your budget figuring out what actually works.
        </p>

        <h2>Our Testing Methodology</h2>
        <p>
          Trust is built on transparency and rigorous testing. We do not simply rewrite press releases or scrape feature lists from vendor websites. When we review a tool, we create an account, build real workflows, and test it under stress. 
        </p>
        <p>
          For example, when evaluating AI writing assistants, we don't just ask them to write a generic email. We test them against complex prompts, evaluate their adherence to brand voice, and check their output for hallucinations and plagiarism. When reviewing video generators, we analyze render times, artifact presence, and prompt adherence. We also purchase paid subscriptions to test premium features, ensuring our reviews reflect the actual user experience rather than a restricted free trial.
        </p>

        <h2>What You Can Expect</h2>
        <p>
          We organize our content into specific, actionable categories designed to help you navigate the AI ecosystem:
        </p>
        <ul>
          <li><strong>Reviews:</strong> Deep dives into individual tools, breaking down pros, cons, pricing tiers, and real-world performance.</li>
          <li><strong>Tutorials:</strong> Step-by-step instructions on how to integrate AI into your workflow, from Zapier automations to advanced Midjourney prompting.</li>
          <li><strong>Comparisons:</strong> Head-to-head battles between leading platforms (e.g., Claude vs. ChatGPT) to help you decide where to allocate your subscription budget.</li>
          <li><strong>Guides & Resources:</strong> Broader strategic advice on implementing AI in business, marketing, and creative fields.</li>
          <li><strong>News:</strong> Concise updates on major model releases and industry shifts that actually impact end-users.</li>
        </ul>

        <h2>Our Mission</h2>
        <p>
          Our mission is to democratize access to artificial intelligence by providing clear, unbiased, and highly practical information. We believe that AI is not just for enterprise tech companies; it is a fundamental shift in how freelancers, marketers, students, and small businesses operate. 
        </p>
        <p>
          We are entirely self-funded and independent. While we may utilize affiliate links to sustain our operations (which you can read about in our Editorial Policy), our primary allegiance is always to you, the reader. If a highly-hyped tool fails to deliver, we will tell you.
        </p>
        <p>
          Thank you for trusting AI Tools Hub as your guide in this rapidly evolving landscape.
        </p>
      </div>
    </div>
  );
};
