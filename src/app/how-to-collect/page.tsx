import { SimpleHeader } from '@/components/SimpleHeader';
import { LastBiteHero } from '@/components/MissionSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { ProblemSection } from '@/components/ProblemSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ImpactSection } from '@/components/ImpactSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQ } from '@/components/FAQ';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'LastBite - Save the Last. Share the Good.',
  description: 'Kết nối thực phẩm dư thừa với người tiêu dùng, giảm lãng phí, lan tỏa giá trị bền vững.',
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
      <CTASection />
      <Footer />
    </div>
  );
}