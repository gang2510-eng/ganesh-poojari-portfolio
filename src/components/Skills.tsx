'use client';

import { useState } from 'react';
import { ExternalLink, Award, GraduationCap, Sparkles, CheckCircle2, Bot, Cpu, X, Eye, ShieldCheck } from 'lucide-react';

export default function Skills() {
  const [isCertOpen, setIsCertOpen] = useState(false);

  const coreSkills = [
    'Modeling Supervisor',
    'Asset Supervisor',
    'Modeling Lead',
    'Senior 3D Modeler',
    'Creature Anatomy & Biomechanics',
    'Character Topology & Blendshapes',
    'High-Frequency Facial Detailing',
    'Environment Architecture',
    'Hard-Surface Mechanical Vehicles',
    'Department Supervision & Mentorship',
    'Quality Control & Dailies Reviews',
    'VFX Production Pipeline Handoff',
    'Cross-Department LookDev Alignment',
    'UDIM & Texture Budgeting',
    'CAD & Photogrammetry Scan Cleanup',
    'ZBrush Master Detailing',
  ];

  const aiSkills = [
    { title: 'Prompt Engineering', desc: 'Context crafting, few-shot prompting, and deterministic structured outputs' },
    { title: 'Workflow Automation using n8n', desc: 'Complex event triggers, node orchestration, and multi-API automation' },
    { title: 'No-Code Product Development', desc: 'Rapid prototyping, full-stack functional apps, and interface deployment' },
    { title: 'Voice Agent Orchestration', desc: 'Real-time conversational agents, latency reduction, and telephony loops' },
    { title: 'MCP Integration & Deployment', desc: 'Model Context Protocol servers, tool bridging, and agentic integrations' },
    { title: 'Multimodal AI & Cloning', desc: 'Vision systems, audio cloning, synthetic assets, and generative media' },
  ];

  return (
    <section
      id="skills"
      className="relative py-[60px] lg:py-[100px] min-h-[calc(100vh-140px)] bg-[var(--bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 items-end">
          <div className="lg:col-span-5">
            <span className="micro-label text-[var(--accent)] flex items-center gap-1.5 mb-3 font-mono">
              <Sparkles className="w-3 h-3" />
              Domain &amp; Technical Capabilities
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-none font-display">
              Capabilities
            </h1>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[17px] leading-[1.65] text-[var(--text-2)] max-w-[68ch]">
              Rigorous anatomical mastery and production-hardened topology balanced with supervisory discipline and emerging AI systems across large-scale feature film and high-end episodic VFX pipelines.
            </p>
          </div>
        </div>

        {/* 12-Col Grid: Left Competencies, Right Education & Specialized Training */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Core Competencies Tags (Cols 1–6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* 1. Core VFX Focus Areas */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="micro-label text-[10px] text-[var(--text-3)] uppercase tracking-wider font-mono">
                  Core Competencies &amp; Pipeline Roles
                </span>
                <span className="micro-label text-[10px] text-[var(--text-3)] font-mono">
                  {coreSkills.length} Focus Areas
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {coreSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="micro-label px-3.5 py-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] bg-transparent hover:bg-[var(--line)]/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. AI Systems & Automation Focus */}
            <div className="p-5 border border-[var(--line-blue)] rounded-[var(--radius)] bg-[#070e17]/60">
              <div className="flex items-center justify-between mb-3">
                <span className="micro-label text-[10px] text-[var(--accent)] uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Bot className="w-3 h-3" />
                  AI &amp; Automation Competencies
                </span>
                <span className="micro-label text-[9px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active Practice
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {aiSkills.map((ai) => (
                  <div
                    key={ai.title}
                    className="p-2.5 rounded-[var(--radius)] bg-[#0a121c] border border-[var(--line-blue)] hover:border-[var(--line-strong)] transition-colors"
                  >
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold text-[var(--text-1)] block leading-snug">
                          {ai.title}
                        </span>
                        <span className="text-[10px] text-[var(--text-3)] leading-tight block mt-0.5">
                          {ai.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Pipeline Tooling Stack */}
            <div className="p-5 border border-[var(--line)] rounded-[var(--radius)] bg-[#070b10]/40">
              <span className="micro-label text-[10px] text-[var(--text-3)] uppercase tracking-wider font-mono block mb-3 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-[var(--accent)]" />
                Primary DCC, Engines &amp; Automation Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'ZBrush',
                  'Maya',
                  'Arnold',
                  'Mari',
                  'Substance Painter',
                  'Photoshop',
                  'ShotGrid / Flow',
                  'n8n',
                  'MCP Protocols',
                  'Python / Scripting'
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-[var(--radius)] bg-[#0c131d] border border-[var(--line-blue)] text-[11px] micro-label text-[var(--text-2)] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Specialized Masterclass & Education (Cols 7–12) */}
          <div className="lg:col-span-6 border border-[var(--line)] rounded-[var(--radius)] p-6 sm:p-8 bg-transparent flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="micro-label text-[10px] text-[var(--text-3)] uppercase tracking-wider font-mono">
                  Specialized Training &amp; Education
                </span>
                <span className="micro-label text-[10px] text-[var(--accent)] font-mono">
                  Verified Credentials
                </span>
              </div>

              <div className="space-y-6">
                
                {/* 1. Outskill AI Generalist Accelerator Program (FEATURED HIGHLIGHT) */}
                <div className="border-2 border-[var(--accent)]/40 hover:border-[var(--accent)] rounded-[var(--radius)] p-5 sm:p-6 bg-[#0a111a]/95 transition-all duration-300 relative overflow-hidden group shadow-lg">
                  {/* Subtle amber gradient halo */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent)]/10 blur-3xl pointer-events-none rounded-full -mr-10 -mt-10" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="micro-label px-2.5 py-1 rounded-[var(--radius)] bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/40 font-mono text-[9px] flex items-center gap-1.5 font-semibold">
                      <ShieldCheck className="w-3 h-3" />
                      AI ACCELERATOR · AUGUST 2026
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsCertOpen(true)}
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--accent)] hover:text-white px-2.5 py-1 rounded border border-[var(--accent)]/30 hover:bg-[var(--accent)]/20 transition-all cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      View Certificate
                    </button>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-1)] leading-snug font-display">
                    AI Generalist Accelerator Program
                  </h3>
                  <p className="text-xs text-[var(--text-3)] mt-0.5">
                    Generative Artificial Intelligence (AI) Business Applications Accelerator
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-2 micro-label text-[10px]">
                    <span className="text-[var(--text-1)] font-semibold bg-[#111a26] px-2.5 py-0.5 rounded border border-[var(--line-blue)]">
                      Outskill
                    </span>
                    <span className="text-[var(--text-3)]">· Founder: <strong className="text-[var(--text-2)]">Vaibhav Sisinty</strong></span>
                    <span className="text-[var(--text-3)]">· 14-Day Intensive</span>
                  </div>

                  {/* Certificate Thumbnail + Summary Preview */}
                  <div className="mt-4 pt-3 border-t border-[var(--line-blue)] flex flex-col sm:flex-row gap-4 items-start">
                    <div
                      onClick={() => setIsCertOpen(true)}
                      className="w-full sm:w-28 h-36 shrink-0 rounded border border-[var(--line-strong)] hover:border-[var(--accent)] overflow-hidden bg-black cursor-pointer relative group/thumb shadow-md"
                      title="Click to view full certificate"
                    >
                      <img
                        src="/certificates/outskill-ai-certificate.jpg"
                        alt="Outskill AI Generalist Accelerator Certificate - Ganesh Poojari"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="p-1.5 rounded-full bg-black/80 text-[var(--accent)] border border-[var(--accent)]/40 shadow">
                          <Eye className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-2.5">
                      <p className="text-xs text-[var(--text-2)] leading-relaxed">
                        Hands-on intensive designed to equip professionals with practical AI capabilities, mastering automation, AI systems, and no-code product development through hands-on application of advanced frontier tools.
                      </p>

                      {/* Demonstrated skills pills */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {[
                          'Prompt Engineering',
                          'Workflow Automation (n8n)',
                          'No-Code Product Dev',
                          'Voice Agent Orchestration',
                          'MCP Integration & Deployment',
                          'Multimodal AI & Cloning'
                        ].map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#0e1724] border border-emerald-500/20 text-emerald-300"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Personal Takeaway Quote */}
                  <div className="mt-4 p-3.5 rounded-[var(--radius)] bg-[#060a0f] border-l-2 border-[var(--accent)] text-xs text-[var(--text-2)] leading-relaxed">
                    <p className="italic text-[11px] sm:text-xs">
                      &ldquo;What I found most valuable was moving beyond simply using AI tools and beginning to understand how AI systems, automation and agents can be connected to solve real production problems. Exploring how these technologies apply to creative production, VFX/3D workflows, asset development, pipeline automation and productivity.&rdquo;
                    </p>
                    <span className="block mt-2 micro-label text-[9px] text-[var(--text-3)] font-mono">
                      Special thanks to Vaibhav Sisinty and the Outskill team · Completed August 23, 2026
                    </span>
                  </div>
                </div>

                {/* 2. Scott Eaton's Anatomy for Artists */}
                <div className="border border-[var(--line-strong)] hover:border-[var(--accent)] rounded-[var(--radius)] p-4 sm:p-5 bg-[#090e16]/80 transition-all duration-200 group">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="micro-label px-2 py-0.5 rounded-[var(--radius)] bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 font-mono text-[9px] flex items-center gap-1">
                      <Award className="w-2.5 h-2.5" />
                      SPECIALIZED INDUSTRY MASTERCLASS · 2013
                    </span>
                    <a
                      href="https://www.scott-eaton.com/anatomy-for-artists-online-course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors p-1"
                      title="View course on Scott Eaton's official site"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-1)] leading-snug">
                    <a
                      href="https://www.scott-eaton.com/anatomy-for-artists-online-course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Anatomy for Artists</span>
                      <span className="text-xs font-normal text-[var(--text-3)]">·</span>
                      <span className="text-[var(--accent)] font-semibold">Scott Eaton</span>
                    </a>
                  </h3>
                  
                  <p className="micro-label text-[11px] mt-1 flex items-center gap-1.5">
                    <span className="text-[var(--accent)] font-semibold bg-[var(--accent)]/10 px-2 py-0.5 rounded-[var(--radius)] border border-[var(--accent)]/30">
                      Scott Eaton Studio
                    </span>
                    <span className="text-[var(--text-3)]">· London / Online</span>
                  </p>

                  <p className="text-xs text-[var(--text-2)] leading-relaxed mt-2.5">
                    Specialized masterclass covering deep human and comparative creature anatomy, skeletal landmarks, muscular origin &amp; insertion points, dynamic biomechanics, and surface volume deformation for high-end digital character and creature sculptors.
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-[var(--line-blue)] flex items-center justify-between">
                    <span className="micro-label text-[10px] text-[var(--text-3)] font-mono">
                      Instructor: <strong className="text-[var(--accent)] font-bold tracking-wide">Scott Eaton</strong>
                    </span>
                    <a
                      href="https://www.scott-eaton.com/anatomy-for-artists-online-course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="micro-label text-[10px] text-[var(--text-3)] group-hover:text-[var(--accent)] flex items-center gap-1 transition-colors"
                    >
                      Course Details <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* 3. Bachelor of Commerce */}
                <div className="border-l-2 border-[var(--line-strong)] pl-4 py-1">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[var(--text-3)]" />
                    <h4 className="text-sm font-semibold text-[var(--text-1)]">
                      Bachelor of Commerce (B.Com)
                    </h4>
                  </div>
                  <p className="micro-label text-[10px] text-[var(--text-3)] mt-1">
                    South Indian Welfare Society (SIWS) College
                  </p>
                </div>

                {/* 4. High School Certificate */}
                <div className="border-l-2 border-[var(--line)] pl-4 py-1">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[var(--text-3)]" />
                    <h4 className="text-sm font-semibold text-[var(--text-1)]">
                      High School Certificate
                    </h4>
                  </div>
                  <p className="micro-label text-[10px] text-[var(--text-3)] mt-1">
                    The Dadar Parsee Youths Assembly High School (1999 – 2000)
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--line)] flex items-center justify-between micro-label text-[10px] text-[var(--text-3)] font-mono">
              <span>Production Experience</span>
              <span className="text-[var(--text-1)] font-semibold tabular-nums">2006 – Present (19+ Yrs)</span>
            </div>
          </div>

        </div>

      </div>

      {/* Certificate Viewer Lightbox Modal */}
      {isCertOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setIsCertOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#0a0f16] border border-[var(--line-strong)] rounded-[var(--radius)] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-[var(--line)] flex items-center justify-between bg-[#080d14]">
              <div>
                <span className="micro-label text-[10px] text-[var(--accent)] font-mono block">
                  Verified Outskill Certificate
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[var(--text-1)] leading-tight font-display">
                  AI Generalist Accelerator Program — Ganesh Poojari
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCertOpen(false)}
                className="p-1.5 rounded-[var(--radius)] text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close certificate viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Image Frame */}
            <div className="overflow-y-auto p-4 flex items-center justify-center bg-[#05070a]">
              <img
                src="/certificates/outskill-ai-certificate.jpg"
                alt="AI Generalist Accelerator Program Certificate awarded to Ganesh Poojari"
                className="max-h-[70vh] w-auto object-contain rounded shadow-lg border border-[var(--line-blue)]"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 border-t border-[var(--line)] bg-[#080d14] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="micro-label text-[10px] text-[var(--text-3)] font-mono">
                Awarded by Vaibhav Sisinty · Founder, Outskill
              </span>
              <a
                href="/certificates/outskill-ai-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 micro-label text-[10px] text-[var(--accent)] hover:underline"
              >
                Open Original Image <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
