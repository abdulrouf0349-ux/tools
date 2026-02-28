import React from 'react';
import JsonFormatterClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/json-formatter`;
const OG_IMAGE = `${SITE_URL}/og/json-formatter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "JSON Formatter & Validator — Beautify and Debug JSON Online",
  description:
    "Free online JSON Formatter and Validator. Beautify messy JSON, minify data for production, and validate syntax with instant error reporting.",
  keywords: [
    "json formatter",
    "json validator online",
    "beautify json",
    "minify json",
    "fix json syntax",
    "json viewer",
    "api response formatter",
    "developer tools online",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant JSON Formatter | ToolKit Pro",
    description: "Make your JSON readable, valid, and professional in one click.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "JSON Formatter Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional JSON Beautifier & Minifier",
    description: "The ultimate tool for debugging and optimizing JSON data.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <JsonFormatterClient />;
}