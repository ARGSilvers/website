import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Building2, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact A.R.G SILVERS | Kumbakonam Workshops",
  description:
    "Get in touch with A.R.G Silvers directly for enquiries about traditional silver products, temple requirements, silver coins and dollars, jewellery business requirements or custom silver work.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F5EADF] min-h-screen py-14 lg:py-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="max-w-3xl mb-14 lg:mb-18 m-auto text-center">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-5 h-[1.5px] bg-[#C49A43]" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A43]">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#17243B] leading-[1.1]">
            Contact A.R.G Silvers
          </h1>
          <div className="w-16 h-[1.5px] bg-[#C49A43] my-4" />
          <p className="text-base sm:text-lg text-[#292824]/85 leading-relaxed font-light">
            For enquiries about traditional silver products, temple requirements, silver coins and dollars, jewellery business requirements or custom silver work, please get in touch with us.
          </p>
        </div>

        {/* MAIN CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Authentic Business Details Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#17243B] text-[#F5EADF] p-8 sm:p-10 rounded-xs shadow-xl border border-[#101A2B] space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-velvet-texture pointer-events-none" />

              {/* Brand Header */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <p className="font-serif-heading text-3xl font-normal tracking-wide text-[#F5EADF]">
                    {COMPANY_INFO.name}
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#C49A43] font-medium">
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
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {COMPANY_INFO.units.map((unit) => (
                  <div key={unit.unitNumber} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C49A43]">
                      <Building2 className="w-4 h-4 text-[#C49A43]" />
                      <span>{unit.name}</span>
                    </div>
                    <div className="text-xs text-[#C5C8CC] leading-relaxed pl-6 space-y-0.5 font-light">
                      <p className="text-[#F5EADF] font-medium">{unit.street}</p>
                      <p>{unit.city}</p>
                      <p className="text-[#C5C8CC]/70">{unit.district}, {unit.state}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Communication Channels */}
              <div className="relative z-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Numbers (tel: links) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C49A43]">
                    <Phone className="w-4 h-4 text-[#C49A43]" />
                    <span>Phone</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pl-6">
                    {COMPANY_INFO.phones.map((p) => (
                      <a
                        key={p.label}
                        href={p.href}
                        className="text-sm font-medium text-[#F5EADF] hover:text-[#C49A43] transition-colors"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email (mailto: link) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C49A43]">
                    <Mail className="w-4 h-4 text-[#C49A43]" />
                    <span>Email</span>
                  </div>
                  <div className="pl-6">
                    <a
                      href={COMPANY_INFO.email.href}
                      className="text-sm text-[#F5EADF] hover:text-[#C49A43] transition-colors break-all"
                    >
                      {COMPANY_INFO.email.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on Location in Kumbakonam */}
            <div className="p-6 bg-white rounded-xs border border-[#E9D8BE] space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#17243B]">
                <MapPin className="w-4 h-4 text-[#C49A43]" />
                <span>Visiting Our Kumbakonam Workshops</span>
              </div>
              <p className="text-xs text-[#292824]/80 leading-relaxed font-light">
                Both our manufacturing units are located on Mukkannar Street in Kumbakonam. Temple trust representatives, jewellery business patrons, and individual clients are welcome to get in touch in advance to discuss custom requirements.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
