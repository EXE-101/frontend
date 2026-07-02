"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

// --- DATA (FULL ENGLISH) ---
const testimonials = [
  {
    id: 1,
    quote: "Tôi rất thích việc app hiển thị rõ thực đơn còn lại. Tôi đến tiệm bánh, nhìn tận mắt phần ăn tươi ngon rồi mới quét mã xác nhận, cực kỳ an tâm!",
    name: "Nguyễn Minh Anh",
    designation: "Nhân viên Văn phòng",
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop',
  },
  {
    id: 2,
    quote: "Nếu bận rộn, tôi chọn giao hàng. Shipper giao đến hộp bánh luôn được dán tem niêm phong cẩn thận. Rất chuyên nghiệp và sạch sẽ.",
    name: "Trần Văn Khoa",
    designation: "Kỹ sư Phần mềm",
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop',
  },
  {
    id: 3,
    quote: "Từ khi hợp tác với LASTBITE, tiệm bánh của chúng tôi giải quyết được bài toán hao hụt cuối ngày. Khách đến lấy đồ văn minh, thương hiệu vẫn giữ được sự cao cấp.",
    name: "Lê Thị Hương",
    designation: "Quản lý Cửa hàng Bánh Ngọt",
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop',
  },
  {
    id: 4,
    quote: "Không chỉ là giá rẻ, điều tôi trân trọng nhất là app giúp tôi góp phần nhỏ bảo vệ môi trường một cách rất thiết thực và an toàn.",
    name: "Phạm Hoàng Nam",
    designation: "Sinh viên",
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop',
  }
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
            Những câu chuyện truyền cảm hứng
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Lắng nghe trải nghiệm từ những người dùng và đối tác đang đồng hành cùng LASTBITE mỗi ngày.
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