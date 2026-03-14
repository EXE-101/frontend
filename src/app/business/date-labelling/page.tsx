'use client';

import { SimpleHeader } from '@/components/SimpleHeader';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Eye, BadgeAlert, Utensils } from 'lucide-react';
import Image from 'next/image';

export default function DateLabellingPage() {
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
                Giải pháp Doanh nghiệp (Sắp ra mắt)
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">
                Sáng kiến Dán nhãn <br /><span className="text-emerald-600">Look-Smell-Taste</span>
              </h1>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Nhiều thực phẩm bị vứt bỏ khi vượt mốc "Best Before" chỉ vì sự thiếu hiểu biết. Nhãn cảm quan của chúng tôi giúp giảm thiểu lãng phí thực phẩm trong các hộ gia đình bằng cách khuyến khích họ tin vào giác quan của mình.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop" 
                alt="Date Labelling Initiative" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* INITIATIVE DETAILS */}
        <section className="bg-emerald-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-stone-900">Chiến dịch dành cho ngành FMCG</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Eye className="w-8 h-8 text-emerald-600" />, title: 'Nhìn', desc: 'Sản phẩm có biểu hiện đổi màu mốc xanh, hư hao bao bì không?' },
                { icon: <BadgeAlert className="w-8 h-8 text-amber-600" />, title: 'Ngửi', desc: 'Hương vị có bị ôi thiu, biến dạng mù mẫn hay phản cảm không?' },
                { icon: <Utensils className="w-8 h-8 text-rose-600" />, title: 'Nếm', desc: 'Thử một lượng siêu nhỏ. Vị chua gượng hoặc đắng chát?' }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-100"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center max-w-2xl mx-auto">
              <p className="text-stone-600 italic">
                * Sáng kiến mang tính giáo dục nhắm tới Ngành hàng tiêu dùng nhanh (FMCG), Bán buôn (Wholesale) và Bán lẻ. Chúng tôi hy vọng các thương hiệu lớn sẽ đồng hành in logo Look-Smell-Taste lên bao bì sản phẩm của mình trong tương lai.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
