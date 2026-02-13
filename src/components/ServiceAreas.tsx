import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-bold uppercase tracking-widest">
            Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mt-3 mb-4">
            Areas We <span className="text-gradient-gold">Service</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide demolition services across the greater Sydney
            metropolitan area and surrounding regions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {siteConfig.serviceAreas.map((area, index) => (
            <a
              key={index}
              href="#contact"
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-5 py-4 hover:border-gold hover:shadow-md transition-all group"
            >
              <MapPin
                size={18}
                className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform"
              />
              <span className="font-medium text-dark text-sm group-hover:text-gold transition-colors">
                {area}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Don&apos;t see your area? Contact us — we may still be able to help.
        </p>
      </div>
    </section>
  );
}
