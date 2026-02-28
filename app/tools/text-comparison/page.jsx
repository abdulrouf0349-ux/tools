import React from 'react';
import TextComparisonClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/text-comparison`;
const OG_IMAGE = `${SITE_URL}/og/text-compare.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Online Diff Checker — Compare Text & Find Differences",
  description:
    "Free online text comparison tool. Side-by-side diff checker to compare two text files, code snippets, or documents and highlight changes instantly.",
  keywords: [
    "online diff checker",
    "compare text side by side",
    "text difference finder",
    "code comparison tool",
    "check changes in text",
    "diff checker online free",
    "document comparison"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Online Diff Checker | Text Comparison Tool | ToolKit Pro",
    description: "Instantly find differences between two pieces of text with our side-by-side comparison tool.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Text Comparison Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Side-by-Side Text Diff Checker",
    description: "Highlight deletions and additions in your text or code instantly.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TextComparisonClient />;
}