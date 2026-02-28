import React from 'react';
import StrikethroughClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/strikethrough-text`;
const OG_IMAGE = `${SITE_URL}/og/strikethrough.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Strikethrough Text Generator — Cross Out Text Online",
  description:
    "Instantly cross out text using our free Strikethrough Text Generator. Copy and paste strikethrough unicode text on Facebook, Instagram, Twitter, and WhatsApp.",
  keywords: [
    "strikethrough text generator",
    "cross out text online",
    "strike through font",
    "unicode strike tool",
    "crossed out text for instagram",
    "text overstrike converter",
    "deleted text effect"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Strikethrough Text Generator | ToolKit Pro",
    description: "Generate crossed-out text that works anywhere on the web using Unicode magic.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Strikethrough Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Strikethrough Text Tool",
    description: "Cross out your words with one click. Works on all social platforms.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <StrikethroughClient />;
}