import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import LeftRail from '@/components/LeftRail';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ganesh Poojari | Asset & Modeling Supervisor | Film VFX',
  description: 'Portfolio of Ganesh Poojari, Asset & Modeling Supervisor with 20+ years of experience in film visual effects across Framestore, PIXOMONDO, DNEG, Prime Focus, and Crest Animation.',
  keywords: ['Ganesh Poojari', '3D Modeler', 'Asset Supervisor', 'Modeling Supervisor', 'Film VFX', 'Dune', 'Blade Runner 2049', 'Framestore', 'PIXOMONDO', 'DNEG'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#07090E] text-[#ECEFF3] min-h-screen flex flex-col">
        <LeftRail />
        <Navbar />
        <main className="flex-1 w-full pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
