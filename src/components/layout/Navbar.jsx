import React from 'react';
import Link from 'next/link';
import { Search, User, Menu, Bell, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full border-b border-white/10 bg-[#0B1120]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B1120]/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
              <span className="font-bold text-2xl text-white">W</span>
              <div className="absolute inset-0 rounded-xl border border-white/20"></div>
            </div>
            <span className="font-bold text-2xl tracking-tight hidden sm:inline-block text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Wassadu<span className="text-blue-400">.net</span>
            </span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/categories" className="text-gray-300 hover:text-white transition-colors relative group">
              หมวดหมู่สินค้า
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors relative group flex items-center gap-1.5">
              สืบราคากลาง <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/vendors" className="text-gray-300 hover:text-white transition-colors relative group">
              ผู้จัดจำหน่าย
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        {/* Global Search - Centered and Premium */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-[#1E293B]/80 backdrop-blur-md border border-white/10 rounded-full overflow-hidden focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50 transition-all shadow-inner">
              <div className="pl-4 flex items-center justify-center">
                <Search className="h-4 w-4 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                className="flex h-11 w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-gray-500 outline-none"
                placeholder="ค้นหาวัสดุก่อสร้าง, หมวดหมู่, หรือผู้ขาย..."
              />
              <div className="pr-2">
                <div className="hidden lg:flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-xs text-gray-400 border border-white/5 font-mono">
                  <span className="text-[10px]">⌘</span>K
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-5">
          <button className="hidden sm:flex text-gray-400 hover:text-white transition-colors relative">
             <Bell className="h-5 w-5" />
             <span className="absolute top-0 right-0 flex h-2.5 w-2.5 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
          </button>
          
          <div className="w-px h-6 bg-white/10 hidden sm:block"></div>

          <div className="hidden sm:flex items-center gap-3">
             <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-2 py-1">
               เข้าสู่ระบบ
             </Link>
             <Link href="/register" className="relative group overflow-hidden rounded-full p-[1px]">
               <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
               <div className="relative bg-[#0B1120] px-5 py-2 rounded-full transition-all duration-300 group-hover:bg-opacity-0">
                  <span className="text-sm font-semibold text-white">สมัครสมาชิก</span>
               </div>
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center justify-center p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
