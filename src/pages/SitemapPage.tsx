import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data';

export const SitemapPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 prose prose-slate">
      <Helmet>
        <title>Sitemap | AI Tools Hub</title>
        <meta name="description" content="HTML Sitemap for AI Tools Hub. Easily navigate our categories and pages." />
      </Helmet>
      <h1>Site Map</h1>
      <p className="text-slate-500">Note: Search engines should refer to our <a href="/sitemap.xml">XML Sitemap</a>.</p>
      
      <h2>Main Pages</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <h2>Categories</h2>
      <ul>
        {CATEGORIES.map(cat => (
          <li key={cat}>
            <Link to={`/category/${encodeURIComponent(cat)}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      <h2>Legal & Policies</h2>
      <ul>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/terms-of-service">Terms of Service</Link></li>
        <li><Link to="/editorial-policy">Editorial Policy</Link></li>
      </ul>
    </div>
  );
};
