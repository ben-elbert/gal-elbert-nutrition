"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ConsultationOptions } from "./ConsultationOptions";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary-light via-neutral to-accent-light -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="text-center lg:text-right">
            <h1 className="heading-1 mb-6">{siteConfig.name.he}</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {siteConfig.valuePropositions.he[0]}
            </p>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              {siteConfig.valuePropositions.he[1]}
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/gal-profile.jpg"
              alt="גל הלברט - תזונאית קלינית"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Consultation Options */}
        <ConsultationOptions />
      </div>
    </section>
  );
}
