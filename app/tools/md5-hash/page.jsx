import React from 'react';
import Md5HashClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/md5-hash`;
const OG_IMAGE = `${SITE_URL}/og/md5-hash.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "MD5 Hash Generator — Fast & Secure Online Checksum Tool",
  description:
    "Generate a 32-character MD5 hash from any string instantly. Perfect for checksums, file integrity verification, and non-sensitive data hashing.",
  keywords: [
    "md5 hash generator",
    "online md5 generator",
    "generate md5 checksum",
    "message digest 5 online",
    "md5 encryption tool",
    "string to md5",
    "secure hash online",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant MD5 Hash Generator | ToolKit Pro",
    description: "Securely generate MD5 hashes in your browser. No data is ever sent to our servers.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "MD5 Hash Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free MD5 Checksum Tool for Developers",
    description: "Generate 128-bit hash values instantly with our client-side MD5 tool.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <Md5HashClient />;
}