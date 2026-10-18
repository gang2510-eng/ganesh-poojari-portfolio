'use client';

import { Play, Film } from 'lucide-react';

export default function Footer() {
  const SHOWREEL_URL = 'https://vimeo.com/1031133774?fl=ip&fe=ec';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/ganesh-poojari-a878b017/';
  const IMDB_URL = 'https://www.imdb.com/name/nm6199377/';

  return (
    <footer className="py-12 border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        <div>
          <span className="font-semibold text-sm text-[var(--text-1)] block leading-snug">
            Ganesh Poojari
          </span>
          <span className="micro-label text-[10px] text-[var(--text-3)] block mt-0.5">
            Asset & Modeling Supervisor · Film Visual Effects
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
            href={SHOWREEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
            aria-label="Showreel"
            title="Showreel"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
          </a>

          <a
            href={IMDB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
            aria-label="IMDb"
            title="IMDb Profile"
          >
            <Film className="w-3.5 h-3.5" />
          </a>
        </div>

        <span className="micro-label text-[10px] text-[var(--text-3)] tabular-nums">
          &copy; {new Date().getFullYear()} Ganesh Poojari
        </span>

      </div>
    </footer>
  );
}
