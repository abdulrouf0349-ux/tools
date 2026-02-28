import React from 'react';
import DateDiffClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/date-diff`;
const OG_IMAGE = `${SITE_URL}/og/date-calculator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Date Difference Calculator — Exact Time Between Two Dates",
  description:
    "Calculate the exact duration between two dates in years, months, weeks, and days. Perfect for age calculation, project deadlines, and event planning.",
  keywords: [
    "date difference calculator",
    "calculate age online",
    "days between dates",
    "time duration calculator",
    "date to date counter",
    "project timeline tool",
    "countdown calculator",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Date Difference & Age Calculator | ToolKit Pro",
    description: "Get the precise breakdown of time between any two dates instantly. Supports years, months, and total day counts.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Date Difference Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exact Date Duration Tool",
    description: "Calculate exact time gaps for projects or personal milestones.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Date Difference Calculator Pro",
  "url": TOOL_URL,
  "description": "An interactive tool to measure the time span between two calendar dates with granular breakdowns.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <DateDiffClient />
    </>
  );
}