"use client";

import { Sparkles } from 'lucide-react';
import { InteractiveBentoGallery, MediaItemType } from '@/components/ui/interactive-bento-gallery';

// Updated Data in English
const featuresMediaItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Thực đơn Minh bạch",
    desc: "Biết chính xác những gì bạn mua với thực đơn chi tiết hoặc chọn Surprise Bag để thêm phần thú vị.",
    url: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2 h-64 md:h-full",
  },
  {
    id: 2,
    type: "image",
    title: "Kiểm chứng Trực tiếp",
    desc: "Khuyến khích nhận món tại cửa hàng để tự tay kiểm tra chất lượng thực tế trước khi xác nhận.",
    url: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1 h-32 md:h-full",
  },
  {
    id: 3,
    type: "video",
    title: "Cam kết Vệ sinh An toàn",
    desc: "Giao hàng với tem niêm phong tiêu chuẩn (Tamper-Evident). Đối tác được sàng lọc khắt khe.",
    url: "https://cdn.pixabay.com/video/2021/08/04/83896-583522300_large.mp4",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2 h-64 md:h-full",
  },
  {
    id: 4,
    type: "image",
    title: "Tối ưu Chi phí",
    desc: "Tận hưởng ẩm thực thượng hạng với mức giá ưu đãi lên đến 70%.",
    url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1 h-32 md:h-full",
  },
  {
    id: 5,
    type: "image",
    title: "Dấu ấn Bền vững",
    desc: "Góp phần giảm thiểu rác thải thực phẩm và lượng phát thải Carbon.",
    url: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-1 sm:col-span-2 sm:row-span-1 h-32 md:h-full",
  },
];

const categories = [
  'BÁNH MÌ NGHỆ NHÂN', 'TRÁI CÂY TƯƠI CẮT SẴN', 'COMBO SUSHI', 'BÁNH NGỌT CAO CẤP', 'SALAD HỮU CƠ',
  'COLD-PRESSED JUICE', 'BÁNH MÌ NGHỆ NHÂN', 'TRÁI CÂY TƯƠI CẮT SẴN', 'COMBO SUSHI', 'SALAD HỮU CƠ'
];

export function WhyChooseSection() {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden bg-[#FAF7F2]">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004d40]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF7F7F]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#004d40]/20 bg-white/50 text-[#004d40] text-xs font-bold tracking-wider uppercase mb-4 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-[#FF7F7F]" />
              Giá trị Ưu việt
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004d40] tracking-tight leading-tight">
              Trải nghiệm ẩm thực thông minh, <br />
              <span className="text-[#FF7F7F]">an toàn và đầy cảm hứng.</span>
            </h2>
          </div>
          <p className="text-[#004d40]/70 text-lg max-w-md leading-relaxed font-medium border-l-2 border-[#FF7F7F] pl-6">
            LASTBITE không chỉ mang đến sự tiết kiệm, chúng tôi thiết lập một chuẩn mực mới cho tiêu dùng thực phẩm bền vững với cam kết minh bạch tuyệt đối.
          </p>
        </div>

        {/* Interactive Bento Gallery */}
        <div className="shadow-2xl shadow-[#004d40]/10 rounded-2xl overflow-hidden bg-transparent p-2">
          <InteractiveBentoGallery mediaItems={featuresMediaItems} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-[#004d40]/10 pt-10">
          {[
            { label: 'Thành viên quan tâm', value: '1,2K+' },
            { label: 'Đối tác tiềm năng', value: '15+' },
            { label: 'Bữa ăn mục tiêu', value: '3,5K+' },
            { label: 'Mức tiết kiệm trung bình', value: '70%' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-[#004d40]">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-[#FF7F7F] font-bold mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slim & Slow Infinite Scroll Banner */}
      <div className="relative py-3 bg-[#004d40] overflow-hidden">
        <div className="flex w-full">
          {/* Class animate-infinite-scroll bây giờ sẽ lấy từ globals.css */}
          <div className="flex items-center gap-12 px-8 animate-infinite-scroll whitespace-nowrap">
            {[...categories, ...categories, ...categories, ...categories].map((cat, i) => (
              <div key={i} className="flex items-center gap-3 group select-none">
                <span className="text-sm font-medium text-[#FFF5E1]/70 group-hover:text-[#FF7F7F] transition-colors duration-300 tracking-widest">
                  {cat}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#FF7F7F]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ĐÃ XÓA THẺ <style jsx> ĐỂ SỬA LỖI HYDRATION */}
    </section>
  );
}