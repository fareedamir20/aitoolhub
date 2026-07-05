import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Search, Menu, Zap } from 'lucide-react';
import { CATEGORIES } from '../data';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Close menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  AI Tools <span className="text-blue-600">Hub</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/category/Reviews" className="text-slate-600 hover:text-blue-600 px-2 py-2 text-sm font-semibold transition-colors">Reviews</Link>
              <Link to="/category/Tutorials" className="text-slate-600 hover:text-blue-600 px-2 py-2 text-sm font-semibold transition-colors">Tutorials</Link>
              <Link to="/about" className="text-slate-600 hover:text-blue-600 px-2 py-2 text-sm font-semibold transition-colors">About</Link>
              <Link to="/contact" className="text-slate-600 hover:text-blue-600 px-2 py-2 text-sm font-semibold transition-colors">Contact</Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link to="/" className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                Subscribe
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/category/Reviews" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Reviews</Link>
              <Link to="/category/Tutorials" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Tutorials</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">About Us</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Contact</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-blue-500 fill-current" />
                <span className="font-extrabold text-xl tracking-tight text-white">
                  AI Tools Hub
                </span>
              </Link>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                Your ultimate resource for the latest AI tools, automation strategies, and SEO optimization techniques. Stay ahead of the curve in the rapidly evolving world of artificial intelligence.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Categories</h3>
              <ul className="space-y-3">
                {CATEGORIES.slice(0, 5).map(cat => (
                  <li key={cat}>
                    <Link to={`/category/${cat}`} className="text-sm hover:text-white transition-colors">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal & More</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/editorial-policy" className="text-sm hover:text-white transition-colors">Editorial Policy</Link></li>
                <li><Link to="/sitemap" className="text-sm hover:text-white transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} AI Tools Hub. All rights reserved.</p>
            <p>Designed for SEO & Performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
