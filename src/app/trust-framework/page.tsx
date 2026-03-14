'use client';

import { SimpleHeader } from '@/components/SimpleHeader';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShieldAlert, FileCheck, ShieldCheck, Activity } from 'lucide-react';

export default function TrustFrameworkPage() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SimpleHeader />
      
      <main className="pt-32 pb-24">
        {/* HERO */}
        <section className="bg-emerald-900 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                The Last Bite <span className="text-emerald-400">Food Safety Trust Framework</span>
              </h1>
              <p className="text-emerald-50 text-lg md:text-xl leading-relaxed">
                Trust as a Value Proposition. Rào cản lớn nhất của phân phối thực phẩm dư là mối lo về vệ sinh. Ngay cả khi thực phẩm vẫn còn hạn và bảo quản đúng cách, người dùng vẫn e ngại với mức giá ưu đãi. Framework này được thiết kế để xóa tan sự e ngại đó.
              </p>
            </motion.div>
          </div>
        </section>

        {/* LAYERS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <FileCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">Layer 1:<br /><span className="text-blue-700">Legal Compliance</span></h3>
                </div>
                <div className="md:w-3/4 text-stone-700 space-y-4">
                  <h4 className="text-xl font-bold text-stone-900">Tuân thủ tiêu chuẩn an toàn thực phẩm</h4>
                  <p>
                    Lớp kiểm soát đầu tiên là việc đảm bảo tất cả các cửa hàng đối tác tham gia đều tuân thủ các quy định pháp lý về vệ sinh an toàn thực phẩm.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-blue-600">
                    <li><strong>Giấy tờ pháp lý:</strong> Phải cung cấp giấy phép kinh doanh hợp lệ và giấy chứng nhận đủ điều kiện ATTP.</li>
                    <li><strong>Quy trình bảo quản:</strong> Phải chứng minh có quy trình bảo quản, xử lý lưu trữ thực phẩm phù hợp ở điều kiện thích hợp.</li>
                    <li><strong>Tiêu chuẩn tối thiểu:</strong> Đảm bảo mọi đối tác đạt mức tiêu chuẩn tối thiểu trước khi tham gia hệ sinh thái.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                    <ShieldAlert className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">Layer 2:<br /><span className="text-emerald-700">3rd-Party Verification</span></h3>
                </div>
                <div className="md:w-3/4 text-stone-700 space-y-4">
                  <h4 className="text-xl font-bold text-stone-900">Kiểm định độc lập từ SGS Vietnam</h4>
                  <p>
                    Tăng cường tính minh bạch bằng cách hợp tác với <strong>SGS Vietnam</strong> - tổ chức toàn cầu cung cấp dịch vụ kiểm định, chứng nhận và đánh giá tiêu chuẩn chất lượng.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-emerald-600">
                    <li><strong>Đánh giá điều kiện:</strong> Kiểm tra quy trình bảo quản, vệ sinh của cửa hàng, và cách thức xử lý thực phẩm cuối ngày.</li>
                    <li><strong>Random audit:</strong> Các đợt kiểm tra tự động đột xuất nhằm giảm thiểu rủi ro vi phạm tiêu chuẩn.</li>
                    <li><strong>Nhãn xác minh:</strong> Cửa hàng đạt chuẩn SGS sẽ được gắn nhãn kiểm định chứng nhận an toàn trên thanh ứng dụng.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
                    <Activity className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">Layer 3:<br /><span className="text-rose-700">Platform Monitoring</span></h3>
                </div>
                <div className="md:w-3/4 text-stone-700 space-y-4">
                  <h4 className="text-xl font-bold text-stone-900">Giám sát vận hành của nền tảng</h4>
                  <p>
                    Triển khai hệ thống giám sát chất lượng liên tục thông qua dữ liệu vận hành từ người dùng.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-rose-600">
                    <li><strong>Review người dùng:</strong> Người dùng kết thúc đơn đánh giá chất lượng sản phẩm, độ tươi và trải nghiệm nhận hàng.</li>
                    <li><strong>Biện pháp xử lý:</strong> Cửa hàng nhận review tiêu cực sẽ bị điều tra nội bộ, và có thể bị ngưng hoặc chấm dứt hợp tác (ban) tức thì.</li>
                    <li><strong>Đội ngũ nội bộ:</strong> Kiểm tra vận hành thực tế đối tác bất thình lình từ admin LASTBITE.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IMPACT */}
        <section className="bg-stone-50 py-20 mt-16 px-4">
          <div className="max-w-4xl mx-auto text-center border-t-2 border-emerald-900/10 pt-16">
            <h2 className="text-3xl font-black text-stone-900 mb-6">Tác động của Quản trị rủi ro</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-4">
              Việc kết hợp pháp lý, kiểm định bên thứ 3 (SGS) và vòng lặp giám sát của nền tảng tạo ra một hệ thống quản lý rủi ro toàn diện. 
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Thông qua việc tích hợp yếu tố niềm tin (trust) vào giá trị cốt lõi, LASTBITE không chỉ cung cấp thực phẩm giá rẻ mà còn xây dựng một hệ sinh thái tiêu dùng bền vững dựa trên sự minh bạch, an toàn và trách nhiệm môi trường.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
