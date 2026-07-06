import React from 'react';
import Link from 'next/link';
import { Building2, MapPin, ShieldCheck, Clock } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-border/60 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      
      {/* Image Section */}
      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
        {/* We use standard img here for simplicity with external mock URLs. In prod, use next/image */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isEGP && (
          <div className="absolute top-3 right-3 bg-green-600/90 backdrop-blur text-white text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
            <ShieldCheck className="w-3 h-3" />
            รองรับ e-GP
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
            {product.brand}
          </span>
        </div>
        
        <h3 className="font-semibold text-foreground text-lg leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* Vendor & Location info */}
        <div className="space-y-1.5 mb-4 mt-auto">
          <div className="flex items-center text-sm text-foreground/60 gap-1.5">
            <Building2 className="w-4 h-4 shrink-0 text-foreground/40" />
            <span className="truncate">{product.vendor}</span>
          </div>
          <div className="flex items-center text-sm text-foreground/60 gap-1.5">
            <MapPin className="w-4 h-4 shrink-0 text-foreground/40" />
            <span className="truncate">{product.location}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mb-4"></div>

        {/* Price & Action */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs text-foreground/50 mb-1 flex items-center gap-1">
               <Clock className="w-3 h-3" /> อัปเดต {product.lastUpdated}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">
                ฿{product.price.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
              </span>
              <span className="text-sm text-foreground/60">/{product.unit}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
