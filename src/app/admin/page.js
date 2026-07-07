"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { Users, Package, Store, Activity } from 'lucide-react';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    users: 0,
    vendors: 0,
    products: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        let userCount = 0;
        let vendorCount = 0;
        
        usersSnapshot.forEach(doc => {
          const data = doc.data();
          if (data.role === 'vendor') vendorCount++;
          if (data.role === 'user') userCount++;
        });

        const productsSnapshot = await getDocs(collection(db, 'products'));
        const productCount = productsSnapshot.size;

        setStats({
          users: userCount,
          vendors: vendorCount,
          products: productCount
        });
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">ภาพรวมระบบ (Dashboard)</h1>
        <p className="text-slate-500 mt-1">สรุปข้อมูลสถิติทั้งหมดของแพลตฟอร์ม Wassadu.net</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin w-8 h-8 border-4 border-slate-300 border-t-orange-500 rounded-full"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="จำนวนร้านค้า (Vendor)" 
            value={stats.vendors} 
            icon={<Store className="w-6 h-6 text-blue-500" />} 
            color="bg-blue-50 border-blue-100"
          />
          <StatCard 
            title="จำนวนผู้ใช้งานทั่วไป" 
            value={stats.users} 
            icon={<Users className="w-6 h-6 text-emerald-500" />} 
            color="bg-emerald-50 border-emerald-100"
          />
          <StatCard 
            title="จำนวนสินค้าในระบบ" 
            value={stats.products} 
            icon={<Package className="w-6 h-6 text-orange-500" />} 
            color="bg-orange-50 border-orange-100"
          />
          <StatCard 
            title="สถานะระบบ" 
            value="ปกติ" 
            icon={<Activity className="w-6 h-6 text-purple-500" />} 
            color="bg-purple-50 border-purple-100"
          />
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mt-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">กิจกรรมล่าสุด</h3>
        <div className="text-center py-12 text-slate-400 text-sm">
          กำลังพัฒนาระบบบันทึกประวัติการใช้งาน
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className={`rounded-xl border p-6 flex flex-col ${color}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-slate-600 text-sm font-medium mb-1">{title}</h4>
        <div className="text-3xl font-black text-slate-800">{value}</div>
      </div>
    </div>
  );
}
