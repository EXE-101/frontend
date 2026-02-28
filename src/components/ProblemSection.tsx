"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Trash2, TrendingDown, CloudAlert, AlertCircle, ArrowRight } from 'lucide-react';

// --- 1. COMPONENT HIỆU ỨNG CHỮ (MAGIC TEXT) ---
// Tái tạo hiệu ứng "lướt chữ" mượt mà hơn để tích hợp sẵn
const MagicText = ({ text, className }: { text: string, className?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-1.5 align-bottom pb-1">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }} // Chữ trượt từ dưới lên (hoặc chỉnh -100% nếu muốn từ trên xuống)
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.02 * i, // Hiệu ứng đuổi nhau từng chữ
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

// --- 2. COMPONENT THẺ SỐ LIỆU (STAT CARD) ---
// Đã fix lỗi "any" bằng React.ElementType
const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  delay 
}: { 
  icon: React.ElementType, 
  value: string, 
  label: string, 
  delay: number 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-[#FFF5E1]/5 border border-[#FFF5E1]/10 p-6 rounded-xl hover:bg-[#FFF5E1]/10 transition-colors group"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 rounded-full bg-[#FFF5E1]/10 group-hover:bg-[#FFF5E1]/20 transition-colors">
        {/* Icon màu Kem */}
        <Icon className="w-6 h-6 text-[#FFF5E1]" />
      </div>
      <AlertCircle className="w-4 h-4 text-[#FFF5E1]/30" />
    </div>
    <h3 className="text-3xl font-bold text-[#FFF5E1] mb-2 tracking-tight">{value}</h3>
    <p className="text-[#FFF5E1]/70 text-sm font-medium leading-relaxed">{label}</p>
  </motion.div>
);

// --- 3. SECTION CHÍNH ---
export function ProblemSection() {
  return (
    // Nền màu Xanh Đậm (#004d40) chuẩn theo ảnh
    <section className="relative py-24 overflow-hidden bg-[#003D33]">
      
      {/* Background Pattern tinh tế */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,245,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,245,225,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Cột trái: Text chính */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge nhỏ màu Kem */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5E1] text-[#004d40] text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
                Thực trạng
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#FFF5E1] mb-6 leading-[1.15]">
                Lãng phí thực phẩm là <br/>
                <span className="text-[#FFF5E1]/50">cuộc khủng hoảng vô hình.</span>
              </h2>
            </motion.div>

            {/* MagicText: Hiệu ứng lướt chữ bạn yêu cầu */}
            <div className="text-lg md:text-xl text-[#FFF5E1]/80 leading-relaxed font-light">
              <MagicText 
                text="Mỗi năm Việt Nam lãng phí hơn 8 triệu tấn thực phẩm, gây tổn thất khoảng 3,9 tỷ USD. Riêng TP.HCM thải ra gần 8.000 tấn rác thực phẩm mỗi ngày, tạo ra khí metan thúc đẩy biến đổi khí hậu. LASTBITE ra đời để viết lại câu chuyện ấy: biến lãng phí thành giá trị."
                className="block"
              />
            </div>

            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 1 }}
               className="pt-4"
            >
               <button className="group flex items-center gap-2 text-[#FFF5E1] font-bold border-b-2 border-[#FFF5E1] pb-1 hover:text-[#FFF5E1]/80 transition-all">
                  Xem toàn bộ báo cáo tác động <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
               </button>
            </motion.div>
          </div>

          {/* Cột phải: Grid số liệu (Giữ layout này nhìn cho chuyên nghiệp) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard 
              icon={Trash2}
              value="8,8 triệu tấn"
              label="Thực phẩm bị lãng phí mỗi năm chỉ riêng tại Việt Nam."
              delay={0.2}
            />
            <StatCard 
              icon={TrendingDown}
              value="$3,9 tỷ"
              label="Giá trị kinh tế bị thất thoát hằng năm."
              delay={0.3}
            />
            <StatCard 
              icon={CloudAlert}
              value="8.000 tấn"
              label="Lượng rác thực phẩm mỗi ngày tại TP.HCM, thải ra khí metan độc hại."
              delay={0.4}
            />
            
            {/* Thẻ Call To Action */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#FFF5E1] p-6 rounded-xl flex flex-col justify-center items-center text-center cursor-pointer shadow-xl hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-2xl font-bold text-[#004d40] mb-2">Cùng chung tay</h3>
                <p className="text-[#004d40]/70 text-sm font-medium">Bắt đầu cứu đồ ăn ngay hôm nay</p>
              </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}