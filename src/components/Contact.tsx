import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTION_PROCESS, IMPACT_STATS } from '../constants';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-4">Workflow</h2>
          <h3 className="text-4xl font-bold tracking-tight">Production Process</h3>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
          
          {PRODUCTION_PROCESS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="block font-mono text-5xl font-bold text-white/10 mb-6">{item.step}</span>
              <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div>
              <h2 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-8">Contact</h2>
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email</p>
                    <p className="text-2xl font-bold">wlgpwkdb@hanmail.net</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Phone</p>
                    <p className="text-2xl font-bold">010-3880-9330</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
};
