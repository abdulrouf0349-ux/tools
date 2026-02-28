import React from 'react';
import CssMinifierClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/css-minifier`;
const OG_IMAGE = `${SITE_URL}/og/css-minifier.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "CSS Minifier — Compress & Optimize CSS Code Fast",
  description:
    "Free online CSS Minifier to compress your stylesheets. Reduce file size, remove comments, and improve website loading speed instantly.",
  keywords: [
    "css minifier",
    "compress css online",
    "css optimizer",
    "minify stylesheet",
    "reduce css size",
    "web performance tools",
    "clean css code",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "CSS Minifier | Professional Stylesheet Compressor",
    description: "Instantly minify your CSS code to boost PageSpeed scores. Fast, secure, and easy to use.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "CSS Minifier Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast CSS Minifier Tool",
    description: "Shrink your CSS files by up to 80% with our professional optimizer.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Professional CSS Minifier",
  "url": TOOL_URL,
  "description": "A developer tool designed to optimize CSS stylesheets by removing unnecessary whitespace and comments.",
  "applicationCategory": "DeveloperApplication",
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
      <CssMinifierClient />
    </>
  );
}