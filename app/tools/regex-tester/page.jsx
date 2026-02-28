import React from 'react';
import RegexTesterClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/regex-tester`;
const OG_IMAGE = `${SITE_URL}/og/regex-tester.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Regex Tester & Debugger — Live Regular Expression Tool",
  description:
    "Test and debug your Regular Expressions (Regex) in real-time. Supports JavaScript patterns, flags, and instant match highlighting for developers.",
  keywords: [
    "regex tester",
    "regular expression debugger",
    "online regex matcher",
    "javascript regex tool",
    "regex pattern finder",
    "debug regex online",
    "regex cheat sheet tool",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Live Regex Tester & Pattern Matcher | ToolKit Pro",
    description: "The ultimate tool for testing and mastering regular expressions with live feedback.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Regex Tester Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regex Debugging Made Easy",
    description: "Test patterns, check flags, and visualize matches instantly.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <RegexTesterClient />;
}