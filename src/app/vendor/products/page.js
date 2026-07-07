"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Search, Edit, Trash2, Image as ImageIcon } from 'lucide-react';
import { db } from '@/lib/firebase/config';
import { collection, query, where, getDocs, deleteDoc, doc, orderBy } from 'firebase/firestore';
import { useAuth } from '@/contexts/AuthContext';

export default function ProductsPage() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      if (!user) return;
      try {
        const q = query(
          collection(db, 'products'),
          where('vendorId', '==', user.uid),
          // orderBy('createdAt', 'desc') // Requires composite index in Firestore
        );
        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Manual sort if index is missing
        productsList.sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis());
        
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?')) {
      try {
        await deleteDoc(doc(db, 'products', id));
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
        alert('เกิดข้อผิดพลาดในการลบสินค้า');
      }
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">รายการสินค้า</h1>
          <p className="text-slate-500 mt-1">จัดการข้อมูลสินค้าและราคาของคุณ ({products.length} รายการ)</p>
        </div>
        <Link 
          href="/vendor/products/add" 
          className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          เพิ่มสินค้าใหม่
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="ค้นหาสินค้า หรือหมวดหมู่..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  สินค้า
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  หมวดหมู่
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  ราคา/หน่วย
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  อัปเดตล่าสุด
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">จัดการ</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                    กำลังโหลดข้อมูล...
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                    <Package className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                    <p>ไม่พบรายการสินค้า</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-slate-100 rounded flex items-center justify-center border border-slate-200 overflow-hidden">
                          {product.imageUrl ? (
                            <img src={product.imageUrl} alt="" className="h-full w-full object-cover" />
                          ) : (
                            <ImageIcon className="h-5 w-5 text-slate-400" />
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900">{product.name}</div>
                          <div className="text-sm text-slate-500">{product.brand || '-'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      <span className="font-medium text-slate-900">฿{product.price?.toLocaleString()}</span> / {product.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {product.updatedAt ? new Date(product.updatedAt.toDate()).toLocaleDateString('th-TH') : '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-3">
                        <Link href={`/vendor/products/edit/${product.id}`} className="text-slate-400 hover:text-blue-600 transition-colors">
                          <Edit className="w-5 h-5" />
                        </Link>
                        <button onClick={() => handleDelete(product.id)} className="text-slate-400 hover:text-red-600 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
