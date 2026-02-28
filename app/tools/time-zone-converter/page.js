import React from 'react';
import TimeZoneClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/time-zone`;
const OG_IMAGE = `${SITE_URL}/og/world-clock.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "World Time Zone Converter — Live Global Clock & Meeting Planner",
  description:
    "Check current local time in any city worldwide. Convert GMT/UTC to local time and plan international meetings easily with our real-time world clock.",
  keywords: [
    "world time zone converter",
    "live world clock online",
    "gmt to local time",
    "international meeting planner",
    "current time in New York",
    "utc time converter",
    "time zone map tool"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "World Time Zone Converter | Live Global Clock | ToolKit Pro",
    description: "Track time across major global cities in real-time. Never miss a global deadline.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "World Clock Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Time Zone Tracker",
    description: "Real-time clock for major cities and custom time zone conversion.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TimeZoneClient />;
}