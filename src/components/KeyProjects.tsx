import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROJECTS } from '../constants';
import { Play } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './Works';

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-[3rem] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className={`${project.aspectRatio || 'aspect-video'} bg-zinc-100 relative overflow-hidden`}>
        <img 
          src={project.image || `https://picsum.photos/seed/${project.title}/800/450`} 
          alt={project.title}
          className={`w-full h-full ${project.aspectRatio ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-700`}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
            <Play fill="white" size={24} />
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h4 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-emerald-600 transition-colors">{project.title}</h4>
            <p className="text-sm font-bold text-black/40 uppercase tracking-widest">{project.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag, i) => {
            const isLarge = ['ROAS 800%', '조회수 10만+', '팔로워 1만'].includes(tag);
            return (
              <span 
                key={i} 
                className={`px-3 py-1.5 rounded-xl font-bold ${isLarge ? 'bg-emerald-500 text-white text-sm' : 'bg-zinc-100 text-[11px] text-black/60'}`}
              >
                {tag}
              </span>
            );
          })}
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

        <div className="grid lg:grid-cols-3 gap-10">
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
