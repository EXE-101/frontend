'use client';

import { SimpleHeader } from '@/components/SimpleHeader';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  { 
    step: '01', 
    title: 'Khám phá thực đơn xế bóng', 
    desc: 'Mở ứng dụng LASTBITE và duyệt qua danh sách các cửa hàng đối tác xung quanh bạn. Hãy theo dõi khung giờ "Happy Hour" thường diễn ra vào buổi xế chiều hoặc cuối ngày để tìm các túi Surprise Bag hoặc Combo Bag hấp dẫn.', 
    bgColor: 'bg-amber-100',
    image: 'https://images.unsplash.com/photo-1498837167922-41cfa6f318ba?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    step: '02', 
    title: 'Đặt mua và Thanh toán', 
    desc: 'Chọn túi thực phẩm bạn muốn và tiến hành thanh toán giữ chỗ (đặt cọc) trực tiếp trên ứng dụng. Thao tác thanh toán cực kỳ nhanh chóng và an toàn, đảm bảo túi đồ ăn sẽ là của bạn.', 
    bgColor: 'bg-emerald-100',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    step: '03', 
    title: 'Đến cửa hàng nhận túi', 
    desc: 'Kiểm tra khung giờ nhận túi (Pickup Window) của cửa hàng (ví dụ: 19:30 - 20:30). Hãy đến đúng giờ và xuất trình mã xác nhận đơn đặt hàng trên điện thoại của bạn cho nhân viên cửa hàng.', 
    bgColor: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop'
  },
  { 
    step: '04', 
    title: 'Thưởng thức và Lan toả', 
    desc: 'Mang phần ăn lành mạnh về nhà, thưởng thức chất lượng tuyệt hảo với mức giá siêu ưu đãi. Chúc mừng! Bạn vừa cứu được một phần đồ ăn và giảm thiểu phát thải nhà kính. Đừng quên chia sẻ cùng bạn bè nhé!', 
    bgColor: 'bg-rose-100',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2940&auto=format&fit=crop'
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans overflow-hidden">
      <SimpleHeader />
      
      <main className="pt-32 pb-24">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 font-bold tracking-widest uppercase text-xs mb-6 shadow-sm">
              Hướng dẫn
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">
              Cách ứng dụng <span className="text-emerald-600">hoạt động</span>
            </h1>
            <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Từng bước trở thành "anh hùng diệt lãng phí" cùng LASTBITE. Chỉ với vài thao tác đơn giản, bạn đã góp phần lớn vào việc bảo vệ hành tinh xanh của chúng ta.
            </p>
          </motion.div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.step} 
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* TEXT CONTENT */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1 space-y-6"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center text-2xl font-black text-stone-800 shadow-inner border border-white/50`}>
                        {item.step}
                      </div>
                      <div className="h-0.5 w-12 bg-stone-200 rounded-full" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* IMAGE FRAME */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 w-full"
                  >
                    <div className="relative relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white group">
                      <div className="absolute inset-0 bg-stone-900/10 z-10 transition duration-500 group-hover:bg-transparent" />
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover transition duration-700 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-900 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700 rounded-full blur-3xl -translate-y-1/2 opacity-50 block" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-600 rounded-full blur-3xl translate-y-1/2 opacity-30 block" />
            
            <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
              Sẵn sàng bắt đầu hành trình của bạn?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Hàng ngàn túi đồ ăn chất lượng đang chờ được giải cứu xung quanh bạn ngay lúc này.
            </p>
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 hover:scale-105 transition duration-300 shadow-xl relative z-10">
              Mở bản đồ ngay
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
