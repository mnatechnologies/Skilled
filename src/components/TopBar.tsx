import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function TopBar() {
  return (
    <div className="bg-teal-900 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <MapPin size={16} />
            {siteConfig.serviceArea}
          </div>
        </div>
      </div>
    </div>
  );
}
