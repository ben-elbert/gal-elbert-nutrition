"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary-light via-neutral to-accent-light -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <h1 className="heading-1 mb-6">{siteConfig.name.he}</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {siteConfig.valuePropositions.he[0]}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {siteConfig.valuePropositions.he[1]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                קבע פגישה עכשיו
                <ArrowLeft size={20} />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 hover:text-white"
                style={{ 
                  borderColor: "var(--primary)",
                  color: "var(--primary)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                למד עוד
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
              alt="תזונה בריאה"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
