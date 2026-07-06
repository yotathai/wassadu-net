import React from 'react';
import Link from 'next/link';
import { 
  Building, 
  Wrench, 
  Home, 
  Blocks, 
  Grid, 
  PaintBucket, 
  Droplets, 
  Zap, 
  DoorOpen, 
  HardHat 
} from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'งานโครงสร้างและคอนกรีต', icon: Building, desc: 'ปูนซีเมนต์, เสาเข็ม, แผ่นพื้น' },
  { id: 2, name: 'เหล็กและโลหะภัณฑ์', icon: Wrench, desc: 'เหล็กเส้น, เหล็กรูปพรรณ, ลวดสลิง' },
  { id: 3, name: 'งานหลังคาและฝ้าเพดาน', icon: Home, desc: 'กระเบื้องหลังคา, โครงหลังคา, แผ่นยิปซัม' },
  { id: 4, name: 'วัสดุก่อและฉาบ', icon: Blocks, desc: 'อิฐมอญ, อิฐมวลเบา, ปูนฉาบ' },
  { id: 5, name: 'กระเบื้องและวัสดุปูพื้น', icon: Grid, desc: 'แกรนิตโต้, เซรามิก, ลามิเนต' },
  { id: 6, name: 'สีและเคมีภัณฑ์ก่อสร้าง', icon: PaintBucket, desc: 'สีทาอาคาร, น้ำยากันซึม, กาวซีเมนต์' },
  { id: 7, name: 'งานประปาและสุขภัณฑ์', icon: Droplets, desc: 'ท่อ PVC, ปั๊มน้ำ, ถังเก็บน้ำ, สุขภัณฑ์' },
  { id: 8, name: 'งานไฟฟ้าและแสงสว่าง', icon: Zap, desc: 'สายไฟ, ท่อร้อยสายไฟ, โคมไฟ' },
  { id: 9, name: 'ประตู หน้าต่าง และไม้', icon: DoorOpen, desc: 'ประตูไม้, หน้าต่างอลูมิเนียม, วงกบ' },
  { id: 10, name: 'อุปกรณ์ความปลอดภัย', icon: HardHat, desc: 'เครื่องมือไฟฟ้า, นั่งร้าน, เซฟตี้' },
];

export default function CategoryGrid() {
  return (
    <div className="bg-background py-20 border-t border-border/40">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">หมวดหมู่ราคากลางวัสดุก่อสร้าง</h2>
            <p className="text-foreground/70 max-w-2xl">
              อ้างอิงและจัดหมวดหมู่ตามมาตรฐานงานก่อสร้าง เพื่อให้ส่วนราชการ (e-GP) และภาคเอกชนสามารถสืบราคาและเปรียบเทียบผู้ขายได้อย่างสะดวกรวดเร็ว
            </p>
          </div>
          <Link href="/categories" className="text-primary font-medium hover:underline flex items-center gap-1 shrink-0">
            ดูหมวดหมู่ทั้งหมด &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link 
                key={cat.id} 
                href={`/category/${cat.id}`}
                className="group flex flex-col items-center text-center p-6 bg-white border border-border/60 rounded-2xl hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="h-16 w-16 bg-primary/5 group-hover:bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 transition-colors">
                  <Icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="text-xs text-foreground/50 line-clamp-2">{cat.desc}</p>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  );
}
