"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-bold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-3 mb-4">
            Common <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about our demolition services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {siteConfig.faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gold/50 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-dark">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={22}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
