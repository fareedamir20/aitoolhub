import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';

export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Helmet>
        <title>Terms of Service | AI Tools Hub</title>
        <meta name="description" content="Terms of Service for AI Tools Hub." />
      </Helmet>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <FileText className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
      </div>
      
      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <p className="text-slate-500 italic mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use AI Tools Hub if you do not agree to take all of the terms and conditions stated on this page.</p>

        <h2>2. Cookies</h2>
        <p>We employ the use of cookies. By accessing AI Tools Hub, you agreed to use cookies in agreement with the AI Tools Hub's Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit.</p>

        <h2>3. License</h2>
        <p>Unless otherwise stated, AI Tools Hub and/or its licensors own the intellectual property rights for all material on AI Tools Hub. All intellectual property rights are reserved. You may access this from AI Tools Hub for your own personal use subjected to restrictions set in these terms and conditions.</p>
        
        <h2>4. User Generated Content</h2>
        <p>Parts of this website may offer an opportunity for users to post and exchange opinions and information in certain areas of the website. AI Tools Hub does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of AI Tools Hub, its agents, and/or affiliates.</p>

        <h2>5. Disclaimer</h2>
        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. The information provided on this website is for general informational and educational purposes only.</p>
      </div>
    </div>
  );
};
