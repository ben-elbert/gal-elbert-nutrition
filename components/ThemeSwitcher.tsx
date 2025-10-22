"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ThemeSwitcher() {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-200 hover:scale-110 flex items-center justify-center"
        aria-label="פנה אלינו בוואטסאפ"
        title="שלח הודעה בוואטסאפ"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
