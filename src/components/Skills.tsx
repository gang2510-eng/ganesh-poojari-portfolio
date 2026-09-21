'use client';

import { GraduationCap, Award } from 'lucide-react';

export default function Skills() {
  const coreSkills = [
    'Modeling Supervisor',
    'Asset Supervisor',
    'Modeling Lead',
    'Senior 3D Artist',
    'Creature Modeling',
    'Character Modeling',
    'Environment Modeling',
    'Hard-Surface Assets',
    'Team Supervision',
    'Quality Control & Reviews',
    'VFX Pipeline Handoff',
    'Cross-Department Coordination',
    'Asset Planning',
    'Hero Asset Development',
  ];

  return (
    <section id="skills" className="py-24 border-t border-zinc-800/60 bg-[#09090b] relative overflow-hidden">
      {/* Background Artwork Layer (Ganesh's Real ArtStation 3D Skin Test Render) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <img
          src="/artwork/artstation_4.jpg"
          alt="Ganesh Poojari ArtStation 3D Skin Test"
          className="w-full h-full object-cover object-center filter grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/90 to-[#09090b]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 z-10 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Core Skills Chips */}
          <div className="lg:col-span-7">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest bg-zinc-900/90 px-3 py-1 rounded-full border border-zinc-800">
              Technical & Supervisory Domain
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mt-4 mb-4 text-zinc-100">
              Core Competencies
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-8">
              Combining high-end artistic craftsmanship with technical pipeline discipline across major film visual effects studios.
            </p>

            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 text-xs font-medium hover:border-zinc-700 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Education & Background */}
          <div className="lg:col-span-5">
            <div className="double-bezel">
              <div className="double-bezel-inner p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">Education</h3>
                </div>

                <div className="space-y-5">
                  <div className="border-l-2 border-zinc-600 pl-4 py-0.5">
                    <h4 className="text-sm font-semibold text-zinc-100">Bachelor of Commerce (B.Com)</h4>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">South Indian Welfare Society (SIWS) College</p>
                  </div>

                  <div className="border-l-2 border-zinc-800 pl-4 py-0.5">
                    <h4 className="text-sm font-semibold text-zinc-100">High School Certificate</h4>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">The Dadar Parsee Youths Assembly High School (1999 – 2000)</p>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-800/80 flex items-center gap-2.5 text-xs text-zinc-400">
                  <Award className="w-4 h-4 text-zinc-400" />
                  <span>20+ Years of Verified VFX Industry Production Credits</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
