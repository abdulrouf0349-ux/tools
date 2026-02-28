import React from 'react';
import AgeCalculatorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/age-calculator`;
const OG_IMAGE = `${SITE_URL}/og/age-calculator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Age Calculator — Calculate Exact Age in Years, Months & Days",
  description:
    "Free online age calculator — enter your date of birth and instantly find your exact age in years, months, days and weeks. 100% accurate, no login required.",
  keywords: [
    "age calculator",
    "calculate age from date of birth",
    "dob calculator",
    "how old am i",
    "exact age finder",
    "chronological age calculator",
    "age in days weeks months",
    "birthday age calculator",
    "age calculator online free",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Age Calculator — Calculate Exact Age in Years, Months & Days",
    description: "Instantly find your exact age in years, months, days & weeks. Free, no login required.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Age Calculator — Free Online Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Calculator — Calculate Exact Age Free",
    description: "Find your exact age in years, months, days & weeks instantly. No login needed.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Age Calculator",
  "url": TOOL_URL,
  "description": "Free online age calculator — find exact age in years, months, days and weeks from date of birth.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "8240",
    "bestRating": "5",
    "worstRating": "1",
  },
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": `${SITE_URL}/tools` },
    { "@type": "ListItem", "position": 3, "name": "Age Calculator", "item": TOOL_URL },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calculate my exact age?",
      "acceptedAnswer": { "@type": "Answer", "text": "Enter your date of birth in the Age Calculator and click 'Calculate Age'. You will instantly see your exact age in years, months, days, total weeks and total days lived." },
    },
    {
      "@type": "Question",
      "name": "Can I calculate age in months and days too?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our calculator shows your age in years, months and remaining days — plus total days and total weeks lived." },
    },
    {
      "@type": "Question",
      "name": "Is this age calculator free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, completely free. No registration, no login, no credit card — ever." },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// 🖥️ PAGE — Server Component
// ═══════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      {[schemaApp, schemaBreadcrumb, schemaFAQ].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <AgeCalculatorClient />
    </>
  );
}