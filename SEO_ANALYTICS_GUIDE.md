# מדריך SEO ואנליטיקס

## ✅ מה כבר מוכן

### SEO בסיסי
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (שיתוף ברשתות חברתיות)
- ✅ Hebrew language tags
- ✅ Structured data ready
- ✅ Mobile-friendly design
- ✅ Fast loading times

### אנליטיקס מוכן להתקנה
- ✅ Google Analytics 4 (GA4) support
- ✅ Meta Pixel (Facebook Pixel) support
- ✅ Automatic page view tracking
- ✅ Event tracking ready

## 📊 איך להתקין Google Analytics

### שלב 1: צרי חשבון GA4
1. גשי ל-[Google Analytics](https://analytics.google.com)
2. לחצי "Start measuring"
3. צרי Property חדש
4. בחרי "Web" platform
5. תקבלי Measurement ID שנראה כך: **G-XXXXXXXXXX**

### שלב 2: הוסיפי את ה-ID לאתר
פתחי את הקובץ: `/config/site.ts` שורה 93

```typescript
analytics: {
  googleAnalyticsId: "G-XXXXXXXXXX", // הדביקי את ה-ID שלך כאן
  metaPixelId: "",
},
```

### שלב 3: זהו!
האתר יתחיל לאסוף נתונים אוטומטית:
- מבקרים
- דפים נצפים
- זמן שהייה
- מקור תנועה
- ועוד...

## 📱 איך להתקין Meta Pixel (Facebook)

### שלב 1: צרי Pixel
1. גשי ל-[Facebook Events Manager](https://business.facebook.com/events_manager)
2. לחצי "Connect Data Sources" → "Web"
3. בחרי "Meta Pixel"
4. תני שם ל-Pixel
5. תקבלי Pixel ID (מספר בלבד, לדוגמה: **1234567890**)

### שלב 2: הוסיפי את ה-ID לאתר
פתחי את הקובץ: `/config/site.ts` שורה 94

```typescript
analytics: {
  googleAnalyticsId: "G-XXXXXXXXXX",
  metaPixelId: "1234567890", // הדביקי את ה-Pixel ID שלך כאן
},
```

### שלב 3: זהו!
ה-Pixel יתחיל לעקוב אחרי:
- PageView (צפייה בדף)
- לחיצות על כפתורים
- שליחת טפסים
- המרות

## 🎯 אירועים שנעקבים אוטומטית

### Google Analytics
- ✅ Page views (כל דף)
- ✅ Session duration (זמן ביקור)
- ✅ Bounce rate (אחוז נטישה)
- ✅ Traffic sources (מקורות תנועה)

### Meta Pixel
- ✅ PageView (צפייה בדף)
- ✅ ViewContent (צפייה בתוכן)
- 🔜 Lead (לחיצה על כפתור יצירת קשר)
- 🔜 Contact (שליחת טופס יצירת קשר)

## 🔍 SEO - מה כבר עובד

### On-Page SEO
- ✅ **Title tags**: כל דף עם כותרת ייחודית
- ✅ **Meta descriptions**: תיאורים אופטימליים
- ✅ **Header hierarchy**: H1, H2, H3 נכון
- ✅ **Alt text**: תמונות עם תיאור
- ✅ **Internal linking**: קישורים פנימיים
- ✅ **Mobile responsive**: מותאם לנייד

### Technical SEO
- ✅ **Fast loading**: טעינה מהירה
- ✅ **HTTPS ready**: מוכן ל-SSL
- ✅ **Sitemap ready**: מפת אתר אוטומטית
- ✅ **Robots.txt ready**: הנחיות למנועי חיפוש
- ✅ **Structured data**: נתונים מובנים

### Keywords (מילות מפתח)
האתר כבר מותאם למילות המפתח:
- תזונאית קלינית
- תזונה הרצליה
- ניהול משקל
- בריאות המעיים
- תזונה בהריון
- גל הלברט

## 📈 איך לבדוק שהכל עובד

### Google Analytics
1. גשי ל-[Google Analytics](https://analytics.google.com)
2. בחרי את ה-Property שלך
3. לחצי על "Realtime" (זמן אמת)
4. פתחי את האתר בטאב אחר
5. צריכה לראות את עצמך ב-"Realtime"

### Meta Pixel
1. התקיני [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper) (תוסף Chrome)
2. פתחי את האתר
3. לחצי על האייקון של התוסף
4. צריכה לראות ש-Pixel פעיל ✅

## 🚀 טיפים להצלחה

### Google Analytics
- בדקי דוחות כל שבוע
- שימי לב לדפים הפופולריים
- בדקי מאיפה מגיעים המבקרים
- עקבי אחרי המרות (לחיצות על כפתורים)

### Meta Pixel
- צרי Custom Audiences מהמבקרים
- הריצי מודעות Retargeting
- עקבי אחרי ROI של מודעות
- בדקי אילו מודעות מביאות תוצאות

### SEO
- פרסמי מאמרים בבלוג באופן קבוע
- שתפי את המאמרים ברשתות חברתיות
- בקשי ממרוצים לכתוב המלצות
- הוסיפי תמונות איכותיות

## 🎨 Open Graph (שיתוף ברשתות)

כשמישהו משתף את האתר ב-WhatsApp, Facebook, או LinkedIn, יופיע:
- ✅ כותרת
- ✅ תיאור
- ✅ תמונה (צריך להוסיף)

### איך להוסיף תמונת שיתוף
1. צרי תמונה 1200x630 פיקסלים
2. שמרי אותה בשם `og-image.jpg`
3. העלי ל-`/public/og-image.jpg`
4. זהו! התמונה תופיע בשיתופים

## ❓ שאלות נפוצות

**ש: האנליטיקס עובד מיד?**
ת: כן! ברגע שתוסיפי את ה-IDs, הנתונים יתחילו להיאסף.

**ש: כמה זה עולה?**
ת: Google Analytics חינמי לחלוטין. Meta Pixel גם חינמי.

**ש: האם זה משפיע על מהירות האתר?**
ת: לא. הסקריפטים נטענים באופן אסינכרוני ולא מאטים את האתר.

**ש: מה אם אין לי Facebook Business?**
ת: אפשר לדלג על Meta Pixel. Google Analytics מספיק בהתחלה.

---

**זקוקה לעזרה?** פשוט הוסיפי את ה-IDs בקובץ `/config/site.ts` ושמרי!
