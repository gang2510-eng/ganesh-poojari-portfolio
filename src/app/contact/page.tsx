import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact | Ganesh Poojari | Asset & Modeling Supervisor',
  description: 'Inquire about film visual effects asset supervision, modeling leadership, and advanced 3D pipeline consulting.',
};

export default function ContactPage() {
  return <Contact />;
}
