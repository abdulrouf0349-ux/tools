import React from 'react';
import PercentageCalculatorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/percentage-calculator`;
const OG_IMAGE = `${SITE_URL}/og/percentage-calc.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Percentage Calculator — Quick Math & Discount Tool",
  description:
    "Fast and accurate online percentage calculator. Calculate discounts, markups, relative percentages, and value changes instantly for free.",
  keywords: [
    "percentage calculator",
    "calculate percentage of",
    "discount calculator",
    "percent off finder",
    "math percentage tool",
    "relative value calculator",
    "percentage increase tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Percentage & Discount Calculator | ToolKit Pro",
    description: "Easily solve percentage-based math problems. Perfect for finance, shopping, and academic calculations.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Percentage Calculator Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Math Tool: Percentage Calculator",
    description: "Solve percentage problems in seconds with our clean, intuitive interface.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <PercentageCalculatorClient />;
}