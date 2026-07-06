import React from 'react';
import Link from 'next/link';
import { Search, User, Menu, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-md font-bold text-xl leading-none">W</div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
              Wassadu.net
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/categories" className="text-foreground/70 hover:text-foreground transition-colors">
              หมวดหมู่สินค้า
            </Link>
            <Link href="/pricing" className="text-foreground/70 hover:text-foreground transition-colors">
              สืบราคากลาง
            </Link>
            <Link href="/vendors" className="text-foreground/70 hover:text-foreground transition-colors">
              ผู้จัดจำหน่าย
            </Link>
          </nav>
        </div>

        {/* Global Search - Hidden on very small screens, visible on md+ */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-foreground/50 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground/50 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all"
              placeholder="ค้นหาวัสดุก่อสร้าง, หมวดหมู่, หรือผู้ขาย..."
            />
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex text-foreground/70 hover:text-foreground transition-colors relative">
             <Bell className="h-5 w-5" />
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
          </button>
          <div className="hidden sm:flex items-center gap-3">
             <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors px-2 py-1">เข้าสู่ระบบ</Link>
             <Link href="/register" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-all shadow-sm hover:shadow active:scale-95">สมัครสมาชิก</Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-foreground/5 transition-colors">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}
