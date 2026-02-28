import React from 'react';
import TextToSpeechClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/text-to-speech`;
const OG_IMAGE = `${SITE_URL}/og/text-to-speech.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "AI Text to Speech Converter — Natural Voice Generator Online",
  description:
    "Convert text into natural-sounding speech instantly. Choose from multiple voices, adjust speed, and pitch. Free online tool for reading aloud articles and documents.",
  keywords: [
    "text to speech online",
    "ai voice generator",
    "read aloud tool",
    "speech synthesis online",
    "natural sounding voices",
    "convert text to audio",
    "tts generator free"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "AI Text to Speech | Natural Voice Generator | ToolKit Pro",
    description: "Listen to your documents and articles with our premium AI voice generator.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Text to Speech Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Text to Speech Tool",
    description: "High-quality speech synthesis with adjustable speed and pitch.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <TextToSpeechClient />;
}