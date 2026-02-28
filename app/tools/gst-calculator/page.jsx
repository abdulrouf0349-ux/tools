import React from 'react';
import GstCalculatorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/gst-calculator`;
const OG_IMAGE = `${SITE_URL}/og/gst-calc.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "GST Calculator Online — Calculate Inclusive & Exclusive Tax",
  description:
    "Quickly calculate GST (Goods and Services Tax) for any amount. Support for GST inclusive and exclusive calculations with standard tax rates like 5%, 12%, and 18%.",
  keywords: [
    "GST calculator",
    "online tax calculator",
    "GST inclusive calculator",
    "GST exclusive tool",
    "calculate GST amount",
    "business tax planner",
    "Indian GST calculator",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "GST Tax Calculator | ToolKit Pro",
    description: "Easily find the net price, GST amount, and total price for your business invoices.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "GST Calculator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast GST Tax Calculator",
    description: "Calculate tax breakdown for your products and services instantly.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <GstCalculatorClient />;
}