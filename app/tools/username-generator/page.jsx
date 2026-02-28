import React from 'react';
import UsernameGenerator from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/username-generator`;
const OG_IMAGE = `${SITE_URL}/og/username-gen.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Aesthetic Username Generator — Instagram, TikTok & Gaming Ideas",
  description:
    "Generate unique and aesthetic usernames for social media. Create professional brand handles and cool gamertags instantly based on your niche.",
  keywords: [
    "username generator for instagram",
    "aesthetic username ideas",
    "cool tiktok usernames",
    "gamertag generator",
    "professional social media handles",
    "unique nickname ideas",
    "youtube channel name generator"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Viral Username & Handle Generator | ToolKit Pro",
    description: "Get the perfect social media handle for your personal brand or gaming profile.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Username Generator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unique Username Ideas for Creators",
    description: "Instant username suggestions for Instagram, TikTok, and more.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <UsernameGenerator />;
}