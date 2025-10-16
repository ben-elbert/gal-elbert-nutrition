import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{siteConfig.name.he}</h3>
            <p className="text-gray-300 mb-4">{siteConfig.valuePropositions.he[0]}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  בית
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  בלוג
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href={`tel:${siteConfig.contact.phone}`} className="text-gray-300 hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-gray-300">{siteConfig.contact.address.he}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {siteConfig.name.he}. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
