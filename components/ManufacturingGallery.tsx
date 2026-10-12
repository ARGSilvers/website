"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ManufacturingImage } from "@/lib/data";

import { getManufacturingBentoClass } from "@/lib/bentoLayout";

interface ManufacturingGalleryProps {
  images: ManufacturingImage[];
}

export default function ManufacturingGallery({
  images,
}: ManufacturingGalleryProps) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, images.length]);

  return (
    <div>
      {/* Editorial Mosaic Workshop Gallery - Dynamic Bento Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] sm:auto-rows-[320px] lg:auto-rows-[340px] grid-flow-dense gap-4 sm:gap-5 lg:gap-6">
        {images.map((item, idx) => {
          const spanClass = getManufacturingBentoClass(idx, images.length, item.highlight);
          return (
            <article
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className={`group cursor-pointer relative w-full h-full overflow-hidden rounded-xs bg-[#101A2B] border border-[#E9D8BE]/80 hover:border-[#C49A43] transition-all duration-300 shadow-xs hover:shadow-2xl ${spanClass}`}
            >
              {/* Full-bleed Workshop Photograph */}
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Seamless Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/95 via-[#101A2B]/40 to-black/20 opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Inspect Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                <span className="inline-flex p-2 rounded-full bg-[#17243B]/85 text-[#C49A43] backdrop-blur-xs shadow-md border border-[#C49A43]/30">
                  <ZoomIn className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Details and Title INSIDE Image at Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 transition-all duration-300">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-3 h-[1.5px] bg-[#C49A43]" />
                  <span className="text-[10px] font-semibold text-[#C49A43] uppercase tracking-widest">
                    {item.caption}
                  </span>
                </div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-normal text-[#F5EADF] group-hover:text-[#C49A43] transition-colors leading-snug mb-1 drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox for Workshop Photos */}
      {activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Manufacturing Photo Lightbox"
          className="fixed inset-0 z-50 bg-[#101A2B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <button
            onClick={() => setActiveLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + images.length) % images.length : null
              );
            }}
            aria-label="Previous Image"
            className="absolute left-4 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % images.length : null
              );
            }}
            aria-label="Next Image"
            className="absolute right-4 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl w-full bg-[#17243B] rounded-xs border border-white/10 overflow-hidden shadow-2xl flex flex-col text-[#F5EADF]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-[#101A2B] flex items-center justify-center">
              <Image
                src={images[activeLightboxIndex].image}
                alt={images[activeLightboxIndex].caption}
                fill
                sizes="1000px"
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-[#17243B] border-t border-white/10 space-y-1">
              <p className="text-xs uppercase tracking-widest text-[#C49A43] font-semibold">
                {images[activeLightboxIndex].caption}
              </p>
              <p className="text-sm text-[#C5C8CC] leading-relaxed font-light">
                {images[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
