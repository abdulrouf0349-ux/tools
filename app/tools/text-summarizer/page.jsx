import React from 'react';
import TextSummarizerClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/text-summarizer`;
const OG_IMAGE = `${SITE_URL}/og/summarizer.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "AI Text Summarizer — Condense Articles into TL;DR Instantly",
  description:
    "Free AI-powered text summarizer tool. Condense long articles, essays, and documents into clear, concise summaries. Adjust summary length and get the key points instantly.",
  keywords: [
    "ai text summarizer",
    "tldr generator online",
    "summarize text tool",
    "article condenser",
    "automatic summary generator",
    "essay shortener",
    "text extractor"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "AI Text Summarizer | TL;DR Generator | ToolKit Pro",
    description: "Save time by summarizing long content into readable key points with our AI tool.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "AI Summarizer Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant AI Summary Generator",
    description: "Turn 10-minute reads into 30-second summaries. Free and fast.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TextSummarizerClient />;
}