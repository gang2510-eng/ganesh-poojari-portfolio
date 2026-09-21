import type { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About | Ganesh Poojari | Asset & Modeling Supervisor',
  description: 'Two decades of film VFX excellence. Supervisory philosophy, topology expertise, and international facility leadership.',
};

export default function AboutPage() {
  return <About />;
}
