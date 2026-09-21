'use client';

export default function Skills() {
  const coreSkills = [
    'Modeling Supervisor',
    'Asset Supervisor',
    'Modeling Lead',
    'Senior 3D Modeler',
    'Creature Modeling',
    'Character Topology',
    'Environment Architecture',
    'Hard-Surface Vehicles',
    'Department Supervision',
    'Quality Control & Dailies Reviews',
    'VFX Pipeline Handoff',
    'Cross-Department Coordination',
    'UDIM & Texture Budgeting',
    'CAD & Scan Data Cleanup',
    'Facial Blendshape Topology',
    'ZBrush High-Frequency Detailing',
  ];

  return (
    <section
      id="skills"
      className="relative py-[80px] lg:py-[140px] border-b border-[var(--line)] bg-[var(--bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-end">
          <div className="lg:col-span-5">
            <span className="micro-label text-[var(--text-3)] block mb-3">
              Domain & Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-none">
              Capabilities
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[17px] leading-[1.65] text-[var(--text-2)] max-w-[68ch]">
              Artistic anatomy and engineering precision balanced with supervisory discipline across large-scale feature film production pipelines.
            </p>
          </div>
        </div>

        {/* 12-Col Grid: Left Competencies, Right Education & Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Core Competencies Tags (Cols 1–7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="micro-label text-[10px] text-[var(--text-3)]">
              Core Competencies & Pipeline Roles
            </span>

            <div className="flex flex-wrap gap-2.5">
              {coreSkills.map((skill, index) => (
                <span
                  key={index}
                  className="micro-label px-3.5 py-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] bg-transparent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Credentials (Cols 8–12) */}
          <div className="lg:col-span-5 border border-[var(--line)] rounded-[var(--radius)] p-6 sm:p-8 bg-transparent">
            <span className="micro-label text-[10px] text-[var(--text-3)] block mb-6">
              Education & Verified History
            </span>

            <div className="space-y-6">
              <div className="border-l border-[var(--line-strong)] pl-4 py-0.5">
                <h4 className="text-sm font-semibold text-[var(--text-1)]">
                  Bachelor of Commerce (B.Com)
                </h4>
                <p className="micro-label text-[10px] text-[var(--text-3)] mt-1">
                  South Indian Welfare Society (SIWS) College
                </p>
              </div>

              <div className="border-l border-[var(--line)] pl-4 py-0.5">
                <h4 className="text-sm font-semibold text-[var(--text-1)]">
                  High School Certificate
                </h4>
                <p className="micro-label text-[10px] text-[var(--text-3)] mt-1">
                  The Dadar Parsee Youths Assembly High School (1999 – 2000)
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--line)] flex items-center justify-between micro-label text-[10px] text-[var(--text-3)]">
              <span>Production Experience</span>
              <span className="text-[var(--text-2)] tabular-nums">2006 – Present</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
