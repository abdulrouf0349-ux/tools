import React from 'react';
import XmlToJsonClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/xml-to-json`;
const OG_IMAGE = `${SITE_URL}/og/xml-json.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "XML to JSON Converter — Fast & Secure Online Data Parser",
  description:
    "Convert XML data to JSON format instantly. Our secure tool parses complex XML tags, attributes, and nested structures into clean JSON objects.",
  keywords: [
    "xml to json converter",
    "online xml parser",
    "convert xml string to json",
    "xml to object converter",
    "developer data tools",
    "format xml to json online",
    "secure xml transformation"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant XML to JSON Data Converter | ToolKit Pro",
    description: "Easily transform legacy XML data into modern JSON format for your JavaScript applications.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "XML to JSON Converter Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parse XML to JSON Online",
    description: "The fastest way to handle XML data in modern web development.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <XmlToJsonClient />;
}