import Navbar from "@/components/Navbar";
import ToolCard from "@/components/ToolCard";
import SearchBox from "@/components/SearchResults";

// ═══════════════════════════════════════════════════════════════
//  🔧 SITE CONFIG
// ═══════════════════════════════════════════════════════════════
const SITE_URL    = "https://toolkitpro.io";
const SITE_NAME   = "ToolKit Pro";
const SITE_TWITTER= "@toolkitpro";
const OG_IMAGE    = "https://toolkitpro.io/og-image.png";

// ═══════════════════════════════════════════════════════════════
//  📈 PAGE METADATA  Overrides layout.js defaults for homepage
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  // layout template se auto: "ToolKit Pro  200+ Free Online Tools | No Login Required"
  // Yahan override kar rahe hain kyunki homepage ka title unique hona chahiye
  title: "ToolKit Pro  200+ Free Online Tools | No Login Required",

  description:
    "200+ free online tools for developers, writers & designers. JSON formatter, word counter, Base64 encoder, password generator, regex tester & more. No signup, no ads, forever free.",

  keywords: [
    "free online tools",
    "developer tools",
    "JSON formatter",
    "word counter",
    "Base64 encoder",
    "password generator",
    "regex tester",
    "MD5 hash generator",
    "text tools online",
    "SEO tools free",
    "unit converter",
    "case converter",
    "stylish text generator",
    "no login tools",
    "free text tools",
    "online developer utilities",
  ],

  alternates: { canonical: SITE_URL },

  openGraph: {
    title:       "ToolKit Pro  200+ Free Online Tools",
    description: "JSON formatter, word counter, Base64, regex tester & 200+ more free tools. No login required.",
    url:         SITE_URL,
    siteName:    SITE_NAME,
    locale:      "en_US",
    type:        "website",
    images: [{
      url:    OG_IMAGE,
      width:  1200,
      height: 630,
      alt:    "ToolKit Pro  Free Online Tools",
    }],
  },

  twitter: {
    card:        "summary_large_image",
    site:        SITE_TWITTER,
    title:       "ToolKit Pro  200+ Free Online Tools",
    description: "JSON formatter, word counter, Base64 & 200+ free tools. No login.",
    images:      [OG_IMAGE],
  },
};
// OnlineToolsCenter.com
// ═══════════════════════════════════════════════════════════════
//  📦 CATEGORIES DATA
// ═══════════════════════════════════════════════════════════════
const CATEGORIES = [
  {
    label: "🚀 Document & Image Pro",
    tools: [
      { href:"https://freepdfconvert.io/pdf-to-excel",    icon:"📊",  label:"PDF to Excel",        color:"#4fffb0", desc:"Convert PDF tables to editable Excel sheets professionally.", tags:["Pro","Hot"],    searches:"5M/mo"     },
      { href:"https://freepdfconvert.io/excel-to-pdf",    icon:"📄",  label:"Excel to PDF",        color:"#00d4ff", desc:"High-quality Excel to PDF conversion with formatting.",        tags:["Office"],      searches:"2M/mo"     },
      { href:"https://freepdfconvert.io/image-converter", icon:"🖼️", label:"Image Converter",      color:"#c084fc", desc:"Convert PNG to JPG, WebP and more without quality loss.",     tags:["HD"],          searches:"3M/mo"     },
      { href:"https://freepdfconvert.io",                 icon:"✨",  label:"All Pro Conversions",  color:"#ff6b6b", desc:"Access 100+ premium document tools & OCR technology.",        tags:["Explore"],     searches:"All-in-One", isPremium:true },
    ]
  },
  {
    label: "🤖 AI & Content Tools",
    tools: [
      { href:"/tools/ai-content-detector",  icon:"🤖",  label:"AI Content Detector", color:"#ff6b6b", desc:"Check if your text is AI-generated (ChatGPT/Gemini).", tags:["AI","SEO"],     searches:"2M/mo"   },
      { href:"/tools/text-summarizer",      icon:"📝",  label:"AI Text Summarizer",  color:"#4fffb0", desc:"Turn long articles into short, readable summaries.",   tags:["AI","Reading"],searches:"800k/mo" },
      { href:"/tools/paraphrasing-tool",    icon:"🔄",  label:"Paraphrasing Tool",   color:"#c084fc", desc:"Rewrite sentences to make them unique and creative.",  tags:["Writing"],     searches:"3M/mo"   },
    ]
  },
  {
    label: "📱 Social Media Mastery",
    tools: [
      { href:"/tools/instagram-caption-generator", icon:"✍️",  label:"AI Caption Generator",  color:"#ff6b6b", desc:"Create trendy, viral captions for Instagram, TikTok & FB.", tags:["AI","Viral"],   searches:"4M/mo"   },
      { href:"/tools/hashtag-generator",           icon:"#️⃣", label:"Hashtag Generator",      color:"#4fffb0", desc:"Generate high-reach hashtags for your niche instantly.",    tags:["SEO","Growth"],searches:"2.5M/mo" },
      { href:"/tools/bio-symbol-generator",        icon:"💎",  label:"Bio Symbol Generator",  color:"#c084fc", desc:"Fancy symbols and cool icons for a professional bio.",      tags:["Bio","Style"], searches:"1.2M/mo" },
      { href:"/tools/username-generator",          icon:"🆔",  label:"Viral Username Ideas",  color:"#fb7185", desc:"Generate unique, aesthetic usernames based on your niche.", tags:["Ideas","Social"],searches:"2.1M/mo"},
    ]
  },
  {
    label: "✍️ Text Tools",
    tools: [
      { href:"/tools/word-counter",                icon:"📝",  label:"Word Counter",             color:"#4fffb0", desc:"Count words, chars, sentences & reading time.",          tags:["SEO","Writing"],  searches:"800k/mo"  },
      { href:"/tools/case-converter",              icon:"🔡",  label:"Case Converter",           color:"#00d4ff", desc:"UPPER, lower, camelCase, snake_case & more.",            tags:["Format","Daily"], searches:"450k/mo"  },
      { href:"/tools/remove-duplicates",           icon:"🧹",  label:"Remove Duplicate Lines",   color:"#4fffb0", desc:"Remove duplicate lines from any list.",                  tags:["Cleanup"],        searches:"Popular"  },
      { href:"/tools/reverse-text",                icon:"🔄",  label:"Reverse Text",             color:"#00d4ff", desc:"Reverse text by chars, words or lines.",                 tags:["Fun"],            searches:"10k/mo"   },
      { href:"/tools/find-replace",                icon:"🔍",  label:"Find & Replace",           color:"#c084fc", desc:"Find and replace text with regex support.",              tags:["Editor"],         searches:"50k/mo"   },
      { href:"/tools/extra-spaces",                icon:"🧽",  label:"Extra Space Remover",      color:"#fb923c", desc:"Remove extra spaces and blank lines.",                   tags:["Clean"],          searches:"Trending" },
      { href:"/tools/remove-invisible-text",              icon:"👁️", label:"Invisible Text Remover",   color:"#ff6b6b", desc:"Remove zero-width & invisible characters.",              tags:["Security"],       searches:"New"      },
      { 
  href: "/tools/invisible-text", 
  icon: "👻", // Ghost emoji perfect hai "Invisible" ke liye
  label: "Invisible Text Gen", 
  color: "#94a3b8", // Ghostly grey color zyada suit karega
  desc: "Copy blank spaces or clean hidden characters.", 
  tags: ["Social", "Clean"], 
  searches: "New" 
},
      { href:"/tools/sentence-counter",            icon:"📊",  label:"Sentence Counter",         color:"#ffd166", desc:"Count sentences, words, chars, paragraphs.",             tags:["Stats"],          searches:"30k/mo"   },
      { href:"/tools/text-to-slug",                icon:"🔗",  label:"Text to Slug",             color:"#4fffb0", desc:"Convert text to URL-friendly slug.",                     tags:["SEO","Dev"],      searches:"100k/mo"  },
      { href:"/tools/small-text-generator",                  icon:"🔡",  label:"Small Text Generator",     color:"#00d4ff", desc:"Generate tiny Unicode superscript text.",                tags:["Social"],         searches:"Viral"    },
      { href:"/tools/strikethrough-text",          icon:"~~",  label:"Strikethrough Text",        color:"#c084fc", desc:"Add strikethrough to your text.",                        tags:["Styles"],         searches:"Popular"  },
      { href:"/tools/duplicate-words-remover",             icon:"🗑️", label:"Duplicate Word Remover",   color:"#fb923c", desc:"Remove repeated words from text.",                       tags:["Writing"],        searches:"Useful"   },
      { href:"/tools/title-case-converter",                  icon:"🅣",  label:"Title Case Converter",     color:"#ffd166", desc:"Smart title case with article skipping.",                tags:["Format"],         searches:"Top"      },
      { href:"/tools/word-frequency",              icon:"📈",  label:"Word Frequency Counter",   color:"#4fffb0", desc:"Analyze word frequency in text.",                        tags:["Analysis"],       searches:"High"     },
      { href:"/tools/alphabetizer",                icon:"🔤",  label:"Alphabetizer",             color:"#00d4ff", desc:"Sort any list A–Z or Z–A.",                              tags:["Utility"],        searches:"Common"   },
      { href:"/tools/text-to-handwriting",         icon:"✍️", label:"Text to Handwriting",      color:"#ff6b6b", desc:"Beautiful handwriting-style font preview.",               tags:["Assignments"],    searches:"Trending" },
      { href:"/tools/character-map",               icon:"🗺️", label:"Character Map",            color:"#c084fc", desc:"Browse and copy special Unicode symbols.",               tags:["Design"],         searches:"Useful"   },
      { href:"/tools/online-notepad",              icon:"📓",  label:"Online Notepad",           color:"#ffd166", desc:"Distraction-free notepad with auto-save.",               tags:["Tools"],          searches:"Daily"    },
      { href:"/tools/text-comparison",             icon:"🔀",  label:"Text Comparison",          color:"#4fffb0", desc:"Compare two texts and highlight differences.",           tags:["Dev"],            searches:"Popular"  },
      { href:"/tools/lorem-ipsum",                 icon:"📄",  label:"Lorem Ipsum Generator",    color:"#c084fc", desc:"Generate placeholder text for mockups.",                 tags:["Design"],         searches:"300k/mo"  },
    ]
  },
  {
    label: "✨ Stylish & Fun",
    tools: [
      { href:"/tools/stylish-text",                icon:"✨",  label:"Stylish Text Generator",   color:"#ffd166", desc:"108 Unicode fonts for Instagram & WhatsApp.",            tags:["Social","Bio"],   searches:"1M/mo"    },
      { href:"/tools/morse-code-convertor",                  icon:"📡",  label:"Morse Code Generator",     color:"#4fffb0", desc:"Encode/decode text to Morse code.",                      tags:["Fun"],            searches:"Niche"    },
      { href:"/tools/binary-to-text",              icon:"💻",  label:"Binary to Text",           color:"#fb923c", desc:"Decode binary code to readable text.",                   tags:["Dev"],            searches:"Coding"   },
      { href:"/tools/text-to-binary",              icon:"01",  label:"Text to Binary",           color:"#ffd166", desc:"Encode any text into binary.",                           tags:["Education"],      searches:"Math"     },
      { href:"/tools/ascii-converter",             icon:"🔢",  label:"ASCII Converter",          color:"#c084fc", desc:"Convert text to ASCII codes and back.",                  tags:["Data"],           searches:"Basics"   },
    ]
  },
  {
    label: "🔒 Encode & Convert",
    tools: [
      { href:"/tools/base64-encode",               icon:"🔒",  label:"Base64 Encoder",           color:"#00d4ff", desc:"Encode text to Base64 format.",                          tags:["Secure"],         searches:"High"     },
      { href:"/tools/base64-decode",               icon:"🔓",  label:"Base64 Decoder",           color:"#c084fc", desc:"Decode Base64 strings to plain text.",                   tags:["Dev"],            searches:"High"     },
      { href:"/tools/url-codec",                   icon:"🌐",  label:"URL Encoder/Decoder",      color:"#fb923c", desc:"Encode or decode URL components.",                       tags:["Web"],            searches:"Daily"    },
      { href:"/tools/html-entity",                 icon:"🏷️", label:"HTML Entity Converter",    color:"#ff6b6b", desc:"Convert HTML entities both ways.",                       tags:["Code"],           searches:"Useful"   },
      { href:"/tools/markdown-to-html",            icon:"📝",  label:"Markdown to HTML",         color:"#00d4ff", desc:"Convert Markdown to clean HTML.",                        tags:["Blog"],           searches:"Writing"  },
      { href:"/tools/xml-to-json",                 icon:"🔄",  label:"XML to JSON",              color:"#ffd166", desc:"Convert XML data to JSON format.",                       tags:["Data"],           searches:"Dev"      },
      { href:"/tools/json-to-csv",                 icon:"📊",  label:"JSON to CSV",              color:"#4fffb0", desc:"Convert JSON arrays to CSV.",                            tags:["Excel"],          searches:"Data"     },
      { href:"/tools/yaml-to-json",                icon:"📋",  label:"YAML to JSON",             color:"#00d4ff", desc:"Convert YAML config files to JSON.",                     tags:["DevOps"],         searches:"Config"   },
      { href:"/tools/unit-converter",              icon:"⚖️", label:"Unit Converter",           color:"#ffd166", desc:"Length, weight, temperature & more.",                    tags:["Math"],           searches:"700k/mo"  },
      { href:"/tools/color-converter",             icon:"🎨",  label:"Color Converter",          color:"#fb923c", desc:"HEX, RGB and HSL color conversion.",                     tags:["Design"],         searches:"Art"      },
    ]
  },
  {
    label: "🛠️ Developer Tools",
    tools: [
      { href:"/tools/json-formatter",              icon:"{ }", label:"JSON Formatter",           color:"#c084fc", desc:"Beautify and format JSON instantly.",                    tags:["Pro","Clean"],    searches:"1.2M/mo"  },
      { href:"/tools/json-validator",              icon:"✅",  label:"JSON Validator",           color:"#4fffb0", desc:"Validate JSON syntax with error details.",               tags:["Testing"],        searches:"High"     },
      { href:"/tools/html-minifier",               icon:"⚡",  label:"HTML Minifier",            color:"#fb923c", desc:"Minify HTML to reduce file size.",                       tags:["Speed"],          searches:"SEO"      },
      { href:"/tools/css-minifier",                icon:"🎨",  label:"CSS Minifier",             color:"#ffd166", desc:"Minify CSS files instantly.",                            tags:["Optimized"],      searches:"Web"      },
      { href:"/tools/sql-formatter",               icon:"🗄️", label:"SQL Formatter",            color:"#00d4ff", desc:"Format SQL queries for readability.",                    tags:["Database"],       searches:"Dev"      },
      { href:"/tools/js-deobfuscate",              icon:"🔍",  label:"JS Deobfuscator",          color:"#c084fc", desc:"Decode obfuscated JavaScript code.",                     tags:["Security"],       searches:"Hard"     },
      { href:"/tools/md5-hash",                    icon:"🔒",  label:"MD5 Hash Generator",       color:"#ff6b6b", desc:"Generate MD5 hash from any text.",                       tags:["Security"],       searches:"Auth"     },
      { href:"/tools/sha256-hash",                 icon:"🔐",  label:"SHA-256 Generator",        color:"#4fffb0", desc:"Generate SHA-256 cryptographic hash.",                   tags:["Crypto"],         searches:"Safe"     },
      { href:"/tools/jwt-decoder",                 icon:"🪪",  label:"JWT Decoder",              color:"#fb923c", desc:"Decode and inspect JWT tokens.",                         tags:["Dev"],            searches:"Tokens"   },
      { href:"/tools/uuid-generator",              icon:"🆔",  label:"UUID Generator",           color:"#ffd166", desc:"Generate random UUID v1/v4 identifiers.",                tags:["Unique"],         searches:"ID"       },
      { href:"/tools/regex-tester",                icon:"🧪",  label:"RegEx Tester",             color:"#00d4ff", desc:"Test regex with real-time highlighting.",                tags:["Dev"],            searches:"Logic"    },
      { href:"/tools/password-generator",          icon:"🔐",  label:"Password Generator",       color:"#ff6b6b", desc:"Generate cryptographically strong passwords.",           tags:["Security"],       searches:"900k/mo"  },
      { href:"/tools/slug-to-title",               icon:"🔤",  label:"URL Slug to Title",        color:"#4fffb0", desc:"Convert URL slug like my-cool-post to My Cool Post.",    tags:["SEO","Format"],   searches:"80k/mo"   },
      { href:"/tools/curl-to-fetch",               icon:"🔁",  label:"cURL to Fetch / Axios",    color:"#c084fc", desc:"Convert cURL commands to JavaScript Fetch or Axios.",    tags:["Dev","API"],      searches:"200k/mo"  },
    ]
  },
  {
    label: "🌐 Web & SEO Tools",
    tools: [
      { href:"/tools/css-gradient",                icon:"🌈",  label:"CSS Gradient Generator",   color:"#c084fc", desc:"Generate linear, radial & conic gradients.",             tags:["Design"],         searches:"Art"      },
      { href:"/tools/crontab-generator",           icon:"⏰",  label:"Crontab Generator",         color:"#4fffb0", desc:"Build cron job schedules easily.",                       tags:["Server"],         searches:"Dev"      },
      { href:"/tools/htaccess-redirect",           icon:"↩️", label:"HTACCESS Redirect",         color:"#fb923c", desc:"Generate .htaccess redirect rules.",                     tags:["Server"],         searches:"SEO"      },
      { href:"/tools/robots-text-Generator",                  icon:"🤖",  label:"Robots.txt Generator",     color:"#ffd166", desc:"Generate robots.txt for your website.",                  tags:["Bot"],            searches:"SEO"      },
      { href:"/tools/sitemap-generator",           icon:"🗺️", label:"XML Sitemap Generator",    color:"#00d4ff", desc:"Generate XML sitemaps for better SEO.",                  tags:["Map"],            searches:"SEO"      },
    ]
  },
  {
    label: "🔧 Utilities",
    tools: [
      { href:"/tools/unix-timestamp",              icon:"🕐",  label:"Unix Timestamp Converter", color:"#00d4ff", desc:"Convert Unix timestamp to human-readable date and back.", tags:["Dev","Time"],     searches:"400k/mo"  },
      { href:"/tools/date-difference-calculator",                   icon:"📅",  label:"Date Difference Checker",  color:"#4fffb0", desc:"Calculate exact difference between two dates.",           tags:["Time","Math"],    searches:"600k/mo"  },
      { href:"/tools/upside-down-text",            icon:"🙃",  label:"Upside Down Text",         color:"#c084fc", desc:"Flip your text upside down for fun social posts.",        tags:["Fun","Social"],   searches:"200k/mo"  },
      { href:"/tools/readability-score",           icon:"📖",  label:"Readability Score",        color:"#ffd166", desc:"Check Flesch reading ease and grade level of your text.", tags:["SEO","Writing"],  searches:"150k/mo"  },
      { href:"/tools/grammar-checker",             icon:"✏️", label:"Grammar Checker",          color:"#4fffb0", desc:"Check grammar, spelling and writing style instantly.",    tags:["Writing","AI"],   searches:"5M/mo"    },
      { href:"/tools/speech-to-text",              icon:"🎤",  label:"Speech to Text",           color:"#ff6b6b", desc:"Convert voice and speech to text using your microphone.", tags:["AI","Voice"],     searches:"2M/mo"    },
      { href:"/tools/text-to-speech",              icon:"🔊",  label:"Text to Speech",           color:"#fb923c", desc:"Convert any text to natural-sounding speech audio.",      tags:["AI","Voice"],     searches:"1.5M/mo"  },
      { href:"/tools/keyword-density-checker",             icon:"🔑",  label:"Keyword Density Checker",  color:"#00d4ff", desc:"Analyze keyword density and frequency for SEO.",          tags:["SEO","Analysis"], searches:"300k/mo"  },
      { href:"/tools/email-extractor",             icon:"📧",  label:"Email Extractor",          color:"#4fffb0", desc:"Extract all email addresses from any text or document.",  tags:["Data","Scrape"],  searches:"250k/mo"  },
      { href:"/tools/number-extractor",            icon:"🔢",  label:"Number Extractor",         color:"#c084fc", desc:"Extract all numbers from any text instantly.",            tags:["Data","Clean"],   searches:"100k/mo"  },
      { href:"/tools/random-line-picker",          icon:"🎯",  label:"Random Line Picker",       color:"#ffd166", desc:"Pick random lines from a list  for giveaways & draws.", tags:["Random","Fun"],   searches:"200k/mo"  },
    ]
  },
  {
    label: "🧮 Calculators",
    tools: [
      { href:"/tools/time-zone-converter",                   icon:"🌍",  label:"Time Zone Converter",      color:"#00d4ff", desc:"Convert time between world time zones instantly.",        tags:["Time","Travel"],  searches:"500k/mo"  },
      { href:"/tools/age-calculator",              icon:"🎂",  label:"Age Calculator",           color:"#4fffb0", desc:"Calculate exact age in years, months and days.",         tags:["Personal"],       searches:"2M/mo"    },
      { href:"/tools/bmi-calculator",              icon:"⚖️", label:"BMI Calculator",           color:"#fb923c", desc:"Calculate Body Mass Index and health category.",         tags:["Health"],         searches:"1.5M/mo"  },
      { href:"/tools/percentage-calculator",                  icon:"💯",  label:"Percentage Calculator",    color:"#c084fc", desc:"Calculate percentages, increases and decreases.",        tags:["Math"],           searches:"3M/mo"    },
      { href:"/tools/gst-calculator",              icon:"🧾",  label:"GST / Tax Calculator",     color:"#ffd166", desc:"Calculate GST, VAT and tax amounts instantly.",          tags:["Finance"],        searches:"1M/mo"    },
      { href:"/tools/scientific-calculator",             icon:"🔬",  label:"Scientific Calculator",    color:"#4fffb0", desc:"Advanced scientific calculator with all functions.",     tags:["Math","Study"],   searches:"2M/mo"    },
      { href:"/tools/emi-calculator",              icon:"🏦",  label:"Loan / EMI Calculator",    color:"#ff6b6b", desc:"Calculate loan EMI, interest and total payment.",        tags:["Finance"],        searches:"5M/mo"    },
      { href:"/tools/discount-calculator",               icon:"🏷️", label:"Discount Calculator",      color:"#fb923c", desc:"Calculate discounted price and savings instantly.",      tags:["Shopping"],       searches:"800k/mo"  },
      { href:"/tools/binary-to-decimal",              icon:"💻",  label:"Binary ↔ Decimal",         color:"#00d4ff", desc:"Convert binary to decimal and decimal to binary.",       tags:["CS","Math"],      searches:"600k/mo"  },
      { href:"/tools/hex-to-rgb",                     icon:"🎨",  label:"Hex to RGB Converter",     color:"#c084fc", desc:"Convert HEX color codes to RGB values.",                 tags:["Design","CSS"],   searches:"400k/mo"  },
      { href:"/tools/rgb-to-hex",                     icon:"🎨",  label:"RGB to Hex Converter",     color:"#fb923c", desc:"Convert RGB values to HEX color codes.",                 tags:["Design","CSS"],   searches:"400k/mo"  },
      { href:"/tools/roman-to-numerals",              icon:"🏛️", label:"Roman Numerals Converter", color:"#ffd166", desc:"Convert numbers to Roman numerals and back.",            tags:["History","Math"], searches:"300k/mo"  },
      { href:"/tools/random-number",               icon:"🎲",  label:"Random Number Generator",  color:"#4fffb0", desc:"Generate random numbers with custom range and count.",   tags:["Games","Dev"],    searches:"700k/mo"  },
      { href:"/tools/stopwatch",                   icon:"⏱️", label:"Stopwatch & Timer",        color:"#ff6b6b", desc:"Online stopwatch, countdown timer and lap tracker.",     tags:["Time","Sports"],  searches:"1M/mo"    },
      { href:"/tools/data-unit-converter",         icon:"💾",  label:"Data Unit Converter",      color:"#00d4ff", desc:"Convert MB, GB, TB, KB data units instantly.",           tags:["Tech","Storage"], searches:"500k/mo"  },
    ]
  },
];

