"use client";

import React, { useState, createContext, useContext, useCallback } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from 'lucide-react';

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- CONTEXT & HOOKS ---
interface HoverSliderContextValue {
  activeSlide: number;
  changeSlide: (index: number) => void;
}

const HoverSliderContext = createContext<HoverSliderContextValue | undefined>(undefined);

function useHoverSliderContext() {
  const context = useContext(HoverSliderContext);
  if (!context) {
    throw new Error("useHoverSliderContext must be used within a HoverSliderProvider");
  }
  return context;
}

function splitText(text: string) {
  const words = text.split(" ").map((word) => word.concat(" "));
  const characters = words.map((word) => word.split("")).flat(1);
  return { words, characters };
}

// --- COMPONENTS ---
const HoverSlider = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = useCallback((index: number) => setActiveSlide(index), []);

  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <div className={className}>{children}</div>
    </HoverSliderContext.Provider>
  );
};

const TextStaggerHover = ({
  text,
  index,
  className,
  description
}: {
  text: string;
  index: number;
  className?: string;
  description?: string;
}) => {
  const { activeSlide, changeSlide } = useHoverSliderContext();
  const { characters } = splitText(text);
  const isActive = activeSlide === index;

  return (
    <div
      className="group cursor-pointer py-6 border-b border-black/5 last:border-none relative z-10"
      onMouseEnter={() => changeSlide(index)}
    >
      {/* Step Title */}
      <h3 className={cn("relative inline-block overflow-hidden text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none mb-3 transition-colors duration-300", className)}>
        {characters.map((char, i) => (
          <span key={`char-${i}`} className="relative inline-block overflow-hidden">
            <MotionConfig transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.02 }}>
              
              {/* Inactive Text */}
              <motion.span
                className="inline-block text-[#1a4731]/20"
                initial={{ y: 0 }}
                animate={isActive ? { y: "-100%" } : { y: 0 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>

              {/* Active Text */}
              <motion.span
                className="absolute left-0 top-0 inline-block text-[#1a4731]"
                initial={{ y: "100%" }}
                animate={isActive ? { y: 0 } : { y: "100%" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </MotionConfig>
          </span>
        ))}
      </h3>
      
      {/* Description */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isActive ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-base text-gray-600 font-medium max-w-md leading-relaxed antialiased">
          {description}
        </p>
        
        <div className="mt-4 flex items-center gap-2 text-[#1a4731] font-bold text-xs uppercase tracking-widest hover:underline cursor-pointer">
            Tìm hiểu thêm <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    </div>
  );
};

const HoverSliderImageWrap = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    // SỬA: Tăng max-w lên 550px để ảnh to hơn (trước là 400px)
    <div className={cn("relative w-full max-w-[1000px] aspect-square overflow-hidden rounded-2xl mx-auto lg:ml-auto", className)}>
      {children}
    </div>
  );
};

const HoverSliderImage = ({ index, imageUrl, alt }: { index: number; imageUrl: string; alt: string }) => {
  const { activeSlide } = useHoverSliderContext();
  const isActive = activeSlide === index;

  return (
    <motion.img
      src={imageUrl}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={isActive ? { opacity: 1, scale: 1, zIndex: 10 } : { opacity: 0, scale: 1.1, zIndex: 0 }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
    />
  );
};

// --- DATA ---
const STEPS = [
  {
    title: "Bước một",
    desc: "Khám phá Surprise Bag từ các cửa hàng và nhà hàng gần bạn, lọc theo vị trí hoặc mức giá mong muốn.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Bước hai",
    desc: "Đặt túi trực tiếp trên ứng dụng, thanh toán an toàn để cửa hàng giữ phần ăn cho bạn.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Bước ba",
    desc: "Đến nhận đúng khung giờ đã hẹn, đưa mã xác nhận điện tử cho nhân viên mà không cần giấy tờ.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Bước bốn",
    desc: "Tận hưởng bữa ăn ngon và biết rằng bạn vừa cứu thực phẩm khỏi bị bỏ phí, góp phần bảo vệ môi trường.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1000&auto=format&fit=crop"
  },
];

// --- MAIN COMPONENT ---
export function HowItWorksSection() {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-28 overflow-hidden font-sans">
      
      {/* SỬA: Tăng max-w-6xl lên max-w-7xl để khung rộng ra -> Chữ sẽ dời sang trái */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HoverSlider Layout */}
        <HoverSlider className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            
            {/* Headers */}
            <div className="mb-10">
                 <h2 className="text-[#1a4731]/60 font-bold text-xs uppercase tracking-[0.2em] mb-3">
                   Cách sử dụng ứng dụng
                 </h2>
                 <h2 className="text-[#1a4731] font-bold text-4xl md:text-5xl tracking-tight">
                    Quy trình hoạt động
                 </h2>
            </div>

            {/* List of Steps */}
            <div className="w-full">
                {STEPS.map((step, index) => (
                <TextStaggerHover
                    key={index}
                    index={index}
                    text={step.title}
                    description={step.desc}
                />
                ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <HoverSliderImageWrap className="shadow-2xl shadow-[#1a4731]/10 border-4 border-white">
              {STEPS.map((step, index) => (
                <HoverSliderImage
                  key={index}
                  index={index}
                  imageUrl={step.image}
                  alt={step.title}
                />
              ))}
            </HoverSliderImageWrap>
          </div>

        </HoverSlider>

      </div>
    </section>
  );
}