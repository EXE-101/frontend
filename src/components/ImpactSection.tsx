"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Leaf, Users, PiggyBank, Handshake, Zap } from 'lucide-react';

// --- DATA ---
const impactData = [
  {
    id: 'food-saved',
    icon: <Leaf className="w-6 h-6" />,
    title: 'Cắt giảm lãng phí thực phẩm',
    description: 'LASTBITE đã cứu hàng nghìn ki-lô-gam thực phẩm khỏi bị chôn lấp, giảm đáng kể tác động môi trường.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080&auto=format&fit=crop',
  },
  {
    id: 'partners',
    icon: <Handshake className="w-6 h-6" />,
    title: 'Đối tác tin cậy',
    description: 'Đồng hành cùng hàng trăm siêu thị, tiệm bánh và cửa hàng uy tín.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1080&auto=format&fit=crop',
  },
  {
    id: 'community',
    icon: <Users className="w-6 h-6" />,
    title: 'Cộng đồng bền vững',
    description: 'Hơn 10.000 người dùng đã gia nhập LASTBITE để cùng nhau sống xanh.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1080&auto=format&fit=crop',
  },
  {
    id: 'savings',
    icon: <PiggyBank className="w-6 h-6" />,
    title: 'Tiết kiệm chi phí',
    description: 'Người dùng tiết kiệm trung bình 50-70% chi phí ăn uống mỗi tháng, nâng tầm chất lượng sống.',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1080&auto=format&fit=crop',
  },
  {
    id: 'technology',
    icon: <Zap className="w-6 h-6" />,
    title: 'Công nghệ tiên tiến',
    description: 'Nền tảng ứng dụng AI tối ưu kết nối cung - cầu để trải nghiệm luôn mượt mà.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop',
  },
];

// --- COMPONENTS ---
const ImpactCard = ({ item }: { item: typeof impactData[0] }) => {
  return (
    <motion.div
      className="relative min-w-[300px] md:min-w-[400px] h-[450px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing group border border-white/10 bg-gray-900"
    >
      {/* Background Image: Không ám màu, gradient đen dưới đáy */}
      <div className="absolute inset-0">
        <Image 
            src={item.image} 
            alt={item.title} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none"
            sizes="(max-width: 768px) 320px, 400px"
            draggable={false}
            priority={false}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-end pointer-events-none select-none"> 
        <div className="absolute top-6 right-6 pointer-events-auto">
            <ArrowUpRight className="text-white/60 w-8 h-8 group-hover:text-[#D4E868] group-hover:rotate-45 transition-all duration-300" />
        </div>
        
        <div className="mb-4">
            <div className="inline-flex p-3 bg-white/10 backdrop-blur-md rounded-2xl text-[#D4E868] shadow-lg">
                {item.icon}
            </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4E868] transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export function ImpactSection() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hàm tính toán lại chiều rộng
    const updateWidth = () => {
      if (carouselRef.current && innerRef.current) {
        // scrollWidth: Tổng chiều dài nội dung
        // offsetWidth: Chiều dài hiển thị trên màn hình
        // Kết quả = Khoảng cách tối đa có thể kéo
        const scrollWidth = innerRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        
        // Cập nhật width, đảm bảo không bị âm
        setWidth(scrollWidth - offsetWidth > 0 ? scrollWidth - offsetWidth : 0);
      }
    };

    // Gọi hàm tính toán ngay lập tức
    updateWidth();

    // Gọi lại khi resize màn hình để đảm bảo không bị lỗi khi co giãn trình duyệt
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="bg-[#003D33] py-24 relative overflow-hidden font-sans">
      
      {/* Decor nền */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#D4E868]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-350 mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
                <span className="text-[#D4E868] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
                    Giá trị cốt lõi
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#FFF5E1] tracking-tight">
                    Kiến tạo tác động bền vững
                </h2>
            </div>
            
            <p className="text-gray-400 text-base max-w-md pb-1 border-l-2 border-[#D4E868]/30 pl-4">
                Chúng tôi đang kiến tạo tương lai bền vững bằng cách kết nối cộng đồng với nguồn thực phẩm dư thừa giá trị.
            </p>
        </div>

        {/* DRAG CAROUSEL AREA */}
        <motion.div 
            ref={carouselRef} 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            whileTap={{ cursor: "grabbing" }}
        >
            <motion.div 
                ref={innerRef}
                drag="x" 
                // Quan trọng: dragConstraints giới hạn vùng kéo
                dragConstraints={{ right: 0, left: -width }} 
                
                // Quan trọng: dragElastic thấp (0.1 hoặc 0.2) để giảm độ nảy như dây thun
                dragElastic={0.1}
                
                // Quan trọng: dragTransition giúp trượt mượt mà (quán tính)
                dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
                
                className="flex gap-6 w-max" // w-max để đảm bảo div con mở rộng hết cỡ
            >
                {impactData.map((item, index) => (
                    <ImpactCard key={index} item={item} />
                ))}
            </motion.div>
        </motion.div>

      </div>
    </section>
  );
}