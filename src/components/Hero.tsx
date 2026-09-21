'use client';

import { useState } from 'react';
import { Film, ArrowUpRight, Play } from 'lucide-react';
import ShowreelModal from './ShowreelModal';

export default function Hero() {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  // Social Links
  const ARTSTATION_URL = "https://ganesh.artstation.com/";
  const SHOWREEL_URL = "https://vimeo.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/ganesh-poojari-a878b017/";
  const IMDB_URL = "https://www.imdb.com/name/nm6199377/";

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#09090b]">
      {/* Background Artwork Layer (Ganesh's Real ArtStation Portfolio Asset - Whisper subtle) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.07]">
        <img
          src="/artwork/artstation_3.jpg"
          alt="Ganesh Poojari ArtStation Work"
          className="w-full h-full object-cover object-center filter grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/90 to-[#09090b]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-8 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 text-xs font-medium uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              Asset & Modeling Supervisor
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-semibold tracking-tight leading-[1.08] mb-6 text-zinc-100">
              Crafting Cinematic Worlds <br className="hidden sm:inline" />
              <span className="text-zinc-400 font-light">
                & Hero 3D Assets
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8">
              Supervising 3D modeling pipelines, hero character development, and asset handoffs for feature films and television series across <strong className="text-zinc-200 font-normal">Framestore</strong>, <strong className="text-zinc-200 font-normal">PIXOMONDO</strong>, and <strong className="text-zinc-200 font-normal">DNEG</strong>.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
              {/* Showreel Button */}
              <button
                onClick={() => setIsShowreelOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-100 hover:bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-zinc-950 text-zinc-950" />
                <span>Watch Showreel</span>
              </button>

              {/* ArtStation Button */}
              <a
                href={ARTSTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-300 hover:text-white transition-all"
              >
                <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 18.816L3.435 13.01h.001l4.896 8.384H1.678A1.62 1.62 0 0 1 .057 18.816zm11.233-14.88a1.642 1.642 0 0 1 1.398.777l7.842 13.486c.277.476.297 1.05.053 1.543a1.636 1.636 0 0 1-1.451.858H8.847l2.443-4.185h6.666L12.69 7.421l-3.328 5.707-2.44-4.183 4.368-7.509a1.64 1.64 0 0 1 1.399-.777z"/>
                </svg>
                <span>ArtStation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              {/* Filmography Button */}
              <a
                href="#filmography"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-transparent hover:bg-zinc-900/60 border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-all"
              >
                <Film className="w-3.5 h-3.5 text-zinc-400" />
                <span>Filmography</span>
              </a>
            </div>

            {/* Quick Experience Bar */}
            <div className="double-bezel max-w-xl mx-auto lg:mx-0">
              <div className="double-bezel-inner py-3 px-6 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-zinc-100">20+</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">Years Exp</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-zinc-100">3 Yrs</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">Canada Exp</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-zinc-100">50+</div>
                  <div className="text-[10px] sm:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">Productions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Smaller Profile Photo Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[220px] sm:max-w-[240px]">
              {/* Double Bezel Profile Frame */}
              <div className="double-bezel overflow-hidden">
                <div className="double-bezel-inner p-2.5 sm:p-3 flex flex-col items-center">
                  
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800/80">
                    <img
                      src="/profile.jpg"
                      alt="Ganesh Poojari - Asset & Modeling Supervisor"
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Gradient Overlay for Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-85" />

                    {/* Overlay Tag Bottom */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-left">
                      <p className="text-xs font-semibold text-zinc-100 leading-none">Ganesh Poojari</p>
                      <p className="text-[10px] text-zinc-400 truncate mt-1">Asset & Modeling Supervisor</p>
                    </div>
                  </div>

                  {/* Social Profile Links Bar below photo */}
                  <div className="w-full mt-2.5 grid grid-cols-4 gap-1.5">
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 rounded-md bg-zinc-900/60 border border-zinc-800/70 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 flex flex-col items-center justify-center gap-0.5 text-[9px] font-medium transition-all"
                      title="LinkedIn Profile"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      <span>In</span>
                    </a>

                    <a
                      href={ARTSTATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 rounded-md bg-zinc-900/60 border border-zinc-800/70 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 flex flex-col items-center justify-center gap-0.5 text-[9px] font-medium transition-all"
                      title="ArtStation Portfolio"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 18.816L3.435 13.01h.001l4.896 8.384H1.678A1.62 1.62 0 0 1 .057 18.816zm11.233-14.88a1.642 1.642 0 0 1 1.398.777l7.842 13.486c.277.476.297 1.05.053 1.543a1.636 1.636 0 0 1-1.451.858H8.847l2.443-4.185h6.666L12.69 7.421l-3.328 5.707-2.44-4.183 4.368-7.509a1.64 1.64 0 0 1 1.399-.777z"/>
                      </svg>
                      <span>Art</span>
                    </a>

                    <button
                      onClick={() => setIsShowreelOpen(true)}
                      className="py-1.5 rounded-md bg-zinc-900/60 border border-zinc-800/70 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 flex flex-col items-center justify-center gap-0.5 text-[9px] font-medium transition-all"
                      title="VFX Showreel"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Reel</span>
                    </button>

                    <a
                      href={IMDB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 rounded-md bg-zinc-900/60 border border-zinc-800/70 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 flex flex-col items-center justify-center gap-0.5 text-[9px] font-medium transition-all"
                      title="IMDb Credits"
                    >
                      <Film className="w-3 h-3" />
                      <span>IMDb</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Showreel Video Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        showreelUrl={SHOWREEL_URL}
      />
    </section>
  );
}
