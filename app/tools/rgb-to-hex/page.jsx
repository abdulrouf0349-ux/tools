import React from 'react';
import RgbToHexClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/rgb-to-hex`;
const OG_IMAGE = `${SITE_URL}/og/rgb-to-hex.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "RGB to HEX Converter — Instant Color Code Tool",
  description:
    "Convert RGB values to HEX codes instantly. A free online tool for designers and developers to generate CSS-ready hex color codes with live preview.",
  keywords: [
    "rgb to hex converter",
    "color code converter",
    "css hex generator",
    "rgb to hex calculator",
    "hexadecimal color tool",
    "frontend developer tools",
    "web design color picker"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "RGB to HEX Converter | Instant CSS Colors | ToolKit Pro",
    description: "Visual RGB to HEX converter with live preview. Perfect for web development and UI design.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "RGB to HEX Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast RGB to HEX Color Converter",
    description: "Get precise hex codes for your RGB values in one click.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <RgbToHexClient />;
}