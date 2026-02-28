"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'item-1',
    question: 'Tôi nên đến nhận Surprise Bag vào lúc nào?',
    answer:
      'Hãy đến trong khung giờ nhận được chỉ định cho từng Surprise Bag trên ứng dụng. Nhân viên cửa hàng sẽ sẵn sàng bàn giao túi cho bạn trong khoảng thời gian đó. Tốt nhất bạn nên có mặt sớm hơn 5-10 phút để không bị lỡ lượt.',
  },
  {
    id: 'item-2',
    question: 'Nếu tôi bị dị ứng hoặc có chế độ ăn đặc biệt thì sao?',
    answer:
      'Trước khi đặt túi, bạn có thể xem thông tin cửa hàng và đọc đánh giá từ người dùng khác. Tuy nhiên, nội dung Surprise Bag luôn là điều bất ngờ. Khi nhận túi, hãy hỏi nhanh nhân viên về các thành phần dễ gây dị ứng để yên tâm thưởng thức.',
  },
  {
    id: 'item-3',
    question: 'Tôi có thể hủy đơn đã đặt không?',
    answer:
      'Bạn hoàn toàn có thể hủy đơn ngay trên ứng dụng LASTBITE. Lưu ý những lượt hủy sát giờ nhận hoặc sau khi khung giờ bắt đầu sẽ không được hoàn tiền. Hãy thực hiện càng sớm càng tốt để nhận lại khoản thanh toán.',
  },
  {
    id: 'item-4',
    question: 'LASTBITE hỗ trợ những phương thức thanh toán nào?',
    answer:
      'Ứng dụng hỗ trợ thẻ tín dụng, thẻ ghi nợ, ví điện tử và các phương thức nội địa phù hợp từng khu vực. Bạn thanh toán trực tiếp trong ứng dụng ngay khi đặt túi.',
  },
  {
    id: 'item-5',
    question: 'Tôi được đặt tối đa bao nhiêu Surprise Bag?',
    answer:
      'Bạn có thể đặt nhiều túi từ các cửa hàng khác nhau, nhưng mỗi suất đều có giới hạn cụ thể hiển thị trong ứng dụng. Một số đối tác còn đặt hạn mức trên mỗi khách để bảo đảm công bằng cho cộng đồng.',
  },
  {
    id: 'item-6',
    question: 'Khi đến nhận túi tôi cần mang theo gì?',
    answer:
      'Chỉ cần mang theo điện thoại có ứng dụng LASTBITE! Hãy mở sẵn màn hình xác nhận để trượt nút và hoàn tất việc bàn giao ngay tại cửa hàng.',
  },
];

export function FAQ() {
  return (
    // SỬA: Background đổi thành #003D33 (Xanh đậm)
    <section className="bg-[#003D33] py-24 md:py-32 font-sans relative overflow-hidden">
      
      {/* Decor nền: Thêm đốm sáng nhẹ để bớt đơn điệu (Optional) */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[#D4E868]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-6 mb-16 text-center">
          <span className="text-[#D4E868] font-bold tracking-[0.2em] uppercase text-xs block mb-2">
             Trung tâm hỗ trợ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FFF5E1] text-balance tracking-tight">
            Câu hỏi thường gặp
          </h2>
          <p className="text-[#FFF5E1] text-lg max-w-2xl mx-auto leading-relaxed">
            Tất cả thông tin bạn cần để đặt, nhận và sử dụng Surprise Bag trên ứng dụng LASTBITE.
          </p>
        </div>

        {/* Accordion List */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              // SỬA: Card chuyển sang hiệu ứng kính mờ (bg-white/5) viền trắng mờ
              className="bg-white/5 border border-white/10 rounded-2xl px-6 md:px-8 transition-all duration-300 hover:bg-white/10"
            >
              {/* Trigger: Chữ trắng, khi hover đổi màu vàng chanh */}
              <AccordionTrigger className="text-[#FFF5E1] hover:text-[#D4E868] hover:no-underline font-bold text-lg py-6 text-left [&[data-state=open]]:text-[#D4E868]">
                {faq.question}
              </AccordionTrigger>
              
              {/* Content: Màu xám bạc dễ đọc trên nền tối */}
              <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6 pt-0">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}