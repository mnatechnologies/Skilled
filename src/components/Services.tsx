import {
  Home,
  Building2,
  Truck,
  Layers,
  AlertTriangle,
  Trash2,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  building: Building2,
  truck: Truck,
  layers: Layers,
  alert: AlertTriangle,
  trash: Trash2,
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-bold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From complete house demolitions to precision strip-outs, we deliver
            professional results on every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <div
                key={index}
                className="bg-dark-alt border border-gray-700/50 p-8 rounded-lg hover:border-gold/50 transition-all group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="text-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-4 hover:gap-2 transition-all"
                >
                  Get a Quote &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
