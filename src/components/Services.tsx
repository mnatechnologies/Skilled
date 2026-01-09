import { Users, Activity, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = {
  users: Users,
  activity: Activity,
  check: CheckCircle,
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-900 mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive NDIS support tailored to your unique needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-900 transition-colors">
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
