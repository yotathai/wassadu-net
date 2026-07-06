import React from 'react';

export default function NewsFeed() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Left Column: Text */}
          <div className="md:w-1/2 lg:w-7/12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4 shadow-sm">
              อัปเดตข่าวสาร
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
              ติดตามข่าวสารวงการก่อสร้างกับ <span className="text-blue-600">โยธาไทย</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              รับทราบข้อมูลข่าวสารล่าสุดเกี่ยวกับวงการก่อสร้าง ระเบียบพัสดุฯ และแนวโน้มราคาวัสดุก่อสร้าง 
              ส่งตรงจากแฟนเพจ Yotathai.net ศูนย์รวมความรู้เพื่อคนทำงานช่างและคณะกรรมการราคากลางทั่วประเทศ
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-2">ทำไมต้องติดตาม?</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>อัปเดตระเบียบและกฎหมายงานก่อสร้างภาครัฐ</li>
                <li>วิเคราะห์แนวโน้มราคาวัสดุหลัก (ปูน, เหล็ก)</li>
                <li>เทคนิคการสืบราคาและจัดทำราคากลางที่ถูกต้อง</li>
                <li>ถาม-ตอบ ปัญหาหน้างานกับทีมงานผู้เชี่ยวชาญ</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Facebook Page Plugin */}
          <div className="md:w-1/2 lg:w-5/12 w-full flex justify-center md:justify-end">
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200 w-full max-w-[500px]">
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyotathai.net&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                width="100%" 
                height="600" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="rounded-xl w-full"
                title="Yotathai Facebook Feed"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
