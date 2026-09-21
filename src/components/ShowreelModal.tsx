'use client';

import { X, ExternalLink, Play, Film } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  showreelUrl?: string;
}

export default function ShowreelModal({ isOpen, onClose, showreelUrl = 'https://vimeo.com' }: ShowreelModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07090E]/94"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c121c] border border-[var(--line-strong)] rounded-[var(--radius)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[var(--line)]">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[var(--line)] rounded-[var(--radius)] text-[var(--text-3)]">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[var(--text-1)]">
                VFX Production Showreel
              </h3>
              <p className="micro-label text-[10px] text-[var(--text-3)] mt-0.5">
                Asset & Modeling Supervision Breakdown
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Preview Container */}
        <div className="relative aspect-video w-full bg-[#07090E] border-b border-[var(--line)] flex flex-col items-center justify-center text-center p-8">
          <div className="max-w-md space-y-4">
            <div className="w-12 h-12 border border-[var(--line-strong)] hover:border-[var(--text-1)] rounded-[var(--radius)] flex items-center justify-center text-[var(--text-1)] mx-auto transition-colors">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </div>

            <h4 className="text-base font-semibold text-[var(--text-1)]">
              Online Showreel
            </h4>
            <p className="text-xs text-[var(--text-2)] leading-relaxed">
              Highlighting hero 3D creatures, hard-surface assets, and supervisory modeling breakdowns across feature films and TV series.
            </p>

            <div className="pt-2 flex items-center justify-center gap-3">
              <a
                href={showreelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-label px-4 py-2 border border-[var(--line-strong)] hover:border-[var(--text-1)] text-[var(--text-1)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-2"
              >
                <span>Open External Reel (Vimeo)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-[#090d14] flex items-center justify-between micro-label text-[10px] text-[var(--text-3)]">
          <span>Facility Experience: Framestore · PIXOMONDO · DNEG</span>
          <span className="tabular-nums">20+ Years</span>
        </div>

      </div>
    </div>
  );
}
