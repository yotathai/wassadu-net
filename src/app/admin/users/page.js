"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { Users, Shield, Store, MoreVertical, Search, CheckCircle2 } from 'lucide-react';

export default function AdminUsersPage() {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [processingId, setProcessingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'users'));
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      // Sort: admins first, then vendors, then users
      list.sort((a, b) => {
        const order = { admin: 1, vendor: 2, user: 3 };
        return (order[a.role] || 4) - (order[b.role] || 4);
      });
      setUsersList(list);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleRoleChange = async (userId, newRole) => {
    if (!confirm(`คุณแน่ใจหรือไม่ที่จะเปลี่ยนสิทธิ์ผู้ใช้นี้เป็น ${newRole}?`)) return;
    
    setProcessingId(userId);
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, { role: newRole });
      
      // Update local state
      setUsersList(prev => prev.map(u => 
        u.id === userId ? { ...u, role: newRole } : u
      ));
    } catch (error) {
      console.error("Error updating role:", error);
      alert("เกิดข้อผิดพลาดในการเปลี่ยนสิทธิ์");
    } finally {
      setProcessingId(null);
    }
  };

  const filteredUsers = usersList.filter(user => 
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">จัดการผู้ใช้งาน</h1>
          <p className="text-slate-500 mt-1">อนุมัติสิทธิ์ร้านค้า (Vendor) หรือตั้งค่าแอดมิน</p>
        </div>
        
        <div className="relative w-full sm:w-64">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="ค้นหาชื่อ หรืออีเมล..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600">ชื่อผู้ใช้งาน</th>
                <th className="px-6 py-4 font-semibold text-slate-600">อีเมล</th>
                <th className="px-6 py-4 font-semibold text-slate-600">สิทธิ์ปัจจุบัน</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-right">จัดการสิทธิ์</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-slate-500">
                    <div className="inline-block animate-spin w-6 h-6 border-2 border-slate-300 border-t-orange-500 rounded-full mb-2"></div>
                    <div>กำลังโหลดข้อมูล...</div>
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-slate-500">
                    ไม่พบข้อมูลผู้ใช้งาน
                  </td>
                </tr>
              ) : (
                filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{user.name || 'ไม่ระบุชื่อ'}</div>
                      <div className="text-xs text-slate-400 mt-1">ID: {user.id.substring(0, 8)}...</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{user.email}</td>
                    <td className="px-6 py-4">
                      <RoleBadge role={user.role} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      {processingId === user.id ? (
                        <span className="text-sm text-slate-500 flex items-center justify-end gap-2">
                          <div className="animate-spin w-4 h-4 border-2 border-slate-300 border-t-orange-500 rounded-full"></div> กำลังอัปเดต...
                        </span>
                      ) : (
                        <div className="flex items-center justify-end gap-2">
                          {user.role !== 'admin' && (
                            <button 
                              onClick={() => handleRoleChange(user.id, 'admin')}
                              className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors"
                            >
                              ตั้งเป็น Admin
                            </button>
                          )}
                          {user.role !== 'vendor' && (
                            <button 
                              onClick={() => handleRoleChange(user.id, 'vendor')}
                              className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100 transition-colors"
                            >
                              อนุมัติเป็นร้านค้า
                            </button>
                          )}
                          {user.role !== 'user' && (
                            <button 
                              onClick={() => handleRoleChange(user.id, 'user')}
                              className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors"
                            >
                              ปลดเป็น User ทั่วไป
                            </button>
                          )}
                        </div>
                      )}
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

function RoleBadge({ role }) {
  if (role === 'admin') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
        <Shield className="w-3.5 h-3.5" /> แอดมิน (Admin)
      </span>
    );
  }
  if (role === 'vendor') {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
        <Store className="w-3.5 h-3.5" /> ร้านค้า (Vendor)
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
      <Users className="w-3.5 h-3.5" /> ผู้ใช้ทั่วไป (User)
    </span>
  );
}
