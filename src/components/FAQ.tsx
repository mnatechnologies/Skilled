"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Get answers to common questions about NDIS Support Coordination
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {siteConfig.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-teal-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-orange-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
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
