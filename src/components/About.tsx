import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_CONTENT, CORE_EXPERTISE } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold tracking-widest uppercase text-black/40 mb-4">About</h2>
            <h3 className="text-3xl font-bold tracking-tight leading-tight">
              Designing Sustainable <br />
              <span className="text-emerald-600">Content IP</span>
            </h3>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl font-medium leading-relaxed text-black/80 mb-10 whitespace-pre-line">
              {ABOUT_CONTENT.bio}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {ABOUT_CONTENT.tasks.map((task, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-black/5"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-bold tracking-tight text-sm">{task}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-black/40 mb-4">Core Competencies</h2>
          <h3 className="text-3xl font-bold tracking-tight">Core Competencies</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {CORE_EXPERTISE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="font-mono text-lg font-bold">0{i + 1}</span>
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight whitespace-pre-line">{exp.title}</h4>
              <p className="text-black/60 mb-6 leading-relaxed whitespace-pre-line">{exp.description}</p>
              <div className="space-y-3">
                {exp.projects.map((p, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm font-medium text-black/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
