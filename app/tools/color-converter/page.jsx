import React from 'react';
import ColorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/color-converter`;
const OG_IMAGE = `${SITE_URL}/og/color-converter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Color Converter — Convert HEX to RGB, HSL Instantly",
  description:
    "Fast and free online Color Converter. Transform HEX codes to RGB and HSL formats with live preview. Perfect for web designers and developers.",
  keywords: [
    "color converter",
    "hex to rgb",
    "hex to hsl",
    "css color picker",
    "online color formatter",
    "rgb breakdown tool",
    "web design tools",
    "color code switcher",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Color Converter — HEX, RGB & HSL Code Switcher",
    description: "Instantly convert color codes and visualize RGB channels. A must-have tool for modern designers.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Color Converter Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Color Converter | Web Design Utilities",
    description: "Convert color formats and get RGB channel data in one click.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Pro Color Converter",
  "url": TOOL_URL,
  "description": "A developer-focused utility to convert and visualize color codes across different formats like HEX, RGB, and HSL.",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

// ═══════════════════════════════════════════════════════════════
// 🖥️ PAGE — Server Component
// ═══════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <ColorClient />
    </>
  );
}