import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-md font-bold text-xl leading-none">W</div>
              <span className="font-bold text-xl tracking-tight">
                Wassadu.net
              </span>
            </div>
            <p className="text-sm text-background/70">
              ศูนย์กลางราคากลางวัสดุก่อสร้างระดับชาติ ระบบเชื่อมโยงผู้ซื้อ (B2B, B2G) และผู้ขายที่โปร่งใสและตรวจสอบได้
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">สำหรับผู้ซื้อ</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/search" className="hover:text-primary transition-colors">สืบค้นราคากลาง</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">หมวดหมู่สินค้าทั้งหมด</Link></li>
              <li><Link href="/compare" className="hover:text-primary transition-colors">เปรียบเทียบราคา</Link></li>
              <li><Link href="/buyer-guide" className="hover:text-primary transition-colors">คู่มือการใช้งานสำหรับส่วนราชการ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">สำหรับผู้ขาย</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="/register-vendor" className="hover:text-primary transition-colors">สมัครเป็นผู้ขาย</Link></li>
              <li><Link href="/pricing-vendor" className="hover:text-primary transition-colors">แพ็กเกจนำเสนอสินค้า</Link></li>
              <li><Link href="/vendor-rules" className="hover:text-primary transition-colors">ข้อกำหนดการลงราคา</Link></li>
              <li><Link href="/vendor-portal" className="hover:text-primary transition-colors">ระบบจัดการแคตตาล็อก</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">ติดต่อเรา</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>อีเมล: contact@wassadu.net</li>
              <li>โทร: 02-XXX-XXXX</li>
              <li><Link href="/about" className="hover:text-primary transition-colors">เกี่ยวกับเรา</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">เงื่อนไขการให้บริการ</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Wassadu.net - Enterprise Hub for Construction Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
