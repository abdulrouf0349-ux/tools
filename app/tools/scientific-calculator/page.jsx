import React from 'react';
import ScientificCalculatorProClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/scientific-calculator`;
const OG_IMAGE = `${SITE_URL}/og/scientific-calculator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Advanced Scientific Calculator Online — Pro Math Tool",
  description:
    "A full-featured scientific calculator for trigonometry, logarithms, factorials, and engineering math. Free, fast, and works on all devices.",
  keywords: [
    "scientific calculator online",
    "advanced math calculator",
    "trigonometry calculator",
    "engineering calculator online",
    "logarithm solver",
    "factorial calculator",
    "math solver with memory",
    "online calc for students"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Pro Scientific Calculator | Advanced Math | ToolKit Pro",
    description: "Handle complex calculations with ease. Supports Sin, Cos, Tan, Log, Factorials, and more.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Scientific Calculator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Scientific Calculator Pro",
    description: "The ultimate tool for engineering and physics students.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <ScientificCalculatorProClient />;
}