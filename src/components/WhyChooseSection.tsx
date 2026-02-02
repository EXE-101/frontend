import DisplayCards from '@/components/ui/display-cards';
import { ShoppingBag, TrendingDown, Leaf } from 'lucide-react';

const displayCardsData = [
  {
    icon: <ShoppingBag className="w-4 h-4 text-emerald-500" />,
    title: 'Đặt Hàng Nhanh',
    description: 'Chỉ vài thao tác để đặt Surprise Bag',
    date: 'Có sẵn ngay',
    titleClassName: 'text-emerald-600 dark:text-emerald-400',
    className:
      '[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[\'\'] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
  },
  {
    icon: <TrendingDown className="w-4 h-4 text-blue-500" />,
    title: 'Giá Ưu Đãi',
    description: 'Tiết kiệm đến 70% giá trị thực phẩm',
    date: 'Mỗi ngày',
    titleClassName: 'text-blue-600 dark:text-blue-400',
    className:
      '[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[\'\'] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
  },
  {
    icon: <Leaf className="w-4 h-4 text-green-500" />,
    title: 'Bảo Vệ Môi Trường',
    description: 'Cùng nhau giảm lãng phí thực phẩm',
    date: 'Tham gia ngay',
    titleClassName: 'text-green-600 dark:text-green-400',
    className: '[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10',
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-secondary/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tại Sao Chọn LastBite?
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Giải pháp hoàn hảo cho người tiêu dùng thông minh và doanh nghiệp có trách nhiệm
          </p>
        </div>
        <DisplayCards cards={displayCardsData} />
      </div>
    </section>
  );
}