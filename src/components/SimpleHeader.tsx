'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown, User, LogOut, History } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- 1. Cấu hình Menu (Giống mẫu bạn đưa) ---
const NAV_ITEMS = [
  {
    name: 'Trang chủ',
    link: '/',
  },
  {
    name: 'Cách nhận túi',
    link: '/how-to-collect',
  },
  {
    name: 'Dịch vụ', // Ví dụ menu có submenu
    link: '#',
    submenu: [
      { name: 'Cho đối tác', desc: 'Kết nối hợp tác bền vững', icon: '/business.png', href: '/business' },
      { name: 'Cơ hội nghề nghiệp', desc: 'Gia nhập đội ngũ LASTBITE', icon: '/careers.png', href: '/careers' },
    ]
  },
];

// Giả lập hook lấy user (Bạn thay bằng hook thật của bạn sau này)
const useAuth = () => {
  // Đổi thành true để test giao diện đã đăng nhập
  const isLoggedIn = false; 
  const user = { name: 'Minh Hieu', role: 'Thành viên' };
  return { isLoggedIn, user };
};

export function SimpleHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  
  const { isLoggedIn, user } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  // Click ra ngoài để đóng User Menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userMenuRef]);

  return (
    <motion.header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-3"
    >
      {/* Desktop Navigation */}
      <motion.nav
        animate={{
          backdropFilter: visible ? 'blur(10px)' : 'none',
          boxShadow: visible
            ? '0 0 24px rgba(92, 64, 51, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(92, 64, 51, 0.04), 0 0 4px rgba(92, 64, 51, 0.08), 0 16px 68px rgba(79, 70, 65, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
            : 'none',
          width: visible ? '60%' : '100%',
          y: visible ? 20 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: '800px',
        }}
        className={cn(
          'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 py-3 lg:flex transition-colors duration-300',
          visible 
            ? 'bg-amber-50/90 dark:bg-stone-900/90 border border-amber-200/50 dark:border-stone-700/50' 
            : 'bg-transparent'
        )}
      >
        {/* --- LOGO --- */}
        <Link href="/" className="font-bold text-2xl flex items-center gap-2 relative z-20">
          <span className="text-emerald-700 dark:text-emerald-700">LASTBITE</span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="relative group"
              onMouseEnter={() => setActiveSubmenu(idx)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link 
                href={item.link} 
                className="flex items-center gap-1 text-stone-700 hover:text-emerald-700 dark:text-stone-300 dark:hover:text-emerald-500 font-medium transition py-2 px-4 rounded-full hover:bg-amber-100/50 dark:hover:bg-stone-800/50"
              >
                {item.name}
                {item.submenu && <ChevronDown size={16} />}
              </Link>

              {/* Submenu Dropdown */}
              {item.submenu && activeSubmenu === idx && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-amber-50 dark:bg-stone-800 rounded-xl shadow-xl border border-amber-200 dark:border-stone-700 p-2 overflow-hidden"
                  >
                    {item.submenu.map((sub, subIdx) => (
                      <Link 
                        key={subIdx} 
                        href={sub.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-amber-100 dark:hover:bg-stone-700 transition"
                      >
                        {/* Placeholder Icon */}
                        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-md flex-shrink-0" /> 
                        <div>
                          <p className="font-medium text-sm text-stone-900 dark:text-amber-50">{sub.name}</p>
                          <p className="text-xs text-stone-600 dark:text-stone-400">{sub.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- RIGHT SIDE (AUTH BUTTONS) --- */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link 
                href="/auth/login" 
                className="text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-amber-50 font-medium px-4 py-2 rounded-full hover:bg-amber-100/50 dark:hover:bg-stone-800/50 transition"
              >
                Đăng nhập
              </Link>
              <Link 
                href="/download" 
                className="px-5 py-2 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition shadow-lg shadow-emerald-700/20 dark:shadow-emerald-500/20"
              >
                Tạo tài khoản
              </Link>
            </>
          ) : (
            // User Dropdown Area
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 p-1 pr-3 rounded-full border border-amber-200 dark:border-stone-700 hover:bg-amber-100/50 dark:hover:bg-stone-800/50 transition"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-800 dark:text-emerald-400 font-bold">
                  {user.name.charAt(0)}
                </div>
                <ChevronDown size={16} className="text-stone-600 dark:text-stone-400" />
              </button>

              {/* User Dropdown Content */}
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-60 bg-amber-50 dark:bg-stone-800 rounded-xl shadow-xl border border-amber-200 dark:border-stone-700 p-2"
                  >
                    <div className="px-3 py-3 border-b border-amber-200 dark:border-stone-700 mb-2">
                      <p className="font-semibold text-stone-900 dark:text-amber-50">{user.name}</p>
                      <p className="text-xs text-stone-600 dark:text-stone-400">{user.role}</p>
                    </div>
                    
                    <Link href="/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-100 dark:hover:bg-stone-700 transition text-sm text-stone-700 dark:text-stone-300">
                      <User size={16} /> Hồ sơ của tôi
                    </Link>
                    <Link href="/history" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-100 dark:hover:bg-stone-700 transition text-sm text-stone-700 dark:text-stone-300">
                      <History size={16} /> Lịch sử
                    </Link>
                    
                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-700 dark:text-red-400 transition text-sm mt-1">
                      <LogOut size={16} /> Đăng xuất
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? 'blur(10px)' : 'none',
          boxShadow: visible
            ? '0 0 24px rgba(92, 64, 51, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(92, 64, 51, 0.04), 0 0 4px rgba(92, 64, 51, 0.08), 0 16px 68px rgba(79, 70, 65, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
            : 'none',
          width: visible ? '90%' : '100%',
          paddingRight: visible ? '12px' : '0px',
          paddingLeft: visible ? '12px' : '0px',
          borderRadius: visible ? '16px' : '2rem',
          y: visible ? 20 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-3 lg:hidden transition-colors duration-300',
          visible 
            ? 'bg-amber-50/90 dark:bg-stone-900/90 border border-amber-200/50 dark:border-stone-700/50' 
            : 'bg-transparent'
        )}
      >
        <div className="flex w-full flex-row items-center justify-between">
          {/* --- LOGO --- */}
          <Link href="/" className="font-bold text-xl text-emerald-700 dark:text-emerald-500 flex items-center gap-2 z-20">
            <span>LASTBITE</span>
          </Link>

          {/* --- MOBILE TOGGLE --- */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-stone-700 dark:text-amber-50 p-2 z-20"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MOBILE MENU --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden"
            >
              <div className="bg-amber-50 dark:bg-stone-900 rounded-lg mt-4 px-4 py-6 space-y-4 shadow-xl border border-amber-200 dark:border-stone-800">
                {NAV_ITEMS.map((item, idx) => (
                  <div key={idx}>
                    <Link 
                      href={item.link} 
                      className="block text-lg font-medium text-stone-800 dark:text-amber-50 py-2 hover:text-emerald-700 dark:hover:text-emerald-500 transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* Mobile Submenu render simple list */}
                    {item.submenu && (
                      <div className="pl-4 border-l-2 border-amber-200 dark:border-stone-700 mt-2 space-y-2">
                        {item.submenu.map((sub, sIdx) => (
                          <Link 
                            key={sIdx} 
                            href={sub.href} 
                            className="block text-stone-600 dark:text-stone-400 py-1 hover:text-emerald-700 dark:hover:text-emerald-500 transition"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-6 border-t border-amber-200 dark:border-stone-800">
                  {!isLoggedIn ? (
                    <div className="flex flex-col gap-3">
                      <Link 
                        href="/auth/login" 
                        className="w-full text-center py-3 rounded-lg bg-amber-100 dark:bg-stone-800 font-medium text-stone-800 dark:text-amber-50 hover:bg-amber-200 dark:hover:bg-stone-700 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Đăng nhập
                      </Link>
                      <Link
                        href="/download"
                        className="w-full text-center py-3 bg-emerald-700 text-white font-medium rounded-lg shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Tạo tài khoản
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-800 dark:text-emerald-400 font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-stone-900 dark:text-amber-50">{user.name}</p>
                          <p className="text-xs text-stone-600 dark:text-stone-400">Xem hồ sơ</p>
                        </div>
                      </div>
                      <Link 
                        href="/profile"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-100 dark:hover:bg-stone-800 transition text-stone-700 dark:text-stone-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User size={16} /> Hồ sơ của tôi
                      </Link>
                      <Link 
                        href="/history"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-amber-100 dark:hover:bg-stone-800 transition text-stone-700 dark:text-stone-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <History size={16} /> Lịch sử
                      </Link>
                      <button 
                        className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-700 dark:text-red-400 transition font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <LogOut size={16} /> Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}