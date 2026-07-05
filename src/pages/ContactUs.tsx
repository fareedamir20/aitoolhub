import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Send } from 'lucide-react';

export const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      <Helmet>
        <title>Contact Us | AI Tools Hub</title>
        <meta name="description" content="Contact the AI Tools Hub team. Have questions about AI tools or partnership opportunities? We'd love to hear from you." />
      </Helmet>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Have questions about AI tools, partnership opportunities, or feedback on our content? We'd love to hear from you. Our team typically responds within 24-48 hours.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Email</h3>
            </div>
            <p className="text-slate-600 ml-16">contact@aitoolshub.example.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Office</h3>
            </div>
            <p className="text-slate-600 ml-16">123 Tech Boulevard<br/>Innovation District<br/>San Francisco, CA 94105</p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {isSubmitted ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-200 text-center">
                <h3 className="font-bold text-lg mb-2">Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" id="email" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input type="text" id="subject" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can we help you?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea id="message" required rows={6} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>

                <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
