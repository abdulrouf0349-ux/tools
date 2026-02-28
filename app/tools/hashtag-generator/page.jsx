import React from 'react';
import HashtagGenerator from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/hashtag-generator`;
const OG_IMAGE = `${SITE_URL}/og/hashtag-gen.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Viral Hashtag Generator — Trending Tags for Instagram & TikTok",
  description:
    "Generate high-reach and trending hashtags for Instagram, TikTok, and YouTube. Boost your social media visibility with niche-specific viral tags.",
  keywords: [
    "hashtag generator",
    "trending hashtags 2026",
    "instagram hashtag tool",
    "tiktok viral tags",
    "social media seo",
    "get more followers tags",
    "youtube shorts hashtags",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Viral Hashtag Generator | ToolKit Pro",
    description: "Get the best hashtags to go viral on explore pages instantly.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Hashtag Generator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viral Hashtag Finder",
    description: "Boost your social media reach with one click.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <HashtagGenerator />;
}