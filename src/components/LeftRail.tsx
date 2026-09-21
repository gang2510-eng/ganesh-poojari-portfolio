'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Overview' },
  { id: 'work', label: 'Selected Work' },
  { id: 'about', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'filmography', label: 'Filmography' },
  { id: 'skills', label: 'Capabilities' },
  { id: 'contact', label: 'Inquiries' },
];

export default function LeftRail() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLabel = SECTIONS.find((s) => s.id === activeSection)?.label || 'Overview';

  return (
    <aside
      aria-hidden="true"
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-12 z-40 flex-col items-center justify-between py-8 border-r border-[var(--line)] bg-[#07090E]/80 select-none pointer-events-none"
    >
      {/* Top index indicator */}
      <span className="micro-label text-[9px] opacity-40">
        GP/20
      </span>

      {/* Center active section label (vertical micro-label) */}
      <div className="flex items-center justify-center py-6">
        <span
          className="micro-label text-[10px] tracking-[0.24em] text-[var(--text-3)] whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          {currentLabel}
        </span>
      </div>

      {/* Bottom coordinate */}
      <span className="micro-label text-[9px] opacity-40 tabular-nums">
        VFX
      </span>
    </aside>
  );
}
