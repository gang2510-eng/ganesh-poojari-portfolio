'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Menu, X, Play } from 'lucide-react';
import ShowreelModal from './ShowreelModal';

const NAV_ITEMS = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'experience', label: 'Experience', href: '/experience' },
  { id: 'filmography', label: 'Filmography', href: '/filmography' },
  { id: 'breakdown', label: 'Show Breakdown', href: '/work?tab=breakdown' },
  { id: 'personal', label: 'Personal Work', href: '/work?tab=personal' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab') || 'breakdown';

  const IMDB_URL = 'https://www.imdb.com/name/nm6199377/';
  const SHOWREEL_URL = 'https://vimeo.com/1031133774?fl=ip&fe=ec';

  const isItemActive = (item: (typeof NAV_ITEMS)[number]) => {
    if (pathname === '/work') {
      if (item.id === 'breakdown') return currentTab === 'breakdown';
      if (item.id === 'personal') return currentTab === 'personal';
      return false;
    }
    return pathname === item.href;
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pb-2 pointer-events-none">
        <nav className="w-full max-w-[1240px] bg-[#07090E]/95 border border-[var(--line)] px-4 sm:px-5 py-3 rounded-[var(--radius)] flex items-center justify-between transition-colors pointer-events-auto shadow-lg backdrop-blur-md">
          {/* Brand Link to Overview / */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--text-1)] hover:text-white transition-colors shrink-0"
          >
            <span className="font-semibold text-sm tracking-tight text-[var(--text-1)]">
              Ganesh Poojari
            </span>
            <span className="hidden lg:inline-block text-[var(--text-3)] font-normal text-xs">
              / Supervisor
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`micro-label relative py-1 transition-colors text-xs ${
                    isActive ? 'text-[var(--text-1)] font-medium' : 'text-[var(--text-3)] hover:text-[var(--text-1)]'
                  }`}
                >
                  {item.label}
                  {/* Active Nav Indicator */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--accent)]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={IMDB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 border border-[var(--line)] hover:border-[#f5c518]/50 hover:bg-[#f5c518]/10 text-[var(--text-3)] hover:text-[#f5c518] rounded-[var(--radius)] transition-colors flex items-center gap-1.5"
              title="IMDb Profile"
              aria-label="IMDb Profile"
            >
              <span className="px-1 py-0.2 bg-[#f5c518] text-black font-black text-[9px] rounded-[1px] leading-tight">IMDb</span>
            </a>

            <button
              onClick={() => setIsShowreelOpen(true)}
              className="p-1.5 border border-[var(--line)] text-[var(--text-3)] hover:text-[var(--text-1)] hover:border-[var(--line-strong)] rounded-[var(--radius)] transition-colors"
              title="Watch Showreel"
              aria-label="Showreel"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>

            {/* ORANGE USE 4 OF 4: Contact button border (1px, transparent fill) */}
            <Link
              href="/contact"
              className="micro-label px-3.5 py-1.5 border border-[var(--accent)] bg-transparent text-[var(--text-1)] hover:bg-[var(--accent)]/10 rounded-[var(--radius)] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--text-2)] hover:text-[var(--text-1)] p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-4 top-16 z-50 bg-[#07090E] border border-[var(--line-strong)] p-5 rounded-[var(--radius)] flex flex-col gap-3 pointer-events-auto">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`micro-label text-left py-2 border-b border-[var(--line)] flex items-center justify-between ${
                  isItemActive(item)
                    ? 'text-[var(--text-1)] font-semibold'
                    : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
                }`}
              >
                <span>{item.label}</span>
                {isItemActive(item) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                )}
              </Link>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <a
                href={IMDB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-label text-[10px] text-[var(--text-3)] hover:text-[#f5c518]"
              >
                IMDb ↗
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsShowreelOpen(true);
                }}
                className="micro-label text-[10px] text-[var(--text-3)] hover:text-[var(--text-1)] flex items-center gap-1"
              >
                <Play className="w-3 h-3 fill-current" /> Showreel
              </button>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="micro-label text-[10px] px-2.5 py-1 border border-[var(--accent)] bg-transparent text-[var(--text-1)]"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        showreelUrl={SHOWREEL_URL}
      />
    </>
  );
}

export default function Navbar() {
  return (
    <Suspense
      fallback={
        <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pb-2 pointer-events-none">
          <nav className="w-full max-w-[1240px] bg-[#07090E]/95 border border-[var(--line)] px-4 sm:px-5 py-3 rounded-[var(--radius)] flex items-center justify-between pointer-events-auto shadow-lg" />
        </header>
      }
    >
      <NavbarContent />
    </Suspense>
  );
}

