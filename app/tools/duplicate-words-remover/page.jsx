import React from 'react';
import DuplicateWordsClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/duplicate-words`;
const OG_IMAGE = `${SITE_URL}/og/duplicate-remover.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Duplicate Word Remover — Clean Up Repetitive Text Online",
  description:
    "Instantly remove double words and repetitive phrases from your writing. Perfect for fixing 'the the' typos and cleaning messy transcriptions.",
  keywords: [
    "duplicate word remover",
    "remove repetitive words",
    "text deduplicator",
    "fix double words",
    "clean text tool",
    "writing assistant online",
    "redundancy remover",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Duplicate Word Remover | Clean & Professional Writing",
    description: "Strip away accidental word repetitions and make your content concise in one click.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Duplicate Word Remover Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Text Deduplicator",
    description: "Remove accidental word repeats from your emails, essays, and articles.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Duplicate Word Remover Pro",
  "url": TOOL_URL,
  "description": "A productivity tool that identifies and removes consecutive or global duplicate words from text blocks.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <DuplicateWordsClient />
    </>
  );
}