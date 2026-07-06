import React from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ProductCard from '@/components/product/ProductCard';
import { CATEGORIES, MOCK_PRODUCTS } from '@/data/mockData';
import { Filter, SlidersHorizontal } from 'lucide-react';

export default async function CategoryDetailPage({ params }) {
  // In Next.js 15+, params is a promise
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  const category = CATEGORIES.find(c => c.id === id);
  const products = MOCK_PRODUCTS.filter(p => p.categoryId === id);

  if (!category) {
    return <div className="container mx-auto py-20 text-center">ไม่พบหมวดหมู่ที่ค้นหา</div>;
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-border/60 py-8">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'หมวดหมู่สินค้า', href: '/categories' },
            { label: category.name }
          ]} />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-6">
            {category.name}
          </h1>
          <p className="text-foreground/70 mt-3">{category.desc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters (Mock) */}
        <div className="w-full lg:w-64 shrink-0 space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-border/60">
            <div className="flex items-center gap-2 font-bold text-lg border-b border-border/60 pb-3 mb-4">
              <Filter className="w-5 h-5" />
              ตัวกรอง
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-foreground/80">รองรับ e-GP</h4>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                  เฉพาะสินค้า e-GP
                </label>
              </div>
              
              <div className="pt-4 border-t border-border/60">
                <h4 className="font-semibold text-sm mb-2 text-foreground/80">ช่วงราคา</h4>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="ต่ำสุด" className="w-full px-2 py-1 border rounded text-sm" />
                  <span>-</span>
                  <input type="number" placeholder="สูงสุด" className="w-full px-2 py-1 border rounded text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-foreground/70 text-sm">พบสินค้า {products.length} รายการ</p>
            <button className="flex items-center gap-2 text-sm font-medium bg-white border border-border px-3 py-1.5 rounded-md hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4" />
              จัดเรียง: แนะนำ
            </button>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-2xl border border-border/60">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-lg font-bold text-foreground">กำลังรวบรวมข้อมูลสินค้า</h3>
              <p className="text-foreground/60 mt-2">ยังไม่มีสินค้าในหมวดหมู่นี้ในขณะนี้</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
