import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.businessName}</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Expert NDIS Support Coordination services across Australia, helping you navigate your NDIS journey with confidence.
            </p>
            <p className="text-sm">
              <strong>NDIS Registration:</strong><br />
              <span className="text-gray-400">{siteConfig.ndisRegistration}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#services", label: "Services" },
                { href: "#eligibility", label: "Eligibility" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">{siteConfig.serviceArea}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} {siteConfig.businessName}. All rights reserved. |{" "}
            <a href="#" className="hover:text-yellow-400 transition-colors underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-yellow-400 transition-colors underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