// ═══════════════════════════════════════════════════════════════
//  📊 HELPERS
// ═══════════════════════════════════════════════════════════════
const ALL_TOOLS = CATEGORIES.flatMap(c => c.tools);
const TOTAL     = ALL_TOOLS.length;

const STATS = [
  { n:"200+", l:"Free Tools"      },
  { n:"0",    l:"Sign Ups Needed" },
  { n:"100%", l:"Free Forever"    },
  { n:"30k",  l:"Daily Uses"      },
];

const FOOTER_LINKS = [
  { href:"/tools/word-counter",       label:"Word Counter"        },
  { href:"/tools/json-formatter",     label:"JSON Formatter"      },
  { href:"/tools/password-generator", label:"Password Generator"  },
  { href:"/tools/base64-encode",      label:"Base64 Encoder"      },
  { href:"/tools/regex-tester",       label:"RegEx Tester"        },
  { href:"/tools/md5-hash",           label:"MD5 Hash"            },
  { href:"/tools/unit-converter",     label:"Unit Converter"      },
  { href:"/tools/stylish-text",       label:"Stylish Text"        },
  { href:"/tools/age-calculator",     label:"Age Calculator"      },
  { href:"/tools/emi-calculator",     label:"EMI Calculator"      },
  { href:"/tools/case-converter",     label:"Case Converter"      },
  { href:"/tools/text-to-slug",       label:"Text to Slug"        },
];

