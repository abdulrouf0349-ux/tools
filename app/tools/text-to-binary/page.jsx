import React from 'react';
import TextToBinaryClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/text-to-binary`;
const OG_IMAGE = `${SITE_URL}/og/text-to-binary.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Text to Binary Converter — Online Binary Code Generator",
  description:
    "Instantly convert plain text into binary code (0s and 1s). Free online ASCII/UTF-8 to binary translator for developers, students, and curious minds.",
  keywords: [
    "text to binary converter",
    "binary code generator",
    "ascii to binary online",
    "string to binary 8-bit",
    "010101 text translator",
    "binary encoder",
    "utf-8 binary conversion"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Text to Binary Converter | Binary Code Generator | ToolKit Pro",
    description: "Transform your words into the language of computers instantly.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Text to Binary Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Text to Binary Tool",
    description: "Convert any text into 8-bit binary strings in real-time.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TextToBinaryClient />;
}