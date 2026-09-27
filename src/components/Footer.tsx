import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="font-display text-3xl font-bold tracking-tighter text-primary hover:text-primary/80 transition-colors cursor-pointer">
            Jacob Hull
          </Link>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em] opacity-70">
          <a href="/#projects" className="hover:text-primary hover:opacity-100 transition-all cursor-pointer">Projects</a>
          <a href="/#experience" className="hover:text-primary hover:opacity-100 transition-all cursor-pointer">Studio History</a>
          <a href="/#writing" className="hover:text-primary hover:opacity-100 transition-all cursor-pointer">Publications</a>
          <a href="/#contact" className="hover:text-primary hover:opacity-100 transition-all cursor-pointer">Contact</a>
          <Link to="/privacy" className="hover:text-primary hover:opacity-100 transition-all cursor-pointer">Privacy</Link>
        </div>
        <div className="text-[11px] font-mono uppercase tracking-widest opacity-75" suppressHydrationWarning>
          © {new Date().getFullYear()} Jacob Hull.
        </div>
      </div>
      <p className="max-w-7xl mx-auto mt-12 text-center text-[11px] leading-relaxed text-foreground/70">
        Game names, logos and artwork are trademarks and copyright of their respective owners, shown here to illustrate
        work I contributed to.
      </p>
    </footer>
  );
}
