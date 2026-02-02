export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Sẵn Sàng Bắt Đầu?
        </h2>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Tham gia LastBite ngay hôm nay để tiết kiệm chi phí, 
          tận hưởng thực phẩm chất lượng và góp phần bảo vệ môi trường
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Tải App iOS
          </button>
          <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Tải App Android
          </button>
        </div>
        <p className="text-primary-foreground/70 text-sm mt-8">
          Miễn phí tải xuống • Không yêu cầu thẻ tín dụng
        </p>
      </div>
    </section>
  );
}