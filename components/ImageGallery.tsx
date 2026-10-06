"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { ProductItem, PRODUCT_CATEGORIES } from "@/lib/data";

interface ImageGalleryProps {
  products: ProductItem[];
  initialCategory?: string;
}

export default function ImageGallery({
  products,
  initialCategory = "all",
}: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredProducts.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredProducts.length) % filteredProducts.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredProducts.length]);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 border-b border-[#DFE5EC]/60 no-scrollbar">
        {PRODUCT_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#0A1B33] text-white shadow-xs"
                  : "bg-white text-[#3F4B5A] hover:bg-[#F0F4F8] hover:text-[#0A1B33] border border-[#DFE5EC]"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredProducts.map((product, idx) => (
          <article
            key={product.id}
            onClick={() => setActiveLightboxIndex(idx)}
            className="group cursor-pointer bg-white rounded-sm border border-[#DFE5EC] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C8D1DC] transition-all duration-300 flex flex-col"
          >
            {/* Visual Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#071526] p-4 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle overlay hint */}
              <div className="absolute inset-0 bg-[#0A1B33]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-2.5 rounded-full bg-white/90 text-[#0A1B33] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              {/* Category pill */}
              <div className="absolute top-3 left-3 bg-[#061122]/80 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/10 text-[10px] tracking-widest uppercase text-white/90">
                {product.categoryLabel}
              </div>
            </div>

            {/* Editorial Caption - NOT e-commerce */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white border-t border-[#DFE5EC]/60">
              <div className="space-y-1.5">
                <h3 className="font-display text-base font-semibold text-[#0A1B33] group-hover:text-[#162E52] transition-colors leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-[#3F4B5A] leading-relaxed font-light line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DFE5EC]/40 flex items-center justify-between text-[11px] text-[#758394]">
                <span className="font-serif-body italic">Handmade Silver Article</span>
                <span className="text-[#0A1B33] group-hover:underline font-medium">
                  View Detail
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Product Image Lightbox"
          className="fixed inset-0 z-50 bg-[#061122]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Previous / Next buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null
                  ? (prev - 1 + filteredProducts.length) % filteredProducts.length
                  : null
              );
            }}
            aria-label="Previous image"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredProducts.length : null
              );
            }}
            aria-label="Next image"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Lightbox Dialog Content */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0A1B33] rounded-sm border border-[#162E52] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image section */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[450px] md:min-h-[550px] bg-[#061122] flex items-center justify-center p-6">
              <Image
                src={filteredProducts[activeLightboxIndex].image}
                alt={filteredProducts[activeLightboxIndex].name}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain p-4"
                priority
              />
            </div>

            {/* Sidebar information */}
            <div className="w-full md:w-80 p-6 md:p-8 bg-[#0A1B33] text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#162E52]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8D1DC]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8D1DC]" />
                  <span>{filteredProducts[activeLightboxIndex].categoryLabel}</span>
                </div>

                <h3 className="font-display text-2xl font-bold leading-tight">
                  {filteredProducts[activeLightboxIndex].name}
                </h3>

                <div className="w-12 h-[1px] bg-[#C8D1DC]/40" />

                <p className="text-sm text-[#C8D1DC] leading-relaxed font-light">
                  {filteredProducts[activeLightboxIndex].description}
                </p>

                <div className="pt-4 border-t border-[#162E52] space-y-2 text-xs text-[#C8D1DC]/80">
                  <p>
                    <span className="font-semibold text-white">Origin:</span> Kumbakonam, Tamil Nadu
                  </p>
                  <p>
                    <span className="font-semibold text-white">Craft:</span> Handcrafted Traditional Silver
                  </p>
                  <p>
                    <span className="font-semibold text-white">Tradition:</span> Since 1925
                  </p>
                </div>
              </div>

              {/* Enquiry reminder note */}
              <div className="mt-8 pt-4 border-t border-[#162E52]">
                <p className="text-xs text-[#C8D1DC]/60 italic font-serif-body">
                  For temple commissions or custom specifications, please contact our workshop directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
