import type { Metadata } from 'next';
import Experience from '@/components/Experience';

export const metadata: Metadata = {
  title: 'Experience | Ganesh Poojari | Asset & Modeling Supervisor',
  description: 'Career history across Framestore, PIXOMONDO, DNEG, Prime Focus, and Crest Animation delivering 52 verified credits.',
};

export default function ExperiencePage() {
  return <Experience />;
}
