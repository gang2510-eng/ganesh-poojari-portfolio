'use client';

import { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Film,
  CheckCircle2,
  Cpu,
  Wrench,
  Play,
  Layers,
  Award,
} from 'lucide-react';
import { ShowBreakdownItem } from '@/data/showBreakdown';

interface ShowBreakdownModalProps {
  item: ShowBreakdownItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenShowreel?: () => void;
  initialTab?: 'video' | 'details';
}

export default function ShowBreakdownModal({
  item,
  isOpen,
  onClose,
  onOpenShowreel,
  initialTab = 'video',
}: ShowBreakdownModalProps) {
  const [activeTab, setActiveTab] = useState<'video' | 'details'>('video');
  const [videoSourceMode, setVideoSourceMode] = useState<'youtube' | 'local'>('local');
  const [selectedVideoIdx, setSelectedVideoIdx] = useState<number>(0);

  useEffect(() => {
    if (item) {
      setSelectedVideoIdx(0);
      const firstVid = item.videos && item.videos.length > 0 ? item.videos[0] : null;
      const hasLocal = Boolean(firstVid?.localVideoSrc || item.localVideoSrc);
      setVideoSourceMode(hasLocal ? 'local' : 'youtube');
      if (initialTab === 'details' || (!item.youtubeId && !item.localVideoSrc && (!item.videos || item.videos.length === 0))) {
        setActiveTab('details');
      } else {
        setActiveTab('video');
      }
    }
  }, [item, initialTab, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#05070a]/94 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-[#090e17] border border-[var(--line-strong)] rounded-[var(--radius)] overflow-hidden flex flex-col max-h-[92vh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative px-5 py-4 sm:px-6 sm:py-5 border-b border-[var(--line-blue)] bg-gradient-to-r from-[#0c1422] to-[#070b12] flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="micro-label px-2.5 py-0.5 rounded-[var(--radius)] bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)] font-mono text-[10px]">
                {item.role}
              </span>
              <span className="text-[var(--text-3)] text-xs">·</span>
              <span className="micro-label text-[10px] text-[var(--text-2)] font-mono">
                {item.studio} {item.location ? `· ${item.location}` : ''} ({item.year})
              </span>
              {item.youtubeId && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-600/20 border border-red-500/40 text-red-400 font-mono text-[9px]">
                  <Play className="w-2.5 h-2.5 fill-current" />
                  YouTube Breakdown
                </span>
              )}
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-[var(--text-1)] tracking-tight truncate">
              {item.show}
            </h2>
            <p className="text-xs text-[var(--text-2)] truncate mt-0.5">
              {item.title}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-[var(--line-blue)] hover:border-[var(--line-strong)] text-[var(--text-3)] hover:text-[var(--text-1)] rounded-[var(--radius)] bg-[#070b10] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation Switcher */}
        <div className="px-5 py-2.5 bg-[#070b12] border-b border-[var(--line-blue)] flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {(item.youtubeId || item.localVideoSrc || (item.videos && item.videos.length > 0)) && (
              <button
                type="button"
                onClick={() => setActiveTab('video')}
                className={`micro-label px-3 py-1.5 rounded-[var(--radius)] text-xs font-mono flex items-center gap-1.5 transition-colors ${
                  activeTab === 'video'
                    ? 'bg-red-600/20 text-red-400 border border-red-500/50 font-semibold'
                    : 'text-[var(--text-3)] hover:text-[var(--text-1)] border border-transparent'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>
                  {item.videos && item.videos.length > 1
                    ? `Breakdown Videos (${item.videos.length})`
                    : 'Breakdown Video'}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setActiveTab('details')}
              className={`micro-label px-3 py-1.5 rounded-[var(--radius)] text-xs font-mono flex items-center gap-1.5 transition-colors ${
                activeTab === 'details'
                  ? 'bg-[var(--line-strong)] text-[var(--text-1)] border border-[var(--line-strong)] font-semibold'
                  : 'text-[var(--text-3)] hover:text-[var(--text-1)] border border-transparent'
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>Specs &amp; Pipeline</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">

          {/* TAB 1: VIDEO PLAYER (LOCAL OR YOUTUBE) */}
          {activeTab === 'video' &&
            (item.youtubeId || item.localVideoSrc || (item.videos && item.videos.length > 0)) && (() => {
              const currentVideo =
                item.videos && item.videos.length > 0
                  ? item.videos[selectedVideoIdx] || item.videos[0]
                  : null;

              // Robustly extract valid 11-character YouTube ID from URL or fallback
              const extractYoutubeId = (url?: string, fallbackId?: string): string => {
                if (url) {
                  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
                  if (match) return match[1];
                }
                if (fallbackId && /^[a-zA-Z0-9_-]{11}$/.test(fallbackId) && !fallbackId.includes('-')) {
                  return fallbackId;
                }
                return '';
              };

              const activeYoutubeId =
                (currentVideo ? extractYoutubeId(currentVideo.youtubeUrl, currentVideo.id) : '') ||
                extractYoutubeId(item.youtubeUrl, item.youtubeId) ||
                item.youtubeId ||
                '';

              const activeYoutubeUrl =
                currentVideo?.youtubeUrl ||
                item.youtubeUrl ||
                (activeYoutubeId ? `https://www.youtube.com/watch?v=${activeYoutubeId}` : undefined);
              const activeLocalSrc =
                currentVideo?.localVideoSrc ||
                (selectedVideoIdx === 0 ? item.localVideoSrc : undefined);
              const activeVideoTitle = currentVideo
                ? currentVideo.title
                : item.videoTitle || `${item.show} Official VFX Breakdown`;

              return (
                <div className="space-y-4">
                  <div className="relative aspect-video w-full rounded-[var(--radius)] overflow-hidden border border-[var(--line-strong)] bg-black shadow-2xl">
                    {videoSourceMode === 'local' && activeLocalSrc ? (
                      <video
                        key={activeLocalSrc}
                        src={activeLocalSrc}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    ) : activeYoutubeId ? (
                      <iframe
                        key={activeYoutubeId}
                        src={`https://www.youtube-nocookie.com/embed/${activeYoutubeId}?autoplay=1&rel=0&modestbranding=1`}
                        title={activeVideoTitle}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      activeLocalSrc && (
                        <video
                          key={activeLocalSrc}
                          src={activeLocalSrc}
                          controls
                          autoPlay
                          playsInline
                          className="w-full h-full object-contain"
                        />
                      )
                    )}
                  </div>

                  <div className="p-3.5 rounded-[var(--radius)] bg-[#070b10] border border-[var(--line-blue)] flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-[var(--text-1)] text-sm line-clamp-1">
                        {activeVideoTitle}
                      </h4>
                      <p className="text-[11px] text-[var(--text-3)] mt-0.5 font-mono">
                        Facility: {item.studio} · Release Year: {item.year}
                        {currentVideo?.duration ? ` · ${currentVideo.duration}` : ''}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {activeLocalSrc && activeYoutubeId && (
                        <div className="flex items-center rounded border border-[var(--line-strong)] p-0.5 bg-[#080d14] text-[10px] font-mono">
                          <button
                            type="button"
                            onClick={() => setVideoSourceMode('local')}
                            className={`px-2 py-1 rounded transition-colors ${
                              videoSourceMode === 'local'
                                ? 'bg-[var(--accent)]/30 text-[var(--accent)] font-bold'
                                : 'text-[var(--text-3)] hover:text-[var(--text-1)]'
                            }`}
                          >
                            HD Clip
                          </button>
                          <button
                            type="button"
                            onClick={() => setVideoSourceMode('youtube')}
                            className={`px-2 py-1 rounded transition-colors ${
                              videoSourceMode === 'youtube'
                                ? 'bg-red-600/30 text-red-300 font-bold'
                                : 'text-[var(--text-3)] hover:text-[var(--text-1)]'
                            }`}
                          >
                            YouTube
                          </button>
                        </div>
                      )}

                      {activeYoutubeUrl && (
                        <a
                          href={activeYoutubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="micro-label px-3 py-1.5 rounded-[var(--radius)] bg-red-600/15 border border-red-500/30 hover:border-red-500/60 text-red-400 hover:text-white transition-colors flex items-center gap-1.5 font-mono text-xs"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Watch on YouTube</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Multi-Video Breakdown Playlist Selector */}
                  {item.videos && item.videos.length > 1 && (
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between text-xs pb-1 border-b border-[var(--line-blue)]/60">
                        <span className="micro-label text-[10px] text-[var(--accent)] font-mono uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                          <Film className="w-3.5 h-3.5 text-[var(--accent)]" />
                          Official VFX Breakdown Series ({item.videos.length} Videos)
                        </span>
                        <span className="text-[10px] text-[var(--text-3)] font-mono hidden sm:inline">
                          Select a featurette to watch
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.videos.map((vid, idx) => {
                          const isPlaying = selectedVideoIdx === idx;
                          return (
                            <button
                              key={vid.id}
                              type="button"
                              onClick={() => {
                                setSelectedVideoIdx(idx);
                                if (!vid.localVideoSrc) {
                                  setVideoSourceMode('youtube');
                                } else {
                                  setVideoSourceMode('local');
                                }
                              }}
                              className={`p-3 rounded-[var(--radius)] border text-left transition-all flex items-start gap-3 group ${
                                isPlaying
                                  ? 'bg-[#101726] border-red-500/70 shadow-md ring-1 ring-red-500/30'
                                  : 'bg-[#060a10] border-[var(--line-blue)] hover:border-[var(--line-strong)] hover:bg-[#090e17]'
                              }`}
                            >
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                  isPlaying
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'bg-[#0c1420] text-[var(--text-3)] group-hover:text-[var(--text-1)] border border-[var(--line-blue)]'
                                }`}
                              >
                                <Play className="w-3 h-3 fill-current ml-0.5" />
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-1 mb-0.5">
                                  {vid.category && (
                                    <span className="micro-label text-[9px] text-[var(--accent)] font-mono uppercase">
                                      {vid.category}
                                    </span>
                                  )}
                                  {vid.duration && (
                                    <span className="micro-label text-[9px] text-[var(--text-3)] font-mono tabular-nums">
                                      {vid.duration}
                                    </span>
                                  )}
                                </div>
                                <h5
                                  className={`text-xs font-medium leading-snug line-clamp-2 ${
                                    isPlaying
                                      ? 'text-white font-semibold'
                                      : 'text-[var(--text-2)] group-hover:text-[var(--text-1)]'
                                  }`}
                                >
                                  {vid.title}
                                </h5>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}

          {/* TAB 2: SPECS & PIPELINE DETAILS */}
          {(activeTab === 'details' || (!item.youtubeId && !item.localVideoSrc)) && (
            <div className="space-y-6">
              {/* Production Metadata Specs Bar */}
              {(item.director || item.starring || item.location || item.department) && (
                <div className="p-4 rounded-[var(--radius)] bg-[#070c14] border border-[var(--line-blue)] space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {item.director && (
                      <div>
                        <span className="micro-label text-[9px] text-[var(--text-3)] font-mono uppercase block mb-0.5">
                          Director
                        </span>
                        <p className="text-xs font-semibold text-[var(--text-1)]">
                          {item.director}
                        </p>
                      </div>
                    )}
                    {item.starring && (
                      <div>
                        <span className="micro-label text-[9px] text-[var(--text-3)] font-mono uppercase block mb-0.5">
                          Starring
                        </span>
                        <p className="text-xs font-semibold text-[var(--text-1)]">
                          {item.starring}
                        </p>
                      </div>
                    )}
                    <div>
                      <span className="micro-label text-[9px] text-[var(--text-3)] font-mono uppercase block mb-0.5">
                        Position
                      </span>
                      <p className="text-xs font-semibold text-[var(--accent)] font-mono">
                        {item.role}
                      </p>
                    </div>
                    {item.location && (
                      <div>
                        <span className="micro-label text-[9px] text-[var(--text-3)] font-mono uppercase block mb-0.5">
                          Location
                        </span>
                        <p className="text-xs font-semibold text-[var(--text-1)]">
                          {item.location}
                        </p>
                      </div>
                    )}
                  </div>

                  {item.department && (
                    <div className="pt-2.5 border-t border-[var(--line-blue)]/50 flex flex-wrap items-center gap-2">
                      <span className="micro-label text-[9px] text-[var(--text-3)] font-mono uppercase">
                        Department:
                      </span>
                      <span className="text-xs text-[var(--text-2)] font-mono">
                        {item.department}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Film Recognition & Industry Awards */}
              {item.awards && item.awards.length > 0 && (
                <div className="p-4 rounded-[var(--radius)] bg-gradient-to-r from-[#171306] via-[#120f06] to-[#070b10] border border-amber-500/40 space-y-2.5 shadow-lg">
                  <h4 className="micro-label text-[10px] text-amber-400 uppercase font-mono tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    Film Recognition &amp; Industry Honors
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {item.awards.map((aw, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-[var(--radius)] bg-black/50 border border-amber-500/30 flex flex-col gap-0.5"
                      >
                        <span className="text-xs font-bold text-amber-300 font-mono">
                          {aw.award}
                        </span>
                        <span className="text-[11px] text-[var(--text-2)] leading-tight">
                          {aw.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Overview */}
              <div>
                <h4 className="micro-label text-[10px] text-[var(--text-3)] uppercase font-mono tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-sm leading-relaxed text-[var(--text-2)] bg-[#060a0f] p-4 rounded-[var(--radius)] border border-[var(--line-blue)]/60">
                  {item.summary}
                </p>
              </div>

              {/* Core Specialisations */}
              {item.specialisations && item.specialisations.length > 0 && (
                <div>
                  <h4 className="micro-label text-[10px] text-[var(--accent)] uppercase font-mono tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Core Specialisations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.specialisations.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-[var(--radius)] bg-[#0a121d] border border-[var(--accent)]/30 text-xs text-[var(--text-1)] font-mono"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Responsibilities & Contributions */}
              {item.responsibilities && item.responsibilities.length > 0 ? (
                <div>
                  <h4 className="micro-label text-[10px] text-[var(--accent)] uppercase font-mono tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                    Key Responsibilities &amp; Contributions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-[var(--radius)] bg-[#060a10] border border-[var(--line-blue)] flex flex-col gap-1 hover:border-[var(--line-strong)] transition-colors"
                      >
                        <span className="text-xs font-semibold text-[var(--accent)] font-mono">
                          {resp.category}
                        </span>
                        <p className="text-xs text-[var(--text-2)] leading-relaxed">
                          {resp.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Standard Deliverables fallback */
                <div className="p-4 sm:p-5 rounded-[var(--radius)] bg-[#060a10] border border-[var(--line-blue)]">
                  <h4 className="micro-label text-[10px] text-[var(--accent)] uppercase font-mono tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Supervisory Deliverables &amp; Asset Scope
                  </h4>
                  <ul className="space-y-2">
                    {item.deliverables.map((del, i) => (
                      <li key={i} className="text-xs sm:text-[13px] text-[var(--text-2)] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Primary Production Tools */}
              <div>
                <h4 className="micro-label text-[10px] text-[var(--text-3)] uppercase font-mono tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3 h-3 text-[var(--text-3)]" />
                  Primary Production Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.software.map((sw) => (
                    <span
                      key={sw}
                      className="px-3 py-1.5 rounded-[var(--radius)] bg-[#090f18] border border-[var(--line-strong)] text-xs text-[var(--text-1)] font-mono font-medium flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pipeline Highlights & Collaboration */}
              {item.pipelineHighlights && item.pipelineHighlights.length > 0 && (
                <div>
                  <h4 className="micro-label text-[10px] text-[var(--text-3)] uppercase font-mono tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Wrench className="w-3 h-3 text-[var(--text-3)]" />
                    Production Collaboration &amp; Pipeline Integration
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {item.pipelineHighlights.map((point, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-[var(--radius)] bg-[#080d14] border border-[var(--line-blue)] text-xs text-[var(--text-2)] leading-relaxed"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 border-t border-[var(--line-blue)] bg-[#060a0f] flex flex-wrap items-center justify-between gap-3">
          <div className="micro-label text-[10px] text-[var(--text-3)] font-mono flex items-center gap-2">
            <span>Studio: {item.studio}</span>
            {item.videoDuration && <span>· Duration: {item.videoDuration}</span>}
          </div>

          <div className="flex items-center gap-2.5">
            {onOpenShowreel && item.showreelTimestamp && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenShowreel();
                }}
                className="micro-label px-3.5 py-2 border border-[var(--line-strong)] hover:border-[var(--accent)] text-[var(--text-1)] hover:text-[var(--accent)] rounded-[var(--radius)] transition-colors inline-flex items-center gap-1.5 text-xs font-mono"
              >
                <Film className="w-3 h-3" />
                <span>Jump in Reel ({item.showreelTimestamp})</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="micro-label px-4 py-2 bg-[var(--line-strong)] hover:bg-[var(--accent)] hover:text-black text-[var(--text-1)] rounded-[var(--radius)] transition-colors text-xs font-mono font-medium"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
