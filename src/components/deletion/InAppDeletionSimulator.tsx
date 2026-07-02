'use client';

import { useState } from 'react';
import { 
  Smartphone, 
  User, 
  Store, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft,
  Lock,
  Mail,
  Trash2,
  RefreshCcw,
  Building2,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function InAppDeletionSimulator() {
  const [appMode, setAppMode] = useState<'customer' | 'merchant'>('customer');
  const [custStep, setCustStep] = useState<number>(1);
  const [merchStep, setMerchStep] = useState<number>(1);
  const [otpValue, setOtpValue] = useState<string>('984120');

  const resetCust = () => setCustStep(1);
  const resetMerch = () => setMerchStep(1);

  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/30 rounded-3xl p-6 md:p-10 border border-border shadow-xl">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs uppercase tracking-wider mb-3">
          <Smartphone size={14} />
          Mô phỏng quy trình trong ứng dụng LastBite
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Trải nghiệm luồng xóa tài khoản trên Mobile App
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Google Play yêu cầu quy trình xóa tài khoản trực quan trong ứng dụng. Bạn có thể chuyển đổi giữa ứng dụng Khách hàng và ứng dụng Đối tác bên dưới.
        </p>

        {/* Mode Switcher */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => { setAppMode('customer'); resetCust(); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm ${
              appMode === 'customer'
                ? 'bg-primary text-primary-foreground shadow-primary/20 scale-105'
                : 'bg-card text-foreground hover:bg-muted border border-border'
            }`}
          >
            <User size={16} />
            App Khách hàng (Customer)
          </button>
          <button
            onClick={() => { setAppMode('merchant'); resetMerch(); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm ${
              appMode === 'merchant'
                ? 'bg-primary text-primary-foreground shadow-primary/20 scale-105'
                : 'bg-card text-foreground hover:bg-muted border border-border'
            }`}
          >
            <Store size={16} />
            App Đối tác (Merchant Owner)
          </button>
        </div>
      </div>

      {/* Mobile Mockup Frame */}
      <div className="max-w-sm mx-auto">
        <div className="relative mx-auto border-gray-900 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[640px] w-[320px] sm:w-[340px] shadow-2xl overflow-hidden">
          {/* Camera Notch / Speaker Bar */}
          <div className="w-[120px] h-[18px] bg-gray-900 top-0 left-1/2 -translate-x-1/2 absolute rounded-b-xl z-30 flex items-center justify-center">
            <div className="w-10 h-1 bg-gray-700 rounded-full"></div>
          </div>

          {/* Screen Content Wrapper */}
          <div className="bg-background text-foreground h-full overflow-y-auto pt-6 pb-4 flex flex-col justify-between select-none font-sans">
            
            {/* Status Header inside Phone */}
            <div className="px-5 py-2 border-b border-border/50 flex justify-between items-center bg-card/60 backdrop-blur text-xs font-semibold">
              <span className="text-primary font-bold">LASTBITE</span>
              <span className="text-[10px] text-muted-foreground px-2 py-0.5 bg-secondary rounded">
                {appMode === 'customer' ? 'Customer v2.4' : 'Merchant Partner v2.4'}
              </span>
            </div>

            {/* SCREEN CONTENT: CUSTOMER FLOW */}
            {appMode === 'customer' && (
              <div className="p-4 flex-1 flex flex-col justify-between">
                {/* Step 1: Settings Screen */}
                {custStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <User size={16} className="text-primary" />
                      <span>Hồ sơ & Cài đặt</span>
                    </div>
                    <div className="bg-card rounded-2xl p-3 border border-border space-y-2 text-xs">
                      <div className="flex items-center gap-3 p-2 hover:bg-muted rounded-xl transition">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                          NV
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Nguyễn Văn A</div>
                          <div className="text-muted-foreground text-[11px]">nguyenvana@gmail.com</div>
                        </div>
                      </div>

                      <div className="border-t border-border pt-2 space-y-1">
                        <div className="flex justify-between items-center p-2 hover:bg-muted rounded-lg text-muted-foreground">
                          <span>Địa chỉ đã lưu</span>
                          <ChevronRight size={14} />
                        </div>
                        <div className="flex justify-between items-center p-2 hover:bg-muted rounded-lg text-muted-foreground">
                          <span>Cửa hàng yêu thích</span>
                          <ChevronRight size={14} />
                        </div>
                        <div className="flex justify-between items-center p-2 hover:bg-muted rounded-lg text-muted-foreground">
                          <span>Thông báo & Quyền riêng tư</span>
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-2xl p-3 border border-border space-y-1">
                      <div className="text-[11px] font-semibold text-muted-foreground px-2 py-1 uppercase">
                        Bảo mật tài khoản
                      </div>
                      <button
                        onClick={() => setCustStep(2)}
                        className="w-full flex items-center justify-between p-2 rounded-xl bg-destructive/10 hover:bg-destructive/20 text-destructive text-xs font-semibold transition"
                      >
                        <div className="flex items-center gap-2">
                          <Trash2 size={14} />
                          <span>Xóa tài khoản LastBite</span>
                        </div>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Information & Impact Warning */}
                {custStep === 2 && (
                  <div className="space-y-3 animate-fadeIn">
                    <button 
                      onClick={() => setCustStep(1)} 
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-1"
                    >
                      <ArrowLeft size={14} /> Quay lại
                    </button>
                    
                    <div className="text-center space-y-1">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                        <AlertTriangle size={20} />
                      </div>
                      <h4 className="font-bold text-sm text-foreground">Xác nhận yêu cầu xóa tài khoản</h4>
                      <p className="text-[11px] text-muted-foreground">
                        Hành động này sẽ ngưng hoạt động tài khoản và ẩn danh hóa thông tin cá nhân của bạn.
                      </p>
                    </div>

                    <div className="bg-card rounded-xl p-3 border border-border text-[11px] space-y-2">
                      <div className="font-semibold text-foreground flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        Dữ liệu sẽ xóa / ẩn danh:
                      </div>
                      <ul className="list-disc pl-4 text-muted-foreground space-y-0.5">
                        <li>Họ tên, email, sđt, avatar</li>
                        <li>Sổ địa chỉ & danh sách yêu thích</li>
                        <li>Token thiết bị FCM nhận thông báo</li>
                      </ul>

                      <div className="font-semibold text-foreground flex items-center gap-1 pt-1 border-t border-border">
                        <Lock size={12} className="text-amber-500" />
                        Dữ liệu lưu theo nghĩa vụ pháp lý:
                      </div>
                      <p className="text-muted-foreground text-[10px]">
                        Lịch sử đơn hàng, PayOS transaction & chứng từ kế toán giữ theo quy định đối soát.
                      </p>
                    </div>

                    <Button 
                      onClick={() => setCustStep(3)}
                      className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 text-xs py-2 rounded-xl"
                    >
                      Tiếp tục xác thực OTP / Mật khẩu
                    </Button>
                  </div>
                )}

                {/* Step 3: OTP Verification */}
                {custStep === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <button 
                      onClick={() => setCustStep(2)} 
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeft size={14} /> Quay lại
                    </button>

                    <div className="text-center space-y-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                        <Lock size={20} />
                      </div>
                      <h4 className="font-bold text-sm text-foreground">Xác thực quyền sở hữu</h4>
                      <p className="text-[11px] text-muted-foreground">
                        Mã OTP 6 chữ số đã được gửi tới email nguyenvana@gmail.com
                      </p>
                    </div>

                    <div className="bg-card p-3 rounded-xl border border-border space-y-2">
                      <label className="text-[10px] text-muted-foreground block font-semibold">
                        Mã OTP xác nhận:
                      </label>
                      <input 
                        type="text" 
                        value={otpValue}
                        onChange={(e) => setOtpValue(e.target.value)}
                        className="w-full text-center tracking-widest text-base font-mono py-1.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <Button
                      onClick={() => setCustStep(4)}
                      className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 text-xs py-2 rounded-xl font-bold"
                    >
                      Xác nhận xóa tài khoản vĩnh viễn
                    </Button>
                  </div>
                )}

                {/* Step 4: Completion */}
                {custStep === 4 && (
                  <div className="space-y-4 text-center my-auto animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-foreground">Yêu cầu đã tiếp nhận</h4>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                        Tài khoản của bạn đã được chuyển sang trạng thái ngưng hoạt động. Dữ liệu cá nhân sẽ được ẩn danh hoàn toàn trong thời gian quy định.
                      </p>
                    </div>
                    <Button 
                      onClick={() => setCustStep(1)} 
                      variant="outline"
                      className="text-xs rounded-xl px-4 py-1.5"
                    >
                      <RefreshCcw size={12} className="mr-1.5" /> Thử lại luồng
                    </Button>
                  </div>
                )}

                {/* Step indicators */}
                <div className="flex justify-center gap-1.5 pt-2">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 rounded-full transition-all ${
                        custStep === s ? 'w-6 bg-primary' : 'w-1.5 bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN CONTENT: MERCHANT FLOW */}
            {appMode === 'merchant' && (
              <div className="p-4 flex-1 flex flex-col justify-between">
                {/* Merchant Step 1: Partner Store Settings */}
                {merchStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Building2 size={16} className="text-primary" />
                      <span>Quản lý Cửa hàng Partner</span>
                    </div>

                    <div className="bg-card rounded-2xl p-3 border border-border space-y-2 text-xs">
                      <div className="flex items-center gap-3 p-2 bg-primary/5 rounded-xl border border-primary/10">
                        <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          LB
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Tiệm Bánh LastBite - Quận 1</div>
                          <div className="text-[10px] text-emerald-600 font-medium">Trạng thái: Đang hoạt động</div>
                        </div>
                      </div>

                      <div className="space-y-1 text-muted-foreground pt-1">
                        <div className="flex justify-between items-center p-2 hover:bg-muted rounded-lg">
                          <span>Danh sách Surprise Bag</span>
                          <ChevronRight size={14} />
                        </div>
                        <div className="flex justify-between items-center p-2 hover:bg-muted rounded-lg">
                          <span>Doanh thu & Đóng sổ Payout</span>
                          <ChevronRight size={14} />
                        </div>
                        <div className="flex justify-between items-center p-2 hover:bg-muted rounded-lg">
                          <span>Quản lý Nhân viên & Quyền</span>
                          <ChevronRight size={14} />
                        </div>
                      </div>
                    </div>

                    <div className="bg-card rounded-2xl p-3 border border-border space-y-1">
                      <div className="text-[11px] font-semibold text-muted-foreground px-2 py-1 uppercase">
                        Vận hành & Hợp đồng
                      </div>
                      <button
                        onClick={() => setMerchStep(2)}
                        className="w-full flex items-center justify-between p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold transition"
                      >
                        <div className="flex items-center gap-2">
                          <Store size={14} />
                          <span>Yêu cầu đóng cửa hàng đối tác</span>
                        </div>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Merchant Step 2: Blocker Check Audit */}
                {merchStep === 2 && (
                  <div className="space-y-3 animate-fadeIn">
                    <button 
                      onClick={() => setMerchStep(1)} 
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeft size={14} /> Quay lại
                    </button>

                    <div className="text-center space-y-1">
                      <h4 className="font-bold text-sm text-foreground">Kiểm tra điều kiện đóng cửa hàng</h4>
                      <p className="text-[11px] text-muted-foreground">
                        Hệ thống tự động rà soát các nghĩa vụ vận hành chưa hoàn tất.
                      </p>
                    </div>

                    <div className="bg-card rounded-xl p-3 border border-border text-[11px] space-y-2">
                      <div className="flex items-center justify-between p-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-lg">
                        <span>Đơn hàng đang chờ giao: 0</span>
                        <CheckCircle2 size={14} />
                      </div>

                      <div className="flex items-center justify-between p-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-lg">
                        <span>Số dư ví payout chưa đối soát: 0đ</span>
                        <CheckCircle2 size={14} />
                      </div>

                      <div className="flex items-center justify-between p-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-lg">
                        <span>Khiếu nại/Hoàn tiền đang xử lý: 0</span>
                        <CheckCircle2 size={14} />
                      </div>

                      <div className="p-2 bg-muted rounded-lg text-[10px] text-muted-foreground">
                        <FileText size={12} className="inline mr-1" />
                        Hồ sơ pháp lý & chứng từ kinh doanh sẽ được lưu trữ theo quy định thuế & kế toán.
                      </div>
                    </div>

                    <Button
                      onClick={() => setMerchStep(3)}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white text-xs py-2 rounded-xl font-semibold"
                    >
                      Xác nhận gửi yêu cầu đóng đối tác
                    </Button>
                  </div>
                )}

                {/* Merchant Step 3: Confirmation */}
                {merchStep === 3 && (
                  <div className="space-y-4 text-center my-auto animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-foreground">Đã gửi yêu cầu tới bộ phận Vận hành</h4>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                        Cửa hàng sẽ được chuyển sang trạng thái <strong>CLOSED/ARCHIVED</strong>. Đội ngũ LastBite Partner Support sẽ liên hệ xác nhận trong 24h làm việc.
                      </p>
                    </div>
                    <Button 
                      onClick={() => setMerchStep(1)} 
                      variant="outline"
                      className="text-xs rounded-xl px-4 py-1.5"
                    >
                      <RefreshCcw size={12} className="mr-1.5" /> Thử lại luồng đối tác
                    </Button>
                  </div>
                )}

                {/* Step indicators */}
                <div className="flex justify-center gap-1.5 pt-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 rounded-full transition-all ${
                        merchStep === s ? 'w-6 bg-primary' : 'w-1.5 bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
