import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import React from "react";
import { Header } from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import Image from "next/image";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-[#1F2839] font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
        <div className="fixed top-3/4 -translate-y-3/4 right-0 cursor-pointer z-[10] w-[80px] h-[80px]">
          <Image fill sizes="80px" src="/img/wa.png" alt="wa-icon" />
        </div>
      </body>
    </html>
  );
}
