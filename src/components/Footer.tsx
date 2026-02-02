import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center font-bold text-primary text-sm">
                TG
              </div>
              <span className="font-bold text-lg">Too Good To Go</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Making it easy for restaurants, bakeries, and stores to sell surplus food at a profit.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">Company</h4>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition">
              About Us
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Our Impact
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Careers
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Blog
            </Link>
          </div>

          {/* Business Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">For Business</h4>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition">
              Partner With Us
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              For Retailers
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Resources
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Solutions
            </Link>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base mb-4">Legal</h4>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Cookie Policy
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition block">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8 space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold">Follow Us</span>
            <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm text-center">
              © {new Date().getFullYear()} Too Good To Go. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
