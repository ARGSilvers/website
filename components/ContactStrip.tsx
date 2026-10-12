import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ContactStripProps {
  heading: string;
  supportingCopy?: string;
  buttonText?: string;
  theme?: "velvet" | "beige";
}

export default function ContactStrip({
  heading,
  supportingCopy,
  buttonText = "CONTACT US",
  theme = "velvet",
}: ContactStripProps) {
  const isVelvet = theme === "velvet";

  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
        isVelvet
          ? "bg-velvet-texture text-[#F5EADF] border-t border-[#101A2B]"
          : "bg-beige-texture text-[#17243B] border-t border-[#E9D8BE]"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 relative z-10">
        <h2
          className={`font-serif-heading text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight ${
            isVelvet ? "text-[#F5EADF]" : "text-[#17243B]"
          }`}
        >
          {heading}
        </h2>

        {supportingCopy && (
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light ${
              isVelvet ? "text-[#C5C8CC]" : "text-[#292824]/80"
            }`}
          >
            {supportingCopy}
          </p>
        )}

        <div>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase rounded-xs transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none ${
              isVelvet
                ? "bg-[#C49A43] hover:bg-[#d4a84e] text-[#101A2B]"
                : "bg-[#17243B] hover:bg-[#101A2B] text-[#F5EADF]"
            }`}
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
