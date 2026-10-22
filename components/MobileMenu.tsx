"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, X, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  currentPath: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  currentPath,
}: MobileMenuProps) {
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
      className="fixed inset-0 z-50 md:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#101A2B]/85 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#17243B] text-[#F5EADF] shadow-2xl flex flex-col justify-between border-l border-white/10 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#101A2B]">
          <Link href="/" onClick={onClose} className="flex items-center gap-3">
            <Image
              src="/images/logo/arg-logo-white.png"
              alt="A.R.G SILVERS"
              width={160}
              height={36}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-[#F5EADF] hover:text-[#C49A43] hover:bg-white/5 rounded-md transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C49A43] font-semibold mb-4">
            Navigation
          </p>
          <nav className="space-y-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-sm text-sm transition-all ${
                    isActive
                      ? "bg-[#101A2B] text-[#C49A43] font-semibold border-l-2 border-[#C49A43]"
                      : "text-[#F5EADF] hover:bg-white/5 hover:text-[#C49A43]"
                  }`}
                >
                  <span className="tracking-wide">{link.name}</span>
                 
                </Link>
              );
            })}
          </nav>

          {/* Heritage Note */}
          <div className="mt-8 p-4 rounded-sm bg-[#101A2B]/80 border border-white/10">
            <p className="text-[11px] font-semibold text-[#C49A43] uppercase tracking-wider">
              Kumbakonam Heritage Since 1925
            </p>
            <p className="text-xs text-[#C5C8CC] mt-1 leading-relaxed font-light">
              100+ years of traditional silver craftsmanship carried through three generations. Two manufacturing units on Mukkannar Street.
            </p>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-6 border-t border-white/10 bg-[#101A2B] space-y-3">
          <div className="flex items-center gap-3 text-xs text-[#C5C8CC]">
            <MapPin className="w-4 h-4 text-[#C49A43] shrink-0" />
            <span>Kumbakonam, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#C5C8CC]">
            <Phone className="w-4 h-4 text-[#C49A43] shrink-0" />
            <a
              href={COMPANY_INFO.phones[0].href}
              className="hover:text-white transition-colors"
            >
              {COMPANY_INFO.phones[0].label}
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#C5C8CC]">
            <Mail className="w-4 h-4 text-[#C49A43] shrink-0" />
            <a
              href={COMPANY_INFO.email.href}
              className="hover:text-white transition-colors truncate"
            >
              {COMPANY_INFO.email.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
