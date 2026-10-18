import type { Metadata } from 'next';
import { Suspense } from 'react';
import SelectedWork from '@/components/SelectedWork';

export const metadata: Metadata = {
  title: 'Selected Work | Ganesh Poojari | Asset & Modeling Supervisor',
  description: 'Hero 3D creatures, character topology, and hard-surface asset breakdowns by Ganesh Poojari across Framestore, PIXOMONDO, and DNEG.',
};

export default function WorkPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#07090E]" />}>
      <SelectedWork />
    </Suspense>
  );
}

