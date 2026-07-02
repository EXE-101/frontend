'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  ShieldCheck, 
  Search, 
  FileText, 
  Lock, 
  Trash2, 
  ExternalLink, 
  Building, 
  Mail, 
  MapPin, 
  CheckCircle2,
  AlertTriangle,
  Printer,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string>('sec-1');

  const tocItems = [
    { id: 'sec-1', label: '1. Đơn vị phụ trách & Liên hệ' },
    { id: 'sec-2', label: '2. Dữ liệu chúng tôi thu thập' },
    { id: 'sec-3', label: '3. Mục đích sử dụng dữ liệu' },
    { id: 'sec-4', label: '4. Chia sẻ dữ liệu' },
    { id: 'sec-5', label: '5. Quyền người dùng & Xóa tài khoản' },
    { id: 'sec-6', label: '6. Thời gian lưu giữ dữ liệu' },
    { id: 'sec-7', label: '7. Bảo mật & An toàn hệ thống' },
    { id: 'sec-8', label: '8. Thay đổi chính sách' },
  ];

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* TOP BREADCRUMB & ACTIONS */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Trang chủ</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Chính sách quyền riêng tư</span>
          </div>

          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handlePrint}
              className="text-xs gap-1.5 rounded-xl"
            >
              <Printer size={14} /> In chính sách
            </Button>
            <Link href="/account-deletion">
              <Button size="sm" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-xs gap-1.5 rounded-xl">
                <Trash2 size={14} /> Trang Yêu Cầu Xóa Tài Khoản
              </Button>
            </Link>
          </div>
        </div>

        {/* POLICY HEADER HERO */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <ShieldCheck size={16} /> LastBite Data Protection & Privacy Notice
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Chính sách quyền riêng tư - LastBite
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
            <span>Ngày hiệu lực: <strong>02/07/2026</strong></span>
            <span>•</span>
            <span>Phiên bản: <strong>2.4 (Google Play Compliant)</strong></span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl pt-2">
            Chính sách quyền riêng tư này mô tả cách LastBite (&quot;LastBite&quot;, &quot;chúng tôi&quot;) thu thập, sử dụng, lưu trữ, chia sẻ và bảo vệ dữ liệu khi bạn sử dụng ứng dụng di động, website và các dịch vụ liên quan đến nền tảng thực phẩm dư thừa LastBite.
          </p>

          {/* PLAY STORE DIRECTIVE CALLOUT */}
          <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-0.5 text-xs">
              <span className="font-bold text-foreground block">Yêu cầu xóa tài khoản ngoài ứng dụng (Google Play Policy)?</span>
              <span className="text-muted-foreground">Bạn có thể yêu cầu xóa tài khoản và ẩn danh hóa dữ liệu cá nhân bất kỳ lúc nào mà không cần đăng nhập app.</span>
            </div>
            <Link href="/account-deletion" className="shrink-0">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs rounded-xl font-medium">
                Gửi yêu cầu xóa tài khoản <ArrowRight size={14} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* MAIN CONTENT GRID (Sidebar TOC + Policy Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* STICKY TOC SIDEBAR (4 Columns) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-4">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm từ khóa trong policy..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-input bg-background text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-bold text-muted-foreground uppercase px-2 py-1 tracking-wider">
                  Mục lục chính sách
                </div>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={14} className="opacity-50" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-muted/50 border border-border rounded-2xl p-5 space-y-2 text-xs">
              <div className="font-bold text-foreground flex items-center gap-1.5">
                <Mail size={14} className="text-primary" /> Liên hệ Bộ phận Privacy
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Email xử lý quyền riêng tư & bảo mật: <a href="mailto:privacy@lastbite.vn" className="text-primary font-semibold hover:underline">privacy@lastbite.vn</a>
              </p>
            </div>
          </div>

          {/* POLICY TEXT CONTENT (8 Columns) */}
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm space-y-10 text-sm leading-relaxed">
            
            {/* SECTION 1 */}
            <section id="sec-1" className="scroll-mt-28 space-y-3 border-b border-border pb-8">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Building size={20} className="text-primary" />
                1. Đơn vị phụ trách và liên hệ
              </h2>
              <p className="text-muted-foreground">
                LastBite là nền tảng kết nối khách hàng với nhà hàng, tiệm bánh, quán cà phê, cửa hàng thực phẩm và đối tác bán hàng để đặt mua các &quot;surprise bag&quot; hoặc sản phẩm thực phẩm dư thừa trong khung giờ nhận hàng nhất định.
              </p>
              <div className="bg-muted/40 p-4 rounded-xl border border-border space-y-2 text-xs">
                <div><strong>Đơn vị vận hành:</strong> CÔNG TY CỔ PHẦN CÔNG NGHỆ THỰC PHẨM LASTBITE VIỆT NAM</div>
                <div><strong>Email liên hệ về quyền riêng tư:</strong> <a href="mailto:privacy@lastbite.vn" className="text-primary hover:underline">privacy@lastbite.vn</a></div>
                <div><strong>Trang hỗ trợ & xóa tài khoản công khai:</strong> <Link href="/account-deletion" className="text-primary hover:underline">https://lastbite.vn/account-deletion</Link></div>
                <div><strong>Địa chỉ liên hệ:</strong> Tòa nhà Công nghệ, Khu Công nghệ Cao, TP. Hồ Chí Minh, Việt Nam.</div>
              </div>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                Nếu bạn không đồng ý với chính sách này, vui lòng không tiếp tục truy cập hoặc sử dụng ứng dụng LastBite.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="sec-2" className="scroll-mt-28 space-y-4 border-b border-border pb-8">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                2. Dữ liệu chúng tôi thu thập
              </h2>
              <p className="text-muted-foreground">
                Tùy vào cách bạn tương tác với LastBite (với tư cách Khách hàng, Đối tác bán hàng hoặc Nhân viên), chúng tôi có thể thu thập các nhóm dữ liệu sau:
              </p>

              <div className="space-y-4 text-xs">
                {/* 2.1 */}
                <div className="bg-background p-4 rounded-xl border border-border space-y-1">
                  <h3 className="font-bold text-foreground text-sm">2.1. Thông tin tài khoản</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Họ và tên, địa chỉ Email, Số điện thoại.</li>
                    <li>Tên đăng nhập, mật khẩu đã băm mã hóa (hashing), trạng thái xác minh email/sđt.</li>
                    <li>Ảnh đại diện nếu bạn cập nhật hoặc đăng nhập qua Google Sign-In.</li>
                    <li>Vai trò tài khoản (Khách hàng, Chủ cửa hàng đối tác, Quản lý, Nhân viên hoặc Quản trị viên).</li>
                    <li>Thời điểm tạo tài khoản, thời điểm cập nhật và lần đăng nhập gần nhất.</li>
                  </ul>
                </div>

                {/* 2.2 */}
                <div className="bg-background p-4 rounded-xl border border-border space-y-1">
                  <h3 className="font-bold text-foreground text-sm">2.2. Thông tin đăng nhập và xác thực</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Access token, refresh token và mã phiên đăng nhập.</li>
                    <li>Refresh token lưu bằng cookie HttpOnly và được hash an toàn trên hệ thống.</li>
                    <li>Mã OTP xác minh email/sđt.</li>
                    <li>Đối với Google Sign-In: Nhận từ Google email, tên và ảnh đại diện được cấp phép.</li>
                  </ul>
                </div>

                {/* 2.3 */}
                <div className="bg-background p-4 rounded-xl border border-border space-y-1">
                  <h3 className="font-bold text-foreground text-sm">2.3. Thông tin địa chỉ và vị trí</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Sổ địa chỉ đã lưu, nhãn địa chỉ, tọa độ vĩ độ/kinh độ.</li>
                    <li>Khu vực, quận/huyện, thành phố để gợi ý cửa hàng gần nhất. Dữ liệu vị trí chỉ sử dụng khi bạn cấp quyền trên ứng dụng.</li>
                  </ul>
                </div>

                {/* 2.4 */}
                <div className="bg-background p-4 rounded-xl border border-border space-y-1">
                  <h3 className="font-bold text-foreground text-sm">2.4. Thông tin đơn hàng, thanh toán và nhận hàng</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Mã đơn hàng, cửa hàng, sản phẩm surprise bag, số lượng, giá, giảm giá, mã QR nhận hàng.</li>
                    <li>Thông tin giao dịch PayOS (mã giao dịch, trạng thái thanh toán, QR code). LastBite KHÔNG lưu thông tin thẻ ngân hàng đầy đủ của bạn.</li>
                  </ul>
                </div>

                {/* 2.5 */}
                <div className="bg-background p-4 rounded-xl border border-border space-y-1">
                  <h3 className="font-bold text-foreground text-sm">2.5. Thông tin hoàn tiền và tài khoản ngân hàng đối tác</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Số tài khoản ngân hàng phục vụ hoàn tiền hoặc payout đối tác được lưu ở dạng mã hóa (kèm 4 số cuối để đối soát).</li>
                  </ul>
                </div>

                {/* 2.6 */}
                <div className="bg-background p-4 rounded-xl border border-border space-y-1">
                  <h3 className="font-bold text-foreground text-sm">2.6. Thông tin đối tác bán hàng và cửa hàng</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Tên cửa hàng, địa chỉ, giấy phép kinh doanh, mã số thuế, đại diện pháp luật, ảnh menu, lịch mở cửa.</li>
                  </ul>
                </div>

                {/* 2.7 & 2.8 */}
                <div className="bg-background p-4 rounded-xl border border-border space-y-1">
                  <h3 className="font-bold text-foreground text-sm">2.7 - 2.8. Thiết bị & Tương tác ứng dụng</h3>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Token thiết bị Firebase Cloud Messaging (FCM) gửi thông báo đơn hàng.</li>
                    <li>Nhật ký tương tác chống gian lận (IP hash, Session ID, User Agent).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="sec-3" className="scroll-mt-28 space-y-3 border-b border-border pb-8">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                3. Mục đích sử dụng dữ liệu
              </h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-xs leading-relaxed">
                <li>Tạo, xác thực, bảo vệ và quản lý tài khoản người dùng và cửa hàng đối tác.</li>
                <li>Xử lý đặt mua surprise bag, thanh toán PayOS, xác minh mã QR và xử lý hoàn tiền.</li>
                <li>Hiển thị tìm kiếm cửa hàng gần nhất theo tọa độ vị trí bạn cấp phép.</li>
                <li>Gửi thông báo đẩy FCM liên quan đến đơn hàng, giờ nhận hàng và khuyến mãi.</li>
                <li>Phòng chống gian lận, bảo vệ an toàn hệ thống và đối soát tài chính kế toán/thuế.</li>
                <li>Tuân thủ yêu cầu pháp lý của cơ quan quản lý nhà nước và chính sách phân phối Google Play Console.</li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section id="sec-4" className="scroll-mt-28 space-y-3 border-b border-border pb-8">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Lock size={20} className="text-primary" />
                4. Chia sẻ dữ liệu
              </h2>
              <p className="text-muted-foreground font-semibold text-xs">
                Chúng tôi KHÔNG bán dữ liệu cá nhân của người dùng cho bên thứ ba.
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Dữ liệu chỉ được chia sẻ giới hạn với các đơn vị xử lý dịch vụ tin cậy gồm: Nhà cung cấp thanh toán PayOS (đối soát giao dịch), Firebase Cloud Messaging (gửi thông báo), và cửa hàng đối tác (nhận mã đơn và tên khách nhận hàng).
              </p>
            </section>

            {/* SECTION 5 - MARKETPLACE ACCOUNT DELETION SPEC */}
            <section id="sec-5" className="scroll-mt-28 space-y-4 border-b border-border pb-8">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Trash2 size={20} className="text-destructive" />
                5. Quyền của người dùng & Quy trình Xóa tài khoản (Google Play Data Safety)
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Người dùng có quyền truy cập, chỉnh sửa, yêu cầu trích xuất hoặc xóa bỏ tài khoản bất kỳ lúc nào.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 space-y-3 text-xs">
                <div className="font-bold text-foreground text-sm">Phương thức gửi yêu cầu xóa tài khoản:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-background p-3 rounded-xl border border-border">
                    <span className="font-semibold text-primary block mb-1">Trong ứng dụng di động:</span>
                    <span className="text-muted-foreground text-[11px]">Vào <strong>Hồ sơ &gt; Cài đặt &gt; Tài khoản &gt; Xóa tài khoản</strong> và xác thực OTP.</span>
                  </div>
                  <div className="bg-background p-3 rounded-xl border border-border">
                    <span className="font-semibold text-primary block mb-1">Trên trang web công khai:</span>
                    <span className="text-muted-foreground text-[11px]">Truy cập <Link href="/account-deletion" className="text-primary underline font-medium">lastbite.vn/account-deletion</Link> để hoàn tất biểu mẫu.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="font-semibold text-foreground">Xử lý theo mô hình Marketplace:</div>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li><strong>Khách hàng:</strong> Thu hồi toàn bộ token, vô hiệu hóa tài khoản, ẩn danh hóa tên/email/sđt (`deleted_user_xxx`).</li>
                  <li><strong>Đối tác cửa hàng:</strong> Yêu cầu đóng đối tác, kiểm tra blocker (đơn hàng chưa giao, nợ payout), chuyển trạng thái `CLOSED`.</li>
                  <li><strong>Nhân viên:</strong> Gỡ quyền làm việc khỏi cửa hàng.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="sec-6" className="scroll-mt-28 space-y-3 border-b border-border pb-8">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <ShieldCheck size={20} className="text-primary" />
                6. Thời gian lưu giữ dữ liệu & Nghĩa vụ pháp lý
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Theo quy định của Google Play User Data Policy, khi tài khoản bị xóa, các dữ liệu cá nhân (tên, email, sđt, avatar, vị trí) sẽ được ẩn danh hoặc xóa bỏ. Một số dữ liệu giao dịch tài chính sẽ được lưu giữ bảo mật trong thời hạn luật định:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground text-xs space-y-1">
                <li>Lịch sử đơn hàng và chứng từ PayOS: Lưu trữ phục vụ kế toán, nghĩa vụ thuế và phòng chống gian lận.</li>
                <li>Nhật ký kiểm toán hệ thống (Audit logs): Mã hóa lưu trữ để bảo vệ an ninh hạ tầng.</li>
              </ul>
            </section>

            {/* SECTION 7 & 8 */}
            <section id="sec-7" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Mail size={20} className="text-primary" />
                7 & 8. Cập nhật chính sách & Liên hệ
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Chúng tôi có thể cập nhật chính sách này theo thời gian để đáp ứng sự thay đổi của pháp luật hoặc tính năng dịch vụ. Mọi thay đổi quan trọng sẽ được thông báo qua ứng dụng hoặc email trước ngày có hiệu lực.
              </p>
              <div className="p-4 rounded-xl bg-muted/40 border border-border text-xs text-muted-foreground">
                Mọi thắc mắc hoặc khiếu nại về quyền riêng tư, vui lòng gửi về email: <a href="mailto:privacy@lastbite.vn" className="text-primary font-bold hover:underline">privacy@lastbite.vn</a>.
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
