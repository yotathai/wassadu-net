"use client";

import React, { useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { db, storage } from '@/lib/firebase/config';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProductForm({ initialData = null }) {
  const { user } = useAuth();
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.imageUrl || '');
  
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    category: initialData?.category || '',
    price: initialData?.price || '',
    unit: initialData?.unit || '',
    description: initialData?.description || '',
    brand: initialData?.brand || '',
    specifications: initialData?.specifications || ''
  });

  const categories = [
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('ขนาดรูปภาพต้องไม่เกิน 5MB');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setError('กรุณาเข้าสู่ระบบก่อนเพิ่มสินค้า');
      return;
    }

    try {
      setLoading(true);
      setError('');

      let imageUrl = initialData?.imageUrl || '';

      // Upload image if there's a new one
      if (imageFile) {
        const fileExtension = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExtension}`;
        const storageRef = ref(storage, `products/${user.uid}/${fileName}`);
        
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      const productData = {
        ...formData,
        price: Number(formData.price),
        imageUrl,
        vendorId: user.uid,
        updatedAt: serverTimestamp(),
      };

      if (initialData?.id) {
        // Update existing
        await updateDoc(doc(db, 'products', initialData.id), productData);
      } else {
        // Add new
        productData.createdAt = serverTimestamp();
        await addDoc(collection(db, 'products'), productData);
      }

      router.push('/vendor/products');
      
    } catch (err) {
      console.error(err);
      setError('เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-4xl">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            รูปภาพสินค้า
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-orange-500 transition-colors relative group">
            {imagePreview ? (
              <div className="relative w-full aspect-square">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview('');
                  }}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-1 text-center py-12">
                <Upload className="mx-auto h-12 w-12 text-slate-400 group-hover:text-orange-500 transition-colors" />
                <div className="flex text-sm text-slate-600 justify-center">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500">
                    <span>อัปโหลดรูปภาพ</span>
                    <input id="file-upload" name="file-upload" type="file" accept="image/*" className="sr-only" onChange={handleImageChange} />
                  </label>
                </div>
                <p className="text-xs text-slate-500">PNG, JPG, WEBP ไม่เกิน 5MB</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700">ชื่อสินค้า *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-4 py-2 border"
              placeholder="เช่น ปูนซีเมนต์ปอร์ตแลนด์ ตราช้าง"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700">หมวดหมู่ *</label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-4 py-2 border bg-white"
              >
                <option value="">เลือกหมวดหมู่...</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700">แบรนด์/ยี่ห้อ</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-4 py-2 border"
                placeholder="เช่น SCG, ทีพีไอ"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700">ราคา (บาท) *</label>
              <input
                type="number"
                name="price"
                required
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-4 py-2 border"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700">หน่วยนับ *</label>
              <input
                type="text"
                name="unit"
                required
                value={formData.unit}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-4 py-2 border"
                placeholder="เช่น ถุง, ตัน, กล่อง"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700">รายละเอียดสินค้าแบบย่อ</label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-4 py-2 border"
              placeholder="อธิบายจุดเด่นของสินค้าสั้นๆ..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700">สเปกและข้อมูลทางเทคนิค</label>
            <textarea
              name="specifications"
              rows={4}
              value={formData.specifications}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm px-4 py-2 border"
              placeholder="ขนาด, น้ำหนัก, มอก., หรือข้อมูลเชิงเทคนิคอื่นๆ"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-200 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-white py-2 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          ยกเลิก
        </button>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              กำลังบันทึก...
            </>
          ) : (
            initialData ? 'บันทึกการเปลี่ยนแปลง' : 'เพิ่มสินค้า'
          )}
        </button>
      </div>
    </form>
  );
}
