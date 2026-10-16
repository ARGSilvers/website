import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import ContactStrip from "@/components/ContactStrip";
import { PRODUCTS_LIST } from "@/lib/data";

export const metadata: Metadata = {
  title: "Traditional Silver Articles & Temple Work Catalogue",
  description:
    "Explore traditional silver articles crafted by A.R.G Silvers across three generations in Kumbakonam, Tamil Nadu. Temple kavasams, Varalakshmi Amman faces, traditional silver kuthuvillakku lamps, ceremonial vessels, and custom silver articles.",
  alternates: {
    canonical: "https://argsilvers.com/products",
  },
  keywords: [
    "silver temple articles Kumbakonam",
    "temple kavasam silver",
    "Varalakshmi Amman silver face",
    "Varalakshmi Amman mugam silver",
    "silver kuthuvilaku price",
    "traditional silver lamps Kumbakonam",
    "silver pooja items wholesale Tamil Nadu",
    "silver sombhu",
    "silver plate Kumbakonam",
    "silver panjapathiram uthirani",
    "custom silver temple crown",
    "silver aruval temple donation",
  ],
  openGraph: {
    title: "Traditional Silver Articles Catalogue | A.R.G SILVERS Kumbakonam",
    description:
      "Explore handcrafted traditional silver articles, temple kavasams, Varalakshmi Amman faces, and ceremonial lamps made in Kumbakonam since 1925.",
    url: "https://argsilvers.com/products",
    images: [
      {
        url: "/images/products/amman-gridam-customizable-silver.png",
        width: 1200,
        height: 630,
        alt: "A.R.G SILVERS Traditional Silver Products Catalogue",
      },
    ],
  },
};

export default function ProductsPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "A.R.G SILVERS Traditional Silver Catalogue",
    description:
      "Handcrafted traditional silver articles and temple requirements manufactured in Kumbakonam, Tamil Nadu.",
    itemListElement: PRODUCTS_LIST.slice(0, 15).map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `https://argsilvers.com${product.image}`,
        category: product.categoryLabel,
        brand: {
          "@type": "Brand",
          name: "A.R.G SILVERS",
        },
      },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* PRODUCT PAGE HERO */} 
      <section className="bg-velvet-texture text-[#F5EADF] py-12 border-b border-[#101A2B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-5 h-[1.5px] bg-[#C49A43]" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A43]">
                  A.R.G SILVERS · SINCE 1925
                </span>
              </div>
              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5EADF] leading-[1.1]">
                Our Products
              </h1>
              <div className="w-16 h-[1.5px] bg-[#C49A43]/60 my-3" />
              <p className="text-base sm:text-lg text-[#C5C8CC] leading-relaxed font-light max-w-2xl">
                Traditional silver articles made through the skills and knowledge passed down in our family. Our range includes products for temples, jewellery businesses, dealers and individual customers.
              </p>
            </div>

            {/* Right Wide Banner: Authentic Silver Products on Deep Velvet */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#101A2B] p-3 rounded-xs border border-white/10 shadow-xl">
                <div className="relative aspect-[9/10] h-full w-full overflow-hidden bg-[#17243B] rounded-xs">
                  <Image
                    src="/images/products/amman-gridam-customizable-silver.png"
                    alt="Traditional handcrafted silver crown and articles"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover p-1 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101A2B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs text-[#C49A43] font-serif-heading">
                    Handmade Silver Traditions · Kumbakonam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5EADF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C49A43] font-semibold block">
              CATALOGUE ARCHIVE
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-normal text-[#17243B]">
              Handcrafted Silver Collection
            </h2>
            <div className="w-12 h-[1.5px] bg-[#C49A43] mx-auto my-3" />
            <p className="text-xs text-[#292824]/70 italic font-serif-heading">
              Select any piece to inspect fine silversmith craftsmanship and traditional embossing.
            </p>
          </div>

          <ImageGallery products={PRODUCTS_LIST} />
        </div>
      </section>

      {/* CONTACT STRIP */}
      <ContactStrip
        heading="Looking for a Traditional Silver Product?"
        supportingCopy="Contact our family to discuss your requirements."
        buttonText="CONTACT US"
        theme="velvet"
      />
    </>
  );
}
