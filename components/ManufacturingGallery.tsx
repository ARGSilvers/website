"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { ManufacturingImage } from "@/lib/data";

interface ManufacturingGalleryProps {
  images: ManufacturingImage[];
}

export default function ManufacturingGallery({
  images,
}: ManufacturingGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const categories = [
    { id: "all", label: "All Workshop Records" },
    { id: "machinery", label: "Machinery & Mills" },
    { id: "craftsmanship", label: "Artisans & Embossing" },
    { id: "tools", label: "Dies, Lathes & Moulds" },
    { id: "heritage", label: "Archival Heritage" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredImages.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredImages.length) % filteredImages.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredImages.length]);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 border-b border-[#DFE5EC]/60 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#0A1B33] text-white shadow-xs"
                  : "bg-white text-[#3F4B5A] hover:bg-[#F0F4F8] hover:text-[#0A1B33] border border-[#DFE5EC]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Editorial Photographic Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredImages.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxIndex(idx)}
            className="group cursor-pointer bg-white rounded-sm border border-[#DFE5EC] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C8D1DC] transition-all duration-300 flex flex-col"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full bg-[#061122] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {item.highlight && (
                <div className="absolute top-3 left-3 bg-[#0A1B33]/85 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-xs border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#C8D1DC]" />
                  <span>Workshop Record</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-white space-y-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-[#0A1B33] group-hover:text-[#162E52] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#3F4B5A] leading-relaxed font-light mt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DFE5EC]/60 flex items-center justify-between text-[11px] text-[#758394]">
                <span className="font-serif-body italic">Mukkannar Street, Kumbakonam</span>
                <span className="text-[#0A1B33] font-medium group-hover:underline">
                  Inspect
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for Workshop Photos */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Manufacturing Photo Lightbox"
          className="fixed inset-0 z-50 bg-[#061122]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <button
            onClick={() => setActiveLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null
                  ? (prev - 1 + filteredImages.length) % filteredImages.length
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
                prev !== null ? (prev + 1) % filteredImages.length : null
              );
            }}
            aria-label="Next image"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0A1B33] rounded-sm border border-[#162E52] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 min-h-[300px] sm:min-h-[450px] md:min-h-[550px] bg-[#061122] flex items-center justify-center p-4">
              <Image
                src={filteredImages[activeLightboxIndex].image}
                alt={filteredImages[activeLightboxIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>

            <div className="w-full md:w-80 p-6 md:p-8 bg-[#0A1B33] text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#162E52]">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C8D1DC] block">
                  Workshop Photographic Record
                </span>

                <h3 className="font-display text-2xl font-bold leading-tight">
                  {filteredImages[activeLightboxIndex].title}
                </h3>

                <div className="w-12 h-[1px] bg-[#C8D1DC]/40" />

                <p className="text-sm text-[#C8D1DC] leading-relaxed font-light">
                  {filteredImages[activeLightboxIndex].description}
                </p>

                <div className="pt-4 border-t border-[#162E52] space-y-2 text-xs text-[#C8D1DC]/80">
                  <p>
                    <span className="font-semibold text-white">Location:</span>{" "}
                    Mukkannar Street, Kumbakonam
                  </p>
                  <p>
                    <span className="font-semibold text-white">Focus:</span>{" "}
                    Traditional Silver Handicraft Production
                  </p>
                  <p>
                    <span className="font-semibold text-white">Heritage:</span>{" "}
                    Family-run since 1925
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#162E52]">
                <p className="text-xs text-[#C8D1DC]/60 italic font-serif-body">
                  Two operational units supporting temples and traditional jewellery dealers across South India.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
