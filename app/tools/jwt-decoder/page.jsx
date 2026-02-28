import React from 'react';
import JwtDecoderClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/jwt-decoder`;
const OG_IMAGE = `${SITE_URL}/og/jwt-decoder.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "JWT Decoder Online — Decode JSON Web Tokens Instantly",
  description:
    "Free online JWT Decoder. View the Header and Payload of any JSON Web Token (JWT). Check claims, expiration (exp), and algorithm without a secret key.",
  keywords: [
    "jwt decoder",
    "decode json web token",
    "jwt checker online",
    "view jwt payload",
    "jwt debugger",
    "base64 jwt decode",
    "check token expiry",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Secure JWT Decoder & Debugger | ToolKit Pro",
    description: "Decode and inspect your JSON Web Tokens safely in your browser. No data leaves your machine.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "JWT Decoder Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Online JWT Inspector",
    description: "Fast, client-side JWT decoding for developers.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <JwtDecoderClient />;
}