"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById("about-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#17243B] text-[#F5EADF]">
      {/* Background Ambience: Velvet Blue texture and subtle radial glow */}
      <div className="absolute inset-0 bg-velvet-texture pointer-events-none" />

      {/* Desktop Background: Custom ARG Silvers Wide Velvet Showcase */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="ARG Silvers Handcrafted Temple & Heritage Silverware"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />
        {/* Subtle gradient vignette to blend edges and maintain central text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#101A2B]/60 via-[#101A2B]/30 to-[#101A2B]/70" />
      </div>

      {/* Mobile Background: Handcrafted Silver Kuthu Vilakku seamlessly covering the vertical screen */}
      <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/products/thirukaveri-silver.png"
          alt="Handcrafted Silver Kuthu Vilakku"
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom"
        />
        {/* Deep blue velvet tint overlay for crystal-clear text readability on mobile */}
        <div className="absolute inset-0 bg-[#101A2B]/65 bg-gradient-to-b from-[#101A2B]/80 via-[#101A2B]/50 to-[#101A2B]/85" />
      </div>

      {/* Central Hero Composition */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-12 flex-1 flex flex-col justify-center items-center text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#101A2B]/60 border border-[#C49A43]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C49A43]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#C49A43]">
            TRADITIONAL SILVER CRAFTSMANSHIP · SINCE 1925
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C49A43]" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-[#F5EADF] leading-[1.08] max-w-4xl">
          A Tradition in Silver, Carried Through Generations.
        </h1>

        {/* Subtle Mustard Accent Line */}
        <div className="w-20 h-[1.5px] bg-[#C49A43]/60 my-6 sm:my-8" />

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#F5EADF]/85 leading-relaxed max-w-2xl font-light">
          Our story began in Kumbakonam in 1925. Three generations later, we continue to make traditional silver products for temples, jewellery businesses, dealers and customers across South India.
        </p>

        {/* Primary and ONLY Prominent Homepage CTA (Horizontally Centred) */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-9 py-4 bg-[#C49A43] hover:bg-[#d4a84e] text-[#101A2B] text-xs font-semibold tracking-[0.18em] uppercase rounded-xs transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C49A43]/40"
          >
            <span>CONTACT US</span>
          </Link>
        </div>

        {/* Supporting Heritage Line */}
        <div className="mt-10 sm:mt-12 text-xs sm:text-sm text-[#C5C8CC] font-light tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-4 border-t border-white/10 pt-6">
          <span>100+ Years of Craftsmanship</span>
          <span className="text-[#C49A43]/60">|</span>
          <span>Three Generations</span>
          <span className="text-[#C49A43]/60">|</span>
          <span>Kumbakonam, Tamil Nadu</span>
        </div>
      </div>

      {/* Small Scroll Indicator at the bottom */}
      <div className="relative z-10 pb-6 text-center">
        <button
          onClick={scrollToNext}
          aria-label="Scroll to story section"
          className="inline-flex flex-col items-center gap-1.5 text-[11px] text-[#C5C8CC]/70 hover:text-[#C49A43] transition-colors focus:outline-none"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
