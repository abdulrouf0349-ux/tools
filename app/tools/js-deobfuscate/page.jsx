import React from 'react';
import JsDeobfuscateClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/js-deobfuscate`;
const OG_IMAGE = `${SITE_URL}/og/js-deobfuscator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Javascript Deobfuscator — Decode & Format Obfuscated JS",
  description:
    "Free online JS Deobfuscator. Decode hex/unicode strings, unpack compressed scripts, and format messy JavaScript code for malware analysis and debugging.",
  keywords: [
    "js deobfuscator",
    "javascript decoder",
    "unpack javascript",
    "hex to string js",
    "beautify obfuscated js",
    "reverse engineer javascript",
    "malware analysis tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Professional JS Deobfuscator | ToolKit Pro",
    description: "Make obfuscated and messy JavaScript readable again in one click.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "JS Deobfuscator Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced JS Decoder & Unpacker",
    description: "The fastest way to clean up protected JavaScript code.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <JsDeobfuscateClient />;
}