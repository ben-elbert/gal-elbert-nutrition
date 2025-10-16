import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "שרה כהן",
      text: "גל עזרה לי להוריד 15 ק״ג בצורה בריאה ומאוזנת. היא מקצועית, סבלנית ותמיד זמינה לשאלות. ממליצה בחום!",
      rating: 5,
    },
    {
      name: "דוד לוי",
      text: "סבלתי מבעיות עיכול במשך שנים. התוכנית התזונתית של גל שינתה לי את החיים. תודה רבה!",
      rating: 5,
    },
    {
      name: "מיכל אברהם",
      text: "ליווי מקצועי ואישי לאורך כל ההריון. גל עזרה לי לשמור על תזונה נכונה ולהרגיש מעולה.",
      rating: 5,
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">מה הלקוחות שלי אומרים</h2>
          <p className="text-lg text-gray-600">
            סיפורי הצלחה אמיתיים מלקוחות מרוצים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="font-semibold text-primary">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
