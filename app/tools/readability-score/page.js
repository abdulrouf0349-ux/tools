import React from 'react';
import ReadabilityScoreClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/readability-score-checker`;
const OG_IMAGE = `${SITE_URL}/og/readability-checker.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Readability Score Checker — Flesch Reading Ease Tool",
  description:
    "Check your text readability score using the Flesch Reading Ease formula. Analyze content complexity for better SEO and audience engagement instantly.",
  keywords: [
    "readability score checker",
    "flesch reading ease formula",
    "content complexity analyzer",
    "seo writing tool",
    "text readability tool",
    "writing improvement tool",
    "sentence complexity checker",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Readability & Content Analyzer | ToolKit Pro",
    description: "Analyze your writing style and readability level for better engagement and search rankings.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Readability Checker Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Readability Score Checker",
    description: "Is your content easy to read? Find out with our Flesch Reading Ease analyzer.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <ReadabilityScoreClient />;
}