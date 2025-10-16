# גל הלברט - תזונאית קלינית | Gal Elbert - Clinical Nutritionist

אתר מקצועי לתזונאית קלינית, בנוי עם Next.js 15, TypeScript, ו-Tailwind CSS.

## 🚀 התחלה מהירה

### התקנה

```bash
npm install
```

### הרצה במצב פיתוח

```bash
npm run dev
```

האתר יהיה זמין בכתובת: [http://localhost:3000](http://localhost:3000)

### בניית האתר לפרודקשן

```bash
npm run build
npm start
```

## 📝 עריכת תוכן

כל התוכן של האתר ניתן לעריכה בקלות דרך קובץ הקונפיגורציה:

### קובץ התוכן הראשי
`config/site.ts`

בקובץ זה תוכלי לערוך:
- **שם העסק והסלוגן**
- **הצעות ערך** (Value Propositions)
- **פרטי יצירת קשר**: אימייל, טלפון, WhatsApp, Calendly, כתובת
- **הסמכות ותעודות**
- **שירותים**: כותרות, תיאורים, אייקונים
- **קישורי רשתות חברתיות**: Instagram, Facebook, LinkedIn

### דוגמה לעריכה:

```typescript
contact: {
  email: "gal@example.com",  // ← שני כאן את האימייל שלך
  phone: "+972-50-123-4567", // ← שני כאן את מספר הטלפון
  whatsapp: "+972-50-123-4567",
  calendly: "https://calendly.com/gal-elbert",
  // ...
}
```

## 🎨 החלפת תמונות

### תמונות זמניות נוכחיות:
- **Hero Section**: תמונת אוכל בריא (Unsplash)
- **About Section**: תמונת פרופיל (Unsplash)

### איך להחליף תמונות:

1. **הוסיפי תמונות לתיקייה** `public/images/`
2. **ערכי את הקומפוננטות**:
   - `components/sections/Hero.tsx` - שורה 35
   - `components/sections/About.tsx` - שורה 12

דוגמה:
```tsx
// לפני:
src="https://images.unsplash.com/photo-..."

// אחרי:
src="/images/my-photo.jpg"
```

## 🎨 החלפת ערכות צבעים

האתר תומך ב-3 ערכות צבעים שניתן להחליף בקלות:

1. **Warm & Professional** (ברירת מחדל) - הצבעים מהתמונה שלך
2. **Fresh & Clean** - ירוק-כחול רענן
3. **Elegant & Modern** - אפור כהה עם כתום

### איך להחליף ערכת צבעים:

בקובץ `app/layout.tsx`, הוסיפי את המאפיין `data-theme`:

```tsx
<html lang="he" dir="rtl" data-theme="warm">  {/* או "fresh" או "elegant" */}
```

## 📱 מבנה האתר

### עמודים:
- **דף הבית** (`/`) - Hero, שירותים, אודות, המלצות, יצירת קשר
- **בלוג** (`/blog`) - מאמרים ותכנים (בהמשך)

### קומפוננטות:
- `components/layout/` - Navbar, Footer
- `components/sections/` - Hero, Services, About, Testimonials, CTA

## 🔧 טכנולוגיות

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Assistant & Rubik (תומכים בעברית)

## 📦 פריסה (Deployment)

### Vercel (מומלץ):

1. צרי חשבון ב-[Vercel](https://vercel.com)
2. חברי את הפרויקט מ-GitHub
3. Vercel יזהה אוטומטית את Next.js ויפרוס את האתר
4. תקבלי URL חינמי + אפשרות לחבר דומיין מותאם

### Netlify:

1. צרי חשבון ב-[Netlify](https://netlify.com)
2. גררי את תיקיית הפרויקט או חברי מ-GitHub
3. הגדרות build:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 🎯 משימות הבאות (TODO)

- [ ] עדכני את פרטי יצירת הקשר האמיתיים ב-`config/site.ts`
- [ ] החליפי את התמונות הזמניות בתמונות אמיתיות
- [ ] הוסיפי קישורי רשתות חברתיות
- [ ] הוסיפי המלצות אמיתיות מלקוחות
- [ ] צרי תוכן לבלוג
- [ ] הגדירי Google Analytics (אופציונלי)
- [ ] חברי דומיין מותאם

## 📞 תמיכה

אם יש שאלות או בעיות, אפשר לפנות אליי.

---

**Built with ❤️ for Gal Elbert**
