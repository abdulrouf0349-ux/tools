import React from 'react';
import GrammarCheckerClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/grammar-checker`;
const OG_IMAGE = `${SITE_URL}/og/grammar-checker.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Free Grammar & Spell Checker Online — Write with Confidence",
  description:
    "Instantly detect and fix common grammar mistakes, spelling errors, and punctuation slips. Improve your writing quality with our professional proofreading tool.",
  keywords: [
    "grammar checker",
    "spell checker online",
    "free proofreading tool",
    "fix writing errors",
    "check english grammar",
    "sentence corrector",
    "writing assistant",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Grammar & Spell Checker | ToolKit Pro",
    description: "Polished writing made easy. Scan your text for common errors and fix them with one click.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Grammar Checker Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Grammar Checker",
    description: "Professional writing assistant to clean up your emails, essays, and articles.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <GrammarCheckerClient />;
}