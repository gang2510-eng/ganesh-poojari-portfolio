'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Play } from 'lucide-react';
import ShowreelModal from './ShowreelModal';

const NAV_ITEMS = [
  { id: 'about', label: 'About', href: '/about' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'experience', label: 'Experience', href: '/experience' },
  { id: 'filmography', label: 'Filmography', href: '/filmography' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const pathname = usePathname();

  const ARTSTATION_URL = 'https://ganesh.artstation.com/';
  const SHOWREEL_URL = 'https://vimeo.com/1031133774?fl=ip&fe=ec';

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pb-2 pointer-events-none">
        <nav className="w-full max-w-[1240px] bg-[#07090E]/95 border border-[var(--line)] px-5 py-3 rounded-[var(--radius)] flex items-center justify-between transition-colors pointer-events-auto">
          {/* Brand Link to Overview / */}
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-tight text-[var(--text-1)] hover:text-white transition-colors"
          >
            <span className="font-semibold text-sm tracking-tight text-[var(--text-1)]">
              Ganesh Poojari
            </span>
            <span className="hidden sm:inline-block text-[var(--text-3)] font-normal text-xs">
              / Supervisor
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`micro-label relative py-1 transition-colors ${
                    isActive ? 'text-[var(--text-1)] font-medium' : 'hover:text-[var(--text-1)]'
                  }`}
                >
                  {item.label}
                  {/* ORANGE USE 2 OF 4: Active Nav Indicator */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--accent)]"
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
              href={ARTSTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-[var(--line)] text-[var(--text-3)] hover:text-[var(--text-1)] hover:border-[var(--line-strong)] rounded-[var(--radius)] transition-colors"
              title="ArtStation Portfolio"
              aria-label="ArtStation"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 18.816L3.435 13.01h.001l4.896 8.384H1.678A1.62 1.62 0 0 1 .057 18.816zm11.233-14.88a1.642 1.642 0 0 1 1.398.777l7.842 13.486c.277.476.297 1.05.053 1.543a1.636 1.636 0 0 1-1.451.858H8.847l2.443-4.185h6.666L12.69 7.421l-3.328 5.707-2.44-4.183 4.368-7.509a1.64 1.64 0 0 1 1.399-.777z" />
              </svg>
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
                className={`micro-label text-left py-2 border-b border-[var(--line)] ${
                  pathname === item.href
                    ? 'text-[var(--text-1)] font-semibold'
                    : 'text-[var(--text-2)] hover:text-[var(--text-1)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <a
                href={ARTSTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="micro-label text-[10px] text-[var(--text-3)] hover:text-[var(--text-1)]"
              >
                ArtStation ↗
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
