import React from 'react';
import StopwatchClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/stopwatch`;
const OG_IMAGE = `${SITE_URL}/og/stopwatch.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Online Stopwatch — Precision Timer with Lap Support",
  description:
    "A free, high-precision online stopwatch for workouts, study sessions, and cooking. track split times and laps with millisecond accuracy.",
  keywords: [
    "online stopwatch",
    "digital lap timer",
    "precision stopwatch online",
    "millisecond timer",
    "free workout timer",
    "split time tracker",
    "productivity stopwatch"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Online Stopwatch | Accurate Lap Timer | ToolKit Pro",
    description: "Track your time with millisecond precision. Perfect for professional and personal use.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Stopwatch Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Precision Online Stopwatch",
    description: "Start, Stop, and Lap with one click. Fast, accurate, and free.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <StopwatchClient />;
}