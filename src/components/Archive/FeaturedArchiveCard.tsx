import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Writing } from '../../types';

interface FeaturedArchiveCardProps {
  article: Writing;
  index: number;
}

const FeaturedArchiveCard: React.FC<FeaturedArchiveCardProps> = ({ article, index }) => {
  const isInternal = article.link.startsWith('/');
  const MotionLink = motion(Link);
  
  const cardContent = (
    <>
      {article.image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={article.image} 
            alt="" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 opacity-30 group-hover:opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151927]/80 via-transparent to-transparent" />
        </div>
      )}
      <div className="relative z-10 flex flex-col h-full p-8">
        <div className="mb-auto">
          <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em]">
            {article.category}
          </span>
        </div>
        <div className="mt-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-2 block">
            {article.publication}
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors leading-tight">
            {article.title}
          </h3>
        </div>
      </div>
    </>
  );

  const className = "relative h-[400px] border-2 border-[#151927]/5 hover:border-primary transition-all group flex flex-col bg-[#151927] shadow-sm cursor-pointer overflow-hidden";

  if (isInternal) {
    return (
      <MotionLink
        to={article.link}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={className}
      >
        {cardContent}
      </MotionLink>
    );
  }

  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={className}
    >
      {cardContent}
    </motion.a>
  );
};

export default FeaturedArchiveCard;
