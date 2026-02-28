import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/providers/smooth-scrolling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LASTBITE - Cộng đồng cứu đồ ăn cuối cùng",
  description:
    "Nền tảng LASTBITE kết nối thực phẩm dư thừa với cộng đồng yêu bền vững, giúp tiết kiệm chi phí và giảm lãng phí thực phẩm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
