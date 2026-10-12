"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

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
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home: fixed over hero, transparent at top with dark gradient, solid dark velvet blue on scroll
  // On other pages: sticky top-0, solid dark velvet blue (#17243B)
  const headerClasses = isHome
    ? `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#17243B] shadow-lg border-b border-[#101A2B]"
          : "bg-gradient-to-b from-[#101A2B]/85 via-[#17243B]/50 to-transparent border-b border-white/10"
      }`
    : "sticky top-0 z-50 w-full bg-[#17243B] border-b border-[#101A2B] shadow-sm";

  return (
    <>
      <header className={headerClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* A.R.G SILVERS Logo / Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none rounded-sm"
              aria-label="A.R.G SILVERS - Home"
            >
              <div className="relative h-11 sm:h-12 w-auto flex items-center">
                <Image
                  src="/images/logo/arg-logo-horizontal-white.png"
                  alt="A.R.G SILVERS - Traditional Silver Craftsmanship Since 1925"
                  width={240}
                  height={46}
                  className="h-9 sm:h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90 drop-shadow-sm"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-1 lg:gap-3"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-xs  ${
                      isActive
                        ? "text-[#C49A43] font-semibold"
                        : "text-[#F5EADF] hover:text-[#C49A43] drop-shadow-sm"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#C49A43] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="p-2 text-[#F5EADF] hover:text-[#C49A43] hover:bg-white/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#C49A43]/50"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={pathname}
      />
    </>
  );
}
