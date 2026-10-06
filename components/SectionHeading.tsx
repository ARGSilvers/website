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
          className={`flex items-center gap-2 mb-3 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span
            className={`w-6 h-[1.5px] ${
              isDark ? "bg-[#C8D1DC]/60" : "bg-[#0A1B33]/60"
            }`}
          />
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              isDark ? "text-[#C8D1DC]" : "text-[#0A1B33]"
            }`}
          >
            {kicker}
          </span>
          <span
            className={`w-6 h-[1.5px] ${
              isDark ? "bg-[#C8D1DC]/60" : "bg-[#0A1B33]/60"
            }`}
          />
        </div>
      )}

      <h2
        className={`font-display tracking-tight text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight ${
          isDark ? "text-white" : "text-[#0A1B33]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
            isDark ? "text-[#C8D1DC]" : "text-[#3F4B5A]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
