import React from 'react';
import WordCounterClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/word-counter`;
const OG_IMAGE = `${SITE_URL}/og/word-counter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Word Counter Online — Free Text & Character Analysis Tool",
  description:
    "Count words, characters, sentences, and paragraphs instantly. Calculate reading time and check character limits for social media and SEO content.",
  keywords: [
    "word counter online",
    "character counter",
    "reading time calculator",
    "text analysis tool",
    "essay word count",
    "instagram character limit checker",
    "seo content analysis"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Word Counter & Text Analyzer | ToolKit Pro",
    description: "The fastest way to analyze your text length and readability. Free, private, and local.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Word Counter Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analyze Your Content Instantly",
    description: "Track word counts, sentences, and reading time for your blogs or essays.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <WordCounterClient />;
}