'use client';

import { SimpleHeader } from '@/components/SimpleHeader';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <SimpleHeader />
      
      <main className="pt-32 pb-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-stone-200">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 border-b border-stone-100 pb-8"
          >
            <h1 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Điều khoản và Điều kiện sử dụng
            </h1>
            <p className="text-stone-500">Thỏa thuận sử dụng nền tảng áp dụng cho Consumer và Partner</p>
          </motion.div>

          <div className="prose prose-stone max-w-none text-stone-700">
            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">1. Giới thiệu</h3>
            <p className="mb-4">
              LASTBITE là nền tảng công nghệ kết nối người tiêu dùng với các cửa hàng thực phẩm... nhằm tiêu thụ các sản phẩm thực phẩm còn dư trong ngày với mức giá ưu đãi.
            </p>
            <p className="mb-4">
              Nền tảng cho phép người dùng mua thực phẩm qua 2 loại chính:
              <br />- <strong>Surprise Bag:</strong> túi thực phẩm nội dung không xác định trước.
              <br />- <strong>Combo Bag:</strong> gói thực phẩm hiển thị rõ mặt hàng, minh bạch 100%.
            </p>
            
            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">2. Vai trò của Nền tảng</h3>
            <p className="mb-4">
              LASTBITE hoạt động như một nền tảng trung gian (marketplace). Chúng tôi <strong>không trực tiếp</strong> sản xuất hay bán thực phẩm. Cửa hàng trực tiếp chịu trách nhiệm về vệ sinh an toàn.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">3. Định nghĩa</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Người dùng (Consumer):</strong> Cá nhân đặt mua đồ.</li>
              <li><strong>Cửa hàng (Partner Store):</strong> Doanh nghiệp cung cấp sản phẩm.</li>
              <li><strong>Pickup Window:</strong> Khung giờ cụ thể (45p - 2h) nhận hàng.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">4. Điều khoản cho Người Dùng</h3>
            <h4 className="font-bold mt-4 mb-2 text-stone-800">4.1 Điều kiện sử dụng</h4>
            <p className="mb-4">Từ 16 tuổi trở lên và tuân thủ các quy tắc bảo mật tài khoản.</p>
            <h4 className="font-bold mt-4 mb-2 text-stone-800">4.2 Hình thức nhận hàng (Self-Pickup)</h4>
            <p className="mb-4">
              Thanh toán cọc tối thiểu 30% để giữ đồ. Nếu đến sau Pickup Window, đơn hàng tính là No-show và mất cọc để tránh cửa hàng bị lãng phí.
            </p>
            <h4 className="font-bold mt-4 mb-2 text-stone-800">4.3 Hủy / Khiếu nại</h4>
            <p className="mb-4">
              Người dùng có thể hủy trước khi Pickup Window bắt đầu. Sau thời gian này, vô hiệu. Khách hàng có đặc quyền "từ chối an toàn tại quầy" nếu đồ ăn bị ôi thiu theo <a href="/trust-framework" className="text-emerald-700 underline">Trust Framework</a>.
            </p>

            <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">5. Điều khoản cho Đối Tác</h3>
            <h4 className="font-bold mt-4 mb-2 text-stone-800">5.1 Điều kiện tham gia</h4>
            <p className="mb-4">
              Phải cung cấp giấy tờ phép kinh doanh, an toàn thực phẩm. Ký kết các thoả thuận xác minh với bên thứ 3 (như SGS) theo yêu cầu.
            </p>
            <h4 className="font-bold mt-4 mb-2 text-stone-800">5.2 Nội quy & Giá trị</h4>
            <p className="mb-4">
              - Chỉ được phép bán thực phẩm chưa bán hết trong ngày, không sản xuất dư chủ đích.
              <br />- Giá bán Surprise/Combo Bag trên ứng dụng phải thấp hơn 30% - 60% so với giá Retail.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
