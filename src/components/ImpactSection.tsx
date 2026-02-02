import { Gallery4 } from '@/components/ui/gallery4';

const impactData = [
  {
    id: 'food-saved',
    title: 'Giảm Lãng Phí Thực Phẩm',
    description:
      'LastBite đã cứu hàng nghìn kg thực phẩm khỏi bãi rác, góp phần giảm thiểu tác động môi trường và tiết kiệm tài nguyên quý giá.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080&auto=format&fit=crop',
  },
  {
    id: 'partners',
    title: 'Đối Tác Tin Cậy',
    description:
      'Hợp tác với hàng trăm siêu thị, tiệm bánh và cửa hàng uy tín tại TP.HCM, mang đến nguồn thực phẩm đa dạng và chất lượng.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1080&auto=format&fit=crop',
  },
  {
    id: 'community',
    title: 'Cộng Đồng Tiêu Dùng Bền Vững',
    description:
      'Hơn 10,000 người dùng đã tham gia LastBite, cùng nhau xây dựng phong cách sống xanh, tiết kiệm và có trách nhiệm.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1080&auto=format&fit=crop',
  },
  {
    id: 'savings',
    title: 'Tiết Kiệm Chi Phí',
    description:
      'Người dùng LastBite tiết kiệm trung bình 50-70% chi phí thực phẩm mỗi tháng, giúp cải thiện chất lượng cuộc sống.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1080&auto=format&fit=crop',
  },
  {
    id: 'technology',
    title: 'Công Nghệ Tiên Tiến',
    description:
      'Nền tảng LastBite sử dụng AI và dữ liệu để tối ưu hóa việc kết nối cung - cầu, đảm bảo trải nghiệm mượt mà nhất.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop',
  },
];

export function ImpactSection() {
  return (
    <Gallery4
      title="Tác Động Của Chúng Ta"
      description="LastBite không chỉ là một ứng dụng - đây là phong trào xã hội hướng tới tương lai bền vững. Cùng khám phá những thành tựu và giá trị mà chúng ta đã tạo ra."
      items={impactData}
    />
  );
}