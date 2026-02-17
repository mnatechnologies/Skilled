import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-alt text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <Image
              src="/skilled/fulllogo_transparent_nobuffer.png"
              alt={siteConfig.businessName}
              width={160}
              height={45}
              className="h-10 w-auto mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional demolition services across Sydney. Fully insured
              and committed to safe, efficient project delivery.
            </p>
            <p className="text-xs text-gray-600">
              ABN: {siteConfig.abn}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gold uppercase tracking-wider text-sm mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gold uppercase tracking-wider text-sm mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#process", label: "How It Works" },
                { href: "#areas", label: "Service Areas" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gold uppercase tracking-wider text-sm mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                >
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                {siteConfig.address}
              </li>
            </ul>

            <div className="flex gap-3">
              {[
                { href: siteConfig.social.facebook, Icon: Facebook, label: "Facebook" },
                { href: siteConfig.social.instagram, Icon: Instagram, label: "Instagram" },
                { href: siteConfig.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 bg-dark rounded flex items-center justify-center hover:bg-gold hover:text-dark transition-all"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>
              &copy; {currentYear} {siteConfig.businessName}. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gold transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
