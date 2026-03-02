import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Sen } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/providers/smooth-scrolling";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-brand-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-brand-mono",
  display: "swap",
});

const sen = Sen({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-brand-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LASTBITE - Cộng đồng cứu phần ngon cuối cùng",
  description:
    "LASTBITE kết nối phần thực phẩm dư chất lượng với cộng đồng yêu bền vững để tiết kiệm chi phí và giảm lãng phí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${beVietnamPro.variable} ${sen.variable} ${jetBrainsMono.variable} antialiased`}
      >
       <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
