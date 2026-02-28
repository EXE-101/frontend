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
              Giúp nhà hàng, tiệm bánh và cửa hàng bán thực phẩm dư thừa có lời, đồng thời giảm lãng phí cho cộng đồng.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">Về LASTBITE</h4>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition">
              Câu chuyện thương hiệu
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Tác động bền vững
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Tuyển dụng
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Bản tin
            </Link>
          </div>

          {/* Business Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">Giải pháp cho đối tác</h4>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition">
              Hợp tác cùng LASTBITE
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Dành cho bán lẻ
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Tài nguyên vận hành
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Bộ giải pháp thông minh
            </Link>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">Pháp lý</h4>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition">
              Điều khoản sử dụng
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Chính sách bảo mật
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Chính sách cookie
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Kênh liên hệ
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
              © {new Date().getFullYear()} LASTBITE. Đã đăng ký bản quyền.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
