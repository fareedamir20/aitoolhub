import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../data';
import { AdSlot } from '../components/Shared';
import { ChevronRight, Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';

export const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="text-center py-20">
        <Helmet>
          <title>Article Not Found | AI Tools Hub</title>
        </Helmet>
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
        </Link>
      </div>
    );
  }

  // Get related posts from the same category
  const relatedPosts = BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2);

  // Process content for TOC (Simple mock TOC based on H2s present in content)
  const headings = [
    { id: "section-1", title: "1. The Fundamentals" },
    { id: "section-2", title: "2. Strategic Implementation" },
    { id: "section-3", title: "3. Overcoming Challenges" },
    { id: "section-4", title: "4. Advanced Techniques" },
    { id: "section-5", title: "5. Measuring the Impact" },
    { id: "section-6", title: "6. Best Practices" },
    { id: "section-7", title: "7. Common Pitfalls" },
    { id: "section-8", title: "8. The Future Landscape" },
    { id: "takeaways", title: "Key Takeaways" },
    { id: "faq", title: "Frequently Asked Questions" },
    { id: "conclusion", title: "Conclusion" }
  ];

  // Helper to copy link
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.featuredImage],
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": "https://example.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Tools Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      }
    },
    "description": post.seo.metaDescription
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://example.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": post.category,
        "item": `https://example.com/category/${encodeURIComponent(post.category)}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://example.com/post/${post.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How does ${post.seo.keywords[0]} impact daily operations?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `By automating routine processes and providing deep insights, it allows teams to focus on strategic initiatives, vastly improving overall efficiency and output quality in the realm of ${post.category}. This translates to higher profit margins and better customer satisfaction.`
        }
      },
      {
        "@type": "Question",
        "name": `Is ${post.seo.keywords[1] || post.category} suitable for beginners?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. The accessibility of modern tools means that users of all skill levels can adopt these technologies. Most platforms now offer no-code or low-code interfaces."
        }
      },
      {
        "@type": "Question",
        "name": `What are the security implications of ${post.seo.keywords[0]}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security should always be a top priority. While the tools themselves are generally secure, how you implement them and manage data access determines your risk profile."
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>{post.seo.metaTitle}</title>
        <meta name="description" content={post.seo.metaDescription} />
        <meta name="keywords" content={post.seo.keywords.join(', ')} />
        <meta property="og:title" content={post.seo.metaTitle} />
        <meta property="og:description" content={post.seo.metaDescription} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://example.com/post/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center text-sm text-slate-500 mb-8 font-medium">
        <ol className="flex items-center space-x-2">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><ChevronRight className="w-4 h-4" /></li>
          <li><Link to={`/category/${encodeURIComponent(post.category)}`} className="hover:text-blue-600">{post.category}</Link></li>
          <li><ChevronRight className="w-4 h-4" /></li>
          <li className="text-slate-900 truncate max-w-[200px] sm:max-w-xs" aria-current="page">{post.title}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-10 text-center">
        <Link 
          to={`/category/${encodeURIComponent(post.category)}`}
          className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-bold tracking-wide uppercase rounded-full mb-6 hover:bg-blue-100 transition-colors"
        >
          {post.category}
        </Link>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 font-medium">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
            <div className="text-left">
              <div className="text-slate-900">{post.author.name}</div>
              <div className="text-xs text-slate-500 font-normal">Author</div>
            </div>
          </div>
          <div className="h-10 w-px bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <figure className="mb-12">
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <img 
            src={post.featuredImage} 
            alt={post.featuredImageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
      </figure>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content & TOC */}
        <div className="lg:col-span-8">
          
          {/* Table of Contents */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-slate-700 font-medium">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a href={`#${heading.id}`} className="hover:text-blue-600 transition-colors">
                    {heading.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <AdSlot format="horizontal" />

          {/* Article Content */}
          <article 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-img:rounded-xl prose-img:border prose-img:border-slate-200 mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="my-8">
            <AdSlot format="horizontal" />
          </div>

          {/* Social Share Buttons */}
          <div className="mt-12 py-6 border-t border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Share this article</h3>
            <div className="flex gap-2">
              <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`, '_blank')} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors" aria-label="Share on Twitter"><Twitter className="w-5 h-5" /></button>
              <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors" aria-label="Share on Facebook"><Facebook className="w-5 h-5" /></button>
              <button onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}`, '_blank')} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors" aria-label="Share on LinkedIn"><Linkedin className="w-5 h-5" /></button>
              <button onClick={copyLink} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors" aria-label="Copy link"><Link2 className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
             <img src={post.author.avatar} alt={post.author.name} className="w-20 h-20 rounded-full object-cover shadow-md" />
             <div>
               <h3 className="font-bold text-lg text-slate-900 mb-2">Written by {post.author.name}</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.author.bio}</p>
             </div>
          </div>

          {/* Comment Section Placeholder */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Comments</h3>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <p className="text-slate-600 mb-4">Join the conversation. What are your thoughts on this tool?</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Leave a Comment
              </button>
            </div>
          </div>

        </div>

        {/* Sticky Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-8">
            <AdSlot format="rectangle" />
            
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-slate-100">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map(related => (
                    <Link key={related.id} to={`/post/${related.slug}`} className="group flex flex-col gap-2">
                      <div className="aspect-video w-full rounded-lg overflow-hidden">
                        <img src={related.featuredImage} alt={related.featuredImageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 line-clamp-2 text-sm">
                        {related.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
