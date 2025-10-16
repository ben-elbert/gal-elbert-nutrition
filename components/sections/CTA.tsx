import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section 
      id="contact" 
      className="section text-white"
      style={{ 
        background: `linear-gradient(to bottom right, var(--primary), color-mix(in srgb, var(--primary) 70%, black))`
      }}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">מוכנים להתחיל?</h2>
          <p className="text-xl mb-8 opacity-90">
            בוא נקבע פגישת ייעוץ ראשונית ונתחיל את המסע לאורח חיים בריא יותר
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-200 text-center"
          >
            <Phone size={32} className="mx-auto mb-3" />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm opacity-90">שלח הודעה</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-200 text-center"
          >
            <Mail size={32} className="mx-auto mb-3" />
            <h3 className="font-semibold mb-2">אימייל</h3>
            <p className="text-sm opacity-90">{siteConfig.contact.email}</p>
          </a>

          {/* Calendly */}
          <a
            href={siteConfig.contact.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-200 text-center"
          >
            <Calendar size={32} className="mx-auto mb-3" />
            <h3 className="font-semibold mb-2">קביעת תור</h3>
            <p className="text-sm opacity-90">Calendly</p>
          </a>

          {/* Location */}
          <a
            href={siteConfig.contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-200 text-center"
          >
            <MapPin size={32} className="mx-auto mb-3" />
            <h3 className="font-semibold mb-2">מיקום</h3>
            <p className="text-sm opacity-90">{siteConfig.contact.address.he}</p>
          </a>
        </div>

        <div className="text-center">
          <p className="text-lg opacity-90">
            פגישת הייעוץ הראשונית היא ההזדמנות שלנו להכיר, להבין את המטרות שלך ולבנות תוכנית מותאמת אישית
          </p>
        </div>
      </div>
    </section>
  );
}
