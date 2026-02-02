'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function SimpleHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-white">
          Too Good To Go
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/90 hover:text-white transition">
            Home
          </Link>
          <Link href="/how-to-collect" className="text-white/90 hover:text-white transition">
            How to Collect
          </Link>
          <button className="px-6 py-2 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition">
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-3">
          <Link href="/" className="block text-white/90 hover:text-white transition py-2">
            Home
          </Link>
          <Link href="/how-to-collect" className="block text-white/90 hover:text-white transition py-2">
            How to Collect
          </Link>
          <button className="w-full px-6 py-2 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition">
            Download App
          </button>
        </div>
      )}
    </header>
  );
}
