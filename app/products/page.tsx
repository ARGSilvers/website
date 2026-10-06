import React from "react";
import type { Metadata } from "next";
import ImageGallery from "@/components/ImageGallery";
import ContactStrip from "@/components/ContactStrip";
import { PRODUCTS_LIST } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Products | Traditional Handcrafted Silver",
  description:
    "Explore traditional handcrafted silver articles made through craftsmanship passed down across three generations at A.R.G Silvers, Kumbakonam. Temple kavasams, Varalakshmi Amman, traditional lamps, and ceremonial articles.",
  openGraph: {
    title: "Our Products | A.R.G SILVERS Kumbakonam",
    description:
      "Traditional silver articles made through craftsmanship passed down in our family since 1925.",
    images: ["/images/products/amman-mugam-silver.png"],
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Products Page Hero */}
      <section className="bg-[#FCFBF7] pt-12 pb-16 lg:pt-18 lg:pb-20 border-b border-[#DFE5EC]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A1B33] block">
              Handcrafted Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1B33] leading-tight">
              Our Products
            </h1>
            <div className="w-16 h-[2px] bg-[#0A1B33]/80 my-3" />
            <p className="text-lg sm:text-xl text-[#3F4B5A] leading-relaxed font-light">
              Traditional silver articles made through the craftsmanship passed down
              in our family.
            </p>
            <p className="text-base sm:text-lg text-[#3F4B5A] leading-relaxed font-light">
              From everyday traditional articles to temple and devotional products,
              our range has grown over the generations while remaining rooted in the
              traditional work we know.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Photographic Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#758394] font-semibold block">
                Visual Showcase
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0A1B33] mt-1">
                A Century of Silver Work
              </h2>
            </div>
            <p className="text-xs text-[#758394] italic font-serif-body">
              Click any piece to inspect fine embossing and silversmith details.
            </p>
          </div>

          <ImageGallery products={PRODUCTS_LIST} />
        </div>
      </section>

      {/* Bottom Contact Strip (Exact text requested) */}
      <ContactStrip
        heading="Looking for a traditional silver product or have a specific requirement?"
        subheading="Get in touch with our Kumbakonam workshop for temple commissions, devotional kavasams, ritual vessels, or custom silver articles."
        ctaText="Contact Us"
        theme="blue"
      />
    </>
  );
}
