import React from 'react';
import CurlToFetchClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/curl-to-fetch`;
const OG_IMAGE = `${SITE_URL}/og/curl-to-fetch.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "cURL to Fetch Converter — Instant JavaScript Code Generator",
  description:
    "Convert cURL commands to JavaScript Fetch API code instantly. Supports headers, POST data, and authentication. Perfect for rapid web development.",
  keywords: [
    "curl to fetch",
    "javascript fetch generator",
    "curl to js",
    "api request converter",
    "online curl converter",
    "fetch api snippet maker",
    "developer productivity tools",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "cURL to Fetch Converter | Web Dev Utilities",
    description: "Transform any cURL command into a clean, production-ready JavaScript Fetch function in seconds.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "cURL to Fetch Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert cURL to JS Fetch Instantly",
    description: "Stop writing fetch calls manually. Paste your cURL and get the code.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "cURL to Fetch Converter",
  "url": TOOL_URL,
  "description": "A specialized developer utility to parse cURL commands and output equivalent JavaScript Fetch API snippets.",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <CurlToFetchClient />
    </>
  );
}