import React from 'react';
import HtaccessRedirectClient from './client';

// ═══════════════════════════════════════════════════════════════
// ⚙️ SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://toolkitpro.io";
const TOOL_URL = `${SITE_URL}/tools/htaccess-redirect`;
const OG_IMAGE = `${SITE_URL}/og/htaccess-gen.png`;

// ═══════════════════════════════════════════════════════════════
// 📈 SEO METADATA (SEO AGENT MODE)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  title: ".htaccess Redirect Generator — Free 301 & 302 Tool",
  description:
    "Generate accurate Apache .htaccess redirect rules instantly. Create SEO-friendly 301 permanent and 302 temporary redirects to preserve your site's link juice.",
  keywords: [
    "htaccess redirect generator",
    "301 redirect tool",
    "302 redirect generator",
    "apache redirect rules",
    "htaccess seo tool",
    "permanent redirect code",
    "website migration tools",
  ],
  alternates: { canonical: TOOL_URL },
  openGraph: {
    title: "Expert .htaccess Redirect Generator | ToolKit Pro",
    description: "The easiest way to generate error-free Apache redirect codes for SEO migrations.",
    url: TOOL_URL,
    siteName: "ToolKit Pro",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Htaccess Generator Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free .htaccess Redirect Rule Generator",
    description: "Keep your SEO authority safe with perfect 301 redirect codes.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return <HtaccessRedirectClient />;
}