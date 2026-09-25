import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a 
          href="/" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-display text-2xl font-bold tracking-tighter text-primary hover:text-primary/80 transition-colors cursor-pointer"
        >
          Jacob Hull
        </motion.a>
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
          <a href="#projects" className="hover:text-primary transition-colors cursor-pointer">Projects</a>
          <a href="#experience" className="hover:text-primary transition-colors cursor-pointer">Experience</a>
          <a href="#writing" className="hover:text-primary transition-colors cursor-pointer">Writing</a>
          <a href="#contact" className="hover:text-primary transition-colors cursor-pointer">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/Jacob_Hull_CV.pdf" download="Jacob_Hull_CV.pdf" className="cursor-pointer">
            <Button variant="outline" size="sm" className="rounded-none border-primary/30 text-foreground hover:border-primary hover:bg-primary/5 px-4 font-bold uppercase tracking-widest text-[10px] transition-all duration-300 cursor-pointer">
              Download CV
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/jacobhull" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <Button variant="default" size="sm" className="rounded-none bg-primary hover:bg-foreground hover:text-background px-4 md:px-6 font-bold uppercase tracking-widest text-[10px] transition-all duration-300 cursor-pointer">
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
