"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-xs border border-[#E9D8BE] shadow-md space-y-5 text-center">
        <div className="w-12 h-12 bg-[#17243B] text-[#C49A43] rounded-full flex items-center justify-center mx-auto border border-[#C49A43]/40">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif-heading text-2xl font-normal text-[#17243B]">
          Thank You, {formData.name}
        </h3>
        <p className="text-sm text-[#292824]/85 leading-relaxed font-light max-w-md mx-auto">
          We have recorded your details regarding <strong className="text-[#17243B]">{formData.subject || "your requirement"}</strong>. For immediate assistance, our family is directly available via phone and email:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={COMPANY_INFO.phones[0].href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#17243B] text-[#F5EADF] text-xs font-semibold tracking-wider uppercase rounded-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#C49A43]" />
            <span>Call {COMPANY_INFO.phones[0].label}</span>
          </a>
          <a
            href={COMPANY_INFO.email.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-[#17243B] text-[#17243B] text-xs font-semibold tracking-wider uppercase rounded-xs hover:bg-[#F5EADF]"
          >
            <Mail className="w-3.5 h-3.5 text-[#C49A43]" />
            <span>Email Us Directly</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", contactInfo: "", subject: "", message: "" });
          }}
          className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#17243B] hover:text-[#C49A43] underline cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-xs border border-[#E9D8BE] shadow-xs space-y-4"
    >
      <div className="space-y-1">
        <h3 className="font-serif-heading text-2xl font-normal text-[#17243B]">
          Send a Message
        </h3>
        <p className="text-xs text-[#292824]/70">
          Direct enquiries about traditional silver articles or temple requirements.
        </p>
      </div>

      {/* Notice regarding primary direct channels */}
      <div className="p-3 bg-[#F5EADF]/60 rounded-xs border border-[#E9D8BE] text-[11px] text-[#292824]/80 leading-relaxed font-light">
        <strong className="font-semibold text-[#17243B]">Direct Assistance:</strong> For urgent temple commissions or order discussions, you can reach us immediately by phone at{" "}
        <a href={COMPANY_INFO.phones[0].href} className="underline text-[#17243B] font-medium">
          {COMPANY_INFO.phones[0].label}
        </a>.
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-wider text-[#17243B] mb-1"
        >
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          className="w-full px-3.5 py-2.5 bg-[#F5EADF]/30 border border-[#E9D8BE] rounded-xs text-sm text-[#292824] focus:outline-none focus:ring-1 focus:ring-[#C49A43] focus:border-[#C49A43] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="contactInfo"
          className="block text-xs font-semibold uppercase tracking-wider text-[#17243B] mb-1"
        >
          Phone or Email <span className="text-red-600">*</span>
        </label>
        <input
          id="contactInfo"
          type="text"
          required
          value={formData.contactInfo}
          onChange={(e) =>
            setFormData({ ...formData, contactInfo: e.target.value })
          }
          placeholder="+91 Phone number or email address"
          className="w-full px-3.5 py-2.5 bg-[#F5EADF]/30 border border-[#E9D8BE] rounded-xs text-sm text-[#292824] focus:outline-none focus:ring-1 focus:ring-[#C49A43] focus:border-[#C49A43] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-semibold uppercase tracking-wider text-[#17243B] mb-1"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="e.g. Temple Kavasam, Varalakshmi Amman, Traditional Silver Articles"
          className="w-full px-3.5 py-2.5 bg-[#F5EADF]/30 border border-[#E9D8BE] rounded-xs text-sm text-[#292824] focus:outline-none focus:ring-1 focus:ring-[#C49A43] focus:border-[#C49A43] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#17243B] mb-1"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please share details of your silver article or temple requirement..."
          className="w-full px-3.5 py-2.5 bg-[#F5EADF]/30 border border-[#E9D8BE] rounded-xs text-sm text-[#292824] focus:outline-none focus:ring-1 focus:ring-[#C49A43] focus:border-[#C49A43] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 bg-[#17243B] hover:bg-[#101A2B] text-[#F5EADF] text-xs font-semibold uppercase tracking-[0.18em] rounded-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
      >
        <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
        <Send className="w-3.5 h-3.5 text-[#C49A43]" />
      </button>
    </form>
  );
}
