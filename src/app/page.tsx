import LeftRail from '@/components/LeftRail';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Filmography from '@/components/Filmography';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-1)] relative">
      <LeftRail />
      <Navbar />
      <Hero />
      <SelectedWork />
      <About />
      <Experience />
      <Filmography />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
