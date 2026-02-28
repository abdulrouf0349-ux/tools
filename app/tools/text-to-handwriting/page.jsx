import React from 'react';
import TextToHandwritingClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/text-to-handwriting`;
const OG_IMAGE = `${SITE_URL}/og/handwriting-studio.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Text to Handwriting Converter — Online Assignment Maker",
  description:
    "Convert your digital text into realistic human handwriting. Perfect for school assignments, letters, and notes. Export as PDF with realistic lined paper effects.",
  keywords: [
    "text to handwriting converter",
    "online assignment maker",
    "realistic handwriting generator",
    "convert text to cursive",
    "handwritten notes creator",
    "digital to handwritten pdf",
    "automated assignment writer"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Realistic Text to Handwriting Converter | ToolKit Pro",
    description: "Make your digital notes look like they were written by hand on real paper.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Handwriting Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital to Handwriting PDF Generator",
    description: "Realistic fonts, ink colors, and lined paper for your assignments.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TextToHandwritingClient />;
}