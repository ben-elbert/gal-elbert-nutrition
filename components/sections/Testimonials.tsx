import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Testimonials() {
  const testimonials = siteConfig.testimonials?.he ?? [];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">מה הלקוחות שלי אומרים</h2>
          <p className="text-lg text-gray-600">
            סיפורי הצלחה אמיתיים מלקוחות מרוצים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="card">
              <blockquote className="text-gray-700 mb-4 leading-relaxed">&quot;{t.text}&quot;</blockquote>
              <div className="flex items-center justify-between">
                <cite className="font-semibold text-primary not-italic">— {t.name}</cite>
                {t.sourceUrl && (
                  <a
                    href={t.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    aria-label={`צפייה בפייסבוק עבור ${t.name} - ייפתח בחלון חדש`}
                  >
                    צפייה בפייסבוק
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
