import React from 'react';
import Base64DecodeClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/base64-decode`;
const OG_IMAGE = `${SITE_URL}/og/base64-decode.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Base64 Decoder — Decode Base64 Strings to Plain Text Online",
  description:
    "Fast and secure online Base64 decoder. Convert Base64 encoded strings back into readable plain text instantly. Supports UTF-8 and complex data streams.",
  keywords: [
    "base64 decoder",
    "decode base64 online",
    "base64 to text",
    "base64 string converter",
    "online base64 tool",
    "base64 translation",
    "developer tools base64",
    "free base64 decode",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Base64 Decoder — Instant Online Data Recovery",
    description: "Convert Base64 encoded data back to plain text with our professional-grade decoder. 100% browser-side processing.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Base64 Decoder ToolKit Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 Decoder | Instant String Translation",
    description: "Securely decode Base64 strings back to readable text in seconds.",
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
  "name": "Base64 Decoder",
  "url": TOOL_URL,
  "description": "A secure utility to decode Base64 encoded strings back into plain text with UTF-8 support.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2410",
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
    { "@type": "ListItem", "position": 3, "name": "Base64 Decoder", "item": TOOL_URL },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I decode a Base64 string?",
      "acceptedAnswer": { "@type": "Answer", "text": "Simply paste your encoded Base64 string into the input box and click 'DECODE DATA'. The plain text result will appear instantly." },
    },
    {
      "@type": "Question",
      "name": "Is Base64 decoding secure on this site?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, our tool performs decoding entirely in your browser using JavaScript. No data is sent to our servers, keeping your information private." },
    },
    {
      "@type": "Question",
      "name": "What happens if my Base64 string is invalid?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the input is not a valid Base64 format, the tool will display an error message. Ensure your string doesn't contain special characters not allowed in Base64." },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// 🖥️ PAGE — Server Component
// ═══════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      {[schemaApp, schemaBreadcrumb, schemaFAQ].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Base64DecodeClient />
    </>
  );
}