import React from 'react';
import UuidGeneratorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/uuid-generator`;
const OG_IMAGE = `${SITE_URL}/og/uuid-gen.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "UUID v4 Generator — Generate Unique GUIDs Online",
  description:
    "Generate cryptographically secure UUIDs (v4) for your applications. Bulk generate up to 50 unique identifiers at once. Perfect for database keys and testing.",
  keywords: [
    "uuid v4 generator",
    "online guid generator",
    "random unique id",
    "bulk uuid generator",
    "cryptographically secure id",
    "rfc 4122 compliant uuid",
    "developer tools online"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Random UUID v4 Generator | ToolKit Pro",
    description: "Instant, bulk UUID generation with one-click copy. Secure and RFC compliant.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "UUID Generator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online UUID v4 Generator",
    description: "Securely generate unique identifiers for your dev projects.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <UuidGeneratorClient />;
}