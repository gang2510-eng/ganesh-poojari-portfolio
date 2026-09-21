'use client';

import { Briefcase, Building2, MapPin } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: 'October 2025 – Present',
      role: 'Modeling Lead',
      company: 'Framestore',
      location: 'Mumbai, India',
      description: 'Leading modeling work across hero assets and production deliverables for film VFX projects. Supervising artists, reviewing work for quality and visual consistency, and collaborating with lookdev, rigging, and downstream departments for production-ready handoffs.',
    },
    {
      period: 'November 2021 – December 2024',
      role: 'Asset Supervisor',
      company: 'PIXOMONDO',
      location: 'Montreal, QC, Canada',
      description: 'Oversaw asset development across build and modeling workflows for feature film and VFX production. Managed artist assignments, review cycles, and schedule targets while solving complex build issues for international show pipelines.',
    },
    {
      period: 'August 2016 – November 2021',
      role: 'Build / Asset Supervisor',
      company: 'DNEG',
      location: 'India',
      description: 'Supervised and delivered high-quality production assets for major Hollywood blockbusters (The Matrix 4, Dune, Blade Runner 2049, Bohemian Rhapsody) and Emmy Award-winning series (Chernobyl, Westworld). Led character, creature, environment, and hard-surface modeling teams.',
    },
    {
      period: 'October 2012 – August 2016',
      role: 'Senior Character Modeler',
      company: 'Prime Focus World',
      location: 'Mumbai & UK',
      description: 'Crafted detailed 3D character assets and models for major feature film visual effects and 3D conversions.',
    },
    {
      period: '2006 – 2012',
      role: 'Lead & Freelance Character Modeler',
      company: 'Tata Elxsi, PIXION. CCL, Crest Animation Studios, Raj Taru VFX',
      location: 'India',
      description: 'Built foundational expertise as Lead Character Modeler and freelance texturing artist across digital animation and VFX studios.',
    },
  ];

  return (
    <section id="experience" className="py-24 border-t border-zinc-800/60 bg-[#09090b] relative overflow-hidden">
      {/* Background Artwork Layer (Ganesh's Real ArtStation 3D Work) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
        <img
          src="/artwork/artstation_6.jpg"
          alt="Ganesh Poojari ArtStation 3D Work"
          className="w-full h-full object-cover object-center filter grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-[#09090b]/90 to-[#09090b]" />
      </div>

      <div className="container max-w-5xl mx-auto px-4 z-10 relative">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest bg-zinc-900/90 px-3 py-1 rounded-full border border-zinc-800">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-4 text-zinc-100">
            Work Experience
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-px before:bg-zinc-800">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-start group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-950 border border-zinc-600 z-10" />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <div className="double-bezel">
                  <div className="double-bezel-inner p-5 sm:p-6">
                    <span className="inline-block text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-1 flex items-center gap-2 justify-start">
                      <Briefcase className="w-4 h-4 text-zinc-400 inline md:hidden" />
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium mb-3">
                      <Building2 className="w-4 h-4 text-zinc-400" />
                      <span>{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span className="text-zinc-400 text-xs">{exp.location}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
