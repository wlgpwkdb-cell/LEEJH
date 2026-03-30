import React, { useState, useEffect } from 'react';
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

const DietdayChart = () => {
  const metrics = [
    { 
      label: '3초 유지율', 
      valA: '40%', 
      valB: '50~60%', 
      heightA: 40, 
      heightB: 60, 
      badge: '+10~20%p ↑' 
    },
    { 
      label: '5초 유지율', 
      valA: '25%', 
      valB: '40%', 
      heightA: 25, 
      heightB: 40, 
      badge: '+15%p ↑' 
    },
    { 
      label: 'CTR', 
      valA: '1.0%', 
      valB: '1.5%', 
      heightA: 15, 
      heightB: 25, 
      badge: '약 1.5배 ↑' 
    },
    { 
      label: 'CVR', 
      valA: '2.0%', 
      valB: '2.6~3.0%', 
      heightA: 20, 
      heightB: 35, 
      badge: '약 1.3~1.5배 ↑' 
    },
    { 
      label: 'ROAS', 
      valA: '100~200%', 
      valB: '최대 800%', 
      heightA: 30, 
      heightB: 80, 
      badge: '약 8배 ↑',
      isRoas: true
    },
  ];

  return (
    <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-black/5 shadow-sm mt-6 overflow-x-auto" style={{ height: '437.5px' }}>
      <div className="min-w-[700px] relative flex items-end justify-between px-8 pb-12 border-b border-[#545e6b]/30" style={{ height: '302px' }}>
        {metrics.map((m, idx) => (
          <div key={m.label} className="flex flex-col items-center flex-1 relative">
            {/* Badge */}
            {m.badge && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="absolute -top-12 z-10"
              >
                <div className="bg-[#48bb78] text-white text-[11px] font-bold px-4 py-1.5 rounded-lg whitespace-nowrap shadow-sm">
                  {m.badge}
                </div>
              </motion.div>
            )}

            {/* Bars Container */}
            <div className="flex items-end gap-2 mb-2 h-48 relative">
              {/* Bar A */}
              <div className="flex flex-col items-center h-full justify-end">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${m.heightA}%` }}
                  className="w-10 sm:w-12 bg-[#545e6b] rounded-t-sm"
                />
              </div>
              {/* Bar B */}
              <div className="flex flex-col items-center h-full justify-end relative">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${m.heightB}%` }}
                  className="w-10 sm:w-12 bg-[#48bb78] rounded-t-sm"
                />
              </div>
            </div>

            {/* Label */}
            <div className="absolute -bottom-10 whitespace-nowrap">
              <span className="text-[13px] font-bold text-[#545e6b]">{m.label}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex justify-center gap-8" style={{ height: '17.5px', paddingTop: '0px', marginTop: '34px' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 bg-[#545e6b] rounded-sm" />
          <span className="text-[11px] font-bold text-[#545e6b]/60 uppercase tracking-widest">A (기존)</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 bg-[#48bb78] rounded-sm" />
          <span className="text-[11px] font-bold text-[#48bb78]/60 uppercase tracking-widest">B (개선)</span>
        </div>
      </div>
    </div>
  );
};

const DietdaySpecialLayout = ({ project }: { project: Project }) => {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-8 space-y-12">
        {/* ROAS Highlight */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-emerald-900 tracking-tighter mb-1">
              ROAS 100~200% <span className="text-emerald-400 mx-2">→</span> ROAS <span className="text-emerald-600">800%</span>
            </h3>
            <p className="text-sm text-emerald-700/60 font-medium italic">광고 효율이 아니라 시청 구조를 바꿨습니다</p>
          </div>
        </div>

        {/* Problem Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🧐</span>
            <h3 className="text-xl font-black tracking-tight">CONTEXT & PROBLEM</h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[17px] text-black/60 leading-relaxed font-medium whitespace-pre-line">
                기존 광고 구조는 전형적인 제품 광고로{"\n"}
                과장된 결과와 제품 효과 중심의 빠른 설득 구조로 제작되었습니다.{"\n"}
                하지만 데이터는 전혀 다르게 말하고 있었습니다.
              </p>
              <ul className="space-y-2">
                {['3초 이탈률 60%+', '5초 구간 유지율 급락', '핵심 메시지 이전 대부분 이탈'].map((t, i) => (
                  <li key={t} className={`flex items-center gap-2 font-bold text-black/80 ${i === 2 ? 'text-[17px]' : 'text-[16px]'}`}>
                    <div className="w-1 h-1 rounded-full bg-red-400" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Approach & Solution */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💡</span>
            <h3 className="text-xl font-black tracking-tight">APPROACH</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">💡</span>
              <h4 className="text-base font-black tracking-tight">기존 광고</h4>
            </div>
            <div className="bg-zinc-50 rounded-[2rem] border border-black/5 h-full" style={{ paddingTop: '32px', paddingBottom: '35px', marginLeft: '0px', height: '555.5px' }}>
              <div className="space-y-6 px-8">
                <p className="text-sm font-bold text-black/80">제품 중심 구조의 콘텐츠</p>
                <div className="aspect-square overflow-hidden rounded-2xl border border-black/5 shadow-sm">
                  <img 
                    src="https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/fef11f41ba077b49ae04a17cf228231aad7dd926/230809_%EC%89%90%EC%9D%B4%ED%81%AC2.png" 
                    alt="접근 방식" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-black/60 whitespace-pre-line" style={{ lineHeight: '28.75px', fontSize: '15px' }}>
                    제품의 장점과 스펙을 중심으로{"\n"}
                    빠르게 정보를 전달하는 방식
                  </p>
                  <p className="font-bold text-black/80" style={{ lineHeight: '28px', fontSize: '14px' }}>
                    👉 제품을 이해시키면 구매로 이어질 것이라는 전제
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">✅</span>
              <h4 className="text-base font-black tracking-tight">해결 전략</h4>
            </div>
            <div className="rounded-[2rem] shadow-xl shadow-emerald-100 h-full" style={{ backgroundColor: '#d5f5d1', paddingTop: '35px', paddingLeft: '30px', paddingBottom: '35px', height: '555.5px' }}>
              <div className="space-y-6 pr-8">
                <p className="text-sm font-bold" style={{ color: '#000000' }}>궁금증 유도형 메시지</p>
                <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                  <img 
                    src="https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/8f3be8aead60330a533bd5546c5b8100afa86a9b/221214_%EB%B0%95%EC%A7%80%EC%9D%80_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_1.jpg" 
                    alt="해결 전략" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="space-y-3">
                  <p className="whitespace-pre-line" style={{ fontSize: '17px', fontWeight: 'bold', lineHeight: '28.75px', color: '#000000' }}>
                    질문형 Hook으로 시작해서{"\n"}
                    생각을 먼저 유도하는 방식
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Results */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📈</span>
            <h3 className="text-xl font-black tracking-tight">RESULT</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-50/50 border border-zinc-100 p-6 rounded-[1.5rem] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <p className="text-[13px] font-bold text-zinc-600"><span className="text-zinc-400 mr-2">기간:</span> 약 2주</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <p className="text-[13px] font-bold text-zinc-600"><span className="text-zinc-400 mr-2">집행 방식:</span> 동일 예산 기준 동시 운영</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <p className="text-[13px] font-bold text-zinc-600"><span className="text-zinc-400 mr-2">목적:</span> 콘텐츠 구조 변화가 성과에 미치는 영향 검증</p>
              </div>
            </div>
            <DietdayChart />
          </div>
        </section>

        {/* Insight */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🍃</span>
            <h3 className="text-xl font-black tracking-tight uppercase">INSIGHT</h3>
          </div>
          <div className="bg-zinc-900 text-white/90 p-8 sm:p-10 rounded-[2.5rem] text-[15px] leading-[1.8] font-medium">
            <div className="space-y-8">
              <p className="text-emerald-400 font-bold text-lg leading-relaxed">
                이번 프로젝트를 통해 확인한 핵심은<br />
                성과를 결정하는 지점이 앞단에 있다는 점이었습니다.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-black text-sm mb-2 uppercase tracking-widest opacity-40">1. 관찰</h4>
                  <p>
                    사용자는 제품 정보를 보기 전에 이미 이탈하고, 정보의 내용이나 설득력보다<br />
                    <span className="text-white font-bold">‘처음 3초 동안 왜 보게 되는가’</span>가 더 큰 영향을 미친다
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-black text-sm mb-2 uppercase tracking-widest opacity-40">2. 분석</h4>
                  <p>
                    기존 광고는 제품을 이해시키는 데 집중했지만<br />
                    실제 사용자는 이해 이전에 <span className="text-white font-bold">“볼 이유”</span>를 먼저 판단한다
                  </p>
                  <p className="mt-2 text-emerald-400 font-bold">
                    👉 설득은 메시지에서 시작되는 것이 아니라 관심이 유지된 상태에서만 작동한다
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-black text-sm mb-2 uppercase tracking-widest opacity-40">3. 결론</h4>
                  <p className="mb-4">
                    광고 성과는 메시지의 질이 아니라 메시지에 도달하는 확률에서 결정된다
                  </p>
                  <p className="text-white font-bold">
                    제품 설명보다 먼저, 사용자가 ‘다음이 궁금해지는 구조’를 만드는 것이 핵심이다
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-emerald-400 font-bold italic" style={{ fontSize: '20px' }}>
                  "초반 시청 유지율은 단순 지표가 아니라 전체 성과를 결정하는 선행 지표다"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column (Sidebar) */}
      <div className="lg:col-span-4 space-y-6">
        {/* Role Card */}
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl">🎯</span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/30">ROLE</h4>
          </div>
          <div className="space-y-6">
            {[
              { label: '기획', value: 100 },
              { label: '촬영', value: 50 },
              { label: '편집', value: 50 }
            ].map(r => (
              <div key={r.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-black/70">{r.label}</span>
                  <span className="text-[10px] font-black text-emerald-500">{r.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${r.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Links Card */}
        <div className="bg-zinc-50 rounded-[2rem] p-8 border border-black/5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">영상 링크</h4>
          <div className="space-y-2">
            {project.links.map((link, i) => (
              <a 
                key={i} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white border border-black/5 hover:border-emerald-200 transition-all group"
              >
                <span className="text-[10px] font-bold text-black/60 group-hover:text-emerald-600">{link.name}</span>
                <ArrowUpRight size={12} className="text-black/20 group-hover:text-emerald-600" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectModal = ({ project, onClose }: { project: Project, onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
        className="bg-white rounded-[3rem] w-full max-w-7xl h-fit shadow-2xl flex flex-col my-auto"
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
          <div className="p-6 sm:p-8 relative">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-600 mb-3 block">{project.category}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">{project.title}</h2>
            <p className="text-sm font-bold text-black/40 uppercase tracking-widest">{project.description}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {project.title.includes('디에트데이') ? (
            <DietdaySpecialLayout project={project} />
          ) : (
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-8">
                {project.category === 'Key Project' ? (
                  <>
                    <section>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-black/20" /> Challenge
                      </h3>
                      <div className="text-lg text-black/80 leading-relaxed font-medium markdown-content">
                        <Markdown remarkPlugins={[remarkBreaks]}>{project.challenge}</Markdown>
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
                  </>
                ) : (
                  <>
                    <section>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-black/20" /> Context
                      </h3>
                      <div className="text-lg text-black/80 leading-relaxed font-medium markdown-content">
                        <Markdown remarkPlugins={[remarkBreaks]}>{project.challenge || project.intent}</Markdown>
                      </div>
                    </section>

                    <section>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                        <div className="w-4 h-[1px] bg-black/20" /> Approach
                      </h3>
                      <div className="space-y-6">
                        {project.approach && (
                          <div className="text-lg text-black/80 leading-relaxed font-medium markdown-content">
                            <Markdown remarkPlugins={[remarkBreaks]}>{project.approach}</Markdown>
                          </div>
                        )}
                        {project.execution && (
                          <ul className="space-y-4">
                            {project.execution.map((item, i) => (
                              <li key={i} className="flex items-start gap-4 text-black/90 font-bold text-base">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </section>
                  </>
                )}

                <section>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-black/20" /> Impact
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

                {project.insight && (
                  <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                      <div className="w-4 h-[1px] bg-black/20" /> Insight
                    </h3>
                    <div className="bg-[#f8fafc] p-6 rounded-[1.25rem] border border-black/5 text-[0.925rem] font-bold text-[#065f46] leading-relaxed markdown-content">
                      <Markdown remarkPlugins={[remarkBreaks]}>{project.insight}</Markdown>
                    </div>
                  </section>
                )}

                <section>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                    <div className="w-4 h-[1px] bg-black/20" /> Role
                  </h3>
                  <div className="space-y-6">
                    {(project.category === 'Key Project' || ['KBS 2TV <아침>', 'NAVER LIVE', '채널A'].includes(project.title)) && (
                      <div className="text-[0.925rem] font-bold text-black/80 leading-relaxed markdown-content px-2">
                        <Markdown remarkPlugins={[remarkBreaks]}>{project.role}</Markdown>
                      </div>
                    )}
                    <div className="bg-[#f8fafc] p-8 rounded-[1.25rem] border border-black/5">
                      <RoleGraph breakdown={project.roleBreakdown} title={project.title} />
                    </div>
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
          )}
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
    <section id="works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-20">
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

