import type { Metadata } from 'next';
import Skills from '@/components/Skills';

export const metadata: Metadata = {
  title: 'Capabilities | Ganesh Poojari | Asset & Modeling Supervisor',
  description: 'Technical competencies, creature and hard-surface modeling capabilities, education, and verified credentials.',
};

export default function SkillsPage() {
  return <Skills />;
}
