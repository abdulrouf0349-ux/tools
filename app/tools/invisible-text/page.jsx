import React from 'react';
import InvisibleTextClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/invisible-text`;
const OG_IMAGE = `${SITE_URL}/og/invisible-text.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Invisible Text Generator — Copy & Paste Blank Characters",
  description:
    "Generate invisible characters (U+3164) for WhatsApp, Discord, and social media. Copy and paste empty spaces that systems recognize as real text.",
  keywords: [
    "invisible text generator",
    "copy blank space",
    "empty character for whatsapp",
    "ghost text for discord",
    "invisible character unicode",
    "hangul filler copy paste",
    "blank instagram bio",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Ghost Text & Invisible Character Generator | ToolKit Pro",
    description: "The easiest way to generate and copy invisible blank spaces for any platform.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Invisible Text Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Invisible Character Generator",
    description: "Copy-paste blank characters for empty messages and ghost names.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <InvisibleTextClient />;
}