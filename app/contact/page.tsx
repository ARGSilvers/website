import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Building2, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact A.R.G SILVERS | Kumbakonam Workshops",
  description:
    "Get in touch with A.R.G Silvers directly for enquiries about traditional silver products, temple requirements, silver coins and dollars, jewellery business requirements, or custom work.",
  openGraph: {
    title: "Contact A.R.G SILVERS | Kumbakonam, Tamil Nadu",
    description:
      "Reach our traditional silver workshops on Mukkannar Street, Kumbakonam. Direct phone and email assistance.",
    images: ["/images/logo/arg-logo-white.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A1B33] block mb-2">
            CONTACT A.R.G SILVERS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0A1B33] leading-tight">
            We&apos;d Be Happy to Hear From You
          </h1>
          <div className="w-16 h-[2px] bg-[#0A1B33]/80 my-4" />
          <p className="text-base sm:text-lg text-[#3F4B5A] leading-relaxed font-light">
            For traditional silver products, temple requirements, jewellery business
            requirements, silver coins and dollars, or custom silver work, we can reach
            you directly.
          </p>
        </div>

        {/* Main Grid: Left Business Info & Units, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Business Card & Workshop Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Master Heritage Card */}
            <div className="bg-[#0A1B33] text-white p-8 rounded-sm shadow-lg border border-[#162E52] space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-[#162E52]">
                <div className="space-y-1">
                  <p className="font-display text-2xl font-bold tracking-wide">
                    {COMPANY_INFO.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#C8D1DC]">
                    {COMPANY_INFO.tagline} · Since {COMPANY_INFO.since}
                  </p>
                </div>
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src="/images/logo/arg-logo-white.png"
                    alt="A.R.G SILVERS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Manufacturing Units */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {COMPANY_INFO.units.map((unit) => (
                  <div key={unit.unitNumber} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                      <Building2 className="w-4 h-4 text-[#C8D1DC]" />
                      <span>{unit.name}</span>
                    </div>
                    <div className="text-xs text-[#C8D1DC] leading-relaxed pl-6">
                      <p className="text-white font-medium">{unit.street}</p>
                      <p>{unit.city}</p>
                      <p className="text-[#C8D1DC]/70">{unit.district}, {unit.state}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-6 border-t border-[#162E52] grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Numbers */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                    <Phone className="w-4 h-4 text-[#C8D1DC]" />
                    <span>Phone</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-6">
                    {COMPANY_INFO.phones.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        className="text-sm font-medium text-[#C8D1DC] hover:text-white transition-colors"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                    <Mail className="w-4 h-4 text-[#C8D1DC]" />
                    <span>Email</span>
                  </div>
                  <div className="pl-6">
                    <a
                      href={COMPANY_INFO.email.href}
                      className="text-sm text-[#C8D1DC] hover:text-white transition-colors break-all"
                    >
                      {COMPANY_INFO.email.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note on Direct Workshop Visit */}
            <div className="p-6 bg-[#F5F2EA] rounded-sm border border-[#EDE7DC] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0A1B33]">
                <Clock className="w-4 h-4 text-[#0A1B33]" />
                <span>Visiting Kumbakonam</span>
              </div>
              <p className="text-sm text-[#3F4B5A] leading-relaxed font-light">
                Both our manufacturing units are located on Mukkannar Street in the heart of
                Kumbakonam. Jewellery business representatives, temple trust members, and individual
                patrons are welcome to contact us in advance for consultation.
              </p>
            </div>
          </div>

          {/* Right Column: Simple Direct Form */}
          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
