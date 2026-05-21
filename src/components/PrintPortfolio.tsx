import React from 'react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, HERO_CONTENT, ABOUT_CONTENT, CORE_EXPERTISE } from '../constants';
import { Project } from '../types';

export default function PrintPortfolio() {
  return (
    <div className="bg-white text-black p-8 max-w-4xl mx-auto font-sans leading-relaxed print-layout antialiased">
      {/* Print Document Header */}
      <header className="border-b-2 border-black pb-6 mb-8 flex flex-col justify-between md:flex-row items-start md:items-end gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700">Portfolio & Resume</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 mb-2">{HERO_CONTENT.name}</h1>
          <p className="text-base text-zinc-600 font-bold tracking-tight">{HERO_CONTENT.title}</p>
        </div>
        <div className="text-[12px] text-zinc-700 space-y-1 font-mono md:text-right">
          <p>📞 <strong>Phone:</strong> 010-3880-9330</p>
          <p>✉️ <strong>Email:</strong> wlgpwkdb@hanmail.net</p>
          <p>🌐 <strong>Portfolio:</strong> <a href="https://wlgpwkdb-cell.github.io/LEEJH/" className="underline cursor-pointer text-emerald-800 hover:text-emerald-600">https://wlgpwkdb-cell.github.io/LEEJH/</a></p>
        </div>
      </header>

      {/* Intro Bio & Key Metrics */}
      <section className="mb-10 avoid-break">
        <h2 className="text-lg font-extrabold border-b border-zinc-200 pb-2 mb-4 uppercase tracking-wider text-emerald-800">
          About & Profile
        </h2>
        <div className="text-sm text-zinc-800 whitespace-pre-line leading-relaxed mb-6 font-medium">
          {ABOUT_CONTENT.bio}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {ABOUT_CONTENT.tasks.map((task, i) => (
            <div key={i} className="flex items-center gap-2 p-2 bg-zinc-50 border border-zinc-200 rounded-lg">
              <span className="text-emerald-600 font-bold">✔</span>
              <span className="text-xs font-bold text-zinc-800">{task}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Expertise / Competencies */}
      <section className="mb-10 avoid-break">
        <h2 className="text-lg font-extrabold border-b border-zinc-200 pb-2 mb-4 uppercase tracking-wider text-emerald-800">
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_EXPERTISE.map((exp, i) => (
            <div key={i} className="border border-zinc-200 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black bg-zinc-800 text-white px-2 py-0.5 rounded font-mono">0{i + 1}</span>
                <h4 className="text-sm font-extrabold text-zinc-900">{exp.title}</h4>
              </div>
              <p className="text-xs text-zinc-600 whitespace-pre-line leading-relaxed mb-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Page break before works section inside PDF */}
      <div className="page-break my-8" />

      {/* Works Section Title */}
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest font-extrabold text-zinc-400">Section 2</span>
        <h1 className="text-3xl font-extrabold tracking-tight uppercase text-zinc-900">Portfolio Works</h1>
        <p className="text-xs text-zinc-500 mt-1">이하 각 프로젝트의 기획 의도, 수행 내용, 성과 및 결과물을 상세 수록하였습니다. (링크를 클릭하시면 클립 영상으로 이동합니다.)</p>
      </div>

      {/* Works & Categories list */}
      <div className="space-y-12">
        {PORTFOLIO_CATEGORIES.map((category) => {
          const projects = PORTFOLIO_PROJECTS.filter(p => p.category === category);
          if (projects.length === 0) return null;

          return (
            <div key={category} className="space-y-8">
              <div className="border-l-4 border-emerald-600 pl-4 py-1">
                <h3 className="text-xl font-extrabold text-zinc-900 uppercase tracking-tight">{category}</h3>
              </div>

              <div className="space-y-10">
                {projects.map((project) => (
                  <article key={project.title} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 md:p-8 space-y-6 print-project-card shadow-sm">
                    {/* Project Title Block */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-200 pb-4">
                      <div>
                        <h4 className="text-lg font-extrabold text-zinc-900">{project.title}</h4>
                        <p className="text-xs text-zinc-500 font-bold uppercase mt-0.5">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags?.map((tag, i) => (
                          <span key={i} className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Placeholder or Actual Image */}
                    {project.image && (
                      <div className="w-full max-h-56 overflow-hidden rounded-xl bg-zinc-150 border border-zinc-200 flex justify-center items-center">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-auto max-h-56" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      {/* Contents Column */}
                      <div className="md:col-span-8 space-y-4 text-xs text-zinc-800 leading-relaxed">
                        
                        {/* Challenge / Context Section */}
                        <div>
                          <strong className="block text-zinc-500 uppercase tracking-widest text-[9px] mb-1 font-extrabold">Challenge & Context</strong>
                          <p className="whitespace-pre-line font-medium text-zinc-900 bg-white p-3 rounded-lg border border-zinc-100 shadow-sm-inset">
                            {project.challenge || project.intent}
                          </p>
                        </div>

                        {/* Approach / Execution Section */}
                        {project.approach && (
                          <div>
                            <strong className="block text-zinc-500 uppercase tracking-widest text-[9px] mb-1 font-extrabold">Approach & Plan</strong>
                            <p className="whitespace-pre-line text-zinc-800 bg-white p-3 rounded-lg border border-zinc-100">
                              {project.approach}
                            </p>
                          </div>
                        )}

                        {project.execution && project.execution.length > 0 && (
                          <div>
                            <strong className="block text-zinc-500 uppercase tracking-widest text-[9px] mb-1 font-extrabold">Execution Details</strong>
                            <ul className="list-disc pl-5 space-y-1 font-medium">
                              {project.execution.map((item, idx) => (
                                <li key={idx} className="text-zinc-800">{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Impact & Performance Metrics */}
                        {(project.impact || project.results) && (
                          <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl">
                            <strong className="block text-emerald-700 uppercase tracking-widest text-[9px] mb-2 font-extrabold">Key Outcomes (성과/결과)</strong>
                            <ul className="list-disc pl-5 space-y-1 font-extrabold text-emerald-950">
                              {(project.impact || project.results || []).map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Info Metadata Column */}
                      <div className="md:col-span-4 space-y-4">
                        {/* Core Role Detail */}
                        <div className="bg-white border border-zinc-200 rounded-xl p-4">
                          <strong className="block text-zinc-400 uppercase tracking-widest text-[9px] mb-2 font-black">Role / Responsibilities</strong>
                          <p className="text-xs font-extrabold text-zinc-900 whitespace-pre-line leading-relaxed mb-3">
                            {project.role}
                          </p>
                          
                          {/* Role breakdown visual representation for PDF */}
                          {project.roleBreakdown && (
                            <div className="border-t border-zinc-100 pt-3 space-y-2">
                              {project.roleBreakdown.planning > 0 && (
                                <div>
                                  <div className="flex justify-between text-[10px] text-zinc-600 font-bold">
                                    <span>기획</span>
                                    <span>{project.roleBreakdown.planning}%</span>
                                  </div>
                                  <div className="w-full bg-zinc-100 h-1.5 rounded-full mt-0.5">
                                    <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${project.roleBreakdown.planning}%` }} />
                                  </div>
                                </div>
                              )}
                              {project.roleBreakdown.filming > 0 && (
                                <div>
                                  <div className="flex justify-between text-[10px] text-zinc-600 font-bold">
                                    <span>{['덕분TV', '퇴근하GO', '대명 아임레디', 'KIA'].includes(project.title) ? '연출' : '촬영'}</span>
                                    <span>{project.roleBreakdown.filming}%</span>
                                  </div>
                                  <div className="w-full bg-zinc-100 h-1.5 rounded-full mt-0.5">
                                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${project.roleBreakdown.filming}%` }} />
                                  </div>
                                </div>
                              )}
                              {project.roleBreakdown.editing > 0 && (
                                <div>
                                  <div className="flex justify-between text-[10px] text-zinc-600 font-bold">
                                    <span>편집</span>
                                    <span>{project.roleBreakdown.editing}%</span>
                                  </div>
                                  <div className="w-full bg-zinc-100 h-1.5 rounded-full mt-0.5">
                                    <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: `${project.roleBreakdown.editing}%` }} />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Project Video Links (Actual interactive clickable PDF anchors) */}
                        {project.links && project.links.length > 0 && (
                          <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-4 space-y-2">
                            <strong className="block text-zinc-400 uppercase tracking-widest text-[9px] mb-1 font-black">프로젝트 링크 (View Video)</strong>
                            <div className="space-y-1.5">
                              {project.links.map((link, idx) => (
                                <a 
                                  key={idx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-[11px] font-bold text-emerald-800 hover:text-emerald-600 hover:underline cursor-pointer"
                                >
                                  🔗 {link.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 pt-6 mt-12 text-center text-[10px] text-zinc-400 font-bold tracking-wider">
        © Lee Ji Hye Branded Content Portfolio. All Rights Reserved. Printed via System PDF Print Engine.
      </footer>
    </div>
  );
}
