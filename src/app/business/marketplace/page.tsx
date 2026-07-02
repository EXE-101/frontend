'use client';

import { SimpleHeader } from '@/components/SimpleHeader';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, Tags, ShieldCheck, Box, Users } from 'lucide-react';
import Image from 'next/image';

export default function MarketplacePage() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SimpleHeader />
      
      <main className="pt-32 pb-24">
        {/* HERO SECTION B2B */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs mb-4 block">
                Giải pháp Doanh nghiệp
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">
                Chợ điện tử B2C: <br/><span className="text-emerald-600">Surprise & Combo Bags</span>
              </h1>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Nền tảng giúp các Bakery, Siêu thị và Cửa hàng tiện lợi tại đô thị Việt Nam chuyển đổi khoảng 300.000đ thực phẩm dư mỗi ngày thành doanh thu bổ sung, dựa trên chiến lược định giá linh hoạt (Partner-Based Pricing).
              </p>
              <button className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition shadow-lg shadow-emerald-700/30">
                Đăng ký Bán hàng
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-stone-100"
            >
              <Image 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2787&auto=format&fit=crop" 
                alt="Marketplace App" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* PRICING STRATEGY SECTION */}
        <section className="bg-stone-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-6">Chiến lược định giá & Đóng gói (Pricing Strategy)</h2>
              <p className="text-stone-600 text-lg leading-relaxed">
                Chúng tôi áp dụng mô hình định giá dựa trên giá trị (Value-Based Pricing) kết hợp yếu tố Gói (Bundle), giúp nâng cao "giá trị cảm nhận" của khách hàng so với việc họ phải mua lẻ từng món tồn kho.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Box className="text-amber-700 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Mô hình Surprise Bag</h3>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Cửa hàng linh hoạt gom nhiều sản phẩm thực phẩm cuối ngày mà không cần niêm yết trước các món. Khách hàng nhận được trị giá tổng hợp cao hơn nhiều so với túi tiền bỏ ra và đồng thời tận hưởng trải nghiệm bất ngờ.
                </p>
                <ul className="space-y-2 text-stone-700 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Giảm cực mạnh rủi ro hàng tồn.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Tối giản khâu đóng gói & liệt kê.</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="text-blue-700 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">Mô hình Combo Bag minh bạch</h3>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Sản phẩm được lựa chọn trước thành một gói cụ thể với thông tin minh bạch 100%. Phù hợp với tệp khách hàng ngại yếu tố bất định và muốn chắc chắn về sản phẩm thực phẩm họ tiêu thụ.
                </p>
                <ul className="space-y-2 text-stone-700 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Khách hàng có độ an tâm tuyệt đối.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Gia tăng độ xoay vòng các mã SP cố định.</li>
                </ul>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-900 p-10 md:p-12 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-10"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Tags className="text-emerald-300 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Partner-Based Pricing (Làm chủ giá cả)</h3>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  Trái với các hệ thống cứng nhắc, nền tảng LASTBITE cho phép đối tác <strong className="text-white">chủ động 100%</strong> xác định mức chiết khấu theo biểu đồ Van Westendorp (nhu cầu thay đổi liên tục). Bạn toàn quyền tinh chỉnh giá để dọn sạch hàng trước giờ đóng cửa cửa hàng.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE B2B */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t border-stone-100 pt-16">
            <h2 className="text-3xl font-black text-stone-900 mb-12">Lợi ích kép cho Hộ Kinh Doanh F&B</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { icon: <TrendingUp className="w-8 h-8 text-emerald-600" />, title: 'Đánh dấu trên bản đồ', desc: 'Có được lượng foot traffic từ người trẻ trong bán kính 2-5km đến nhận túi trực tiếp, gia tăng tỷ lệ upsell các món khác.' },
                { icon: <ShoppingBag className="w-8 h-8 text-blue-600" />, title: 'Luân chuyển dòng tiền', desc: 'Sản sinh khoản lợi nhuận ròng hoàn hảo từ nguồn bánh ngọt, rau củ và đồ uống vốn phải ghi nhận vào chi phí huỷ hàng.' },
                { icon: <Users className="w-8 h-8 text-rose-600" />, title: 'Kiểm soát dễ dàng', desc: 'Hệ thống Quản lý đối tác web-based dành cho tiệm giúp quy chuẩn hoá giờ chót, tự động đẩy notification đến User.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-stone-50 rounded-full flex mx-auto items-center justify-center mb-6 shadow-inner border border-stone-200">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-stone-900">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
