import React from 'react';
import SitemapGeneratorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/xml-sitemap-generator`;
const OG_IMAGE = `${SITE_URL}/og/sitemap-generator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "XML Sitemap Generator Online — Free SEO Indexing Tool",
  description:
    "Instantly create a search-engine friendly XML sitemap for your website. Optimize your site for Google, Bing, and Yandex indexing with custom priorities and frequencies.",
  keywords: [
    "xml sitemap generator",
    "free sitemap creator",
    "seo sitemap tool",
    "website indexer",
    "google sitemap maker",
    "custom xml sitemap",
    "site map for seo"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "XML Sitemap Generator | Boost Your SEO | ToolKit Pro",
    description: "Help search engines crawl your site more effectively with a professional XML sitemap.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "XML Sitemap Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant XML Sitemap Creator",
    description: "Generate a crawl-ready sitemap for your website in seconds.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <SitemapGeneratorClient />;
}