import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-secondary/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-bold text-lg uppercase tracking-wider">
                The App
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                How to Pick Up Too Good To Go?
              </h1>
            </div>

            <p className="text-foreground/80 text-lg leading-relaxed max-w-md">
              Surprise Bags are picked up in-store within the time window specified in the item listing in the Too Good To Go app. When you show the app, and swipe the in-app slider as proof of your reservation, the store staff will hand you your Surprise Bag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-2 font-semibold flex items-center gap-2 text-base h-auto">
                Download The App
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          {/* Right Image - Phone Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Phone Frame */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                {/* Phone Notch */}
                <div className="h-6 bg-gray-900 rounded-b-2xl mx-auto w-40" />

                {/* Phone Screen */}
                <div className="bg-background aspect-square overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-primary to-primary/80 flex items-center justify-center p-6">
                    <div className="space-y-4 w-full">
                      {/* App Content Placeholder */}
                      <div className="bg-white/20 rounded-2xl h-32 animate-pulse" />
                      <div className="bg-white/20 rounded-2xl h-32 animate-pulse" />
                      <div className="bg-white/20 rounded-2xl h-20 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Phone Bottom */}
                <div className="bg-agray-900 h-2" />
              </div>

              {/* Decorative Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-center text-sm shadow-lg">
                4.8 ⭐
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
