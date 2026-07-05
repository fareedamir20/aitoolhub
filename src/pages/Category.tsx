import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../data';
import { ArticleCard, CategoryPills } from '../components/Shared';
import { ChevronRight, Tag } from 'lucide-react';

export const Category = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  
  // Safely decode the category name if it comes from URL
  const decodedCategory = decodeURIComponent(categoryName || '');
  
  const categoryPosts = BLOG_POSTS.filter(p => p.category === decodedCategory);

  return (
    <div className="space-y-12">
      <Helmet>
        <title>{decodedCategory} AI Tools & Guides | AI Tools Hub</title>
        <meta name="description" content={`Discover the best tools, tutorials, and guides for ${decodedCategory}. Explore our expert reviews and stay ahead of the curve.`} />
        <link rel="canonical" href={`https://aistoolshubs.netlify.app/category/${encodeURIComponent(decodedCategory)}`} />
      </Helmet>
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center text-sm text-slate-500 mb-2 font-medium">
        <ol className="flex items-center space-x-2">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><ChevronRight className="w-4 h-4" /></li>
          <li className="text-slate-900 truncate max-w-[200px] sm:max-w-xs" aria-current="page">{decodedCategory}</li>
        </ol>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-3 mt-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <Tag className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              {decodedCategory}
            </h1>
            <p className="text-slate-500 mt-2 text-lg">
              {categoryPosts.length} {categoryPosts.length === 1 ? 'Article' : 'Articles'} found
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {categoryPosts.map(post => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500">Check back later for new content in this category.</p>
            </div>
          )}
        </div>
        
        <aside>
          <div className="sticky top-24 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <h3 className="text-lg font-bold text-slate-900 mb-6">Explore Other Categories</h3>
             <CategoryPills />
          </div>
        </aside>
      </div>
    </div>
  );
};
