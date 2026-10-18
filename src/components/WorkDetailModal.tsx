'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Layers, Cpu, ZoomIn } from 'lucide-react';
import { SelectedWorkItem } from '@/data/selectedWork';

interface WorkDetailModalProps {
  item: SelectedWorkItem | null;
  initialImageIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkDetailModal({
  item,
  initialImageIndex = 0,
  isOpen,
  onClose,
}: WorkDetailModalProps) {
  const [activeIdx, setActiveIdx] = useState<number>(initialImageIndex);
  const [zoomLevel, setZoomLevel] = useState<'fit' | 'fill'>('fit');
  const filmstripRef = useRef<HTMLDivElement>(null);

  // Sync index when item or initialImageIndex changes
  useEffect(() => {
    setActiveIdx(initialImageIndex);
    setZoomLevel('fit');
  }, [item, initialImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev + 1) % item.images.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev - 1 + item.images.length) % item.images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, item, onClose]);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (filmstripRef.current) {
      const activeThumb = filmstripRef.current.children[activeIdx] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [activeIdx]);

  if (!isOpen || !item) return null;

  const currentImage = item.images[activeIdx] || item.images[0];
  const totalImages = item.images.length;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % totalImages);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#05070A]/95 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-work-title"
    >
      <div
        className="relative w-full max-w-6xl bg-[#0c131d] border border-[var(--line-strong)] rounded-[var(--radius)] overflow-hidden shadow-2xl my-auto flex flex-col max-h-[96vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--line)] bg-[#090e16] shrink-0">
          <div className="flex items-center gap-3 overflow-hidden pr-3">
            <span className="micro-label px-2.5 py-1 rounded-[var(--radius)] bg-[var(--line-blue)]/50 text-[var(--accent)] font-mono text-[10px] shrink-0 border border-[var(--line-blue)]">
              {item.category.toUpperCase()}
            </span>
            <div className="truncate">
              <h3
                id="modal-work-title"
                className="text-base sm:text-lg font-bold text-[var(--text-1)] tracking-tight truncate"
              >
                {item.title}
              </h3>
              <p className="micro-label text-[10px] text-[var(--text-3)] truncate hidden sm:block">
                {item.studio} {item.year ? `· ${item.year}` : ''}
              </p>
            </div>
          </div>

          {/* Quick Actions & Close */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={currentImage.src}
              target="_blank"
              rel="noopener noreferrer"
              title="Open full resolution master image in new tab"
              className="px-2.5 py-1.5 border border-[var(--line-blue)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors flex items-center gap-1.5 micro-label text-[10px]"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Original Master</span>
            </a>

            <button
              onClick={() => setZoomLevel((z) => (z === 'fit' ? 'fill' : 'fit'))}
              title="Toggle View Mode"
              className="p-1.5 border border-[var(--line-blue)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 border border-[var(--line-blue)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors ml-1"
              aria-label="Close preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Center Showcase */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[500px] max-h-[62vh] bg-[#06090e] border-b border-[var(--line)] flex items-center justify-center overflow-hidden group select-none">
          {/* Main Visual */}
          <img
            key={currentImage.src}
            src={currentImage.src}
            alt={`${item.title} — ${currentImage.label}`}
            className={`w-full h-full transition-all duration-200 ${
              zoomLevel === 'fit' ? 'object-contain' : 'object-cover'
            }`}
            loading="eager"
          />

          {/* Angle / Counter Pill Badge */}
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-[var(--radius)] bg-[#070b10]/90 backdrop-blur-md border border-[var(--line-blue)] flex items-center gap-2 micro-label text-[11px] text-[var(--text-1)] pointer-events-none">
            <span className="text-[var(--accent)] font-mono font-semibold">
              {String(activeIdx + 1).padStart(2, '0')} / {String(totalImages).padStart(2, '0')}
            </span>
            <span className="text-[var(--line-strong)]">|</span>
            <span className="font-medium text-[var(--text-2)]">{currentImage.label}</span>
            {currentImage.width && currentImage.height && (
              <>
                <span className="text-[var(--line-strong)]">|</span>
                <span className="text-[var(--text-3)] font-mono text-[10px]">
                  {currentImage.width}×{currentImage.height}
                </span>
              </>
            )}
          </div>

          {/* Navigation Arrows */}
          {totalImages > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous camera angle"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a1018]/80 hover:bg-[#0f1724] border border-[var(--line-blue)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] backdrop-blur transition-all shadow-lg sm:opacity-90 hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next camera angle"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a1018]/80 hover:bg-[#0f1724] border border-[var(--line-blue)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] backdrop-blur transition-all shadow-lg sm:opacity-90 hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Bottom Overlay Hint */}
          <div className="absolute bottom-2.5 right-3 micro-label text-[9px] text-[var(--text-3)] pointer-events-none hidden sm:block bg-[#080d14]/70 px-2 py-0.5 rounded-[var(--radius)]">
            Use arrow keys [ ← / → ] to navigate angles
          </div>
        </div>

        {/* Thumbnail Filmstrip (All Camera Angles & Closeups) */}
        {totalImages > 1 && (
          <div className="border-b border-[var(--line)] bg-[#080c14] px-4 py-2.5 shrink-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="micro-label text-[10px] text-[var(--text-3)] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-[var(--accent)]" />
                Camera Angles & Closeups ({totalImages})
              </span>
              <span className="micro-label text-[10px] text-[var(--text-3)]">
                Click any thumbnail to inspect
              </span>
            </div>

            <div
              ref={filmstripRef}
              className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-[var(--line-blue)] scrollbar-track-transparent"
            >
              {item.images.map((img, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={`${img.src}-${idx}`}
                    onClick={() => setActiveIdx(idx)}
                    title={img.label}
                    className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-[var(--radius)] overflow-hidden border transition-all ${
                      isActive
                        ? 'border-[var(--accent)] ring-1 ring-[var(--accent)] scale-[1.03]'
                        : 'border-[var(--line-blue)] hover:border-[var(--line-strong)] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-0.5 text-center">
                      <span className="micro-label text-[8px] text-[var(--text-2)] font-mono block truncate px-1">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Technical Breakdown Drawer */}
        <div className="p-5 sm:p-6 bg-[#0a1019] overflow-y-auto shrink-0 max-h-[30vh]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* The Brief (Cols 1–5) */}
            <div className="md:col-span-6 border border-[var(--line-blue)] bg-[#070b11] rounded-[var(--radius)] p-4">
              <span className="micro-label text-[10px] text-[var(--accent)] block mb-1.5 uppercase font-mono tracking-wider">
                Production Context & Brief
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                {item.brief}
              </p>
            </div>

            {/* What I Owned (Cols 6–12) */}
            <div className="md:col-span-6 border border-[var(--line-blue)] bg-[#070b11] rounded-[var(--radius)] p-4">
              <span className="micro-label text-[10px] text-[var(--accent)] block mb-1.5 uppercase font-mono tracking-wider">
                Sculpting & Technical Ownership
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed">
                {item.contribution}
              </p>
            </div>
          </div>

          {/* Software Stack & Pipeline Badges */}
          <div className="mt-4 pt-3 border-t border-[var(--line-blue)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="micro-label text-[10px] text-[var(--text-3)] flex items-center gap-1">
                <Cpu className="w-3 h-3 text-[var(--accent)]" />
                Pipeline Tools:
              </span>
              {item.software.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded-[var(--radius)] bg-[#0e1724] border border-[var(--line-blue)] text-[10px] micro-label text-[var(--text-2)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="micro-label text-[10px] text-[var(--text-3)]">
              {item.category === 'Character' ? 'Hero Character & Likeness' : 'Biological Creature Anatomy'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
