import { siteConfig } from "@/config/site";

export function EligibilitySteps() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-bold uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-3 mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Getting started is easy. We handle everything from assessment to
            clean-up so you can focus on what comes next.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.process.map((step, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-dark rounded-lg flex items-center justify-center text-gold text-2xl font-extrabold group-hover:bg-gold group-hover:text-dark transition-colors">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gold text-dark px-10 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-gold-light transition-all hover:scale-105 shadow-lg shadow-gold/20"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
