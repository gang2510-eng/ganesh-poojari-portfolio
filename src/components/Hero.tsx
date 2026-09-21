'use client';

import { useState } from 'react';
import { ArrowUpRight, Play, Film } from 'lucide-react';
import ShowreelModal from './ShowreelModal';

export default function Hero() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const ARTSTATION_URL = 'https://ganesh.artstation.com/';
  const SHOWREEL_URL = 'https://vimeo.com';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/ganesh-poojari-a878b017/';
  const IMDB_URL = 'https://www.imdb.com/name/nm6199377/';

  return (
    <section
      id="hero"
      className="relative pt-[110px] pb-[80px] lg:pt-[150px] lg:pb-[140px] border-b border-[var(--line)] bg-[var(--bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Hero Column (Cols 1–8) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* ORANGE USE 1 OF 4: Eyebrow rule above hero headline */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[var(--accent)]" aria-hidden="true" />
              <span className="micro-label text-[var(--text-3)]">
                Asset & Modeling Supervisor · Film VFX
              </span>
            </div>

            {/* Headline: Archivo 700 clamp(2.75rem, 6vw, 4.875rem), lh 0.98, ls -0.025em */}
            {/* Second line drops to weight 400 in var(--text-2) */}
            <h1
              className="font-bold text-[var(--text-1)] mb-8"
              style={{
                fontSize: 'clamp(2.75rem, 6vw, 4.875rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.025em',
              }}
            >
              Crafting Hero Assets<br />
              <span className="font-normal text-[var(--text-2)]">
                & Cinematic Worlds
              </span>
            </h1>

            {/* Body: Archivo 400, 17px / 1.65, var(--text-2), measure under 68 chars */}
            <p
              className="text-[17px] leading-[1.65] text-[var(--text-2)] mb-10"
              style={{ maxWidth: '68ch' }}
            >
              Supervising 3D modeling pipelines, hero character development, and production asset handoffs for feature films and television series across <strong className="text-[var(--text-1)] font-medium">Framestore</strong>, <strong className="text-[var(--text-1)] font-medium">PIXOMONDO</strong>, and <strong className="text-[var(--text-1)] font-medium">DNEG</strong>.
            </p>

            {/* Action Buttons: Line-based, 1px borders, 2px radius, no shadows */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <button
                onClick={() => setIsShowreelOpen(true)}
                className="micro-label px-5 py-3 border border-[var(--line-strong)] text-[var(--text-1)] hover:border-[var(--text-1)] bg-transparent rounded-[var(--radius)] transition-colors flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Showreel</span>
              </button>

              <a
                href={ARTSTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-label px-5 py-3 border border-[var(--line)] text-[var(--text-2)] hover:text-[var(--text-1)] hover:border-[var(--line-strong)] bg-transparent rounded-[var(--radius)] transition-colors flex items-center gap-2"
              >
                <span>ArtStation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#filmography"
                className="micro-label px-5 py-3 border border-[var(--line)] text-[var(--text-3)] hover:text-[var(--text-1)] hover:border-[var(--line-strong)] bg-transparent rounded-[var(--radius)] transition-colors flex items-center gap-2"
              >
                <Film className="w-3.5 h-3.5" />
                <span>Filmography (52)</span>
              </a>
            </div>

            {/* Experience Ticker: Hairline border block */}
            <div className="w-full max-w-xl border border-[var(--line)] rounded-[var(--radius)] p-4 grid grid-cols-3 divide-x divide-[var(--line)]">
              <div className="px-3 text-left">
                <div className="micro-label opacity-60 mb-1">Career</div>
                <div className="text-xl font-bold text-[var(--text-1)] tabular-nums">20+ Yrs</div>
                <div className="micro-label text-[9px] mt-0.5 text-[var(--text-3)]">Film VFX</div>
              </div>
              <div className="px-3 text-left">
                <div className="micro-label opacity-60 mb-1">North America</div>
                <div className="text-xl font-bold text-[var(--text-1)] tabular-nums">3 Yrs</div>
                <div className="micro-label text-[9px] mt-0.5 text-[var(--text-3)]">PIXOMONDO YUL</div>
              </div>
              <div className="px-3 text-left">
                <div className="micro-label opacity-60 mb-1">Production</div>
                <div className="text-xl font-bold text-[var(--text-1)] tabular-nums">52 Credits</div>
                <div className="micro-label text-[9px] mt-0.5 text-[var(--text-3)]">Verified IMDb</div>
              </div>
            </div>

          </div>

          {/* Profile Sidebar (Cols 9–12) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end w-full">
            <div className="w-full max-w-[280px] border border-[var(--line)] rounded-[var(--radius)] overflow-hidden">
              
              {/* Profile Image: Flush inside hairline border, no padding, no filters */}
              <div className="relative aspect-[4/5] w-full border-b border-[var(--line)] bg-[#0c121c]">
                <img
                  src="/profile.jpg"
                  alt="Ganesh Poojari - Asset & Modeling Supervisor"
                  width={280}
                  height={350}
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Identity & Metadata block */}
              <div className="p-4 bg-transparent flex flex-col gap-2.5">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-1)] leading-snug">
                    Ganesh Poojari
                  </h3>
                  <p className="micro-label text-[10px] mt-0.5 text-[var(--text-3)]">
                    Asset & Modeling Supervisor
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--line)] grid grid-cols-4 gap-1.5 text-center">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[9px] py-1 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
                  >
                    IN
                  </a>
                  <a
                    href={ARTSTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[9px] py-1 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
                  >
                    ART
                  </a>
                  <button
                    onClick={() => setIsShowreelOpen(true)}
                    className="micro-label text-[9px] py-1 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
                  >
                    REEL
                  </button>
                  <a
                    href={IMDB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[9px] py-1 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
                  >
                    IMDB
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        showreelUrl={SHOWREEL_URL}
      />
    </section>
  );
}
