import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function TopBar() {
  return (
    <div className="bg-dark text-white py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone size={14} className="text-gold" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail size={14} className="text-gold" />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={14} className="text-gold" />
            {siteConfig.serviceArea}
          </div>
        </div>
      </div>
    </div>
  );
}
