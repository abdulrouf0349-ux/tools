import React from 'react';
import BioSymbolGenerator from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/bio-symbol-generator`;
const OG_IMAGE = `${SITE_URL}/og/bio-symbols.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Bio Symbol Generator — Fancy Symbols for Instagram & TikTok",
  description:
    "Copy and paste 1000+ aesthetic bio symbols, cool emojis, and fancy text dividers. Perfect for Instagram, TikTok, and Twitter bios to stand out in 2026.",
  keywords: [
    "bio symbols",
    "instagram symbols copy and paste",
    "aesthetic symbols",
    "cool bio emojis",
    "fancy bio text",
    "viral bio symbols 2026",
    "tiktok bio generator",
    "bio dividers",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Bio Symbol Generator — Viral Aesthetic Symbols",
    description: "Make your social media profile unique with our mega collection of aesthetic symbols and dividers.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Bio Symbol Generator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fancy Bio Symbols & Aesthetic Emojis",
    description: "Instant copy-paste symbols for your social media bios.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Bio Symbol Generator",
  "url": TOOL_URL,
  "description": "A curated library of aesthetic symbols and emojis for social media profiles.",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use these symbols in my Instagram bio?",
      "acceptedAnswer": { "@type": "Answer", "text": "Simply tap on any symbol to copy it instantly. Then, open your Instagram profile, click 'Edit Bio', and paste the symbol wherever you like." },
    },
    {
      "@type": "Question",
      "name": "Are these symbols compatible with all devices?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, our symbols are standard Unicode characters compatible with iPhone, Android, and Web browsers." },
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
      <BioSymbolGenerator />
    </>
  );
}