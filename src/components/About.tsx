'use client';

import { ShieldCheck, Layers, Users, Globe, ExternalLink, Play } from 'lucide-react';

export default function About() {
  const ARTSTATION_URL = "https://ganesh.artstation.com/";
  const SHOWREEL_URL = "https://vimeo.com";

  return (
    <section id="about" className="py-24 border-t border-zinc-800/60 bg-[#09090b] relative overflow-hidden">
      {/* Background Artwork Layer (Ganesh's Real ArtStation 3D Sculpt Asset) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <img
          src="/artwork/artstation_1.jpg"
          alt="Ganesh Poojari ArtStation 3D Sculpt"
          className="w-full h-full object-cover object-center filter grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/90 to-[#09090b]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 z-10 relative">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest bg-zinc-900/90 px-3 py-1 rounded-full border border-zinc-800">
            Professional Overview
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-4 mb-4 text-zinc-100">
            Two Decades of VFX Excellence
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Asset and Modeling Supervisor with over 20 years of experience in film visual effects. Leading teams and delivering high-quality characters, creatures, environments, and hard-surface assets for major feature films and episodic television.
          </p>
        </div>

        {/* Profile Card & Bio Highlights */}
        <div className="mb-16 double-bezel">
          <div className="double-bezel-inner p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Profile Avatar / Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 sm:w-56 aspect-square rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
                <img
                  src="/profile.jpg"
                  alt="Ganesh Poojari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 inset-x-3 text-center">
                  <span className="text-xs font-semibold text-zinc-100 block">Ganesh Poojari</span>
                  <span className="text-[10px] text-zinc-400 block font-normal">Asset & Modeling Supervisor</span>
                </div>
              </div>
            </div>

            {/* Profile Bio Details & Direct Links */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                Supervising 3D Pipelines & Hero Asset Teams
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                Specialized in creature modeling, hard-surface vehicles, character topology, and leading multidisciplinary asset departments. Having worked across major international VFX facilities in Canada, India, and global pipelines, I focus on topological perfection, show delivery timelines, and seamless handoffs to rigging and lookdev.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={ARTSTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-800 hover:text-white transition-all"
                >
                  <svg className="w-3.5 h-3.5 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 18.816L3.435 13.01h.001l4.896 8.384H1.678A1.62 1.62 0 0 1 .057 18.816zm11.233-14.88a1.642 1.642 0 0 1 1.398.777l7.842 13.486c.277.476.297 1.05.053 1.543a1.636 1.636 0 0 1-1.451.858H8.847l2.443-4.185h6.666L12.69 7.421l-3.328 5.707-2.44-4.183 4.368-7.509a1.64 1.64 0 0 1 1.399-.777z"/>
                  </svg>
                  <span>ArtStation</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>

                <a
                  href={SHOWREEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-800 hover:text-white transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-zinc-400" />
                  <span>VFX Showreel</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Cards (Double-Bezel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="double-bezel">
            <div className="double-bezel-inner p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">Quality Control</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Rigorous visual reviews and topological consistency to ensure production-ready handoffs for rigging and lookdev.
                </p>
              </div>
            </div>
          </div>

          <div className="double-bezel">
            <div className="double-bezel-inner p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">Hero Asset Planning</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Strategic asset breakdown and scheduling for complex creature models, hard-surface vehicles, and environments.
                </p>
              </div>
            </div>
          </div>

          <div className="double-bezel">
            <div className="double-bezel-inner p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">Team Supervision</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  Mentoring 3D artists, directing modeling workflows, and coordinating cross-department show schedules under tight deadlines.
                </p>
              </div>
            </div>
          </div>

          <div className="double-bezel">
            <div className="double-bezel-inner p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">Global Experience</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  3 years of Canadian studio experience (Montreal) and international collaboration across UK, India, and North America pipelines.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
