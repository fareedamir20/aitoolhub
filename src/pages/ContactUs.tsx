import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail } from 'lucide-react';

export const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Helmet>
        <title>Contact Us | AI Tools Hub</title>
        <meta name="description" content="Get in touch with AI Tools Hub for tool suggestions, corrections, partnerships, or sponsored review inquiries." />
      </Helmet>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <Mail className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Contact Us</h1>
      </div>
      
      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <p>
          We want to hear from you. Whether you have discovered a groundbreaking new AI tool that we need to test, spotted a factual error in one of our reviews, or want to discuss a potential partnership, our inbox is open.
        </p>

        <h2>How to Reach Us</h2>
        <p>
          For all general inquiries, editorial feedback, and business proposals, please email us directly at:
        </p>
        <p className="text-xl font-mono bg-slate-50 p-4 rounded-lg inline-block border border-slate-200">
          <strong>contact@aistoolshubs.com</strong>
        </p>

        <h2>What to Contact Us About</h2>
        <ul>
          <li><strong>Tool Suggestions:</strong> Built an AI app or found one you love? Send it our way. We are always looking for innovative software to review.</li>
          <li><strong>Corrections:</strong> The AI industry moves fast. If a tool we reviewed has updated its pricing or features, let us know so we can update our database.</li>
          <li><strong>Partnerships & Sponsorships:</strong> We offer limited, clearly labeled sponsorship opportunities for tools that align with our audience. Reach out for our media kit.</li>
        </ul>

        <h2>Response Time</h2>
        <p>
          We read every single email we receive. Our typical response time is <strong>24 to 48 business hours</strong>. Please note that due to the high volume of software pitches, we cannot guarantee a review for every tool submitted, but we do evaluate every submission.
        </p>
      </div>
    </div>
  );
};
