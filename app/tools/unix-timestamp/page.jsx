import React from 'react';
import UnixTimestampClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/unix-timestamp`;
const OG_IMAGE = `${SITE_URL}/og/unix-timestamp.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Unix Timestamp Converter — Epoch Time to Human Readable Date",
  description:
    "Convert Unix timestamps to human-readable dates and vice-versa. Get the current epoch time in seconds and milliseconds. Essential developer utility tool.",
  keywords: [
    "unix timestamp converter",
    "epoch converter",
    "timestamp to date online",
    "current unix time",
    "seconds since 1970",
    "epoch time calculator",
    "developer utility tools"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Unix Timestamp & Epoch Converter | ToolKit Pro",
    description: "Instant conversion between Unix epoch seconds and human-readable timestamps.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Unix Timestamp Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Unix Epoch Converter",
    description: "Real-time Unix timestamp tracking and date conversion for developers.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <UnixTimestampClient />;
}