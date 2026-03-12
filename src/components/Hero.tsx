import React from 'react';
import { motion } from 'motion/react';
import { HERO_CONTENT } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#f5f5f4]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-black/40 mb-6">
            {HERO_CONTENT.title}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-10 whitespace-nowrap">
            {HERO_CONTENT.name}
          </h1>
          <p className="text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-2xl">
            데이터로 설득하고 콘텐츠 포맷으로 브랜딩하는 <span className="font-extrabold text-black">콘텐츠 디렉터</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="aspect-[16/9] bg-zinc-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <img 
              src="https://picsum.photos/seed/director/1600/900" 
              alt="Lee Ji Hye"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </motion.div>
      </div>
      
      {/* Background Rail Text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
        <span className="text-[20vh] font-bold text-black/[0.02] whitespace-nowrap select-none uppercase tracking-tighter" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Video Strategist
        </span>
      </div>
    </section>
  );
};

export default Hero;
