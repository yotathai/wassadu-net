import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Wassadu.net - ศูนย์กลางราคากลางวัสดุก่อสร้าง B2B & B2G",
  description: "ระบบสืบราคากลางและแคตตาล็อกวัสดุก่อสร้างสำหรับส่วนราชการและเอกชน เชื่อมโยงผู้ซื้อและผู้ขายอย่างโปร่งใส",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className="antialiased">
      <body className="min-h-screen flex flex-col font-sans">
        <AuthProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
