'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
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
              TG
            </div>
            <span className="text-primary-foreground font-bold text-lg hidden sm:inline">
              Too Good To Go
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-primary-foreground hover:opacity-80 transition text-sm font-medium">
              THE APP
            </Link>
            <Link href="#" className="text-primary-foreground hover:opacity-80 transition text-sm font-medium">
              BUSINESS SOLUTIONS
            </Link>
            <Link href="#" className="text-primary-foreground hover:opacity-80 transition text-sm font-medium">
              ABOUT US
            </Link>
            <Link href="#" className="text-primary-foreground hover:opacity-80 transition text-sm font-medium">
              ABOUT FOOD WASTE
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              Login
            </Button>
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-6">
              Sign Up
            </Button>
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
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#" className="block text-primary-foreground hover:opacity-80 py-2">
              THE APP
            </Link>
            <Link href="#" className="block text-primary-foreground hover:opacity-80 py-2">
              BUSINESS SOLUTIONS
            </Link>
            <Link href="#" className="block text-primary-foreground hover:opacity-80 py-2">
              ABOUT US
            </Link>
            <Link href="#" className="block text-primary-foreground hover:opacity-80 py-2">
              ABOUT FOOD WASTE
            </Link>
            <div className="pt-4 flex gap-2">
              <Button variant="ghost" className="flex-1 text-primary-foreground">
                Login
              </Button>
              <Button className="flex-1 bg-primary-foreground text-primary">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
