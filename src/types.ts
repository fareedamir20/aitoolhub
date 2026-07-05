export type Category = 
  | 'AI Tool Reviews'
  | 'AI Tutorials & How-To Guides'
  | 'Best AI Tools Lists'
  | 'AI for Business & Marketing'
  | 'AI News & Trends'
  | 'Free vs Paid AI Tools';

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string
  featuredImage: string;
  featuredImageAlt: string;
  category: Category;
  author: Author;
  publishedAt: string;
  readingTime: number;
  seo: SEOData;
  internalLinks: { url: string; anchor: string }[];
  externalLinks: { url: string; anchor: string }[];
}
