import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-primary transition-colors">
            <Home className="w-4 h-4 mr-2" />
            หน้าแรก
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-foreground/40" />
              {item.href ? (
                <Link href={item.href} className="ml-1 text-sm font-medium text-foreground/60 hover:text-primary md:ml-2 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="ml-1 text-sm font-medium text-foreground md:ml-2">
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
