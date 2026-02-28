import React from 'react';
import CrontabGeneratorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/crontab-generator`;
const OG_IMAGE = `${SITE_URL}/og/crontab-generator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Crontab Generator — Visual Cron Job Schedule Creator",
  description:
    "Generate crontab schedules easily with our visual cron job creator. Supports minutes, hours, days, months, and weekdays. Perfect for Linux server automation.",
  keywords: [
    "crontab generator",
    "cron job creator",
    "linux automation tool",
    "cron schedule maker",
    "online crontab editor",
    "server task scheduler",
    "cron syntax helper",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Crontab Generator | Easy Cron Job Scheduling",
    description: "Build complex cron job schedules visually. No more memorizing crontab syntax. Copy and paste ready-to-use commands.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Crontab Generator Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Crontab Generator for Developers",
    description: "Generate and validate cron schedules instantly for Linux servers.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Crontab Generator Pro",
  "url": TOOL_URL,
  "description": "A visual tool for creating and managing cron job schedules for Linux and Unix-like operating systems.",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Linux, macOS",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

// ═══════════════════════════════════════════════════════════════
// 🖥️ PAGE — Server Component
// ═══════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <CrontabGeneratorClient />
    </>
  );
}