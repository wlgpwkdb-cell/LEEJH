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
    { label: (title === '덕분TV' || title === '퇴근하GO' || title === '대명 아임레디' || title === 'KIA') ? '연출' : '촬영', value: breakdown.filming, color: 'bg-blue-500' },
    { label: '편집', value: breakdown.editing, color: 'bg-purple-500' },
  ].filter(item => item.value > 0);

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.label} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-bold text-black/70">{item.label}</span>
            <span className="text-[10px] font-black text-emerald-500">{item.value}%</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-emerald-500 rounded-full"
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
      badge: '+10~20% ↑' 
    },
    { 
      label: '5초 유지율', 
      valA: '25%', 
      valB: '40%', 
      heightA: 25, 
      heightB: 40, 
      badge: '+15% ↑' 
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
    <div className="bg-white rounded-[2rem] p-4 sm:p-10 border border-black/5 shadow-sm mt-6 overflow-hidden">
      <div className="w-full relative flex items-end justify-between px-2 sm:px-8 pb-12 border-b border-[#545e6b]/30 min-h-[200px] sm:min-h-[302px]">
        {metrics.map((m, idx) => (
          <div key={m.label} className="flex flex-col items-center flex-1 relative px-1">
            {/* Badge */}
            {m.badge && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="absolute -top-14 sm:-top-12 z-10"
              >
                <div className="bg-[#48bb78] text-white text-[9px] sm:text-[11px] font-bold px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg whitespace-nowrap shadow-sm">
                  {m.badge}
                </div>
              </motion.div>
            )}

            {/* Bars Container */}
            <div className="flex items-end gap-1 sm:gap-2 mb-2 h-32 sm:h-48 relative">
              {/* Bar A */}
              <div className="flex flex-col items-center h-full justify-end">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${m.heightA}%` }}
                  className="w-4 sm:w-8 md:w-10 bg-[#545e6b] rounded-t-sm"
                />
              </div>
              {/* Bar B */}
              <div className="flex flex-col items-center h-full justify-end relative">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${m.heightB}%` }}
                  className="w-4 sm:w-8 md:w-10 bg-[#48bb78] rounded-t-sm"
                />
              </div>
            </div>

            {/* Label */}
            <div className="absolute -bottom-10 text-center w-full">
              <span className="text-[10px] sm:text-[13px] font-bold text-[#545e6b] block leading-tight">{m.label}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex justify-center gap-4 sm:gap-8 pt-0 mt-[34px] min-h-[17.5px]">
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#545e6b] rounded-sm" />
          <span className="text-[9px] sm:text-[11px] font-bold text-[#545e6b]/60 uppercase tracking-widest">A (기존)</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#48bb78] rounded-sm" />
          <span className="text-[9px] sm:text-[11px] font-bold text-[#48bb78]/60 uppercase tracking-widest">B (개선)</span>
        </div>
      </div>
    </div>
  );
};

