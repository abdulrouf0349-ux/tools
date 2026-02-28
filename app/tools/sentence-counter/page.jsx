import React from 'react';
import SentenceCounterClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/sentence-counter`;
const OG_IMAGE = `${SITE_URL}/og/sentence-counter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Sentence Counter — Free Online Text Analysis Tool",
  description:
    "Count sentences, words, and paragraphs in real-time. Analyze text readability and calculate average sentence length for better writing and SEO content.",
  keywords: [
    "sentence counter online",
    "word and sentence counter",
    "text readability analyzer",
    "paragraph counter",
    "essay word tracker",
    "writing statistics tool",
    "average sentence length calculator"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Sentence Counter | Advanced Text Stats | ToolKit Pro",
    description: "Get detailed insights into your writing style. Fast, free, and accurate sentence analysis.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sentence Counter Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-time Sentence & Word Counter",
    description: "Improve your writing with instant readability statistics.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <SentenceCounterClient />;
}