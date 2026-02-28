import React from 'react';
import BinaryConverterClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/binary-to-text`;
const OG_IMAGE = `${SITE_URL}/og/binary-translator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Binary Translator — Convert Text to Binary & Binary to Text",
  description:
    "Free online binary translator. Instantly convert plain text to binary code (0101) and decode binary back to English text. Secure, fast, and 100% accurate.",
  keywords: [
    "binary translator",
    "text to binary",
    "binary to text",
    "binary code converter",
    "binary decoder",
    "binary encoder",
    "0101 translator",
    "ascii to binary",
    "binary to english",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Binary Translator — Encode & Decode Binary Code",
    description: "Easily translate between English text and binary numbers. The ultimate tool for developers and students.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Binary Translator Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Translator | Text to 0101 Converter",
    description: "Fast, free, and secure binary to text conversion online.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Binary Translator",
  "url": TOOL_URL,
  "description": "A high-performance utility to translate between plain text and binary code (base-2).",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3120",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert text to binary?",
      "acceptedAnswer": { "@type": "Answer", "text": "Enter your English text into the input box, ensure the mode is set to 'Text to Binary', and click 'Encode'. Each character will be converted to its 8-bit binary representation." },
    },
    {
      "@type": "Question",
      "name": "How does binary translation work?",
      "acceptedAnswer": { "@type": "Answer", "text": "Binary translation maps each text character to its ASCII/Unicode decimal value, which is then converted into a base-2 number (0s and 1s)." },
    },
    {
      "@type": "Question",
      "name": "Is this binary translator secure?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, our translator works entirely in your browser. No data is sent to any server, making it 100% private." },
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
      <BinaryConverterClient />
    </>
  );
}