'use client';

import { SimpleHeader } from '@/components/SimpleHeader';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Store, QrCode, ThumbsUp, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const procedures = [
  { 
    icon: <MapPin className="w-8 h-8 text-blue-600" />, 
    title: 'Đến đúng cửa hàng theo khung giờ quy định', 
    desc: 'Mọi đơn hàng đều có Pickup Window (ví dụ: 19:00 - 21:00). Bạn cần đến trong khoảng thời gian này. Nếu bạn đến trễ so với khung giờ, đơn hàng có thể bị hủy nhằm hạn chế lãng phí tiếp diễn theo đúng quy định của nền tảng.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop'
  },
  { 
    icon: <Store className="w-8 h-8 text-amber-600" />, 
    title: 'Báo với nhân viên cửa hàng tại quầy', 
    desc: 'Trình diện tại quầy thu ngân và nói "Mình tới nhận túi LASTBITE". Nhân viên sẽ tiếp nhận và lấy đúng phần ăn mà họ đã chuẩn bị sẵn theo tiêu chuẩn vệ sinh an toàn hàng đầu của siêu thị hoặc nhà hàng.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2938&auto=format&fit=crop'
  },
  { 
    icon: <QrCode className="w-8 h-8 text-emerald-600" />, 
    title: 'Xác minh đơn hàng trên ứng dụng', 
    desc: 'Mở ứng dụng, thao tác vuốt hoặc quét mã QR trực tiếp với nhân viên để xác nhận đã nhận hàng. Chỉ thao tác vuốt khi đã thực sự nhìn thấy túi thực phẩm và xác nhận tình trạng của nó.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2900&auto=format&fit=crop'
  },
  { 
    icon: <ThumbsUp className="w-8 h-8 text-rose-600" />, 
    title: 'Từ chối An toàn tại quầy (Đặc Quyền)', 
    desc: 'Đây là đặc quyền tại LASTBITE! Nếu bạn kiểm tra túi có dấu hiệu không an toàn (hư hỏng, bao bì rách nát, mùi vị khác lạ), bạn có quyền sử dụng "Từ chối an toàn" ngay lập tức trong app. Tiền cọc sẽ được hoàn lại 100%.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop'
  },
];

export default function HowToCollectPage() {
  return (
    <div className="bg-stone-50 min-h-screen text-foreground font-sans overflow-hidden">
      <SimpleHeader />
      
      <main className="pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-stone-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-80" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-1 bg-emerald-600 rounded-full block" />
                <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs">
                  Pick-up Guide
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 leading-tight">
                Quy trình <br/><span className="text-emerald-600">nhận túi & kiểm tra</span>
              </h1>
              <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
                Trải nghiệm nhận đồ minh bạch và an toàn tuyệt đối. Chúng tôi cam kết bạn luôn làm chủ được quyết định nhận hàng, xoá bỏ rào cản về vệ sinh thực phẩm thừa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* DETAILED CARDS SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {procedures.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="bg-white rounded-[2rem] p-8 border border-stone-100 shadow-xl shadow-stone-200/50 flex flex-col group hover:-translate-y-2 transition duration-300"
              >
                <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden mb-8 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent z-10" />
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute bottom-4 left-4 z-20 w-14 h-14 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-stone-900 mb-4 pr-10">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed text-lg flex-grow">{item.desc}</p>
                
                <div className="mt-8 flex items-center gap-2 text-stone-400 font-medium group-hover:text-emerald-600 transition">
                  <span className="text-sm">Bước 0{index + 1}</span>
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
