import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      {/* We can add more sections here in the future, like Trending, News, etc. */}
    </>
  );
}
