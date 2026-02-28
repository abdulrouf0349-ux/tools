import React from 'react';
import StylishClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/stylish-text`;
const OG_IMAGE = `${SITE_URL}/og/stylish-text.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Stylish Text Generator — Cool Fonts for Instagram & WhatsApp",
  description:
    "Generate 50+ stylish text styles, cool fonts, and aesthetic symbols for your Instagram bio, Twitter, and WhatsApp. Copy and paste beautiful Unicode fonts instantly.",
  keywords: [
    "stylish text generator",
    "cool fonts for instagram bio",
    "aesthetic text generator",
    "fancy letter changer",
    "whatsapp stylish font",
    "copy and paste fonts",
    "unicode text converter"
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Stylish Text Generator | Aesthetic Fonts | ToolKit Pro",
    description: "Transform your plain text into beautiful, eye-catching styles for social media.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Stylish Text Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Cool Font Generator",
    description: "Make your social media profiles stand out with stylish Unicode fonts.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <StylishClient />;
}