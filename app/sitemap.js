// ═══════════════════════════════════════════════════════════════
//  app/sitemap.js — Auto XML Sitemap for ToolkitPro
// ═══════════════════════════════════════════════════════════════

const SITE = "https://toolkitpro.io"; // Change if your domain is different

const TOOLS = [
  // Text Tools
  "word-counter", "case-converter", "remove-duplicates", "reverse-text",
  "find-replace", "extra-spaces", "remove-invisible-text", "invisible-text",
  "sentence-counter", "text-to-slug", "small-text-generator", "strikethrough-text",
  "duplicate-words-remover", "title-case-converter", "word-frequency", "alphabetizer",
  "text-to-handwriting", "character-map", "online-notepad", "text-comparison", "lorem-ipsum",
  
  // Stylish & Fun
  "stylish-text", "morse-code-convertor", "binary-to-text", "text-to-binary", "ascii-converter",
  
  // Encode & Convert
  "base64-encode", "base64-decode", "url-codec", "html-entity", "markdown-to-html",
  "xml-to-json", "json-to-csv", "yaml-to-json", "unit-converter", "color-converter",
  
  // Developer Tools
  "json-formatter", "json-validator", "html-minifier", "css-minifier", "sql-formatter",
  "js-deobfuscate", "md5-hash", "sha256-hash", "jwt-decoder", "uuid-generator",
  "regex-tester", "password-generator", "slug-to-title", "curl-to-fetch",
  
  // Web & SEO
  "css-gradient", "crontab-generator", "htaccess-redirect", "robots-txt-Generator", "sitemap-generator",
  
  // Utilities
  "unix-timestamp", "date-difference-calculator", "upside-down-text", "readability-score", "grammar-checker",
  "speech-to-text", "text-to-speech", "keyword-density-checker", "email-extractor", "number-extractor",
  "random-line-picker",
  
  // Calculators
  "time-zone-converter", "age-calculator", "bmi-calculator", "percentage-calculator", "gst-calculator",
  "scientific-calculator", "emi-calculator", "discount-calculator", "binary-to-decimal", "hex-to-rgb",
  "rgb-to-hex", "roman-to-numerals", "random-number", "stopwatch", "data-unit-converter",
  
  // AI & Social
  "ai-content-detector", "text-summarizer", "paraphrasing-tool",
  "instagram-caption-generator", "hashtag-generator", "bio-symbol-generator", "username-generator"
];

export default function sitemap() {
  const now = new Date().toISOString();

  // Root Homepage
  const routes = [
    {
      url: SITE,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    }
  ];

  // Dynamic Tool Routes
  const toolRoutes = TOOLS.map((slug) => ({
    url: `${SITE}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...routes, ...toolRoutes];
}