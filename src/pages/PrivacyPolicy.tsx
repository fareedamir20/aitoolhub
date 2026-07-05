import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Helmet>
        <title>Privacy Policy | AI Tools Hub</title>
        <meta name="description" content="Privacy Policy for AI Tools Hub, including information on cookies, Google AdSense, and third-party ad personalization." />
      </Helmet>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <Shield className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
      </div>
      
      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <p className="text-slate-500 italic mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <h2>1. Introduction</h2>
        <p>At AI Tools Hub, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by AI Tools Hub and how we use it.</p>
        
        <h2>2. Information We Collect</h2>
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. We collect:</p>
        <ul>
          <li><strong>Usage Data:</strong> Information on how the Service is accessed and used (e.g., your computer's Internet Protocol address, browser type, browser version, the pages of our Service that you visit).</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</li>
        </ul>

        <h2>3. Google AdSense & Third-Party Ad Personalization</h2>
        <p>Google, as a third-party vendor, uses cookies to serve ads on our Service. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.</p>
        <p>We use Google AdSense Advertising on our website. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</p>
        <p>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>. Alternatively, users can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</p>
        
        <h2>4. How We Use Your Information</h2>
        <p>We use the collected information in various ways, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
        </ul>

        <h2>5. CCPA & GDPR Privacy Rights</h2>
        <p>Under the CCPA and GDPR, among other rights, consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. Please contact us if you wish to exercise these rights.</p>
      </div>
    </div>
  );
};
