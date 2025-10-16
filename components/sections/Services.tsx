import { Scale, Heart, Baby, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = {
  scale: Scale,
  heart: Heart,
  baby: Baby,
  users: Users,
};

export function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">השירותים שלי</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            מציעה מגוון שירותי תזונה מותאמים אישית לצרכים שלך
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.he.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={index} className="card text-center">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{ 
                    backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                    color: "var(--primary)"
                  }}
                >
                  <Icon size={32} />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 text-white"
            style={{ backgroundColor: "var(--primary)" }}
          >
            בוא נדבר על הצרכים שלך
          </a>
        </div>
      </div>
    </section>
  );
}
