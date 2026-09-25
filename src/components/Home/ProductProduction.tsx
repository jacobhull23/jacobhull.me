import React from 'react';
import { motion } from 'motion/react';
import { CAPABILITIES } from '../../constants';

// Bridges game production and product management for readers from either
// side: each capability is phrased in PM terms and tagged with where it
// was done.
export default function ProductProduction() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-12 md:mb-16 items-end">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">How I Work</h2>
            </div>
            <h3 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
              Product <span className="text-primary">×</span> <br />Production
            </h3>
          </div>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/75 max-w-2xl">
            In games, the producer often owns the decisions a tech company gives its product manager: what to build, in what order, and how the team ships it. My roles have always covered both.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-l border-foreground/10">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col p-8 border-r border-b border-foreground/10 hover:bg-primary/5 transition-colors duration-300"
            >
              <span className="font-mono text-xs font-bold text-primary mb-6" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="text-xl font-display font-bold uppercase tracking-tight leading-tight mb-4">{cap.title}</h4>
              <p className="text-foreground/75 font-medium leading-relaxed mb-6 flex-grow">{cap.description}</p>
              <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/70">{cap.evidence}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
