import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import ImageGallery from "@/components/ImageGallery";
import ContactStrip from "@/components/ContactStrip";
import { FAMILY_MEMBERS, COMPANY_INFO, PRODUCTS_LIST } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "A.R.G SILVERS | Traditional Silver Craftsmanship Since 1925 | Kumbakonam",
  description:
    "A family-run traditional silver manufacturing business in Kumbakonam, Tamil Nadu. Handcrafting sacred temple articles, Varalakshmi Amman, traditional lamps, and custom silver articles across three generations.",
  alternates: {
    canonical: "https://argsilvers.com",
  },
  keywords: [
    "A.R.G Silvers Kumbakonam",
    "silver manufacturers Kumbakonam",
    "traditional silver handicrafts Kumbakonam",
    "temple silver kavasam Tamil Nadu",
    "Varalakshmi Amman silver face manufacturers",
    "handcrafted silver kuthuvillakku lamps",
    "silver jewellery manufacturers South India",
    "Kumbakonam silver artisans since 1925",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: HERO BANNER */}
      <Hero />

      {/* SECTION 2: ABOUT A.R.G SILVERS */}
      <section
        id="about-section"
        className="py-20 lg:py-28 bg-[#F5EADF] border-b border-[#E9D8BE]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Authentic Workshop Photograph */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white p-3 sm:p-4 rounded-xs shadow-md border border-[#E9D8BE]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#101A2B]/5 rounded-xs">
                  <Image
                    src="/images/manufacturing/artisan-machine-work.jpeg"
                    alt="Generations of A.R.G Silvers craftsmen at the workshop in Kumbakonam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className=" hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-[#F5EADF]">
                    <p className="font-serif-heading text-lg font-normal tracking-wide">
                      The Family Workshop Tradition
                    </p>
                    <p className="text-xs text-[#C5C8CC] font-light">
                      Mukkannar Street, Kumbakonam · Established 1925
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Editorial Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeading
                kicker="OUR STORY"
                title="A Family Business That Began in 1925"
              />

              <div className="space-y-4 text-base sm:text-lg text-[#292824]/85 leading-relaxed font-light">
                <p>
                  A.R.G Silvers began with our grandfather, Rajamanikam, who
                  started making traditional silver articles by hand in
                  Kumbakonam.
                </p>
                <p>
                  The early work included Paladai, Uthirani, spoons, Maikoodu
                  and other small silver articles supplied to jewellery shops in
                  the town.
                </p>
                <p>
                  Over the years, the family expanded its range of products
                  while continuing the traditional workmanship passed down
                  through generations. Today, we continue this work through two
                  manufacturing units in Kumbakonam.
                </p>
              </div>

              {/* Three Understated Information Points */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E9D8BE]">
                <div className="p-4 bg-white/70 rounded-xs border border-[#E9D8BE]">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C49A43] font-semibold block">
                    Heritage
                  </span>
                  <span className="font-serif-heading text-2xl font-normal text-[#17243B] mt-1 block">
                    Since 1925
                  </span>
                </div>
                <div className="p-4 bg-white/70 rounded-xs border border-[#E9D8BE]">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C49A43] font-semibold block">
                    Lineage
                  </span>
                  <span className="font-serif-heading text-2xl font-normal text-[#17243B] mt-1 block">
                    Three Generations
                  </span>
                </div>
                <div className="p-4 bg-white/70 rounded-xs border border-[#E9D8BE]">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C49A43] font-semibold block">
                    Facilities
                  </span>
                  <span className="font-serif-heading text-2xl font-normal text-[#17243B] mt-1 block">
                    Two Units
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR JOURNEY — INTERACTIVE TIMELINE */}
      <section className="py-20 lg:py-28 bg-[#E9D8BE]/40 border-b border-[#E9D8BE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="HERITAGE MILESTONES"
            title="Our Journey Through the Years"
            description="From a small family craft in Kumbakonam to a manufacturing business serving customers across South India."
            alignment="center"
            className="mb-16 lg:mb-24"
          />

          <Timeline />
        </div>
      </section>

      {/* SECTION 4: THE PEOPLE BEHIND THE WORK */}
      <section className="py-20 lg:py-28 bg-[#17243B] text-[#F5EADF] border-b border-[#101A2B] relative">
        <div className="absolute inset-0 bg-velvet-texture pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-5 h-[1.5px] bg-[#C49A43]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A43]">
                OUR FAMILY
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EADF]">
              The People Behind the Work
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C49A43]/60 my-4" />
            <p className="text-base sm:text-lg text-[#C5C8CC] leading-relaxed font-light">
              The skills and knowledge behind A.R.G Silvers have been passed
              down through our family. Today, the next generation continues the
              traditional silver work started by our grandfather.
            </p>
          </div>

          {/* Authentic Portrait-Led Family Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
              {FAMILY_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#101A2B] w-[90%] h-[90%] rounded-xs border border-white/10 overflow-hidden shadow-lg hover:border-[#C49A43]/40 transition-all duration-300 flex flex-col group"
              >
                {/* Authentic Portrait */}
                <div className="relative aspect-square w-full  bg-[#0a121e] overflow-hidden p-3 flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="p-4 bg-[#101A2B] border-t border-white/10 text-center">
                  <h3 className="font-serif-heading text-lg sm:text-xl font-normal text-[#F5EADF] group-hover:text-[#C49A43] transition-colors">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT PREVIEW GALLERY */}
      <section className="py-20 lg:py-28 bg-[#F5EADF] border-b border-[#E9D8BE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="A LOOK AT OUR WORK"
            title="Traditional Silver Products"
            description="Our range has grown over the years, from small traditional articles to lamps, devotional products and silver articles made for temple-related requirements."
            className="mb-14"
          />

          {/* Editorial Bento Mosaic Gallery */}
          <ImageGallery products={PRODUCTS_LIST} showFilters={false} limit={3} minimal={true} />

          {/* One Clear Button Beneath the Gallery */}
          <div className="mt-14 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#17243B] hover:bg-[#101A2B] text-[#F5EADF] text-xs font-semibold tracking-[0.18em] uppercase rounded-xs transition-colors shadow-md hover:shadow-lg"
            >
              <span>VIEW ALL PRODUCTS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR MANUFACTURING */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E9D8BE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual workshop column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-white p-2 rounded-xs shadow-md border border-[#E9D8BE]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/manufacturing/workshop-overview.jpeg"
                    alt="Inside A.R.G Silvers manufacturing workshop in Kumbakonam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 680px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-1.5 rounded-xs shadow-xs border border-[#E9D8BE]">
                  <Image
                    src="/images/manufacturing/lathe-spinning-tools.jpeg"
                    alt="Spinning lathe and tooling moulds"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-1.5 rounded-xs shadow-xs border border-[#E9D8BE]">
                  <Image
                    src="/images/manufacturing/sheet-rolling-machine.jpeg"
                    alt="Silver sheet rolling mill"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                kicker="WORKSHOP FACILITIES"
                title="Made in Kumbakonam"
              />

              <p className="text-base sm:text-lg text-[#292824]/85 leading-relaxed font-light">
                Our two manufacturing units are based in Kumbakonam, Tamil Nadu.
                They support our continuing work in traditional silver products
                for temples, jewellery businesses, dealers and customers.
              </p>

              <div className="p-5 bg-white rounded-xs border border-[#E9D8BE] space-y-1">
                <span className="text-[11px] font-semibold text-[#C49A43] uppercase tracking-wider block">
                  Manufacturing Hub
                </span>
                <p className="font-serif-heading text-xl font-normal text-[#17243B]">
                  Two Manufacturing Units
                </p>
                <p className="text-xs text-[#292824]/70">
                  Mukkannar Street, Kumbakonam, Tamil Nadu
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/manufacturing-unit"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#17243B] hover:text-[#C49A43] transition-colors"
                >
                  <span>Explore Our Manufacturing Unit</span>
                  <ArrowRight className="w-4 h-4 text-[#C49A43]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR REACH */}
      <section className="py-20 lg:py-28 bg-[#F5EADF] border-b border-[#E9D8BE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center justify-center gap-2.5">
              <span className="w-5 h-[1.5px] bg-[#C49A43]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A43]">
                REGIONAL REACH
              </span>
              <span className="w-5 h-[1.5px] bg-[#C49A43]" />
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17243B]">
              From Kumbakonam Across South India
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C49A43]/60 mx-auto my-3" />
            <p className="text-base sm:text-lg text-[#292824]/85 leading-relaxed font-light">
              Our products reach jewellery businesses, dealers, temples and
              customers across South India through direct and dealer networks.
            </p>
          </div>

          {/* Four Regional Labels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {COMPANY_INFO.statesServed.map((state) => (
              <div
                key={state}
                className="p-4 bg-white rounded-xs border border-[#E9D8BE] text-center shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#C49A43] mx-auto mb-2" />
                <span className="font-serif-heading text-lg font-normal text-[#17243B] block">
                  {state}
                </span>
              </div>
            ))}
          </div>

          {/* Esteemed Client Businesses Restrained Text Block */}
          <div className="max-w-4xl mx-auto bg-white/90 p-6 sm:p-8 rounded-xs border border-[#E9D8BE] text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C49A43] font-semibold">
              Supplying Prominent Jewellery Houses &amp; Dealers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-stretch">
              {COMPANY_INFO.esteemedClients.map((client) => (
                <div
                  key={client.name}
                  className="p-4 sm:p-5 hover:bg-white rounded-xs border border-[#E9D8BE] hover:border-[#C49A43]/50 transition-all duration-300 flex flex-col items-center justify-between text-center group shadow-xs hover:shadow-md"
                >
                  <div className="h-16 w-full flex items-center justify-center relative mb-2">
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      width={160}
                      height={60}
                      className="max-h-22 w-auto max-w-[120px] sm:max-w-[140px] object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* <div className="mt-auto pt-2 border-t border-[#E9D8BE]/50 w-full">
                    <span className="font-serif-heading text-xs sm:text-sm font-medium text-[#17243B] block leading-tight">
                      {client.name}
                    </span>
                    <span className="text-[10px] text-[#292824]/60 tracking-wider uppercase block mt-0.5">
                      {client.location}
                    </span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CENTRED CONTACT STRIP */}
      <ContactStrip
        heading="Have a Requirement for Traditional Silver Work?"
        supportingCopy="For enquiries about our silver products, temple requirements or custom work, we welcome you to get in touch with our family."
        buttonText="CONTACT US"
        theme="velvet"
      />
    </>
  );
}
