import React from 'react';
import Link from 'next/link';
import { 
  Building, Wrench, Home, Blocks, Grid, 
  PaintBucket, Droplets, Zap, DoorOpen, HardHat 
} from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'งานโครงสร้าง', icon: Building, desc: 'ปูนซีเมนต์, เสาเข็ม', color: 'text-orange-500', bg: 'bg-orange-50', hoverBg: 'group-hover:bg-orange-100', hoverBorder: 'hover:border-orange-300', textHover: 'group-hover:text-orange-600', gradient: 'from-orange-400 to-amber-400' },
  { id: 2, name: 'เหล็กและโลหะ', icon: Wrench, desc: 'เหล็กเส้น, รูปพรรณ', color: 'text-amber-500', bg: 'bg-amber-50', hoverBg: 'group-hover:bg-amber-100', hoverBorder: 'hover:border-amber-300', textHover: 'group-hover:text-amber-600', gradient: 'from-amber-400 to-yellow-400' },
  { id: 3, name: 'หลังคาและฝ้า', icon: Home, desc: 'กระเบื้องหลังคา', color: 'text-rose-500', bg: 'bg-rose-50', hoverBg: 'group-hover:bg-rose-100', hoverBorder: 'hover:border-rose-300', textHover: 'group-hover:text-rose-600', gradient: 'from-rose-400 to-pink-400' },
  { id: 4, name: 'วัสดุก่อและฉาบ', icon: Blocks, desc: 'อิฐมอญ, มวลเบา', color: 'text-fuchsia-500', bg: 'bg-fuchsia-50', hoverBg: 'group-hover:bg-fuchsia-100', hoverBorder: 'hover:border-fuchsia-300', textHover: 'group-hover:text-fuchsia-600', gradient: 'from-fuchsia-400 to-purple-400' },
  { id: 5, name: 'กระเบื้องปูพื้น', icon: Grid, desc: 'แกรนิตโต้, เซรามิก', color: 'text-purple-500', bg: 'bg-purple-50', hoverBg: 'group-hover:bg-purple-100', hoverBorder: 'hover:border-purple-300', textHover: 'group-hover:text-purple-600', gradient: 'from-purple-400 to-indigo-400' },
  { id: 6, name: 'สีและเคมีภัณฑ์', icon: PaintBucket, desc: 'สีทาอาคาร', color: 'text-sky-500', bg: 'bg-sky-50', hoverBg: 'group-hover:bg-sky-100', hoverBorder: 'hover:border-sky-300', textHover: 'group-hover:text-sky-600', gradient: 'from-sky-400 to-blue-400' },
  { id: 7, name: 'ประปา สุขภัณฑ์', icon: Droplets, desc: 'ท่อ PVC, ปั๊มน้ำ', color: 'text-cyan-500', bg: 'bg-cyan-50', hoverBg: 'group-hover:bg-cyan-100', hoverBorder: 'hover:border-cyan-300', textHover: 'group-hover:text-cyan-600', gradient: 'from-cyan-400 to-teal-400' },
  { id: 8, name: 'ไฟฟ้า แสงสว่าง', icon: Zap, desc: 'สายไฟ, โคมไฟ', color: 'text-emerald-500', bg: 'bg-emerald-50', hoverBg: 'group-hover:bg-emerald-100', hoverBorder: 'hover:border-emerald-300', textHover: 'group-hover:text-emerald-600', gradient: 'from-emerald-400 to-green-400' },
  { id: 9, name: 'ประตู หน้าต่าง', icon: DoorOpen, desc: 'ประตูไม้, วงกบ', color: 'text-yellow-500', bg: 'bg-yellow-50', hoverBg: 'group-hover:bg-yellow-100', hoverBorder: 'hover:border-yellow-400', textHover: 'group-hover:text-yellow-600', gradient: 'from-yellow-300 to-amber-400' },
  { id: 10, name: 'อุปกรณ์เซฟตี้', icon: HardHat, desc: 'นั่งร้าน, หมวก', color: 'text-red-500', bg: 'bg-red-50', hoverBg: 'group-hover:bg-red-100', hoverBorder: 'hover:border-red-300', textHover: 'group-hover:text-red-600', gradient: 'from-red-400 to-rose-500' },
];

export default function CategoryGrid() {
  return (
    <div className="bg-slate-50 py-24 relative overflow-hidden">
      
      {/* Decorative gradient blob in the background to add color to the section */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none"></div>
      <div className="absolute -right-40 bottom-10 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4 shadow-sm">
              Categories
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              หมวดหมู่<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">ราคากลาง</span>วัสดุก่อสร้าง
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
              อ้างอิงและจัดหมวดหมู่ตามมาตรฐานงานก่อสร้าง (e-GP) 
              เพื่อให้ส่วนราชการและภาคเอกชนสืบราคาได้อย่างรวดเร็วและแม่นยำ
            </p>
          </div>
          <Link href="/categories" className="group flex items-center gap-2 px-6 py-3 bg-white hover:bg-orange-50 border border-orange-200 rounded-xl text-orange-600 font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
            ดูหมวดหมู่ทั้งหมด 
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link 
                key={cat.id} 
                href={`/category/${cat.id}`}
                className={`group flex flex-col items-center text-center p-8 bg-white border border-slate-100 shadow-sm rounded-3xl ${cat.hoverBorder} hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden`}
              >
                {/* Colorful top border highlight on hover */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className={`h-20 w-20 rounded-2xl ${cat.bg} ${cat.hoverBg} flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <Icon className={`h-10 w-10 ${cat.color} stroke-[1.5] group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <h3 className={`font-bold text-lg text-slate-800 mb-2 ${cat.textHover} transition-colors z-10`}>{cat.name}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 z-10">{cat.desc}</p>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  );
}
