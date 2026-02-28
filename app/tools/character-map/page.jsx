import React from 'react';
import CharacterMapClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/character-map`;
const OG_IMAGE = `${SITE_URL}/og/character-map.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Ultra Character Map — Copy Special Characters & Symbols",
  description:
    "The ultimate online character map. Copy and paste special characters, currency symbols, math signs, and social media emojis with one click.",
  keywords: [
    "character map online",
    "copy special characters",
    "currency symbols copy paste",
    "math symbols map",
    "cool symbols for social media",
    "alt codes online",
    "unicode character library",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Ultra Character Map — Instant Symbol Picker",
    description: "Access thousands of special characters and symbols for professional design and social media profiles.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Character Map Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Character & Symbol Library",
    description: "One-click copy for any special character or emoji.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Ultra Character Map",
  "url": TOOL_URL,
  "description": "A comprehensive digital library for special characters, symbols, and emojis with one-touch copy functionality.",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

// ═══════════════════════════════════════════════════════════════
// 🖥️ PAGE — Server Component
// ═══════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <CharacterMapClient />
    </>
  );
}