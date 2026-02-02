"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, PlayCircle } from "lucide-react";
// import { cn } from "@/lib/utils"; // Giữ nguyên import nếu bạn có file utils

// --- Types ---
interface LastBiteHeroProps {
  heading?: string;
  subheading?: string;
  badgeText?: string;
  ctaText?: string;
  backgroundImageUrl?: string;
}

// --- Helper: Text Flip (Chữ đổi màu sáng để hợp nền tối) ---
const TextFlip = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="inline-grid overflow-hidden align-bottom h-[1.15em] ml-2 sm:ml-3">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "100%", filter: "blur(10px)" }}
          animate={{ y: "0%", filter: "blur(0px)" }}
          exit={{ y: "-100%", filter: "blur(10px)", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          // THAY ĐỔI: Màu xanh đậm đà hơn (emerald-500 thay vì green-400)
          className="col-start-1 row-start-1 block text-emerald-500" 
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export function LastBiteHero({
  heading = "Save the Last.",
  subheading = "Connect surplus food with people who care. Reduce waste, save money, and help the planet—one meal at a time.",
  badgeText = "#1 Anti-Waste Community",
  ctaText = "Download App",
  backgroundImageUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
}: LastBiteHeroProps) {
  
  // --- Refs ---
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef<HTMLButtonElement>(null);
  const mousePosRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // --- Logic Vẽ Mũi Tên (Giữ nguyên) ---
  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !targetRef.current || !ctxRef.current || !containerRef.current) return;

    const ctx = ctxRef.current;
    const { x: mouseX, y: mouseY } = mousePosRef.current;
    const canvas = canvasRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (mouseX === null || mouseY === null) return;
    if (mouseX < 0 || mouseY < 0 || mouseX > canvas.width || mouseY > canvas.height) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const btnRect = targetRef.current.getBoundingClientRect();

    const targetX = (btnRect.left - containerRect.left) + btnRect.width / 2;
    const targetY = (btnRect.top - containerRect.top) + btnRect.height / 2;

    const angle = Math.atan2(targetY - mouseY, targetX - mouseX);
    const dist = Math.hypot(targetX - mouseX, targetY - mouseY);

    if (dist < 80) return;

    const endDist = btnRect.width / 2 + 20; 
    const x1 = targetX - Math.cos(angle) * endDist;
    const y1 = targetY - Math.sin(angle) * endDist;

    const midX = (mouseX + x1) / 2;
    const midY = (mouseY + y1) / 2;
    const controlX = midX;
    const controlY = midY + Math.min(dist * 0.2, 100);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"; 
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.stroke();

    const arrowAngle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLen = 10;
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - headLen * Math.cos(arrowAngle - Math.PI / 6), y1 - headLen * Math.sin(arrowAngle - Math.PI / 6));
    ctx.lineTo(x1 - headLen * Math.cos(arrowAngle + Math.PI / 6), y1 - headLen * Math.sin(arrowAngle + Math.PI / 6));
    ctx.fill();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    ctxRef.current = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePosRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = { x: null, y: null };
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    handleResize();

    const render = () => {
      drawArrow();
      animationFrameIdRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [drawArrow]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
            src={backgroundImageUrl} 
            alt="Background" 
            className="w-full h-full object-cover"
        />
        {/* Overlay giữ nguyên */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* --- CONTENT LAYER --- */}
      {/* THAY ĐỔI: Thêm pt-20 để đẩy nội dung xuống dưới 1 chút cho cân bằng khung ảnh */}
      <div className="relative z-10 container px-4 mx-auto flex flex-col items-center text-center pt-20">
        
        {/* Badge */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
        >
            {/* THAY ĐỔI: Màu dot đầm hơn */}
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"/>
            {badgeText}
        </motion.div>

        {/* Main Heading */}
        {/* THAY ĐỔI: 
            1. Giảm cỡ chữ xuống (text-4xl -> lg:text-7xl) cho cân bằng.
            2. Chia layout Flex col để ép dòng thành 2 bậc thang rõ rệt. 
        */}
        <h1 className="flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-[1.1]">
            <span className="block">{heading}</span>
            <span className="flex items-center mt-1 sm:mt-2">
                Share the 
                <TextFlip words={["Good", "Future", "Taste", "Planet"]} />
            </span>
        </h1>

        {/* Subheading */}
        {/* Giảm nhẹ margin bottom */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed drop-shadow-md font-light">
            {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
            <button
                ref={targetRef}
                // THAY ĐỔI: bg-emerald-500 để màu xanh đầm hơn, sang hơn
                className="relative group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-emerald-500 rounded-full hover:bg-emerald-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                {ctaText}
            </button>
            
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors group">
                How it works 
                {/* THAY ĐỔI: Hover icon màu xanh đầm */}
                <PlayCircle className="w-5 h-5 ml-2 group-hover:text-emerald-500 transition-colors" />
            </button>
        </div>

        {/* Social Proof (Bottom) */}
        <div className="mt-10 flex flex-col items-center gap-2 text-white/60 text-sm">
             <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-black/50 overflow-hidden">
                         <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                     </div>
                 ))}
             </div>
             <p>Joined by <strong>50,000+</strong> food savers</p>
        </div>

      </div>

      {/* --- CANVAS LAYER (Arrow) --- */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-20"
      />
    </section>
  );
}