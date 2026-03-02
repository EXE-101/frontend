"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

// --- DATA (FULL ENGLISH) ---
const testimonials = [
  {
    id: 1,
    quote: "LASTBITE giúp tôi tiết kiệm hơn 2 triệu tiền ăn mỗi tháng. Túi nào cũng sạch, ngon và đủ bất ngờ.",
    name: 'Nguyen Minh Anh',
    designation: 'Sinh viên Đại học FPT',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop',
  },
  {
    id: 2,
    quote: "Lịch làm việc bận rộn nhưng tôi chỉ cần đặt trước vài phút là ghé nhận ngay, vẫn được giá ưu đãi và biết mình đang giảm lãng phí.",
    name: 'Tran Van Khoa',
    designation: 'Trưởng phòng Marketing',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop',
  },
  {
    id: 3,
    quote: "Tiệm bánh giảm 40% hàng tồn cuối ngày, doanh thu tăng và khách mới tìm đến nhiều hơn.",
    name: 'Le Thi Huong',
    designation: 'Chủ tiệm Sweet Dreams Bakery',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop',
  },
  {
    id: 4,
    quote: "Mỗi Surprise Bag là trải nghiệm vui cho cả nhà, vừa ngon vừa giúp tôi dạy con ý thức tiết kiệm.",
    name: 'Pham Hoang Nam',
    designation: 'Kỹ sư phần mềm',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop',
  },
  {
    id: 5,
    quote: "LASTBITE giúp siêu thị tối ưu tồn kho cuối ngày, khách vui còn chúng tôi giảm chi phí xử lý rác.",
    name: 'Vo Minh Tuan',
    designation: 'Quản lý tại CoopMart',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop',
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false); // Dừng tự động khi người dùng tương tác
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Animation variants
  const slideVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    // Giữ nguyên bg-background theo yêu cầu của bạn
    <section className="bg-background py-24 overflow-hidden relative font-sans">
      
      {/* Background Decor (Optional - làm bớt trống) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
            Người dùng kể gì về LASTBITE
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Hàng nghìn người chọn LASTBITE mỗi ngày để vừa tiết kiệm chi tiêu vừa góp phần bảo vệ hành tinh.
          </p>
        </div>

        {/* MAIN CONTENT: 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: IMAGE STACK */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center lg:justify-end">
            <AnimatePresence mode="popLayout">
              {testimonials.map((testimonial, index) => {
                // Logic tính toán vị trí xếp chồng ảnh
                const isActive = index === active;
                const isPrev = index === (active - 1 + testimonials.length) % testimonials.length;
                const isNext = index === (active + 1) % testimonials.length;
                
                // Chỉ render 3 ảnh gần nhất để tối ưu hiệu năng
                if (!isActive && !isPrev && !isNext) return null;

                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.9, x: 100 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.4, 
                      scale: isActive ? 1 : 0.9, 
                      zIndex: isActive ? 10 : 0,
                      x: isActive ? 0 : (isNext ? 40 : -40), // Hiệu ứng xếp lớp
                      rotate: isActive ? 0 : (isNext ? 3 : -3) // Xoay nhẹ
                    }}
                    exit={{ opacity: 0, scale: 0.9, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-full max-w-sm md:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
                    style={{ 
                        boxShadow: isActive ? "0 20px 50px -12px rgba(0, 0, 0, 0.25)" : "none" 
                    }}
                  >
                    <Image 
                      src={testimonial.src} 
                      alt={testimonial.name} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 80vw, 420px"
                      priority={index === active}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="flex flex-col justify-center text-left">
             <AnimatePresence mode='wait'>
                <motion.div
                  key={active}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                >
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>

                    {/* Icon Quote */}
                    <div className="mb-6 text-primary/20">
                        <Quote size={48} className="fill-current rotate-180" />
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-8">
                        {/* Thay dấu " bằng &quot; */}
                        &quot;{testimonials[active]?.quote}&quot;
                    </blockquote>

                    {/* Author Info */}
                    <div className="mb-10">
                        <h4 className="text-xl font-bold text-foreground">
                            {testimonials[active].name}
                        </h4>
                        <p className="text-foreground/50 font-medium mt-1">
                            {testimonials[active].designation}
                        </p>
                    </div>
                </motion.div>
             </AnimatePresence>

             {/* Navigation Buttons */}
             <div className="flex gap-4">
                <button 
                    onClick={handlePrev}
                    className="group p-4 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Xem phản hồi trước"
                >
                    <ArrowLeft className="w-6 h-6 text-primary group-hover:text-white" />
                </button>
                <button 
                    onClick={handleNext}
                    className="group p-4 rounded-full border border-primary/10 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Xem phản hồi tiếp theo"
                >
                    <ArrowRight className="w-6 h-6 text-primary group-hover:text-white" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}