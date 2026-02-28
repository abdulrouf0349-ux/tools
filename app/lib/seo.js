// ═══════════════════════════════════════════════════════════════
//  lib/seo.js  — Complete SEO System for ToolKit Pro
//  ⚙️  CHANGE: SITE.domain, SITE.url, SITE.logo, SITE.twitter
// ═══════════════════════════════════════════════════════════════

export const SITE = {
  name:       "ToolKit Pro",
  domain:     "toolkitpro.io",                      // ← CHANGE
  url:        "https://toolkitpro.io",               // ← CHANGE
  logo:       "https://toolkitpro.io/logo.png",      // ← CHANGE
  twitter:    "@toolkitpro",                         // ← CHANGE
  locale:     "en_US",
  themeColor: "#050810",
};

// ── Homepage SEO ─────────────────────────────────────────────
export const HOME_SEO = {
  title:       "ToolKit Pro — 200+ Free Online Tools | No Login Required",
  description: "200+ free online tools for developers, writers & designers. JSON formatter, word counter, Base64 encoder, regex tester, hash generator, password generator & more. No sign-up needed.",
  keywords:    "free online tools, developer tools, text tools, JSON formatter, word counter, Base64 encoder, regex tester, MD5 hash, password generator, SEO tools, unit converter, case converter",
  ogImage:     `https://toolkitpro.io/og-home.png`,  // ← CHANGE
};