const DietdaySpecialLayout = ({ project }: { project: Project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column */}
      <div className="lg:col-span-8 space-y-12">
        {/* ROAS Highlight */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-[2rem] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-emerald-900 tracking-tighter mb-1">
              ROAS 100~200% <span className="text-emerald-400 mx-1 sm:mx-2">→</span> ROAS <span className="text-emerald-600">800%</span>
            </h3>
            <p className="text-xs sm:text-sm text-emerald-700/60 font-medium italic">광고 효율이 아니라 시청 구조를 바꿨습니다</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">💡</span>
              <h4 className="text-base font-black tracking-tight">기존 광고</h4>
            </div>
            <div className="bg-zinc-50 rounded-[2rem] border border-black/5 h-full pb-[35px]">
              <div className="space-y-6 px-4 sm:px-8 text-center" style={{ marginTop: '30px' }}>
                <p className="text-xs sm:text-sm font-bold text-black/80">제품 중심 구조의 콘텐츠</p>
                <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm bg-white">
                  <img 
                    src="https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/fef11f41ba077b49ae04a17cf228231aad7dd926/230809_%EC%89%90%EC%9D%B4%ED%81%AC2.png" 
                    alt="접근 방식" 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-black/60 whitespace-pre-line text-sm sm:text-[15px] leading-relaxed">
                    제품의 장점과 스펙을 중심으로{"\n"}
                    빠르게 정보를 전달하는 방식
                  </p>
                  <p className="font-bold text-black/80 text-xs sm:text-[14px] leading-normal">
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
            <div className="rounded-[2rem] h-full bg-[#d5f5d1] pb-[35px]">
              <div className="space-y-6 px-4 sm:px-8 text-center" style={{ marginTop: '0px', paddingTop: '30px' }}>
                <p className="text-xs sm:text-sm font-bold" style={{ color: '#000000' }}>궁금증 유도형 메시지</p>
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-white">
                  <img 
                    src="https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/8f3be8aead60330a533bd5546c5b8100afa86a9b/221214_%EB%B0%95%EC%A7%80%EC%9D%80_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_1.jpg" 
                    alt="해결 전략" 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="space-y-3">
                  <p className="whitespace-pre-line font-bold text-[#000000] text-base sm:text-[19px] leading-relaxed pt-4">
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
          <div className="bg-zinc-900 text-white/90 p-6 sm:p-8 lg:p-10 rounded-[2.5rem] text-[14px] sm:text-[15px] leading-[1.8] font-medium space-y-8">
            <p className="text-emerald-400 font-bold text-lg">
              이번 프로젝트를 통해 확인한 핵심은<br />
              성과를 결정하는 지점이 앞단에 있다는 점이었습니다.
            </p>

            <div className="space-y-8">
              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">1. 관찰</h4>
                <p className="text-white/70">
                  사용자는 제품 정보를 보기 전에 이미 이탈하고, 정보의 내용이나 설득력보다<br />
                  <span className="text-white font-bold">‘처음 3초 동안 왜 보게 되는가’</span>가 더 큰 영향을 미친다
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">2. 분석</h4>
                <p className="text-white/70">
                  기존 광고는 제품을 이해시키는 데 집중했지만<br />
                  실제 사용자는 이해 이전에 <span className="text-white font-bold">“볼 이유”</span>를 먼저 판단한다
                </p>
                <p className="text-emerald-400 font-bold">
                  👉 설득은 메시지에서 시작되는 것이 아니라 관심이 유지된 상태에서만 작동한다
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">3. 결론</h4>
                <p className="text-white/70">
                  광고 성과는 메시지의 질이 아니라 메시지에 도달하는 확률에서 결정된다
                </p>
                <p className="text-white font-bold">
                  제품 설명보다 먼저, 사용자가 ‘다음이 궁금해지는 구조’를 만드는 것이 핵심이다
                </p>
                <p className="text-lg font-bold text-white mt-6 pt-6 border-t border-white/10 text-center italic">
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

const DukbunSpecialLayout = ({ project }: { project: Project }) => {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-12">
        <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-black text-blue-900 tracking-tighter mb-1">
              파일럿 예능 포맷을 별도로 설계 및 검증한 프로젝트
            </h3>
            <p className="text-sm text-blue-700/60 font-medium italic">기존 콘텐츠는 유지하면서 새로운 포맷을 실험적으로 병행 운영</p>
          </div>
        </div>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🧐</span>
            <h3 className="text-xl font-black tracking-tight">CONTEXT & PROBLEM</h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[17px] text-black/60 leading-relaxed font-medium whitespace-pre-line">
                기존 덕분TV는 무속인을 인터뷰하며 '띠별 운세', '재물운' 등을 전달하는{"\n"}
                전형적인 정보 전달형 콘텐츠에 집중되어 있었습니다.{"\n"}
                이로 인해 콘텐츠 형식이 반복되며 흥미도와 몰입도가 제한적이었습니다.
              </p>
              <ul className="space-y-2">
                {['무속인 인터뷰 기반', '콘텐츠 형식 반복', '시청 흐름 단조로움'].map((t, i) => (
                  <li key={t} className="flex items-center gap-2 font-bold text-black/80 text-[16px]">
                    <div className="w-1 h-1 rounded-full bg-red-400" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💡</span>
            <h3 className="text-xl font-black tracking-tight">APPROACH</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">💡</span>
                <h4 className="text-base font-black tracking-tight">기존 콘텐츠</h4>
              </div>
              <div className="bg-zinc-50 rounded-[2rem] border border-black/5 h-full p-6 sm:p-8 space-y-6 text-center min-h-[350px] sm:min-h-[456.625px]">
                <p className="text-sm font-bold text-black/80">정보 전달형 인터뷰</p>
                <div className="aspect-video overflow-hidden rounded-2xl border border-black/5 shadow-sm">
                  <img 
                    src="https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/af1bc542509c2151e99579711ff1b6e9f69689c6/2.png" 
                    alt="기존 콘텐츠" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-black/60 text-[15px] leading-relaxed whitespace-pre-line text-center">
                    무속인의 해석과 지식을 기반으로 정보를{"\n"}
                    전달하는 인터뷰 포맷{"\n\n"}
                    <span className="font-bold text-black/80">👉 단순 질의응답 중심의 운세 정보 전달 방식</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✅</span>
                <h4 className="text-base font-black tracking-tight">파일럿 프로그램</h4>
              </div>
              <div className="rounded-[2rem] h-full p-6 sm:p-8 space-y-6 bg-blue-100 text-center min-h-[350px] sm:min-h-[456.625px]">
                <p className="text-sm font-bold text-black">토론형 웹예능 포맷</p>
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                  <img src="https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/1e5ba6b1f6af3d1a74e3525651e0f9c31a756f77/2026033331_102019.png" alt="파일럿 프로그램" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-black/80 text-[15px] leading-relaxed whitespace-pre-line text-center">
                    기존 콘텐츠는 유지하면서 완전히 다른 소비 경험을 제공하는 포맷을 별도로 설계{"\n\n"}
                    <span className="font-bold text-black">
                      👉 무속인을 ‘전문가 패널’로 전환{"\n"}
                      👉 다자 토크 구조{"\n"}
                      👉 상호작용 기반 스토리 전개
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📈</span>
            <h3 className="text-xl font-black tracking-tight">RESULT</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-50/50 border border-zinc-100 p-6 rounded-[1.5rem] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <p className="text-[13px] font-bold text-zinc-600"><span className="text-zinc-400 mr-2">기획 및 제작 기간:</span> 2달</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <p className="text-[13px] font-bold text-zinc-600"><span className="text-zinc-400 mr-2">제작 편수:</span> 2편</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                <p className="text-[13px] font-bold text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mr-2">주제:</span> 범죄자 사주, 사회적 이슈 등 의견 충돌이 가능한 주제 선정{"\n"}
                  <span className="text-blue-500 block mt-1">→ 무속인 간 해석 차이를 활용하여 토론 구조 형성 및 긴장감 확보</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <p className="text-[13px] font-bold text-zinc-600"><span className="text-zinc-400 mr-2">MC:</span> 개그맨 MC 섭외로 콘텐츠 진입 장벽 완화 + 대중성 확보</p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-black/5 shadow-sm">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">주요 성과</h4>
              <div className="overflow-hidden rounded-xl border border-zinc-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50/50">
                      <th className="px-4 py-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">항목</th>
                      <th className="px-4 py-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">결과</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { label: '조회수', value: '10만+' },
                      { label: '콘텐츠 반응', value: '기존 대비 높은 몰입도' },
                      { label: '포맷 확장성', value: '후속 콘텐츠 제작으로 검증' },
                      { label: '채널 영향', value: '콘텐츠 방향성 변화 기여' }
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 text-[13px] font-bold text-zinc-500 bg-zinc-50/30 w-1/3">{row.label}</td>
                        <td className="px-4 py-3 text-[13px] font-bold text-black/80">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🍃</span>
            <h3 className="text-xl font-black tracking-tight uppercase">INSIGHT</h3>
          </div>
          <div className="bg-zinc-900 text-white/90 p-6 sm:p-8 lg:p-10 rounded-[2.5rem] text-[14px] sm:text-[15px] leading-[1.8] font-medium space-y-8">
            <p className="text-blue-400 font-bold text-lg">
              이번 프로젝트를 통해 확인한 핵심은<br />
              콘텐츠의 차별화는 메시지가 아니라 기획 단계에서 결정된다는 점이었습니다.
            </p>
            <div className="space-y-8">
              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">1. 관찰</h4>
                <p className="text-white/70">
                  기존 콘텐츠는 동일한 소재를 반복적으로 활용하고 있었지만<br />
                  포맷이 고정되면서 새로운 경험을 만들지 못하고 있었습니다
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">2. 분석</h4>
                <p className="text-white/70">
                  콘텐츠의 경쟁력은 무엇을 다루느냐보다<br />
                  어떤 형식으로 풀어내느냐에서 발생합니다
                </p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2 mt-4">
                  <p className="text-sm font-bold text-blue-300 mb-2">동일한 무속이라는 소재도 완전히 다른 소비 경험을 만든다</p>
                  <p className="text-sm">👉 인터뷰로 풀면 정보 콘텐츠</p>
                  <p className="text-sm">👉 토론으로 풀면 예능 콘텐츠</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">3. 결론</h4>
                <p className="text-white/70">
                  콘텐츠 기획의 핵심은 새로운 소재를 찾는 것이 아니라<br />
                  같은 소재를 다르게 설계하는 능력입니다
                </p>
                <p className="text-lg font-bold text-white mt-6 pt-6 border-t border-white/10 text-center italic">
                  “차별화는 메시지가 아니라, 포맷을 설계하는 기획에서 시작된다”
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl">🎯</span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/30">ROLE</h4>
          </div>
          <div className="space-y-6">
            {[
              { label: '기획', value: 100 },
              { label: '연출', value: 100 }
            ].map(r => (
              <div key={r.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-black/70">{r.label}</span>
                  <span className="text-[10px] font-black text-blue-500">{r.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${r.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-50 rounded-[2rem] p-8 border border-black/5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">영상 링크</h4>
          <div className="space-y-2">
            {project.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-white border border-black/5 hover:border-blue-200 transition-all group">
                <span className="text-[10px] font-bold text-black/60 group-hover:text-blue-600">{link.name}</span>
                <ArrowUpRight size={12} className="text-black/20 group-hover:text-blue-600" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HoweverSpecialLayout = ({ project }: { project: Project }) => {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-12">
        <div className="bg-pink-50 border border-pink-100 rounded-[2rem] p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-black text-pink-900 tracking-tighter mb-1">
              브랜드 론칭 1개월 만에 팔로워 <span className="text-pink-600">1만 확보</span>
            </h3>
            <p className="text-sm text-pink-700/60 font-medium italic">제품이 아니라 ‘비주얼 경험’을 콘텐츠로 설계한 브랜딩했습니다</p>
          </div>
        </div>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🧐</span>
            <h3 className="text-xl font-black tracking-tight">CONTEXT & PROBLEM</h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[17px] text-black/60 leading-relaxed font-medium whitespace-pre-line">
                however는 강렬한 색감의 공간과 제품 등 시각적 요소가 뚜렷한 브랜드였지만,{"\n"}
                신규 브랜드로서 시장 내 인지도가 전무한 상태였습니다.{"\n"}
                단기간 내에 강력한 팬덤 확보와 브랜드 이미지 구축이 필요했습니다.
              </p>
              <ul className="space-y-2">
                {['신규 브랜드 인지도 전무', '단기간 팬덤 확보 필요', '공간 자산의 디지털화 부족'].map((t, i) => (
                  <li key={t} className="flex items-center gap-2 font-bold text-black/80 text-[16px]">
                    <div className="w-1 h-1 rounded-full bg-red-400" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💡</span>
            <h3 className="text-xl font-black tracking-tight">APPROACH</h3>
          </div>
          <div className="mb-8">
            <p className="text-[17px] text-black/60 leading-relaxed font-medium whitespace-pre-line">
              👉 브랜드 특성상 비주얼이 핵심 자산{"\n"}
              동일한 비주얼 자산을 기준으로 두 가지 방식 비교
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">💡</span>
                <h4 className="text-base font-black tracking-tight">이미지 콘텐츠</h4>
              </div>
              <div className="bg-zinc-50 rounded-[2rem] border border-black/5 p-8 space-y-6 text-center min-h-[530.5px]">
                <div className="aspect-square overflow-hidden rounded-2xl border border-black/5 shadow-sm bg-zinc-200 mx-auto">
                  <img src="https://github.com/wlgpwkdb-cell/LEEJH/blob/e12122c059734708846002dfa480a6f0a49a057e/ho0.png?raw=true" alt="이미지 콘텐츠" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3">
                  <p className="text-[17px] leading-relaxed whitespace-pre-line text-center">
                    <span className="font-medium text-black/60">
                      브랜드의 비주얼을 정적으로 전달하며{"\n"}
                      무드와 정보를 축적하는 콘텐츠
                    </span>{"\n\n"}
                    <span className="font-bold text-black">👉 브랜드를 ‘이해’시키는 역할</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✅</span>
                <h4 className="text-base font-black tracking-tight">릴스 콘텐츠</h4>
              </div>
              <div className="rounded-[2rem] p-8 space-y-6 bg-pink-100 text-center min-h-[530.5px]">
                <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-lg mx-auto">
                  <img src="https://github.com/wlgpwkdb-cell/LEEJH/blob/e12122c059734708846002dfa480a6f0a49a057e/ho1.png?raw=true" alt="릴스 콘텐츠" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3">
                  <p className="text-[17px] leading-relaxed whitespace-pre-line text-center">
                    <span className="font-medium text-black/60">
                      알고리즘 기반으로 노출되며{"\n"}
                      짧은 시간 내 시선을 확보하는 콘텐츠
                    </span>{"\n\n"}
                    <span className="font-bold text-black">👉 브랜드를 '발견'하게 만드는 역할</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-[25px] mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📈</span>
            <h3 className="text-xl font-black tracking-tight">RESULT</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-50/50 border border-zinc-100 p-6 rounded-[1.5rem] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <p className="text-[13px] font-bold text-zinc-600"><span className="text-zinc-400 mr-2">기획 및 운영 기간:</span> 1달</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5" />
                <p className="text-[13px] font-bold text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mr-2">콘텐츠 방향:</span> 공간 & 제품 비주얼 중심{"\n"}
                  <span className="text-pink-500 block mt-1">→ 브랜드 핵심 자산(색감, 공간)을 직관적으로 전달하여<br />→ 첫 인상에서 브랜드 아이덴티티 각인</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5" />
                <p className="text-[13px] font-bold text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mr-2">촬영 및 연출:</span> 색감 대비 및 공간 몰입도 강조{"\n"}
                  <span className="text-pink-500 block mt-1">→ 강한 색감 대비로 스크롤 스톱 유도<br />→ 공간을 ‘방문하고 싶은 경험’으로 전환</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5" />
                <p className="text-[13px] font-bold text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mr-2">채널 운영:</span> 고빈도 업로드 기반 초기 성장 설계{"\n"}
                  <span className="text-pink-500 block mt-1">→ 알고리즘 학습 가속화<br />→ 빠른 노출 확보 및 계정 활성화</span>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-black/5 shadow-sm">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">주요 성과</h4>
              <div className="overflow-hidden rounded-xl border border-zinc-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50/50">
                      <th className="px-4 py-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">항목</th>
                      <th className="px-4 py-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">결과</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { label: '팔로워', value: '1만+ (1개월)' },
                      { label: '도달', value: '릴스 중심 확산' },
                      { label: '반응', value: '저장 / 공유 증가' },
                      { label: '유입', value: '콘텐츠 기반 방문 증가' }
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 text-[13px] font-bold text-zinc-500 bg-zinc-50/30 w-1/3">{row.label}</td>
                        <td className="px-4 py-3 text-[13px] font-bold text-black/80">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🍃</span>
            <h3 className="text-xl font-black tracking-tight uppercase">INSIGHT</h3>
          </div>
          <div className="bg-zinc-900 text-white/90 p-6 sm:p-8 lg:p-10 rounded-[2.5rem] text-[14px] sm:text-[15px] leading-[1.8] font-medium space-y-8">
            <p className="text-pink-400 font-bold text-lg">
              이번 프로젝트의 핵심은<br />
              브랜드 콘텐츠의 '이해'와 '발견'의 역할을 구분하여 전략적으로 설계하는 것이었습니다.
            </p>

            <div className="space-y-8">
              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">1. 관찰</h4>
                <p className="text-white/70">
                  사용자는 브랜드의 정보를 궁금해하기 전에<br />
                  이미지 한 장, 영상 한 편으로 브랜드를 처음 마주한다.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">2. 분석</h4>
                <p className="text-white/70">
                  이미지 콘텐츠는 브랜드를 깊게 이해시키고 무드를 쌓아가지만,<br />
                  알고리즘의 선택을 받아 새로운 사용자에게 도달하기에는 한계가 있다.
                </p>
                <p className="text-pink-400 font-bold">
                  👉 발견되지 않으면 이해시킬 기회조차 얻을 수 없다.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">3. 결론</h4>
                <p className="text-white/70">
                  릴스로 '발견'의 확률을 극대화하고,<br />
                  피드(이미지)로 '이해'의 깊이를 더하는 이원화 전략이 필요하다.
                </p>
                <p className="text-lg font-bold text-white mt-6 pt-6 border-t border-white/10 text-center italic">
                  "콘텐츠의 역할이 명확할 때, 브랜드는 비로소 성장을 시작한다"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl">🎯</span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/30">ROLE</h4>
          </div>
          <div className="space-y-6">
            {[
              { label: '기획', value: 100 },
              { label: '촬영', value: 100 },
              { label: '편집', value: 100 }
            ].map(r => (
              <div key={r.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-black/70">{r.label}</span>
                  <span className="text-[10px] font-black text-pink-500">{r.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500 rounded-full" style={{ width: `${r.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-50 rounded-[2rem] p-8 border border-black/5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">영상 링크</h4>
          <div className="space-y-2">
            {project.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-white border border-black/5 hover:border-pink-200 transition-all group">
                <span className="text-[10px] font-bold text-black/60 group-hover:text-pink-600">{link.name}</span>
                <ArrowUpRight size={12} className="text-black/20 group-hover:text-pink-600" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NHSpecialLayout = ({ project }: { project: Project }) => {
  return (
    <div className="grid lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-12">
        <div className="bg-amber-50 border border-amber-100 rounded-[2rem] p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-black text-amber-900 tracking-tighter mb-1">
              정보를 전달하지 않고, 경험하게 만든다
            </h3>
            <p className="text-sm text-amber-700/60 font-medium italic">사내 콘텐츠의 문제는 경험되지 않는 구조였습니다</p>
          </div>
        </div>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🧐</span>
            <h3 className="text-xl font-black tracking-tight">CONTEXT & PROBLEM</h3>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[17px] text-black/60 leading-relaxed font-medium whitespace-pre-line">
                전국 각지에 흩어져 있는 사업소와 본사 간의 물리적 거리가 멀어,{"\n"}
                현장 직원들의 업무 고충과 보람이 본사에 전달되기 어려운 구조였습니다.{"\n"}
                이로 인해 사내 방송 콘텐츠에 대한 직원들의 관심도가 매우 낮았습니다.
              </p>
              <ul className="space-y-2">
                {['본사-지사 간 정서적 유대감 약화', '딱딱한 정보 전달 위주의 사내 방송', '낮은 콘텐츠 참여도'].map((t, i) => (
                  <li key={t} className="flex items-center gap-2 font-bold text-black/80 text-[16px]">
                    <div className="w-1 h-1 rounded-full bg-red-400" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">💡</span>
            <h3 className="text-xl font-black tracking-tight">APPROACH</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">💡</span>
                <h4 className="text-base font-black tracking-tight">기존 콘텐츠</h4>
              </div>
              <div className="bg-zinc-50 rounded-[2rem] border border-black/5 p-8 space-y-6 flex flex-col items-center text-center" style={{ minHeight: '461.25px' }}>
                <p className="text-sm font-bold text-black/80">정보 전달형 사내 방송</p>
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-black/5 shadow-sm bg-zinc-200 flex items-center justify-center">
                  <img src="https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/5ce8a089d5f5e16d24374327747f6da37c948126/ch11.png" alt="기존 사내 방송" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-black/60 text-[15px] leading-relaxed whitespace-pre-line" style={{ paddingTop: '3px' }}>
                    현장 그림과 인터뷰가 기반인 콘텐츠{"\n\n"}
                    <span className="font-bold text-black/80">👉 현장 그림 및 인터뷰 중심 구성</span>{"\n"}
                    <span className="font-bold text-black/80">👉 업무 소개 및 성과 설명</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✅</span>
                <h4 className="text-base font-black tracking-tight">체험 콘텐츠</h4>
              </div>
              <div className="rounded-[2rem] p-8 space-y-6 bg-amber-100 flex flex-col items-center text-center min-h-[461.25px]">
                <p className="text-sm font-bold text-black">체험형 리얼 예능 포맷</p>
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                  <img src="https://raw.githubusercontent.com/wlgpwkdb-cell/LEEJH/5ce8a089d5f5e16d24374327747f6da37c948126/ch1.png" alt="해결 전략" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3">
                  <p className="font-medium text-black/80 text-[16px] leading-relaxed whitespace-pre-line">
                    현장을 직접 체험하며 사업 소개하는 콘텐츠{"\n\n"}
                    <span className="font-bold text-black">👉 출연자가 ‘일일 직원’으로 참여</span>{"\n"}
                    <span className="font-bold text-black">👉 실제 업무 수행 과정 중심 전개</span>{"\n"}
                    <span className="font-bold text-black">👉 현장 직원과의 상호작용 기반 스토리 구성</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-[25px] mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📈</span>
            <h3 className="text-xl font-black tracking-tight">RESULT</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-zinc-50/50 border border-zinc-100 p-6 rounded-[1.5rem] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <p className="text-[13px] font-bold text-zinc-600"><span className="text-zinc-400 mr-2">1편 기획 및 제작 기간:</span> 2주</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5" />
                <p className="text-[13px] font-bold text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mr-2">콘텐츠 방향:</span> 체험 기반 현장 콘텐츠 구조 설계
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5" />
                <p className="text-[13px] font-bold text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mr-2">촬영 및 연출:</span> 대본 없는 리얼 체험 중심 흐름 설계{"\n"}
                  <span className="text-amber-500 block mt-1">→ 출연자가 실제 업무를 수행하며 상황 중심 서사 구성</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5" />
                <p className="text-[13px] font-bold text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mr-2">콘텐츠 구조:</span> 사람 & 관계 중심 스토리 설계{"\n"}
                  <span className="text-amber-500 block mt-1">→ 현장을 ‘정보’가 아닌 공감 가능한 이야기로 전환</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5" />
                <p className="text-[13px] font-bold text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mr-2">채널 운영:</span> 현장 확장형 콘텐츠 구조 구축{"\n"}
                  <span className="text-amber-500 block mt-1">→ 전국 사업소 방문을 통한 콘텐츠 확장 가능성 확보<br />→ 참여형 콘텐츠 운영 기반 설계</span>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 border border-black/5 shadow-sm">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">주요 성과</h4>
              <div className="overflow-hidden rounded-xl border border-zinc-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50/50">
                      <th className="px-4 py-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">항목</th>
                      <th className="px-4 py-3 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">결과</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      { label: '콘텐츠 소비 방식', value: '경험 중심 시청으로 전환' },
                      { label: '콘텐츠 몰입도', value: '기존 대비 시청 지속 시간 증가' },
                      { label: '내부 반응', value: '직원 관심도 및 참여도 상승' },
                      { label: '조직 연결성', value: '본사-현장 간 정서적 거리 완화' },
                      { label: '콘텐츠 구조', value: '참여형 포맷 확장 기반 확보' }
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 text-[13px] font-bold text-zinc-500 bg-zinc-50/30 w-1/3">{row.label}</td>
                        <td className="px-4 py-3 text-[13px] font-bold text-black/80">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🍃</span>
            <h3 className="text-xl font-black tracking-tight uppercase">INSIGHT</h3>
          </div>
          <div className="bg-zinc-900 text-white/90 p-6 sm:p-8 lg:p-10 rounded-[2.5rem] text-[14px] sm:text-[15px] leading-[1.8] font-medium space-y-8">
            <p className="text-amber-400 font-bold text-lg">
              이번 프로젝트를 통해 확인한 핵심은<br />
              사내 콘텐츠는 전달되고 있었지만, 연결되고 있지 않았다는 점입니다.
            </p>

            <div className="space-y-8">
              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">1. 관찰</h4>
                <p className="text-white/70">
                  기존 콘텐츠는 충분한 정보를 담고 있었지만<br />
                  구성원들이 이를 자신의 이야기로 받아들이지 못했습니다.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">2. 분석</h4>
                <p className="text-white/70">
                  사내 콘텐츠에서 중요한 것은 정보가 아니라 공감과 연결입니다<br />
                  그리고 이 연결은 설명이 아니라 경험을 통해 형성됩니다
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-black text-sm uppercase tracking-widest opacity-40">3. 결론</h4>
                <p className="text-white/70">
                  콘텐츠는 단순히 정보를 전달하는 것이 아니라,<br />
                  구성원이 직접 참여하고 경험할 수 있는 구조로 설계되어야 합니다.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-amber-400 font-bold">
                    이 프로젝트는 콘텐츠를 만드는 것이 아니라<br />
                    참여하는 프로그램으로 전환한 기획이었습니다.
                  </p>
                </div>
                <p className="text-lg font-bold text-white mt-6 pt-6 border-t border-white/10 text-center italic">
                  “차별화는 내용이 아니라, 참여를 유도하는 구조에서 만들어진다”
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl">🎯</span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black/30">ROLE</h4>
          </div>
          <div className="space-y-6">
            {[
              { label: '기획', value: 100 },
              { label: '촬영', value: 50 },
              { label: '편집', value: 100 }
            ].map(r => (
              <div key={r.label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-black/70">{r.label}</span>
                  <span className="text-[10px] font-black text-amber-500">{r.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${r.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-50 rounded-[2rem] p-8 border border-black/5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">영상 링크</h4>
          <div className="space-y-2">
            {project.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-white border border-black/5 hover:border-amber-200 transition-all group">
                <span className="text-[10px] font-bold text-black/60 group-hover:text-amber-600">{link.name}</span>
                <ArrowUpRight size={12} className="text-black/20 group-hover:text-amber-600" />
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
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl overflow-y-auto"
    >
      <div className="min-h-full flex justify-center p-4 sm:p-8" onClick={onClose}>
        <motion.div 
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          className="bg-white rounded-[2rem] sm:rounded-[3rem] w-full max-w-7xl h-fit shadow-2xl flex flex-col my-auto"
          onClick={e => e.stopPropagation()}
        >
        {/* Header Section - Top Image for 16:9 Video feel */}
        <div className="flex flex-col border-b border-black/5 shrink-0">
          <div className={`w-full bg-zinc-100 relative overflow-hidden ${project.aspectRatio || 'aspect-video'}`}>
            <img 
              src={project.image || `https://picsum.photos/seed/${project.title}/800/800`} 
              alt={project.title}
              className={`w-full h-full ${project.title.includes('디에트데이') ? 'object-contain' : (project.aspectRatio ? 'object-contain' : 'object-cover')}`}
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
          ) : project.title.includes('덕분TV') ? (
            <DukbunSpecialLayout project={project} />
          ) : project.title.includes('however') ? (
            <HoweverSpecialLayout project={project} />
          ) : project.title.includes('체험농협현장') ? (
            <NHSpecialLayout project={project} />
          ) : (
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-12">
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
                        {project.title === 'KIA' || project.title === 'SK telecom' || project.title === '퇴근하GO' || project.title === '다은이가 알려줄게' || project.title === '수키원장' || project.title === 'NEWSEN 앳스타일 (STAR 1)' || project.title === '커머스/F&B 홍보 영상' || project.title === '서정대학교' || project.title === '대명 아임레디' || project.title === '채널A' || project.title === 'NAVER LIVE' || project.title === 'KBS 2TV <아침>' ? (
                          <div className="space-y-6">
                            <div className="text-lg text-black/80 leading-relaxed font-medium">
                              {project.title === 'KIA'
                                ? '실제 응대 상황을 기반으로 한 드라마 형식의 교육 영상 기획 및 제작'
                                : project.title === 'SK telecom'
                                ? '강아지 캐릭터 ‘숏티’를 중심으로 서비스 정보를 쉽고 친근하게 전달하는 가이드형 숏폼 콘텐츠 제작'
                                : project.title === '퇴근하GO' 
                                ? '체험형 예능 포맷을 활용해 사내 콘텐츠를 참여 행동을 유도하는 구조로 설계'
                                : project.title === '다은이가 알려줄게'
                                ? '정보 전달에 최적화된 포맷으로 사내 콘텐츠를 이해 중심 구조로 재설계'
                                : project.title === '수키원장'
                                ? '리얼리티 포맷을 결합하여 정보 콘텐츠를 신뢰와 몰입이 동시에 형성되는 구조로 재설계'
                                : project.title === 'NEWSEN 앳스타일 (STAR 1)'
                                ? '기존 메이킹 + 인터뷰 구조를 기반으로 아티스트의 이미지와 캐릭터에 맞는 컨셉을 개별적으로 설계'
                                : project.title === '커머스/F&B 홍보 영상'
                                ? '브랜드 담당자와의 커뮤니케이션을 기반으로 요구사항과 방향성을 명확히 정리하고 그에 맞는 영상으로 구체화'
                                : project.title === '서정대학교'
                                ? '방대한 사업 보고서를 분석하여 핵심 지표를 선별하고 이를 영상 언어로 재구성'
                                : project.title === '대명 아임레디'
                                ? '퀴즈 형식을 도입해 정보 콘텐츠를 참여형 구조로 전환'
                                : project.title === '채널A'
                                ? '생방송 환경에서의 안정적인 진행을 위해 방송 준비부터 진행까지 전 과정 운영을 체계적으로 관리'
                                : project.title === 'NAVER LIVE'
                                ? '요리 콘텐츠를 기반으로 단순 시청이 아닌 실시간 소통 중심 콘텐츠로 운영'
                                : '데일리 제작 환경에 맞춰 자료 조사부터 촬영, 편집까지 전 제작 과정을 빠르고 정확하게 수행'}
                            </div>
                            <div className="bg-zinc-50/50 border border-zinc-100 p-8 rounded-[2rem] space-y-4">
                              {(project.title === 'KIA'
                                ? [
                                    '스토리텔링 구조를 활용해 교육 내용을 보다 직관적으로 전달할 수 있도록 구성',
                                    '배우 섭외, 스튜디오 촬영, 편집 및 자막 작업까지 콘텐츠 제작 전반 총괄 진행'
                                  ]
                                : project.title === 'SK telecom'
                                ? [
                                    'AI 기반 제작 프로세스와 모션 그래픽을 활용하여 정보를 스토리텔링 구조로 재구성',
                                    '숏폼 환경에 맞춘 템포와 정보 구성을 통해 짧은 러닝타임 안에서도 서비스 이해가 가능하도록 설계'
                                  ]
                                : project.title === '퇴근하GO' 
                                ? [
                                    '동호회를 단순 소개하는 것이 아니라 “직접 참여해보고 싶은 콘텐츠”로 재구성',
                                    '출연자가 실제 동호회 활동에 참여하며 가입 전 고려되는 요소(분위기, 난이도, 재미)를 콘텐츠 안에서 간접 체험할 수 있도록 설계',
                                    '시청자가 콘텐츠를 통해 참여를 망설이는 장벽을 낮추고, 실제 가입으로 이어지도록 구조화'
                                  ]
                                : project.title === '다은이가 알려줄게'
                                ? [
                                    '복잡한 정보를 핵심 단위로 분해하여 짧고 명확하게 전달되는 구조로 구성',
                                    '스튜디오 진행 + 현장 VCR을 결합하여 정보를 설명이 아닌 사례와 맥락으로 이해하도록 설계',
                                    '전달 과정에서 발생하는 피로도를 줄이기 위해 리듬감 있는 구성과 직관적인 연출 적용'
                                  ]
                                : project.title === '수키원장'
                                ? [
                                    '단편적인 정보 전달이 아닌 출연자의 변화 과정을 중심으로 서사 구조 설계',
                                    '체형 변화뿐 아니라 생활 습관과 과정까지 담아내어 정보를 ‘결과’가 아닌 ‘과정’으로 소비하도록 전환',
                                    '시청자가 콘텐츠를 통해 변화를 지속적으로 지켜보게 만드는 시리즈 구조 구축'
                                  ]
                                : project.title === 'NEWSEN 앳스타일 (STAR 1)'
                                ? [
                                    '화보 촬영 메이킹에서는 아티스트의 분위기와 성격이 드러날 수 있도록 현장 포인트와 표현 방식을 조정',
                                    '촬영 이후 인터뷰 콘텐츠에서는 아티스트의 캐릭터에 맞는 질문과 톤을 설계하여 자연스러운 매력이 드러나도록 구성',
                                    '동일한 포맷 안에서도 아티스트별로 다른 무드와 매력을 전달하는 컨셉 중심 콘텐츠로 완성'
                                  ]
                                : project.title === '커머스/F&B 홍보 영상'
                                ? [
                                    '브랜드가 전달하고자 하는 핵심 메시지와 톤을 정리하고 이를 영상 흐름과 구성에 반영',
                                    '피드백 과정을 통해 방향을 조율하며 브랜드 의도와 실제 결과물이 일치하도록 제작',
                                    'SNS 환경에서 효과적으로 소비될 수 있도록 영상 템포와 구성까지 함께 설계'
                                  ]
                                : project.title === '서정대학교'
                                ? [
                                    '주요 KPI를 기준으로 전달해야 할 내용을 정리하고 정보 우선순위를 재설계',
                                    '모션 그래픽을 활용해 복잡한 데이터를 직관적으로 시각화',
                                    '실제 현장 스케치를 함께 구성하여 데이터를 성과와 사례로 연결',
                                    '숫자 중심 정보를 이해 가능한 흐름으로 전달되는 콘텐츠로 변환'
                                  ]
                                : project.title === '대명 아임레디'
                                ? [
                                    '시청자가 단순히 보는 것이 아니라 문제를 풀며 자연스럽게 상품의 핵심 혜택을 이해하도록 설계',
                                    '복잡한 정보를 설명 대신 질문과 선택의 형태로 재구성',
                                    '예능적 요소를 결합하여 정보 콘텐츠의 진입 장벽을 낮추고 몰입도를 유지할 수 있는 흐름 구성'
                                  ]
                                : project.title === '채널A'
                                ? [
                                    '스튜디오 세팅, 출연자 동선, 소품 등을 사전에 정리하여 방송 흐름이 끊기지 않도록 준비',
                                    'FD로서 생방송 스튜디오 전반을 컨트롤하며 실시간 상황 대응 및 진행 안정성 유지',
                                    'AD 역할로 자료 조사 및 CG 제작 의뢰를 수행하여 보도 내용의 정확성과 완성도 확보'
                                  ]
                                : project.title === 'NAVER LIVE'
                                ? [
                                    '채팅을 통해 들어오는 질문과 반응을 방송 흐름에 즉각 반영하여 양방향 커뮤니케이션 구조 유지',
                                    '출연자와 시청자 간의 거리감을 줄이고 참여하고 있다는 느낌을 강화하는 방향으로 진행',
                                    '댓글 관리 및 현장 운영을 통해 소통 흐름이 끊기지 않도록 실시간 대응'
                                  ]
                                : [
                                    '주제에 맞는 자료를 빠르게 조사하고 정리하여 콘텐츠 제작의 기초 데이터 확보',
                                    '촬영 및 편집 보조를 통해 제작 흐름이 지연되지 않도록 실무 전반 지원',
                                    '예고편 제작을 통해 콘텐츠 핵심을 짧고 효과적으로 전달'
                                  ]
                              ).map((text, i) => (
                                <div key={i} className="flex items-start gap-4">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                  <p className="text-[15px] font-bold text-zinc-600 leading-relaxed">
                                    {text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : project.approach && (
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

              </div>

              <div className="lg:col-span-4 space-y-6">
                {/* Role Card */}
                <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl">🎯</span>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/30">ROLE</h4>
                  </div>
                  <div className="space-y-6">
                    {(project.category === 'Key Project' || ['KBS 2TV <아침>', 'NAVER LIVE', '채널A', 'SK telecom'].includes(project.title)) && (
                      <div className="text-[0.925rem] font-bold text-black/80 leading-relaxed markdown-content px-2">
                        <Markdown remarkPlugins={[remarkBreaks]}>{project.role}</Markdown>
                      </div>
                    )}
                    {project.roleBreakdown && (
                      <div className="bg-[#f8fafc] p-8 rounded-[1.25rem] border border-black/5">
                        <RoleGraph breakdown={project.roleBreakdown} title={project.title} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Video Links Card */}
                {project.links && project.links.length > 0 && (
                  <div className="bg-zinc-50 rounded-[2rem] p-8 border border-black/5">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-6">영상 링크</h4>
                    <div className="space-y-2">
                      {project.links.map((link, i) => {
                        return (
                          <a 
                            key={i} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 rounded-xl bg-white border border-black/5 hover:border-emerald-200 transition-all group"
                          >
                            <span className="text-[10px] font-bold text-black/60 group-hover:text-emerald-600">
                              {link.name}
                            </span>
                            <ArrowUpRight size={12} className="text-black/20 group-hover:text-emerald-600" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const primaryUrl = project.links && project.links.length > 0 ? project.links[0].url : '#';
  return (
    <a 
      href={primaryUrl}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="block text-inherit no-underline"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        viewport={{ once: true }}
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
    </a>
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