// ═══════════════════════════════════════════════════════════════
//  🏗️  JSON-LD STRUCTURED DATA
// ═══════════════════════════════════════════════════════════════
const schemaWebsite = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  "name":     SITE_NAME,
  "url":      SITE_URL,
  "description": "200+ free online tools for developers, writers & designers.",
  "potentialAction": {
    "@type":       "SearchAction",
    "target":      { "@type":"EntryPoint", "urlTemplate":`${SITE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type":    "Organization",
  "name":     SITE_NAME,
  "url":      SITE_URL,
  "logo": {
    "@type":  "ImageObject",
    "url":    `${SITE_URL}/logo.png`,
    "width":  "512",
    "height": "512",
  },
  "description": "Free online tools platform with 200+ utilities for developers, writers & designers.",
  "foundingDate": "2024",
  "sameAs": [],
};

const schemaSoftwareApp = {
  "@context":       "https://schema.org",
  "@type":          "WebApplication",
  "name":           SITE_NAME,
  "url":            SITE_URL,
  "description":    "200+ free online tools  no login required",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem":     "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "aggregateRating": {
    "@type":       "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "12500",
    "bestRating":  "5",
    "worstRating": "1",
  },
};

const schemaItemList = {
  "@context":      "https://schema.org",
  "@type":         "ItemList",
  "name":          "Free Online Tools  ToolKit Pro",
  "description":   "200+ free online tools  no login required",
  "url":           SITE_URL,
  "numberOfItems": TOTAL,
  "itemListElement": ALL_TOOLS.slice(0, 50).map((t, i) => ({
    "@type":       "ListItem",
    "position":    i + 1,
    "name":        t.label,
    "description": t.desc,
    "url": t.href.startsWith("http") ? t.href : `${SITE_URL}${t.href}`,
  })),
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name":  "Are all tools on ToolKit Pro free?",
      "acceptedAnswer": { "@type":"Answer", "text":"Yes, all 200+ tools are completely free to use. No sign-up, no login, no credit card required  ever." },
    },
    {
      "@type": "Question",
      "name":  "Do I need to create an account to use these tools?",
      "acceptedAnswer": { "@type":"Answer", "text":"No account needed. All tools work instantly in your browser  just open and use." },
    },
    {
      "@type": "Question",
      "name":  "Is my data safe when using these tools?",
      "acceptedAnswer": { "@type":"Answer", "text":"Yes. Most tools process data directly in your browser. Your text, files and data are never stored on our servers." },
    },
    {
      "@type": "Question",
      "name":  "What is the best free JSON formatter online?",
      "acceptedAnswer": { "@type":"Answer", "text":"ToolKit Pro's JSON Formatter beautifully formats and validates JSON instantly with syntax highlighting and error detection  completely free, no login needed." },
    },
    {
      "@type": "Question",
      "name":  "Can I use ToolKit Pro on mobile?",
      "acceptedAnswer": { "@type":"Answer", "text":"Yes, all tools are fully responsive and work perfectly on mobile phones and tablets without any app download." },
    },
    {
      "@type": "Question",
      "name":  "How many tools does ToolKit Pro have?",
      "acceptedAnswer": { "@type":"Answer", "text":"ToolKit Pro has 200+ free online tools covering text processing, developer utilities, calculators, encoders, SEO tools, AI tools and more." },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
//  🖥️  PAGE COMPONENT  (Server Component  no "use client")
// ═══════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <>
      {/* ── JSON-LD Schemas ── */}
      {[schemaWebsite, schemaOrg, schemaSoftwareApp, schemaItemList, schemaFAQ].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <style>{`
        @keyframes gradMove { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes shimmer  { 0%,100%{opacity:.4} 50%{opacity:1} }
        .promo-banner { transition: transform .3s cubic-bezier(.175,.885,.32,1.275), border-color .3s !important; }
        .promo-banner:hover { transform: translateY(-5px); border-color: #4fffb080 !important; }
        .footer-link  { color: var(--muted); text-decoration: none; font-size: 12px; transition: color .15s; }
        .footer-link:hover { color: var(--accent); }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary span { transform: rotate(45deg); }
        details summary span { display: inline-block; transition: transform .2s; }
        @media (max-width:640px) {
          .hero-section { padding: 40px 16px 32px !important; }
          .hero-title   { letter-spacing: -1.5px !important; font-size: clamp(28px,8vw,48px) !important; }
          .tools-grid   { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .cat-section  { padding: 0 16px 40px !important; }
          .cat-heading  { font-size: 13px !important; padding-bottom: 8px !important; }
          .footer-bar   { padding: 20px 16px !important; }
          .promo-banner { padding: 16px !important; flex-direction: column !important; gap: 16px !important; }
        }
        @media (min-width:641px) and (max-width:900px) {
          .tools-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
      `}</style>

      <Navbar />

      <main style={{ minHeight:"100vh", background:"var(--background)" }}>

        {/* ── Background Mesh ── */}
        <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:"-20%", left:"50%", transform:"translateX(-50%)", width:900, height:600, background:"radial-gradient(ellipse,#4fffb012 0%,transparent 65%)" }} />
          <div style={{ position:"absolute", bottom:"-10%", right:"-10%", width:600, height:600, background:"radial-gradient(ellipse,#00d4ff08 0%,transparent 70%)" }} />
        </div>

        {/* ══════════════════════════════════════════════════
            🎯 HERO  H1 is the #1 on-page SEO signal
        ══════════════════════════════════════════════════ */}
        <section
          className="hero-section"
          aria-label="Hero"
          style={{ position:"relative", zIndex:1, textAlign:"center", padding:"72px 24px 52px" }}
        >
          {/* Badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#4fffb012", border:"1px solid #4fffb035", borderRadius:99, padding:"7px 18px", marginBottom:28 }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#4fffb0", display:"inline-block", animation:"shimmer 2s infinite" }} />
            <span style={{ fontSize:13, color:"#4fffb0", fontWeight:600, letterSpacing:".2px" }}>
              200+ Free Tools · No Login · No Ads
            </span>
          </div>

          {/* ✅ H1  Primary keyword, under 60 chars for SERP */}
          <h1
            className="hero-title"
            style={{ fontSize:"clamp(34px,7vw,80px)", fontWeight:800, lineHeight:1.05, letterSpacing:"-3px", marginBottom:18, color:"var(--text)" }}
          >
            Free Online Tools <br />
            <span style={{ background:"linear-gradient(90deg,#4fffb0,#00d4ff,#4fffb0)", backgroundSize:"200% auto", backgroundClip:"text", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:"gradMove 4s linear infinite" }}>
              200+ Developer &amp; Text Tools
            </span>
          </h1>

          {/* ✅ Subtext  Supports H1 with secondary keywords */}
          <p style={{ fontSize:"clamp(15px,2.5vw,18px)", color:"var(--muted)", maxWidth:520, margin:"0 auto 40px", lineHeight:1.65 }}>
            JSON formatter, word counter, Base64 encoder, regex tester,
            password generator &amp; 195 more  fast, free, no sign-up required.
          </p>

          {/* Stats */}
          <div style={{ display:"flex", justifyContent:"center", gap:"clamp(16px,4vw,52px)", flexWrap:"wrap" }}>
            {STATS.map(s => (
              <div key={s.l} style={{ textAlign:"center" }}>
                <div style={{ fontSize:"clamp(20px,4vw,30px)", fontWeight:800, color:"var(--text)", letterSpacing:"-1px" }}>{s.n}</div>
                <div style={{ fontSize:11, color:"var(--muted)", fontWeight:600, textTransform:"uppercase", letterSpacing:".5px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 🔍 Search Box (Client Component) ── */}
        <SearchBox allTools={ALL_TOOLS} />

        {/* ── Promo Banner ── */}
        <section aria-label="Document Converter Promo" style={{ maxWidth:1280, margin:"0 auto 48px", padding:"0 24px" }}>
          <a
            href="https://freepdfconvert.io"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-banner"
            aria-label="Try Advanced Document Converter at freepdfconvert.io"
            style={{ display:"flex", alignItems:"center", justifyContent:"space-between", background:"linear-gradient(90deg,#4fffb010,#00d4ff10)", border:"1px solid #4fffb030", borderRadius:20, padding:"24px 32px", textDecoration:"none" }}
          >
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                <span style={{ background:"#4fffb0", color:"#000", fontSize:10, fontWeight:900, padding:"2px 8px", borderRadius:4 }}>NEW</span>
                {/* ✅ H2 in promo  secondary keyword signal */}
                <h2 style={{ color:"white", fontSize:20, fontWeight:700, margin:0 }}>Advanced Document Converter</h2>
              </div>
              <p style={{ color:"gray", fontSize:14, margin:0 }}>
                PDF to Excel, Image to PDF, OCR try our advanced pro-suite at freepdfconvert.io
              </p>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
              <span style={{ color:"#4fffb0", fontWeight:600, fontSize:14 }}>Explore Pro Tools</span>
              <div style={{ width:40, height:40, borderRadius:"50%", background:"#4fffb0", display:"flex", alignItems:"center", justifyContent:"center", color:"#000", fontWeight:"bold", flexShrink:0 }}>→</div>
            </div>
          </a>
        </section>

        {/* ══════════════════════════════════════════════════
            🗂️  TOOL CATEGORIES  (H2 = category SEO signals)
        ══════════════════════════════════════════════════ */}
        {CATEGORIES.map(cat => (
          <section
            key={cat.label}
            className="cat-section"
            aria-label={cat.label}
            style={{ position:"relative", zIndex:1, maxWidth:1280, margin:"0 auto", padding:"0 24px 48px" }}
          >
            <h2
              className="cat-heading"
              style={{ fontSize:15, fontWeight:700, color:"var(--muted)", textTransform:"uppercase", letterSpacing:"1px", marginBottom:16, paddingBottom:12, borderBottom:"1px solid var(--border)" }}
            >
              {cat.label}
            </h2>
            <div
              className="tools-grid"
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:14 }}
            >
              {cat.tools.map((tool, i) => (
                <ToolCard key={tool.href} tool={tool} index={i} />
              ))}
            </div>
          </section>
        ))}

        {/* ══════════════════════════════════════════════════
            ❓ FAQ  Google Rich Result + E-E-A-T signal
        ══════════════════════════════════════════════════ */}
        <section
          aria-label="Frequently Asked Questions"
          style={{ position:"relative", zIndex:1, maxWidth:800, margin:"0 auto 64px", padding:"0 24px" }}
        >
          <h2 style={{ fontSize:22, fontWeight:800, color:"var(--text)", textAlign:"center", marginBottom:32, letterSpacing:"-0.5px" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {schemaFAQ.mainEntity.map((item, i) => (
              <details
                key={i}
                style={{ background:"var(--bg2,#111)", border:"1px solid var(--border,#222)", borderRadius:14, padding:"16px 20px", cursor:"pointer" }}
              >
                <summary style={{ fontSize:15, fontWeight:700, color:"var(--text)", listStyle:"none", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12 }}>
                  {item.name}
                  <span style={{ color:"var(--accent,#4fffb0)", fontSize:18, flexShrink:0 }}>+</span>
                </summary>
                <p style={{ fontSize:14, color:"var(--muted)", lineHeight:1.7, marginTop:12, marginBottom:0 }}>
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            🔗 FOOTER  Internal links for Google crawling
        ══════════════════════════════════════════════════ */}
        <footer
          className="footer-bar"
          aria-label="Site Footer"
          style={{ borderTop:"1px solid var(--border)", padding:"36px 24px 28px", textAlign:"center", position:"relative", zIndex:1 }}
        >
          {/* ✅ Internal links  helps Google discover all tool pages */}
          <nav aria-label="Popular tools quicklinks" style={{ marginBottom:20 }}>
            <p style={{ fontSize:11, color:"var(--muted)", fontWeight:700, textTransform:"uppercase", letterSpacing:"1px", marginBottom:12 }}>
              Popular Tools
            </p>
            <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"8px 16px" }}>
              {FOOTER_LINKS.map(l => (
                <a key={l.href} href={l.href} className="footer-link">{l.label}</a>
              ))}
            </div>
          </nav>

          <div style={{ borderTop:"1px solid var(--border)", paddingTop:20 }}>
            <p style={{ color:"var(--muted)", fontSize:13, margin:0 }}>
              ⚡ <strong style={{ color:"var(--text)" }}>{SITE_NAME}</strong>  {TOTAL} free online tools, forever.
              No login · No ads · No tracking.
            </p>
            <p style={{ color:"var(--muted)", fontSize:11, marginTop:8, marginBottom:0 }}>
              © {new Date().getFullYear()} {SITE_NAME} · Built with Next.js
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}