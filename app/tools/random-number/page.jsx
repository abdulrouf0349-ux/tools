import React from 'react';
import RandomNumberClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/random-number-generator`;
const OG_IMAGE = `${SITE_URL}/og/random-number.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Random Number Generator — Quick & Fair RNG Tool",
  description:
    "Generate random numbers instantly within any range. Perfect for games, contests, giveaways, and decision making. Free, fast, and 100% unbiased.",
  keywords: [
    "random number generator",
    "rng tool online",
    "pick a random number",
    "lucky number generator",
    "number picker 1-100",
    "random digit generator",
    "fair giveaway tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Random Number Generator | ToolKit Pro",
    description: "Need a random number? Use our fair RNG tool to pick numbers for contests or games instantly.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Random Number Generator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online RNG - Random Number Picker",
    description: "Generate unbiased random numbers for any range you choose.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <RandomNumberClient />;
}