import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from './Footer';

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  publication: string;
  date: string;
  author: string;
  headerImage: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  subtitle,
  publication,
  date,
  author,
  headerImage,
  children
}: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-[#ece5de] text-[#151927] selection:bg-primary selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#151927]/10 bg-[#ece5de]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/archive" className="flex items-center gap-2 group text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors cursor-pointer">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Archive
          </Link>
          <div className="font-display text-sm font-bold tracking-tighter hidden md:block">
            {publication} · {date}
          </div>
          <Button variant="ghost" size="icon" className="rounded-full cursor-pointer" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </nav>

      <main className="pt-16">
        {/* Header Image */}
        <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
          <img 
            src={headerImage} 
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ece5de] via-transparent to-transparent" />
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-6 -mt-32 relative z-10 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary font-bold mb-4 block">
                {publication}
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 leading-[0.9]">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl font-medium text-[#151927]/75 italic leading-tight border-l-4 border-primary pl-6 py-2">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-[#151927]/10 mb-12 text-[11px] font-mono uppercase tracking-widest opacity-75">
              <div className="flex items-center gap-2">
                <User className="h-3 w-3" />
                <span>By {author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                <span>{date}</span>
              </div>
            </div>

            <div className="prose prose-lg prose-primary max-w-none 
              prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-headings:font-bold
              prose-p:text-[#151927]/80 prose-p:leading-relaxed prose-p:mb-8
              prose-img:rounded-none prose-img:shadow-2xl prose-img:my-12
              prose-strong:text-primary
            ">
              {children}
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
