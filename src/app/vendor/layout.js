"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { LayoutDashboard, Package, PlusCircle, Settings, Store } from 'lucide-react';

export default function VendorLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    // Note: We should ideally also check if the user is a vendor here
  }, [user, loading, router]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">กำลังโหลดข้อมูล...</div>;
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex h-screen bg-slate-50 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Store className="w-5 h-5 text-orange-500" />
            แผงควบคุมร้านค้า
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/vendor" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span>ภาพรวม</span>
          </Link>
          <Link href="/vendor/products" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
            <Package className="w-5 h-5" />
            <span>รายการสินค้าทั้งหมด</span>
          </Link>
          <Link href="/vendor/products/add" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
            <PlusCircle className="w-5 h-5" />
            <span>เพิ่มสินค้าใหม่</span>
          </Link>
          <Link href="/vendor/settings" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span>ตั้งค่าร้านค้า</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
