import React from 'react';
import InvisibleTextClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/invisible-text-remover`;
const OG_IMAGE = `${SITE_URL}/og/invisible-cleaner.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Invisible Text Remover — Clean Zero-Width Characters Online",
  description:
    "Detect and strip hidden Unicode characters like Zero-Width Spaces (ZWSP), non-joiners, and BOMs that break code, URLs, and SEO content.",
  keywords: [
    "invisible text remover",
    "zero width space cleaner",
    "remove hidden characters from text",
    "strip zwsp online",
    "unicode ghost character finder",
    "clean copy paste text",
    "developer text utility",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Ghost & Invisible Character Cleaner | ToolKit Pro",
    description: "Scan your text for 'ghost' characters that can cause bugs in your code or break your SEO.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Invisible Text Remover Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find & Remove Hidden Unicode Characters",
    description: "The quickest way to clean hidden spaces and BOMs from your text strings.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <InvisibleTextClient />;
}