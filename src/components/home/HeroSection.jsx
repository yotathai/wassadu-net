import React from 'react';
import { Search, ShieldCheck, TrendingUp, Building2, Tag } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-background overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            ศูนย์กลางสำหรับส่วนราชการและเอกชน (B2B & B2G)
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            ระบบสืบราคาและแคตตาล็อก <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              วัสดุก่อสร้างระดับชาติ
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            เชื่อมโยงผู้ซื้อและผู้ขายอย่างโปร่งใส ผู้ขายสามารถนำเสนอสินค้าพร้อมราคาอ้างอิง
            เพื่อให้ส่วนราชการและเอกชนตรวจสอบและสืบราคากลางได้อย่างถูกต้องและรวดเร็ว
          </p>

          {/* Main Search Action */}
          <div className="w-full max-w-3xl mx-auto mt-10">
            <div className="relative group shadow-lg rounded-2xl bg-white flex items-center p-2 border border-border/50 hover:border-primary/30 transition-all">
              <div className="pl-4 pr-2 text-foreground/40 group-focus-within:text-primary transition-colors">
                <Search className="h-6 w-6" />
              </div>
              <input 
                type="text" 
                className="flex-1 h-12 bg-transparent outline-none text-foreground placeholder:text-foreground/40 text-lg px-2"
                placeholder="ค้นหา วัสดุก่อสร้าง, หมวดหมู่, แบรนด์ หรือ ผู้จัดจำหน่าย..."
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium transition-all shadow-sm active:scale-95 flex items-center gap-2">
                ค้นหาราคา
              </button>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 mt-8 border-t border-border/50">
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">โปร่งใส ตรวจสอบได้</h3>
              <p className="text-sm text-foreground/60">
                ราคาสินค้าเปิดเผยชัดเจน อ้างอิงได้จริงสำหรับการทำราคากลางส่วนราชการ (e-GP)
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-4">
                <Tag className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">พื้นที่นำเสนอสำหรับผู้ขาย</h3>
              <p className="text-sm text-foreground/60">
                โอกาสสำหรับผู้ประกอบการในการเข้าถึงโครงการภาครัฐและเอกชนทั่วประเทศ
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">รองรับทุกสเกลโครงการ</h3>
              <p className="text-sm text-foreground/60">
                ระบบถูกออกแบบให้รองรับการเติบโตอย่างไร้ขีดจำกัด ตั้งแต่โครงการเล็กจนถึงระดับชาติ
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
