import React from 'react';
import FindReplaceClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/find-replace`;
const OG_IMAGE = `${SITE_URL}/og/find-replace.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Advanced Find and Replace Text Online — Regex Supported",
  description:
    "Powerful online text search and replace tool. Support for standard text, case sensitivity, and Regular Expressions (Regex) for bulk editing.",
  keywords: [
    "find and replace text",
    "online text editor",
    "regex search and replace",
    "bulk text replacer",
    "replace words in text",
    "text pattern finder",
    "string manipulation tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Find & Replace Text | Professional Editing Tool",
    description: "Search, swap, or delete text patterns instantly with advanced Regex support.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Find & Replace Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regex-Powered Find & Replace",
    description: "The most flexible way to edit large blocks of text online.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <FindReplaceClient />;
}