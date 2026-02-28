import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ═══════════════════════════════════════════════════════════════
//  🌐 SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL     = "https://toolkitpro.io";
const SITE_NAME    = "ToolKit Pro";
const SITE_TWITTER = "@toolkitpro";
const OG_IMAGE     = "https://toolkitpro.io/og-image.png";

// ═══════════════════════════════════════════════════════════════
//  📈 ROOT METADATA — Applied to ALL pages (can be overridden)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Title Template — child pages auto-get " | ToolKit Pro" suffix
  title: {
    default:  "ToolKit Pro — 200+ Free Online Tools | No Login Required",
    template: "%s | ToolKit Pro — Free Online Tools",
  },

  description:
    "200+ free online tools for developers, writers & designers. JSON formatter, word counter, Base64 encoder, password generator, regex tester & more. No signup, no ads.",

  keywords: [
    "free online tools",
    "developer tools online",
    "text tools free",
    "JSON formatter",
    "word counter",
    "Base64 encoder decoder",
    "password generator",
    "regex tester",
    "MD5 hash generator",
    "unit converter",
    "case converter",
    "SEO tools free",
    "no login tools",
  ],

  // ── Canonical
  alternates: { canonical: "/" },

  // ── Open Graph
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         SITE_URL,
    siteName:    SITE_NAME,
    title:       "ToolKit Pro — 200+ Free Online Tools | No Login Required",
    description: "JSON formatter, word counter, Base64, regex tester & 200+ more free tools. No login required.",
    images: [{
      url:    OG_IMAGE,
      width:  1200,
      height: 630,
      alt:    "ToolKit Pro — Free Online Tools",
    }],
  },

  // ── Twitter Card
  twitter: {
    card:        "summary_large_image",
    site:        SITE_TWITTER,
    creator:     SITE_TWITTER,
    title:       "ToolKit Pro — 200+ Free Online Tools",
    description: "JSON formatter, word counter, Base64 & 200+ free tools. No login.",
    images:      [OG_IMAGE],
  },

  // ── Robots
  robots: {
    index:   true,
    follow:  true,
    nocache: false,
    googleBot: {
      index:               true,
      follow:              true,
      "max-snippet":       -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ── Icons
  icons: {
    icon:     [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple:    "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  // ── Google Search Console (uncomment after verification)
  // verification: { google: "YOUR_GSC_VERIFICATION_CODE" },

  // ── App info
  applicationName: SITE_NAME,
  generator:       "Next.js",
  referrer:        "origin-when-cross-origin",
  authors:         [{ name: SITE_NAME, url: SITE_URL }],
  creator:         SITE_NAME,
  publisher:       SITE_NAME,

  // ── Format Detection
  formatDetection: {
    email:     false,
    address:   false,
    telephone: false,
  },
};

// ═══════════════════════════════════════════════════════════════
//  🏗️  ROOT LAYOUT
// ═══════════════════════════════════════════════════════════════
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Preconnect for performance (Core Web Vitals = SEO) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Theme Color (mobile browser UI) ── */}
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark light" />

        {/* ── Mobile SEO ── */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ToolKit Pro" />

        {/* ── Geo Tags (optional, helps local SEO) ── */}
        {/* <meta name="geo.region" content="US" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, minHeight: "100vh" }}
      >
        {children}
      </body>
    </html>
  );
}