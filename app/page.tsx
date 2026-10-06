import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Phone,
  Compass,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "A.R.G SILVERS | Traditional Silver Handicrafts Since 1925 | Kumbakonam",
  description:
    "A.R.G Silvers is a family-run silver manufacturing business from Kumbakonam, Tamil Nadu, with a tradition of handcrafted silver work dating back to 1925. Three generations making sacred temple articles, Varalakshmi Amman, and traditional silver articles.",
};

const categories = [
  {
    title: "Temple & Devotional Products",
    description: "Silver Kavasam, devotional articles and temple-related silver work.",
    image: "/images/products/customizable-silver-kavasam.png",
    alt: "Silver Kavasam temple deity armor",
  },
  {
    title: "Traditional Silver Articles",
    description: "Paladai, Uthirani, spoons, Maikoodu, Thatu, Sombhu, Kudams and other traditional articles.",
    image: "/images/products/panjapathiram-with-uthirani.png",
    alt: "Panjapathiram and Uthirani traditional silver articles",
  },
  {
    title: "Traditional Lamps",
    description: "Kuthu Villakku, Malayala Villakku and other traditional lamp designs.",
    image: "/images/products/silver-kuthuvilaku.png",
    alt: "Handcrafted Silver Kuthu Villakku",
  },
  {
    title: "Silver Coins & Dollars",
    description: "Silver coins and dollars made for temples and temple-related requirements.",
    image: "/images/products/silver-mani.png",
    alt: "Devotional silver articles and temple requirements",
  },
  {
    title: "Custom Silver Work",
    description: "Traditional silver products made according to specific requirements.",
    image: "/images/products/amman-gridam-customizable-silver.png",
    alt: "Customizable silver crown and devotional articles",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. OUR STORY SECTION */}
      <section className="py-20 lg:py-28 bg-[#FCFBF7] relative border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative bg-white p-3 sm:p-4 rounded-sm shadow-sm border border-[#DFE5EC]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5F2EA]">
                  <Image
                    src="/images/manufacturing/heritage-craftsmen-vintage.jpeg"
                    alt="Generations of A.R.G Silvers craftsmen at the workshop in Kumbakonam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-display text-sm font-semibold tracking-wide">
                      The Family Workshop Tradition
                    </p>
                    <p className="text-xs text-[#C8D1DC] font-light">
                      Mukkannar Street, Kumbakonam · Established 1925
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Editorial Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeading
                kicker="Our Heritage"
                title="It Started With a Small Family Workshop"
              />

              <div className="space-y-4 text-base sm:text-lg text-[#3F4B5A] leading-relaxed font-light">
                <p>
                  In 1925, our grandfather, Rajamanikam, began making traditional
                  silver articles by hand in Kumbakonam.
                </p>
                <p>
                  The early work included Paladai, Uthirani, spoons, Maikoodu and other
                  small silver articles, which were supplied to jewellery shops in
                  Kumbakonam.
                </p>
                <p>
                  Over the years, the family expanded the range of products and
                  continued to develop its own style of traditional silver
                  workmanship.
                </p>
                <p className="font-normal text-[#0A1B33]">
                  Today, that same work continues through the third generation, with
                  two manufacturing units in Kumbakonam.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-[#DFE5EC]">
                <div className="p-4 bg-[#F5F2EA] rounded-sm border border-[#EDE7DC]">
                  <span className="text-xs uppercase tracking-widest text-[#758394] font-medium block">
                    Established
                  </span>
                  <span className="font-display text-2xl font-bold text-[#0A1B33] mt-1 block">
                    1925
                  </span>
                  <span className="text-xs text-[#3F4B5A] mt-0.5 block">
                    Kumbakonam, Tamil Nadu
                  </span>
                </div>
                <div className="p-4 bg-[#F5F2EA] rounded-sm border border-[#EDE7DC]">
                  <span className="text-xs uppercase tracking-widest text-[#758394] font-medium block">
                    Workshop Facilities
                  </span>
                  <span className="font-display text-2xl font-bold text-[#0A1B33] mt-1 block">
                    02 Units
                  </span>
                  <span className="text-xs text-[#3F4B5A] mt-0.5 block">
                    Mukkannar Street
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR JOURNEY SECTION (Timeline) */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="100-Year Timeline"
            title="Our Journey"
            description="From a single artisanal workbench in 1925 to two modern production units in Kumbakonam, a century of traditional craft preserved and honored."
            alignment="center"
            className="mb-16 lg:mb-20"
          />

          <Timeline />
        </div>
      </section>

      {/* 4. THREE GENERATIONS SECTION */}
      <section className="py-20 lg:py-28 bg-[#FCFBF7] border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                kicker="Three Generations"
                title="The People Behind the Work"
              />

              <div className="space-y-4 text-base sm:text-lg text-[#3F4B5A] leading-relaxed font-light">
                <p>
                  The craftsmanship has been carried forward through three
                  generations.
                </p>
                <p>
                  Today, the business is continued by Ganesan&apos;s sons,{" "}
                  <strong className="font-semibold text-[#0A1B33]">
                    Ravindrakumar and Balakumar
                  </strong>
                  , and Gnanasekaran&apos;s son,{" "}
                  <strong className="font-semibold text-[#0A1B33]">
                    Parthiban
                  </strong>
                  .
                </p>
                <p>
                  With two manufacturing units in Kumbakonam, the family continues to
                  work with the same traditional silver-making knowledge passed down
                  over the years.
                </p>
              </div>

              {/* Generational Breakdown */}
              <div className="space-y-3 pt-2">
                {COMPANY_INFO.generations.map((gen, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#F5F2EA] border border-[#EDE7DC] space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-[#758394] font-semibold">
                        {gen.generation}
                      </span>
                      <span className="text-xs font-serif-body italic text-[#0A1B33]">
                        {gen.role}
                      </span>
                    </div>
                    <p className="font-display text-base font-bold text-[#0A1B33]">
                      {"name" in gen ? gen.name : gen.names}
                    </p>
                    <p className="text-xs text-[#3F4B5A] leading-relaxed">
                      {gen.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Authentic Family Tree Photographic Document */}
            <div className="lg:col-span-6">
              <div className="bg-white p-4 sm:p-6 rounded-sm shadow-md border border-[#DFE5EC] space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F5F2EA] rounded-xs">
                  <Image
                    src="/images/people/three-generations.png"
                    alt="Three generations of family craftsmen behind A.R.G Silvers Kumbakonam"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-3 bg-[#F5F2EA] rounded-xs border border-[#EDE7DC] text-center">
                  <p className="text-xs font-semibold text-[#0A1B33] uppercase tracking-wider">
                    Generational Family Lineage
                  </p>
                  <p className="text-xs text-[#3F4B5A] mt-1 font-serif-body italic">
                    Top: Rajamanikam (Founder) · Center: Ganesan &amp; Gnanasekaran ·
                    Bottom: Ravindrakumar, Balakumar &amp; Parthiban
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE MAKE SECTION */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <SectionHeading
              kicker="Handcrafted Repertoire"
              title="Traditional Silver Products"
              description="Our work covers a range of traditional silver articles and products made for temples, jewellery businesses, dealers and customers."
            />

            {/* Navigation CTA: Not a sales CTA */}
            <div className="shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0A1B33] text-white hover:bg-[#162E52] text-sm font-medium tracking-wide rounded-sm shadow-xs transition-colors group"
              >
                <span>View Our Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-sm border border-[#DFE5EC] overflow-hidden shadow-xs hover:shadow-md hover:border-[#C8D1DC] transition-all flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full bg-[#061122] overflow-hidden p-4">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A1B33]/85 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-xs">
                    0{idx + 1}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#0A1B33] group-hover:text-[#162E52] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[#3F4B5A] leading-relaxed font-light mt-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#DFE5EC]/60 flex items-center text-xs text-[#758394] font-medium group-hover:text-[#0A1B33]">
                    <span className="font-serif-body italic">Kumbakonam Craftsmanship</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR REACH SECTION */}
      <section className="py-20 lg:py-28 bg-[#FCFBF7] border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                kicker="Geographic Footprint"
                title="From Kumbakonam to South India"
                description="Our products reach customers through direct and dealer networks across South India."
              />

              {/* Four States Showcase */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {COMPANY_INFO.statesServed.map((state) => (
                  <div
                    key={state}
                    className="p-3.5 bg-[#F5F2EA] rounded-sm border border-[#EDE7DC] text-center"
                  >
                    <Compass className="w-4 h-4 text-[#0A1B33] mx-auto mb-1.5" />
                    <span className="text-xs font-semibold text-[#0A1B33] tracking-wide block">
                      {state}
                    </span>
                  </div>
                ))}
              </div>

              {/* Supporting Content from supplied document */}
              <div className="space-y-4 text-base sm:text-lg text-[#3F4B5A] leading-relaxed font-light pt-2">
                <p>
                  Our Varalakshmi Amman faces and other silver products have been
                  supplied through dealers in Chennai to jewellery shops and
                  customers across these states.
                </p>
                <p>
                  We have also supplied to jewellery businesses including:
                </p>
              </div>

              {/* Esteemed Client Houses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {COMPANY_INFO.esteemedClients.map((client) => (
                  <div
                    key={client}
                    className="flex items-center gap-3 p-3 bg-white rounded-sm border border-[#DFE5EC]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0A1B33] shrink-0" />
                    <span className="text-xs font-medium text-[#151C26]">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Editorial Map / Geographic Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A1B33] text-white p-6 sm:p-8 rounded-sm shadow-xl border border-[#162E52] space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8D1DC]">
                    Craft Hub
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    Rooted in the Cauvery Delta
                  </h3>
                  <p className="text-xs text-[#C8D1DC] leading-relaxed font-light">
                    Kumbakonam is historic for its temple metallurgy and bronze and
                    silver casting guilds. For over 100 years, A.R.G Silvers has operated
                    from Mukkannar Street, preserving traditional methods.
                  </p>
                </div>

                <div className="p-4 bg-[#061122] rounded-xs border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-white">
                    <MapPin className="w-4 h-4 text-[#C8D1DC]" />
                    <span className="font-semibold">Mukkannar Street, Kumbakonam</span>
                  </div>
                  <p className="text-[11px] text-[#C8D1DC]/80 pl-6">
                    Direct supply to temples, retailers, and discerning patrons
                    throughout Tamil Nadu, Karnataka, Andhra Pradesh, and Kerala.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/manufacturing-unit"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8D1DC] hover:text-white transition-colors"
                  >
                    <span>View Our Manufacturing Units</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOME CONTACT SECTION */}
      <section className="py-20 lg:py-24 bg-[#0A1B33] text-white border-t border-[#162E52]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8D1DC]">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Talk to A.R.G Silvers
            </h2>
            <div className="w-16 h-[1.5px] bg-[#C8D1DC]/40 mx-auto my-4" />
            <p className="text-base sm:text-lg text-[#C8D1DC] leading-relaxed max-w-2xl mx-auto font-light">
              For enquiries about our traditional silver products, temple requirements,
              silver coins and dollars, jewellery business requirements or custom work,
              please get in touch with us.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#FCFBF7] text-[#0A1B33] hover:bg-white text-sm font-semibold tracking-wide rounded-sm shadow-md transition-all inline-flex items-center gap-3"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COMPANY_INFO.phones[0].href}
              className="px-6 py-4 border border-[#162E52] hover:border-[#C8D1DC] text-[#C8D1DC] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phones[0].label}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
