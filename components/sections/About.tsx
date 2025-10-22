import Image from "next/image";
import { GraduationCap, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="section bg-neutral">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
              alt="אורח חיים בריא ותזונה מאוזנת"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="heading-2 mb-6">אודותיי</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              שמי גל הלברט, ואני תזונאית קלינית מוסמכת עם תשוקה לעזור לאנשים להשיג את מטרות הבריאות שלהם
              באמצעות תזונה נכונה ומדעית.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              אני מאמינה בגישה אישית ומקצועית, שמתחשבת בצרכים הייחודיים של כל לקוח. המטרה שלי היא לא רק
              לספק תוכנית תזונה, אלא ללוות אותך בדרך לשינוי אורח חיים בר-קיימא.
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-semibold mb-4">השכלה והסמכות</h3>
              {siteConfig.credentials.he.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  {index === 0 ? (
                    <GraduationCap className="text-primary mt-1 flex-shrink-0" size={24} />
                  ) : (
                    <Award className="text-primary mt-1 flex-shrink-0" size={24} />
                  )}
                  <p className="text-gray-700">{credential}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 text-white"
                style={{ backgroundColor: "var(--primary)" }}
              >
                בוא נתחיל את המסע יחד
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
