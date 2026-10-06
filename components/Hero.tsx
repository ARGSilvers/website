import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFBF7] border-b border-[#DFE5EC]/80 pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle background heritage grid / texture */}
      <div className="absolute inset-0 bg-pattern-subtle opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Heritage Typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F0F4F8] border border-[#DFE5EC] text-xs font-semibold tracking-[0.2em] uppercase text-[#0A1B33]">
              <Sparkles className="w-3.5 h-3.5 text-[#0A1B33]" />
              <span>Since 1925 · Kumbakonam</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1B33] leading-[1.12]">
                Traditional Silver Craftsmanship,{" "}
                <span className="block font-normal italic font-serif-body text-3xl sm:text-4xl lg:text-5xl text-[#162E52] mt-2">
                  Carried Through Generations
                </span>
              </h1>

              <div className="w-16 h-[2px] bg-[#0A1B33]/80 my-4" />

              <p className="text-base sm:text-lg text-[#3F4B5A] leading-relaxed max-w-2xl font-light">
                A.R.G Silvers is a family-run silver manufacturing business from
                Kumbakonam, with a tradition of handcrafted silver work that began in
                1925.
              </p>

              <p className="text-base sm:text-lg text-[#3F4B5A] leading-relaxed max-w-2xl font-light">
                For three generations, we have continued making traditional silver
                articles for temples, jewellery businesses, dealers and customers
                across South India.
              </p>
            </div>

            {/* Credibility Marker & CTA */}
            <div className="pt-2 space-y-6">
              {/* Subtle 3-point hallmark bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs uppercase tracking-widest text-[#151C26] font-medium py-3 border-y border-[#DFE5EC]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A1B33]" />
                  100+ Years
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A1B33]" />
                  3 Generations
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A1B33]" />
                  Kumbakonam
                </span>
              </div>

              {/* Only ONE primary CTA */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A1B33] text-white text-sm font-medium tracking-wide hover:bg-[#162E52] transition-all duration-200 shadow-sm rounded-sm group focus:outline-none focus:ring-2 focus:ring-[#0A1B33]/20"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Presentation */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Masterpiece Image Container */}
              <div className="relative bg-[#061122] p-3 sm:p-4 rounded-sm shadow-xl border border-[#DFE5EC]">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A1B33]">
                  <Image
                    src="/images/products/amman-mugam-silver.png"
                    alt="Handcrafted Varalakshmi Amman silver face by A.R.G Silvers Kumbakonam"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-contain p-2 hover:scale-[1.02] transition-transform duration-700"
                  />
                  
                  {/* Subtle corner label */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#061122]/90 backdrop-blur-sm px-4 py-2.5 border border-white/10 rounded-xs flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-white tracking-wider uppercase font-display">
                        Varalakshmi Amman
                      </p>
                      <p className="text-[10px] text-[#C8D1DC] font-light">
                        Signature Handcrafted Silver Work
                      </p>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-medium text-[#C8D1DC]/80">
                      Since 1970s
                    </span>
                  </div>
                </div>
              </div>

              {/* Offset Secondary Archival Accent */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 bg-white p-2.5 rounded-sm shadow-lg border border-[#DFE5EC]">
                <div className="relative aspect-square w-full overflow-hidden bg-[#F5F2EA]">
                  <Image
                    src="/images/products/silver-kuthuvilaku.png"
                    alt="Handcrafted Silver Kuthu Villakku"
                    fill
                    sizes="176px"
                    className="object-contain p-1"
                  />
                </div>
                <p className="mt-2 text-[10px] uppercase font-semibold text-[#0A1B33] tracking-wider text-center">
                  Traditional Villakku
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
