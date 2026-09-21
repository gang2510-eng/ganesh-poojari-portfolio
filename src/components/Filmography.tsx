'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ExternalLink, LayoutGrid, List } from 'lucide-react';
import { filmographyData, FilmCredit } from '@/data/filmographyData';
import FilmDetailModal from './FilmDetailModal';

type CategoryFilter = 'all' | 'film' | 'tv';
type ViewMode = 'grid' | 'table';

export default function Filmography() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedCredit, setSelectedCredit] = useState<FilmCredit | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [expandedContributions, setExpandedContributions] = useState<Record<string, boolean>>({});

  const handleOpenDetail = (credit: FilmCredit) => {
    setSelectedCredit(credit);
    setIsModalOpen(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
  };

  const toggleContribution = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setExpandedContributions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter credits
  const filteredCredits = useMemo(() => {
    return filmographyData.filter((item) => {
      if (filter === 'all') return true;
      return item.category === filter;
    });
  }, [filter]);

  // Display 18 credits (3 rows of 6) by default in grid view, or 12 in table view, or all if expanded
  const defaultCount = viewMode === 'grid' ? 18 : 12;
  const displayedCredits = isExpanded ? filteredCredits : filteredCredits.slice(0, defaultCount);

  const filmCount = filmographyData.filter((p) => p.category === 'film').length;
  const tvCount = filmographyData.filter((p) => p.category === 'tv').length;

  return (
    <section
      id="filmography"
      className="relative py-[60px] lg:py-[100px] min-h-[calc(100vh-140px)] bg-[var(--bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header: Cols 1–5 heading, Cols 8–12 text & controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 items-end">
          <div className="lg:col-span-5">
            <span className="micro-label text-[var(--text-3)] block mb-3">
              Production History
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-none">
              Filmography
            </h1>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p className="text-[17px] leading-[1.65] text-[var(--text-2)] max-w-[40ch]">
              Complete record of 52 Hollywood feature films and series across Framestore, PIXOMONDO, DNEG, and Prime Focus.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
              {/* View Toggle: Grid (6 in a row) vs Compact Table */}
              <div className="flex items-center border border-[var(--line)] rounded-[var(--radius)] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors border-r border-[var(--line)] ${
                    viewMode === 'grid'
                      ? 'text-[var(--text-1)] bg-[#121b27]'
                      : 'text-[var(--text-3)] hover:text-[var(--text-1)] bg-transparent'
                  }`}
                  title="Poster Grid (6 in a row)"
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`p-2 transition-colors ${
                    viewMode === 'table'
                      ? 'text-[var(--text-1)] bg-[#121b27]'
                      : 'text-[var(--text-3)] hover:text-[var(--text-1)] bg-transparent'
                  }`}
                  title="Compact Table"
                  aria-label="Table view"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Filter Tabs: ORANGE USE 3 OF 4 (Active filter tab) */}
              <div className="flex items-center border border-[var(--line)] rounded-[var(--radius)] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`micro-label px-3 py-1.5 transition-colors border-r border-[var(--line)] ${
                    filter === 'all'
                      ? 'text-[var(--text-1)] bg-[#121b27] border-b-2 border-b-[var(--accent)] font-semibold'
                      : 'text-[var(--text-3)] hover:text-[var(--text-1)] bg-transparent'
                  }`}
                >
                  All (52)
                </button>

                <button
                  type="button"
                  onClick={() => setFilter('film')}
                  className={`micro-label px-3 py-1.5 transition-colors border-r border-[var(--line)] ${
                    filter === 'film'
                      ? 'text-[var(--text-1)] bg-[#121b27] border-b-2 border-b-[var(--accent)] font-semibold'
                      : 'text-[var(--text-3)] hover:text-[var(--text-1)] bg-transparent'
                  }`}
                >
                  Films ({filmCount})
                </button>

                <button
                  type="button"
                  onClick={() => setFilter('tv')}
                  className={`micro-label px-3 py-1.5 transition-colors ${
                    filter === 'tv'
                      ? 'text-[var(--text-1)] bg-[#121b27] border-b-2 border-b-[var(--accent)] font-semibold'
                      : 'text-[var(--text-3)] hover:text-[var(--text-1)] bg-transparent'
                  }`}
                >
                  Series ({tvCount})
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PRIMARY VIEW: 6 POSTERS IN A ROW GRID */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {displayedCredits.map((credit) => (
              <article
                key={credit.id}
                onClick={() => handleOpenDetail(credit)}
                className="group border border-[var(--line)] hover:border-[var(--line-strong)] rounded-[var(--radius)] bg-[#0c121c] overflow-hidden cursor-pointer flex flex-col justify-between transition-colors"
              >
                <div>
                  {/* Poster Thumbnail Container (Aspect 2:3) */}
                  <div className="relative aspect-[2/3] w-full bg-[#07090E] border-b border-[var(--line)] overflow-hidden flex items-center justify-center">
                    <img
                      src={`/posters/${credit.id}.jpg`}
                      alt={credit.title}
                      width={300}
                      height={450}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.poster-grid-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />

                    {/* Fallback Display if image missing */}
                    <div className="poster-grid-fallback hidden absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-[#07090E]">
                      <span className="micro-label text-[9px] text-[var(--text-3)]">
                        {credit.category === 'film' ? 'FEATURE FILM' : 'SERIES'}
                      </span>
                      <span className="text-xs font-semibold text-[var(--text-2)] mt-1 line-clamp-2">
                        {credit.title}
                      </span>
                    </div>

                    {/* Category tag badge top left */}
                    <div className="absolute top-2 left-2">
                      <span className="micro-label text-[8px] px-1.5 py-0.5 bg-[#07090E]/90 border border-[var(--line)] rounded-[var(--radius)] text-[var(--text-2)]">
                        {credit.category === 'film' ? 'Film' : 'TV'}
                      </span>
                    </div>

                    {/* Year badge top right */}
                    <div className="absolute top-2 right-2">
                      <span className="micro-label text-[8px] px-1.5 py-0.5 bg-[#07090E]/90 border border-[var(--line)] rounded-[var(--radius)] text-[var(--text-2)] tabular-nums">
                        {credit.year.split('–')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Poster Metadata beneath image */}
                  <div className="p-3 flex flex-col gap-1">
                    <h2 className="text-xs font-semibold text-[var(--text-1)] group-hover:text-white transition-colors leading-snug line-clamp-1">
                      {credit.title}
                    </h2>
                    <p className="text-[11px] text-[var(--text-2)] line-clamp-1">
                      {credit.role}
                    </p>
                    <p className="micro-label text-[9px] text-[var(--text-3)] line-clamp-1">
                      {credit.studio}
                    </p>
                    {credit.highlight && (
                      <p className="micro-label text-[8px] text-[var(--text-3)] truncate mt-0.5">
                        · {credit.highlight}
                      </p>
                    )}
                  </div>
                </div>

                {/* Inspect Footer Link */}
                <div className="px-3 py-1.5 border-t border-[var(--line)] bg-[#090d14] flex items-center justify-between micro-label text-[8px] text-[var(--text-3)]">
                  <span>{credit.contribution !== undefined ? 'Supervised' : 'Verified'}</span>
                  <span className="text-[var(--text-2)] group-hover:text-[var(--text-1)]">
                    Details ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ALTERNATIVE VIEW: COMPACT 5-COLUMN TABLE */}
        {viewMode === 'table' && (
          <div className="border border-[var(--line)] rounded-[var(--radius)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--line)] bg-[#0c121c] micro-label text-[10px] text-[var(--text-3)]">
                  <th className="py-3 px-4 w-[38%] font-normal">Title</th>
                  <th className="py-3 px-4 w-[24%] font-normal">Role</th>
                  <th className="py-3 px-4 w-[16%] font-normal">Studio</th>
                  <th className="py-3 px-4 w-[11%] font-normal tabular-nums">Year</th>
                  <th className="py-3 px-4 w-[11%] text-right font-normal">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)] text-sm">
                {displayedCredits.map((credit) => {
                  const hasContribution = credit.contribution !== undefined;
                  const isRowExpanded = Boolean(expandedContributions[credit.id]);

                  return (
                    <tr
                      key={credit.id}
                      onClick={() => handleOpenDetail(credit)}
                      className="hover:bg-[#0e1724]/40 transition-colors cursor-pointer"
                    >
                      <td className="py-3 px-4" colSpan={5}>
                        <div className="grid grid-cols-12 items-center gap-3">
                          {/* Title Column with Poster Thumbnail */}
                          <div className="col-span-5 flex items-center gap-3 pr-2 min-w-0">
                            <div className="w-9 h-[54px] shrink-0 bg-[#0c121c] border border-[var(--line)] rounded-[var(--radius)] overflow-hidden flex items-center justify-center">
                              <img
                                src={`/posters/${credit.id}.jpg`}
                                alt={credit.title}
                                width={36}
                                height={54}
                                loading="lazy"
                                className="w-full h-full object-cover object-center"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>

                            <div className="flex flex-col items-start min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-semibold text-[var(--text-1)] leading-snug">
                                  {credit.title}
                                </span>
                                {credit.highlight && (
                                  <span className="micro-label text-[9px] text-[var(--text-3)] font-normal lowercase tracking-normal">
                                    · {credit.highlight}
                                  </span>
                                )}
                              </div>

                              {hasContribution && (
                                <button
                                  type="button"
                                  onClick={(e) => toggleContribution(e, credit.id)}
                                  className="micro-label text-[9px] mt-1 text-[var(--text-3)] hover:text-[var(--text-1)] flex items-center gap-1 transition-colors"
                                >
                                  <ChevronRight
                                    className={`w-2.5 h-2.5 transition-transform ${
                                      isRowExpanded ? 'rotate-90' : ''
                                    }`}
                                  />
                                  <span>{isRowExpanded ? 'Hide ownership' : 'Ownership detail'}</span>
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Role */}
                          <div className="col-span-3 text-[var(--text-2)] text-xs truncate">
                            {credit.role}
                          </div>

                          {/* Studio */}
                          <div className="col-span-2 text-[var(--text-3)] text-xs truncate">
                            {credit.studio}
                          </div>

                          {/* Year */}
                          <div className="col-span-1 text-[var(--text-2)] text-xs tabular-nums font-mono">
                            {credit.year}
                          </div>

                          {/* Type */}
                          <div className="col-span-1 text-right">
                            <span className="micro-label text-[9px] text-[var(--text-3)]">
                              {credit.category === 'film' ? 'Film' : 'Series'}
                            </span>
                          </div>
                        </div>

                        {/* Expandable Contribution Row */}
                        {hasContribution && isRowExpanded && (
                          <div className="mt-3 p-3 border border-[var(--line)] bg-[#090d14] rounded-[var(--radius)] text-xs">
                            <span className="micro-label text-[9px] text-[var(--text-3)] block mb-1">
                              Supervisory & Craft Ownership
                            </span>
                            {credit.contribution ? (
                              <p className="text-[var(--text-2)] leading-relaxed">{credit.contribution}</p>
                            ) : (
                              <p className="text-[var(--text-3)] italic font-mono">
                                [ TODO: Add contribution detail for {credit.title} ]
                              </p>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Expander: "Show all 52 credits" */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="micro-label px-5 py-2.5 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] bg-transparent rounded-[var(--radius)] transition-colors flex items-center gap-2"
          >
            {isExpanded ? (
              <>
                <span>Show Fewer ({defaultCount} Credits)</span>
                <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <span>Show All 52 Credits</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

        {/* External Link: IMDb */}
        <div className="mt-12 text-center">
          <a
            href="https://www.imdb.com/name/nm6199377/"
            target="_blank"
            rel="noopener noreferrer"
            className="micro-label text-[10px] text-[var(--text-3)] hover:text-[var(--text-1)] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Verify Complete 52 Filmography Credits on IMDb</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

      {/* Credit Detail Modal */}
      <FilmDetailModal
        credit={selectedCredit}
        isOpen={isModalOpen}
        onClose={handleCloseDetail}
      />
    </section>
  );
}
