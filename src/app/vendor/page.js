"use client";

import React from 'react';
import { Package, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function VendorDashboard() {
  // Mock data for dashboard
  const stats = [
    { name: 'สินค้ารวม', value: '124', icon: Package, color: 'text-blue-500', bg: 'bg-blue-100' },
    { name: 'ผู้เข้าชม (เดือนนี้)', value: '8,234', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-100' },
    { name: 'ยอดขายโดยประมาณ', value: '฿124k', icon: DollarSign, color: 'text-orange-500', bg: 'bg-orange-100' },
    { name: 'การเติบโต', value: '+12.5%', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-100' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">ภาพรวมร้านค้า</h1>
        <p className="text-slate-500 mt-1">ยินดีต้อนรับกลับมา! นี่คือสรุปข้อมูลร้านค้าของคุณ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.name}</p>
              <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">กิจกรรมล่าสุด</h2>
        <div className="text-center py-12 text-slate-500">
          <p>ยังไม่มีกิจกรรมที่น่าสนใจในขณะนี้</p>
          <p className="text-sm mt-2">เพิ่มสินค้าแรกของคุณเพื่อให้ลูกค้าค้นพบร้านของคุณได้ง่ายขึ้น</p>
        </div>
      </div>
    </div>
  );
}
