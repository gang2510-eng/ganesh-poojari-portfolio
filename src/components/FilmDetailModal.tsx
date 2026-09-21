'use client';

import { useEffect } from 'react';
import { X, ExternalLink, Award } from 'lucide-react';
import { FilmCredit } from '@/data/filmographyData';

interface FilmDetailModalProps {
  credit: FilmCredit | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FilmDetailModal({ credit, isOpen, onClose }: FilmDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !credit) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07090E]/94 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-film-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c121c] border border-[var(--line-strong)] rounded-[var(--radius)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-[var(--line)]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="micro-label text-[10px] text-[var(--text-3)]">
                {credit.category === 'film' ? 'Feature Film' : 'Television Series'}
              </span>
              <span className="text-xs text-[var(--text-3)]">·</span>
              <span className="text-xs text-[var(--text-3)] font-mono tabular-nums">{credit.year}</span>
            </div>
            <h3
              id="modal-film-title"
              className="text-xl sm:text-2xl font-bold text-[var(--text-1)] tracking-tight leading-snug"
            >
              {credit.title}
            </h3>
            {credit.highlight && (
              <p className="micro-label text-[10px] text-[var(--text-3)] font-normal tracking-normal lowercase mt-1">
                · {credit.highlight}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body: Poster + Production Details */}
        <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
          
          {/* Poster Image (Flush hairline container) */}
          <div className="sm:col-span-5 flex justify-center">
            <div className="w-full max-w-[200px] aspect-[2/3] border border-[var(--line)] rounded-[var(--radius)] overflow-hidden bg-[#07090E] flex items-center justify-center">
              <img
                src={`/posters/${credit.id}.jpg`}
                alt={credit.title}
                width={200}
                height={300}
                loading="eager"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="sm:col-span-7 flex flex-col gap-4">
            
            <div className="border border-[var(--line)] rounded-[var(--radius)] p-3.5 bg-transparent">
              <span className="micro-label text-[9px] text-[var(--text-3)] block mb-1">
                Credit Role
              </span>
              <p className="text-sm font-semibold text-[var(--text-1)]">
                {credit.role}
              </p>
            </div>

            <div className="border border-[var(--line)] rounded-[var(--radius)] p-3.5 bg-transparent">
              <span className="micro-label text-[9px] text-[var(--text-3)] block mb-1">
                VFX Studio Facility
              </span>
              <p className="text-sm font-semibold text-[var(--text-1)]">
                {credit.studio}
              </p>
            </div>

            {/* Supervisory Ownership & Contribution */}
            {credit.contribution !== undefined && (
              <div className="border border-[var(--line)] rounded-[var(--radius)] p-3.5 bg-[#090d14]">
                <span className="micro-label text-[9px] text-[var(--text-3)] block mb-1.5">
                  Supervisory & Craft Ownership
                </span>
                {credit.contribution ? (
                  <p className="text-xs text-[var(--text-2)] leading-relaxed">
                    {credit.contribution}
                  </p>
                ) : (
                  <p className="text-xs text-[var(--text-3)] italic font-mono">
                    [ TODO: Add contribution detail for {credit.title} ]
                  </p>
                )}
              </div>
            )}

            {/* External IMDb Callout */}
            <div className="pt-2">
              <a
                href="https://www.imdb.com/name/nm6199377/"
                target="_blank"
                rel="noopener noreferrer"
                className="micro-label text-[10px] px-3 py-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Verify on IMDb Pro</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-3)]" />
              </a>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="px-5 sm:px-6 py-3 border-t border-[var(--line)] bg-[#090d14] flex items-center justify-between micro-label text-[10px] text-[var(--text-3)]">
          <span>Ganesh Poojari Filmography</span>
          <span className="tabular-nums">52 Total Verified Credits</span>
        </div>

      </div>
    </div>
  );
}
