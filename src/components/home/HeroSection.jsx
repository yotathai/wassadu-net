import React from 'react';
import { Search, ShieldCheck, Building2, Tag, ChevronRight, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-orange-50/30 min-h-[90vh] flex items-center overflow-hidden pt-20">
      
      {/* Premium Light Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft light base */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50 opacity-80"></div>
        
        {/* Animated Soft Orbs */}
        <div className="absolute top-10 -left-20 w-96 h-96 bg-orange-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-amber-300/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-rose-200/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern overlay for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f973161a_1px,transparent_1px),linear-gradient(to_bottom,#f973161a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 text-slate-700 font-medium text-sm mb-4 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>ระบบสืบราคากลาง e-GP แห่งชาติ</span>
            <span className="w-px h-4 bg-slate-200 mx-1"></span>
            <span className="text-orange-600 flex items-center gap-1"><Zap className="w-3 h-3"/> B2B & B2G Ready</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            ยกระดับการจัดซื้อ <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              วัสดุก่อสร้างไทย
            </span>
          </h1>
          
          {/* Sub headline */}
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            แพลตฟอร์มศูนย์กลางที่เชื่อมโยงผู้ซื้อและผู้ขายอย่างโปร่งใส 
            <strong className="text-slate-800 font-medium"> ค้นหาง่าย อ้างอิงได้จริง </strong> 
            ยกระดับมาตรฐานอุตสาหกรรมก่อสร้างสู่ยุคดิจิทัล
          </p>

          {/* Solid White Premium Search Action */}
          <div className="w-full max-w-4xl mx-auto mt-12 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white border border-orange-100/50 rounded-2xl p-2 flex flex-col md:flex-row shadow-xl">
              
              <div className="flex-1 flex items-center px-4 py-3 md:py-0">
                <Search className="h-6 w-6 text-orange-500 shrink-0" />
                <input 
                  type="text" 
                  className="w-full h-14 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-lg px-4"
                  placeholder="ค้นหา เหล็กเส้น, ปูนซีเมนต์, ท่อ PVC, กระเบื้อง..."
                />
              </div>

              <div className="hidden md:flex w-px h-10 bg-slate-200 self-center mx-2"></div>

              <div className="flex items-center px-4 py-3 md:py-0 border-t border-slate-100 md:border-t-0">
                <ShieldCheck className="h-5 w-5 text-slate-400 shrink-0" />
                <select className="bg-transparent text-slate-600 outline-none px-3 py-2 cursor-pointer hover:text-orange-600 transition-colors">
                  <option value="all">หมวดหมู่ทั้งหมด</option>
                  <option value="egp">เฉพาะสินค้า e-GP</option>
                  <option value="b2b">ราคาขายส่ง B2B</option>
                </select>
              </div>
              
              <button className="mt-2 md:mt-0 w-full md:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-[0.98] flex items-center justify-center gap-2">
                เริ่มค้นหาเลย
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Floating Stats / Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-16 mt-12 border-t border-orange-500/10">
            {[
              { label: 'หมวดหมู่สินค้า', value: '10+', suffix: '' },
              { label: 'รายการวัสดุ', value: '50,000', suffix: '+' },
              { label: 'ผู้จัดจำหน่าย', value: '1,200', suffix: '+' },
              { label: 'ความโปร่งใส', value: '100', suffix: '%' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300 group">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight group-hover:text-orange-600 transition-colors">{stat.value}</span>
                  <span className="text-amber-500 font-bold text-xl">{stat.suffix}</span>
                </div>
                <span className="text-sm md:text-base text-slate-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
