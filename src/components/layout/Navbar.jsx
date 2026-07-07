"use client";
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { Search, User, Menu, Bell, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-orange-100 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div 
                className="cursor-pointer relative flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm overflow-hidden hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 ring-1 ring-slate-100 hover:ring-orange-200 z-10"
                title="กลับหน้าหลัก"
              >
                <img src="/logo.jpg" alt="Wassadu.net Logo" className="w-full h-full object-contain mix-blend-multiply scale-150" />
              </div>
              <span className="font-bold text-2xl tracking-tight hidden sm:inline-block text-slate-800 hover:opacity-80 transition-opacity">
                Wassadu<span className="text-orange-500">.net</span>
              </span>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <Link href="/categories" className="text-slate-600 hover:text-orange-600 transition-colors relative group">
                หมวดหมู่สินค้า
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/pricing" className="text-slate-600 hover:text-orange-600 transition-colors relative group flex items-center gap-1.5">
                สืบราคากลาง <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/vendors" className="text-slate-600 hover:text-orange-600 transition-colors relative group">
                ผู้จัดจำหน่าย
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>

          {/* Global Search - Light Theme */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-slate-100/80 border border-slate-200 rounded-full overflow-hidden focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all focus-within:bg-white shadow-inner">
                <div className="pl-4 flex items-center justify-center">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="flex h-11 w-full bg-transparent px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                  placeholder="ค้นหาวัสดุก่อสร้าง, หมวดหมู่, หรือผู้ขาย..."
                />
                <div className="pr-2">
                  <div className="hidden lg:flex items-center gap-1 px-2 py-1 rounded bg-white border border-slate-200 text-xs text-slate-400 font-mono shadow-sm">
                    <span className="text-[10px]">⌘</span>K
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-5">
            <button className="hidden sm:flex text-slate-500 hover:text-orange-600 transition-colors relative">
               <Bell className="h-5 w-5" />
               <span className="absolute top-0 right-0 flex h-2.5 w-2.5 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
            </button>
            
            <div className="w-px h-6 bg-slate-200 hidden sm:block"></div>

            <div className="hidden sm:flex items-center gap-3">
               {user ? (
                 <div className="flex items-center gap-4">
                   <div className="flex flex-col text-right">
                     <span className="text-sm font-semibold text-slate-800">{user.displayName || 'สมาชิก'}</span>
                     <span className="text-xs text-slate-500">{user.email}</span>
                   </div>
                   <button 
                     onClick={handleLogout}
                     className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors px-3 py-1.5 border border-red-200 rounded-full hover:bg-red-50"
                   >
                     ออกจากระบบ
                   </button>
                 </div>
               ) : (
                 <>
                   <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors px-2 py-1">
                     เข้าสู่ระบบ
                   </Link>
                   <Link href="/register" className="text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 active:scale-95">
                     สมัครสมาชิก
                   </Link>
                 </>
               )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex items-center justify-center p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-orange-600 transition-colors border border-slate-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>


    </>
  );
}
