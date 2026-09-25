import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { cn } from '../../lib/utils';

interface CompactProjectCardProps {
  project: Project;
}

// Smaller sibling of ProjectCard for secondary projects: same image, colour
// overlay and typography, sized to sit two-up instead of filling the screen.
const CompactProjectCard: React.FC<CompactProjectCardProps> = ({ project }) => {
  const projectColor = project.color || '#fb5057';

  return (
    <motion.article
      className="group relative min-h-[420px] md:min-h-[520px] flex overflow-hidden border-b md:border-b-0 border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {project.studioLogoUrl && (
        <div className="absolute top-6 md:top-10 right-6 md:right-10 z-20 flex flex-col items-center gap-1 md:gap-2">
          <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.3em] text-white/40 md:group-hover:text-white/60 transition-colors">Produced At</span>
          <img
            loading="lazy"
            decoding="async"
            src={project.studioLogoUrl}
            alt={project.studio ? `${project.studio} logo` : ''}
            className={cn(
              "h-6 md:h-10 w-auto object-contain transition-all duration-500",
              project.studioLogoUrl.includes('/logos/kpv-lab')
                ? "mix-blend-multiply opacity-30 md:group-hover:opacity-100"
                : "grayscale brightness-200 opacity-40 md:group-hover:opacity-100"
            )}
          />
        </div>
      )}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={project.imageUrl}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] ease-out scale-110 group-hover:scale-100 grayscale hover:grayscale-0"
        />
        <div
          className="absolute inset-0 opacity-60 md:opacity-80 transition-opacity duration-700 md:group-hover:opacity-40"
          style={{ backgroundColor: projectColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151927] via-[#151927]/60 to-transparent opacity-90 md:opacity-70" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 py-12 md:py-16 flex flex-col justify-end">
        <div className="mb-6">
          <span className="inline-flex items-center justify-center h-8 px-4 bg-primary border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg leading-none">
            {project.year}
          </span>
        </div>
        <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white drop-shadow-2xl break-words mb-4">
          {project.title}
        </h3>
        <div className="text-white font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
          {project.role} {project.focusArea && <span className="opacity-60 font-medium">· {project.focusArea}</span>}
        </div>
        <p className="text-white/80 md:text-white/90 leading-relaxed text-sm md:text-base font-medium max-w-xl">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
};

export default CompactProjectCard;
