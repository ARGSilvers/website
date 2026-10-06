"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { COMPANY_INFO } from "@/lib/data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Products", href: "/products" },
  { name: "Our Manufacturing Unit", href: "/manufacturing-unit" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FCFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#DFE5EC]/80 py-3.5"
            : "bg-[#FCFBF7] border-b border-[#DFE5EC]/50 py-4 lg:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0A1B33]/20 rounded-md"
              aria-label="A.R.G SILVERS - Home"
            >
              <div className="relative h-10 sm:h-11 md:h-12 w-auto flex items-center">
                <Image
                  src="/images/logo/arg-logo-horizontal.png"
                  alt="A.R.G SILVERS - Traditional Silver Handicrafts Since 1925"
                  width={240}
                  height={48}
                  className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0A1B33]/20 ${
                      isActive
                        ? "text-[#0A1B33] font-semibold"
                        : "text-[#3F4B5A] hover:text-[#0A1B33]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0A1B33] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={COMPANY_INFO.phones[0].href}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#0A1B33] font-medium border border-[#DFE5EC] bg-white hover:bg-[#F0F4F8] hover:border-[#C8D1DC] px-3.5 py-2 rounded-sm transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#0A1B33]" />
                <span>{COMPANY_INFO.phones[0].label}</span>
              </a>
            </div>

            {/* Mobile Actions: Phone & Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={COMPANY_INFO.phones[0].href}
                aria-label="Call A.R.G SILVERS"
                className="p-2 text-[#0A1B33] hover:bg-[#F0F4F8] rounded-md transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="p-2 text-[#0A1B33] hover:bg-[#F0F4F8] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A1B33]/20"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
