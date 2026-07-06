import React from 'react';
import { Search, ShieldCheck, TrendingUp, Building2, Tag, ChevronRight, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-[#0B1120] min-h-[90vh] flex items-center overflow-hidden pt-20">
      
      {/* Premium Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B1120] to-[#0B1120]"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-0 -right-48 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 left-1/2 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern overlay for tech feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 font-medium text-sm mb-4 shadow-2xl hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>ระบบสืบราคากลาง e-GP แห่งชาติ</span>
            <span className="w-px h-4 bg-white/20 mx-1"></span>
            <span className="text-blue-400 flex items-center gap-1"><Zap className="w-3 h-3"/> B2B & B2G Ready</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1]">
            ยกระดับการจัดซื้อ <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 filter drop-shadow-lg">
              วัสดุก่อสร้างไทย
            </span>
          </h1>
          
          {/* Sub headline */}
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            แพลตฟอร์มศูนย์กลางที่เชื่อมโยงผู้ซื้อและผู้ขายอย่างโปร่งใส 
            <strong className="text-gray-200 font-medium"> ค้นหาง่าย อ้างอิงได้จริง </strong> 
            ยกระดับมาตรฐานอุตสาหกรรมก่อสร้างสู่ยุคดิจิทัล
          </p>

          {/* Glassmorphic Search Action */}
          <div className="w-full max-w-4xl mx-auto mt-12 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#1E293B]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-col md:flex-row shadow-2xl">
              
              <div className="flex-1 flex items-center px-4 py-3 md:py-0">
                <Search className="h-6 w-6 text-blue-400 shrink-0" />
                <input 
                  type="text" 
                  className="w-full h-14 bg-transparent outline-none text-white placeholder:text-gray-500 text-lg px-4"
                  placeholder="ค้นหา เหล็กเส้น, ปูนซีเมนต์, ท่อ PVC, กระเบื้อง..."
                />
              </div>

              <div className="hidden md:flex w-px h-10 bg-white/10 self-center mx-2"></div>

              <div className="flex items-center px-4 py-3 md:py-0 border-t border-white/10 md:border-t-0">
                <ShieldCheck className="h-5 w-5 text-gray-500 shrink-0" />
                <select className="bg-transparent text-gray-300 outline-none px-3 py-2 cursor-pointer appearance-none hover:text-white transition-colors">
                  <option value="all" className="bg-slate-800">หมวดหมู่ทั้งหมด</option>
                  <option value="egp" className="bg-slate-800">เฉพาะสินค้า e-GP</option>
                  <option value="b2b" className="bg-slate-800">ราคาขายส่ง B2B</option>
                </select>
              </div>
              
              <button className="mt-2 md:mt-0 w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-[0.98] flex items-center justify-center gap-2">
                เริ่มค้นหาเลย
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Floating Stats / Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-16 mt-12 border-t border-white/5">
            {[
              { label: 'หมวดหมู่สินค้า', value: '10+', suffix: '' },
              { label: 'รายการวัสดุ', value: '50,000', suffix: '+' },
              { label: 'ผู้จัดจำหน่าย', value: '1,200', suffix: '+' },
              { label: 'ความโปร่งใส', value: '100', suffix: '%' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-blue-400 font-bold text-xl">{stat.suffix}</span>
                </div>
                <span className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
