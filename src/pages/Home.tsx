import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../data';
import { ArticleCard, CategoryPills, AdSlot } from '../components/Shared';
import { TrendingUp, Sparkles } from 'lucide-react';

export const Home = () => {
  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(1);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Tools Hub",
    "url": "https://aistoolshubs.netlify.app",
    "logo": "https://aistoolshubs.netlify.app/logo.png",
    "description": "Discover the best AI tools, software, and platforms for productivity, content creation, business, and everyday use."
  };

  return (
    <div className="space-y-12">
      <Helmet>
        <title>AI Tools Hub | Expert Reviews, Tutorials & Lists</title>
        <meta name="description" content="Discover the best AI tools, software, and platforms for productivity, content creation, business, and everyday use. Read our expert reviews and tutorials." />
        <link rel="canonical" href="https://aistoolshubs.netlify.app" />
        <script type="application/ld+json">
          {JSON.stringify(orgSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Editor's Pick</h2>
        </div>
        <ArticleCard post={featuredPost} featured={true} />
      </section>

      {/* Top Banner Ad */}
      <AdSlot format="horizontal" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Latest Articles</h2>
            <div className="h-px bg-slate-200 flex-1 ml-4" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {recentPosts.map(post => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
          
          {recentPosts.length === 0 && (
            <p className="text-slate-500 italic">More articles coming soon...</p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-10">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Trending Topics
            </h3>
            <CategoryPills />
          </div>

          <div className="sticky top-24">
            <AdSlot format="rectangle" />
            
            <div className="mt-8 bg-slate-900 text-white p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-2">Join the Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">Get the latest AI tools and SEO tips delivered straight to your inbox weekly.</p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
