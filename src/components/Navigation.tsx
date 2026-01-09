"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#eligibility", label: "Eligibility" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-teal-900">
            {siteConfig.businessName}
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-orange-500 transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition-colors"
          >
            Request a Call Back
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-teal-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold text-center hover:bg-orange-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request a Call Back
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
