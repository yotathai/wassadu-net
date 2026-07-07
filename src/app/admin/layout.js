"use client";

import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Users, ShieldAlert, PackageSearch } from 'lucide-react';

export default function AdminLayout({ children }) {
  const { user, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else if (role !== 'admin') {
      router.push('/');
    }
  }, [user, role, router]);

  if (!user || role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin w-8 h-8 border-4 border-slate-300 border-t-orange-500 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldAlert className="text-orange-500 w-6 h-6" />
            Wassadu Admin
          </h2>
          <p className="text-sm text-slate-500 mt-1">แผงควบคุมระบบ</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <LayoutDashboard className="w-5 h-5 text-slate-400" /> ภาพรวมระบบ
          </Link>
          <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <Users className="w-5 h-5 text-slate-400" /> จัดการผู้ใช้งาน
          </Link>
          <Link href="/pricing" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <PackageSearch className="w-5 h-5 text-slate-400" /> ดูหน้าระบบสืบราคา
          </Link>
        </nav>
      </aside>

      {/* Admin Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
