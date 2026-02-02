"use client";

// Gói "lenis" mới hỗ trợ đường dẫn import này luôn, nên code này chuẩn nhé
import { ReactLenis } from "lenis/react"; 

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.1, // Độ mượt (càng thấp càng trượt nhiều)
        duration: 1.8, // Thời gian trượt
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}