import React from 'react';
import ReverseTextClient from './client';

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Reverse Text Online — Mirror, Flip & Backward Text Generator",
  description:
    "Instantly reverse any text, flip words, or mirror sentences. Perfect for social media bios, puzzles, and developer testing.",
  keywords: [
    "reverse text generator",
    "backward text tool",
    "flip text online",
    "mirror text converter",
    "reverse words order",
    "backwards writing tool"
  ],
};

export default function Page() {
  return <ReverseTextClient />;
}