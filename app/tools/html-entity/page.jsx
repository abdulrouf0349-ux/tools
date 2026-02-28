import React from 'react';
import HtmlEntityClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/html-entity`;
const OG_IMAGE = `${SITE_URL}/og/html-entity.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "HTML Entity Converter — Encode & Decode Special Characters",
  description:
    "Free online HTML Entity Encoder and Decoder. Convert symbols, math characters, and tags into safe HTML entities or back to plain text instantly.",
  keywords: [
    "html entity converter",
    "encode html tags",
    "decode html entities",
    "special character encoder",
    "html escape tool",
    "web development tools",
    "character encoding tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "HTML Entity Encoder/Decoder | ToolKit Pro",
    description: "Make your code web-safe by converting special characters to HTML entities.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "HTML Entity Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant HTML Entity Converter",
    description: "The fastest way to escape HTML for documentation and blogs.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <HtmlEntityClient />;
}