"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "How It Works" },
    { href: "#areas", label: "Areas" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-dark-alt"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/skilled/fulllogo_transparent_nobuffer.png"
              alt={siteConfig.businessName}
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium text-sm uppercase tracking-wider text-gray-300 hover:text-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors"
            >
              <Phone size={18} />
              {siteConfig.phone}
            </a>
            <a
              href="#contact"
              className="bg-gold text-dark px-6 py-2.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-gold-light transition-all hover:scale-105"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800 animate-fadeIn">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 px-4 font-medium text-gray-300 hover:text-gold hover:bg-dark-alt/50 rounded transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-gray-800 mt-2">
                <a
                  href="#contact"
                  className="block bg-gold text-dark px-6 py-3 rounded font-bold text-center uppercase tracking-wider hover:bg-gold-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
