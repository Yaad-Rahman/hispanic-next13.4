import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

export default function NormalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary-400">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
