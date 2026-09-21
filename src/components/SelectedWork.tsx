'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { selectedWorkData, SelectedWorkItem } from '@/data/selectedWork';
import WorkDetailModal from './WorkDetailModal';

type ViewMode = 'beauty' | 'wireframe' | 'topology';

export default function SelectedWork() {
  const [selectedItem, setSelectedItem] = useState<SelectedWorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Track active preview mode per card: defaults to 'beauty'
  const [activeCardViews, setActiveCardViews] = useState<Record<string, ViewMode>>({});

  const handleOpenDetail = (item: SelectedWorkItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
  };

  const handleCardViewChange = (e: React.MouseEvent, itemId: string, mode: ViewMode) => {
    e.stopPropagation();
    setActiveCardViews((prev) => ({
      ...prev,
      [itemId]: mode,
    }));
  };

  return (
    <section
      id="work"
      className="relative py-[80px] lg:py-[140px] border-b border-[var(--line-blue)] bg-[var(--bg-blue)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header: Cols 1–5 heading, Cols 8–12 supporting text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 items-end">
          <div className="lg:col-span-5">
            <span className="micro-label text-[var(--text-3)] block mb-3">
              Craft & Supervision
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-none">
              Selected Work
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-[17px] leading-[1.65] text-[var(--text-2)] max-w-[68ch]">
              High-frequency creature sculpting, character topology pipelines, hard-surface mechanical builds, and production handoffs across feature film VFX departments.
            </p>
          </div>
        </div>

        {/* 6-Card Grid: 3 cols desktop / 2 tablet / 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedWorkData.map((item) => {
            const currentMode: ViewMode = activeCardViews[item.id] || 'beauty';
            
            // Get active image for the card
            let currentImageSrc = item.images.beauty;
            if (currentMode === 'wireframe' && item.images.wireframe) {
              currentImageSrc = item.images.wireframe;
            } else if (currentMode === 'topology' && item.images.topology) {
              currentImageSrc = item.images.topology;
            }

            const hasWireframe = Boolean(item.images.wireframe);
            const hasTopology = Boolean(item.images.topology);

            return (
              <article
                key={item.id}
                onClick={() => handleOpenDetail(item)}
                className="group border border-[var(--line-blue)] hover:border-[var(--line-strong)] bg-transparent rounded-[var(--radius)] transition-colors cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* 1. Flush Preview Image */}
                  <div className="relative aspect-[16/10] w-full border-b border-[var(--line-blue)] bg-[#0c1622] overflow-hidden flex items-center justify-center">
                    <img
                      src={currentImageSrc}
                      alt={`${item.title} — ${currentMode}`}
                      width={600}
                      height={375}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.card-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />

                    {/* Placeholder fallback message */}
                    <div className="card-fallback hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#0d1724]">
                      <span className="micro-label text-[9px] text-[var(--text-3)] mb-1">
                        RENDER PLACEHOLDER
                      </span>
                      <span className="micro-label text-[10px] text-[var(--text-2)] font-mono truncate max-w-full">
                        {currentImageSrc}
                      </span>
                    </div>

                    {/* Inspection Hint */}
                    <div className="absolute top-2.5 right-2.5 p-1 border border-[var(--line-blue)] bg-[var(--bg-blue)] text-[var(--text-3)] group-hover:text-[var(--text-1)] group-hover:border-[var(--line-strong)] rounded-[var(--radius)] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* 2. BEAUTY | WIRE | TOPO View Switcher Row beneath image */}
                  <div className="flex items-center divide-x divide-[var(--line-blue)] border-b border-[var(--line-blue)] bg-[var(--bg-blue)]">
                    <button
                      type="button"
                      onClick={(e) => handleCardViewChange(e, item.id, 'beauty')}
                      className={`micro-label px-3 py-1.5 flex-1 text-center transition-colors ${
                        currentMode === 'beauty'
                          ? 'text-[var(--text-1)] bg-[var(--line-blue)]/50 font-medium'
                          : 'text-[var(--text-3)] hover:text-[var(--text-2)]'
                      }`}
                    >
                      BEAUTY
                    </button>

                    {hasWireframe && (
                      <button
                        type="button"
                        onClick={(e) => handleCardViewChange(e, item.id, 'wireframe')}
                        className={`micro-label px-3 py-1.5 flex-1 text-center transition-colors ${
                          currentMode === 'wireframe'
                            ? 'text-[var(--text-1)] bg-[var(--line-blue)]/50 font-medium'
                            : 'text-[var(--text-3)] hover:text-[var(--text-2)]'
                        }`}
                      >
                        WIRE
                      </button>
                    )}

                    {hasTopology && (
                      <button
                        type="button"
                        onClick={(e) => handleCardViewChange(e, item.id, 'topology')}
                        className={`micro-label px-3 py-1.5 flex-1 text-center transition-colors ${
                          currentMode === 'topology'
                            ? 'text-[var(--text-1)] bg-[var(--line-blue)]/50 font-medium'
                            : 'text-[var(--text-3)] hover:text-[var(--text-2)]'
                        }`}
                      >
                        TOPO
                      </button>
                    )}
                  </div>

                  {/* 3. Card Meta: assetType label, title, show · studio · year */}
                  <div className="p-4 flex flex-col gap-1.5">
                    <span className="micro-label text-[10px] text-[var(--text-3)]">
                      {item.assetType}
                    </span>
                    <h3 className="text-base font-semibold text-[var(--text-1)] leading-snug group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-2)] mt-0.5">
                      {item.show} <span className="text-[var(--text-3)]">·</span> {item.studio} <span className="text-[var(--text-3)]">·</span> <span className="tabular-nums">{item.year}</span>
                    </p>
                  </div>
                </div>

                {/* Card footer detail row */}
                <div className="px-4 py-2.5 border-t border-[var(--line-blue)] flex items-center justify-between micro-label text-[10px]">
                  <span className="text-[var(--text-3)]">Breakdown & Specs</span>
                  <span className="text-[var(--text-2)] group-hover:text-[var(--text-1)] flex items-center gap-1">
                    Inspect ↗
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Selected Work Detail Modal */}
      <WorkDetailModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseDetail}
      />
    </section>
  );
}
