"use client";

import React from "react";
import Image from "next/image";
import { TIMELINE_DATA } from "@/lib/data";

export default function Timeline() {
  return (
    <div className="relative">
      {/* Central spine line for desktop with mustard accent */}
      <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-[2px] bg-[#E9D8BE] -translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C49A43] via-[#C49A43]/50 to-[#C49A43]" />
      </div>

      <div className="space-y-16 lg:space-y-28">
        {TIMELINE_DATA.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.year}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Central Year Marker on desktop spine */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#17243B] text-[#C49A43] flex items-center justify-center font-serif-heading text-lg font-bold shadow-md border-2 border-[#C49A43]">
                  {item.year === "Today" ? "TODAY" : item.year}
                </div>
              </div>

              {/* Text Editorial Content */}
              <div
                className={`lg:col-span-6 ${
                  isEven
                    ? "lg:pr-14 text-left"
                    : "lg:pl-14 lg:order-2 text-left"
                }`}
              >
                {/* Year Badge for mobile */}
                <div className="inline-block lg:hidden px-3.5 py-1 bg-[#17243B] text-[#C49A43] text-xs font-semibold tracking-widest uppercase mb-3 rounded-xs border border-[#C49A43]/40">
                  {item.year}
                </div>

                <div className="space-y-3">
                  <div className="hidden lg:block">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#C49A43] uppercase">
                      Milestone {index + 1} · {item.year}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-[#17243B] tracking-tight">
                    {item.title}
                  </h3>

                  <div className="w-12 h-[1.5px] bg-[#C49A43] my-2" />

                  <p className="text-base sm:text-lg text-[#292824]/85 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Visual Archival Column */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:pl-14" : "lg:pr-14 lg:order-1"
                }`}
              >
                {item.image && (
                  <div className="bg-white p-3 sm:p-4 rounded-xs shadow-md border border-[#E9D8BE]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101A2B]/5 rounded-xs">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-contain p-2 hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
