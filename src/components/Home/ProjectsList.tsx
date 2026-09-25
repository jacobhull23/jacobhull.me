import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../../constants';
import ProjectCard from './ProjectCard';
import CompactProjectCard from './CompactProjectCard';

const featuredProjects = PROJECTS.filter((p) => !p.compact);
const compactProjects = PROJECTS.filter((p) => p.compact);

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface ProjectsListProps {
  onWatchPreview: (url: string) => void;
}

export default function ProjectsList({ onWatchPreview }: ProjectsListProps) {
  return (
    <section id="projects" className="py-0 overflow-hidden bg-[#151927]">
      <motion.div 
        className="flex flex-col w-full"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {featuredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onWatchPreview={onWatchPreview} 
          />
        ))}
      </motion.div>

      {compactProjects.length > 0 && (
        <div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">More Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {compactProjects.map((project) => (
              <CompactProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
