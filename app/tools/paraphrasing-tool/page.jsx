import React from 'react';
import ParaphrasingToolClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/paraphrasing-tool`;
const OG_IMAGE = `${SITE_URL}/og/paraphraser.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Free Paraphrasing Tool — Rewrite Sentences & Articles Instantly",
  description:
    "Use our AI-powered paraphrasing tool to rewrite sentences, remove plagiarism, and improve your writing. Best free article rewriter for students and bloggers.",
  keywords: [
    "paraphrasing tool",
    "article rewriter",
    "sentence rewriter",
    "rewrite text online",
    "plagiarism remover",
    "ai text spinner",
    "best free paraphraser",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant AI Paraphraser | ToolKit Pro",
    description: "Transform your content with our creative paraphrasing modes. Improve clarity and avoid duplicate content.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Paraphrasing Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Text Rewriter & Spinner",
    description: "The fastest way to paraphrase your sentences while keeping the original meaning.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <ParaphrasingToolClient />;
}