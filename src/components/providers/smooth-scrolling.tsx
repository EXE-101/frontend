"use client";

import { ReactLenis, useLenis } from "lenis/react"; 
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.1, 
        duration: 1.8, 
        smoothWheel: true,
      }}
    >
      <ScrollToTop />
      {children}
    </ReactLenis>
  );
}