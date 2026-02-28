import React from 'react';
import Sha256HashClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/sha256-hash-generator`;
const OG_IMAGE = `${SITE_URL}/og/sha256-generator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "SHA-256 Hash Generator — Secure 256-bit Hashing Tool",
  description:
    "Generate secure SHA-256 hashes instantly. Essential for verifying data integrity, blockchain transactions, and digital signatures. 100% browser-side security.",
  keywords: [
    "sha256 hash generator",
    "secure hashing tool",
    "blockchain hash generator",
    "checksum tool online",
    "256-bit encryption hash",
    "verify data integrity",
    "cryptographic hash function"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "SHA-256 Hash Generator | Secure Crypto Tool | ToolKit Pro",
    description: "Create non-reversible 64-character cryptographic signatures for any text or data.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "SHA-256 Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online SHA-256 Signature Tool",
    description: "Fast, secure, and private browser-based hashing.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <Sha256HashClient />;
}