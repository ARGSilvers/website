"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-[#F5F2EA] p-8 sm:p-10 rounded-sm border border-[#EDE7DC] text-center space-y-4">
        <div className="w-12 h-12 bg-[#0A1B33] text-white rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#0A1B33]">
          Thank You, {formData.name}
        </h3>
        <p className="text-sm text-[#3F4B5A] leading-relaxed max-w-md mx-auto">
          We have received your message. Our craftsmen will reach out to you directly at{" "}
          <strong className="text-[#0A1B33]">{formData.phone || formData.email}</strong> shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", email: "", message: "" });
          }}
          className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#0A1B33] hover:underline cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-sm border border-[#DFE5EC] shadow-xs space-y-5"
    >
      <div className="space-y-1">
        <h3 className="font-display text-xl font-bold text-[#0A1B33]">
          Send Direct Message
        </h3>
        <p className="text-xs text-[#758394]">
          Fill in your details and requirement below.
        </p>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-wider text-[#151C26] mb-1.5"
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
          className="w-full px-3.5 py-2.5 bg-[#FCFBF7] border border-[#DFE5EC] rounded-xs text-sm text-[#151C26] focus:outline-none focus:ring-1 focus:ring-[#0A1B33] focus:border-[#0A1B33] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-wider text-[#151C26] mb-1.5"
          >
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 Phone number"
            className="w-full px-3.5 py-2.5 bg-[#FCFBF7] border border-[#DFE5EC] rounded-xs text-sm text-[#151C26] focus:outline-none focus:ring-1 focus:ring-[#0A1B33] focus:border-[#0A1B33] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-[#151C26] mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full px-3.5 py-2.5 bg-[#FCFBF7] border border-[#DFE5EC] rounded-xs text-sm text-[#151C26] focus:outline-none focus:ring-1 focus:ring-[#0A1B33] focus:border-[#0A1B33] transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-[#151C26] mb-1.5"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about the traditional silver articles or temple requirements..."
          className="w-full px-3.5 py-2.5 bg-[#FCFBF7] border border-[#DFE5EC] rounded-xs text-sm text-[#151C26] focus:outline-none focus:ring-1 focus:ring-[#0A1B33] focus:border-[#0A1B33] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 bg-[#0A1B33] hover:bg-[#162E52] text-white text-xs font-semibold uppercase tracking-widest rounded-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
      >
        <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
        <Send className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}
