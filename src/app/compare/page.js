"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { useCompare } from '@/contexts/CompareContext';
import { Scale, Package, Trash2, ArrowLeft, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();

  if (compareItems.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <Scale className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">ยังไม่มีสินค้าสำหรับเปรียบเทียบ</h2>
          <p className="text-slate-500 mb-6">กรุณาเลือกสินค้าจากหน้าระบบสืบราคาเพื่อนำมาเปรียบเทียบ (สูงสุด 3 รายการ)</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition-colors shadow-md">
            <SearchIcon className="w-4 h-4" /> ไปหน้าระบบสืบราคา
          </Link>
        </div>
      </main>
    );
  }

  // Find lowest price
  const lowestPrice = Math.min(...compareItems.map(item => item.price || Infinity));

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <Link href="/pricing" className="inline-flex items-center text-sm text-slate-500 hover:text-orange-600 mb-3 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" /> กลับไปหน้าสืบราคา
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Scale className="w-8 h-8 text-orange-500" />
              เปรียบเทียบราคากลางอ้างอิง
            </h1>
          </div>
          
          <button 
            onClick={clearCompare}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
          >
            <Trash2 className="w-4 h-4" /> ล้างข้อมูลทั้งหมด
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="w-48 p-4 bg-slate-50 font-semibold text-slate-600 border-r border-slate-200">คุณสมบัติ</th>
                {compareItems.map((item, idx) => (
                  <th key={item.id} className="p-4 w-1/3 text-center align-top relative group">
                    <button 
                      onClick={() => removeFromCompare(item.id)}
                      className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-red-500 bg-white rounded-full border border-slate-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      title="ลบออกจากการเปรียบเทียบ"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    
                    <div className="w-32 h-32 mx-auto mb-4 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 flex items-center justify-center">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <Package className="w-10 h-10 text-slate-300" />
                      )}
                    </div>
                    
                    <div className="inline-block px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{item.brand || 'ไม่มีแบรนด์'}</p>
                    
                    <Link 
                      href={`/products/${item.id}`}
                      className="inline-block text-sm text-orange-600 hover:underline font-medium"
                    >
                      ดูรายละเอียด
                    </Link>
                  </th>
                ))}
                
                {/* Empty columns if less than 3 items */}
                {Array.from({ length: 3 - compareItems.length }).map((_, idx) => (
                  <th key={`empty-${idx}`} className="p-4 w-1/3 text-center align-middle bg-slate-50/50">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center mb-3">
                        <Scale className="w-6 h-6 text-slate-300" />
                      </div>
                      <span className="text-sm">เพิ่มสินค้าเปรียบเทียบ</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            
            <tbody className="divide-y divide-slate-100 text-sm md:text-base">
              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-600 border-r border-slate-200">ราคาเสนอขาย</td>
                {compareItems.map(item => (
                  <td key={item.id} className="p-4 text-center">
                    <div className={`text-2xl font-black ${item.price === lowestPrice ? 'text-emerald-600' : 'text-slate-800'}`}>
                      ฿{item.price?.toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">ต่อ {item.unit}</div>
                    {item.price === lowestPrice && (
                      <div className="inline-block mt-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">
                        ราคาต่ำสุด
                      </div>
                    )}
                  </td>
                ))}
                {Array.from({ length: 3 - compareItems.length }).map((_, idx) => <td key={`empty-price-${idx}`}></td>)}
              </tr>
              
              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-600 border-r border-slate-200">ผู้จัดจำหน่าย</td>
                {compareItems.map(item => (
                  <td key={item.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-slate-700">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">{item.vendorName || 'ร้านค้าทั่วไป'}</span>
                    </div>
                  </td>
                ))}
                {Array.from({ length: 3 - compareItems.length }).map((_, idx) => <td key={`empty-vendor-${idx}`}></td>)}
              </tr>

              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-600 border-r border-slate-200 align-top">รายละเอียดสินค้า</td>
                {compareItems.map(item => (
                  <td key={item.id} className="p-4 text-slate-600 align-top text-sm">
                    {item.description || '-'}
                  </td>
                ))}
                {Array.from({ length: 3 - compareItems.length }).map((_, idx) => <td key={`empty-desc-${idx}`}></td>)}
              </tr>
              
              <tr>
                <td className="p-4 bg-slate-50 font-semibold text-slate-600 border-r border-slate-200 align-top">ข้อมูลจำเพาะ / สเปก</td>
                {compareItems.map(item => (
                  <td key={item.id} className="p-4 text-slate-600 align-top text-sm whitespace-pre-line bg-slate-50/50">
                    {item.specifications || '-'}
                  </td>
                ))}
                {Array.from({ length: 3 - compareItems.length }).map((_, idx) => <td key={`empty-spec-${idx}`}></td>)}
              </tr>
              
              <tr className="border-t-2 border-slate-200">
                <td className="p-4 bg-slate-50 font-semibold text-slate-600 border-r border-slate-200"></td>
                {compareItems.map(item => (
                  <td key={item.id} className="p-4 text-center">
                    <Link 
                      href={`/products/${item.id}`}
                      className="inline-block w-full py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      ดูรายละเอียด / ติดต่อผู้ขาย
                    </Link>
                  </td>
                ))}
                {Array.from({ length: 3 - compareItems.length }).map((_, idx) => <td key={`empty-btn-${idx}`}></td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

// Temporary SearchIcon component until I add it to lucide-react import if missing
function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
