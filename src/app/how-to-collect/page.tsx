import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Steps } from '@/components/Steps';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'How to Collect - Too Good To Go',
  description: 'Learn how to pick up your Surprise Bag at participating stores.',
};

export default function HowToCollectPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Steps />
      <FAQ />
      <Footer />
    </div>
  );
}
