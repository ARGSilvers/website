import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  description,
  alignment = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = alignment === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {kicker && (
        <div
          className={`flex items-center gap-2.5 mb-3.5 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="w-5 h-[1.5px] bg-[#C49A43]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A43]">
            {kicker}
          </span>
          {isCenter && <span className="w-5 h-[1.5px] bg-[#C49A43]" />}
        </div>
      )}

      <h2
        className={`font-serif-heading tracking-tight text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.15] ${
          isDark ? "text-[#F5EADF]" : "text-[#17243B]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
            isDark ? "text-[#C5C8CC]" : "text-[#292824]/85"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
