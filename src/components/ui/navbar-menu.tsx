"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// SỬA LỖI 1: Thêm 'as const' để TypeScript hiểu đây là các giá trị cố định (read-only),
// hoặc định nghĩa kiểu Transition rõ ràng.
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const;

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative h-full flex items-center">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white/90 hover:text-white font-medium px-4 py-2"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          // SỬA LỖI 3: Thêm 'z-50' để dropdown luôn nổi lên trên các thành phần khác
          className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 z-50"
        >
          {active === item && (
            <div className="bg-white dark:bg-neutral-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.1] shadow-xl">
              <motion.div
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center space-x-2 px-4 py-2"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-4 group p-2 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg transition-colors">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-sm object-cover h-[70px] w-[140px]"
      />
      <div>
        <h4 className="text-base font-bold mb-1 text-black dark:text-white group-hover:text-[#003D33] transition-colors">
          {title}
        </h4>
        <p className="text-neutral-500 text-xs max-w-[10rem] leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

// SỬA LỖI 2: Thay 'any' bằng React.ComponentProps<typeof Link>
// Điều này tự động lấy tất cả các props hợp lệ của thẻ Link (href, prefetch, v.v.)
export const HoveredLink = ({ 
  children, 
  ...rest 
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="text-neutral-600 dark:text-neutral-300 hover:text-[#003D33] font-medium transition-colors block py-1"
    >
      {children}
    </Link>
  );
};