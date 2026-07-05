import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users } from 'lucide-react';
import { AUTHOR } from '../data';

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Helmet>
        <title>About Us | AI Tools Hub</title>
        <meta name="description" content="Learn more about AI Tools Hub, our mission, and the team behind the reviews and tutorials." />
      </Helmet>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
          <Users className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">About Us</h1>
      </div>
      
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm mb-12">
        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600">
          <h2>Our Mission</h2>
          <p>At <strong>AI Tools Hub</strong>, our mission is to demystify artificial intelligence and make it accessible, actionable, and profitable for creators, marketers, and developers. We believe that AI is not just a trend, but a fundamental shift in how we work and create.</p>
          
          <h2>What We Do</h2>
          <p>We provide daily, in-depth analysis of the latest AI tools, industry trends, and SEO strategies. Our content is thoroughly researched, fact-checked, and designed to provide you with the highest quality information to stay ahead of the curve.</p>
          
          <h2>Editorial Standards & E-E-A-T</h2>
          <p>We strictly adhere to Google's E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines. Every article on this platform is written or reviewed by industry experts with hands-on experience in AI and digital marketing. We are committed to transparency, accuracy, and providing genuine value to our readers.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
          <img src={AUTHOR.avatar} alt={AUTHOR.name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="font-bold text-lg text-slate-900">{AUTHOR.name}</h3>
            <p className="text-sm text-blue-600 font-medium mb-2">Editor in Chief & SEO Strategist</p>
            <p className="text-slate-600 text-sm leading-relaxed">{AUTHOR.bio} With over a decade of experience in digital publishing, Alex ensures every piece of content meets our rigorous quality standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
