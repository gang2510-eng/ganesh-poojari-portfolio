'use client';

import { usePathname } from 'next/navigation';

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Overview',
  '/work': 'Selected Work',
  '/about': 'Profile',
  '/experience': 'Experience',
  '/filmography': 'Filmography',
  '/skills': 'Capabilities',
  '/contact': 'Inquiries',
};

export default function LeftRail() {
  const pathname = usePathname();
  const currentLabel = ROUTE_LABELS[pathname] || 'Overview';

  return (
    <aside
      aria-hidden="true"
      className="hidden lg:flex fixed left-0 top-0 bottom-0 w-12 z-40 flex-col items-center justify-between py-8 border-r border-[var(--line)] bg-[#07090E]/90 select-none pointer-events-none"
    >
      {/* Top index indicator */}
      <span className="micro-label text-[9px] opacity-40">
        GP/20
      </span>

      {/* Center active page label (vertical micro-label) */}
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
