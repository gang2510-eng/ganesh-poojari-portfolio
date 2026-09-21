'use client';

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

// Studio Logo Vector Badges (Monochrome hairline styling for Ink & Ember)
function StudioLogo({ companyId }: { companyId: string }) {
  switch (companyId) {
    case 'framestore':
      return (
        <div className="h-8 px-3 border border-[var(--line)] rounded-[var(--radius)] bg-[#0c121c] inline-flex items-center text-[var(--text-1)] mb-3">
          <svg viewBox="0 0 130 20" className="h-3.5 w-auto fill-current" aria-label="Framestore Logo">
            <text x="0" y="15" fontFamily="'Archivo', sans-serif" fontWeight="700" fontSize="14" letterSpacing="-0.03em">
              framestore
            </text>
          </svg>
        </div>
      );
    case 'pixomondo':
      return (
        <div className="h-8 px-3 border border-[var(--line)] rounded-[var(--radius)] bg-[#0c121c] inline-flex items-center text-[var(--text-1)] mb-3">
          <svg viewBox="0 0 140 20" className="h-3.5 w-auto fill-current" aria-label="PIXOMONDO Logo">
            <text x="0" y="15" fontFamily="'Archivo', sans-serif" fontWeight="800" fontSize="13" letterSpacing="0.1em">
              PIXOMONDO
            </text>
          </svg>
        </div>
      );
    case 'dneg':
      return (
        <div className="h-8 px-3 border border-[var(--line)] rounded-[var(--radius)] bg-[#0c121c] inline-flex items-center text-[var(--text-1)] mb-3">
          <svg viewBox="0 0 80 20" className="h-4 w-auto fill-current" aria-label="DNEG Logo">
            <text x="0" y="16" fontFamily="'Archivo', sans-serif" fontWeight="900" fontSize="18" letterSpacing="-0.02em">
              DNEG
            </text>
          </svg>
        </div>
      );
    case 'primefocus':
      return (
        <div className="h-8 px-3 border border-[var(--line)] rounded-[var(--radius)] bg-[#0c121c] inline-flex items-center text-[var(--text-1)] mb-3">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 border border-[var(--text-2)] rotate-45 flex items-center justify-center shrink-0">
              <div className="w-1.5 h-1.5 bg-[var(--text-1)]" />
            </div>
            <span className="font-bold text-xs tracking-wider text-[var(--text-1)] font-sans">
              PRIME FOCUS
            </span>
          </div>
        </div>
      );
    case 'crest':
    default:
      return (
        <div className="h-8 px-3 border border-[var(--line)] rounded-[var(--radius)] bg-[#0c121c] inline-flex items-center text-[var(--text-1)] mb-3">
          <span className="micro-label text-[9px] text-[var(--text-2)] font-semibold">
            TATA ELXSI · CREST
          </span>
        </div>
      );
  }
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 'framestore',
      period: 'October 2025 – Present',
      role: 'Modeling Lead',
      company: 'Framestore',
      location: 'Mumbai, India',
      description: 'Leading modeling work across hero assets and production deliverables for film VFX projects. Supervising artists, reviewing work for quality and visual consistency, and collaborating with lookdev, rigging, and downstream departments for production-ready handoffs.',
    },
    {
      id: 'pixomondo',
      period: 'November 2021 – December 2024',
      role: 'Asset Supervisor',
      company: 'PIXOMONDO',
      location: 'Montreal, QC, Canada',
      description: 'Oversaw asset development across build and modeling workflows for feature film and VFX production. Managed artist assignments, review cycles, and schedule targets while solving complex build issues for international show pipelines.',
    },
    {
      id: 'dneg',
      period: 'August 2016 – November 2021',
      role: 'Build / Asset Supervisor',
      company: 'DNEG',
      location: 'India',
      description: 'Supervised and delivered high-quality production assets for major Hollywood blockbusters (The Matrix 4, Dune, Blade Runner 2049, Bohemian Rhapsody) and Emmy Award-winning series (Chernobyl, Westworld). Led character, creature, environment, and hard-surface modeling teams.',
    },
    {
      id: 'primefocus',
      period: 'October 2012 – August 2016',
      role: 'Senior Character Modeler',
      company: 'Prime Focus World',
      location: 'Mumbai & UK',
      description: 'Crafted detailed 3D character assets and models for major feature film visual effects and 3D conversions.',
    },
    {
      id: 'crest',
      period: '2006 – 2012',
      role: 'Lead & Freelance Character Modeler',
      company: 'Tata Elxsi, PIXION, Crest Animation Studios, Raj Taru VFX',
      location: 'India',
      description: 'Built foundational expertise as Lead Character Modeler and freelance texturing artist across digital animation and VFX studios.',
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-[60px] lg:py-[100px] min-h-[calc(100vh-140px)] bg-[var(--bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 items-end">
          <div className="lg:col-span-5">
            <span className="micro-label text-[var(--text-3)] block mb-3">
              Career History
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-none">
              Work Experience
            </h1>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[17px] leading-[1.65] text-[var(--text-2)] max-w-[68ch]">
              Supervisory leadership and lead modeling roles across North American and Indian facilities, delivering 52 verified credits over two decades.
            </p>
          </div>
        </div>

        {/* Line-based Timeline Stack with Studio Logos */}
        <div className="border border-[var(--line)] rounded-[var(--radius)] divide-y divide-[var(--line)] overflow-hidden">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 hover:bg-[#0c121c]/40 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
                
                {/* Meta Column with Company Logo (Cols 1–4) */}
                <div className="lg:col-span-4 flex flex-col items-start">
                  <StudioLogo companyId={exp.id} />
                  
                  <span className="micro-label text-[10px] text-[var(--text-3)] mb-1 tabular-nums">
                    {exp.period}
                  </span>
                  <span className="text-base font-semibold text-[var(--text-1)]">
                    {exp.company}
                  </span>
                  <span className="text-xs text-[var(--text-3)] mt-0.5">
                    {exp.location}
                  </span>
                </div>

                {/* Content Column (Cols 5–12) */}
                <div className="lg:col-span-8">
                  <h2 className="text-base sm:text-lg font-semibold text-[var(--text-1)] mb-2">
                    {exp.role}
                  </h2>
                  <p className="text-sm text-[var(--text-2)] leading-relaxed max-w-[68ch]">
                    {exp.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
