"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductItem, PRODUCT_CATEGORIES } from "@/lib/data";

import { getProductBentoClass } from "@/lib/bentoLayout";

interface ImageGalleryProps {
  products: ProductItem[];
  initialCategory?: string;
  showFilters?: boolean;
  limit?: number;
  minimal?: boolean;
}

export default function ImageGallery({
  products,
  initialCategory = "all",
  showFilters = true,
  limit,
  minimal = true,
}: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const categoryProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const filteredProducts = limit
    ? categoryProducts.slice(0, limit)
    : categoryProducts;

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
      {showFilters && (
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 border-b border-[#E9D8BE] no-scrollbar">
          {PRODUCT_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#17243B] text-[#C49A43] shadow-sm border border-[#C49A43]/40"
                    : "bg-transparent text-[#292824] hover:text-[#17243B] border border-[#E9D8BE]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Adaptive Bento Mosaic Grid - Sizes based on actual image aspect ratio for optimal viewing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] sm:auto-rows-[320px] lg:auto-rows-[340px] grid-flow-dense gap-4 sm:gap-5 lg:gap-6">
        {filteredProducts.map((product, idx) => {
          const spanClass = getProductBentoClass(
            product.aspectRatio,
            idx,
            filteredProducts.length
          );
          return (
            <article
              key={product.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className={`group cursor-pointer relative w-full h-full overflow-hidden rounded-xs bg-white border border-[#E9D8BE] hover:border-[#C49A43] transition-all duration-300 shadow-xs hover:shadow-2xl flex items-center justify-center ${spanClass}`}
            >
              {/* Silver Product Image - Generous viewing stage */}
              <div className="relative w-full h-full p-3 sm:p-4 pb-14 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain bg-[#060b16] p-1 pb-2 transition-transform duration-500 group-hover:scale-106 drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Quick Zoom Inspect Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <span className="inline-flex p-2 rounded-full bg-[#17243B]/85 text-[#C49A43] backdrop-blur-xs shadow-md border border-[#C49A43]/30">
                  <ZoomIn className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Product Name & Category INSIDE Image - Bottom Gradient Banner */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101A2B]/95 via-[#101A2B]/70 to-transparent pt-10 pb-3 px-3 sm:px-4 text-center z-10 transition-all duration-300">
                <span className="text-[10px] font-semibold text-[#C49A43] uppercase tracking-wider block opacity-95">
                  {product.categoryLabel}
                </span>
                <h3 className="font-serif-heading text-sm sm:text-base font-normal text-[#F5EADF] group-hover:text-[#C49A43] transition-colors leading-snug drop-shadow-sm mt-0.5">
                  {product.name}
                </h3>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox Modal with Full-Screen View and Controls */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Product Image Lightbox"
          className="fixed inset-0 z-50 bg-[#101A2B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null
                  ? (prev - 1 + filteredProducts.length) % filteredProducts.length
                  : null
              );
            }}
            aria-label="Previous Image"
            className="absolute left-4 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % filteredProducts.length : null
              );
            }}
            aria-label="Next Image"
            className="absolute right-4 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Central Modal Content */}
          <div
            className="max-w-3xl w-full bg-[#17243B] rounded-xs border border-white/10 overflow-hidden shadow-2xl flex flex-col text-[#F5EADF]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full bg-[#101A2B] p-6 flex items-center justify-center">
              <Image
                src={filteredProducts[activeLightboxIndex].image}
                alt={filteredProducts[activeLightboxIndex].name}
                fill
                sizes="800px"
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 bg-[#17243B] border-t border-white/10 space-y-2">
              <span className="text-[11px] font-semibold text-[#C49A43] uppercase tracking-wider block">
                {filteredProducts[activeLightboxIndex].categoryLabel}
              </span>
              <h3 className="font-serif-heading text-2xl font-normal text-[#F5EADF]">
                {filteredProducts[activeLightboxIndex].name}
              </h3>
              <p className="text-sm text-[#C5C8CC] leading-relaxed font-light">
                {filteredProducts[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
