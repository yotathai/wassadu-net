"use client";

import React from 'react';
import ProductForm from '@/components/vendor/ProductForm';

export default function AddProductPage() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">เพิ่มสินค้าใหม่</h1>
        <p className="text-slate-500 mt-1">กรอกรายละเอียดสินค้าของคุณเพื่อให้ลูกค้าค้นพบได้ง่ายขึ้น</p>
      </div>
      
      <ProductForm />
    </div>
  );
}
