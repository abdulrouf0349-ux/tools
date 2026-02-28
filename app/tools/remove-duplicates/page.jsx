import React from 'react';
import RemoveDuplicatesClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/remove-duplicates`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Remove Duplicate Lines Online — Clean Your Lists Instantly",
  description:
    "The fastest way to remove duplicate lines from any text or list. Options for case sensitivity, trimming spaces, and sorting results.",
  keywords: [
    "remove duplicate lines",
    "list cleaner online",
    "deduplicate text",
    "unique line extractor",
    "clean email list tool",
    "remove redundant text"
  ],
  alternates: { canonical: TOOL_URL },
};

export default function Page() {
  return <RemoveDuplicatesClient />;
}