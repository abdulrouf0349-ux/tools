import React from 'react';
import TextToSlugClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/text-to-slug`;
const OG_IMAGE = `${SITE_URL}/og/slug-generator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "SEO URL Slug Generator — Convert Text to Friendly Slugs",
  description:
    "Free online tool to convert titles or headings into SEO-friendly URL slugs. Clean your URLs by removing special characters and replacing spaces with hyphens.",
  keywords: [
    "seo url slug generator",
    "text to slug converter",
    "slugify online tool",
    "clean url generator",
    "blog post url creator",
    "friendly url maker",
    "remove special characters from url"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Online Text to Slug Converter | SEO Tools | ToolKit Pro",
    description: "Generate clean, hyphenated, and search-engine-optimized URL slugs instantly.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "URL Slug Generator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Friendly Slug Maker",
    description: "Convert any string into a perfect URL slug in one click.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TextToSlugClient />;
}