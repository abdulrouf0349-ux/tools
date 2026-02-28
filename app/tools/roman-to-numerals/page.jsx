import React from 'react';
import RomanNumeralsClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/roman-numerals-converter`;
const OG_IMAGE = `${SITE_URL}/og/roman-converter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Roman Numerals Converter — Number to Roman & Back",
  description:
    "Easily convert Arabic numbers (1-3999) to Roman Numerals and vice-versa. Includes a complete Roman symbols legend for students and history projects.",
  keywords: [
    "roman numerals converter",
    "convert number to roman",
    "roman numeral translator",
    "arabic to roman tool",
    "roman symbols chart",
    "ancient numbering converter",
    "classic date converter"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Roman Numerals Converter | History & Classic Tools | ToolKit Pro",
    description: "Translate any year or number into classic Roman Numerals instantly. Free, fast, and educational.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Roman Numerals Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Roman Numeral Translator",
    description: "Master the ancient Roman numbering system with our live converter.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <RomanNumeralsClient />;
}