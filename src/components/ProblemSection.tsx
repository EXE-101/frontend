import { MagicText } from '@/components/ui/magic-text';

export function ProblemSection() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Vấn Đề Chúng Ta Đang Giải Quyết
          </h2>
        </div>
        <MagicText text="Mỗi năm, Việt Nam lãng phí hơn 8 triệu tấn thực phẩm, gây thiệt hại 3.9 tỷ USD. Tại TP.HCM, gần 8,000 tấn rác thực phẩm mỗi ngày thải ra khí methane, góp phần vào biến đổi khí hậu. Trong khi đó, hàng triệu người vẫn phải chi phần lớn thu nhập cho thực phẩm. LastBite ra đời để thay đổi điều này - biến lãng phí thành giá trị, biến thách thức thành cơ hội." />
      </div>
    </section>
  );
}