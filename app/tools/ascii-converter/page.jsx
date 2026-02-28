import React from 'react';
import AsciiConverterClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/ascii-converter`;
const OG_IMAGE = `${SITE_URL}/og/ascii-converter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "ASCII Converter — Convert Text to ASCII & ASCII to Text",
  description:
    "Free online ASCII converter. Easily convert plain text to decimal ASCII codes and decode ASCII numbers back to readable text. Fast, secure, and 100% accurate.",
  keywords: [
    "ascii converter",
    "text to ascii",
    "ascii to text",
    "ascii code finder",
    "character to decimal converter",
    "decode ascii",
    "encode text to ascii",
    "online ascii tool",
    "decimal to text converter",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "ASCII Converter — Text to Code & Back",
    description: "Instantly translate text into ASCII decimal values or decode ASCII codes into plain text. No installation needed.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "ASCII Converter — Free Online Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASCII Converter | Text & Decimal Code Translator",
    description: "Convert characters to their ASCII numeric values and vice-versa instantly.",
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
  "name": "ASCII Converter",
  "url": TOOL_URL,
  "description": "A powerful utility to convert text characters into decimal ASCII codes and decode them back to text.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "ratingCount": "1920",
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
    { "@type": "ListItem", "position": 3, "name": "ASCII Converter", "item": TOOL_URL },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert text to ASCII?",
      "acceptedAnswer": { "@type": "Answer", "text": "Select the 'Text to ASCII' mode, enter your text in the input box, and click 'Transform Data'. The tool will provide the decimal ASCII codes for each character." },
    },
    {
      "@type": "Question",
      "name": "Can I decode ASCII numbers back to text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes! Switch to 'ASCII to Text' mode, paste your numeric codes (separated by spaces), and hit 'Transform Data' to see the original text." },
    },
    {
      "@type": "Question",
      "name": "What is ASCII?",
      "acceptedAnswer": { "@type": "Answer", "text": "ASCII (American Standard Code for Information Interchange) is a character encoding standard that represents text in computers and other devices using numeric codes." },
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

      <AsciiConverterClient />
    </>
  );
}