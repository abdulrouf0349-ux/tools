import React from 'react';
import UnitClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/unit-converter`;
const OG_IMAGE = `${SITE_URL}/og/unit-converter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Universal Unit Converter — Length, Weight, Temp & More",
  description:
    "Free online unit converter for instant metric and imperial conversions. Convert length, weight, area, speed, and temperature with high precision.",
  keywords: [
    "unit converter online",
    "metric to imperial converter",
    "length conversion tool",
    "weight converter kg to lbs",
    "celsius to fahrenheit calculator",
    "engineering unit converter",
    "measurement conversion"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Universal Unit Converter | Precision Tools | ToolKit Pro",
    description: "Convert any measurement instantly with our high-precision unit conversion tool.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Unit Converter Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All-in-One Unit Conversion Tool",
    description: "Fast, accurate, and easy-to-use unit converter for students and professionals.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <UnitClient />;
}