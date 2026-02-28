import React from 'react';
import AIContentDetectorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/ai-content-detector`;
const OG_IMAGE = `${SITE_URL}/og/ai-content-detector.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "AI Content Detector — Check ChatGPT, Gemini & AI Writing",
  description:
    "Free AI content detector to identify text written by ChatGPT, Gemini, Claude, and other AI models. Get accurate human vs AI probability scores instantly.",
  keywords: [
    "ai content detector",
    "chatgpt checker",
    "ai writing detector",
    "detect ai generated text",
    "free ai scanner",
    "check if text is ai",
    "human vs ai text analyzer",
    "gpt zero alternative",
    "ai plagiarism checker",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "AI Content Detector — Check ChatGPT & AI Writing Free",
    description: "Instantly identify AI-generated content with our advanced pattern recognition tool. 100% free and accurate.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "AI Content Detector — ToolKit Pro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Detector | Human vs AI Checker",
    description: "Scan your text for AI signatures and verify content authenticity instantly.",
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
  "name": "AI Content Detector",
  "url": TOOL_URL,
  "description": "Professional tool to detect AI-generated content from ChatGPT, Gemini, and Claude models.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "5420",
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
    { "@type": "ListItem", "position": 3, "name": "AI Detector", "item": TOOL_URL },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is this AI content detector?",
      "acceptedAnswer": { "@type": "Answer", "text": "Our tool uses linguistic pattern analysis to detect common AI signatures. While very accurate for long-form text, we recommend manual review for 100% certainty." },
    },
    {
      "@type": "Question",
      "name": "Can it detect content from ChatGPT and Gemini?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, it is designed to recognize patterns common in ChatGPT (GPT-3.5/GPT-4), Google Gemini, Claude, and other LLMs." },
    },
    {
      "@type": "Question",
      "name": "What is a good AI detection score?",
      "acceptedAnswer": { "@type": "Answer", "text": "An AI score below 20% typically indicates human-written content, while a score above 50% suggests the content is likely AI-generated." },
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

      <AIContentDetectorClient />
    </>
  );
}