import React from 'react';
import InstagramCaptionGenerator from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/instagram-caption-generator`;
const OG_IMAGE = `${SITE_URL}/og/caption-gen.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "AI Instagram Caption Generator — Viral Social Media Quotes",
  description:
    "Generate catchy and viral captions for Instagram, TikTok, and Facebook instantly. Choose from Cool, Funny, Aesthetic, and Savage moods to boost your engagement.",
  keywords: [
    "instagram caption generator",
    "viral tiktok captions",
    "facebook quote generator",
    "aesthetic captions for ig",
    "savage captions for selfies",
    "social media engagement tools",
    "ai writing assistant",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Free AI Caption Generator | ToolKit Pro",
    description: "Get 2x more engagement with trending captions tailored for your photos.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Caption Generator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Viral Caption Generator",
    description: "Never run out of ideas for your next post. Try our AI generator.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <InstagramCaptionGenerator />;
}