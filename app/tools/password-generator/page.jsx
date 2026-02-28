import React from 'react';
import PasswordClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/password-generator`;
const OG_IMAGE = `${SITE_URL}/og/password-gen.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: "Secure Password Generator — Create Strong Random Passwords Online",
  description:
    "Generate cryptographically secure random passwords instantly. Customize length, symbols, and numbers to create unhackable passwords for your accounts.",
  keywords: [
    "secure password generator",
    "random password creator",
    "strong password tool",
    "unhackable password generator",
    "random string generator",
    "security tool online",
    "password length checker",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Strong Password Generator | ToolKit Pro",
    description: "Keep your accounts safe with randomly generated, high-entropy passwords. 100% client-side security.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Secure Password Tool Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Secure Password Creator",
    description: "Generate random, secure passwords with one click. Privacy first.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <PasswordClient />;
}