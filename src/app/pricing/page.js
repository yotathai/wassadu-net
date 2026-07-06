import React from 'react';
import Navbar from '@/components/layout/Navbar';
import ComparisonTable from '@/components/product/ComparisonTable';
import { priceComparisonData } from '@/data/mockData';
import { Scale, Calculator, FileText, CheckCircle } from 'lucide-react';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Navbar />
      
      {/* Hero Section for Pricing */}
      <div className="bg-[#0B1120] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-400 text-sm font-semibold mb-6">
              <Scale className="w-4 h-4" /> สำหรับคณะกรรมการกำหนดราคากลาง
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              ระบบเปรียบเทียบ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">ราคากลางอ้างอิง</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              สืบราคาวัสดุก่อสร้างหลักเทียบกับราคาตลาด (Modern Trade) และราคาอ้างอิงจากสำนักดัชนีเศรษฐกิจการค้า เพื่อความโปร่งใส ถูกต้อง และลดความเสี่ยงในการถูก สตง. ตรวจสอบ
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                <Calculator className="w-4 h-4 text-amber-400" /> คำนวณง่าย
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                <FileText className="w-4 h-4 text-amber-400" /> พิมพ์เอกสารสืบราคาได้ทันที
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                <CheckCircle className="w-4 h-4 text-amber-400" /> โปร่งใส ตรวจสอบได้
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">ข้อมูลเปรียบเทียบราคาวัสดุหลัก (ประจำเดือน)</h2>
            <p className="text-slate-500">เลือกดูการเปรียบเทียบราคาวัสดุก่อสร้างที่มีผลกระทบต่องบประมาณสูง (หมวดงานโครงสร้าง)</p>
          </div>

          <div className="space-y-8">
            <ComparisonTable data={priceComparisonData['cement-portland-50kg']} />
            <ComparisonTable data={priceComparisonData['rebar-db12-10m']} />
          </div>
        </div>
      </div>
    </main>
  );
}
