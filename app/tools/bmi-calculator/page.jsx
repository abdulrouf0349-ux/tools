import React from 'react';
import BmiCalculatorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/bmi-calculator`;
const OG_IMAGE = `${SITE_URL}/og/bmi-calculator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "BMI Calculator — Check Your Body Mass Index Online",
  description:
    "Free online BMI Calculator. Calculate your Body Mass Index (BMI) instantly based on weight and height. Includes BMI categories for adults and health tips.",
  keywords: [
    "BMI Calculator",
    "calculate BMI online",
    "body mass index formula",
    "healthy weight range checker",
    "BMI categories",
    "weight height ratio",
    "fitness calculator",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "BMI Calculator — Accurate Body Mass Index Checker",
    description: "Check if you are in a healthy weight range with our instant BMI tool. Fast, free, and easy to use.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "BMI Calculator Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator | Health & Fitness Tools",
    description: "Get your BMI score instantly and find your ideal weight category.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS (Medical/Health Focus)
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BMI Calculator Pro",
  "url": TOOL_URL,
  "description": "An online health tool to calculate Body Mass Index (BMI) for adults based on weight and height.",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a healthy BMI range?",
      "acceptedAnswer": { "@type": "Answer", "text": "For most adults, a healthy BMI is in the 18.5 to 24.9 range." },
    },
    {
      "@type": "Question",
      "name": "What is the formula for BMI?",
      "acceptedAnswer": { "@type": "Answer", "text": "The formula for BMI is weight in kilograms divided by height in meters squared (kg/m²)." },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// 🖥️ PAGE — Server Component
// ═══════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      {[schemaApp, schemaFAQ].map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <BmiCalculatorClient />
    </>
  );
}