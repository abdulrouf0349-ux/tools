import React from 'react';
import UrlCodecClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/url-codec`;
const OG_IMAGE = `${SITE_URL}/og/url-codec.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "URL Encoder & Decoder — Percent-Encoding Online Tool",
  description:
    "Safely encode or decode your URLs for API requests and web development. Convert spaces to %20 and special characters to valid URI formats instantly.",
  keywords: [
    "url encoder online",
    "url decoder",
    "percent encoding tool",
    "uri component encoder",
    "escape special characters url",
    "api testing tools",
    "web developer utility"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "URL Encoder/Decoder | Technical Web Tools | ToolKit Pro",
    description: "Format your URLs safely for the web with our high-speed encoding engine.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "URL Codec Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant URL Percent-Encoding Tool",
    description: "Encode and decode special characters in URLs with one click.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <UrlCodecClient />;
}