import React from 'react';
import UpsideDownTextClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/upside-down-text`;
const OG_IMAGE = `${SITE_URL}/og/upside-down.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Upside Down Text Generator — Flip Your Text 🙃",
  description:
    "Flip your text upside down instantly. Create cool social media bios, unique usernames, and funny messages with our free online flip text tool.",
  keywords: [
    "upside down text generator",
    "flip text online",
    "reverse text tool",
    "cool fonts for instagram",
    "unreadable text maker",
    "mirror text generator",
    "social media bio fonts"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Upside Down Text Generator | ToolKit Pro",
    description: "Make your text stand out by flipping it upside down. Perfect for creative social media posts.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Upside Down Text Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flip Your Text Instantly!",
    description: "Create upside-down messages for group chats and social bios.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <UpsideDownTextClient />;
}