import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Experience } from '../../types';
import { cn } from '../../lib/utils';

interface ExperienceItemProps {
  exp: Experience;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp }) => {
  return (
    <motion.div 
      key={exp.id}
      {...fadeIn}
      className="group relative pl-8 md:pl-12 border-l-2 border-primary/10 hover:border-primary transition-colors pb-10 last:pb-0"
      whileInView="active"
      whileHover="active"
      viewport={{ margin: "-30% 0px -30% 0px" }}
    >
      <motion.div 
        className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary transition-colors duration-300"
        variants={{
          active: { backgroundColor: '#fb5057' }
        }}
      />
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 mb-3">
        <div className="flex items-center gap-4">
          {exp.logoUrl && (
            <div className={cn(
              "h-12 w-12 shrink-0 flex items-center justify-center overflow-hidden",
              exp.company === 'Riot Games' && "rounded-full"
            )}>
              <img 
                loading="lazy"
                decoding="async"
                src={exp.logoUrl} 
                alt={`${exp.company} logo`}
                className={cn(
                  "max-h-full max-w-full object-contain",
                  exp.company === 'KPV LAB' && "mix-blend-multiply"
                )}
                style={exp.company === 'Riot Games' ? { clipPath: 'circle(45%)' } : {}}
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          <div>
            <h4 className="text-2xl font-display font-bold uppercase tracking-tight">{exp.company}</h4>
            <div className="text-primary font-bold uppercase tracking-widest text-[10px]">{exp.role}</div>
          </div>
        </div>
        <motion.div
          variants={{
            active: { backgroundColor: '#fb5057', color: '#ece5de', borderColor: '#fb5057' }
          }}
          className="rounded-none font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-primary/10 bg-primary/5 text-primary/80 shrink-0 transition-colors duration-300 flex items-center justify-center"
        >
          {exp.period}
        </motion.div>
      </div>
      <p className="text-foreground/75 mb-4 max-w-2xl font-medium leading-relaxed">
        {exp.description}
      </p>
      {/* Detail bullets stay available but collapsed: the Approach section and
          project banners carry the headline story. */}
      <details className="group/details max-w-2xl">
        <summary className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-foreground/70 hover:text-primary cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
          Key contributions
          <ChevronDown className="h-3 w-3 transition-transform group-open/details:rotate-180" />
        </summary>
        <div className="grid grid-cols-1 gap-y-3 pt-4">
          {exp.achievements.map((achievement, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm">
              <div className="mt-1.5 h-1.5 w-1.5 bg-primary/40 shrink-0" />
              <span className="opacity-80 leading-relaxed">{achievement}</span>
            </div>
          ))}
        </div>
      </details>
      {exp.link && (
        <div className="mt-4 pt-4 border-t border-primary/5">
          <Link 
            to={exp.link.url}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all group/link"
          >
            {exp.link.text}
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceItem;
