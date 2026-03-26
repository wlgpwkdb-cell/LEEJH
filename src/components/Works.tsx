import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, IMPACT_STATS } from '../constants';
import { ExternalLink, Play, Youtube, Instagram, X, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const RoleGraph = ({ breakdown, title }: { breakdown: any, title?: string }) => {
  if (!breakdown) return null;
  const items = [
    { label: '기획', value: breakdown.planning, color: 'bg-emerald-500' },
    { label: (title === '덕분TV' || title === '퇴근하GO' || title === '대명 아임레디') ? '연출' : '촬영', value: breakdown.filming, color: 'bg-blue-500' },
    { label: '편집', value: breakdown.editing, color: 'bg-purple-500' },
  ].filter(item => !(title === '대명 아임레디' && item.label === '편집'));

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.label}>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1.5">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`h-full ${item.color}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProjectModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        className="bg-white rounded-[3rem] w-full max-w-5xl h-fit shadow-2xl flex flex-col my-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Section - Top Image for 16:9 Video feel */}
        <div className="flex flex-col border-b border-black/5 shrink-0">
          <div className={`w-full bg-zinc-100 relative overflow-hidden ${project.aspectRatio || 'aspect-video'}`}>
            <img 
              src={project.image || `https://picsum.photos/seed/${project.title}/800/800`} 
              alt={project.title}
              className={`w-full h-full ${project.aspectRatio ? 'object-contain' : 'object-cover'}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10" />
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-10 border border-white/30"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-8 sm:p-12 relative">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 mb-3 block">{project.category}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">{project.title}</h2>
            <p className="text-sm font-bold text-black/40 uppercase tracking-widest">{project.description}</p>
          </div>
        </div>

        <div className="p-8 sm:p-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-12">
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-black/20" /> {project.challenge ? 'Challenge' : '기획 의도 및 내용'}
                </h3>
                <div className="text-lg text-black/80 leading-relaxed font-medium markdown-content">
                  <Markdown remarkPlugins={[remarkBreaks]}>{project.challenge || project.intent}</Markdown>
                </div>
              </section>

              {project.approach && (
                <section>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-black/20" /> Approach
                  </h3>
                  <div className="text-lg text-black/80 leading-relaxed font-medium markdown-content">
                    <Markdown remarkPlugins={[remarkBreaks]}>{project.approach}</Markdown>
                  </div>
                </section>
              )}

              {project.execution && (
                <section>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-black/20" /> Execution
                  </h3>
                  <ul className="space-y-4">
                    {project.execution.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-black/90 font-bold text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-black/20" /> {project.impact ? 'Impact' : '주요 성과'}
                </h3>
                <ul className="space-y-4">
                  {(project.impact || project.results).map((res, i) => (
                    <li key={i} className="flex items-start gap-4 text-black/90 font-bold text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      {res}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-black/20" /> Role
                </h3>
                <div className="space-y-6">
                  {(['KBS 2TV <아침>', 'NAVER LIVE', '채널A'].includes(project.title) || project.title === '디에트데이 (Dietday)') && (
                    <div className="text-sm font-bold text-black/80 leading-relaxed markdown-content">
                      <Markdown remarkPlugins={[remarkBreaks]}>{project.role}</Markdown>
                    </div>
                  )}
                  <RoleGraph breakdown={project.roleBreakdown} title={project.title} />
                </div>
              </section>
            </div>

            <div className="lg:col-span-5">
              <div className="p-10 rounded-[2.5rem] bg-zinc-50 border border-black/5">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-8 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-black/20" /> 영상 링크
                </h3>
                <div className="grid gap-3">
                  {project.links.map((link, i) => {
                    const isYoutube = link.url.includes('youtube') || link.url.includes('youtu.be');
                    const isInstagram = link.url.includes('instagram');
                    return (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-5 rounded-2xl bg-white border border-black/5 hover:border-black/20 hover:bg-zinc-50 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                            {isYoutube ? <Youtube size={20} className="text-red-600" /> : isInstagram ? <Instagram size={20} className="text-pink-600" /> : <ExternalLink size={20} className="text-black/40" />}
                          </div>
                          <span className="text-sm font-bold text-black/70 group-hover:text-black">
                            {link.name}
                          </span>
                        </div>
                        <ArrowUpRight size={16} className="text-black/20 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className={`${project.aspectRatio || 'aspect-video'} bg-zinc-100 relative overflow-hidden`}>
        <img 
          src={project.image || `https://picsum.photos/seed/${project.title}/800/450`} 
          alt={project.title}
          className={`w-full h-full ${project.aspectRatio ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-700`}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
            <Play fill="white" size={24} />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-bold tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">{project.title}</h4>
            <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">{project.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags?.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 rounded-lg bg-zinc-100 text-[10px] font-bold text-black/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {PORTFOLIO_CATEGORIES.map((category, index) => {
            const projects = PORTFOLIO_PROJECTS.filter(p => p.category === category);
            if (projects.length === 0) return null;

            return (
              <div key={category} id={category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}>
                <div className="mb-12">
                  {index === 0 && <h2 className="text-sm font-bold tracking-widest uppercase text-black/40 mb-4">Works</h2>}
                  <h3 className="text-4xl font-bold tracking-tight">{category}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, i) => (
                    <ProjectCard 
                      key={project.title} 
                      project={project} 
                      index={i} 
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
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

export default Works;

