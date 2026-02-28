import React from 'react';
import HexRgbClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/hex-rgb`;
const OG_IMAGE = `${SITE_URL}/og/hex-rgb.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "HEX to RGB Converter Online — Instant Color Conversion",
  description:
    "Convert HEX color codes to RGB values and vice-versa instantly. Perfect for designers and developers needing precise CSS color formats for web projects.",
  keywords: [
    "HEX to RGB converter",
    "RGB to HEX tool",
    "online color converter",
    "web design color tool",
    "CSS color codes",
    "hexadecimal to RGB",
    "frontend developer tools",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "HEX to RGB & RGB to HEX Converter | ToolKit Pro",
    description: "Get precise color values for your next design project with our live preview tool.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Color Converter Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant HEX/RGB Color Converter",
    description: "Convert color formats for CSS and UI design projects easily.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <HexRgbClient />;
}