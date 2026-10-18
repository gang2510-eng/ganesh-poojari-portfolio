import type { Metadata } from 'next';
import Filmography from '@/components/Filmography';

export const metadata: Metadata = {
  title: 'Filmography | Ganesh Poojari | Asset & Modeling Supervisor',
  description: 'Verified production filmography of 53 Hollywood feature films and television series with supervisory ownership details.',
};

export default function FilmographyPage() {
  return <Filmography />;
}
