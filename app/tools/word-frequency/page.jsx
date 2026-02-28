import React from 'react';
import WordFrequencyClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/word-frequency`;
const OG_IMAGE = `${SITE_URL}/og/word-frequency.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Word Frequency Counter — Keyword Density & Text Analyzer",
  description:
    "Analyze your text density and find overused words instantly. Improve your SEO and writing quality by detecting keyword stuffing and word repetition.",
  keywords: [
    "word frequency counter",
    "keyword density checker",
    "text analyzer online",
    "word repetition finder",
    "overused words tool",
    "seo content optimizer",
    "writing style analyzer"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Word Frequency & Density Analyzer | ToolKit Pro",
    description: "Break down your content to see which words appear most often. Perfect for bloggers and students.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Word Frequency Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Overused Words Instantly",
    description: "Check your keyword density for better SEO and readability.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <WordFrequencyClient />;
}