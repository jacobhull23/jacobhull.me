import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { WRITINGS } from '../../constants';
import WritingCard from './WritingCard';

export default function WritingList() {
  return (
    <section id="writing" className="py-32 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Publications</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">Articles</h3>
          </div>
          <div className="hidden md:block">
            <Link to="/archive">
              <Button className="rounded-none bg-primary text-white hover:bg-foreground hover:text-white font-bold uppercase tracking-[0.2em] text-xs h-14 px-10 transition-all cursor-pointer shadow-xl">
                Full Archive
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {WRITINGS.map((writing) => (
            <WritingCard key={writing.id} writing={writing} />
          ))}
        </div>

        <div className="md:hidden">
          <Link to="/archive">
            <Button 
              className="w-full h-14 rounded-none bg-primary text-white hover:bg-foreground hover:text-white font-bold uppercase tracking-[0.2em] text-xs transition-all cursor-pointer shadow-xl"
            >
              Full Archive
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
