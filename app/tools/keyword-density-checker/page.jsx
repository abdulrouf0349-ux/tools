import React from 'react';
import KeywordDensityClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/keyword-density`;
const OG_IMAGE = `${SITE_URL}/og/keyword-density.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Keyword Density Checker — Free SEO Content Analyzer Online",
  description:
    "Analyze keyword frequency and density in your articles. Avoid keyword stuffing, improve SEO ranking, and balance your content for better readability.",
  keywords: [
    "keyword density checker",
    "seo content analyzer",
    "word frequency tool",
    "content optimization tool",
    "keyword stuffing checker",
    "free seo tools online",
    "article keyword analyzer",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Keyword Density Analyzer | ToolKit Pro",
    description: "Make your content search-engine friendly by analyzing keyword frequency and balance.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Keyword Density Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Keyword Density & Content Checker",
    description: "Check your article's keyword balance instantly before publishing.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <KeywordDensityClient />;
}