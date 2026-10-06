import React from "react";
import type { Metadata } from "next";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ManufacturingGallery from "@/components/ManufacturingGallery";
import ContactStrip from "@/components/ContactStrip";
import { MANUFACTURING_GALLERY, COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Manufacturing Units | Kumbakonam Silver Workshops",
  description:
    "A photographic record of A.R.G Silvers two manufacturing units on Mukkannar Street in Kumbakonam, Tamil Nadu. Traditional spinning lathes, sheet rolling mills, stamping presses, and three generations of silver artisanal knowledge.",
  openGraph: {
    title: "Our Manufacturing Units | A.R.G SILVERS Kumbakonam",
    description:
      "Our work continues from Kumbakonam, where our family has been making traditional silver products for generations.",
    images: ["/images/manufacturing/workshop-overview.jpeg"],
  },
};

export default function ManufacturingUnitPage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="bg-[#FCFBF7] pt-12 pb-16 lg:pt-18 lg:pb-20 border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A1B33] block">
              Workshop &amp; Production Heritage
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1B33] leading-tight">
              Our Manufacturing Units
            </h1>
            <div className="w-16 h-[2px] bg-[#0A1B33]/80 my-3" />
            <p className="text-lg sm:text-xl text-[#3F4B5A] leading-relaxed font-light">
              Our work continues from Kumbakonam, where our family has been making
              traditional silver products for generations.
            </p>
            <p className="text-base sm:text-lg text-[#3F4B5A] leading-relaxed font-light">
              Today, we have two manufacturing units supporting our traditional
              silver work.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PHOTOGRAPHIC EDITORIAL GALLERY */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5] border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#758394] font-semibold block">
                Photographic Record
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1B33] mt-1">
                Inside the Kumbakonam Workshops
              </h2>
            </div>
            <p className="text-xs text-[#758394] italic font-serif-body">
              An authentic glimpse into the machines, tools, moulds, and family craftsmen.
            </p>
          </div>

          <ManufacturingGallery images={MANUFACTURING_GALLERY} />
        </div>
      </section>

      {/* 3. OUR UNITS SECTION */}
      <section className="py-20 lg:py-28 bg-[#FCFBF7] border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Facilities"
            title="Our Units"
            description="Two specialized manufacturing locations situated in Kumbakonam's historic craft quarters, continuing traditional silver metallurgy."
            alignment="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {COMPANY_INFO.units.map((unit) => (
              <div
                key={unit.unitNumber}
                className="bg-white rounded-sm border border-[#DFE5EC] p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#DFE5EC]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0A1B33] text-white flex items-center justify-center font-display font-bold text-sm">
                        {unit.unitNumber}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-[#0A1B33]">
                          {unit.name}
                        </h3>
                        <p className="text-xs text-[#758394]">
                          Kumbakonam, Tamil Nadu
                        </p>
                      </div>
                    </div>
                    <Building2 className="w-5 h-5 text-[#758394]" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0A1B33] shrink-0 mt-0.5" />
                      <div className="text-sm text-[#3F4B5A] leading-relaxed">
                        <p className="font-medium text-[#151C26]">{unit.street}</p>
                        <p>{unit.city}</p>
                        <p className="text-xs text-[#758394]">{unit.district}, {unit.state}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-[#F5F2EA] rounded-xs border border-[#EDE7DC] space-y-1">
                      <span className="text-[11px] font-semibold text-[#0A1B33] uppercase tracking-wider block">
                        Core Capabilities
                      </span>
                      <p className="text-xs text-[#3F4B5A] leading-relaxed">
                        {unit.unitNumber === "01"
                          ? "Heavy sheet rolling mills, traditional metal spinning lathes, master dies, and deity kavasam embossing."
                          : "Hydraulic stamping, devotional vessel finishing, precision weighing, and temple custom orders."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DFE5EC] flex items-center justify-between text-xs">
                  <span className="text-[#758394] font-serif-body italic">
                    Registered Workshop
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(unit.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A1B33] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Location</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM STRIP (Exact requested content) */}
      <ContactStrip
        heading="Have a requirement for traditional silver work?"
        subheading="Discuss your temple requirements, jewellery retail orders, or customized silver articles directly with our Kumbakonam craftsmen."
        ctaText="Contact Us"
        theme="blue"
      />
    </>
  );
}
