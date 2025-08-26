import HeroSection from '@/components/HeroSection'
import FeaturedSection from '@/components/FeaturedSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'

export default function Home() {
  return (
    <main className="antialiased bg-grid-white/[0.02] bg-black/[0.96] min-h-screen">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUsSection />
    </main>
  );
}
