import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center font-bold text-primary text-sm">
                LB
              </div>
              <span className="font-bold text-lg">LASTBITE</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Tái định nghĩa thói quen tiêu dùng thức ăn nhanh. Chúng tôi kết nối bạn với những bữa ăn chất lượng, giải quyết bài toán lãng phí và xây dựng hệ sinh thái F&B bền vững.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">Khám phá LASTBITE</h4>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Văn hóa LASTBITE
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Báo cáo Phát thải
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Cơ hội Nghề nghiệp
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Tin tức & Sự kiện
            </Link>
          </div>

          {/* Business Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">Dành cho Đối tác</h4>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Tham gia Mạng lưới LASTBITE
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Tối ưu Vận hành (F&B)
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Giải pháp Siêu thị
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Công cụ Quản lý Cửa hàng
            </Link>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">Pháp lý & Hỗ trợ</h4>
            <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Điều khoản Dịch vụ
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Chính sách Bảo mật
            </Link>
            <Link href="/trust-framework" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Tiêu chuẩn Vệ sinh ATTP
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Trung tâm Trợ giúp
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8 space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold">Kết nối với chúng tôi</span>
            <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm text-center">
              © 2024 LASTBITE Vietnam. Mọi quyền được bảo lưu.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
