import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { CompareProvider } from "@/contexts/CompareContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Wassadu.net - ศูนย์กลางราคากลางวัสดุก่อสร้าง B2B & B2G",
  description: "แพลตฟอร์มสืบราคาและเปรียบเทียบวัสดุก่อสร้างออนไลน์ สำหรับหน่วยงานราชการและผู้รับเหมา",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="antialiased">
      <body className="min-h-screen flex flex-col font-sans">
        <Toaster position="bottom-right" toastOptions={{ duration: 4000, style: { background: '#333', color: '#fff', borderRadius: '12px', fontSize: '14px' } }} />
        <AuthProvider>
          <CompareProvider>
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </CompareProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
