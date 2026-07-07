"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import { Scale, Search, Filter, Loader2, Package, MapPin, Building2, Plus, Check } from 'lucide-react';
import { db } from '@/lib/firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Link from 'next/link';
import { useCompare } from '@/contexts/CompareContext';

export default function PricingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const { compareItems, addToCompare, removeFromCompare, isComparing } = useCompare();
  
  const categories = [
    'ทั้งหมด',
    'เหล็กเส้นและเหล็กรูปพรรณ',
    'ปูนซีเมนต์และคอนกรีต',
    'กระเบื้องและวัสดุปูพื้น',
    'ท่อประปาและอุปกรณ์',
    'สายไฟและอุปกรณ์ไฟฟ้า',
    'สีและเคมีภัณฑ์',
    'ไม้และไม้อัด',
    'หลังคาและอุปกรณ์',
    'อื่นๆ'
  ];

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const q = query(collection(db, 'products')); // get all products
        const querySnapshot = await getDocs(q);
        
        // Fetch vendor info (in a real large-scale app, we'd denormalize vendor names into the product doc to avoid N+1 queries, but for now we'll fetch users or just display generic)
        // Wait, we can fetch all users who are vendors to map their names
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const usersMap = {};
        usersSnapshot.forEach(doc => {
          usersMap[doc.id] = doc.data();
        });

        const productsList = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            vendorName: usersMap[data.vendorId]?.name || 'ร้านค้าทั่วไป'
          };
        });
        
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchAllProducts();
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (p.brand && p.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === '' || selectedCategory === 'ทั้งหมด' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[#0B1120] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              สืบราคากลางวัสดุก่อสร้าง
            </h1>
            <p className="text-slate-300 mb-6">
              ค้นหาและเปรียบเทียบราคาวัสดุก่อสร้างจากร้านค้าทั่วประเทศ เพื่อประกอบการทำราคากลาง
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="ค้นหาชื่อวัสดุ, ยี่ห้อ, หรือสเปก..." 
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm sticky top-28">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-slate-700" />
                <h3 className="font-bold text-slate-800">หมวดหมู่สินค้า</h3>
              </div>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        (selectedCategory === cat || (cat === 'ทั้งหมด' && selectedCategory === ''))
                          ? 'bg-orange-50 text-orange-600 font-medium' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Results List */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-800">
                ผลการค้นหา {searchTerm && `"${searchTerm}"`}
              </h2>
              <span className="text-slate-500 text-sm">พบ {filteredProducts.length} รายการ</span>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-slate-200">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500 mb-4" />
                <p className="text-slate-500">กำลังโหลดข้อมูลสินค้า...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-slate-200">
                <Package className="w-12 h-12 text-slate-300 mb-4" />
                <h3 className="text-lg font-medium text-slate-700 mb-1">ไม่พบสินค้าที่คุณค้นหา</h3>
                <p className="text-slate-500 text-sm">ลองเปลี่ยนคำค้นหา หรือเลือกหมวดหมู่ใหม่</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5">
                    {/* Product Image */}
                    <div className="w-full sm:w-40 h-40 shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 flex items-center justify-center">
                      {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <Package className="w-10 h-10 text-slate-300" />
                      )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full mb-2">
                            {product.category}
                          </span>
                          <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
                            {product.name}
                          </h3>
                          {product.brand && (
                            <p className="text-sm text-slate-500 mb-2">แบรนด์: {product.brand}</p>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-2xl font-bold text-orange-600">฿{product.price?.toLocaleString()}</div>
                          <div className="text-sm text-slate-500">/ {product.unit}</div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <span>{product.vendorName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {isComparing(product.id) ? (
                            <button 
                              onClick={() => removeFromCompare(product.id)}
                              className="px-3 py-1.5 flex items-center gap-1 bg-orange-50 border border-orange-200 text-orange-600 text-sm font-medium rounded-lg hover:bg-orange-100 transition-colors"
                            >
                              <Check className="w-4 h-4" /> เลือกแล้ว
                            </button>
                          ) : (
                            <button 
                              onClick={() => addToCompare(product)}
                              className="px-3 py-1.5 flex items-center gap-1 bg-white border border-slate-300 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
                              disabled={compareItems.length >= 3}
                            >
                              <Plus className="w-4 h-4" /> เปรียบเทียบ
                            </button>
                          )}
                          <Link 
                            href={`/products/${product.id}`}
                            className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
                          >
                            ดูรายละเอียด
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Compare Widget */}
      {compareItems.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5">
          <div className="bg-white rounded-2xl shadow-2xl border border-orange-200 p-4 min-w-[300px]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Scale className="w-5 h-5 text-orange-500" />
                เปรียบเทียบสินค้า ({compareItems.length}/3)
              </h3>
            </div>
            
            <div className="space-y-2 mb-4">
              {compareItems.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-lg text-sm border border-slate-100">
                  <span className="truncate pr-2 font-medium">{item.name}</span>
                  <button 
                    onClick={() => removeFromCompare(item.id)}
                    className="text-slate-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <Link 
              href="/compare"
              className="w-full py-2.5 bg-orange-500 text-white font-bold rounded-xl flex items-center justify-center hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
            >
              ดูตารางเปรียบเทียบ
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
