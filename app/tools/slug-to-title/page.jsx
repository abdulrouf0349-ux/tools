import React from 'react';
import SlugToTitleClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/slug-to-title`;
const OG_IMAGE = `${SITE_URL}/og/slug-to-title.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Slug to Title Converter — Clean URL to Readable Text",
  description:
    "Convert URL slugs and permalinks back into clean, human-readable titles. Perfect for SEO audits, bulk content migration, and social media captions.",
  keywords: [
    "slug to title converter",
    "url to text converter",
    "permalink decoder",
    "slug to readable text",
    "bulk slug converter",
    "seo title generator from url",
    "clean url to title"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Slug to Title Converter | SEO Content Tool | ToolKit Pro",
    description: "Transform messy hyphens and underscores into professional titles instantly.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Slug to Title Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Slug to Title Decoder",
    description: "Clean up your URL slugs into beautiful titles with one click.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <SlugToTitleClient />;
}