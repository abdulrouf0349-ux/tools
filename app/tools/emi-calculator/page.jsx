import React from 'react';
import EmiCalculatorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/emi-calculator`;
const OG_IMAGE = `${SITE_URL}/og/emi-calc.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 PROFESSIONAL SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "EMI Calculator — Calculate Monthly Loan Repayments Instantly",
  description:
    "Free online EMI calculator for Home, Car, and Personal loans. Calculate monthly installments, total interest, and repayment schedules with interactive sliders.",
  keywords: [
    "EMI calculator",
    "loan repayment calculator",
    "mortgage calculator",
    "car loan emi",
    "personal loan planner",
    "calculate monthly installment",
    "loan interest calculator",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "EMI Loan Calculator | ToolKit Pro",
    description: "Plan your finances with our interactive EMI tool. See your total interest and monthly breakdown instantly.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "EMI Calculator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Loan EMI Calculator",
    description: "Calculate your loan EMIs in seconds with real-time slider controls.",
    images: [OG_IMAGE],
  },
};

// ═══════════════════════════════════════════════════════════════
// 🏗️ JSON-LD SCHEMAS
// ═══════════════════════════════════════════════════════════════
const schemaApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "EMI Loan Calculator Pro",
  "url": TOOL_URL,
  "description": "A financial planning utility to calculate Equated Monthly Installments (EMI) for various loan types.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaApp) }} />
      <EmiCalculatorClient />
    </>
  );
}