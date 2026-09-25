import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARCHIVE_WRITINGS } from './constants';
import { Input } from '@/components/ui/input';
import Footer from './components/Footer';
import ArchiveCard from './components/Archive/ArchiveCard';
import FeaturedArchiveCard from './components/Archive/FeaturedArchiveCard';

const categories = ['All', 'Recommended', 'Features', 'Game Reviews', 'News'];

export default function Archive() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = ARCHIVE_WRITINGS.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.publication.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles
    .filter(a => a.category === 'Recommended')
    .slice(0, 4);

  const featuredIds = featuredArticles.map(f => f.id);

  const listArticles = filteredArticles.filter(a => {
    // If we're showing the grid, don't repeat those articles in the list below
    if ((activeCategory === 'All' || activeCategory === 'Recommended') && !searchQuery) {
      return !featuredIds.includes(a.id);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#ece5de] text-[#151927] selection:bg-primary selection:text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-[#151927]/10 bg-[#ece5de]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-2 group text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors cursor-pointer">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>
          <div className="font-display text-xl font-bold tracking-tighter">
            Article Archive
          </div>
          <div className="w-24 hidden md:block" />
        </div>
      </header>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <div className="mb-16">
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-[0.85]">
              The <span className="text-primary">Archive</span>
            </h1>
            <p className="text-xl text-[#151927]/75 max-w-2xl font-medium leading-relaxed">
              A comprehensive collection of my published work across games, technology, and culture — spanning reviews, features, and industry news.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between border-y border-[#151927]/10 py-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                    activeCategory === cat 
                      ? 'bg-[#151927] text-white border-[#151927]' 
                      : 'bg-transparent text-[#151927]/75 border-[#151927]/10 hover:border-[#151927]/40'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#151927]/40" />
              <Input 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-none border-[#151927]/10 bg-white/50 focus:bg-white transition-all h-10 text-xs font-medium"
              />
            </div>
          </div>

          {/* Article List */}
          <div className="space-y-1">
            <AnimatePresence mode="popLayout">
              {filteredArticles.length > 0 ? (
                <>
                  {/* Recommended Grid */}
                  {(activeCategory === 'All' || activeCategory === 'Recommended') && !searchQuery && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                      {featuredArticles.map((article, index) => (
                        <FeaturedArchiveCard 
                          key={`featured-${article.id}`} 
                          article={article} 
                          index={index} 
                        />
                      ))}
                    </div>
                  )}

                  {/* Regular List */}
                  <div className="space-y-1">
                    {listArticles.map((article, index) => (
                      <ArchiveCard 
                        key={article.id} 
                        article={article} 
                        index={index} 
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="py-24 text-center">
                  <p className="text-[#151927]/70 font-mono uppercase tracking-widest text-xs">No articles found matching your criteria.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
