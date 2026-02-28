import React from 'react';
import HtmlMinifierClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/html-minifier`;
const OG_IMAGE = `${SITE_URL}/og/html-minifier.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "HTML Minifier — Compress HTML Code for Faster Loading",
  description:
    "Free online HTML Minifier to compress your code. Remove comments, whitespace, and newlines to optimize website speed and improve SEO performance.",
  keywords: [
    "html minifier",
    "compress html online",
    "html code optimizer",
    "reduce html size",
    "website speed optimization",
    "minify html for seo",
    "free developer tools",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant HTML Minifier | ToolKit Pro",
    description: "Boost your website's performance by minifying HTML code instantly.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "HTML Minifier Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional HTML Minification Tool",
    description: "Optimize your HTML and improve Core Web Vitals with one click.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <HtmlMinifierClient />;
}