import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { CATEGORIES } from '../data';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export const AdSlot = ({ format = 'horizontal' }: { format?: 'horizontal' | 'rectangle' }) => {
  return (
    <div className={`bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 p-4 rounded-lg my-8 ${format === 'horizontal' ? 'w-full h-24' : 'w-full aspect-square md:w-[300px] md:h-[250px]'}`}>
      <span className="text-sm font-medium tracking-widest uppercase">Advertisement</span>
      <span className="text-xs mt-1">Google AdSense Space</span>
    </div>
  );
};

export const ArticleCard = ({ post, featured = false }: { post: BlogPost, featured?: boolean }) => {
  return (
    <article className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 ${featured ? 'md:flex-row md:min-h-[400px]' : ''}`}>
      <Link to={`/post/${post.slug}`} className={`overflow-hidden relative ${featured ? 'md:w-3/5' : 'aspect-video w-full'}`}>
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={post.featuredImage} 
          alt={post.featuredImageAlt} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sm font-semibold text-slate-900 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>
      
      <div className={`p-6 md:p-8 flex flex-col flex-1 ${featured ? 'md:w-2/5 justify-center' : ''}`}>
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        
        <Link to={`/post/${post.slug}`} className="block group-hover:text-blue-600 transition-colors">
          <h2 className={`font-bold text-slate-900 mb-3 tracking-tight ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {post.title}
          </h2>
        </Link>
        
        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
            <span className="text-sm font-medium text-slate-900">{post.author.name}</span>
          </div>
          <Link to={`/post/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
            Read More <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export const CategoryPills = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {CATEGORIES.map(cat => (
        <Link 
          key={cat} 
          to={`/category/${cat}`}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-medium transition-colors"
        >
          {cat}
        </Link>
      ))}
    </div>
  );
};
