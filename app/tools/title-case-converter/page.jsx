import React from 'react';
import TitleCaseClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/title-case`;
const OG_IMAGE = `${SITE_URL}/og/title-case.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Title Case Converter — Smart Headline Capitalization Tool",
  description:
    "Convert your text to Title Case, UPPERCASE, or lowercase instantly. Our smart logic follows editorial standards for headings and blog titles.",
  keywords: [
    "title case converter",
    "headline capitalization tool",
    "capitalize first letter online",
    "apa style title maker",
    "blog title formatter",
    "case transformer online",
    "text case changer"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Smart Title Case Converter | ToolKit Pro",
    description: "The smartest way to format your headlines and titles with editorial precision.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Title Case Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Headline Formatter",
    description: "Instant capitalization for your blog posts and articles.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TitleCaseClient />;
}