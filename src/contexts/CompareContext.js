"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CompareContext = createContext();

export function useCompare() {
  return useContext(CompareContext);
}

export function CompareProvider({ children }) {
  const [compareItems, setCompareItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wassadu_compare');
    if (saved) {
      try {
        setCompareItems(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing compare items", e);
      }
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem('wassadu_compare', JSON.stringify(compareItems));
  }, [compareItems]);

  const addToCompare = (product) => {
    setCompareItems((prev) => {
      // Prevent duplicates
      if (prev.find(item => item.id === product.id)) return prev;
      // Max 3 items
      if (prev.length >= 3) {
        toast.error("เปรียบเทียบสินค้าได้สูงสุด 3 รายการ");
        return prev;
      }
      toast.success(`เพิ่ม "${product.name}" ลงในตารางเปรียบเทียบแล้ว`);
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId) => {
    setCompareItems((prev) => prev.filter(item => item.id !== productId));
    toast.success("ลบออกจากตารางเปรียบเทียบแล้ว", { icon: '🗑️' });
  };

  const clearCompare = () => {
    setCompareItems([]);
    toast.success("ล้างข้อมูลเปรียบเทียบทั้งหมดแล้ว", { icon: '🧹' });
  };

  const isComparing = (productId) => {
    return compareItems.some(item => item.id === productId);
  };

  const value = {
    compareItems,
    addToCompare,
    removeFromCompare,
    clearCompare,
    isComparing
  };

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  );
}
