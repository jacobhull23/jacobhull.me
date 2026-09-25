import React from 'react';
import { motion } from 'motion/react';
import { Play, Globe, Gamepad2, Monitor, Smartphone, Star } from 'lucide-react';
import { Project } from '../../types';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  onWatchPreview: (url: string) => void;
}

const getPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes('pc')) return <Monitor className="h-3 w-3" />;
  if (p.includes('mobile')) return <Smartphone className="h-3 w-3" />;
  return <Gamepad2 className="h-3 w-3" />;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onWatchPreview }) => {
  const projectColor = project.color || '#fb5057';
  
  return (
    <motion.div 
      className="group relative min-h-[60vh] md:min-h-[75vh] w-full flex items-center justify-center overflow-hidden border-b border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Brand Stamp */}
      {project.studioLogoUrl && (
        <div className="absolute top-6 md:top-12 right-6 md:right-12 z-20 flex flex-col items-center gap-1 md:gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 md:group-hover:text-white/90 transition-colors">Produced At</span>
          <img 
            loading="lazy"
            decoding="async"
            src={project.studioLogoUrl} 
            alt={project.studio ? `${project.studio} logo` : ''} 
            className={cn(
              "h-6 md:h-12 w-auto object-contain transition-all duration-500",
              project.studioLogoUrl.includes('/logos/kpv-lab') 
                ? "mix-blend-multiply opacity-30 md:group-hover:opacity-100" 
                : "grayscale brightness-200 opacity-40 md:group-hover:opacity-100"
            )}
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={project.imageUrl}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[2s] ease-out scale-110 group-hover:scale-100 grayscale hover:grayscale-0"
        />
        {/* Color Overlay */}
        <div 
          className="absolute inset-0 opacity-60 md:opacity-80 transition-opacity duration-700 md:group-hover:opacity-40"
          style={{ backgroundColor: projectColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151927] via-[#151927]/60 to-transparent opacity-90 md:opacity-60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center py-16 md:py-20">
        <div className="max-w-3xl relative">
          {/* Tags */}
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center justify-center h-8 px-4 bg-primary border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg leading-none">
                  {project.year}
                </span>
                {project.status && (
                  <span className="flex items-center justify-center h-8 px-4 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-white leading-none">
                    {project.status}
                  </span>
                )}
                {project.criticScore && (
                  <motion.a 
                    href={project.criticUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center h-8 gap-3 px-4 bg-[#1d2333]/80 backdrop-blur-md border border-white/20 shadow-2xl hover:bg-[#1d2333] hover:border-white/40 transition-all cursor-pointer group/score"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 group-hover/score:text-white transition-colors leading-none">OpenCritic</span>
                    </div>
                    <div className="h-3 w-px bg-white/20" />
                    <span className="text-sm font-display font-bold text-white leading-none">{project.criticScore}</span>
                  </motion.a>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.platforms?.map((platform) => (
                  <span 
                    key={platform}
                    className="flex items-center justify-center h-8 px-4 bg-white/5 backdrop-blur-sm border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 gap-2 leading-none"
                  >
                    {getPlatformIcon(platform)}
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Logo / Title */}
          <div className="mb-8 min-h-[100px] md:min-h-[140px] flex flex-col justify-center">
            {project.gameLogoUrl ? (
              <div className="h-24 md:h-40 flex items-center">
                <h2 className="sr-only">{project.title}</h2>
                {project.useColorForLogo ? (
                  <div 
                    style={{ 
                      backgroundColor: projectColor,
                      maskImage: `url(${project.gameLogoUrl})`,
                      WebkitMaskImage: `url(${project.gameLogoUrl})`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'left center',
                      WebkitMaskPosition: 'left center',
                      transform: `scale(${project.logoScale || 1})`,
                      transformOrigin: 'left center'
                    } as React.CSSProperties}
                    className="h-full w-full max-w-full md:max-w-[700px]"
                    aria-hidden="true"
                  />
                ) : (
                  <img 
                    loading="lazy"
                    decoding="async"
                    src={project.gameLogoUrl} 
                    alt="" 
                    style={{ transform: `scale(${project.logoScale || 1})` }}
                    className={cn(
                      "h-full w-auto max-w-full md:max-w-[550px] object-contain object-left origin-left drop-shadow-2xl",
                      project.invertLogo && "md:brightness-0 md:invert"
                    )}
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            ) : (
              <h2 
                className="text-4xl md:text-8xl font-display font-bold uppercase tracking-tighter text-white transition-all duration-300 drop-shadow-2xl md:group-hover:opacity-80 break-words"
              >
                {project.title}
              </h2>
            )}
          </div>

          <div className="flex flex-col mb-4 md:mb-6">
            <div className="text-white font-bold uppercase tracking-widest text-xs md:text-base">
              {project.role} {project.focusArea && <span className="opacity-60 font-medium">· {project.focusArea}</span>}
            </div>
          </div>

          <p className="text-white/80 md:text-white/90 leading-relaxed text-sm md:text-lg font-medium mb-8 max-w-2xl">
            {project.description}
          </p>

          {/* Links */}
          {(project.videoUrl || project.websiteUrl) && (
            <div className="flex flex-wrap gap-4">
              {project.videoUrl && (
                <motion.button
                  onClick={() => onWatchPreview(project.videoUrl!)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-xl group/btn cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Watch Preview</span>
                </motion.button>
              )}
              {project.websiteUrl && (
                <motion.a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#151927] md:bg-white text-white md:text-[#151927] hover:bg-[#151927]/90 md:hover:bg-white/90 text-xs font-bold uppercase tracking-widest transition-all shadow-xl group/btn cursor-pointer"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Official Site</span>
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
