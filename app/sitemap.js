// ═══════════════════════════════════════════════════════════════
//  app/sitemap.js — Auto XML Sitemap for all tools
//  Next.js serves this as /sitemap.xml automatically
//  ⚙️  CHANGE: SITE to match your domain
// ═══════════════════════════════════════════════════════════════

const SITE = "https://toolkitpro.io"; // ← CHANGE to your domain

const TOOLS = [
  // ── Text Tools ──────────────────────────────────────────────
  "word-counter", "case-converter", "remove-duplicates", "reverse-text",
  "find-replace", "extra-spaces", "invisible-text", "sentence-counter",
  "text-to-slug", "small-text", "strikethrough-text", "duplicate-words",
  "title-case", "word-frequency", "alphabetizer", "text-to-handwriting",
  "character-map", "online-notepad", "text-comparison", "lorem-ipsum",
  // ── Stylish & Fun ────────────────────────────────────────────
  "stylish-text", "morse-code", "binary-to-text", "text-to-binary", "ascii-converter",
  // ── Encode & Convert ─────────────────────────────────────────
  "base64-encode", "base64-decode", "url-codec", "html-entity", "markdown-to-html",
  "xml-to-json", "json-to-csv", "yaml-to-json", "unit-converter", "color-converter",
  // ── Developer Tools ──────────────────────────────────────────
  "json-formatter", "json-validator", "html-minifier", "css-minifier", "sql-formatter",
  "js-deobfuscate", "md5-hash", "sha256-hash", "jwt-decoder", "uuid-generator",
  "regex-tester", "password-generator", "slug-to-title", "curl-to-fetch",
  // ── Web & SEO ────────────────────────────────────────────────
  "css-gradient", "crontab-generator", "htaccess-redirect", "robots-txt", "sitemap-generator",
  // ── Utilities ────────────────────────────────────────────────
  "unix-timestamp", "date-diff", "upside-down-text", "readability-score", "grammar-checker",
  "speech-to-text", "text-to-speech", "keyword-density", "email-extractor", "number-extractor",
  "random-line-picker",
  // ── Calculators ──────────────────────────────────────────────
  "time-zone", "age-calculator", "bmi-calculator", "percentage", "gst-calculator",
  "scientific-calc", "emi-calculator", "discount-calc", "binary-decimal", "hex-rgb",
  "rgb-hex", "roman-numerals", "random-number", "stopwatch", "data-unit-converter",
  // ── AI & Social ──────────────────────────────────────────────
  "ai-content-detector", "text-summarizer", "paraphrasing-tool",
  "instagram-caption-generator", "hashtag-generator", "bio-symbol-generator", "username-generator",
];

export default function sitemap() {
  const now = new Date().toISOString();

  return [
    // Homepage — highest priority
    {
      url:             SITE,
      lastModified:    now,
      changeFrequency: "daily",
      priority:        1.0,
    },
    // Tool pages
    ...TOOLS.map(slug => ({
      url:             `${SITE}/tools/${slug}`,
      lastModified:    now,
      changeFrequency: "weekly",
      priority:        0.8,
    })),
  ];
}