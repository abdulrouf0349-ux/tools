import React from 'react';
import OnlineNotepadClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/online-notepad`;
const OG_IMAGE = `${SITE_URL}/og/online-notepad.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Online Notepad — Fast, Secure & Auto-Saving Text Editor",
  description:
    "A free online notepad that saves your notes automatically in your browser. No login required. 100% private and secure browser-based text editor.",
  keywords: [
    "online notepad",
    "free text editor online",
    "auto save notes",
    "browser notepad",
    "private notes online",
    "simple web notepad",
    "notepad with word count",
    "no login notepad",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Instant Online Notepad | ToolKit Pro",
    description: "Write and store notes instantly. Your data never leaves your computer, ensuring 100% privacy.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Online Notepad Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure & Fast Online Notepad",
    description: "The simplest way to take notes in your browser with automatic saving.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <OnlineNotepadClient />;
}