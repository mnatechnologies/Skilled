import { Shield, DollarSign, HardHat, Recycle } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  dollar: DollarSign,
  "hard-hat": HardHat,
  recycle: Recycle,
};

export function ValueProps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteConfig.valueProps.map((prop, index) => {
            const Icon = iconMap[prop.icon] || Shield;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Icon className="text-gold" size={28} />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">
                  {prop.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
