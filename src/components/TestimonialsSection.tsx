import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const testimonials = [
  {
    quote:
      'LastBite đã giúp tôi tiết kiệm hơn 2 triệu đồng mỗi tháng! Thực phẩm chất lượng tốt mà giá rẻ hơn nhiều. Mình rất hài lòng.',
    name: 'Nguyễn Minh Anh',
    designation: 'Sinh viên, ĐH FPT',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3540&auto=format&fit=crop',
  },
  {
    quote:
      'Là một nhân viên văn phòng bận rộn, LastBite là giải pháp hoàn hảo. Đặt trước, nhận nhanh, giá hợp lý. Còn giúp giảm lãng phí nữa!',
    name: 'Trần Văn Khoa',
    designation: 'Marketing Manager',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop',
  },
  {
    quote:
      'Cửa hàng bánh của tôi giảm được 40% lượng bánh bỏ đi mỗi ngày. Vừa có thêm doanh thu, vừa thu hút khách mới. Tuyệt vời!',
    name: 'Lê Thị Hương',
    designation: 'Chủ tiệm bánh Sweet Dreams',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop',
  },
  {
    quote:
      'Tôi thích ý tưởng giảm lãng phí thực phẩm. Mỗi Surprise Bag là một món quà bất ngờ và ý nghĩa cho cả gia đình.',
    name: 'Phạm Hoàng Nam',
    designation: 'Kỹ sư phần mềm',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3540&auto=format&fit=crop',
  },
  {
    quote:
      'LastBite giúp siêu thị chúng tôi tối ưu hóa tồn kho cuối ngày. Đây là win-win solution cho cả doanh nghiệp và khách hàng.',
    name: 'Võ Minh Tuấn',
    designation: 'Quản lý Siêu thị CoopMart',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Người Dùng Nói Gì Về LastBite
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Hàng nghìn người đã tin tưởng và sử dụng LastBite mỗi ngày
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}