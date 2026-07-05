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
        <meta name="description" content="Read the Terms of Service for AI Tools Hub, outlining site usage rules, disclaimers, and liability." />
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
        <p>
          By accessing and using AI Tools Hub (aistoolshubs.netlify.app), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>

        <h2>2. Intellectual Property and Content Ownership</h2>
        <p>
          All content published on AI Tools Hub, including but not limited to text, reviews, tutorials, graphics, logos, images, and software, is the property of AI Tools Hub and is protected by international copyright laws. 
        </p>
        <p>
          You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute any material from this site without our express written permission. You may print or download portions of the materials for your own personal, non-commercial use, provided you agree not to change or delete any copyright or proprietary notices.
        </p>

        <h2>3. Disclaimer of Warranties and Accuracy</h2>
        <p>
          The materials on AI Tools Hub's website are provided on an 'as is' basis. AI Tools Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p>
          <strong>Information Volatility:</strong> Artificial intelligence software changes rapidly. The reviews, tutorials, pricing, and feature lists reflect our findings at the time of writing. Software updates occur frequently, and we cannot guarantee that a tool functions exactly as described weeks or months after publication. Always verify current features and pricing on the official vendor's website before making a purchase.
        </p>

        <h2>4. Affiliate Disclosure</h2>
        <p>
          AI Tools Hub participates in various affiliate marketing programs. This means we may earn a commission when you click on links to various merchant sites and make a purchase. This can impact how and where products appear on this site. However, this does not impact our core reviews and comparisons. We strive to keep things fair and balanced, in order to help you make the best choice for you.
        </p>

        <h2>5. User Conduct and Site Usage Rules</h2>
        <p>
          When using our website, you agree not to:
        </p>
        <ul>
          <li>Use the site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the site.</li>
          <li>Use the site in any way which is unlawful, illegal, fraudulent, or harmful.</li>
          <li>Conduct any systematic or automated data collection activities (including scraping, data mining, data extraction, and data harvesting) on or in relation to our website without our express written consent.</li>
          <li>Attempt to gain unauthorized access to any portion or feature of the site, or any other systems or networks connected to the site.</li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>
          In no event shall AI Tools Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AI Tools Hub's website, even if AI Tools Hub or a authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2>7. Links to Third-Party Websites</h2>
        <p>
          AI Tools Hub contains links to third-party websites that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party websites or services. You further acknowledge and agree that AI Tools Hub shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites.
        </p>

        <h2>8. Privacy Policy</h2>
        <p>
          Your use of the website is also subject to our Privacy Policy. Please review our <a href="/privacy-policy">Privacy Policy</a>, which informs users of our data collection practices and your rights regarding personalized advertising.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          Any claim relating to AI Tools Hub's website shall be governed by the laws of Pakistan without regard to its conflict of law provisions.
        </p>

        <h2>10. Modifications to Terms of Service</h2>
        <p>
          AI Tools Hub may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2>11. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at <strong>contact@aistoolshubs.com</strong>.
        </p>
      </div>
    </div>
  );
};
