"use client";

import { Check, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ConsultationOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
      {/* ייעוץ פרונטלי מלא */}
      <div className="card hover:shadow-xl transition-shadow duration-300">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--primary)" }}>
            ייעוץ פרונטלי מלא
          </h3>
          <p className="text-gray-600">הליווי המקיף שלך לבריאות מיטבית</p>
        </div>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>פגישה פנים אל פנים בקליניקה</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>תפריט אישי מלא ומפורט</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>תשאול תזונתי מקיף</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>המלצות לתוספי תזונה</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>אפשרות לליווי חודשי</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>מעקב והתאמות לאורך זמן</span>
          </li>
        </ul>

        <div className="text-center mb-4">
          <p className="text-lg font-semibold text-gray-700">לפי מחירון</p>
        </div>

        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white"
          style={{ backgroundColor: "var(--primary)" }}
        >
          קביעת פגישה
          <ArrowLeft size={20} />
        </a>
      </div>

      {/* ייעוץ און-ליין מהיר */}
      <div className="card hover:shadow-xl transition-shadow duration-300 relative border-2" style={{ borderColor: "var(--accent)" }}>
        {/* תג "מחיר מיוחד" */}
        <div className="absolute -top-3 right-4 px-4 py-1 rounded-full text-white text-sm font-bold" style={{ backgroundColor: "var(--accent)" }}>
          🎁 מחיר מיוחד
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--primary)" }}>
            ייעוץ און-ליין מהיר
          </h3>
          <p className="text-gray-600">פתרון מהיר ויעיל מהבית</p>
        </div>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>פגישת Zoom (45 דקות)</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>תשאול תזונתי מלא</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>המלצות תזונתיות אישיות</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>ייעוץ לתוספי תזונה</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>קווים מנחים לתפריט יומי</span>
          </li>
          <li className="flex items-start gap-2">
            <Check size={20} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)" }} />
            <span>סיכום מפורט ב-PDF</span>
          </li>
        </ul>

        <div className="text-center mb-4">
          <p className="text-3xl font-bold" style={{ color: "var(--accent)" }}>₪299</p>
          <p className="text-sm text-gray-600">ללקוחות מרחוק</p>
        </div>

        <a
          href={siteConfig.contact.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-white"
          style={{ backgroundColor: "var(--accent)" }}
        >
          קביעת תור עכשיו
          <ArrowLeft size={20} />
        </a>
      </div>
    </div>
  );
}
