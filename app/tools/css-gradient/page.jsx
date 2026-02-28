import React from 'react';
import CssGradientClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/css-gradient`;
const OG_IMAGE = `${SITE_URL}/og/css-gradient.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "CSS Gradient Generator — Create Beautiful Linear & Radial Gradients",
  description:
    "Design and generate custom CSS gradients visually. Adjust colors, angles, and types (Linear/Radial) with real-time preview and instant code export.",
  keywords: [
    "css gradient generator",
    "linear gradient maker",
    "radial gradient tool",
    "color background generator",
    "css code generator",
    "web design color tools",
    "ui design utilities",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "CSS Gradient Generator | Visual Background Designer",
    description: "The easiest way to create stunning CSS backgrounds. Customize colors, toggle radial/linear, and copy-paste production-ready code.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "CSS Gradient Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro CSS Gradient Generator Tool",
    description: "Generate beautiful, clean CSS gradient code for your next project.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "CSS Gradient Studio",
  "url": TOOL_URL,
  "description": "An interactive web utility to design complex CSS gradients with a live preview and one-click code generation.",
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
      <CssGradientClient />
    </>
  );
}