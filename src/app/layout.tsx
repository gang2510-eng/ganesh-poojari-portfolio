import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ganesh Poojari | Asset & Modeling Supervisor | Film VFX',
  description: 'Portfolio of Ganesh Poojari, Asset Supervisor & Modeling Supervisor with 20+ years of experience in Film VFX for top studios (Framestore, Pixomondo, DNEG). Projects include Dune, The Matrix Resurrections, Blade Runner 2049, and Chernobyl.',
  keywords: ['Ganesh Poojari', '3D Artist', 'VFX Supervisor', 'Modeling Lead', 'Asset Supervisor', 'Dune', 'Matrix 4', 'Film VFX', 'Framestore', 'PIXOMONDO', 'DNEG'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
