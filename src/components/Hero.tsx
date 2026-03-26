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
          <p className="text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-2xl whitespace-pre-line">
            콘텐츠의 ‘재미’와 ‘성과’를 동시에 설계하는 <span className="font-extrabold text-black">영상 기획자</span>{"\n"}
            브랜드 메시지부터 실행, 성과까지 연결되는 콘텐츠 구조를 만듭니다
          </p>
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
