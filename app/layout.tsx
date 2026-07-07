import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. استيراد الـ Providers (تأكدي من صحة المسارات)
import { CartProvider } from "@/context/CartContext"; 
import { WishlistProvider } from "@/context/WishlistContext"; // سطر الاستيراد الجديد

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "من أيدي فلسطينية",
  description: "سوق غزة المحلي للمنتجات اليدوية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 2. إحاطة المكونات بالـ WishlistProvider والـ CartProvider معاً */}
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}