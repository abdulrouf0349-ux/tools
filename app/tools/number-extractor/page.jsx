import React from 'react';
import NumberExtractorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/number-extractor`;
const OG_IMAGE = `${SITE_URL}/og/number-extractor.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Online Number Extractor — Extract Digits & Prices from Text",
  description:
    "Extract all numbers, phone numbers, decimals, and prices from any text instantly. Free data cleaning tool to find digits and remove duplicates.",
  keywords: [
    "number extractor",
    "extract numbers from text",
    "phone number finder",
    "digit extractor online",
    "get numbers from string",
    "regex number scraper",
    "data cleaning tools",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Number Extractor Tool | ToolKit Pro",
    description: "Easily pull numerical data out of messy text blocks. Filter integers or decimals with one click.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Number Extractor Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Digital Data Scraper - Extract All Numbers",
    description: "Clean your data and find every digit hidden in your text strings.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <NumberExtractorClient />;
}