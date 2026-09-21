import { Film, Play } from 'lucide-react';

export default function Footer() {
  const ARTSTATION_URL = "https://ganesh.artstation.com/";
  const SHOWREEL_URL = "https://vimeo.com";

  return (
    <footer className="py-12 border-t border-zinc-800/60 bg-[#09090b] text-center text-xs text-zinc-500">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-left">
          <p className="font-semibold text-zinc-300">Ganesh Poojari</p>
          <p className="mt-0.5 text-zinc-500 text-[11px]">Asset & Modeling Supervisor | Film VFX</p>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="https://www.linkedin.com/in/ganesh-poojari-a878b017/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          <a
            href={ARTSTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
            aria-label="ArtStation"
            title="ArtStation Portfolio"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 18.816L3.435 13.01h.001l4.896 8.384H1.678A1.62 1.62 0 0 1 .057 18.816zm11.233-14.88a1.642 1.642 0 0 1 1.398.777l7.842 13.486c.277.476.297 1.05.053 1.543a1.636 1.636 0 0 1-1.451.858H8.847l2.443-4.185h6.666L12.69 7.421l-3.328 5.707-2.44-4.183 4.368-7.509a1.64 1.64 0 0 1 1.399-.777z"/>
            </svg>
          </a>

          <a
            href={SHOWREEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
            aria-label="VFX Showreel"
            title="VFX Showreel"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
          </a>

          <a
            href="https://www.imdb.com/name/nm6199377/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all"
            aria-label="IMDb"
            title="IMDb Credits"
          >
            <Film className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="text-[11px]">&copy; {new Date().getFullYear()} Ganesh Poojari. All rights reserved.</p>

      </div>
    </footer>
  );
}
