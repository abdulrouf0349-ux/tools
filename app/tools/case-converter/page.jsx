import React from 'react';
import CaseClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/case-converter`;
const OG_IMAGE = `${SITE_URL}/og/case-converter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Case Converter — Change Text to UPPERCASE, lowercase, Title Case",
  description:
    "Convert your text to any case instantly. Supports UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case. Free online text formatter.",
  keywords: [
    "case converter",
    "convert text to uppercase",
    "title case converter",
    "snake case generator",
    "camelcase online",
    "sentence case tool",
    "kebab case converter",
    "text case switcher",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Case Converter — Instant Text Case Switcher",
    description: "Format your text perfectly with our free case converter. Switch between sentence case, title case, and more with one click.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Case Converter Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Converter | Online Text Formatter",
    description: "Convert text to any format instantly. Perfect for writers and coders.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Case Converter Pro",
  "url": TOOL_URL,
  "description": "An online utility to transform text case into various formats like Title Case, snake_case, and camelCase.",
  "applicationCategory": "UtilitiesApplication",
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
      <CaseClient />
    </>
  );
}