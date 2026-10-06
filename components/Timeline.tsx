import React from "react";
import Image from "next/image";
import { TIMELINE_DATA } from "@/lib/data";

export default function Timeline() {
  return (
    <div className="relative">
      {/* Central spine line for desktop */}
      <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-[#DFE5EC] -translate-x-1/2" />

      <div className="space-y-16 lg:space-y-24">
        {TIMELINE_DATA.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.year}
              className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? "" : "lg:direction-rtl"
              }`}
            >
              {/* Central Year Badge on spine for desktop */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#0A1B33] text-white flex items-center justify-center font-display text-xs font-bold tracking-wider shadow-md border-4 border-[#FCFBF7]">
                  {item.year === "Today" ? "NOW" : item.year}
                </div>
              </div>

              {/* Text Content Column */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:pr-16 text-left" : "lg:pl-16 lg:order-2 text-left"
                }`}
              >
                {/* Year indicator for mobile */}
                <div className="inline-block lg:hidden px-3 py-1 bg-[#0A1B33] text-white text-xs font-display font-bold tracking-widest uppercase mb-3 rounded-xs">
                  {item.year}
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#758394] block">
                    Milestone {index + 1}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1B33] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="w-12 h-[1.5px] bg-[#0A1B33]/60 my-2" />
                  <p className="text-base text-[#3F4B5A] leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Curated highlight tags */}
                  {item.highlights && (
                    <div className="pt-3 flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs font-medium px-2.5 py-1 bg-[#F5F2EA] text-[#0A1B33] rounded-xs border border-[#EDE7DC]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Visual Archival Column */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? "lg:pl-16" : "lg:pr-16 lg:order-1"
                }`}
              >
                {item.image ? (
                  <div className="bg-white p-3 sm:p-4 rounded-sm shadow-sm border border-[#DFE5EC]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F2EA]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {item.caption && (
                      <p className="mt-3 text-xs text-[#758394] italic text-center font-serif-body">
                        {item.caption}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="p-8 rounded-sm bg-[#F5F2EA] border border-[#EDE7DC] flex flex-col justify-center items-start space-y-4">
                    <span className="font-display text-4xl sm:text-5xl font-light text-[#0A1B33]/20">
                      {item.year}
                    </span>
                    <p className="text-sm text-[#3F4B5A] italic font-serif-body">
                      Handcrafted traditions passed from father to son in Kumbakonam.
                    </p>
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
