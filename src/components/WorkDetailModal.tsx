'use client';

import { useState, useEffect } from 'react';
import { X, Layers, Box, Maximize2 } from 'lucide-react';
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

  // Close on ESC key
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

  // Available image views for this item
  const availableViews: { id: ViewMode; label: string; src: string }[] = [
    { id: 'beauty', label: 'Beauty Render', src: item.images.beauty },
    ...(item.images.wireframe
      ? [{ id: 'wireframe' as ViewMode, label: 'Wireframe View', src: item.images.wireframe }]
      : []),
    ...(item.images.topology
      ? [{ id: 'topology' as ViewMode, label: 'Topology / UV', src: item.images.topology }]
      : []),
  ];

  const currentImageSrc =
    availableViews.find((v) => v.id === activeView)?.src || item.images.beauty;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-work-title"
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden double-bezel my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="double-bezel-inner p-5 sm:p-8 max-h-[92vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-zinc-800/80">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-zinc-900 border border-zinc-700/60 text-zinc-300">
                  {item.assetType}
                </span>
                <span className="text-xs text-zinc-500">•</span>
                <span className="text-xs text-zinc-400 font-light">{item.show}</span>
                <span className="text-xs text-zinc-500">•</span>
                <span className="text-xs text-zinc-400 font-light">{item.studio}</span>
                <span className="text-xs text-zinc-500">•</span>
                <span className="text-xs text-zinc-500">{item.year}</span>
              </div>
              <h3 id="modal-work-title" className="text-lg sm:text-2xl font-semibold text-zinc-100 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mt-0.5">
                Role: <span className="text-zinc-200">{item.role}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* View Switcher Tabs (Only shows tabs for images that exist) */}
          {availableViews.length > 1 && (
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-900/80 border border-zinc-800/80 w-fit mb-4">
              {availableViews.map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    activeView === view.id
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>
          )}

          {/* Primary Asset Display */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/90 border border-zinc-800/80 mb-6 flex items-center justify-center">
            <img
              src={currentImageSrc}
              alt={`${item.title} - ${activeView}`}
              width={960}
              height={600}
              loading="lazy"
              className="w-full h-full object-contain object-center"
              onError={(e) => {
                // Fallback display if placeholder image path is missing on disk
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  const fallback = target.parentElement.querySelector('.img-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }
              }}
            />

            {/* Fallback Graphic Placeholder Box if file not yet uploaded */}
            <div className="img-fallback hidden absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-zinc-950/90">
              <Box className="w-12 h-12 text-zinc-600 mb-3" />
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                {activeView.toUpperCase()} VIEW PLACEHOLDER
              </p>
              <code className="text-[11px] text-zinc-500 mt-1 font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                {currentImageSrc}
              </code>
              <span className="text-[11px] text-zinc-500 mt-2">
                Supply your high-resolution render to this path
              </span>
            </div>

            {/* Active View Label Tag */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[10px] font-medium text-zinc-400">
              {availableViews.find((v) => v.id === activeView)?.label || 'View'}
            </div>
          </div>

          {/* Craft Specifications: The Brief & What I Owned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-zinc-800/80">
            {/* The Brief */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-3.5 h-3.5 text-zinc-400" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  The Brief
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {item.brief}
              </p>
            </div>

            {/* What I Owned */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="flex items-center gap-2 mb-2">
                <Maximize2 className="w-3.5 h-3.5 text-zinc-400" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  What I Owned
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {item.contribution}
              </p>
            </div>
          </div>

          {/* Asset Pipeline Specs bar */}
          <div className="mt-5 pt-3 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-3 text-[11px] text-zinc-500">
            <span>Asset Category: <strong className="text-zinc-300 font-medium">{item.assetType}</strong></span>
            <span>Production: <strong className="text-zinc-300 font-medium">{item.show}</strong></span>
            <span>Facility: <strong className="text-zinc-300 font-medium">{item.studio}</strong></span>
            <span>Delivered: <strong className="text-zinc-300 font-medium">{item.year}</strong></span>
          </div>

        </div>
      </div>
    </div>
  );
}
