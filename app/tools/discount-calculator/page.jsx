import React from 'react';
import DiscountCalculatorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/discount-calculator`;
const OG_IMAGE = `${SITE_URL}/og/discount-calc.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Discount Calculator — Calculate Sale Price & Savings Instantly",
  description:
    "Free online discount calculator. Find out the final price after percent off, calculate total savings, and include sales tax with ease.",
  keywords: [
    "discount calculator",
    "percent off calculator",
    "sale price calculator",
    "shopping discount tool",
    "calculate savings",
    "final price after tax",
    "retail price calculator",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Discount & Sale Price Calculator | ToolKit Pro",
    description: "Shop smarter with our instant discount tool. Calculate your exact savings and tax in seconds.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Discount Calculator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Percent Off Calculator",
    description: "Instantly see how much you save during sales and clearance events.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Professional Discount Calculator",
  "url": TOOL_URL,
  "description": "A consumer utility designed to help shoppers calculate final sale prices after discounts and taxes.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <DiscountCalculatorClient />
    </>
  );
}