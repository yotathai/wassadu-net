"use client";

import React, { useEffect, useState, use } from 'react';
import ProductForm from '@/components/vendor/ProductForm';
import { db } from '@/lib/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function EditProductPage({ params }) {
  const unwrappedParams = use(params);
  const productId = unwrappedParams.id;
  
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    async function fetchProduct() {
      if (!user) return;
      
      try {
        const docRef = doc(db, 'products', productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          // Security check: only owner can edit
          if (data.vendorId !== user.uid) {
            setError('คุณไม่มีสิทธิ์แก้ไขสินค้านี้');
          } else {
            setProductData({ id: docSnap.id, ...data });
          }
        } else {
          setError('ไม่พบข้อมูลสินค้านี้');
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId, user]);

  if (loading) {
    return <div className="p-8 text-slate-500">กำลังโหลดข้อมูลสินค้า...</div>;
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg border-l-4 border-red-500">
          {error}
        </div>
        <button 
          onClick={() => router.push('/vendor/products')}
          className="mt-4 text-blue-600 hover:underline"
        >
          &larr; กลับไปหน้ารายการสินค้า
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">แก้ไขสินค้า</h1>
        <p className="text-slate-500 mt-1">อัปเดตข้อมูลและราคาของสินค้า</p>
      </div>
      
      {productData && <ProductForm initialData={productData} />}
    </div>
  );
}
