import React from 'react';
import { Download, AlertCircle, CheckCircle2, Building2, ExternalLink } from 'lucide-react';

export default function ComparisonTable({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-8">
      {/* Header Section */}
      <div className="bg-slate-50 border-b border-slate-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 text-xs font-semibold tracking-wide uppercase">
                {data.category === 'cement' ? 'ปูนซีเมนต์' : 'เหล็กเสริม'}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-200 text-slate-700 text-xs font-medium">
                หน่วย: {data.unit}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{data.name}</h2>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> แบรนด์: <span className="font-medium text-slate-700">{data.brand}</span>
            </p>
          </div>
          <button className="flex-shrink-0 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors">
            <Download className="w-4 h-4" />
            <span>พิมพ์รายงานสืบราคา (บก.06)</span>
          </button>
        </div>
      </div>

      {/* Warning Banner for Gov Committees */}
      <div className="bg-amber-50 border-b border-amber-100 p-4 px-6 md:px-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm text-amber-800">
          <span className="font-bold">ข้อมูลสำหรับคณะกรรมการกำหนดราคากลาง:</span> ราคาอ้างอิงจากสำนักดัชนีเศรษฐกิจการค้า กระทรวงพาณิชย์ และ Modern Trade ชั้นนำ ข้อมูลอัปเดตล่าสุดเมื่อวันที่ {new Date(data.updatedAt).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50/50 text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th scope="col" className="px-6 py-4 md:px-8">แหล่งที่มาของการสืบราคา</th>
              <th scope="col" className="px-6 py-4 text-right">ราคาต่อหน่วย (บาท)</th>
              <th scope="col" className="px-6 py-4 text-center md:px-8">สถานะความคุ้มค่า</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.prices.map((item, index) => (
              <tr 
                key={index} 
                className={`transition-colors hover:bg-slate-50 ${item.isBestPrice ? 'bg-orange-50/30' : ''}`}
              >
                <td className="px-6 py-4 md:px-8 font-medium text-slate-800 flex items-center gap-2">
                  {item.source}
                  {!item.source.includes('Wassadu') && !item.source.includes('สำนัก') && (
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </td>
                <td className="px-6 py-4 text-right font-mono text-base">
                  <span className={item.isBestPrice ? 'text-orange-600 font-bold' : 'text-slate-700'}>
                    {item.price.toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4 md:px-8 text-center">
                  {item.isBestPrice ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> แนะนำสำหรับราคากลาง
                    </span>
                  ) : (
                    <span className="text-slate-400">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
