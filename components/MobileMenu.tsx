"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, X, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Products", href: "/products" },
  { name: "Our Manufacturing Unit", href: "/manufacturing-unit" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#061122]/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FCFBF7] shadow-2xl flex flex-col justify-between border-l border-[#DFE5EC] transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="p-6 border-b border-[#DFE5EC] flex items-center justify-between bg-white">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src="/images/logo/arg-logo-horizontal.png"
              alt="A.R.G SILVERS"
              width={160}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-[#0A1B33] hover:text-[#162E52] hover:bg-[#F0F4F8] rounded-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <p className="text-xs uppercase tracking-widest text-[#758394] font-medium mb-4">
            Navigation
          </p>
          <nav className="space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-3 px-4 rounded-md text-base transition-all ${
                    isActive
                      ? "bg-[#0A1B33] text-white font-medium shadow-sm"
                      : "text-[#151C26] hover:bg-[#F0F4F8] hover:text-[#0A1B33]"
                  }`}
                >
                  <span className="font-display tracking-wide">{link.name}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-white translate-x-1" : "text-[#758394]"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Quick Heritage Info */}
          <div className="mt-8 p-4 rounded-lg bg-[#F5F2EA] border border-[#EDE7DC]">
            <p className="text-xs font-semibold text-[#0A1B33] uppercase tracking-wider">
              Kumbakonam Heritage
            </p>
            <p className="text-xs text-[#3F4B5A] mt-1 leading-relaxed">
              Family-owned silver craftsmanship carried through three generations since 1925. Two manufacturing units on Mukkannar Street.
            </p>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-6 border-t border-[#DFE5EC] bg-white space-y-3">
          <div className="flex items-center gap-3 text-xs text-[#3F4B5A]">
            <MapPin className="w-4 h-4 text-[#0A1B33] shrink-0" />
            <span>Kumbakonam, Tamil Nadu – 612001</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#3F4B5A]">
            <Phone className="w-4 h-4 text-[#0A1B33] shrink-0" />
            <a
              href={COMPANY_INFO.phones[0].href}
              className="hover:text-[#0A1B33] transition-colors font-medium"
            >
              {COMPANY_INFO.phones[0].label}
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#3F4B5A]">
            <Mail className="w-4 h-4 text-[#0A1B33] shrink-0" />
            <a
              href={COMPANY_INFO.email.href}
              className="hover:text-[#0A1B33] transition-colors truncate"
            >
              {COMPANY_INFO.email.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
