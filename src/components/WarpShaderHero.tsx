"use client";
import React, { useEffect, useRef, useCallback } from 'react';
import { Warp } from "@paper-design/shaders-react";
import Link from 'next/link';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Typewriter } from "@/components/ui/typewriter-text";

// Helper to parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' string to {r, g, b}
const parseRgbColor = (colorString: string) => {
    if (!colorString) return null;
    const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (match) {
        return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10),
        };
    }
    return null;
};

export default function WarpShaderHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef<HTMLButtonElement>(null);
  const mousePosRef = useRef({ x: null as number | null, y: null as number | null });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const resolvedCanvasColorsRef = useRef({
    strokeStyle: { r: 255, g: 255, b: 255 }, // White arrow for dark background
  });

  // Set up color resolution for the arrow
  useEffect(() => {
    const tempElement = document.createElement('div');
    tempElement.style.display = 'none';
    document.body.appendChild(tempElement);

    const updateResolvedColors = () => {
      // Use white color for the arrow to stand out on the dark green background
      resolvedCanvasColorsRef.current.strokeStyle = { r: 255, g: 255, b: 255 };
    };
    
    updateResolvedColors();
    
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target === document.documentElement) {
          updateResolvedColors();
          break;
        }
      }
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
      if (tempElement.parentNode) {
        tempElement.parentNode.removeChild(tempElement);
      }
    };
  }, []);

  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !targetRef.current || !ctxRef.current) return;

    const targetEl = targetRef.current;
    const ctx = ctxRef.current;
    const mouse = mousePosRef.current;

    const x0 = mouse.x;
    const y0 = mouse.y;

    if (x0 === null || y0 === null) return;

    const rect = targetEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const a = Math.atan2(cy - y0, cx - x0);
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

    const midX = (x0 + x1) / 2;
    const midY = (y0 + y1) / 2;
    const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
    const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
    const controlX = midX;
    const controlY = midY + offset * t;
    
    const r = Math.sqrt((x1 - x0)**2 + (y1 - y0)**2);
    const opacity = Math.min(1.0, (r - Math.max(rect.width, rect.height) / 2) / 500); 

    const arrowColor = resolvedCanvasColorsRef.current.strokeStyle;
    ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
    ctx.lineWidth = 2.5;

    // Draw curve
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.setLineDash([10, 5]);
    ctx.stroke();
    ctx.restore();

    // Draw arrowhead
    const angle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLength = 10 * (ctx.lineWidth / 1.5); 
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle - Math.PI / 6),
      y1 - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle + Math.PI / 6),
      y1 - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !targetRef.current) return;

    ctxRef.current = canvas.getContext("2d");
    const ctx = ctxRef.current;

    const updateCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleMouseMove);
    updateCanvasSize();

    const animateLoop = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawArrow();
      }
      animationFrameIdRef.current = requestAnimationFrame(animateLoop);
    };
    
    animateLoop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawArrow]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Shader */}
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          // THAY ĐỔI: Sử dụng bảng màu xanh đậm (#003D33)
          colors={[
            "#003D33", // Màu chủ đạo (Dark Teal)
            "#002822", // Màu tối hơn để tạo chiều sâu
            "#004D40", // Màu sáng hơn một chút
            "#0F5C4E"  // Màu nhấn nhẹ
          ]}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-10">
        {/* Container chính với w-full */}
        <div className="w-full px-4 flex items-center justify-center mb-0">
          <div className="w-full max-w-[1800px] h-[200px] md:h-[310px] flex items-center justify-center overflow-visible">
            <TextHoverEffect text="LASTBITE" />
          </div>
        </div>

        {/* Slogan Section */}
        <div className="w-full max-w-4xl text-center space-y-4 -mt-2 mb-5">
          <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-tight">
            <Typewriter
              text={[
                "Join the movement to reduce food waste",
                "Get amazing deals on quality food",
                "Help make a difference in your community"
              ]}
              speed={80}
              deleteSpeed={40}
              delay={2000}
              loop={true}
              className="inline-block"
            />
          </h2>
          
          <p className="text-white/85 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Get amazing deals on quality food and help make a difference in your community.
          </p>

          <div className="relative pt-8 overflow-hidden">
            <div className="group cursor-pointer">
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/how-to-collect">
            <button 
              ref={targetRef}
              // THAY ĐỔI: Đổi màu chữ text-[...] thành text-[#003D33]
              className="px-10 py-4 bg-white text-[#003D33] font-bold rounded-full hover:bg-white/95 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Started
            </button>
          </Link>
          <button className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Arrow Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50"></canvas>
    </main>
  );
}