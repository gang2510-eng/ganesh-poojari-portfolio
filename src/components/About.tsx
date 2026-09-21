'use client';

import { ExternalLink, Play } from 'lucide-react';

export default function About() {
  const ARTSTATION_URL = 'https://ganesh.artstation.com/';
  const SHOWREEL_URL = 'https://vimeo.com';

  return (
    <section
      id="about"
      className="relative py-[60px] lg:py-[100px] min-h-[calc(100vh-140px)] bg-[var(--bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header: Cols 1–5 heading, Cols 8–12 text */}
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
              Asset and Modeling Supervisor with over 20 years of experience in film visual effects. Leading international modeling teams and delivering high-fidelity characters, creatures, and hard-surface assets for feature films and episodic television.
            </p>
          </div>
        </div>

        {/* Profile Card & Bio Details (Asymmetric Grid) */}
        <div className="border border-[var(--line)] rounded-[var(--radius)] overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)]">
            
            {/* Portrait flush inside hairline border */}
            <div className="lg:col-span-4 bg-[#0c121c] flex items-center justify-center p-6 sm:p-8">
              <div className="w-full max-w-[240px] border border-[var(--line)] rounded-[var(--radius)] overflow-hidden">
                <div className="aspect-square relative w-full bg-[#07090E]">
                  <img
                    src="/profile.jpg"
                    alt="Ganesh Poojari"
                    width={240}
                    height={240}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-3 bg-transparent border-t border-[var(--line)]">
                  <span className="text-xs font-semibold text-[var(--text-1)] block leading-snug">
                    Ganesh Poojari
                  </span>
                  <span className="micro-label text-[9px] text-[var(--text-3)] block mt-0.5">
                    Modeling Lead · Framestore
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="lg:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="micro-label text-[10px] text-[var(--text-3)] block mb-2">
                  Supervisory Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-1)] mb-4">
                  Topological Integrity & Production-Ready Handoffs
                </h3>
                <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[var(--text-2)] mb-4">
                  Specialized in photoreal creature modeling, complex hard-surface vehicles, and high-frequency anatomical builds. Having led multidisciplinary departments across Canada (PIXOMONDO YUL) and India (Framestore, DNEG), my focus centers on rigorous edge-loop topology, strict UV tile budgets, and zero-defect downstream handoffs to rigging and lookdev.
                </p>
                <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[var(--text-3)]">
                  Collaborating directly with VFX Supervisors, show leads, and technical directors to architect scalable asset libraries on tight episodic and feature film deadlines.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-3">
                <a
                  href={ARTSTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-label px-4 py-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-2"
                >
                  <span>ArtStation 3D Work</span>
                  <ExternalLink className="w-3 h-3 text-[var(--text-3)]" />
                </a>

                <a
                  href={SHOWREEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-label px-4 py-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-2"
                >
                  <Play className="w-3 h-3 fill-current text-[var(--text-3)]" />
                  <span>VFX Showreel</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars Grid (Hairline borders, transparent cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-6 bg-transparent transition-colors">
            <span className="micro-label text-[10px] text-[var(--text-3)] block mb-3">01 / Topology</span>
            <h4 className="text-base font-semibold text-[var(--text-1)] mb-2">Creature & Character</h4>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Deformation-aware edge flow designed for complex facial blendshapes, muscle expansion, and high-frequency displacement preservation.
            </p>
          </div>

          <div className="border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-6 bg-transparent transition-colors">
            <span className="micro-label text-[10px] text-[var(--text-3)] block mb-3">02 / Engineering</span>
            <h4 className="text-base font-semibold text-[var(--text-1)] mb-2">Hard-Surface Vehicles</h4>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Subdivision-surface mechanical vehicles, cockpit interiors, weapon props, and architectural set pieces with micro-bevel consistency.
            </p>
          </div>

          <div className="border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-6 bg-transparent transition-colors">
            <span className="micro-label text-[10px] text-[var(--text-3)] block mb-3">03 / Leadership</span>
            <h4 className="text-base font-semibold text-[var(--text-1)] mb-2">Supervision & Reviews</h4>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Managing artist task allocation, dailies review sessions, asset quality control, and mentorship across international studio facilities.
            </p>
          </div>

          <div className="border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] p-6 bg-transparent transition-colors">
            <span className="micro-label text-[10px] text-[var(--text-3)] block mb-3">04 / Pipeline</span>
            <h4 className="text-base font-semibold text-[var(--text-1)] mb-2">Downstream Handoff</h4>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Ensuring seamless continuity between modeling, texturing, lookdev, and rigging pipelines under tight delivery milestones.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
