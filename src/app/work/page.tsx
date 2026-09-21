import type { Metadata } from 'next';
import SelectedWork from '@/components/SelectedWork';

export const metadata: Metadata = {
  title: 'Selected Work | Ganesh Poojari | Asset & Modeling Supervisor',
  description: 'Hero 3D creatures, character topology, and hard-surface asset breakdowns by Ganesh Poojari across Framestore, PIXOMONDO, and DNEG.',
};

export default function WorkPage() {
  return <SelectedWork />;
}
