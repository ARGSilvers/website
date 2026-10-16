import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import ManufacturingGallery from "@/components/ManufacturingGallery";
import ContactStrip from "@/components/ContactStrip";
import { MANUFACTURING_GALLERY, COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Manufacturing Units & Workshops in Kumbakonam",
  description:
    "A look inside A.R.G Silvers two operational silver manufacturing units on Mukkannar Street in Kumbakonam, Tamil Nadu. Traditional techniques, sheet rolling machinery, spinning lathes, hydraulic dies, and family handcraftsmanship since 1925.",
  alternates: {
    canonical: "https://argsilvers.com/manufacturing-unit",
  },
  keywords: [
    "silver manufacturing unit Kumbakonam",
    "Mukkannar street silver workshops",
    "traditional silver making machinery",
    "silver sheet rolling Kumbakonam",
    "hydraulic press silver stamping",
    "temple silver die moulds",
    "handcrafted silverware production",
    "silver artisans Kumbakonam",
    "wholesale silverware manufacturer Tamil Nadu",
  ],
  openGraph: {
    title: "Our Manufacturing Units | A.R.G SILVERS Kumbakonam",
    description:
      "Inside A.R.G Silvers two operational workshops in Kumbakonam. Combining generational handcraftsmanship with hydraulic pressing and sheet rolling machinery.",
    url: "https://argsilvers.com/manufacturing-unit",
    images: [
      {
        url: "/images/manufacturing/workshop-overview.jpeg",
        width: 1200,
        height: 630,
        alt: "A.R.G SILVERS Manufacturing Workshop Kumbakonam",
      },
    ],
  },
};

export default function ManufacturingUnitPage() {
  const workshopSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "A.R.G SILVERS Manufacturing Units",
    description: "Two dedicated silver manufacturing workshops in Kumbakonam, Tamil Nadu.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "37/73 and 104/65 Mukkannar Street",
      addressLocality: "Kumbakonam",
      addressRegion: "Tamil Nadu",
      postalCode: "612001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.9602",
      longitude: "79.3845",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workshopSchema) }}
      />
      {/* 1. HERO SECTION */}
      <section className="bg-velvet-texture text-[#F5EADF] pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#101A2B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-5 h-[1.5px] bg-[#C49A43]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A43]">
                  KUMBAKONAM WORKSHOPS
                </span>
              </div>
              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5EADF] leading-[1.1]">
                Our Manufacturing Unit
              </h1>
              <div className="w-16 h-[1.5px] bg-[#C49A43]/60 my-3" />
              <p className="text-base sm:text-lg text-[#C5C8CC] leading-relaxed font-light max-w-2xl">
                Our work continues in Kumbakonam, where our family has been making traditional silver products for generations.
              </p>
            </div>

            {/* Right Wide Actual Workshop Photograph */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#101A2B] p-3 rounded-xs border border-white/10 shadow-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#17243B] rounded-xs">
                  <Image
                    src="/images/manufacturing/workshop-overview.jpeg"
                    alt="Inside A.R.G Silvers workshop in Kumbakonam"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs text-[#C49A43] font-serif-heading">
                    Unit 01 Workshop Floor · Kumbakonam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH IMAGE GALLERY */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5EADF] border-b border-[#E9D8BE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C49A43] font-semibold block">
              PHOTOGRAPHIC RECORD
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-normal text-[#17243B]">
              Inside the Workshops
            </h2>
            <div className="w-12 h-[1.5px] bg-[#C49A43] mx-auto my-3" />
            <p className="text-xs text-[#292824]/70 italic font-serif-heading">
              Authentic documentary images of tools, workbenches, and craftsmen at work.
            </p>
          </div>

          <ManufacturingGallery images={MANUFACTURING_GALLERY} />
        </div>
      </section>

      {/* 3. MANUFACTURING UNIT DETAILS */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E9D8BE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C49A43] font-semibold block">
              WORKSHOP LOCATIONS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-normal text-[#17243B]">
              Manufacturing Unit Details
            </h2>
            <div className="w-12 h-[1.5px] bg-[#C49A43] mx-auto my-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.units.map((unit) => (
              <div
                key={unit.unitNumber}
                className="bg-white p-8 rounded-xs border border-[#E9D8BE] shadow-xs space-y-4"
              >
                <div className="flex items-center gap-3 pb-4 border-b border-[#E9D8BE]">
                  <div className="w-10 h-10 rounded-full bg-[#17243B] text-[#C49A43] flex items-center justify-center font-serif-heading text-base font-bold">
                    {unit.unitNumber}
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-2xl font-normal text-[#17243B]">
                      {unit.name}
                    </h3>
                    <p className="text-xs text-[#292824]/60">
                      Kumbakonam, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-[#292824]/85 leading-relaxed pt-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C49A43] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#17243B]">{unit.street}</p>
                      <p>{unit.city}</p>
                      <p className="text-xs text-[#292824]/70">{unit.district}, {unit.state}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CONTACT STRIP */}
      <ContactStrip
        heading="For Traditional Silver Work and Product Requirements"
        buttonText="CONTACT US"
        theme="beige"
      />
    </>
  );
}
