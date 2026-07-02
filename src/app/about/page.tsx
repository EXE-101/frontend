'use client';

import { SimpleHeader } from '@/components/SimpleHeader';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Users, Store, Globe2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SimpleHeader />
      
      <main className="pt-32 pb-24">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block">
                Về LASTBITE
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">
                Giải quyết bài toán <span className="text-emerald-600">kết nối cung cầu</span> thực phẩm đô thị
              </h1>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Trong bối cảnh đô thị hóa tại Việt Nam, lãng phí thực phẩm tại các điểm bán lẻ đang trở thành một vấn đề nghiêm trọng. Hàng ngàn phần ăn còn an toàn bị loại bỏ vào cuối ngày do hạn sử dụng ngắn.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Đồng thời, người tiêu dùng trẻ (đặc biệt là sinh viên và nhân viên văn phòng) đang đối mặt với chi phí ăn uống ngày càng tăng. LASTBITE ra đời để lấp đầy khoảng trống này bằng công nghệ.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2 w-full h-[400px] relative rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2940&auto=format&fit=crop" 
                alt="LASTBITE Community in Vietnam" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* CORE VALUES (B2C, B2B, Social) */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-6">Giá trị Cốt lõi & Định vị</h2>
              <p className="text-stone-600 text-lg">
                Khác với các hình thức giảm giá truyền thống, LASTBITE tập trung vào thực phẩm dư cuối ngày – phần giá trị thường bị mất đi hoàn toàn.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Người tiêu dùng (B2C)</h3>
                <p className="text-stone-600 leading-relaxed">
                  Tạo cơ hội tiếp cận thực phẩm chất lượng với mức giá thấp hơn 30-50%. Thông qua ứng dụng, độ tiện lợi trong việc đặt trước và thanh toán được đưa lên hàng đầu, giúp giới trẻ tiết kiệm phần lớn chi tiêu sinh hoạt mà không lo về chuẩn an toàn.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Store className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Điểm bán đối tác (B2B)</h3>
                <p className="text-stone-600 leading-relaxed">
                  Giúp cửa hàng thu hồi doanh thu từ hàng tồn vốn bị tiêu hủy, loại bỏ chi phí xử lý rác thải. Vì giao dịch diễn ra vào cuối ngày, mô hình này không ăn lẹm (cannibalize) vào doanh thu chính phủ ở các khung giờ cao điểm.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <Globe2 className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900">Môi trường & Xã hội</h3>
                <p className="text-stone-600 leading-relaxed">
                  Góp phần thực thi Mục tiêu Phát triển Bền vững (SDG 12.3) cắt giảm một nửa lượng rác thải thực phẩm. Giảm mạnh lượng phát thải khí CO2e trực tiếp do quá trình tiêu huỷ rác hữu cơ tại các khu vực đô thị đông đúc.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl font-black text-stone-900 mb-6">Gia nhập xu hướng tiêu dùng tiết kiệm và bền vững</h2>
          <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
            Hơn 70% người trẻ tại TP.HCM sẵn sàng mua thực phẩm giảm giá để bảo vệ môi trường nếu được đảm bảo về vệ sinh. Bạn đã sẵn sàng ứng dụng thiết thực này chưa?
          </p>
          <button className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition shadow-lg shadow-emerald-700/30">
            Khám phá Ứng dụng
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
