'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ArrowUpRight,
  Camera,
  Sparkles,
  SlidersHorizontal,
  Eye,
  Film,
  Layers,
  CheckCircle2,
  Play,
  ExternalLink,
  Cpu,
} from 'lucide-react';
import { personalWorkData, SelectedWorkItem, AssetCategory } from '@/data/selectedWork';
import { showBreakdownData, ShowBreakdownItem } from '@/data/showBreakdown';
import WorkDetailModal from './WorkDetailModal';
import ShowBreakdownModal from './ShowBreakdownModal';
import ShowreelModal from './ShowreelModal';

type ActiveTab = 'breakdown' | 'personal';
type PersonalFilterCategory = 'All' | AssetCategory;

export default function SelectedWork() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<ActiveTab>(
    tabParam === 'personal' ? 'personal' : 'breakdown'
  );

  useEffect(() => {
    if (tabParam === 'personal' || tabParam === 'breakdown') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (newTab: ActiveTab) => {
    setActiveTab(newTab);
    const newUrl = `/work?tab=${newTab}`;
    window.history.replaceState(null, '', newUrl);
  };

  const [personalCategory, setPersonalCategory] = useState<PersonalFilterCategory>('All');
  
  // Personal work modal state
  const [selectedPersonalItem, setSelectedPersonalItem] = useState<SelectedWorkItem | null>(null);
  const [modalInitialIdx, setModalInitialIdx] = useState<number>(0);
  const [isPersonalModalOpen, setIsPersonalModalOpen] = useState(false);

  // Show breakdown modal & showreel modal state
  const [selectedBreakdownItem, setSelectedBreakdownItem] = useState<ShowBreakdownItem | null>(null);
  const [breakdownModalTab, setBreakdownModalTab] = useState<'video' | 'details'>('video');
  const [isBreakdownModalOpen, setIsBreakdownModalOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  // Track active camera angle index per personal card
  const [cardAngleIndices, setCardAngleIndices] = useState<Record<string, number>>({});

  const filteredPersonalItems = personalWorkData.filter((item) => {
    if (personalCategory === 'All') return true;
    return item.category === personalCategory;
  });

  const totalPersonalAngles = personalWorkData.reduce((acc, curr) => acc + curr.images.length, 0);

  const handleOpenPersonalDetail = (item: SelectedWorkItem, imageIdx?: number) => {
    const chosenIdx = imageIdx !== undefined 
      ? imageIdx 
      : (cardAngleIndices[item.id] ?? item.defaultImageIndex ?? 0);
    setSelectedPersonalItem(item);
    setModalInitialIdx(chosenIdx);
    setIsPersonalModalOpen(true);
  };

  const handleCardAngleSwitch = (e: React.MouseEvent, itemId: string, idx: number) => {
    e.stopPropagation();
    setCardAngleIndices((prev) => ({
      ...prev,
      [itemId]: idx,
    }));
  };

  const handleOpenBreakdown = (item: ShowBreakdownItem, tab: 'video' | 'details' = 'video') => {
    setSelectedBreakdownItem(item);
    setBreakdownModalTab(tab);
    setIsBreakdownModalOpen(true);
  };

  return (
    <section
      id="work"
      className="relative py-[60px] lg:py-[90px] min-h-[calc(100vh-140px)] bg-[var(--bg-blue)]"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-8 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="micro-label text-[var(--accent)] flex items-center gap-1.5 font-mono">
                {activeTab === 'breakdown' ? (
                  <Film className="w-3 h-3" />
                ) : (
                  <Camera className="w-3 h-3" />
                )}
                {activeTab === 'breakdown'
                  ? 'Section 01 · Feature Film & Episodic VFX Production Supervision'
                  : 'Section 02 · 3D Digital Sculpting & Organic Anatomy'}
              </span>
              <span className="text-[var(--text-3)] text-xs">·</span>
              <span className="micro-label text-[var(--text-3)] font-mono">
                {activeTab === 'breakdown' ? 'Production Breakdown' : 'Personal Work'}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-1)] leading-tight">
              {activeTab === 'breakdown' ? 'Show Breakdown' : 'Personal Work'}
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[var(--text-2)] mb-4">
              {activeTab === 'breakdown'
                ? 'Technical modeling breakdowns, asset turntable passes, and production supervision case studies across major studio feature films.'
                : 'High-frequency character likenesses, digital double photogrammetry studies, organic creature anatomy, and skin shader lookdev passes.'}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[var(--line-blue)] text-xs text-[var(--text-3)] font-mono">
              <span>
                <strong className="text-[var(--text-1)] font-semibold">{showBreakdownData.length}</strong> Show Breakdowns
              </span>
              <span>·</span>
              <span>
                <strong className="text-[var(--text-1)] font-semibold">{personalWorkData.length}</strong> Personal Sculpt Projects
              </span>
              <span>·</span>
              <span>
                <strong className="text-[var(--text-1)] font-semibold">{totalPersonalAngles}</strong> Master Camera Passes
              </span>
            </div>
          </div>
        </div>

        {/* Primary 2-Tab Switcher on Top */}
        <div className="sticky top-[74px] z-30 bg-[#07090e]/95 backdrop-blur-md border border-[var(--line-strong)] rounded-[var(--radius)] p-1.5 mb-10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 w-full sm:w-auto sm:flex sm:items-center">
              {/* Tab 1: Show Breakdown */}
              <button
                type="button"
                id="tab-btn-show-breakdown"
                onClick={() => handleTabChange('breakdown')}
                className={`micro-label px-4 sm:px-6 py-2.5 rounded-[var(--radius)] transition-all flex items-center justify-center gap-2 text-xs sm:text-[13px] font-mono font-medium ${
                  activeTab === 'breakdown'
                    ? 'bg-[var(--line-strong)] text-[var(--text-1)] shadow-sm border border-[var(--accent)] font-semibold'
                    : 'text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[#0c1420] border border-transparent'
                }`}
              >
                <Film className={`w-3.5 h-3.5 ${activeTab === 'breakdown' ? 'text-[var(--accent)]' : 'text-[var(--text-3)]'}`} />
                <span>Show Breakdown</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  activeTab === 'breakdown'
                    ? 'bg-[var(--accent)]/20 text-[var(--accent)] font-bold border border-[var(--accent)]/40'
                    : 'bg-[#0c1420] text-[var(--text-3)]'
                }`}>
                  {showBreakdownData.length}
                </span>
              </button>

              {/* Tab 2: Personal Work */}
              <button
                type="button"
                id="tab-btn-personal-work"
                onClick={() => handleTabChange('personal')}
                className={`micro-label px-4 sm:px-6 py-2.5 rounded-[var(--radius)] transition-all flex items-center justify-center gap-2 text-xs sm:text-[13px] font-mono font-medium ${
                  activeTab === 'personal'
                    ? 'bg-[var(--line-strong)] text-[var(--text-1)] shadow-sm border border-[var(--accent)] font-semibold'
                    : 'text-[var(--text-3)] hover:text-[var(--text-1)] hover:bg-[#0c1420] border border-transparent'
                }`}
              >
                <Camera className={`w-3.5 h-3.5 ${activeTab === 'personal' ? 'text-[var(--accent)]' : 'text-[var(--text-3)]'}`} />
                <span>Personal Work</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  activeTab === 'personal'
                    ? 'bg-[var(--accent)]/20 text-[var(--accent)] font-bold border border-[var(--accent)]/40'
                    : 'bg-[#0c1420] text-[var(--text-3)]'
                }`}>
                  {personalWorkData.length}
                </span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 pr-2 micro-label text-[11px] text-[var(--text-3)] font-mono">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>
                {activeTab === 'breakdown'
                  ? `${showBreakdownData.length} Feature Film Breakdowns · Video Showreel Included`
                  : `${personalWorkData.length} Sculpt Studies · ${totalPersonalAngles} Turntable Camera Passes`}
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: SHOW BREAKDOWN */}
        {/* ============================================================== */}
        {activeTab === 'breakdown' && (
          <div className="mb-20" id="show-breakdown-section">
            
            {/* Section Eyebrow & Title */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--line-blue)] mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="micro-label text-[var(--accent)] font-mono flex items-center gap-1.5 text-[10px]">
                    <Film className="w-3 h-3" />
                    Section 01 · Production Supervision
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-1)] tracking-tight">
                  Show Breakdown
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-2)] mt-1">
                  VFX modeling &amp; asset supervisory breakdowns for major feature film and episodic productions.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsShowreelOpen(true)}
                  className="micro-label px-3.5 py-1.5 border border-[var(--line-strong)] hover:border-[var(--accent)] text-[var(--text-1)] hover:text-[var(--accent)] rounded-[var(--radius)] transition-colors flex items-center gap-1.5 font-mono text-[11px]"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Launch Vimeo Reel</span>
                </button>
              </div>
            </div>

            {/* Embedded Showreel Cinema Player */}
            <div className="border border-[var(--line-strong)] rounded-[var(--radius)] bg-[#080d16] overflow-hidden mb-10 shadow-2xl">
              <div className="px-5 py-3.5 border-b border-[var(--line-blue)] bg-[#060a10] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="p-1 rounded bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)]">
                    <Film className="w-3.5 h-3.5" />
                  </span>
                  <span className="micro-label text-[11px] font-semibold text-[var(--text-1)] font-mono">
                    Ganesh Poojari — Official VFX Production Showreel
                  </span>
                </div>

                <div className="flex items-center gap-3 micro-label text-[10px] text-[var(--text-3)] font-mono">
                  <span>Framestore · PIXOMONDO · DNEG</span>
                  <a
                    href="https://vimeo.com/1031133774"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] inline-flex items-center gap-1 text-[var(--text-2)] transition-colors"
                  >
                    <span>Vimeo</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <div className="relative aspect-video w-full bg-[#000000]">
                <iframe
                  src="https://player.vimeo.com/video/1031133774?title=0&byline=0&portrait=0"
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Ganesh Poojari — VFX Production Showreel"
                  loading="lazy"
                />
              </div>

              <div className="px-5 py-3 border-t border-[var(--line-blue)] bg-[#060a0f] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--text-3)] font-mono">
                <span>Featured Breakdown Shots: Dragons, Creatures, Ornithopters, Digital Doubles</span>
                <span className="text-[var(--accent)] text-[11px]">Click cards below for technical breakdowns ↓</span>
              </div>
            </div>

            {/* Production Breakdown Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {showBreakdownData.map((item) => (
                <article
                  key={item.id}
                  onClick={() => handleOpenBreakdown(item, (item.youtubeId || item.localVideoSrc || (item.videos && item.videos.length > 0)) ? 'video' : 'details')}
                  className="group border border-[var(--line-blue)] hover:border-[var(--line-strong)] bg-[#080d14]/70 hover:bg-[#0a1018] rounded-[var(--radius)] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5"
                >
                  <div>
                    {/* Poster / Video Header Preview */}
                    <div className="relative aspect-[16/10] w-full border-b border-[var(--line-blue)] bg-[#070b10] overflow-hidden">
                      <img
                        src={item.posterSrc}
                        alt={`${item.show} — ${item.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-[#080d14]/50 to-transparent" />

                      {/* Video Play Overlay */}
                      {(item.youtubeId || item.localVideoSrc || (item.videos && item.videos.length > 0)) && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-500 transition-all border border-white/20">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-[var(--radius)] bg-[#070b10]/90 backdrop-blur-sm border border-[var(--line-blue)] micro-label text-[9px] text-[var(--accent)] font-mono">
                        {item.role.toUpperCase()}
                      </div>

                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-[var(--radius)] bg-[#070b10]/90 backdrop-blur-sm border border-[var(--line-blue)] micro-label text-[9px] text-[var(--text-2)] font-mono">
                        {item.year}
                      </div>

                      {/* Video Duration / Assets Badge */}
                      {item.videoDuration && (
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/10 micro-label text-[9px] text-red-400 font-mono flex items-center gap-1">
                          <Play className="w-2.5 h-2.5 fill-current" />
                          <span>{item.videoDuration}</span>
                        </div>
                      )}

                      {/* Title Overlay in Visual Area */}
                      <div className="absolute bottom-3 left-3 right-20">
                        <div className="micro-label text-[10px] text-[var(--accent)] font-mono mb-0.5 truncate">
                          {item.studio} {item.location ? `· ${item.location}` : ''}
                        </div>
                        <h3 className="text-lg font-bold text-[var(--text-1)] group-hover:text-white transition-colors leading-tight">
                          {item.show}
                        </h3>
                      </div>
                    </div>

                    {/* Breakdown Content */}
                    <div className="p-4 sm:p-5">
                      <h4 className="text-xs sm:text-[13px] font-semibold text-[var(--text-1)] mb-1 line-clamp-1">
                        {item.title}
                      </h4>

                      {(item.director || item.starring) && (
                        <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[var(--text-3)] font-mono mb-2">
                          {item.director && <span>Dir: {item.director}</span>}
                          {item.director && item.starring && <span>·</span>}
                          {item.starring && <span>Starring: {item.starring}</span>}
                        </div>
                      )}

                      <p className="text-xs text-[var(--text-2)] leading-relaxed line-clamp-2 mb-3.5">
                        {item.summary}
                      </p>

                      {/* Deliverables snippet */}
                      <div className="space-y-1.5 mb-3.5">
                        {item.deliverables.slice(0, 2).map((del, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[11px] text-[var(--text-2)]">
                            <CheckCircle2 className="w-3 h-3 text-[var(--accent)] mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{del}</span>
                          </div>
                        ))}
                      </div>

                      {/* Software stack */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        {item.software.map((sw) => (
                          <span
                            key={sw}
                            className="px-1.5 py-0.5 rounded-[var(--radius)] bg-[#0b121b] border border-[var(--line-blue)] text-[9px] micro-label text-[var(--text-3)] font-mono"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-4 sm:px-5 py-3 border-t border-[var(--line-blue)] bg-[#070b10] flex items-center justify-between gap-2">
                    {(item.youtubeId || item.localVideoSrc || (item.videos && item.videos.length > 0)) ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenBreakdown(item, 'video');
                        }}
                        className="py-1.5 px-3 rounded-[var(--radius)] bg-red-600/15 hover:bg-red-600/30 border border-red-500/30 text-red-400 hover:text-white transition-colors flex items-center gap-1.5 text-[11px] font-mono font-medium"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Watch Breakdown</span>
                      </button>
                    ) : (
                      <span className="micro-label text-[10px] text-[var(--text-3)] font-mono">
                        {item.heroAsset}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenBreakdown(item, 'details');
                      }}
                      className="py-1.5 px-2.5 rounded-[var(--radius)] bg-[#0b121b] hover:bg-[var(--line-strong)] border border-[var(--line-blue)] text-[var(--text-2)] hover:text-[var(--text-1)] transition-colors flex items-center gap-1.5 text-[11px] font-mono"
                    >
                      <Cpu className="w-3 h-3 text-[var(--accent)]" />
                      <span>Production Specs</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: PERSONAL WORK */}
        {/* ============================================================== */}
        {activeTab === 'personal' && (
          <div className="mb-20" id="personal-work-section">
            
            {/* Section Eyebrow & Title */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[var(--line-blue)] mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="micro-label text-[var(--accent)] font-mono flex items-center gap-1.5 text-[10px]">
                    <Camera className="w-3 h-3" />
                    Section 02 · 3D Sculpting &amp; Anatomy
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-1)] tracking-tight">
                  Personal Work
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-2)] mt-1">
                  High-fidelity character likenesses, organic creature anatomy, and skin shader lookdev passes.
                </p>
              </div>

              {/* Personal Category Filters */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setPersonalCategory('All')}
                  className={`micro-label px-3 py-1.5 rounded-[var(--radius)] transition-colors text-[11px] font-mono ${
                    personalCategory === 'All'
                      ? 'bg-[var(--line-blue)] text-[var(--text-1)] font-medium border border-[var(--line-strong)]'
                      : 'text-[var(--text-3)] hover:text-[var(--text-2)] border border-transparent'
                  }`}
                >
                  All ({personalWorkData.length})
                </button>

                <button
                  type="button"
                  onClick={() => setPersonalCategory('Character')}
                  className={`micro-label px-3 py-1.5 rounded-[var(--radius)] transition-colors text-[11px] font-mono ${
                    personalCategory === 'Character'
                      ? 'bg-[var(--line-blue)] text-[var(--text-1)] font-medium border border-[var(--line-strong)]'
                      : 'text-[var(--text-3)] hover:text-[var(--text-2)] border border-transparent'
                  }`}
                >
                  Characters ({personalWorkData.filter((i) => i.category === 'Character').length})
                </button>

                <button
                  type="button"
                  onClick={() => setPersonalCategory('Creature')}
                  className={`micro-label px-3 py-1.5 rounded-[var(--radius)] transition-colors text-[11px] font-mono ${
                    personalCategory === 'Creature'
                      ? 'bg-[var(--line-blue)] text-[var(--text-1)] font-medium border border-[var(--line-strong)]'
                      : 'text-[var(--text-3)] hover:text-[var(--text-2)] border border-transparent'
                  }`}
                >
                  Creatures ({personalWorkData.filter((i) => i.category === 'Creature').length})
                </button>
              </div>
            </div>

            {/* Personal Work 3D Grid / Empty State */}
            {filteredPersonalItems.length === 0 ? (
              <div className="border border-dashed border-[var(--line-blue)] rounded-[var(--radius)] py-16 px-6 text-center bg-[#080d14]/50 my-2">
                <div className="inline-flex p-3 rounded-full bg-[#0b1420] border border-[var(--line-blue)] text-[var(--accent)] mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text-1)] mb-1.5 font-display">
                  Personal Work Collection Ready to Add
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-2)] max-w-[50ch] mx-auto leading-relaxed mb-5">
                  All 13 master 3D sculpt assets are safely cataloged and backed up. Ready for you to add your projects one-by-one.
                </p>
                <div className="inline-flex items-center gap-2 micro-label text-[10px] text-[var(--text-3)] bg-[#070b10] border border-[var(--line-blue)] px-3.5 py-1.5 rounded-[var(--radius)] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span>Ready for Curation · Catalog Backed Up</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredPersonalItems.map((item) => {
                  const activeIdx = cardAngleIndices[item.id] ?? item.defaultImageIndex ?? 0;
                  const currentImg = item.images[activeIdx] || item.images[0];
                  const hasMultipleAngles = item.images.length > 1;

                return (
                  <article
                    key={item.id}
                    onClick={() => handleOpenPersonalDetail(item, activeIdx)}
                    className="group border border-[var(--line-blue)] hover:border-[var(--line-strong)] bg-[#080d14]/70 hover:bg-[#0a1018] rounded-[var(--radius)] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div>
                      {/* Flush Preview Image with Ratio */}
                      <div className="relative aspect-[16/11] w-full border-b border-[var(--line-blue)] bg-[#070b10] overflow-hidden flex items-center justify-center">
                        <img
                          key={currentImg.src}
                          src={currentImg.src}
                          alt={`${item.title} — ${currentImg.label}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                        />

                        {/* Gradient Vignette for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080d14]/90 via-transparent to-black/30 pointer-events-none" />

                        {/* Top Left: Category Tag */}
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-[var(--radius)] bg-[#070b10]/90 backdrop-blur-sm border border-[var(--line-blue)] micro-label text-[9px] text-[var(--accent)] font-mono">
                          {item.category.toUpperCase()}
                        </div>

                        {/* Top Right: Angles Badge */}
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-[var(--radius)] bg-[#070b10]/90 backdrop-blur-sm border border-[var(--line-blue)] micro-label text-[9px] text-[var(--text-2)] font-mono flex items-center gap-1.5">
                          <Camera className="w-2.5 h-2.5 text-[var(--accent)]" />
                          <span>{item.images.length} {item.images.length === 1 ? 'Shot' : 'Angles'}</span>
                        </div>

                        {/* Active Label Overlay on Hover/Focus */}
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                          <span className="micro-label text-[10px] text-[var(--text-1)] font-mono bg-[#05070a]/90 backdrop-blur-sm px-2 py-0.5 rounded-[var(--radius)] border border-[var(--line-blue)] truncate max-w-[80%]">
                            {currentImg.label}
                          </span>
                          <div className="p-1 border border-[var(--line-blue)] bg-[#070b10]/90 text-[var(--text-3)] group-hover:text-[var(--text-1)] group-hover:border-[var(--line-strong)] rounded-[var(--radius)] opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>

                      {/* Interactive Angle/Closeup Switcher Bar */}
                      {hasMultipleAngles && (
                        <div className="px-3 py-2 border-b border-[var(--line-blue)] bg-[#060a0f] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                          <span className="micro-label text-[9px] text-[var(--text-3)] uppercase font-mono tracking-wider shrink-0 pr-1 flex items-center gap-1">
                            <Eye className="w-2.5 h-2.5" />
                            Angle:
                          </span>
                          {item.images.slice(0, 6).map((img, idx) => {
                            const isCurrent = idx === activeIdx;
                            return (
                              <button
                                key={`${img.src}-${idx}`}
                                type="button"
                                onClick={(e) => handleCardAngleSwitch(e, item.id, idx)}
                                title={img.label}
                                className={`micro-label text-[9px] font-mono px-2 py-0.5 rounded-[var(--radius)] transition-colors shrink-0 ${
                                  isCurrent
                                    ? 'bg-[var(--line-strong)] text-[var(--text-1)] border border-[var(--accent)]'
                                    : 'text-[var(--text-3)] hover:text-[var(--text-2)] hover:bg-[var(--line-blue)]/50 border border-transparent'
                                }`}
                              >
                                {String(idx + 1).padStart(2, '0')}
                              </button>
                            );
                          })}
                          {item.images.length > 6 && (
                            <span className="micro-label text-[8px] text-[var(--text-3)] shrink-0 font-mono">
                              +{item.images.length - 6} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Card Meta */}
                      <div className="p-4 sm:p-5">
                        <h3 className="text-base sm:text-lg font-semibold text-[var(--text-1)] group-hover:text-[var(--accent)] transition-colors leading-snug mb-1.5 line-clamp-1">
                          {item.title}
                        </h3>

                        <p className="text-xs text-[var(--text-2)] leading-relaxed line-clamp-2 mb-3">
                          {item.brief}
                        </p>

                        {/* Software tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {item.software.map((tool) => (
                            <span
                              key={tool}
                              className="px-1.5 py-0.5 rounded-[var(--radius)] bg-[#0b121b] border border-[var(--line-blue)] text-[9px] micro-label text-[var(--text-3)] font-mono"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-4 sm:px-5 py-3 border-t border-[var(--line-blue)] bg-[#070b10] flex items-center justify-between text-xs">
                      <span className="micro-label text-[10px] text-[var(--text-3)] font-mono">
                        {item.studio}
                      </span>
                      <span className="micro-label text-[10px] text-[var(--accent)] group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-medium font-mono">
                        Inspect in 4K →
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
            )}

          </div>
        )}

        {/* Bottom Contact / Inquiries Callout */}
        <div className="mt-8 p-6 sm:p-7 border border-[var(--line-blue)] rounded-[var(--radius)] bg-[#090e16]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <span className="micro-label text-[10px] text-[var(--accent)] block mb-1 uppercase font-mono">
              Production Modeling &amp; Asset Supervision Inquiries
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-2)] max-w-[65ch]">
              Looking for creature/character supervision, topology turntables, or lookdev handoff tests? Additional private breakdown reels and production wireframes are available upon request.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 border border-[var(--line-strong)] hover:border-[var(--accent)] rounded-[var(--radius)] micro-label text-[11px] text-[var(--text-1)] hover:text-[var(--accent)] transition-colors shrink-0 font-mono"
          >
            Get in Touch
          </a>
        </div>

      </div>

      {/* Lightbox Modals */}
      <WorkDetailModal
        item={selectedPersonalItem}
        initialImageIndex={modalInitialIdx}
        isOpen={isPersonalModalOpen}
        onClose={() => setIsPersonalModalOpen(false)}
      />

      <ShowBreakdownModal
        item={selectedBreakdownItem}
        isOpen={isBreakdownModalOpen}
        onClose={() => setIsBreakdownModalOpen(false)}
        onOpenShowreel={() => setIsShowreelOpen(true)}
        initialTab={breakdownModalTab}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
    </section>
  );
}
