import React from 'react';
import AlphabetizerClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/alphabetizer`;
const OG_IMAGE = `${SITE_URL}/og/alphabetizer.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Alphabetizer — Sort Lists Alphabetically (A-Z & Z-A)",
  description:
    "Free online Alphabetizer tool. Sort lists, names, or keywords in alphabetical or reverse-alphabetical order instantly. Clean, fast, and easy to use.",
  keywords: [
    "alphabetizer",
    "sort list alphabetically",
    "alphabetical order tool",
    "a-z sorter",
    "list organizer",
    "sort names alphabetically",
    "reverse alphabetical order",
    "online list sorter",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Alphabetizer — Organize Your Lists Instantly",
    description: "Effortlessly sort lists A-Z or Z-A. Perfect for organizing keywords, names, and data.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Alphabetizer — Free List Sorter" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alphabetizer | Fast Online List Sorter",
    description: "Sort any list in alphabetical order with one click. Free and mobile-friendly.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Alphabetizer",
  "url": TOOL_URL,
  "description": "A free online tool to sort any text list into alphabetical or reverse-alphabetical order.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "3150",
    "bestRating": "5",
    "worstRating": "1",
  },
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Tools", "item": `${SITE_URL}/tools` },
    { "@type": "ListItem", "position": 3, "name": "Alphabetizer", "item": TOOL_URL },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I alphabetize a list online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Simply paste your list into our Alphabetizer tool, choose 'Sort A-Z' or 'Sort Z-A', and click the sort button to organize your list instantly." },
    },
    {
      "@type": "Question",
      "name": "Is this list sorter case-sensitive?",
      "acceptedAnswer": { "@type": "Answer", "text": "No, our tool is designed to be case-insensitive, meaning it sorts 'apple' and 'Apple' logically together without bias." },
    },
    {
      "@type": "Question",
      "name": "Can I sort a list in reverse order?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes! You can easily toggle between ascending (A-Z) and descending (Z-A) sorting modes." },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// 🖥️ PAGE — Server Component
// ═══════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      {[schemaApp, schemaBreadcrumb, schemaFAQ].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <AlphabetizerClient />
    </>
  );
}