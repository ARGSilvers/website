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
    <footer className="bg-[#0A1B33] text-[#F5F2EA] border-t border-[#162E52] relative overflow-hidden">
      {/* Background watermark motif */}
      <div className="absolute right-[-80px] bottom-[-80px] w-96 h-96 opacity-5 pointer-events-none select-none">
        <Image
          src="/images/logo/arg-logo-white.png"
          alt=""
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Heritage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <Image
                  src="/images/logo/arg-logo-white.png"
                  alt="A.R.G SILVERS"
                  width={200}
                  height={116}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-display tracking-wide text-white">
                  A.R.G SILVERS
                </p>
                <p className="text-sm font-light tracking-widest text-[#C8D1DC] uppercase mt-0.5">
                  Traditional Silver Handicrafts · Since 1925
                </p>
              </div>
            </div>

            <p className="text-sm text-[#C8D1DC]/90 leading-relaxed max-w-md font-light">
              A family-run silver manufacturing tradition rooted in Kumbakonam, Tamil Nadu. For three generations, crafting sacred temple articles, traditional vessels, and heirloom silver handicrafts with quiet dedication.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#C8D1DC]/70 border-t border-[#162E52]/80">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400/80" />
              <span>Two Active Manufacturing Units in Kumbakonam</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/90 pb-2 border-b border-[#162E52]">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#C8D1DC] hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#162E52] group-hover:bg-[#C8D1DC] transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Workshop Units */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/90 pb-2 border-b border-[#162E52]">
              Kumbakonam Workshop Units
            </h3>

            <div className="space-y-4 text-sm text-[#C8D1DC]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C8D1DC] shrink-0 mt-1" />
                <div className="space-y-2 text-xs leading-relaxed">
                  <div>
                    <span className="font-semibold text-white block">Unit 01:</span>
                    37/73 Mukkannar Street, Kumbakonam – 612001
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Unit 02:</span>
                    104/65 Mukkannar Street, Kumbakonam – 612001
                  </div>
                  <div className="text-[#C8D1DC]/70">Thanjavur District, Tamil Nadu</div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#162E52] space-y-2">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C8D1DC] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1 text-xs">
                    {COMPANY_INFO.phones.map((phone) => (
                      <a
                        key={phone.label}
                        href={phone.href}
                        className="text-[#C8D1DC] hover:text-white transition-colors"
                      >
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Mail className="w-4 h-4 text-[#C8D1DC] shrink-0" />
                  <a
                    href={COMPANY_INFO.email.href}
                    className="text-xs text-[#C8D1DC] hover:text-white transition-colors break-all"
                  >
                    {COMPANY_INFO.email.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#162E52] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#C8D1DC]/60">
          <p>© 1925 – 2026 A.R.G SILVERS. All Rights Reserved.</p>
          <p className="text-center">
            Handcrafted Silver Traditions · Kumbakonam, Tamil Nadu
          </p>
          <p className="text-center md:text-right">
            Designed and Developed by{" "}
            <a
              href="https://www.three-dots.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8D1DC] hover:text-white transition-colors underline underline-offset-4 decoration-[#162E52] hover:decoration-white"
            >
              Three Dots
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
