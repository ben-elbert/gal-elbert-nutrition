"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "בית" },
    { href: "#services", label: "שירותים" },
    { href: "#about", label: "אודות" },
    { href: "/blog", label: "בלוג" },
    { href: "#contact", label: "צור קשר" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-heading font-bold"
            style={{ color: "var(--primary)" }}
          >
            {siteConfig.name.he}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-dark hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 text-white"
              style={{ backgroundColor: "var(--primary)" }}
            >
              קבע פגישה
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="תפריט"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-dark hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 text-white text-center"
                style={{ backgroundColor: "var(--primary)" }}
              >
                קבע פגישה
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
