import React from 'react';
import MorseCodeClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/morse-code`;
const OG_IMAGE = `${SITE_URL}/og/morse-code.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Morse Code Converter — Translate Text to Morse Online",
  description:
    "Fast and free online Morse Code translator. Convert English text to dots and dashes or decode Morse back to text instantly. Perfect for education and secret messages.",
  keywords: [
    "morse code converter",
    "text to morse translator",
    "morse code decoder",
    "decode dots and dashes",
    "online morse code generator",
    "international morse code",
    "secret message cipher",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Morse Code Translator | ToolKit Pro",
    description: "Convert any text message into Morse code and learn the language of dots and dashes.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Morse Code Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Morse Code Text Generator",
    description: "Translate text to Morse code instantly in your browser.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <MorseCodeClient />;
}