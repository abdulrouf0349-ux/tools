import React from 'react';
import ExtraSpacesClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/extra-spaces`;
const OG_IMAGE = `${SITE_URL}/og/space-remover.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Extra Space Remover — Clean & Format Your Text Instantly",
  description:
    "Remove multiple spaces, redundant blank lines, and trailing tabs from your text. The ultimate online tool to clean up messy formatting in seconds.",
  keywords: [
    "extra space remover",
    "remove double spaces",
    "clean text online",
    "text formatter",
    "remove blank lines",
    "trim whitespace",
    "text cleanup tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Text Space Remover & Formatter | ToolKit Pro",
    description: "Instantly strip away unnecessary white space and fix messy text formatting.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Space Remover Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Up Your Text Faster",
    description: "Remove redundant spaces and lines with a single click.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Professional Extra Space Remover",
  "url": TOOL_URL,
  "description": "A text processing utility designed to normalize whitespace and remove redundant line breaks.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <ExtraSpacesClient />
    </>
  );
}