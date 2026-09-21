'use client';

import { useState } from 'react';
import { Layers, ArrowUpRight, Box } from 'lucide-react';
import { selectedWorkData, SelectedWorkItem } from '@/data/selectedWork';
import WorkDetailModal from './WorkDetailModal';

export default function SelectedWork() {
  const [selectedItem, setSelectedItem] = useState<SelectedWorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetail = (item: SelectedWorkItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="work" className="py-24 border-t border-zinc-800/60 bg-[#09090b] relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest bg-zinc-900/90 px-3 py-1 rounded-full border border-zinc-800">
              Craft & Supervisory Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-4 text-zinc-100">
              Selected Work
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mt-2 max-w-2xl">
              3D asset supervision, hero character/creature modeling, and topological breakdowns across feature film VFX pipelines.
            </p>
          </div>

          <div className="text-xs text-zinc-500 font-mono hidden md:block">
            Showing 6 Selected Assets • Click Card for Wireframe & Breakdown
          </div>
        </div>

        {/* 6-Card Responsive Grid (3 cols desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedWorkData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenDetail(item)}
              className="double-bezel group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="double-bezel-inner p-3.5 h-full flex flex-col justify-between relative overflow-hidden bg-zinc-950/70">
                
                {/* Beauty Render Preview Container */}
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800/80 mb-3.5 flex items-center justify-center">
                  <img
                    src={item.images.beauty}
                    alt={item.title}
                    width={600}
                    height={375}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        const fallback = target.parentElement.querySelector('.card-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }
                    }}
                  />

                  {/* Fallback Display if placeholder file is pending upload */}
                  <div className="card-fallback hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-zinc-950/95">
                    <Box className="w-8 h-8 text-zinc-600 mb-2" />
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      BEAUTY RENDER PLACEHOLDER
                    </span>
                    <span className="text-[9px] text-zinc-600 font-mono mt-0.5 truncate max-w-full px-2">
                      {item.images.beauty}
                    </span>
                  </div>

                  {/* Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Asset Type Badge Top Left */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-zinc-950/85 backdrop-blur-md text-zinc-300 border border-zinc-800">
                      <Layers className="w-2.5 h-2.5 text-zinc-400" />
                      {item.assetType}
                    </span>
                  </div>

                  {/* Inspection Trigger Icon Top Right */}
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-md bg-zinc-950/80 backdrop-blur-md border border-zinc-800 flex items-center justify-center text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Wireframe indicator if available */}
                  {item.images.wireframe && (
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-zinc-800 text-[9px] font-mono text-zinc-400">
                      + Wireframe
                    </div>
                  )}
                </div>

                {/* Card Information */}
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-1">
                    {item.show} • <span className="text-zinc-500">{item.studio}</span> • <span className="text-zinc-500">{item.year}</span>
                  </p>
                </div>

                {/* Card Subline / Role */}
                <div className="pt-3 mt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Role: <strong className="text-zinc-300 font-medium">{item.role}</strong></span>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors flex items-center gap-0.5">
                    Details <ArrowUpRight className="w-3 h-3 inline" />
                  </span>
                </div>

              </div>
            </div>
          ))}
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
