'use client';

import { useState } from 'react';
import { ExternalLink, Play, Award, Film, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import ShowreelModal from './ShowreelModal';

export default function About() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const IMDB_URL = 'https://www.imdb.com/name/nm6199377/';
  const SHOWREEL_URL = 'https://vimeo.com/1031133774?fl=ip&fe=ec';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/ganesh-poojari-a878b017/';

  return (
    <section
      id="about"
      className="relative py-[60px] lg:py-[100px] min-h-[calc(100vh-140px)] bg-[var(--bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header: Cols 1–5 heading, Cols 6–12 text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 items-end">
          <div className="lg:col-span-5">
            <span className="micro-label text-[var(--text-3)] block mb-3">
              Professional Overview
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-none">
              Two Decades of Craft
            </h1>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[17px] leading-[1.65] text-[var(--text-2)] max-w-[68ch]">
              Asset and Modeling Supervisor with over 20 years of experience shaping high-fidelity visual effects for Hollywood feature films and flagship episodic television. Currently Modeling Lead at Framestore, previously supervising asset teams across PIXOMONDO YUL, DNEG, and Prime Focus.
            </p>
          </div>
        </div>

        {/* Profile Card & Bio Details (Asymmetric Grid) */}
        <div className="border border-[var(--line)] rounded-[var(--radius)] overflow-hidden mb-14 bg-[#0a0d14]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)]">
            
            {/* Left Column: Portrait & Key Stats */}
            <div className="lg:col-span-4 bg-[#080b11] p-6 sm:p-8 flex flex-col items-center justify-between gap-6">
              
              {/* Portrait Container */}
              <div className="w-full max-w-[280px]">
                <div className="relative rounded-[var(--radius)] overflow-hidden border border-[var(--line-strong)] bg-[#07090e] shadow-2xl">
                  {/* Photo with subtle studio contrast overlay */}
                  <div className="aspect-[3/4] relative w-full overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Ganesh Poojari - Modeling Lead & Asset Supervisor"
                      width={280}
                      height={373}
                      loading="eager"
                      className="w-full h-full object-cover object-center"
                    />
                    {/* Subtle bottom vignette to blend naturally into dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b11]/80 via-transparent to-transparent opacity-30 pointer-events-none" />
                  </div>

                  {/* Identity Badge */}
                  <div className="p-3.5 bg-[#0d121c] border-t border-[var(--line)]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-[var(--text-1)] tracking-tight">
                        Ganesh Poojari
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active Lead
                      </span>
                    </div>
                    <span className="micro-label text-[10px] text-[var(--text-3)] block mt-1">
                      Modeling Lead · Framestore
                    </span>
                    <span className="text-[11px] text-[var(--text-3)] block mt-0.5">
                      Montreal, QC · Mumbai, IN
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Career Stats under Portrait */}
              <div className="w-full max-w-[280px] grid grid-cols-3 gap-2 pt-4 border-t border-[var(--line)] text-center">
                <div className="p-2 rounded-[var(--radius)] bg-white/[0.02] border border-[var(--line)]">
                  <span className="text-lg sm:text-xl font-bold text-[var(--text-1)] block tabular-nums">
                    20+
                  </span>
                  <span className="micro-label text-[8px] text-[var(--text-3)] block mt-0.5 leading-tight">
                    Years Craft
                  </span>
                </div>
                <div className="p-2 rounded-[var(--radius)] bg-white/[0.02] border border-[var(--line)]">
                  <span className="text-lg sm:text-xl font-bold text-[var(--text-1)] block tabular-nums">
                    54+
                  </span>
                  <span className="micro-label text-[8px] text-[var(--text-3)] block mt-0.5 leading-tight">
                    Credits
                  </span>
                </div>
                <div className="p-2 rounded-[var(--radius)] bg-white/[0.02] border border-[var(--line)]">
                  <span className="text-lg sm:text-xl font-bold text-[var(--accent)] block tabular-nums">
                    2x
                  </span>
                  <span className="micro-label text-[8px] text-[var(--text-3)] block mt-0.5 leading-tight">
                    Oscar VFX
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Profile Bio & Philosophy */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-0.5 bg-[var(--accent)]" />
                  <span className="micro-label text-[10px] text-[var(--text-3)] uppercase tracking-wider">
                    Supervisory Philosophy & Technical Leadership
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-1)] mb-4 tracking-tight">
                  Topological Discipline, Production Scale & Seamless Handoffs
                </h2>

                <div className="space-y-4 text-[15px] sm:text-[16px] leading-[1.7] text-[var(--text-2)]">
                  <p>
                    Specializing in photoreal creature modeling, complex hard-surface vehicles, and high-frequency environment assets. Having led multidisciplinary asset and modeling teams across Canada (<span className="text-[var(--text-1)] font-medium">PIXOMONDO YUL</span>) and India (<span className="text-[var(--text-1)] font-medium">Framestore, DNEG</span>), my focus centers on rigorous quad topology, strict UV/UDIM budgets, and zero-defect downstream handoffs to rigging and lookdev.
                  </p>
                  <p>
                    From Academy Award-winning visual effects benchmarks (<em className="text-[var(--text-1)] not-italic font-medium">Dune: Part One</em>, <em className="text-[var(--text-1)] not-italic font-medium">Blade Runner 2049</em>) to Emmy-winning episodic series (<em className="text-[var(--text-1)] not-italic font-medium">House of the Dragon</em>, <em className="text-[var(--text-1)] not-italic font-medium">Chernobyl</em>), I collaborate directly with VFX Supervisors, CG Supervisors, and Technical Directors to build scalable asset libraries on tight episodic and feature deadlines.
                  </p>
                  <p className="text-[14px] sm:text-[15px] text-[var(--text-3)]">
                    Balancing artistic nuance with production engineering — mentoring international talent, conducting rigorous dailies, and ensuring every hero asset deforms naturally and renders efficiently under extreme close-up scrutiny.
                  </p>
                </div>
              </div>

              {/* External Verified Links Bar */}
              <div className="pt-8 mt-8 border-t border-[var(--line)]">
                <span className="micro-label text-[10px] text-[var(--text-3)] block mb-3">
                  Verified Industry Portals & Showreels
                </span>
                
                <div className="flex flex-wrap items-center gap-3">
                  {/* IMDb Link */}
                  <a
                    href={IMDB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-3.5 py-2 border border-[var(--line)] hover:border-[#f5c518]/50 bg-white/[0.01] hover:bg-[#f5c518]/10 text-[var(--text-2)] hover:text-[#f5c518] rounded-[var(--radius)] transition-all inline-flex items-center gap-2"
                  >
                    <span className="px-1.5 py-0.5 rounded-[2px] bg-[#f5c518] text-black font-extrabold text-[10px] leading-none">
                      IMDb
                    </span>
                    <span className="text-xs font-medium">Profile & Filmography</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-3)] group-hover:text-[#f5c518] transition-colors" />
                  </a>

                  {/* Selected 3D Work link */}
                  <a
                    href="/work"
                    className="group px-3.5 py-2 border border-[var(--line)] hover:border-[var(--line-strong)] bg-white/[0.01] hover:bg-white/[0.05] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-all inline-flex items-center gap-2"
                  >
                    <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span className="text-xs font-medium">Selected 3D Work</span>
                  </a>

                  {/* Showreel Interactive Trigger */}
                  <button
                    onClick={() => setIsShowreelOpen(true)}
                    className="group px-3.5 py-2 border border-[var(--line)] hover:border-[var(--accent)] bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 text-[var(--accent)] rounded-[var(--radius)] transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-semibold">Watch VFX Showreel</span>
                  </button>

                  {/* LinkedIn */}
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-3.5 py-2 border border-[var(--line)] hover:border-[#0a66c2]/50 bg-white/[0.01] hover:bg-[#0a66c2]/10 text-[var(--text-2)] hover:text-[#70b5f9] rounded-[var(--radius)] transition-all inline-flex items-center gap-2"
                  >
                    <span className="px-1 rounded-[1px] bg-[#0a66c2] text-white font-bold text-[9px] leading-tight">
                      in
                    </span>
                    <span className="text-xs font-medium">LinkedIn Network</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-3)] group-hover:text-[#70b5f9] transition-colors" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Pillars Grid (Hairline borders, transparent cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-6 bg-[#0a0d14]/30 transition-all duration-300 group hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-3">
              <span className="micro-label text-[10px] text-[var(--text-3)]">01 / Topology</span>
              <Layers className="w-4 h-4 text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-1)] mb-2">Creature & Character</h3>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Deformation-driven quad topology tailored for complex facial blendshapes, dynamic muscle articulation, and photoreal creature anatomical accuracy.
            </p>
          </div>

          <div className="border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-6 bg-[#0a0d14]/30 transition-all duration-300 group hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-3">
              <span className="micro-label text-[10px] text-[var(--text-3)]">02 / Engineering</span>
              <Award className="w-4 h-4 text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-1)] mb-2">Hard-Surface Vehicles</h3>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Subdivision-surface spacecraft, hero vehicles, architectural set extensions, and intricate mechanical props with consistent edge-bevel radius and CAD-level precision.
            </p>
          </div>

          <div className="border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-6 bg-[#0a0d14]/30 transition-all duration-300 group hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-3">
              <span className="micro-label text-[10px] text-[var(--text-3)]">03 / Leadership</span>
              <Film className="w-4 h-4 text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-1)] mb-2">Supervision & Mentorship</h3>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Directing international modeling units across Canada and India, chairing daily asset reviews, establishing production standards, and mentoring junior-to-senior artists.
            </p>
          </div>

          <div className="border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-6 bg-[#0a0d14]/30 transition-all duration-300 group hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-3">
              <span className="micro-label text-[10px] text-[var(--text-3)]">04 / Pipeline</span>
              <ShieldCheck className="w-4 h-4 text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors" />
            </div>
            <h3 className="text-base font-semibold text-[var(--text-1)] mb-2">Downstream Continuity</h3>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Rigorous zero-defect asset verification: strict UDIM tile organization, optimized poly counts, clean naming conventions, and seamless handoffs to Rigging and Lookdev.
            </p>
          </div>
        </div>

      </div>

      {/* Embedded Showreel Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        showreelUrl={SHOWREEL_URL}
      />
    </section>
  );
}
