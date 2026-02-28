import React from 'react';
import DataConverterClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/data-unit-converter`;
const OG_IMAGE = `${SITE_URL}/og/data-converter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Data Unit Converter — Bytes, KB, MB, GB, TB, PB Calculator",
  description:
    "Instant data storage converter. Convert between Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, and Petabytes with precision. Uses the 1024 binary standard.",
  keywords: [
    "data unit converter",
    "gb to mb converter",
    "bytes to gb calculator",
    "tb to gb conversion",
    "storage size calculator",
    "digital unit converter",
    "mb to kb tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Data Unit Converter | Storage Size Calculator",
    description: "Convert any digital storage unit instantly. Perfect for hard drive sizing and cloud storage calculations.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Data Converter Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Storage Unit Converter",
    description: "Convert KB to MB, MB to GB and more with our precise 1024-based calculator.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Data Unit Converter Pro",
  "url": TOOL_URL,
  "description": "A precise utility for converting between different digital information units based on the binary system.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <DataConverterClient />
    </>
  );
}