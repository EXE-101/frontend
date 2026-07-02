'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { InAppDeletionSimulator } from '@/components/deletion/InAppDeletionSimulator';
import { 
  ShieldCheck, 
  Trash2, 
  User, 
  Store, 
  Users, 
  AlertCircle, 
  CheckCircle2, 
  Lock, 
  Mail, 
  FileText,
  Clock,
  Send,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type AccountRole = 'customer' | 'merchant' | 'staff';

export default function AccountDeletionPage() {
  const [role, setRole] = useState<AccountRole>('customer');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [storeName, setStoreName] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed || !email || !fullName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const ticketId = `LB-DEL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedTicket(ticketId);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
            <ShieldCheck size={18} />
            Google Play Data Safety & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Yêu cầu xóa tài khoản & Dữ liệu LastBite
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Bạn có thể gửi yêu cầu xóa tài khoản LastBite và dữ liệu cá nhân liên quan bằng cách hoàn tất biểu mẫu trực tuyến công khai này hoặc thực hiện ngay trong ứng dụng di động LastBite.
          </p>
        </div>

        {/* GOOGLE PLAY REQUIREMENT COMPLIANCE BANNER */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-primary/5 to-secondary/30 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 size={28} />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground">
              Cam kết tuân thủ chính sách Google Play User Data
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Theo quy định phân phối ứng dụng của Google Play Console, ngay cả khi bạn đã gỡ cài đặt ứng dụng LastBite trên điện thoại, bạn vẫn luôn có thể yêu cầu xóa toàn bộ tài khoản và ẩn danh hóa thông tin cá nhân của mình tại trang web này mà không bắt buộc phải đăng nhập.
            </p>
            <div className="pt-2">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Xem chi tiết Chính sách quyền riêng tư LastBite <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* ROLE BASED POLICY BREAKDOWN */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground">Quy trình xử lý theo vai trò tài khoản</h2>
            <p className="text-sm text-muted-foreground mt-1">
              LastBite áp dụng mô hình bảo vệ dữ liệu chuẩn marketplace cho từng nhóm người dùng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Customer Role Card */}
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 shadow-sm hover:border-primary/50 transition">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <User size={22} />
              </div>
              <h3 className="font-bold text-lg text-foreground">1. Khách hàng (Customer)</h3>
              <ul className="text-xs text-muted-foreground space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Vô hiệu hóa phiên đăng nhập & revoke refresh token trên mọi thiết bị.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Xóa sổ địa chỉ, danh sách yêu thích, token FCM nhận thông báo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Ẩn danh hóa họ tên, email (<code className="text-[10px] bg-muted px-1 rounded">deleted_user_xxx</code>), sđt & avatar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock size={14} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>Lịch sử đơn hàng & giao dịch PayOS lưu theo luật kế toán/thế.</span>
                </li>
              </ul>
            </div>

            {/* Merchant Owner Role Card */}
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 shadow-sm hover:border-primary/50 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                <Store size={22} />
              </div>
              <h3 className="font-bold text-lg text-foreground">2. Đối tác / Cửa hàng (Merchant)</h3>
              <ul className="text-xs text-muted-foreground space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Chuyển trạng thái cửa hàng thành <strong className="text-foreground">CLOSED / ARCHIVED</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Tự động kiểm tra blocker: Đơn hàng chờ, ví payout chưa đối soát, khiếu nại.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Tắt toàn bộ Surprise Bag & ngắt quyền truy cập của nhân viên.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock size={14} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>Dữ liệu thuế, MST, hợp đồng & đối soát payout giữ mã hóa theo quy định.</span>
                </li>
              </ul>
            </div>

            {/* Store Staff Role Card */}
            <div className="bg-card rounded-2xl p-6 border border-border space-y-4 shadow-sm hover:border-primary/50 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                <Users size={22} />
              </div>
              <h3 className="font-bold text-lg text-foreground">3. Nhân viên (Store Staff)</h3>
              <ul className="text-xs text-muted-foreground space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Thu hồi toàn bộ quyền quản lý/vận hành khỏi cửa hàng.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Nếu tài khoản chỉ thuộc cửa hàng: Đưa về trạng thái INACTIVE hoặc DELETED.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>Nếu tài khoản có vai trò Khách hàng khác: Chỉ xóa liên kết cửa hàng, giữ thông tin cá nhân.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FORM & RETENTION COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* DELETION REQUEST FORM (7 Columns) */}
          <div className="lg:col-span-7 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
                <Trash2 size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Biểu mẫu Yêu cầu Xóa tài khoản</h3>
                <p className="text-xs text-muted-foreground">Gửi thông tin xác thực để LastBite tiến hành xử lý</p>
              </div>
            </div>

            {submittedTicket ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-foreground">Yêu cầu xóa tài khoản đã tiếp nhận thành công!</h4>
                  <p className="text-xs text-muted-foreground">
                    Mã hồ sơ xử lý (Ticket ID): <strong className="font-mono text-primary text-sm">{submittedTicket}</strong>
                  </p>
                </div>
                <div className="bg-background/80 p-4 rounded-xl border border-border text-xs text-left text-muted-foreground space-y-2">
                  <p className="flex items-center gap-1.5 font-medium text-foreground">
                    <Clock size={14} className="text-primary" /> Tiến trình xử lý tiếp theo:
                  </p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Bộ phận Privacy của LastBite sẽ gửi email xác nhận quyền sở hữu tới <strong>{email}</strong>.</li>
                    <li>Xác minh trong vòng 48 giờ làm việc.</li>
                    <li>Tiến hành ẩn danh hóa dữ liệu cá nhân & gửi thông báo hoàn tất cho bạn.</li>
                  </ol>
                </div>
                <Button 
                  onClick={() => {
                    setSubmittedTicket(null);
                    setEmail('');
                    setFullName('');
                    setPhone('');
                    setStoreName('');
                    setConfirmed(false);
                  }}
                  variant="outline"
                  className="text-xs rounded-xl"
                >
                  Gửi yêu cầu mới
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Role selection tabs */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground block">
                    1. Chọn vai trò tài khoản của bạn:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setRole('customer')}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition ${
                        role === 'customer'
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                          : 'bg-background text-muted-foreground border-border hover:bg-muted'
                      }`}
                    >
                      Khách hàng
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('merchant')}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition ${
                        role === 'merchant'
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                          : 'bg-background text-muted-foreground border-border hover:bg-muted'
                      }`}
                    >
                      Chủ Cửa hàng
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('staff')}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition ${
                        role === 'staff'
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                          : 'bg-background text-muted-foreground border-border hover:bg-muted'
                      }`}
                    >
                      Nhân viên
                    </button>
                  </div>
                </div>

                {/* Dynamic Role Alert */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs flex items-start gap-2">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <div>
                    {role === 'customer' && (
                      <span>
                        Tài khoản Khách hàng sẽ bị thu hồi token đăng nhập và ẩn danh thông tin cá nhân.
                      </span>
                    )}
                    {role === 'merchant' && (
                      <span>
                        Yêu cầu này sẽ đóng cửa hàng đối tác trên LastBite. Cần đảm bảo không còn đơn hàng chưa hoàn tất hoặc nợ payout.
                      </span>
                    )}
                    {role === 'staff' && (
                      <span>
                        Yêu cầu này sẽ thu hồi quyền nhân viên khỏi hệ thống quản lý cửa hàng LastBite Merchant.
                      </span>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground flex items-center gap-1">
                    <Mail size={14} className="text-primary" /> Email đã đăng ký tài khoản LastBite *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vi-du: user@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Full Name Input */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground flex items-center gap-1">
                    <User size={14} className="text-primary" /> Họ và tên đầy đủ *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Phone & Store inputs grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground block">
                      Số điện thoại (tùy chọn)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0901234567"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  {(role === 'merchant' || role === 'staff') && (
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground block">
                        Tên cửa hàng đối tác
                      </label>
                      <input
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        placeholder="Tiệm bánh LastBite"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  )}
                </div>

                {/* Reason */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground block">
                    Ghi chú / Lý do xóa tài khoản (tùy chọn)
                  </label>
                  <textarea
                    rows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Nhập lý do hoặc thắc mắc của bạn..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Confirmation Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-input text-primary focus:ring-primary"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      Tôi đã đọc và xác nhận rằng việc xóa tài khoản sẽ hủy quyền truy cập vào dịch vụ LastBite. Dữ liệu cá nhân sẽ được ẩn danh hoặc xóa bỏ, ngoại trừ các dữ liệu giao dịch lưu trữ theo nghĩa vụ pháp lý.
                    </span>
                  </label>
                </div>

                {/* Submit button & Mailto fallback */}
                <div className="pt-2 space-y-3">
                  <Button
                    type="submit"
                    disabled={!confirmed || !email || !fullName || isSubmitting}
                    className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold py-3 rounded-xl shadow-sm text-sm"
                  >
                    {isSubmitting ? 'Đang gửi hồ sơ...' : 'Gửi Yêu Cầu Xóa Tài Khoản'}
                  </Button>

                  <div className="text-center">
                    <span className="text-[11px] text-muted-foreground">Hoặc gửi mail trực tiếp qua: </span>
                    <a
                      href={`mailto:privacy@lastbite.vn?subject=Y%C3%AAu%20c%E1%BA%A7u%20x%C3%B3a%20t%C3%A0i%20kho%E1%BA%A3n%20LastBite&body=H%E1%BB%8D%20t%C3%AAn:%20${encodeURIComponent(fullName)}%0AEmail:%20${encodeURIComponent(email)}`}
                      className="text-[11px] font-semibold text-primary hover:underline"
                    >
                      privacy@lastbite.vn
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* RETENTION DETAILS SIDEBAR (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                Dữ liệu xử lý chi tiết
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                  <div className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={14} /> Dữ liệu được xóa / ẩn danh hoàn toàn:
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[11px]">
                    Họ tên, địa chỉ email, số điện thoại, ảnh đại diện Google/Upload, sổ địa chỉ đã lưu, danh sách cửa hàng yêu thích, token thiết bị FCM, tùy chọn nhận thông báo.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                  <div className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                    <Lock size={14} /> Dữ liệu bắt buộc duy trì bảo mật:
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[11px]">
                    Lịch sử đơn hàng, dữ liệu giao dịch PayOS, lịch sử đối soát hoàn tiền, chứng từ tài chính đối tác, nhật ký kiểm toán chống gian lận (audit logs).
                  </p>
                </div>
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-primary/5 border border-primary/15 rounded-3xl p-6 space-y-3">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                <HelpCircle size={18} className="text-primary" />
                Cần hỗ trợ thêm?
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Nếu bạn gặp khó khăn khi gửi biểu mẫu hoặc có thắc mắc liên quan đến quyền riêng tư dữ liệu cá nhân:
              </p>
              <div className="text-xs space-y-1 text-foreground font-medium">
                <div>Email: <a href="mailto:privacy@lastbite.vn" className="text-primary hover:underline">privacy@lastbite.vn</a></div>
                <div>Trang hỗ trợ: <Link href="/privacy-policy" className="text-primary hover:underline">lastbite.vn/privacy-policy</Link></div>
              </div>
            </div>
          </div>
        </div>

        {/* IN-APP SIMULATOR SECTION */}
        <div className="pt-6">
          <InAppDeletionSimulator />
        </div>
      </main>

      <Footer />
    </div>
  );
}
