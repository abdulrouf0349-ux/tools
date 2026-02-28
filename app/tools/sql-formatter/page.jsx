import React from 'react';
import SqlFormatterClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/sql-formatter`;
const OG_IMAGE = `${SITE_URL}/og/sql-formatter.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "SQL Formatter Online — Beautify & Clean SQL Queries",
  description:
    "Instantly format and beautify messy SQL queries. Supports SELECT, UPDATE, DELETE, and complex JOINs. Improve readability and debug database scripts faster.",
  keywords: [
    "sql formatter online",
    "beautify sql query",
    "sql lint tool",
    "format sql select statement",
    "sql code cleaner",
    "database query formatter",
    "pretty print sql"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "SQL Formatter | Clean Your Database Queries | ToolKit Pro",
    description: "Transform unreadable SQL strings into perfectly indented, professional code.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "SQL Formatter Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant SQL Code Beautifier",
    description: "Format your SQL scripts with one click. Fast, free, and secure.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <SqlFormatterClient />;
}