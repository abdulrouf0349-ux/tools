import React from 'react';
import RobotsTxtClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/robots-txt-generator`;
const OG_IMAGE = `${SITE_URL}/og/robots-txt.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Robots.txt Generator — Custom SEO Crawl Control Tool",
  description:
    "Generate a perfect robots.txt file for your website instantly. Control crawl budget, block private directories, and guide search engine bots for better SEO.",
  keywords: [
    "robots.txt generator",
    "seo crawl control",
    "googlebot configuration",
    "disallow paths tool",
    "sitemap generator robots",
    "webmaster seo tools",
    "block search engine bots"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Robots.txt Generator | Bot Control & SEO | ToolKit Pro",
    description: "Easily manage how search engines interact with your site. Create custom robots.txt files in seconds.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Robots.txt Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Robots.txt Generator",
    description: "Optimize your site's crawling efficiency with a custom robots.txt file.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <RobotsTxtClient />;
}