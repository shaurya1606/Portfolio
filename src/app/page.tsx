import HeroSection from '@/components/HeroSection'
import FeaturedSection from '@/components/FeaturedSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import InfiniteMovingCardsDemo from '@/components/HighlightSection'
import Upcoming from '@/components/Upcoming'

export default function Home() {
  return (
    <main className="antialiased bg-grid-white/[0.02] bg-black/[0.96] min-h-screen">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUsSection />
      <InfiniteMovingCardsDemo />
      <Upcoming />
    </main>
  );
}
