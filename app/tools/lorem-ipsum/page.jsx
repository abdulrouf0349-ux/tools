import React from 'react';
import LoremClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/lorem-ipsum`;
const OG_IMAGE = `${SITE_URL}/og/lorem-ipsum.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Lorem Ipsum Generator — Professional Dummy Text for Designers",
  description:
    "Generate high-quality Lorem Ipsum placeholder text for your websites, apps, and print designs. Customize paragraph counts and copy instantly.",
  keywords: [
    "lorem ipsum generator",
    "dummy text generator",
    "placeholder text for web design",
    "filler text for mockups",
    "professional lorem ipsum",
    "ui ux design tools",
    "copy paste dummy text",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Lorem Ipsum Text Generator | ToolKit Pro",
    description: "The fastest way to generate filler text for your next big design project.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Lorem Ipsum Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Lorem Ipsum Generator for Developers",
    description: "Get clean, formatted dummy text instantly.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <LoremClient />;
}