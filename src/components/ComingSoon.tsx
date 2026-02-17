"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ComingSoon() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send");

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden flex flex-col">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal gold accent line */}
      <div className="absolute top-0 right-0 w-[1px] h-[60vh] bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 transform rotate-12 translate-x-[-30vw] translate-y-[10vh]" />
      <div className="absolute bottom-0 left-0 w-[1px] h-[50vh] bg-gradient-to-t from-gold/0 via-gold/20 to-gold/0 transform -rotate-12 translate-x-[20vw] translate-y-[-5vh]" />

      {/* Top bar */}
      <header className="relative z-10 px-6 py-6 sm:px-10 sm:py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-[family-name:var(--font-raleway)]">
              {siteConfig.businessName.split(" ")[0]}
              <span className="text-gradient-gold">
                {" "}
                {siteConfig.businessName.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="hidden sm:flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors font-semibold tracking-wide"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center px-6 sm:px-10 py-10 sm:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Left — Message */}
            <div className="animate-fadeInUp">
              {/* Gold rule */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[2px] w-12 bg-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">
                  Launching Soon
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight font-[family-name:var(--font-raleway)] mb-6">
                Something
                <br />
                <span className="text-gradient-gold">Big</span> Is
                <br />
                Coming.
              </h2>

              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-md mb-10">
                Sydney&apos;s newest demolition experts are gearing up.
                Professional, licensed, and ready to deliver.
              </p>

              {/* Contact details */}
              <div className="space-y-4 border-t border-white/10 pt-8">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-gold/50 flex items-center justify-center transition-colors">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Call us
                    </div>
                    <div className="font-semibold">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-gold/50 flex items-center justify-center transition-colors">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Email
                    </div>
                    <div className="font-semibold">{siteConfig.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      Service area
                    </div>
                    <div className="font-semibold">{siteConfig.serviceArea}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Quick Enquiry Form */}
            <div className="animate-fadeInUp animation-delay-200">
              <div className="relative">
                {/* Gold corner accents */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/60" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/60" />

                <div className="bg-dark-alt/80 backdrop-blur-sm border border-white/5 rounded-sm p-8 sm:p-10">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="text-gold" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-raleway)]">
                        Message Received
                      </h3>
                      <p className="text-gray-400">
                        We&apos;ll be in touch shortly. Thank you!
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-raleway)]">
                          Quick Enquiry
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Leave your details and we&apos;ll get back to you.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your name *"
                            className="w-full bg-transparent border-b border-white/10 focus:border-gold px-0 py-3 text-white placeholder:text-gray-600 focus:outline-none transition-colors text-sm"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Phone *"
                            className="w-full bg-transparent border-b border-white/10 focus:border-gold px-0 py-3 text-white placeholder:text-gray-600 focus:outline-none transition-colors text-sm"
                          />
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email *"
                            className="w-full bg-transparent border-b border-white/10 focus:border-gold px-0 py-3 text-white placeholder:text-gray-600 focus:outline-none transition-colors text-sm"
                          />
                        </div>

                        <div>
                          <textarea
                            name="message"
                            rows={3}
                            placeholder="Tell us about your project..."
                            className="w-full bg-transparent border-b border-white/10 focus:border-gold px-0 py-3 text-white placeholder:text-gray-600 focus:outline-none transition-colors text-sm resize-none"
                          />
                        </div>

                        {error && (
                          <p className="text-red-400 text-sm">{error}</p>
                        )}

                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full mt-3 bg-gold hover:bg-gold-light text-dark px-8 py-4 font-bold text-sm uppercase tracking-[0.2em] transition-all hover:tracking-[0.3em] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                        >
                          {submitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Enquiry
                              <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 sm:px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="text-gray-600 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All
            rights reserved.
          </p>
          <p className="text-gray-600 text-xs tracking-wider">
            {siteConfig.licence} &middot; ABN {siteConfig.abn}
          </p>
        </div>
      </footer>
    </div>
  );
}
