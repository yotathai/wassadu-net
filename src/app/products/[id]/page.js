"use client";

import React, { useEffect, useState, use } from 'react';
import Navbar from '@/components/layout/Navbar';
import { db } from '@/lib/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { Package, MapPin, Phone, Building2, CheckCircle, Scale, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductDetailPage({ params }) {
  const unwrappedParams = use(params);
  const productId = unwrappedParams.id;
  
  const [product, setProduct] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProductData() {
      try {
        const docRef = doc(db, 'products', productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = { id: docSnap.id, ...docSnap.data() };
          setProduct(productData);

          // Fetch vendor info
          if (productData.vendorId) {
            const vendorRef = doc(db, 'users', productData.vendorId);
            const vendorSnap = await getDoc(vendorRef);
            if (vendorSnap.exists()) {
              setVendor({ id: vendorSnap.id, ...vendorSnap.data() });
            }
          }
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProductData();
  }, [productId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-block animate-spin w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full mb-4"></div>
          <p className="text-slate-500">กำลังโหลดข้อมูลสินค้า...</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-slate-50 pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">ไม่พบข้อมูลสินค้า</h2>
          <p className="text-slate-500 mb-6">สินค้านี้อาจถูกลบไปแล้ว หรือไม่มีอยู่จริง</p>
          <button onClick={() => router.back()} className="text-orange-600 hover:underline">
            กลับไปหน้าสืบราคา
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <Navbar />
      
      {/* Breadcrumb & Back */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex items-center text-sm">
          <button onClick={() => router.back()} className="flex items-center text-slate-500 hover:text-orange-600 transition-colors mr-4">
            <ChevronLeft className="w-4 h-4 mr-1" /> ย้อนกลับ
          </button>
          <div className="flex items-center text-slate-400">
            <Link href="/pricing" className="hover:text-slate-600">สืบราคา</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">{product.category}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content: Product Details */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Image */}
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">
                    {product.imageUrl ? (
                      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <Package className="w-16 h-16 text-slate-300" />
                    )}
                  </div>
                </div>
                
                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
                      {product.category}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-2">
                      {product.name}
                    </h1>
                    {product.brand && (
                      <p className="text-lg text-slate-500">แบรนด์: <span className="font-medium text-slate-700">{product.brand}</span></p>
                    )}
                  </div>
                  
                  <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100 inline-block w-fit">
                    <div className="text-sm text-slate-500 mb-1">ราคาเสนอขาย (ยังไม่รวม VAT)</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-orange-600">฿{product.price?.toLocaleString()}</span>
                      <span className="text-slate-500 font-medium">/ {product.unit}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                    {product.description && (
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1">รายละเอียด</h3>
                        <p>{product.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {product.specifications && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-amber-500" />
                  ข้อมูลทางเทคนิค / สเปก
                </h3>
                <div className="whitespace-pre-line text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {product.specifications}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Vendor Info */}
          <aside className="w-full lg:w-80 shrink-0 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 sticky top-28">
              <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-500" />
                ข้อมูลผู้จัดจำหน่าย
              </h3>
              
              {vendor ? (
                <div className="space-y-4">
                  <div>
                    <div className="text-lg font-bold text-slate-900">{vendor.name}</div>
                    <div className="text-sm text-emerald-600 font-medium flex items-center gap-1 mt-1">
                      <CheckCircle className="w-4 h-4" /> ร้านค้ายืนยันตัวตนแล้ว
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <Phone className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                      <span>{vendor.phone || 'ยังไม่ได้ระบุเบอร์ติดต่อ'}</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                      <span>{vendor.address || 'ยังไม่ได้ระบุที่อยู่จัดส่ง'}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 mt-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-md">
                    ติดต่อผู้ขาย
                  </button>
                </div>
              ) : (
                <div className="text-center py-6 text-slate-500">
                  ไม่พบข้อมูลผู้จัดจำหน่าย
                </div>
              )}
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
