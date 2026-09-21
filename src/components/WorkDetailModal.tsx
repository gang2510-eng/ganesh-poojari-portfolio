'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SelectedWorkItem } from '@/data/selectedWork';

interface WorkDetailModalProps {
  item: SelectedWorkItem | null;
  isOpen: boolean;
  onClose: () => void;
}

type ViewMode = 'beauty' | 'wireframe' | 'topology';

export default function WorkDetailModal({ item, isOpen, onClose }: WorkDetailModalProps) {
  const [activeView, setActiveView] = useState<ViewMode>('beauty');

  // Reset active view when item changes
  useEffect(() => {
    setActiveView('beauty');
  }, [item]);

  // Close on ESC key and prevent body scroll
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

  if (!isOpen || !item) return null;

  // Available image views for this item (gracefully hides views without an image)
  const availableViews: { id: ViewMode; label: string; src: string }[] = [
    { id: 'beauty', label: 'Beauty', src: item.images.beauty },
    ...(item.images.wireframe
      ? [{ id: 'wireframe' as ViewMode, label: 'Wireframe', src: item.images.wireframe }]
      : []),
    ...(item.images.topology
      ? [{ id: 'topology' as ViewMode, label: 'Topology', src: item.images.topology }]
      : []),
  ];

  const currentImageSrc =
    availableViews.find((v) => v.id === activeView)?.src || item.images.beauty;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07090E]/94 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-work-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c121c] border border-[var(--line-strong)] rounded-[var(--radius)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-[var(--line)]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="micro-label text-[10px] text-[var(--text-3)]">
                {item.assetType}
              </span>
              <span className="text-xs text-[var(--text-3)]">·</span>
              <span className="text-xs text-[var(--text-2)]">{item.show}</span>
              <span className="text-xs text-[var(--text-3)]">·</span>
              <span className="text-xs text-[var(--text-2)]">{item.studio}</span>
              <span className="text-xs text-[var(--text-3)]">·</span>
              <span className="text-xs text-[var(--text-3)] tabular-nums">{item.year}</span>
            </div>
            <h3
              id="modal-work-title"
              className="text-xl sm:text-2xl font-bold text-[var(--text-1)] tracking-tight"
            >
              {item.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* View Switcher Tabs (Only shows tabs with existing images) */}
        {availableViews.length > 1 && (
          <div className="flex items-center border-b border-[var(--line)] bg-[#090d14] px-5 sm:px-6">
            {availableViews.map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`micro-label py-3 px-4 transition-colors border-b -mb-[1px] ${
                  activeView === view.id
                    ? 'text-[var(--text-1)] border-[var(--text-1)] font-semibold'
                    : 'text-[var(--text-3)] border-transparent hover:text-[var(--text-2)]'
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>
        )}

        {/* Primary Asset Display */}
        <div className="relative w-full aspect-[16/10] bg-[#07090E] border-b border-[var(--line)] flex items-center justify-center overflow-hidden">
          <img
            src={currentImageSrc}
            alt={`${item.title} — ${activeView}`}
            width={960}
            height={600}
            loading="lazy"
            className="w-full h-full object-contain object-center"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.modal-img-fallback');
              if (fallback) fallback.classList.remove('hidden');
            }}
          />

          {/* Placeholder Graphic Box if image file is pending */}
          <div className="modal-img-fallback hidden absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#07090E]">
            <span className="micro-label text-[10px] text-[var(--text-3)] mb-2">
              {activeView.toUpperCase()} VIEW PLACEHOLDER
            </span>
            <code className="text-xs text-[var(--text-2)] font-mono border border-[var(--line)] px-2.5 py-1 rounded-[var(--radius)]">
              {currentImageSrc}
            </code>
          </div>

          <div className="absolute top-3 right-3 px-2 py-1 border border-[var(--line)] bg-[#0c121c] micro-label text-[9px] text-[var(--text-3)] rounded-[var(--radius)]">
            {activeView}
          </div>
        </div>

        {/* Specifications: The Brief & What I Owned */}
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Brief (2 sentences) */}
          <div className="border border-[var(--line)] rounded-[var(--radius)] p-4">
            <span className="micro-label text-[10px] text-[var(--text-3)] block mb-2">
              The Brief
            </span>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              {item.brief}
            </p>
          </div>

          {/* What I Owned (2 sentences) */}
          <div className="border border-[var(--line)] rounded-[var(--radius)] p-4">
            <span className="micro-label text-[10px] text-[var(--text-3)] block mb-2">
              What I Owned
            </span>
            <p className="text-sm text-[var(--text-2)] leading-relaxed">
              {item.contribution}
            </p>
          </div>
        </div>

        {/* Metadata Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-[var(--line)] bg-[#090d14] flex flex-wrap items-center justify-between gap-3 micro-label text-[10px] text-[var(--text-3)]">
          <span>Asset Category: <strong className="text-[var(--text-2)] font-normal">{item.assetType}</strong></span>
          <span>Show: <strong className="text-[var(--text-2)] font-normal">{item.show}</strong></span>
          <span>Facility: <strong className="text-[var(--text-2)] font-normal">{item.studio}</strong></span>
          <span>Year: <strong className="text-[var(--text-2)] font-normal tabular-nums">{item.year}</strong></span>
        </div>

      </div>
    </div>
  );
}
