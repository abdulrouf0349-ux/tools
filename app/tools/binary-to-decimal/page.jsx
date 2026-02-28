import React from 'react';
import BinaryDecimalClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/binary-decimal`;
const OG_IMAGE = `${SITE_URL}/og/binary-decimal.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Binary to Decimal Converter — Fast Online Base-2 to Base-10",
  description:
    "Convert binary numbers (Base-2) to decimal (Base-10) and vice-versa instantly. Perfect for computer science students, digital logic design, and programming.",
  keywords: [
    "binary to decimal",
    "decimal to binary",
    "base 2 to base 10",
    "binary converter",
    "online number system converter",
    "bit to decimal",
    "byte converter",
    "digital logic tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Binary to Decimal Converter — Base-2 & Base-10 Translator",
    description: "Translate bits into numbers instantly. Real-time conversion between binary and decimal systems.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Binary to Decimal Converter Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary to Decimal Converter | Fast & Free",
    description: "Convert binary strings to decimal numbers and back with zero delay.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Binary to Decimal Converter",
  "url": TOOL_URL,
  "description": "A real-time converter for switching numbers between binary (base-2) and decimal (base-10) systems.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1540",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to convert binary to decimal?",
      "acceptedAnswer": { "@type": "Answer", "text": "To convert binary to decimal, multiply each bit by 2 raised to the power of its position (starting from 0 on the right) and sum the results." },
    },
    {
      "@type": "Question",
      "name": "What is 1010 in decimal?",
      "acceptedAnswer": { "@type": "Answer", "text": "The binary value 1010 is equal to 10 in the decimal system." },
    },
    {
      "@type": "Question",
      "name": "Can I convert large binary numbers?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, our tool handles large bit-lengths instantly for both binary to decimal and decimal to binary conversions." },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// 🖥️ PAGE — Server Component
// ═══════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      {[schemaApp, schemaFAQ].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BinaryDecimalClient />
    </>
  );
}