'use client';

import { SimpleHeader } from '@/components/SimpleHeader';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { BarChart3, Cloud, LayoutDashboard } from 'lucide-react';
import Image from 'next/image';

export default function PlatformPage() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SimpleHeader />
      
      <main className="pt-32 pb-24">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block">
              Giải pháp Doanh nghiệp
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 leading-tight">
              Quản trị Vận Hành <span className="text-emerald-600">Đối Tác B2B</span>
            </h1>
            <p className="text-stone-600 text-lg md:text-xl mb-10 leading-relaxed">
              Dành cho các siêu thị và cửa hàng tiện lợi, nền tảng giúp chuẩn hóa quy trình xử lý thực phẩm dư thừa thông qua hệ thống đặt hàng, quản lý đơn và theo dõi dữ liệu bán hàng.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-stone-200"
          >
            <Image 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop" 
              alt="Platform Dashboard" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-stone-900">Giải pháp Vận hành Đơn giản & Hiệu quả</h2>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><BarChart3 className="text-emerald-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Chuẩn hóa xử lý thực phẩm dư</h4>
                    <p className="text-stone-600">Thay vì phải đau đầu xử lý rác cuối ngày, nhân viên cửa hàng có thể gom các sản phẩm chưa bán hết vào Surprise Bag chỉ với vài thao tác kiểm tra đơn giản trên ứng dụng.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><Cloud className="text-blue-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Hệ thống Quản lý Đơn hàng</h4>
                    <p className="text-stone-600">Theo dõi số lượng đơn đặt cọc, thông tin khách hàng đến nhận và doanh thu bán được ngay trong thời gian thực, giúp ca trực chuẩn bị túi chính xác.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1"><LayoutDashboard className="text-rose-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Theo dõi Dữ liệu Bán hàng</h4>
                    <p className="text-stone-600">Thống kê tự động lượng thực phẩm tránh lãng phí và doanh thu tăng thêm, từ đó giúp cửa hàng chủ động điều chỉnh lượng sản xuất cho ngày hôm sau.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-900 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700 rounded-full blur-3xl -translate-y-1/2 opacity-50 block"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Bạn là Tiệm Bánh hoặc Siêu thị Mini?</h3>
                <p className="text-emerald-100 mb-8 relative z-10">Chỉ mất 5 phút đăng ký để điểm bán của bạn hiển thị với hàng nghìn người dùng xung quanh.</p>
                <button className="bg-white text-emerald-900 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition relative z-10">
                  Đặt lịch Online
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
