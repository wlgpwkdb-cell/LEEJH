import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../constants';
import { Play } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './Works';

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className={`${project.aspectRatio || 'aspect-video'} bg-zinc-100 relative overflow-hidden`}>
        <img 
          src={project.image || `https://picsum.photos/seed/${project.title}/800/450`} 
          alt={project.title}
          className={`w-full h-full ${project.aspectRatio ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-black shadow-lg">
            <Play fill="currentColor" size={20} />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xl font-bold text-zinc-900 mb-1">{project.title}</h4>
          <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 rounded-md bg-zinc-100 text-[11px] font-bold text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const KeyProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const keyProjects = PORTFOLIO_PROJECTS.filter(p => p.category === "Key Project");

  if (keyProjects.length === 0) return null;

  return (
    <section id="key-projects" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h3 className="text-4xl font-bold tracking-tight">Key Projects</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {keyProjects.map((project, i) => (
            <div key={project.title}>
              <ProjectCard 
                project={project} 
                index={i} 
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default KeyProjects;
