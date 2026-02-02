import React from "react";
import { Warp } from "@paper-design/shaders-react";
import Link from 'next/link';

export default function WarpShaderHero() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={["hsl(172, 100%, 35%)", "hsl(172, 100%, 60%)", "hsl(172, 95%, 45%)", "hsl(172, 90%, 70%)"]}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-white text-5xl md:text-7xl font-sans font-light text-balance">
            Save Food, Save Money
          </h1>

          <p className="text-white/90 text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto">
            Join the movement to reduce food waste. Get amazing deals on quality food and help make a difference in your community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/how-to-collect">
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
            </Link>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
