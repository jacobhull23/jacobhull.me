import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Hero() {
  return (

    <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-background text-foreground border-b-4 border-primary min-h-[85vh] flex items-center">
      {/* Integrated Architectural Background */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 overflow-hidden pointer-events-none">
        {/* Large skewed accent plinth */}
        <div className="absolute inset-y-0 right-0 w-full bg-accent/10 skew-x-12 translate-x-1/3" />
        <div className="absolute inset-y-0 right-0 w-px bg-primary/20 skew-x-12 translate-x-1/3 mr-px" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-24">
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:max-w-[60%]"
          >
            <h1 className="font-display text-6xl md:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter uppercase mb-10 translate-x-[-0.05em]">
              Senior Producer & <br />
              <span className="text-primary">Product Manager</span>
            </h1>
            <div className="flex flex-col gap-8">
              <p className="text-xl md:text-2xl font-medium max-w-xl leading-snug">
                Leading cross-functional teams to build and ship world-class digital products, social systems, and impactful user experiences.
              </p>
              
              {/* Call to Actions - CV Download and Contact */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.a 
                  href="/Jacob_Hull_CV.pdf" 
                  download="Jacob_Hull_CV.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center h-12 px-6 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-foreground hover:text-background transition-all duration-300 group/cv cursor-pointer"
                >
                  <Download className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/cv:translate-y-0.5" />
                  Download CV
                </motion.a>
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center h-12 px-6 bg-transparent border border-primary/40 text-foreground text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-pointer"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Editorial Image Card - Resting on the architectural plinth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2, y: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: -2, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:w-1/3 w-full max-w-sm shrink-0 lg:mr-12"
          >
            {/* The "Card" Frame */}
            <div className="relative aspect-[3/4] bg-[#f8f6f3] p-4 md:p-6 shadow-[30px_30px_80px_rgba(0,0,0,0.1)] border border-black/10 transition-transform duration-500 hover:rotate-0 group">
              <div className="relative w-full h-full overflow-hidden bg-white transition-all duration-700 ease-out border border-black/5 group">
                <img 
                  src="/images/jacob-hull.webp" 
                  alt="Jacob Hull" 
                  className="w-full h-full object-cover origin-bottom scale-105 group-hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle texture overlay for editorial feel */}
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('/images/textures/paper-fibers.webp')]" />
              </div>
              
              {/* Card Label / Label "Sticker" */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white py-4 px-8 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] block mb-1">Jacob Hull</span>
                <span className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.2em] opacity-80 block">Riot Games · Producer II</span>
              </div>

              {/* Riot Brand Seal - Separate "Stamp" */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 12 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -top-6 -right-6 w-14 h-14 bg-white rounded-full shadow-[10px_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center p-0.5 border border-black/5 z-20 hover:scale-110 transition-transform duration-300 pointer-events-auto"
              >
                <img 
                  src="/images/logos/riot-games.webp" 
                  alt="Riot Games" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Decorative Numbering */}
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold opacity-10">
                01 // PRTL_2026
              </div>
            </div>
            
            {/* Geometric shadow elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/5 -skew-x-6 -z-10 transition-transform duration-1000 group-hover:translate-x-2 group-hover:translate-y-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
