import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
            {siteConfig.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 animate-fadeInUp animation-delay-200">
            {siteConfig.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <a
              href="#contact"
              className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="#eligibility"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-teal-900 transition-all hover:scale-105"
            >
              Check Eligibility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
