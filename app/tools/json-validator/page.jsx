import React from 'react';
import JsonValidatorClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/json-validator`;
const OG_IMAGE = `${SITE_URL}/og/json-validator.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "JSON Validator & Linter — Fix JSON Syntax Errors Online",
  description:
    "Free online JSON Validator. Check your JSON code for syntax errors, validate against RFC standards, and get detailed error reports instantly.",
  keywords: [
    "json validator",
    "json lint",
    "check json syntax online",
    "fix json error",
    "json schema validator",
    "debug json code",
    "online json checker",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Professional JSON Syntax Checker | ToolKit Pro",
    description: "Instantly find and fix errors in your JSON code with our advanced linter.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "JSON Validator Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant JSON Lint & Validator Tool",
    description: "The easiest way to validate and debug JSON data structures.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <JsonValidatorClient />;
}