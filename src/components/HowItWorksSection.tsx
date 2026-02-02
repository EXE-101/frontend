import { ShoppingBag, Sparkles, Heart, Globe } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section className="bg-gradient-to-b from-secondary/10 to-background py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Cách Thức Hoạt Động
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto mb-12">
            LastBite kết nối người bán với người mua theo mô hình Surprise Bag - 
            túi thực phẩm bất ngờ với giá ưu đãi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Đối Tác Đăng Ký
            </h3>
            <p className="text-foreground/70">
              Siêu thị, tiệm bánh đăng tải Surprise Bag cuối ngày lên LastBite với giá ưu đãi và khung giờ nhận hàng
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Người Dùng Đặt Mua
            </h3>
            <p className="text-foreground/70">
              Tìm kiếm Surprise Bag gần bạn trên app, đặt mua và thanh toán online dễ dàng, tiện lợi
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Nhận Hàng & Tận Hưởng
            </h3>
            <p className="text-foreground/70">
              Nhận tại cửa hàng hoặc giao tận nhà. Thưởng thức thực phẩm chất lượng với giá rẻ, góp phần giảm lãng phí
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            Tải Ứng Dụng Ngay
          </a>
        </div>
      </div>
    </section>
  );
}