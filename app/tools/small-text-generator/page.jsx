import React from 'react';
import SmallTextClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/small-text-generator`;
const OG_IMAGE = `${SITE_URL}/og/small-text.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Small Text Generator — Tiny Text for Bios & Profiles",
  description:
    "Convert normal text into tiny unicode characters. Use small caps, superscript, and subscript for Instagram bios, Twitter, Discord, and gaming names.",
  keywords: [
    "small text generator",
    "tiny text converter",
    "instagram bio small caps",
    "superscript generator",
    "subscript text online",
    "aesthetic text generator",
    "discord tiny font"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Small Text Generator | Aesthetic Tiny Fonts | ToolKit Pro",
    description: "Make your social media profiles stand out with unique tiny unicode characters.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Small Text Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Tiny Text for Bios",
    description: "Instant conversion to Small Caps, Superscript, and Subscript.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <SmallTextClient />;
}