// ═══════════════════════════════════════════════════════════════
//  TOOL_SEO — Per-tool metadata + FAQ (Rich Results)
//  Each tool gets: title (50-60 chars), description (120-160 chars),
//  keywords (5-10 terms), faq (shown as Google rich result)
// ═══════════════════════════════════════════════════════════════
export const TOOL_SEO = {

  // ── Text Tools ──────────────────────────────────────────────
  "word-counter": {
    title:       "Word Counter Online — Free Character & Sentence Count Tool",
    description: "Count words, characters, sentences, paragraphs & reading time instantly. Free online word counter for writers, students and SEO professionals. No login needed.",
    keywords:    "word counter, character counter, sentence counter, reading time calculator, word count online, free word counter, paragraph counter",
    faq: [
      { q: "How do I count words online?",            a: "Paste your text in the box — words, characters, sentences and reading time are calculated instantly." },
      { q: "Is this word counter free?",              a: "Yes, completely free with no sign-up required." },
      { q: "Does it count characters with spaces?",  a: "Yes, it shows characters both with and without spaces." },
      { q: "Can I use it for SEO meta descriptions?",a: "Yes! The character counter helps you stay within Google's 160-character meta description limit." },
    ],
  },

  "case-converter": {
    title:       "Case Converter Online — UPPER, lower, camelCase, snake_case",
    description: "Convert text to uppercase, lowercase, title case, camelCase, snake_case, kebab-case and more. Free online case converter tool. Instant results.",
    keywords:    "case converter, uppercase converter, lowercase converter, camelCase converter, snake_case converter, title case tool, text case changer",
    faq: [
      { q: "How to convert text to uppercase online?", a: "Paste your text and click UPPERCASE — it converts instantly." },
      { q: "What is camelCase?",                       a: "camelCase joins words together with each new word capitalized except the first, like: myVariableName." },
      { q: "What is snake_case?",                      a: "snake_case uses underscores between words in lowercase, like: my_variable_name." },
    ],
  },

  "remove-duplicates": {
    title:       "Remove Duplicate Lines Online — Free Duplicate Line Remover",
    description: "Remove duplicate lines from any text or list instantly. Free online duplicate line remover. Supports case-sensitive and case-insensitive modes.",
    keywords:    "remove duplicate lines, duplicate line remover, remove repeated lines, deduplicate text, unique lines tool",
    faq: [
      { q: "How to remove duplicate lines online?",   a: "Paste your list, choose case-sensitive or not, and click Remove Duplicates." },
      { q: "Does order of lines change?",             a: "No, the original order is preserved — only duplicate lines are removed." },
    ],
  },

  "reverse-text": {
    title:       "Reverse Text Online — Free Text Reversal Tool",
    description: "Reverse text by characters, words or lines instantly. Free online reverse text generator. Great for fun, creative writing and puzzles.",
    keywords:    "reverse text, reverse string, flip text, mirror text, reverse words, backwards text generator",
    faq: [
      { q: "Can I reverse word order?",  a: "Yes! Choose to reverse by characters, words, or entire lines." },
      { q: "What is reversed text for?", a: "Reversed text is used for puzzles, creative posts, watermarks and fun social media content." },
    ],
  },

  "find-replace": {
    title:       "Find and Replace Text Online — Free Regex Find & Replace Tool",
    description: "Find and replace text with regex support. Free online find & replace tool. Supports case-sensitive, whole word and regular expression modes.",
    keywords:    "find and replace, text replacement, regex find replace, bulk text replace, online text editor, find replace tool",
    faq: [
      { q: "Can I use regex in find & replace?",    a: "Yes! Enable the Regex option to use regular expressions for advanced pattern matching." },
      { q: "Is it case-sensitive?",                 a: "You can toggle case-sensitive mode on or off depending on your needs." },
    ],
  },

  "extra-spaces": {
    title:       "Remove Extra Spaces Online — Free Space Remover Tool",
    description: "Remove extra spaces, double spaces, tabs and blank lines from text. Free online whitespace cleaner and space remover tool. One click cleanup.",
    keywords:    "remove extra spaces, whitespace remover, double space remover, trim spaces, clean text, blank line remover",
    faq: [
      { q: "What spaces does this remove?",          a: "It removes leading/trailing spaces, double spaces, extra tabs and unnecessary blank lines." },
      { q: "Will it remove all spaces?",             a: "No — it only removes extra/redundant spaces while preserving single spaces between words." },
    ],
  },

  "invisible-text": {
    title:       "Invisible Text Remover — Remove Zero-Width Characters Online",
    description: "Remove invisible zero-width characters, soft hyphens and hidden Unicode from text. Free tool to clean AI-generated and copy-pasted text.",
    keywords:    "invisible text remover, zero width character remover, hidden characters, clean text, remove invisible characters, Unicode cleaner",
    faq: [
      { q: "What are invisible characters?",         a: "Zero-width spaces (U+200B), zero-width non-joiners and similar hidden Unicode characters invisible to the eye." },
      { q: "Why remove invisible characters?",       a: "They can cause issues in databases, search engines, code and AI detection tools." },
    ],
  },

  "sentence-counter": {
    title:       "Sentence Counter Online — Free Paragraph & Word Count Tool",
    description: "Count sentences, words, characters and paragraphs instantly. Free online sentence counter for essays, articles and SEO content writing.",
    keywords:    "sentence counter, paragraph counter, word count, character count, text statistics, essay counter",
    faq: [
      { q: "How does it detect sentences?",          a: "It counts sentence-ending punctuation marks (. ! ?) to calculate the sentence count." },
      { q: "Is it accurate for academic essays?",    a: "Yes — it provides sentence, word, character and paragraph counts used in academic writing." },
    ],
  },

  "text-to-slug": {
    title:       "Text to Slug Converter Online — Free URL Slug Generator",
    description: "Convert any text to a URL-friendly slug instantly. Free online slug generator for blog posts, SEO URLs and web development.",
    keywords:    "text to slug, URL slug generator, slug converter, SEO URL, permalink generator, URL-friendly text",
    faq: [
      { q: "What is a URL slug?",                    a: "A URL slug is the part of a URL that identifies a page in human-readable form, like /free-online-tools." },
      { q: "How are spaces handled in slugs?",       a: "Spaces are replaced with hyphens and special characters are removed to create clean URL slugs." },
    ],
  },

  "small-text": {
    title:       "Small Text Generator — Tiny Superscript & Subscript Font Online",
    description: "Generate tiny small caps, superscript and subscript Unicode text. Free small text generator for Instagram bio, Twitter and social media. Copy & paste.",
    keywords:    "small text generator, tiny text, superscript text, subscript text, Unicode small caps, mini text generator, Instagram small font",
    faq: [
      { q: "Where can I use small text?",            a: "Instagram bio, Twitter, Facebook, WhatsApp, Discord and any platform that supports Unicode." },
      { q: "Is small text readable?",                a: "Small caps text is readable, while superscript is decorative. Use it for stylish bios and posts." },
    ],
  },

  "strikethrough-text": {
    title:       "Strikethrough Text Generator — Free Online Strikethrough Tool",
    description: "Add strikethrough to any text instantly. Free strikethrough text generator using Unicode combining characters. Works on all platforms.",
    keywords:    "strikethrough text, cross out text, strikethrough generator, text with line through, delete text style, Unicode strikethrough",
    faq: [
      { q: "How does strikethrough text work?",      a: "It adds a Unicode combining strikethrough character (U+0336) after each letter." },
      { q: "Does it work on WhatsApp?",              a: "WhatsApp also supports native strikethrough via ~text~ but this Unicode version works everywhere." },
    ],
  },

  "duplicate-words": {
    title:       "Duplicate Word Remover Online — Free Repeated Word Cleaner",
    description: "Remove duplicate and repeated words from text instantly. Free online duplicate word remover for cleaning content, lists and writing.",
    keywords:    "duplicate word remover, remove repeated words, word deduplicator, clean duplicate words, text cleaner",
    faq: [
      { q: "Does it remove all repeated words?",     a: "It keeps the first occurrence and removes subsequent duplicates of the same word." },
      { q: "Is it case-sensitive?",                  a: "You can choose case-sensitive or case-insensitive duplicate removal." },
    ],
  },

  "title-case": {
    title:       "Title Case Converter Online — Smart Title Capitalization Tool",
    description: "Convert text to proper title case online. Smart title case converter that skips articles (a, an, the) and prepositions. Free title capitalization tool.",
    keywords:    "title case converter, title capitalization, title case tool, capitalize title, headline capitalization, AP title case",
    faq: [
      { q: "What words are not capitalized in title case?", a: "Short prepositions (in, on, at), articles (a, an, the) and conjunctions (and, but, or) are kept lowercase." },
      { q: "Which title case style does this follow?",      a: "It follows AP (Associated Press) and Chicago Manual of Style rules." },
    ],
  },

  "word-frequency": {
    title:       "Word Frequency Counter Online — Free Text Analysis Tool",
    description: "Analyze word frequency and density in any text. Free online word frequency counter with visual chart. Useful for SEO keyword analysis and content writing.",
    keywords:    "word frequency counter, word frequency analysis, keyword density, text analysis, word occurrence counter, content analysis tool",
    faq: [
      { q: "What is word frequency?",                a: "Word frequency shows how many times each word appears in a text, useful for keyword analysis." },
      { q: "Can I use it for SEO?",                  a: "Yes — check your content's keyword density and ensure your target keywords appear naturally." },
    ],
  },

  "alphabetizer": {
    title:       "Alphabetizer Online — Free List Sorter A to Z Tool",
    description: "Sort any list alphabetically from A to Z or Z to A. Free online alphabetizer for words, names and lists. Supports comma, space and line separators.",
    keywords:    "alphabetizer, sort list alphabetically, A to Z sorter, alphabetical order tool, list sorter, text sorter",
    faq: [
      { q: "Can I sort in reverse alphabetical order?", a: "Yes — toggle Z to A for reverse alphabetical sorting." },
      { q: "What separators are supported?",            a: "You can sort by new lines, commas or spaces as separators." },
    ],
  },

  "text-to-handwriting": {
    title:       "Text to Handwriting Online — Free Handwriting Font Generator",
    description: "Convert typed text to beautiful handwriting style font. Free text to handwriting converter for assignments, notes and creative projects.",
    keywords:    "text to handwriting, handwriting generator, handwriting font converter, cursive text, handwritten text online, assignment handwriting",
    faq: [
      { q: "Is this real handwriting?",              a: "It uses Google's handwriting-style fonts (Caveat, Dancing Script) to simulate handwritten text." },
      { q: "Can I use it for school assignments?",   a: "Yes — a popular use case is creating handwriting-style text for printed assignments." },
    ],
  },

  "character-map": {
    title:       "Character Map Online — Free Unicode Symbol Picker & Copier",
    description: "Browse and copy special Unicode characters, symbols, arrows, math symbols, currency signs and emoji. Free online character map. Click to copy.",
    keywords:    "character map, Unicode symbols, special characters, symbol picker, copy paste symbols, Unicode character picker, special symbols keyboard",
    faq: [
      { q: "How do I copy a special character?",     a: "Browse the categories, click on any symbol and it is instantly copied to your clipboard." },
      { q: "What categories are available?",         a: "Arrows, stars, hearts, math symbols, currency, Greek letters, music notes and emoji." },
    ],
  },

  "online-notepad": {
    title:       "Online Notepad — Free Browser Notepad with Auto Save",
    description: "Free distraction-free online notepad with auto-save. No login required. Your notes stay in your browser — private and instant.",
    keywords:    "online notepad, browser notepad, free notepad online, text editor online, auto save notepad, quick notes",
    faq: [
      { q: "Are my notes saved?",                    a: "Notes are auto-saved in your browser's local storage — they persist between sessions." },
      { q: "Is it private?",                         a: "Yes — notes never leave your browser and are not sent to any server." },
    ],
  },

  "text-comparison": {
    title:       "Text Comparison Tool Online — Free Diff Checker Tool",
    description: "Compare two texts and highlight differences instantly. Free online text comparison and diff checker. Find added, removed and changed lines.",
    keywords:    "text comparison, diff checker, compare text online, text diff tool, find text differences, document comparison",
    faq: [
      { q: "What does the diff checker show?",       a: "It highlights lines that were added (green), removed (red) and unchanged (gray) between two texts." },
      { q: "Can I compare code?",                    a: "Yes — it works for any plain text including code, articles and documents." },
    ],
  },

  "lorem-ipsum": {
    title:       "Lorem Ipsum Generator Online — Free Placeholder Text Tool",
    description: "Generate Lorem Ipsum placeholder text for mockups and designs. Free Lorem Ipsum generator — choose paragraphs, words or sentences count.",
    keywords:    "lorem ipsum generator, placeholder text, dummy text generator, lorem ipsum filler, design placeholder, mockup text",
    faq: [
      { q: "What is Lorem Ipsum?",                   a: "Lorem Ipsum is standard placeholder text used in design and publishing to fill layouts before real content is ready." },
      { q: "Can I generate specific word counts?",   a: "Yes — generate by paragraphs, sentences or words count." },
    ],
  },

  // ── Stylish & Fun ────────────────────────────────────────────
  "stylish-text": {
    title:       "Stylish Text Generator — 108 Fancy Unicode Fonts for Instagram",
    description: "Generate 108 stylish Unicode text styles for Instagram bio, WhatsApp, Twitter and Facebook. Copy and paste fancy fonts instantly. 100% free.",
    keywords:    "stylish text generator, fancy text, Instagram font generator, Unicode fonts, copy paste fonts, WhatsApp fonts, cool text generator, bio fonts",
    faq: [
      { q: "How to make stylish text for Instagram?", a: "Type your text above and choose from 108 unique Unicode font styles to copy and paste in your bio." },
      { q: "Do these fonts work everywhere?",          a: "They use Unicode characters that work on Instagram, WhatsApp, Twitter, TikTok and most apps." },
      { q: "Why won't my font show on some devices?",  a: "Some older devices may not support all Unicode characters. The most common styles work universally." },
    ],
  },

  "morse-code": {
    title:       "Morse Code Translator Online — Free Encode & Decode Tool",
    description: "Translate text to Morse code and decode Morse code to text. Free online Morse code converter with audio playback support.",
    keywords:    "morse code translator, morse code converter, text to morse code, decode morse code, morse code generator, international morse code",
    faq: [
      { q: "How do I translate text to Morse code?",  a: "Type your text and click Encode — each letter is converted to dots and dashes." },
      { q: "What does SOS look like in Morse code?",  a: "SOS in Morse code is: ... --- ..." },
    ],
  },

  "binary-to-text": {
    title:       "Binary to Text Converter Online — Free Binary Decoder",
    description: "Decode binary code to readable text instantly. Free online binary to text converter. Supports 8-bit ASCII binary.",
    keywords:    "binary to text, binary decoder, binary to ASCII, decode binary, binary converter online, 0s and 1s decoder",
    faq: [
      { q: "How to convert binary to text?",          a: "Paste your binary code (8-bit groups separated by spaces) and click Decode." },
      { q: "What binary format is supported?",        a: "Standard 8-bit ASCII binary. Each byte represents one character." },
    ],
  },

  "text-to-binary": {
    title:       "Text to Binary Converter Online — Free ASCII to Binary Tool",
    description: "Convert any text to binary code instantly. Free online text to binary converter. Each character converted to 8-bit binary.",
    keywords:    "text to binary, ASCII to binary, text binary converter, encode binary, binary code generator",
    faq: [
      { q: "How does text to binary work?",           a: "Each character in your text is converted to its ASCII code and then to 8-bit binary." },
      { q: "What is binary used for?",                a: "Binary is the fundamental language of computers — all data is ultimately stored as 0s and 1s." },
    ],
  },

  "ascii-converter": {
    title:       "ASCII Converter Online — Free Text to ASCII Code Tool",
    description: "Convert text to ASCII codes and ASCII codes back to text. Free bidirectional ASCII converter tool. Works with all printable ASCII characters.",
    keywords:    "ASCII converter, text to ASCII, ASCII to text, ASCII code converter, ASCII table online, character to ASCII",
    faq: [
      { q: "What is ASCII?",                          a: "ASCII (American Standard Code for Information Interchange) is a character encoding standard using numbers 0-127." },
      { q: "Can I convert ASCII back to text?",       a: "Yes — paste ASCII codes separated by spaces or commas and decode them back to readable text." },
    ],
  },

  // ── Encode & Convert ─────────────────────────────────────────
  "base64-encode": {
    title:       "Base64 Encoder Online — Free Text to Base64 Converter",
    description: "Encode any text or string to Base64 format instantly. Free online Base64 encoder — no installation required. Safe for URLs and APIs.",
    keywords:    "Base64 encoder, text to Base64, encode Base64 online, Base64 converter, Base64 encoding tool",
    faq: [
      { q: "What is Base64 encoding?",               a: "Base64 converts binary/text data to ASCII characters so it can be safely transmitted over text-based protocols." },
      { q: "Is Base64 encryption?",                  a: "No. Base64 is encoding, not encryption. Anyone can decode it. Use it for data transport, not security." },
      { q: "When should I use Base64?",              a: "Use it to embed images in HTML/CSS, encode API credentials, and transmit binary data over JSON." },
    ],
  },

  "base64-decode": {
    title:       "Base64 Decoder Online — Free Base64 to Text Converter",
    description: "Decode Base64 strings back to plain text instantly. Free online Base64 decoder. Supports standard and URL-safe Base64.",
    keywords:    "Base64 decoder, Base64 to text, decode Base64 online, Base64 decoding, Base64 converter",
    faq: [
      { q: "How to decode Base64 online?",           a: "Paste your Base64 string and click Decode — the original text appears instantly." },
      { q: "What if my Base64 has errors?",          a: "Base64 strings must be padded correctly with = characters. Missing padding may cause decode errors." },
    ],
  },

  "url-codec": {
    title:       "URL Encoder Decoder Online — Free URL Encode & Decode Tool",
    description: "Encode and decode URLs and URL components instantly. Free online URL encoder/decoder. Converts special characters to percent-encoded format.",
    keywords:    "URL encoder, URL decoder, URL encode decode, percent encoding, URL encoding tool, URL component encoder",
    faq: [
      { q: "Why encode URLs?",                       a: "URLs can only contain certain characters. Special characters must be percent-encoded to be valid in a URL." },
      { q: "What is %20 in a URL?",                  a: "%20 is the URL-encoded form of a space character." },
    ],
  },

  "html-entity": {
    title:       "HTML Entity Converter Online — Free HTML Encode & Decode Tool",
    description: "Convert HTML entities to text and text to HTML entities. Free online HTML entity encoder and decoder. Handles &amp;, &lt;, &gt; and more.",
    keywords:    "HTML entity converter, HTML encode, HTML decode, HTML entities, special characters HTML, &amp; converter",
    faq: [
      { q: "What are HTML entities?",                a: "HTML entities are codes for characters that have special meaning in HTML, like &lt; for < and &amp; for &." },
      { q: "When do I need HTML entities?",          a: "Use them when displaying code examples, math symbols or special characters in HTML without breaking markup." },
    ],
  },

  "markdown-to-html": {
    title:       "Markdown to HTML Converter Online — Free MD to HTML Tool",
    description: "Convert Markdown to clean HTML instantly. Free online Markdown to HTML converter. Supports headings, lists, bold, italic, links and code blocks.",
    keywords:    "markdown to HTML, MD to HTML converter, markdown converter, markdown parser online, convert markdown, markdown editor",
    faq: [
      { q: "What Markdown syntax is supported?",     a: "Headings (#), bold (**), italic (*), links ([]), images (![], lists (-, 1.) and code blocks (```)." },
      { q: "Can I preview the HTML output?",         a: "Yes — the output shows clean HTML code you can copy directly into your project." },
    ],
  },

  "xml-to-json": {
    title:       "XML to JSON Converter Online — Free XML Parser Tool",
    description: "Convert XML data to JSON format instantly. Free online XML to JSON converter. Paste XML and get clean JSON output.",
    keywords:    "XML to JSON, XML converter, XML parser online, convert XML to JSON, XML JSON tool, data conversion",
    faq: [
      { q: "Can I convert any XML to JSON?",         a: "Yes — paste any valid XML and the tool converts it to equivalent JSON structure." },
      { q: "Are XML attributes preserved?",          a: "Yes, XML attributes are included as properties in the JSON output." },
    ],
  },

  "json-to-csv": {
    title:       "JSON to CSV Converter Online — Free JSON to Spreadsheet Tool",
    description: "Convert JSON arrays to CSV format instantly. Free online JSON to CSV converter. Download as CSV file for Excel and Google Sheets.",
    keywords:    "JSON to CSV, JSON converter, convert JSON to CSV, JSON to Excel, JSON to spreadsheet, data converter",
    faq: [
      { q: "What JSON format is supported?",         a: "An array of objects — each object becomes a row and keys become column headers." },
      { q: "Can I open the CSV in Excel?",           a: "Yes — click Download CSV and open the file directly in Excel or Google Sheets." },
    ],
  },

  "yaml-to-json": {
    title:       "YAML to JSON Converter Online — Free YAML Parser Tool",
    description: "Convert YAML configuration files to JSON format. Free online YAML to JSON converter. Supports YAML 1.2 syntax.",
    keywords:    "YAML to JSON, YAML converter, YAML parser online, convert YAML, YAML JSON tool, DevOps config converter",
    faq: [
      { q: "What is YAML used for?",                 a: "YAML is used for configuration files in DevOps tools like Docker, Kubernetes, Ansible and GitHub Actions." },
      { q: "Is YAML whitespace sensitive?",          a: "Yes — YAML uses indentation to define structure, so incorrect spacing will cause parse errors." },
    ],
  },

  "unit-converter": {
    title:       "Unit Converter Online — Free Length, Weight & Temperature Tool",
    description: "Convert length, weight, temperature, speed, area, volume and more. Free online unit converter with instant accurate results. No login required.",
    keywords:    "unit converter, length converter, weight converter, temperature converter, metric to imperial, km to miles, kg to lbs, Celsius to Fahrenheit",
    faq: [
      { q: "How to convert km to miles?",            a: "Select Length, enter km value — miles and all other units appear instantly." },
      { q: "Can I convert Fahrenheit to Celsius?",   a: "Yes — select Temperature and enter your value in either unit." },
      { q: "What units are supported?",              a: "Length, weight, temperature, speed, area, volume, data storage and more." },
    ],
  },

  "color-converter": {
    title:       "Color Converter Online — Free HEX RGB HSL Color Tool",
    description: "Convert colors between HEX, RGB and HSL formats instantly. Free online color converter for designers and developers. Preview colors live.",
    keywords:    "color converter, HEX to RGB, RGB to HEX, HSL converter, color code converter, CSS color tool, color format converter",
    faq: [
      { q: "How to convert HEX to RGB?",             a: "Enter your HEX color code and RGB and HSL values appear instantly." },
      { q: "What is HSL color?",                     a: "HSL stands for Hue, Saturation, Lightness — a human-friendly way to describe colors." },
    ],
  },

  // ── Developer Tools ──────────────────────────────────────────
  "json-formatter": {
    title:       "JSON Formatter & Beautifier Online — Free JSON Prettier",
    description: "Beautify, format and validate JSON instantly. Free JSON formatter with syntax highlighting, error detection and indentation control. No login needed.",
    keywords:    "JSON formatter, JSON beautifier, JSON prettifier, format JSON online, JSON validator, pretty print JSON, JSON indenter",
    faq: [
      { q: "How to format JSON online?",             a: "Paste your JSON and click Format — it's instantly beautified with proper indentation." },
      { q: "Can it validate JSON too?",              a: "Yes — it shows if your JSON is valid or highlights the exact error with line number." },
      { q: "What indentation options are available?",a: "Choose 2 spaces, 4 spaces or 8 spaces indentation." },
    ],
  },

  "json-validator": {
    title:       "JSON Validator Online — Free JSON Syntax Checker Tool",
    description: "Validate JSON syntax with detailed error messages. Free online JSON validator. Instantly check if your JSON is valid with line number error reporting.",
    keywords:    "JSON validator, validate JSON online, JSON syntax checker, JSON error checker, JSON lint, check JSON",
    faq: [
      { q: "How to validate JSON?",                  a: "Paste your JSON and click Validate — it shows Valid or highlights the exact error with position." },
      { q: "What errors does it detect?",            a: "Missing commas, unquoted keys, trailing commas, mismatched brackets and other syntax errors." },
    ],
  },

  "html-minifier": {
    title:       "HTML Minifier Online — Free HTML Compressor & Size Reducer",
    description: "Minify HTML code to reduce file size and improve page load speed. Free online HTML minifier. Removes whitespace, comments and redundant code.",
    keywords:    "HTML minifier, HTML compressor, minify HTML online, reduce HTML size, HTML optimizer, website speed tool",
    faq: [
      { q: "What does HTML minification do?",        a: "It removes whitespace, comments and redundant attributes to reduce HTML file size by 20-40%." },
      { q: "Does minifying HTML break my page?",     a: "No — it only removes non-functional whitespace and comments, leaving the structure intact." },
    ],
  },

  "css-minifier": {
    title:       "CSS Minifier Online — Free CSS Compressor Tool",
    description: "Minify CSS files to reduce size and improve website speed. Free online CSS minifier. Removes comments, whitespace and optimizes CSS syntax.",
    keywords:    "CSS minifier, CSS compressor, minify CSS online, reduce CSS size, CSS optimizer, CSS uglifier",
    faq: [
      { q: "How much does CSS minification save?",   a: "Typically 30-50% file size reduction depending on how much whitespace and comments are in the source." },
      { q: "Is minified CSS readable?",              a: "No — minified CSS removes all formatting. Keep your original source file for editing." },
    ],
  },

  "sql-formatter": {
    title:       "SQL Formatter Online — Free SQL Beautifier & Query Formatter",
    description: "Format and beautify SQL queries for better readability. Free online SQL formatter. Capitalizes keywords, adds line breaks and proper indentation.",
    keywords:    "SQL formatter, SQL beautifier, format SQL online, SQL query formatter, SQL indenter, SQL pretty printer",
    faq: [
      { q: "Does it work with all SQL dialects?",    a: "Yes — it works with MySQL, PostgreSQL, SQL Server, SQLite and most standard SQL syntax." },
      { q: "Does formatting change the query result?",a: "No — SQL formatting is purely cosmetic. The query logic and results remain identical." },
    ],
  },

  "js-deobfuscate": {
    title:       "JavaScript Deobfuscator Online — Free JS Decoder Tool",
    description: "Decode and deobfuscate obfuscated JavaScript code. Free online JS deobfuscator. Decodes eval(), hex escape sequences and Unicode encoding.",
    keywords:    "JavaScript deobfuscator, JS decoder, deobfuscate JavaScript, decode JS online, obfuscated code decoder, eval decoder",
    faq: [
      { q: "What types of obfuscation are decoded?", a: "atob() encoding, hex escapes (\\x41), Unicode escapes (\\u0041) and URL encoding." },
      { q: "Can it decode all obfuscated code?",     a: "It handles common simple obfuscation methods. Heavily obfuscated code may require multiple passes." },
    ],
  },

  "md5-hash": {
    title:       "MD5 Hash Generator Online — Free MD5 Checksum Tool",
    description: "Generate MD5 hash from any text or string instantly. Free online MD5 hash generator for file verification, checksums and data integrity.",
    keywords:    "MD5 hash generator, MD5 checksum, MD5 online, generate MD5, text to MD5, MD5 hash tool",
    faq: [
      { q: "Is MD5 secure for passwords?",           a: "No. MD5 is deprecated for passwords. Use bcrypt or Argon2. MD5 is only suitable for non-security checksums." },
      { q: "What is MD5 used for?",                  a: "File integrity verification, checksums, non-security fingerprinting and database record matching." },
    ],
  },

  "sha256-hash": {
    title:       "SHA-256 Hash Generator Online — Free SHA256 Tool",
    description: "Generate SHA-256 cryptographic hash from any text instantly. Free online SHA-256 hash generator for security, file verification and blockchain.",
    keywords:    "SHA-256 generator, SHA256 hash, SHA-256 online, generate SHA256, cryptographic hash, secure hash algorithm",
    faq: [
      { q: "Is SHA-256 secure?",                     a: "Yes — SHA-256 is widely used in TLS/SSL, blockchain, digital signatures and password hashing." },
      { q: "What is the difference between MD5 and SHA-256?", a: "SHA-256 produces a 256-bit hash and is cryptographically secure. MD5 is 128-bit and considered broken for security use." },
    ],
  },

  "jwt-decoder": {
    title:       "JWT Decoder Online — Free JSON Web Token Inspector Tool",
    description: "Decode and inspect JWT tokens (JSON Web Tokens) instantly. Free JWT decoder — view header, payload and claims without verification.",
    keywords:    "JWT decoder, JSON Web Token decoder, decode JWT online, JWT inspector, JWT claims viewer, JWT header payload",
    faq: [
      { q: "Does this verify the JWT signature?",    a: "No — it only decodes the header and payload. Signature verification requires the secret key." },
      { q: "Is it safe to paste JWTs here?",         a: "Never paste production tokens with sensitive data into any online tool. Use it only with test tokens." },
    ],
  },

  "uuid-generator": {
    title:       "UUID Generator Online — Free UUID v4 & v1 Generator",
    description: "Generate random UUID v1 and v4 identifiers instantly. Free online UUID generator. Generate up to 20 UUIDs at once. Copy with one click.",
    keywords:    "UUID generator, random UUID, UUID v4 generator, UUID v1, unique identifier generator, GUID generator",
    faq: [
      { q: "What is the difference between UUID v1 and v4?", a: "UUID v1 is time-based and includes the machine's MAC address. UUID v4 is purely random and more secure." },
      { q: "Are UUIDs truly unique?",                a: "UUID v4 has 122 random bits — the probability of collision is astronomically low." },
    ],
  },

  "regex-tester": {
    title:       "RegEx Tester Online — Free Regular Expression Tester & Debugger",
    description: "Test and debug regular expressions with real-time match highlighting. Free regex tester supporting flags i, m, s with group and position display.",
    keywords:    "regex tester, regular expression tester, regex online, test regex, regex debugger, JavaScript regex tester, regex validator",
    faq: [
      { q: "What regex flavour does this use?",      a: "Python-compatible regex (re module), very similar to JavaScript and most modern regex engines." },
      { q: "How to test regex online?",              a: "Enter your pattern, paste test string, and all matches are highlighted with group and position info." },
      { q: "What flags are supported?",              a: "i (case-insensitive), m (multiline) and s (dotAll) flags are supported." },
    ],
  },

  "password-generator": {
    title:       "Password Generator Online — Strong Secure Random Password Tool",
    description: "Generate cryptographically strong random passwords instantly. Free password generator — customize length, symbols, numbers and letters. Runs in browser.",
    keywords:    "password generator, strong password generator, random password, secure password, online password maker, complex password generator",
    faq: [
      { q: "Are generated passwords stored?",        a: "No. Passwords are generated in your browser and never sent to any server." },
      { q: "How long should my password be?",        a: "We recommend at least 16 characters with uppercase, lowercase, numbers and symbols." },
      { q: "Is this truly random?",                  a: "Yes — it uses the browser's cryptographically secure random number generator (crypto.getRandomValues)." },
    ],
  },

  "slug-to-title": {
    title:       "URL Slug to Title Converter Online — Free Slug Decoder Tool",
    description: "Convert URL slugs like my-cool-post to readable titles like My Cool Post. Free online slug to title converter. Instant results.",
    keywords:    "slug to title, URL slug converter, slug decoder, slug to text, URL to title, permalink to title",
    faq: [
      { q: "What is a URL slug?",                    a: "A URL slug is the human-readable part of a URL like /how-to-make-coffee in a blog post URL." },
      { q: "What does this tool do?",                a: "It converts URL slugs (my-blog-post) into properly formatted titles (My Blog Post)." },
    ],
  },

  "curl-to-fetch": {
    title:       "cURL to Fetch Converter Online — Free cURL to JavaScript Tool",
    description: "Convert cURL commands to JavaScript Fetch API or Axios code instantly. Free online cURL to Fetch/Axios converter for developers.",
    keywords:    "curl to fetch, curl to axios, curl converter, curl to JavaScript, fetch API converter, curl command converter",
    faq: [
      { q: "What is cURL?",                          a: "cURL is a command-line tool for making HTTP requests. Developers often share API calls as cURL commands." },
      { q: "Does it support all cURL options?",      a: "It supports common options: -H headers, -d data, -X method, -u auth and more." },
    ],
  },

  // ── Web & SEO ────────────────────────────────────────────────
  "css-gradient": {
    title:       "CSS Gradient Generator Online — Free Linear Radial Gradient Tool",
    description: "Generate beautiful CSS gradients instantly. Free CSS gradient generator for linear, radial and conic gradients with live preview and code copy.",
    keywords:    "CSS gradient generator, linear gradient, radial gradient, CSS background generator, gradient code, CSS color gradient",
    faq: [
      { q: "What gradient types are supported?",     a: "Linear, radial and conic gradients with customizable angle, colors and stops." },
      { q: "How do I use the generated gradient?",   a: "Copy the CSS code and paste it into your stylesheet as a background property." },
    ],
  },

  "crontab-generator": {
    title:       "Crontab Generator Online — Free Cron Expression Builder",
    description: "Generate crontab expressions for cron jobs. Free online crontab generator with human-readable schedule preview. Build cron schedules visually.",
    keywords:    "crontab generator, cron expression builder, cron job generator, crontab online, cron scheduler, cron syntax generator",
    faq: [
      { q: "What is a crontab?",                     a: "Crontab is a configuration file used to schedule automated jobs on Unix/Linux servers." },
      { q: "How do I read a cron expression?",       a: "Five fields: minute, hour, day of month, month, day of week. Example: 0 * * * * runs every hour." },
    ],
  },

  "htaccess-redirect": {
    title:       "HTACCESS Redirect Generator Online — Free .htaccess Tool",
    description: "Generate .htaccess redirect rules for Apache servers. Free online HTACCESS generator for 301, 302 redirects, HTTPS enforcement and domain redirects.",
    keywords:    ".htaccess redirect generator, htaccess 301 redirect, Apache redirect, htaccess rules generator, HTTPS redirect htaccess",
    faq: [
      { q: "What is a 301 redirect?",                a: "A 301 is a permanent redirect telling search engines the page has moved permanently to a new URL." },
      { q: "How to force HTTPS with .htaccess?",     a: "Use the generated HTTPS redirect rule to automatically redirect all HTTP traffic to HTTPS." },
    ],
  },

  "robots-txt": {
    title:       "Robots.txt Generator Online — Free Robots File Generator",
    description: "Generate a robots.txt file for your website. Free online robots.txt generator. Control how search engines crawl and index your site.",
    keywords:    "robots.txt generator, robots file generator, create robots.txt, Google robots, search engine crawling, Googlebot robots",
    faq: [
      { q: "What is robots.txt?",                    a: "robots.txt is a file that tells search engine crawlers which pages they can or cannot access on your site." },
      { q: "Does robots.txt prevent indexing?",      a: "Disallow prevents crawling, but it doesn't guarantee a page won't be indexed if links point to it. Use noindex meta tag for that." },
    ],
  },

  "sitemap-generator": {
    title:       "XML Sitemap Generator Online — Free Sitemap Creator Tool",
    description: "Generate XML sitemaps for better Google SEO. Free online XML sitemap generator with changefreq and priority settings. Submit to Google Search Console.",
    keywords:    "XML sitemap generator, sitemap creator, Google sitemap, SEO sitemap, sitemap.xml generator, website sitemap tool",
    faq: [
      { q: "Why do I need a sitemap?",               a: "Sitemaps help search engines discover and index all pages on your website faster and more accurately." },
      { q: "How to submit sitemap to Google?",       a: "Upload your sitemap.xml to your server root and submit the URL in Google Search Console under Sitemaps." },
    ],
  },

  // ── Utilities ────────────────────────────────────────────────
  "unix-timestamp": {
    title:       "Unix Timestamp Converter Online — Free Epoch Time Tool",
    description: "Convert Unix timestamp (epoch time) to human-readable date and time. Free online Unix timestamp converter. Convert any date to timestamp instantly.",
    keywords:    "Unix timestamp converter, epoch time converter, timestamp to date, Unix time, epoch converter, date to timestamp",
    faq: [
      { q: "What is a Unix timestamp?",              a: "A Unix timestamp is the number of seconds elapsed since January 1, 1970 (UTC), used in computing." },
      { q: "How to convert timestamp to date?",      a: "Paste the timestamp and click Convert — the human-readable date and time appear instantly." },
    ],
  },

  "date-diff": {
    title:       "Date Difference Calculator Online — Free Days Between Dates",
    description: "Calculate the exact difference between two dates in years, months, days and weeks. Free online date difference calculator.",
    keywords:    "date difference calculator, days between dates, date calculator, how many days between, date duration calculator",
    faq: [
      { q: "How to calculate days between two dates?", a: "Select your start and end dates and the exact difference in years, months and days appears." },
      { q: "Does it account for leap years?",           a: "Yes — the calculator correctly handles leap years and month length variations." },
    ],
  },

  "upside-down-text": {
    title:       "Upside Down Text Generator Online — Free Flip Text Tool",
    description: "Flip your text upside down instantly. Free upside down text generator using Unicode characters. Works on Instagram, Twitter and social media.",
    keywords:    "upside down text, flip text upside down, reverse text generator, inverted text, flipped text generator, upside down words",
    faq: [
      { q: "How does upside down text work?",         a: "It maps each character to its Unicode upside-down equivalent and reverses the string." },
      { q: "Where can I use flipped text?",           a: "Social media posts, bios, usernames, creative writing and fun messages." },
    ],
  },

  "readability-score": {
    title:       "Readability Score Checker Online — Free Flesch Reading Ease Tool",
    description: "Check the readability score of your text using Flesch-Kincaid and other formulas. Free readability analyzer for blog posts, articles and essays.",
    keywords:    "readability score, Flesch reading ease, Flesch-Kincaid grade level, text readability, readability checker, content readability analyzer",
    faq: [
      { q: "What is Flesch reading ease?",           a: "A score from 0-100 — higher scores mean easier to read. 60-70 is ideal for most web content." },
      { q: "What grade level should web content be?",a: "Aim for 6th-8th grade (Flesch-Kincaid Grade Level 6-8) for maximum audience reach." },
    ],
  },

  "grammar-checker": {
    title:       "Grammar Checker Online — Free English Grammar & Spelling Tool",
    description: "Check grammar, spelling and writing style instantly. Free online grammar checker for essays, emails and content. Improve your writing today.",
    keywords:    "grammar checker, spell checker, English grammar check, grammar tool online, writing checker, grammar corrector",
    faq: [
      { q: "Is this grammar checker free?",          a: "Yes — 100% free with no sign-up or word limit." },
      { q: "What does the grammar checker catch?",   a: "Spelling errors, grammar mistakes, punctuation issues and style suggestions." },
    ],
  },

  "speech-to-text": {
    title:       "Speech to Text Online — Free Voice to Text Converter",
    description: "Convert speech and voice to text using your microphone. Free online speech to text tool. Supports multiple languages. No app download needed.",
    keywords:    "speech to text, voice to text, speech recognition online, transcribe audio, microphone to text, dictation online",
    faq: [
      { q: "Does it need a microphone?",             a: "Yes — it uses your browser's built-in speech recognition via your device microphone." },
      { q: "What languages are supported?",          a: "It supports all languages available in your browser's speech recognition (English, Spanish, French and more)." },
    ],
  },

  "text-to-speech": {
    title:       "Text to Speech Online — Free TTS Voice Generator",
    description: "Convert any text to natural-sounding speech audio. Free online text to speech tool with multiple voices and languages. Listen or download audio.",
    keywords:    "text to speech, TTS online, text to voice, read text aloud, voice generator, speech synthesis online",
    faq: [
      { q: "Is this text to speech free?",           a: "Yes — completely free using your browser's built-in speech synthesis API." },
      { q: "What voices are available?",             a: "Available voices depend on your operating system and browser — typically includes multiple English voices and other languages." },
    ],
  },

  "keyword-density": {
    title:       "Keyword Density Checker Online — Free SEO Content Analyzer",
    description: "Check keyword density and frequency in your content. Free online keyword density analyzer for SEO. Find over-optimized and under-used keywords.",
    keywords:    "keyword density checker, keyword frequency analyzer, SEO content analyzer, keyword stuffing checker, content SEO tool",
    faq: [
      { q: "What keyword density is ideal for SEO?", a: "1-2% keyword density is generally recommended. Higher may be seen as keyword stuffing by Google." },
      { q: "How is keyword density calculated?",     a: "(Number of keyword occurrences ÷ Total words) × 100 = Keyword Density %" },
    ],
  },

  "email-extractor": {
    title:       "Email Extractor Online — Free Email Address Finder Tool",
    description: "Extract all email addresses from any text instantly. Free online email extractor. Paste text and get a clean list of all email addresses found.",
    keywords:    "email extractor, extract email addresses, find emails in text, email address finder, email harvester tool",
    faq: [
      { q: "How does email extraction work?",        a: "It uses regex to find all patterns matching valid email address format in your pasted text." },
      { q: "What email formats are detected?",       a: "Standard email formats like user@domain.com, user.name@sub.domain.co.uk and more." },
    ],
  },

  "number-extractor": {
    title:       "Number Extractor Online — Free Extract Numbers from Text Tool",
    description: "Extract all numbers from any text instantly. Free online number extractor. Get integers, decimals and phone numbers from text.",
    keywords:    "number extractor, extract numbers from text, find numbers in text, number finder tool, pull numbers from text",
    faq: [
      { q: "What number formats are extracted?",     a: "Integers, decimals, negative numbers and numbers with commas (1,000) are all extracted." },
      { q: "Can it extract phone numbers?",          a: "Yes — phone number patterns are detected along with other numeric values." },
    ],
  },

  "random-line-picker": {
    title:       "Random Line Picker Online — Free Random Name & Giveaway Tool",
    description: "Pick random lines from a list. Free online random line picker for giveaways, draws, random name selection and contest winners.",
    keywords:    "random line picker, random name picker, giveaway tool, random winner picker, random list selector, contest picker",
    faq: [
      { q: "Is the selection truly random?",         a: "Yes — it uses JavaScript's cryptographically secure random number generator." },
      { q: "Can I pick multiple items at once?",     a: "Yes — specify how many random lines to pick from your list." },
    ],
  },

  // ── Calculators ──────────────────────────────────────────────
  "time-zone": {
    title:       "Time Zone Converter Online — Free World Clock Tool",
    description: "Convert time between any two time zones worldwide. Free online time zone converter. See current time in any city instantly.",
    keywords:    "time zone converter, world clock, time zone tool, convert time zones, time zone calculator, UTC converter",
    faq: [
      { q: "How to convert time zones?",             a: "Select your source and target time zones, enter the time, and the converted time appears instantly." },
      { q: "What time zones are supported?",         a: "All IANA time zones including all cities and UTC offsets worldwide." },
    ],
  },

  "age-calculator": {
    title:       "Age Calculator Online — Calculate Exact Age in Years Months Days",
    description: "Calculate your exact age in years, months and days. Free online age calculator. Enter your date of birth for precise age results.",
    keywords:    "age calculator, how old am I, date of birth calculator, exact age, birthday calculator, age from DOB",
    faq: [
      { q: "How is my exact age calculated?",        a: "We calculate the difference between your birth date and today down to years, months and days." },
      { q: "Can I calculate age on a specific date?",a: "Yes — set any target date to find age on that day." },
    ],
  },

  "bmi-calculator": {
    title:       "BMI Calculator Online — Free Body Mass Index Tool",
    description: "Calculate your Body Mass Index (BMI) instantly. Free online BMI calculator for adults. Supports both metric (kg/cm) and imperial (lbs/in) units.",
    keywords:    "BMI calculator, body mass index calculator, BMI online, calculate BMI, healthy weight calculator, BMI chart",
    faq: [
      { q: "What is a healthy BMI range?",           a: "BMI 18.5-24.9 is considered normal/healthy. Under 18.5 is underweight, 25-29.9 is overweight, 30+ is obese." },
      { q: "Is BMI accurate?",                       a: "BMI is a screening tool, not a diagnostic one. Athletes may have high BMI due to muscle mass." },
    ],
  },

  "percentage": {
    title:       "Percentage Calculator Online — Free % Increase Decrease Tool",
    description: "Calculate percentages, percentage increase, decrease and differences. Free online percentage calculator with multiple modes.",
    keywords:    "percentage calculator, percent calculator, percentage increase, percentage decrease, what percent of, percentage difference",
    faq: [
      { q: "How to calculate percentage increase?",  a: "((New Value - Old Value) / Old Value) × 100 = Percentage Increase" },
      { q: "What percentage is X of Y?",             a: "(X ÷ Y) × 100 = Percentage. Use the 'X is what % of Y' mode." },
    ],
  },

  "gst-calculator": {
    title:       "GST Calculator Online — Free Tax & VAT Calculator Tool",
    description: "Calculate GST, VAT and tax amounts instantly. Free online GST calculator. Add or remove tax from any amount with adjustable tax rates.",
    keywords:    "GST calculator, VAT calculator, tax calculator online, GST inclusive exclusive, add GST, remove GST, tax amount",
    faq: [
      { q: "How to calculate GST inclusive price?",  a: "GST Inclusive Price = Original Price × (1 + GST Rate/100)" },
      { q: "How to remove GST from a price?",        a: "Original Price = GST Inclusive Price ÷ (1 + GST Rate/100)" },
    ],
  },

  "scientific-calc": {
    title:       "Scientific Calculator Online — Free Advanced Math Calculator",
    description: "Free online scientific calculator with trigonometry, logarithms, powers and all advanced math functions. Works on mobile and desktop.",
    keywords:    "scientific calculator, online calculator, advanced calculator, trigonometry calculator, math calculator, sin cos tan calculator",
    faq: [
      { q: "What functions does it support?",        a: "sin, cos, tan, log, ln, sqrt, powers, factorial, π, e and more." },
      { q: "Can I use it on mobile?",                a: "Yes — fully responsive and works on all mobile devices." },
    ],
  },

  "emi-calculator": {
    title:       "EMI Calculator — Free Loan & Monthly Payment Calculator",
    description: "Calculate monthly EMI, total interest and total payment for home loans, car loans and personal loans. Free online loan EMI calculator.",
    keywords:    "EMI calculator, loan calculator, monthly payment calculator, home loan EMI, car loan calculator, interest calculator, mortgage calculator",
    faq: [
      { q: "What is EMI?",                           a: "EMI (Equated Monthly Installment) is the fixed monthly amount paid to repay a loan over a set period." },
      { q: "How is EMI calculated?",                 a: "EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P = principal, r = monthly interest rate, n = tenure in months." },
    ],
  },

  "discount-calc": {
    title:       "Discount Calculator Online — Free Sale Price & Savings Tool",
    description: "Calculate discounted price and savings amount instantly. Free online discount calculator. Find final price after any percentage discount.",
    keywords:    "discount calculator, sale price calculator, percentage off calculator, savings calculator, coupon calculator, price after discount",
    faq: [
      { q: "How to calculate 20% off?",              a: "Discounted Price = Original Price × (1 - 20/100) = Original Price × 0.80" },
      { q: "How to find original price from discounted price?", a: "Original Price = Discounted Price ÷ (1 - Discount%/100)" },
    ],
  },

  "binary-decimal": {
    title:       "Binary to Decimal Converter — Free Binary Decimal Hex Tool",
    description: "Convert binary to decimal and decimal to binary instantly. Free bidirectional binary-decimal converter. Also supports hexadecimal conversion.",
    keywords:    "binary to decimal, decimal to binary, binary converter, binary decimal calculator, number base converter, hex converter",
    faq: [
      { q: "How to convert binary to decimal?",      a: "Each binary digit is multiplied by its positional power of 2 and summed. E.g., 1010 = 8+0+2+0 = 10." },
      { q: "What is decimal 255 in binary?",         a: "255 in binary is 11111111 (8 ones)." },
    ],
  },

  "hex-rgb": {
    title:       "Hex to RGB Converter Online — Free Color Code Converter",
    description: "Convert HEX color codes to RGB values instantly. Free online Hex to RGB converter with live color preview. Supports 3-digit and 6-digit HEX.",
    keywords:    "hex to RGB, hex color converter, HEX to RGB online, color code converter, CSS color converter, hex color code",
    faq: [
      { q: "How to convert #ff6b6b to RGB?",         a: "#ff6b6b = R:255, G:107, B:107. Paste the HEX code and RGB values appear instantly." },
      { q: "What is the difference between HEX and RGB?", a: "HEX is a base-16 representation of RGB values, commonly used in web design and CSS." },
    ],
  },

  "rgb-hex": {
    title:       "RGB to Hex Converter Online — Free Color Code Generator",
    description: "Convert RGB color values to HEX code instantly. Free online RGB to HEX converter with live color preview. Enter R, G, B values and get HEX.",
    keywords:    "RGB to hex, RGB to HEX converter, color code generator, CSS color tool, RGB hex converter, color picker online",
    faq: [
      { q: "How to convert RGB to HEX?",             a: "Each RGB value (0-255) is converted to a 2-digit hex number. R:255,G:0,B:0 = #FF0000." },
      { q: "What is the HEX for black and white?",   a: "Black = #000000, White = #FFFFFF" },
    ],
  },

  "roman-numerals": {
    title:       "Roman Numerals Converter Online — Free Number to Roman Tool",
    description: "Convert numbers to Roman numerals and Roman numerals to numbers. Free online Roman numeral converter. Supports 1 to 3999.",
    keywords:    "roman numerals converter, number to roman numerals, roman numeral calculator, convert roman numerals, roman numeral translator",
    faq: [
      { q: "How to convert 2024 to Roman numerals?", a: "2024 = MMXXIV" },
      { q: "What is the largest Roman numeral?",     a: "Standard Roman numerals go up to 3999 (MMMCMXCIX)." },
    ],
  },

  "random-number": {
    title:       "Random Number Generator Online — Free RNG Tool",
    description: "Generate random numbers with custom min/max range. Free online random number generator. Generate single numbers or bulk random number lists.",
    keywords:    "random number generator, RNG online, random number tool, generate random numbers, number randomizer, dice roller online",
    faq: [
      { q: "Is this truly random?",                  a: "Yes — uses cryptographically secure Math.random() seeded with the browser's entropy." },
      { q: "Can I generate a list of random numbers?",a: "Yes — set count to generate multiple unique random numbers at once." },
    ],
  },

  "stopwatch": {
    title:       "Online Stopwatch & Timer — Free Countdown Timer Tool",
    description: "Free online stopwatch, countdown timer and lap tracker. Use it for workouts, presentations, cooking and studying. No download needed.",
    keywords:    "online stopwatch, countdown timer, online timer, lap timer, interval timer, digital stopwatch, pomodoro timer",
    faq: [
      { q: "Can I set a countdown timer?",           a: "Yes — switch to Timer mode, set your desired countdown duration and start." },
      { q: "Does it have lap tracking?",             a: "Yes — press Lap while the stopwatch is running to record lap times." },
    ],
  },

  "data-unit-converter": {
    title:       "Data Unit Converter Online — Free MB GB TB KB Converter",
    description: "Convert data storage units instantly — MB to GB, GB to TB, KB to MB and more. Free online data unit converter for file sizes and storage.",
    keywords:    "data unit converter, MB to GB, GB to TB, KB converter, file size converter, storage unit converter, byte converter",
    faq: [
      { q: "How many MB is 1 GB?",                   a: "1 GB = 1024 MB (binary) or 1000 MB (decimal/SI standard)." },
      { q: "How many GB is 1 TB?",                   a: "1 TB = 1024 GB (binary) or 1000 GB (decimal/SI standard)." },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════
//  getToolMeta() — Call this in every tool's page.jsx
//  Usage: export const metadata = getToolMeta("word-counter", "Word Counter", "Count words...")
// ═══════════════════════════════════════════════════════════════
export function getToolMeta(slug, fallbackTitle, fallbackDesc) {
  const seo         = TOOL_SEO[slug] || {};
  const title       = seo.title       || `${fallbackTitle} — Free Online Tool | ${SITE.name}`;
  const description = seo.description || fallbackDesc || `Free online ${fallbackTitle}. No sign-up required.`;
  const canonical   = `${SITE.url}/tools/${slug}`;

  return {
    title,
    description,
    keywords:     seo.keywords || "",
    metadataBase: new URL(SITE.url),
    alternates:   { canonical },
    openGraph: {
      title,
      description,
      url:      canonical,
      siteName: SITE.name,
      locale:   SITE.locale,
      type:     "website",
      images: [{
        url:    `${SITE.url}/og/${slug}.png`,
        width:  1200,
        height: 630,
        alt:    title,
      }],
    },
    twitter: {
      card:        "summary_large_image",
      title,
      description,
      site:        SITE.twitter,
      images:      [`${SITE.url}/og/${slug}.png`],
    },
    robots: {
      index:  true,
      follow: true,
      googleBot: {
        index:               true,
        follow:              true,
        "max-snippet":       -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

// ═══════════════════════════════════════════════════════════════
//  getToolSchema() — JSON-LD for rich results (WebApp + FAQ)
//  Usage: in tool Client file — inject with <script> tag
// ═══════════════════════════════════════════════════════════════
export function getToolSchema(slug, title, description) {
  const seo = TOOL_SEO[slug] || {};
  const url = `${SITE.url}/tools/${slug}`;

  const appSchema = {
    "@context":            "https://schema.org",
    "@type":               "WebApplication",
    "name":                title,
    "url":                 url,
    "description":         description,
    "applicationCategory": "UtilityApplication",
    "operatingSystem":     "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type":        "Offer",
      "price":        "0",
      "priceCurrency":"USD",
    },
    "provider": {
      "@type": "Organization",
      "name":  SITE.name,
      "url":   SITE.url,
    },
    "keywords": seo.keywords || "",
  };

  if (!seo.faq?.length) return [appSchema];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    "mainEntity": seo.faq.map(item => ({
      "@type":          "Question",
      "name":           item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return [appSchema, faqSchema];
}

// ═══════════════════════════════════════════════════════════════
//  getBreadcrumbSchema() — BreadcrumbList for every tool
// ═══════════════════════════════════════════════════════════════
export function getBreadcrumbSchema(toolTitle) {
  return {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",  "item": SITE.url },
      { "@type": "ListItem", "position": 2, "name": "Tools", "item": `${SITE.url}/tools` },
      { "@type": "ListItem", "position": 3, "name": toolTitle },
    ],
  };
}

// ═══════════════════════════════════════════════════════════════
//  getSiteSearchSchema() — SiteLinksSearchBox for homepage
// ═══════════════════════════════════════════════════════════════
export function getSiteSearchSchema() {
  return {
    "@context":    "https://schema.org",
    "@type":       "WebSite",
    "url":         SITE.url,
    "name":        SITE.name,
    "description": HOME_SEO.description,
    "potentialAction": {
      "@type":       "SearchAction",
      "target":      { "@type": "EntryPoint", "urlTemplate": `${SITE.url}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

// ═══════════════════════════════════════════════════════════════
//  getOrgSchema() — Organization schema for homepage
// ═══════════════════════════════════════════════════════════════
export function getOrgSchema() {
  return {
    "@context": "https://schema.org",
    "@type":    "Organization",
    "name":     SITE.name,
    "url":      SITE.url,
    "logo":     SITE.logo,
    "sameAs":   [],
  };
}