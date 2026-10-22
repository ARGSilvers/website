import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Products", href: "/products" },
  { name: "Our Manufacturing Unit", href: "/manufacturing-unit" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101A2B] text-[#F5EADF] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Craft Heritage */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-3">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo/arg-logo-white.png"
                  alt="A.R.G SILVERS"
                  width={200}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <div>
                {/* <p className="font-serif-heading text-2xl font-normal tracking-wide text-[#F5EADF]">
                  A.R.G SILVERS
                </p> */}
                <p className="text-xs tracking-[0.18em] uppercase text-[#C49A43] font-medium mt-0.5">
                  Traditional Silver Handicrafts · Since 1925
                </p>
              </div>
            </div>

            <p className="text-sm text-[#C5C8CC] leading-relaxed max-w-sm font-light">
              A family-run traditional silver manufacturing business based in Kumbakonam, Tamil Nadu. Handcrafting sacred temple articles and heirloom silver since 1925.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C5C8CC]/80 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C49A43] shrink-0" />
              <span>Kumbakonam, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C49A43] pb-2 border-b border-white/10">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F5EADF]/80 hover:text-[#C49A43] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49A43]/40" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 space-y-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C49A43] pb-2 border-b border-white/10">
                A.R.G. SILVERS Advantages
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-3 text-sm text-[#F5EADF]/80">
                  <div className="w-8 h-8 rounded-sm bg-white p-0.5 shrink-0 flex items-center justify-center shadow-xs">
                    <Image
                      src="/images/bis-hallmark.png"
                      alt="BIS Hallmark Jewellery"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>BIS Hallmark Jewellery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details & Workshops */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C49A43] pb-2 border-b border-white/10">
              Manufacturing Units
            </p>

            <div className="space-y-3 text-xs text-[#C5C8CC] leading-relaxed">
              <div>
                <span className="font-medium text-[#F5EADF] block">Unit 01:</span>
                37/73 Mukkannar Street, Kumbakonam – 612001
              </div>
              <div>
                <span className="font-medium text-[#F5EADF] block">Unit 02:</span>
                104/65 Mukkannar Street, Kumbakonam – 612001
              </div>
              <div className="text-[11px] text-[#C5C8CC]/70">Thanjavur District, Tamil Nadu</div>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-start gap-2.5 text-xs text-[#C5C8CC]">
                <Phone className="w-3.5 h-3.5 text-[#C49A43] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a
                      key={phone.label}
                      href={phone.href}
                      className="hover:text-white transition-colors"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-[#C5C8CC] pt-1">
                <Mail className="w-3.5 h-3.5 text-[#C49A43] shrink-0" />
                <a
                  href={COMPANY_INFO.email.href}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email.label}
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#C5C8CC] pt-1">
                <span className="text-[#C49A43] font-semibold text-[10px] tracking-wider uppercase border border-[#C49A43]/40 px-1.5 py-0.5 rounded-xs">
                  GST
                </span>
                <span className="font-mono text-[#F5EADF] tracking-wider">
                  {COMPANY_INFO.gst}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Divider & Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#C5C8CC]/70 font-light text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
            <p>© 1925 – 2026 A.R.G SILVERS. All rights reserved.</p>
            <span className="text-[#C49A43]/40 hidden sm:inline">|</span>
            <p>
              GST:{" "}
              <span className="font-mono text-[#F5EADF] font-medium tracking-wider">
                {COMPANY_INFO.gst}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
            <p>Traditional Silver Handicrafts · Kumbakonam, Tamil Nadu</p>
            <span className="text-[#C49A43]/40 hidden sm:inline">|</span>
            <p>
              Design and developed by{" "}
              <a
                href="https://three-dots.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C49A43] hover:text-[#d4a84e] transition-colors underline-offset-2 hover:underline font-normal"
              >
                Three Dots
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
