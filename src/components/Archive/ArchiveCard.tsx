import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Writing } from '../../types';
import { cn } from '../../lib/utils';

interface ArchiveCardProps {
  article: Writing;
  index: number;
}

const ArchiveCard: React.FC<ArchiveCardProps> = ({ article, index }) => {
  const isInternal = article.link.startsWith('/');
  const MotionLink = motion(Link);
  
  const content = (
    <>
      {article.image && (
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none z-0">
          <img 
            loading="lazy"
            decoding="async"
            src={article.image} 
            alt="" 
            className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ece5de]/40 to-[#ece5de] group-hover:to-[#f5f0eb] transition-colors duration-300" />
        </div>
      )}
      <div className="flex-grow pr-8 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold">
            {article.category}
          </span>
          <span className="h-px w-4 bg-[#151927]/10" />
          <span className="text-[9px] font-mono uppercase tracking-widest opacity-40">
            {article.publication}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
          {article.title}
        </h3>
      </div>
      <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-6 relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
          {article.date}
        </span>
        <div className="h-10 w-10 rounded-full border border-[#151927]/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </>
  );

  const className = "group relative flex flex-col md:flex-row md:items-center justify-between p-6 hover:bg-[#f5f0eb] transition-all duration-300 border-b border-[#151927]/5 cursor-pointer overflow-hidden";

  if (isInternal) {
    return (
      <MotionLink
        to={article.link}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, delay: index * 0.02 }}
        className={className}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className={className}
    >
      {content}
    </motion.a>
  );
};

export default ArchiveCard;
