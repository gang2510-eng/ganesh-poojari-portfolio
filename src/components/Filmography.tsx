'use client';

import { useState, useMemo } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, ArrowUpDown, ChevronRight, Info } from 'lucide-react';
import { filmographyData, FilmCredit } from '@/data/filmographyData';

type CategoryFilter = 'all' | 'film' | 'tv';
type SortField = 'year' | 'title' | 'studio' | 'role';
type SortDirection = 'asc' | 'desc';

export default function Filmography() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [expandedContributions, setExpandedContributions] = useState<Record<string, boolean>>({});

  const toggleContribution = (id: string) => {
    setExpandedContributions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection(field === 'year' ? 'desc' : 'asc');
    }
  };

  // Filtered and sorted credits
  const filteredCredits = useMemo(() => {
    return filmographyData.filter((item) => {
      if (filter === 'all') return true;
      return item.category === filter;
    });
  }, [filter]);

  const sortedCredits = useMemo(() => {
    return [...filteredCredits].sort((a, b) => {
      const aVal = a[sortField] || '';
      const bVal = b[sortField] || '';

      if (sortField === 'year') {
        // Parse leading numeric year for reliable comparison
        const aNum = parseInt(aVal.match(/\d{4}/)?.[0] || '0', 10);
        const bNum = parseInt(bVal.match(/\d{4}/)?.[0] || '0', 10);
        return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
      }

      const comparison = aVal.localeCompare(bVal);
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredCredits, sortField, sortDirection]);

  // Display 12 by default, or all if expanded
  const displayedCredits = isExpanded ? sortedCredits : sortedCredits.slice(0, 12);

  const filmCount = filmographyData.filter((p) => p.category === 'film').length;
  const tvCount = filmographyData.filter((p) => p.category === 'tv').length;

  return (
    <section id="filmography" className="py-24 border-t border-zinc-800/60 bg-[#09090b] relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest bg-zinc-900/90 px-3 py-1 rounded-full border border-zinc-800">
              Verified Production Credits
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-4 text-zinc-100">
              Filmography
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mt-2">
              Complete record of {filmographyData.length} Hollywood feature films, television series & animation credits.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-full bg-zinc-900/80 border border-zinc-800/80 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              All ({filmographyData.length})
            </button>
            <button
              onClick={() => setFilter('film')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === 'film'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Feature Films ({filmCount})
            </button>
            <button
              onClick={() => setFilter('tv')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === 'tv'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              TV & Series ({tvCount})
            </button>
          </div>
        </div>

        {/* Compact Sortable Credits Table */}
        <div className="double-bezel overflow-hidden">
          <div className="double-bezel-inner p-2 sm:p-4 bg-zinc-950/70 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-zinc-800/80 text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                  <th
                    onClick={() => handleSort('title')}
                    className="py-3 px-4 cursor-pointer hover:text-zinc-300 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Title</span>
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('role')}
                    className="py-3 px-4 cursor-pointer hover:text-zinc-300 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Role</span>
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('studio')}
                    className="py-3 px-4 cursor-pointer hover:text-zinc-300 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Studio</span>
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('year')}
                    className="py-3 px-4 cursor-pointer hover:text-zinc-300 transition-colors select-none"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Year</span>
                      <ArrowUpDown className="w-3 h-3 opacity-60" />
                    </div>
                  </th>
                  <th className="py-3 px-4 text-right">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/90 text-xs sm:text-sm font-light">
                {displayedCredits.map((credit) => {
                  const hasContribution = credit.contribution !== undefined;
                  const isRowExpanded = Boolean(expandedContributions[credit.id]);

                  return (
                    <tr
                      key={credit.id}
                      className="hover:bg-zinc-900/40 transition-colors group"
                    >
                      {/* Title & Highlights & Contribution toggle */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-zinc-100 font-medium">
                            {credit.title}
                          </span>

                          {credit.highlight && (
                            <span className="inline-block text-[10px] font-medium text-zinc-300 bg-zinc-900 border border-zinc-700/60 px-2 py-0.5 rounded">
                              {credit.highlight}
                            </span>
                          )}

                          {hasContribution && (
                            <button
                              onClick={() => toggleContribution(credit.id)}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                              title="Toggle ownership & contribution detail"
                            >
                              <Info className="w-2.5 h-2.5" />
                              <span>{isRowExpanded ? 'Hide ownership' : 'Ownership detail'}</span>
                              <ChevronRight
                                className={`w-2.5 h-2.5 transition-transform ${
                                  isRowExpanded ? 'rotate-90' : ''
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Expandable Contribution Row Detail for Key Shows */}
                        {hasContribution && isRowExpanded && (
                          <div className="mt-2.5 p-3 rounded-lg bg-zinc-900/70 border border-zinc-800/80 text-xs text-zinc-300">
                            <span className="font-semibold text-zinc-200 mr-1.5">
                              Contribution & Ownership:
                            </span>
                            {credit.contribution ? (
                              <span>{credit.contribution}</span>
                            ) : (
                              <span className="text-zinc-500 italic">
                                [TODO: Ownership detail to be added for {credit.title}]
                              </span>
                            )}
                          </div>
                        )}
                      </td>

                      {/* Role */}
                      <td className="py-3.5 px-4 text-zinc-300">
                        {credit.role}
                      </td>

                      {/* Studio */}
                      <td className="py-3.5 px-4 text-zinc-400">
                        {credit.studio}
                      </td>

                      {/* Year */}
                      <td className="py-3.5 px-4 text-zinc-400 font-mono text-xs">
                        {credit.year}
                      </td>

                      {/* Type Badge */}
                      <td className="py-3.5 px-4 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-zinc-900 border border-zinc-800 text-zinc-400">
                          {credit.category === 'film' ? 'Film' : 'Series'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expander Button: Show all 52 credits / Show fewer */}
        {sortedCredits.length > 12 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white transition-all shadow-sm"
            >
              {isExpanded ? (
                <>
                  <span>Show fewer (12 credits)</span>
                  <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
                </>
              ) : (
                <>
                  <span>Show all {sortedCredits.length} credits</span>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                </>
              )}
            </button>
          </div>
        )}

        {/* IMDb Link Callout */}
        <div className="mt-14 text-center">
          <a
            href="https://www.imdb.com/name/nm6199377/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 px-6 py-3 rounded-full transition-all"
          >
            <span>Complete IMDb Profile (52 Verified Credits)</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
