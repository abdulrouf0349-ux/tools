import React from 'react';
import JsonToCsvClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/json-to-csv`;
const OG_IMAGE = `${SITE_URL}/og/json-to-csv.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "JSON to CSV Converter — Export JSON Data to Excel Online",
  description:
    "Convert JSON arrays to CSV format instantly. Free online tool to export data for Excel, Google Sheets, and data analysis with smart comma handling.",
  keywords: [
    "json to csv converter",
    "convert json to excel",
    "export json to csv online",
    "json data to spreadsheet",
    "json array to csv table",
    "free data conversion tools",
    "json to csv for google sheets",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant JSON to CSV Converter | ToolKit Pro",
    description: "Transform your JSON arrays into clean, downloadable CSV files for data analysis.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "JSON to CSV Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional JSON to CSV Export Tool",
    description: "The fastest way to convert JSON data into tabular format.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <JsonToCsvClient />;
}