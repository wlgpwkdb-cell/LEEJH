import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, UserCheck, LineChart } from 'lucide-react';

export interface HighlightItem {
  id: string;
  competency: string; // 역량
  project: string;    // 프로젝트
  role: string;       // 나의 역할
  result: string;     // 핵심 성과
}

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: "dietday",
    competency: "Performance",
    project: "Dietday",
    role: "퍼포먼스 광고 기획·연출",
    result: "ROAS 800%"
  },
  {
    id: "however",
    competency: "Branding",
    project: "however",
    role: "브랜드 콘텐츠 전략",
    result: "팔로워 1만"
  },
  {
    id: "nh_field",
    competency: "Internal Branding",
    project: "체험농협현장",
    role: "체험형 콘텐츠 기획",
    result: "참여형 포맷 구축"
  },
  {
    id: "tg_go",
    competency: "Engagement",
    project: "퇴근하GO",
    role: "사내 예능 콘텐츠 기획",
    result: "가입률 40% 증가"
  },
  {
    id: "deokbun",
    competency: "Format Design",
    project: "덕분TV",
    role: "웹예능 포맷 설계",
    result: "조회수 10만+"
  },
  {
    id: "hive",
    competency: "Data Storytelling",
    project: "HiVE",
    role: "데이터 기반 홍보영상 기획",
    result: "성과 시각화"
  }
];

export default function CareerHighlights() {
  return (
    <section id="highlights" className="py-24 bg-zinc-50 border-y border-zinc-200/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <Sparkles size={16} />
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-black/40">
              Core Milestones
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Career Highlights
          </h2>
        </div>

        {/* Desktop Elegant Table View */}
        <div className="hidden lg:block overflow-hidden bg-white border border-zinc-200 shadow-sm rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-100 border-b border-zinc-200">
                <th className="py-4 px-6 text-xs font-black uppercase text-zinc-500 tracking-wider w-[22%]">역량</th>
                <th className="py-4 px-6 text-xs font-black uppercase text-zinc-500 tracking-wider w-[23%]">프로젝트</th>
                <th className="py-4 px-6 text-xs font-black uppercase text-zinc-500 tracking-wider w-[35%]">나의 역할</th>
                <th className="py-4 px-6 text-xs font-black uppercase text-zinc-500 tracking-wider w-[20%]">핵심 성과</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {HIGHLIGHTS_DATA.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-zinc-50/50 transition-colors duration-150 align-middle group"
                >
                  {/* Competency */}
                  <td className="py-5 px-6 font-extrabold text-zinc-900 text-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-100/60 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {item.competency}
                    </span>
                  </td>
                  
                  {/* Project */}
                  <td className="py-5 px-6 font-extrabold text-zinc-950 text-sm">
                    {item.project}
                  </td>

                  {/* Role */}
                  <td className="py-5 px-6 text-xs text-zinc-700 leading-relaxed font-semibold">
                    <div className="flex items-center gap-1.5">
                      <UserCheck size={13} className="text-zinc-400 shrink-0" />
                      <span>{item.role}</span>
                    </div>
                  </td>

                  {/* Result */}
                  <td className="py-5 px-6 bg-emerald-50/20 group-hover:bg-emerald-50/40 transition-colors">
                    <div className="text-sm text-emerald-950 font-black leading-relaxed flex items-center gap-1.5">
                      <LineChart size={14} className="text-emerald-700 shrink-0" />
                      <span>{item.result}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Responsive Cards View */}
        <div className="lg:hidden space-y-4">
          {HIGHLIGHTS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm space-y-3 hover:border-emerald-500/20 transition-all"
            >
              <div className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="text-xs font-black text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                  {item.competency}
                </span>
                <span className="text-[10px] font-bold text-zinc-400">0{idx + 1}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">프로젝트</span>
                  <span className="font-extrabold text-zinc-900">{item.project}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">핵심 성과</span>
                  <span className="font-black text-emerald-800">{item.result}</span>
                </div>
              </div>

              <div className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-100 mt-2">
                <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">나의 역할</span>
                <p className="text-zinc-700 font-semibold text-xs flex items-center gap-1">
                  <UserCheck size={12} className="text-zinc-400 shrink-0" />
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
