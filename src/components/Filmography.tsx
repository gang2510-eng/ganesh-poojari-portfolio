'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ExternalLink } from 'lucide-react';
import { filmographyData, FilmCredit } from '@/data/filmographyData';

type CategoryFilter = 'all' | 'film' | 'tv';

export default function Filmography() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [expandedContributions, setExpandedContributions] = useState<Record<string, boolean>>({});

  const toggleContribution = (id: string) => {
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

  // Display 12 by default, or all if expanded
  const displayedCredits = isExpanded ? filteredCredits : filteredCredits.slice(0, 12);

  const filmCount = filmographyData.filter((p) => p.category === 'film').length;
  const tvCount = filmographyData.filter((p) => p.category === 'tv').length;

  return (
    <section
      id="filmography"
      className="relative py-[80px] lg:py-[140px] border-b border-[var(--line)] bg-[var(--bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Asymmetric Section Header: Cols 1–5 heading, Cols 8–12 text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 items-end">
          <div className="lg:col-span-5">
            <span className="micro-label text-[var(--text-3)] block mb-3">
              Production History
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-none">
              Filmography
            </h2>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p className="text-[17px] leading-[1.65] text-[var(--text-2)] max-w-[48ch]">
              Complete chronological record of 52 Hollywood feature films and episodic television series across major international facilities.
            </p>

            {/* Filter Tabs: ORANGE USE 3 OF 4 (Active filter tab) */}
            <div className="flex items-center border border-[var(--line)] rounded-[var(--radius)] overflow-hidden shrink-0 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`micro-label px-3.5 py-2 transition-colors border-r border-[var(--line)] ${
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
                className={`micro-label px-3.5 py-2 transition-colors border-r border-[var(--line)] ${
                  filter === 'film'
                    ? 'text-[var(--text-1)] bg-[#121b27] border-b-2 border-b-[var(--accent)] font-semibold'
                    : 'text-[var(--text-3)] hover:text-[var(--text-1)] bg-transparent'
                }`}
              >
                Feature Films ({filmCount})
              </button>

              <button
                type="button"
                onClick={() => setFilter('tv')}
                className={`micro-label px-3.5 py-2 transition-colors ${
                  filter === 'tv'
                    ? 'text-[var(--text-1)] bg-[#121b27] border-b-2 border-b-[var(--accent)] font-semibold'
                    : 'text-[var(--text-3)] hover:text-[var(--text-1)] bg-transparent'
                }`}
              >
                TV & Animation ({tvCount})
              </button>
            </div>
          </div>
        </div>

        {/* Desktop / Tablet 5-Column Table (>= 768px) */}
        <div className="hidden md:block border border-[var(--line)] rounded-[var(--radius)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--line)] bg-[#0c121c] micro-label text-[10px] text-[var(--text-3)]">
                <th className="py-3 px-4 w-[34%] font-normal">Title</th>
                <th className="py-3 px-4 w-[24%] font-normal">Role</th>
                <th className="py-3 px-4 w-[18%] font-normal">Studio</th>
                <th className="py-3 px-4 w-[12%] font-normal tabular-nums">Year</th>
                <th className="py-3 px-4 w-[12%] text-right font-normal">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] text-sm">
              {displayedCredits.map((credit) => {
                const hasContribution = credit.contribution !== undefined;
                const isRowExpanded = Boolean(expandedContributions[credit.id]);

                return (
                  <tr
                    key={credit.id}
                    className="hover:bg-[#0e1724]/40 transition-colors"
                  >
                    <td className="py-3.5 px-4" colSpan={5}>
                      <div className="grid grid-cols-12 items-center gap-2">
                        {/* Title & Plain-Text Award Callout */}
                        <div className="col-span-4 flex flex-col items-start pr-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-[var(--text-1)] leading-snug">
                              {credit.title}
                            </span>
                            {/* Award callouts become plain text */}
                            {credit.highlight && (
                              <span className="micro-label text-[9px] text-[var(--text-3)] font-normal lowercase tracking-normal">
                                · {credit.highlight}
                              </span>
                            )}
                          </div>

                          {/* Ownership toggle button if show has contribution field */}
                          {hasContribution && (
                            <button
                              type="button"
                              onClick={() => toggleContribution(credit.id)}
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

                        {/* Role */}
                        <div className="col-span-3 text-[var(--text-2)] text-xs truncate">
                          {credit.role}
                        </div>

                        {/* Studio */}
                        <div className="col-span-2 text-[var(--text-3)] text-xs truncate">
                          {credit.studio}
                        </div>

                        {/* Year (Tabular-nums) */}
                        <div className="col-span-2 text-[var(--text-2)] text-xs tabular-nums font-mono">
                          {credit.year}
                        </div>

                        {/* Type */}
                        <div className="col-span-1 text-right">
                          <span className="micro-label text-[9px] text-[var(--text-3)]">
                            {credit.category === 'film' ? 'Film' : 'Series'}
                          </span>
                        </div>
                      </div>

                      {/* Expandable Contribution Row for Key Shows */}
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

        {/* Mobile Stacked Rows (< 768px, specifically tuned for 375px) */}
        <div className="md:hidden flex flex-col divide-y divide-[var(--line)] border border-[var(--line)] rounded-[var(--radius)] overflow-hidden">
          {displayedCredits.map((credit) => {
            const hasContribution = credit.contribution !== undefined;
            const isRowExpanded = Boolean(expandedContributions[credit.id]);

            return (
              <div key={credit.id} className="p-4 bg-[var(--bg)] flex flex-col gap-1.5">
                {/* Top: Title + Type */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <span className="font-semibold text-sm text-[var(--text-1)] leading-tight block">
                      {credit.title}
                    </span>
                    {/* Award plain text */}
                    {credit.highlight && (
                      <span className="micro-label text-[9px] text-[var(--text-3)] font-normal tracking-normal lowercase block mt-0.5">
                        · {credit.highlight}
                      </span>
                    )}
                  </div>
                  <span className="micro-label text-[9px] text-[var(--text-3)] shrink-0 px-1.5 py-0.5 border border-[var(--line)]">
                    {credit.category === 'film' ? 'Film' : 'Series'}
                  </span>
                </div>

                {/* Subline: Role */}
                <div className="text-xs text-[var(--text-2)]">
                  {credit.role}
                </div>

                {/* Meta: Studio · Year */}
                <div className="flex items-center justify-between text-xs text-[var(--text-3)] pt-1">
                  <span>{credit.studio}</span>
                  <span className="tabular-nums font-mono">{credit.year}</span>
                </div>

                {/* Optional Contribution Toggle Button */}
                {hasContribution && (
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => toggleContribution(credit.id)}
                      className="micro-label text-[9px] text-[var(--text-3)] hover:text-[var(--text-1)] flex items-center gap-1 transition-colors"
                    >
                      <ChevronRight
                        className={`w-2.5 h-2.5 transition-transform ${
                          isRowExpanded ? 'rotate-90' : ''
                        }`}
                      />
                      <span>{isRowExpanded ? 'Hide ownership' : 'Ownership detail'}</span>
                    </button>

                    {isRowExpanded && (
                      <div className="mt-2 p-2.5 border border-[var(--line)] bg-[#090d14] rounded-[var(--radius)] text-xs">
                        <span className="micro-label text-[8px] text-[var(--text-3)] block mb-1">
                          Ownership Detail
                        </span>
                        {credit.contribution ? (
                          <p className="text-[var(--text-2)] text-[11px] leading-relaxed">
                            {credit.contribution}
                          </p>
                        ) : (
                          <p className="text-[var(--text-3)] italic font-mono text-[11px]">
                            [ TODO: Add contribution detail for {credit.title} ]
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Expander: "Show all 52 credits" */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="micro-label px-5 py-2.5 border border-[var(--line)] hover:border-[var(--line-strong)] text-[var(--text-2)] hover:text-[var(--text-1)] bg-transparent rounded-[var(--radius)] transition-colors flex items-center gap-2"
          >
            {isExpanded ? (
              <>
                <span>Show Fewer (12 Credits)</span>
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
    </section>
  );
}
