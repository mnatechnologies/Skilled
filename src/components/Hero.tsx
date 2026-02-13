import { siteConfig } from "@/config/site";
import { Phone, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-dark text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201,168,76,0.1) 35px, rgba(201,168,76,0.1) 36px)",
          }}
        />
      </div>

      {/* Gold accent line at top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-8 animate-fadeInUp">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              {siteConfig.tagline}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 animate-fadeInUp animation-delay-200 leading-tight">
            {siteConfig.hero.title.split("Demolition").map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  {part}
                  <span className="text-gradient-gold">Demolition</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto animate-fadeInUp animation-delay-400">
            {siteConfig.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-600">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-dark px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-gold-light transition-all hover:scale-105 shadow-lg shadow-gold/20"
            >
              Get Free Quote
              <ArrowRight size={20} />
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-white px-8 py-4 rounded font-bold text-lg hover:border-gold hover:text-gold transition-all hover:scale-105"
            >
              <Phone size={20} />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {siteConfig.hero.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center border-l border-gray-800 first:border-l-0 animate-countUp"
              style={{ animationDelay: `${0.8 + i * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom angled edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 60L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
