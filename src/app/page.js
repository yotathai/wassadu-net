import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import NewsFeed from '@/components/home/NewsFeed';

export default function Home() {
  return (
    <>
      {/* Development Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white text-center pt-28 pb-12 px-4 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-lg tracking-tight">
            🚧 ระบบกำลังอยู่ระหว่างการพัฒนา 🚧
          </h1>
          <p className="text-2xl md:text-4xl font-bold drop-shadow-md text-orange-50">
            ขอขอบคุณที่ให้ความสนใจ
          </p>
          <div className="pt-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-xl md:text-2xl font-medium text-white border border-white/30 shadow-sm">
              ❤️ จากทีมงาน Yotathai
            </span>
          </div>
        </div>
      </div>
      
      <HeroSection />
      <CategoryGrid />
      <NewsFeed />
    </>
  );
}
