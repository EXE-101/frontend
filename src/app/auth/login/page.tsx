'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: implement actual login logic
        setTimeout(() => setIsLoading(false), 2000);
    };

    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <motion.div initial="initial" animate="animate" className="space-y-7">
            {/* Back to Home */}
            <motion.div
                variants={fadeUp}
                transition={{ duration: 0.4 }}
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-sm text-stone-400 dark:text-stone-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200 group"
                >
                    <ArrowLeft
                        size={16}
                        className="group-hover:-translate-x-0.5 transition-transform"
                    />
                    Trang chủ
                </Link>
            </motion.div>

            {/* Heading */}
            <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="space-y-2 text-center"
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-amber-50 font-display">
                    Chào mừng trở lại! 👋
                </h1>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                    Đăng nhập để tiếp tục cứu phần ngon cùng LASTBITE
                </p>
            </motion.div>

            {/* Social Login */}
            <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3"
            >
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-all duration-200"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Tiếp tục với Google
                </button>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#1877F2] rounded-2xl text-sm font-medium text-white hover:bg-[#166FE5] transition-all duration-200"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Tiếp tục với Facebook
                </button>
            </motion.div>

            {/* Divider */}
            <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative"
            >
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone-200 dark:border-stone-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-stone-900 px-4 text-stone-400 dark:text-stone-500 font-medium">
                        hoặc
                    </span>
                </div>
            </motion.div>

            {/* Login Form */}
            <motion.form
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                {/* Email */}
                <div className="space-y-1.5">
                    <label
                        htmlFor="login-email"
                        className="text-sm font-medium text-stone-700 dark:text-stone-300"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-500"
                        />
                        <input
                            id="login-email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full pl-11 pr-4 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl text-sm text-stone-900 dark:text-amber-50 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 dark:focus:ring-emerald-500/20 dark:focus:border-emerald-500 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="login-password"
                            className="text-sm font-medium text-stone-700 dark:text-stone-300"
                        >
                            Mật khẩu
                        </label>
                        <Link
                            href="#"
                            className="text-xs text-emerald-700 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-400 font-medium transition-colors"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <div className="relative">
                        <Lock
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-500"
                        />
                        <input
                            id="login-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            required
                            className="w-full pl-11 pr-12 py-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl text-sm text-stone-900 dark:text-amber-50 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 dark:focus:ring-emerald-500/20 dark:focus:border-emerald-500 transition-all duration-200"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2.5">
                    <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 rounded-md border-stone-300 dark:border-stone-600 text-emerald-700 focus:ring-emerald-600/20 bg-stone-50 dark:bg-stone-800 cursor-pointer accent-emerald-700"
                    />
                    <label
                        htmlFor="remember"
                        className="text-sm text-stone-500 dark:text-stone-400 cursor-pointer select-none"
                    >
                        Ghi nhớ đăng nhập
                    </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-700 text-white font-semibold rounded-2xl hover:bg-emerald-800 active:bg-emerald-900 transition-all duration-200 shadow-lg shadow-emerald-700/25 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                    {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            Đăng nhập
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-0.5 transition-transform"
                            />
                        </>
                    )}
                </button>
            </motion.form>

            {/* Footer */}
            <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-sm text-stone-500 dark:text-stone-400"
            >
                Chưa có tài khoản?{' '}
                <Link
                    href="/auth/register"
                    className="text-emerald-700 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-400 font-semibold transition-colors"
                >
                    Đăng ký ngay
                </Link>
            </motion.p>
        </motion.div>
    );
}
