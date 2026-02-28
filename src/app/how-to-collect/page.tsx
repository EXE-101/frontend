import { SimpleHeader } from '@/components/SimpleHeader';
import { LastBiteHero } from '@/components/MissionSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { ProblemSection } from '@/components/ProblemSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ImpactSection } from '@/components/ImpactSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'LASTBITE - Cách nhận túi cứu đồ ăn',
  description: 'Cẩm nang từng bước để đặt, nhận và tận hưởng Surprise Bag từ LASTBITE một cách nhanh chóng, chuẩn chỉnh.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <SimpleHeader />
      <LastBiteHero />
      <WhyChooseSection />
      <ProblemSection />
      <HowItWorksSection />
      <ImpactSection />
      <TestimonialsSection />
      <FAQ />
      <Footer />
    </div>
  );
}