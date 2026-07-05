import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <Helmet>
        <title>Page Not Found | AI Tools Hub</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
      </Helmet>
      
      <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-10 h-10" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">404 - Page Not Found</h1>
      <p className="text-lg text-slate-600 max-w-lg mx-auto mb-8">
        Oops! We couldn't find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.
      </p>
      
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Return to Homepage
      </Link>
    </div>
  );
};
