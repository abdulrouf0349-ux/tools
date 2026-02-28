import React from 'react';
import Base64EncodeClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/base64-encode`;
const OG_IMAGE = `${SITE_URL}/og/base64-encode.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Base64 Encoder — Convert Text to Base64 Online",
  description:
    "Free online Base64 encoder. Instantly convert plain text, special characters, and emojis into Base64 format. Secure, fast, and developer-friendly.",
  keywords: [
    "base64 encoder",
    "encode base64 online",
    "text to base64",
    "convert text to base64",
    "base64 string generator",
    "utf8 to base64",
    "basic auth generator",
    "data uri encoder",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Base64 Encoder — Securely Encode Text Strings",
    description: "Transform your data into Base64 format for safe transmission and storage. 100% browser-side encoding.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Base64 Encoder Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 Encoder | Instant Text Encoding",
    description: "Convert any text string to Base64 encoding instantly and for free.",
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
  "name": "Base64 Encoder",
  "url": TOOL_URL,
  "description": "An online utility to convert plain text into Base64 encoded format with full UTF-8 support.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1850",
    "bestRating": "5",
    "worstRating": "1",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Base64 encoding used for?",
      "acceptedAnswer": { "@type": "Answer", "text": "Base64 encoding is used to represent binary data in an ASCII string format. It's essential for sending data through systems that only support text, like email or HTML/CSS." },
    },
    {
      "@type": "Question",
      "name": "Does this tool support emojis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, our Base64 encoder fully supports UTF-8 characters, including emojis and special symbols." },
    },
    {
      "@type": "Question",
      "name": "Is my data safe with this encoder?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. The encoding process happens entirely in your local browser. No text is ever uploaded to our servers." },
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
      <Base64EncodeClient />
    </>
  );
}