"use client";

import { useState, FormEvent } from "react";
import { Check, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const leadScore = calculateLeadScore(data);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          leadQuality: leadScore.quality,
          leadScore: leadScore.score,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const calculateLeadScore = (data: Record<string, FormDataEntryValue>) => {
    let score = 0;
    const notes: string[] = [];

    if (data["project-type"] === "residential") {
      score += 25;
      notes.push("Residential demo");
    } else if (data["project-type"] === "commercial") {
      score += 30;
      notes.push("Commercial demo - high value");
    } else if (data["project-type"] === "strip-out") {
      score += 20;
      notes.push("Strip out project");
    }

    if (data["timeline"] === "urgent") {
      score += 25;
      notes.push("Urgent - high priority");
    } else if (data["timeline"] === "1-month") {
      score += 20;
      notes.push("Within 1 month");
    } else if (data["timeline"] === "3-months") {
      score += 10;
      notes.push("Within 3 months");
    }

    if (data["budget"]) {
      score += 15;
      notes.push("Budget provided");
    }

    if (data.phone) {
      score += 10;
      notes.push("Phone provided");
    }

    let quality = "Low";
    if (score >= 60) quality = "High";
    else if (score >= 35) quality = "Medium";

    return { score, quality, notes };
  };

  return (
    <section
      id="contact"
      className="py-20 bg-dark text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Info Side */}
          <div>
            <span className="text-gold text-sm font-bold uppercase tracking-widest">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-6">
              Request a{" "}
              <span className="text-gradient-gold">Free Quote</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within
              24 hours with a detailed, no-obligation quote.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Free site assessment & quote",
                "No hidden fees or surprises",
                "Fully licensed & insured team",
                "We handle all council permits",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                    <Check className="text-dark" size={14} />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 border-t border-gray-800 pt-8">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
              >
                <Phone size={20} className="text-gold" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
              >
                <Mail size={20} className="text-gold" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-gold" />
                {siteConfig.address}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="text-dark" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-500">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-gold focus:outline-none text-gray-900 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-gold focus:outline-none text-gray-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-gold focus:outline-none text-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Type of Project *
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-gold focus:outline-none text-gray-900 transition-colors"
                  >
                    <option value="">Please select</option>
                    <option value="residential">
                      Residential Demolition
                    </option>
                    <option value="commercial">
                      Commercial Demolition
                    </option>
                    <option value="strip-out">Strip Out / Gutting</option>
                    <option value="asbestos">Asbestos Removal</option>
                    <option value="rubbish">Rubbish Removal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    When do you need this done?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-gold focus:outline-none text-gray-900 transition-colors"
                  >
                    <option value="">Please select</option>
                    <option value="urgent">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="planning">Just getting quotes</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Project Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Suburb or postcode"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-gold focus:outline-none text-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Project Details (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-gold focus:outline-none text-gray-900 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gold text-dark px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-gold-light transition-all hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitting ? "Sending..." : "Get My Free Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
