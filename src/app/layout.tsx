import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/providers/smooth-scrolling";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brand-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-brand-mono",
  display: "swap",
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
        className={`${beVietnamPro.variable} ${jetBrainsMono.variable} antialiased`}
      >
       <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
