import React from 'react';
import { EXPERIENCES } from '../../constants';
import ExperienceItem from './ExperienceItem';

export default function ExperienceList() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background border-y">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div>
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Career Path</h2>
              </div>
              <h3 className="text-5xl font-display font-bold uppercase tracking-tighter mb-8">Experience <br />& Impact</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                A decade of leading projects across AAA games, live service platforms, and early-stage products — from concept through launch and live operations.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {EXPERIENCES.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
