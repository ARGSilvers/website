import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface ContactStripProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  theme?: "blue" | "ivory";
}

export default function ContactStrip({
  heading = "Looking for a traditional silver product or have a specific requirement?",
  subheading = "Our craftsmen and workshop units in Kumbakonam are at your service for temple requirements, jewellery orders, and custom silver articles.",
  ctaText = "Contact Us",
  theme = "blue",
}: ContactStripProps) {
  const isBlue = theme === "blue";

  return (
    <section
      className={`py-16 sm:py-20 border-t ${
        isBlue
          ? "bg-[#0A1B33] text-white border-[#162E52]"
          : "bg-[#F5F2EA] text-[#0A1B33] border-[#DFE5EC]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span
              className={`text-xs font-semibold uppercase tracking-[0.2em] block ${
                isBlue ? "text-[#C8D1DC]" : "text-[#758394]"
              }`}
            >
              Direct Workshop Enquiries
            </span>
            <h2
              className={`font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug ${
                isBlue ? "text-white" : "text-[#0A1B33]"
              }`}
            >
              {heading}
            </h2>
            <p
              className={`text-sm sm:text-base font-light leading-relaxed ${
                isBlue ? "text-[#C8D1DC]/90" : "text-[#3F4B5A]"
              }`}
            >
              {subheading}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-wide transition-all shadow-sm rounded-sm ${
                isBlue
                  ? "bg-[#FCFBF7] text-[#0A1B33] hover:bg-white hover:shadow-md"
                  : "bg-[#0A1B33] text-white hover:bg-[#162E52] hover:shadow-md"
              }`}
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COMPANY_INFO.phones[0].href}
              className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider border rounded-sm transition-colors ${
                isBlue
                  ? "border-[#162E52] text-[#C8D1DC] hover:text-white hover:border-[#C8D1DC]"
                  : "border-[#C8D1DC] text-[#0A1B33] hover:bg-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phones[0].label}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
