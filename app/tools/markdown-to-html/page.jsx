import React from 'react';
import MarkdownToHtmlClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/markdown-to-html`;
const OG_IMAGE = `${SITE_URL}/og/markdown-to-html.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Markdown to HTML Converter — Instant Live Preview",
  description:
    "Free online Markdown to HTML converter. Write in Markdown and get clean, semantic HTML code instantly with a real-time visual preview.",
  keywords: [
    "markdown to html converter",
    "online md to html",
    "markdown live preview",
    "github markdown to html",
    "markdown editor online",
    "render markdown to html",
    "clean html generator",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Professional Markdown to HTML Tool | ToolKit Pro",
    description: "Convert MD files to HTML effortlessly. Perfect for developers, bloggers, and technical writers.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Markdown to HTML Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Markdown to HTML with Live Preview",
    description: "The easiest way to generate clean HTML from Markdown syntax.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <MarkdownToHtmlClient />;
}