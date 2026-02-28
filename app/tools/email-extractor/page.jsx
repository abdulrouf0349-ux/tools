import React from 'react';
import EmailExtractorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/email-extractor`;
const OG_IMAGE = `${SITE_URL}/og/email-extractor.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Email Extractor — Find & Extract Emails from Text Online",
  description:
    "Instantly extract all email addresses from any text, document, or webpage code. Automatically removes duplicates for a clean lead list.",
  keywords: [
    "email extractor",
    "find emails in text",
    "extract emails from website",
    "lead generation tool",
    "email scraper online",
    "remove duplicate emails",
    "text to email list converter",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Email Extractor & Finder Tool | ToolKit Pro",
    description: "Paste your messy text and get a clean, unique list of email addresses instantly.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Email Extractor Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Email Scraper Tool",
    description: "Extract leads from any text block with zero effort.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Professional Email Extractor",
  "url": TOOL_URL,
  "description": "A high-speed utility to parse text and extract valid email addresses using regex patterns.",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <EmailExtractorClient />
    </>
  );
}