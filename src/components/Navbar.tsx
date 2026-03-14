'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/85 border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center font-bold text-primary text-sm">
              LB
            </div>
            <span className="text-primary-foreground font-bold text-lg hidden sm:inline">
              LASTBITE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-primary-foreground hover:opacity-80 transition text-sm font-medium">
              Trang chủ
            </Link>
            
            {/* Guide Dropdown */}
            <div className="relative group py-4">
              <button className="flex items-center gap-1 text-primary-foreground hover:opacity-80 transition text-sm font-medium focus:outline-none">
                Hướng dẫn
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-56 -mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-xl shadow-xl border border-stone-100 p-2 flex flex-col gap-1">
                  <Link href="/guide/how-it-works" className="px-4 py-2 text-sm text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                    Cách ứng dụng hoạt động
                  </Link>
                  <Link href="/guide/how-to-collect" className="px-4 py-2 text-sm text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                    Hướng dẫn nhận túi
                  </Link>
                </div>
              </div>
            </div>

            {/* Business Dropdown */}
            <div className="relative group py-4">
              <button className="flex items-center gap-1 text-primary-foreground hover:opacity-80 transition text-sm font-medium focus:outline-none">
                Giải pháp Doanh nghiệp
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-64 -mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-xl shadow-xl border border-stone-100 p-2 flex flex-col gap-1">
                  <Link href="/business/marketplace" className="px-4 py-2 text-sm text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                    Marketplace Surprise Bags
                  </Link>
                  <Link href="/business/platform" className="px-4 py-2 text-sm text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                    Nền tảng quản lý
                  </Link>
                  <Link href="/business/date-labelling" className="px-4 py-2 text-sm text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors">
                    Sáng kiến dán nhãn
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-primary-foreground hover:opacity-80 transition text-sm font-medium">
              Về chúng tôi
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login" className="text-primary-foreground hover:opacity-80 font-medium text-sm transition transition-colors">
              Đăng nhập
            </Link>
            <Link href="/auth/register" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-6 py-2 text-sm font-bold transition-colors">
              Tham gia ngay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 pt-4 border-t border-primary-foreground/10">
            <Link href="/" className="block text-primary-foreground/90 hover:text-primary-foreground py-2 font-medium">
              Trang chủ
            </Link>
            
            <div className="space-y-2">
              <span className="block text-primary-foreground/60 text-xs font-bold uppercase tracking-wider mb-2">Hướng dẫn</span>
              <div className="pl-4 space-y-2 border-l border-primary-foreground/20">
                <Link href="/guide/how-it-works" className="block text-primary-foreground/90 hover:text-primary-foreground py-1 text-sm">
                  Cách ứng dụng hoạt động
                </Link>
                <Link href="/guide/how-to-collect" className="block text-primary-foreground/90 hover:text-primary-foreground py-1 text-sm">
                  Hướng dẫn nhận túi
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-primary-foreground/60 text-xs font-bold uppercase tracking-wider mb-2 mt-4">Giải pháp Doanh nghiệp</span>
              <div className="pl-4 space-y-2 border-l border-primary-foreground/20">
                <Link href="/business/marketplace" className="block text-primary-foreground/90 hover:text-primary-foreground py-1 text-sm">
                  Marketplace Surprise Bags
                </Link>
                <Link href="/business/platform" className="block text-primary-foreground/90 hover:text-primary-foreground py-1 text-sm">
                  Nền tảng quản lý
                </Link>
                <Link href="/business/date-labelling" className="block text-primary-foreground/90 hover:text-primary-foreground py-1 text-sm">
                  Sáng kiến dán nhãn
                </Link>
              </div>
            </div>

            <Link href="/about" className="block text-primary-foreground/90 hover:text-primary-foreground py-2 font-medium mt-4">
              Về chúng tôi
            </Link>

            <div className="pt-6 flex flex-col gap-3">
              <Link href="/auth/login" className="w-full text-center py-2.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors">
                Đăng nhập
              </Link>
              <Link href="/auth/register" className="w-full text-center py-2.5 rounded-lg bg-primary-foreground text-primary font-bold hover:bg-white transition-colors">
                Tham gia ngay
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
