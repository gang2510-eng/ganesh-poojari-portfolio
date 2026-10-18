'use client';

import { X, ExternalLink, Film } from 'lucide-react';
import { filmographyData } from '@/data/filmographyData';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  showreelUrl?: string;
}

export default function ShowreelModal({
  isOpen,
  onClose,
  showreelUrl = 'https://vimeo.com/1031133774?fl=ip&fe=ec',
}: ShowreelModalProps) {
  if (!isOpen) return null;

  // Extract Vimeo ID from URL or default to 1031133774
  const vimeoMatch = showreelUrl.match(/vimeo\.com\/(\d+)/);
  const vimeoId = vimeoMatch ? vimeoMatch[1] : '1031133774';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#07090E]/94"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c121c] border border-[var(--line-strong)] rounded-[var(--radius)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--line)]">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[var(--line)] rounded-[var(--radius)] text-[var(--text-3)]">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[var(--text-1)]">
                VFX Production Showreel
              </h3>
              <p className="micro-label text-[10px] text-[var(--text-3)] mt-0.5">
                Ganesh Poojari · Asset & Modeling Supervision
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="micro-label px-3 py-1.5 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5"
              title="Open video on Vimeo"
            >
              <span>Vimeo</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-[#000000] border-b border-[var(--line)]">
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Ganesh Poojari — VFX Production Showreel"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-3 bg-[#090d14] flex flex-wrap items-center justify-between gap-2 micro-label text-[10px] text-[var(--text-3)]">
          <span>Facility Experience: Framestore · PIXOMONDO · DNEG · Prime Focus</span>
          <span className="tabular-nums">20+ Years · {filmographyData.length} Credits</span>
        </div>

      </div>
    </div>
  );
}
