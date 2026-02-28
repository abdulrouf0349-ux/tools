import React from 'react';
import SpeechToTextClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/speech-to-text`;
const OG_IMAGE = `${SITE_URL}/og/speech-to-text.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Speech to Text — Free Online Voice Typing Tool",
  description:
    "Convert your voice to text in real-time with our free Speech to Text tool. Perfect for dictation, transcribing notes, and hands-free typing in your browser.",
  keywords: [
    "speech to text online",
    "voice typing tool",
    "free transcription tool",
    "voice to text converter",
    "real-time dictation online",
    "audio to text browser",
    "speech recognition tool"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Speech to Text | Real-time Voice Typing | ToolKit Pro",
    description: "Type with your voice! Fast, accurate, and secure browser-based speech recognition.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Speech to Text Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Voice to Text Converter",
    description: "Stop typing and start speaking. Instant voice-to-text conversion.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <SpeechToTextClient />;
}