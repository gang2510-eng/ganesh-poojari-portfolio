'use client';

import { X, ExternalLink, Play, Film } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  showreelUrl?: string;
}

export default function ShowreelModal({ isOpen, onClose, showreelUrl = "https://vimeo.com" }: ShowreelModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden double-bezel">
        <div className="double-bezel-inner p-6 sm:p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-100">VFX Demo Reel</h3>
                <p className="text-xs text-zinc-400 font-light">Asset & Modeling Supervision Showcase</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Video Container / Preview */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-zinc-800/80 flex flex-col items-center justify-center text-center p-8 group">
            <div className="relative z-10 max-w-md space-y-4">
              <div className="w-14 h-14 rounded-full bg-zinc-100 hover:bg-white flex items-center justify-center text-zinc-950 mx-auto shadow-md transition-colors">
                <Play className="w-6 h-6 ml-0.5 fill-zinc-950" />
              </div>

              <h4 className="text-base font-semibold text-zinc-100">Watch Demo Showreel</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Highlighting hero 3D creatures, hard-surface assets, and supervisory modeling breakdowns for feature films and TV series.
              </p>

              <div className="pt-2 flex items-center justify-center gap-3">
                <a
                  href={showreelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-100 hover:bg-white px-5 py-2 text-xs font-medium text-zinc-950 transition-colors"
                >
                  <span>Open External Showreel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-4 text-center">
            <p className="text-xs text-zinc-500 font-light">
              Asset & Modeling Supervisor • 20+ Years VFX Experience
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
