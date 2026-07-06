import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { CATEGORIES } from '@/data/mockData';
import { Grid, ChevronRight } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Header Area */}
      <div className="bg-white border-b border-border/60 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'หมวดหมู่สินค้าทั้งหมด' }]} />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-6 flex items-center gap-3">
            <Grid className="w-8 h-8 text-primary" />
            หมวดหมู่ราคากลางวัสดุก่อสร้าง
          </h1>
          <p className="text-foreground/70 mt-3 max-w-3xl">
            เลือกหมวดหมู่เพื่อค้นหาวัสดุก่อสร้าง ตรวจสอบราคากลาง และเปรียบเทียบผู้จัดจำหน่ายที่ตรงตามมาตรฐาน e-GP
          </p>
        </div>
      </div>

      {/* Categories List */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/category/${cat.id}`}
              className="group bg-white border border-border/60 rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 flex items-start justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                <ChevronRight className="w-5 h-5 text-primary" />
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
