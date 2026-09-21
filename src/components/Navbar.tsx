'use client';

import { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';
import ShowreelModal from './ShowreelModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const ARTSTATION_URL = "https://ganesh.artstation.com/";
  const SHOWREEL_URL = "https://vimeo.com";

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-5xl rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 px-6 py-3 shadow-lg flex items-center justify-between transition-all">
          <a href="#hero" className="flex items-center gap-2.5 text-base font-semibold text-zinc-100 hover:text-white tracking-tight transition-colors">
            <img src="/profile.jpg" alt="Ganesh Poojari" className="w-7 h-7 rounded-full object-cover border border-zinc-700/60" />
            <span>Ganesh Poojari</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-zinc-400">
            <a href="#work" className="hover:text-zinc-100 transition-colors">Work</a>
            <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
            <a href="#filmography" className="hover:text-zinc-100 transition-colors">Filmography</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
          </div>

          {/* CTA & Social Icons */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={ARTSTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
              title="ArtStation Portfolio"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 18.816L3.435 13.01h.001l4.896 8.384H1.678A1.62 1.62 0 0 1 .057 18.816zm11.233-14.88a1.642 1.642 0 0 1 1.398.777l7.842 13.486c.277.476.297 1.05.053 1.543a1.636 1.636 0 0 1-1.451.858H8.847l2.443-4.185h6.666L12.69 7.421l-3.328 5.707-2.44-4.183 4.368-7.509a1.64 1.64 0 0 1 1.399-.777z"/>
              </svg>
            </a>

            <button
              onClick={() => setIsShowreelOpen(true)}
              className="p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
              title="Watch Showreel"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>

            <a 
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-100 hover:bg-white px-4 py-1.5 text-xs font-medium text-zinc-950 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-zinc-100 p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Drawer Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-4 top-20 z-40 rounded-2xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/90 p-6 shadow-2xl flex flex-col gap-4 text-center">
            <a href="#work" onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-300 py-1.5 hover:text-white">Work</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-300 py-1.5 hover:text-white">About</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-300 py-1.5 hover:text-white">Experience</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-300 py-1.5 hover:text-white">Skills</a>
            <a href="#filmography" onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-300 py-1.5 hover:text-white">Filmography</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-zinc-300 py-1.5 hover:text-white">Contact</a>
            <div className="pt-3 flex justify-center gap-6 border-t border-zinc-800/80">
              <a href={ARTSTATION_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 py-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 18.816L3.435 13.01h.001l4.896 8.384H1.678A1.62 1.62 0 0 1 .057 18.816zm11.233-14.88a1.642 1.642 0 0 1 1.398.777l7.842 13.486c.277.476.297 1.05.053 1.543a1.636 1.636 0 0 1-1.451.858H8.847l2.443-4.185h6.666L12.69 7.421l-3.328 5.707-2.44-4.183 4.368-7.509a1.64 1.64 0 0 1 1.399-.777z"/></svg>
                ArtStation
              </a>
              <button onClick={() => { setIsOpen(false); setIsShowreelOpen(true); }} className="text-xs font-medium text-zinc-300 hover:text-white flex items-center gap-1.5 py-1.5">
                <Play className="w-3.5 h-3.5 fill-current" />
                Showreel
              </button>
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
