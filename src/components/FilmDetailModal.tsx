'use client';

import { useEffect } from 'react';
import { X, ExternalLink, Award, Play } from 'lucide-react';
import { FilmCredit, filmographyData } from '@/data/filmographyData';

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

            {/* External IMDb & Breakdown Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href="https://www.imdb.com/name/nm6199377/"
                target="_blank"
                rel="noopener noreferrer"
                className="micro-label text-[10px] px-3 py-2 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Verify on IMDb Pro</span>
                <ExternalLink className="w-3 h-3 text-[var(--text-3)]" />
              </a>

              {credit.id === 'houseofthedragon_s2' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (5 Videos)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=FqHuxXUF264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'houseofthedragon_s1' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (Rulers of Westeros)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=FqHuxXUF264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'hercules' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=rCWPhV3-i7E"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'bladerunner' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=4L_FgTPVE2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'pacificrim' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (4 Videos)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=6TRSFBdxdWY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'chernobyl' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=dACvBZYj8ww"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'godzilla' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (2 Videos)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=4QNqyOn4I34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'bohemian' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=JwkwLnw2JOg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'life' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Q2zQLE_HfBE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'dune' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=UARrOsNPviA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'matrix4' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=yWtBUJg3B6E"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'foundation' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=oxy-dwMg3eM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'venom2' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (2 Videos)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=hBG9fDGtpd4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'f9' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (2 Videos)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=pdvegGb9pFU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'westworld' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (2 Videos)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=h4DhuyuMgrw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'devs' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (3 Videos)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Sn-fzkz_nj8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}

              {credit.id === 'darkcrystal' && (
                <>
                  <a
                    href="/work?tab=breakdown"
                    className="micro-label text-[10px] px-3 py-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 hover:border-[var(--accent)] text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Shot Breakdown (4 Videos)</span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=4cahs2BCHFU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="micro-label text-[10px] px-3 py-2 bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 font-mono"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </>
              )}
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="px-5 sm:px-6 py-3 border-t border-[var(--line)] bg-[#090d14] flex items-center justify-between micro-label text-[10px] text-[var(--text-3)]">
          <span>Ganesh Poojari Filmography</span>
          <span className="tabular-nums">{filmographyData.length} Total Verified Credits</span>
        </div>

      </div>
    </div>
  );
}
