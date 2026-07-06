import React from 'react';
import Link from 'next/link';
import { 
  Building2, Layers, Home, Blocks, Grid, 
  PaintBucket, Droplets, Bath, Zap, DoorOpen, HardHat 
} from 'lucide-react';
import { CATEGORIES } from '@/data/mockData';

const iconMap = {
  Building2: <Building2 className="w-8 h-8 text-orange-500 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  Layers: <Layers className="w-8 h-8 text-amber-500 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  Home: <Home className="w-8 h-8 text-orange-600 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  Blocks: <Blocks className="w-8 h-8 text-amber-600 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  Grid: <Grid className="w-8 h-8 text-orange-500 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  PaintBucket: <PaintBucket className="w-8 h-8 text-amber-500 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  Droplets: <Droplets className="w-8 h-8 text-orange-600 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  Bath: <Bath className="w-8 h-8 text-amber-600 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  Zap: <Zap className="w-8 h-8 text-orange-500 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  DoorOpen: <DoorOpen className="w-8 h-8 text-amber-500 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />,
  HardHat: <HardHat className="w-8 h-8 text-orange-600 mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
};

export default function CategoryGrid() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-96 h-96 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none"></div>
      <div className="absolute -right-40 bottom-10 w-96 h-96 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4 shadow-sm">
              หมวดหมู่วัสดุก่อสร้างระดับชาติ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
              ค้นหาแยกตาม <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">หมวดหมู่งานก่อสร้าง</span>
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              อ้างอิงโครงสร้างหมวดหมู่เพื่อการสืบราคากลางที่ถูกต้อง และเปิดโอกาสให้ร้านค้าทั่วประเทศนำเสนอราคาวัสดุก่อสร้างได้โดยตรง
            </p>
          </div>
          <Link href="/categories" className="group flex items-center gap-2 px-6 py-3 bg-white hover:bg-orange-50 border border-orange-200 rounded-xl text-orange-600 font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
            ดูหมวดหมู่ทั้งหมด 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id}
              href={`/categories/${category.id}`} 
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity ${category.color}`}></div>
                {iconMap[category.icon]}
              </div>
              <h3 className="font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors text-sm z-10">{category.name}</h3>
              <p className="text-slate-500 text-xs line-clamp-2 z-10">{category.description}</p>
              
              {/* Decorative hover gradient border top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
