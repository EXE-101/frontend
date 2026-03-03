'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Heart } from 'lucide-react';

const features = [
    { icon: Leaf, text: 'Giảm lãng phí thực phẩm mỗi ngày' },
    { icon: ShieldCheck, text: 'Thực phẩm chất lượng, giá hời' },
    { icon: Heart, text: 'Cộng đồng yêu bền vững' },
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#003D33]">
            {/* Full-page gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#002822] via-[#003D33] to-[#0F5C4E]" />

            {/* Decorative blurred orbs */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] rounded-full bg-teal-400/5 blur-2xl" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center px-4 py-8 sm:py-12">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link href="/" className="inline-flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center font-bold text-white text-sm border border-white/15 group-hover:bg-white/20 transition-colors duration-300">
                            LB
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight">
                            LASTBITE
                        </span>
                    </Link>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full max-w-[460px] bg-white/[0.97] dark:bg-stone-900/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/20 border border-white/20 dark:border-stone-700/50 px-8 py-10 sm:px-10 sm:py-12"
                >
                    {children}
                </motion.div>

                {/* Features below card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
                >
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <feature.icon size={16} className="text-amber-300/80" />
                            <span className="text-white/50 text-xs font-medium">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-8 text-white/25 text-xs"
                >
                    © {new Date().getFullYear()} LASTBITE. Đã đăng ký bản quyền.
                </motion.p>
            </div>
        </div>
    );
}
