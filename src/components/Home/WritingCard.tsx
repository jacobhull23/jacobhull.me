import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Writing } from '../../types';
import { cn } from '../../lib/utils';

interface WritingCardProps {
  writing: Writing;
}

const WritingCard: React.FC<WritingCardProps> = ({ writing }) => {
  const isInternal = writing.link.startsWith('/');
  const MotionLink = motion(Link);
  
  const cardContent = (
    <>
      {writing.image && (
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <img 
            loading="lazy"
            decoding="async"
            src={writing.image} 
            alt="" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
        </div>
      )}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">
            {writing.category}
          </span>
        </div>
        <h4 className="text-2xl font-display font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors flex-grow">
          {writing.title}
        </h4>
        <div className="flex items-center justify-between pt-6 border-t border-primary/10">
          {writing.publicationLogo ? (
            <div className="h-5 flex items-center">
              <img 
                loading="lazy"
                decoding="async"
                src={writing.publicationLogo} 
                alt={writing.publication} 
                className="h-full w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <span className="text-[11px] font-mono uppercase tracking-widest opacity-70">
              {writing.publication}
            </span>
          )}
          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
        </div>
      </div>
    </>
  );

  const commonClasses = "relative p-8 border-2 border-primary/5 hover:border-primary transition-all group flex flex-col h-full bg-background shadow-sm cursor-pointer overflow-hidden";

  if (isInternal) {
    return (
      <MotionLink
        to={writing.link}
        whileHover={{ y: -10, scale: 1.02 }}
        className={commonClasses}
      >
        {cardContent}
      </MotionLink>
    );
  }

  return (
    <motion.a 
      href={writing.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -10, scale: 1.02 }}
      className={commonClasses}
    >
      {cardContent}
    </motion.a>
  );
};

export default WritingCard;
