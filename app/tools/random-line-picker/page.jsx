import React from 'react';
import RandomLinePickerClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/random-line-picker`;
const OG_IMAGE = `${SITE_URL}/og/random-picker.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Random Line Picker — Best Giveaway Winner Generator Online",
  description:
    "Pick random winners, names, or lines from a list instantly. Perfect for giveaways, lucky draws, and random decision making. 100% fair and unbiased results.",
  keywords: [
    "random line picker",
    "giveaway winner generator",
    "random name selector",
    "lucky draw tool online",
    "pick random item from list",
    "random comment picker",
    "contest winner tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Random Line Picker | ToolKit Pro",
    description: "Easily pick one or more random lines from any list. Fast, fair, and free.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Random Line Picker Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Winner & Line Picker Tool",
    description: "The fairest way to pick a winner from your list of participants.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <RandomLinePickerClient />;
}