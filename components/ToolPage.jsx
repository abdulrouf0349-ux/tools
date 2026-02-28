"use client";
import Link from "next/link";
import Navbar from "./Navbar";

const RELATED = [
  
    { href:"/tools/ai-content-detector",  icon:"🤖",  label:"AI Content Detector", color:"#ff6b6b", desc:"Check if your text is AI-generated (ChatGPT/Gemini).", tags:["AI","SEO"],     searches:"2M/mo"   },
      { href:"/tools/text-summarizer",      icon:"📝",  label:"AI Text Summarizer",  color:"#4fffb0", desc:"Turn long articles into short, readable summaries.",   tags:["AI","Reading"],searches:"800k/mo" },
      { href:"/tools/paraphrasing-tool",    icon:"🔄",  label:"Paraphrasing Tool",   color:"#c084fc", desc:"Rewrite sentences to make them unique and creative.",  tags:["Writing"],     searches:"3M/mo"   },
      { href:"/tools/instagram-caption-generator", icon:"✍️",  label:"AI Caption Generator",  color:"#ff6b6b", desc:"Create trendy, viral captions for Instagram, TikTok & FB.", tags:["AI","Viral"],   searches:"4M/mo"   },
      { href:"/tools/hashtag-generator",           icon:"#️⃣", label:"Hashtag Generator",      color:"#4fffb0", desc:"Generate high-reach hashtags for your niche instantly.",    tags:["SEO","Growth"],searches:"2.5M/mo" },
      { href:"/tools/bio-symbol-generator",        icon:"💎",  label:"Bio Symbol Generator",  color:"#c084fc", desc:"Fancy symbols and cool icons for a professional bio.",      tags:["Bio","Style"], searches:"1.2M/mo" },
      { 
  href: "/tools/invisible-text", 
  icon: "👻", // Ghost emoji perfect hai "Invisible" ke liye
  label: "Invisible Text Gen", 
  color: "#94a3b8", // Ghostly grey color zyada suit karega
  desc: "Copy blank spaces or clean hidden characters.", 
  tags: ["Social", "Clean"], 
  searches: "New" 
},
      { href:"/tools/username-generator",          icon:"🆔",  label:"Viral Username Ideas",  color:"#fb7185", desc:"Generate unique, aesthetic usernames based on your niche.", tags:["Ideas","Social"],searches:"2.1M/mo"},
 { href:"/tools/word-counter",                icon:"📝",  label:"Word Counter",             color:"#4fffb0", desc:"Count words, chars, sentences & reading time.",          tags:["SEO","Writing"],  searches:"800k/mo"  },
      { href:"/tools/case-converter",              icon:"🔡",  label:"Case Converter",           color:"#00d4ff", desc:"UPPER, lower, camelCase, snake_case & more.",            tags:["Format","Daily"], searches:"450k/mo"  },
      { href:"/tools/remove-duplicates",           icon:"🧹",  label:"Remove Duplicate Lines",   color:"#4fffb0", desc:"Remove duplicate lines from any list.",                  tags:["Cleanup"],        searches:"Popular"  },
      { href:"/tools/reverse-text",                icon:"🔄",  label:"Reverse Text",             color:"#00d4ff", desc:"Reverse text by chars, words or lines.",                 tags:["Fun"],            searches:"10k/mo"   },
      { href:"/tools/find-replace",                icon:"🔍",  label:"Find & Replace",           color:"#c084fc", desc:"Find and replace text with regex support.",              tags:["Editor"],         searches:"50k/mo"   },
      { href:"/tools/extra-spaces",                icon:"🧽",  label:"Extra Space Remover",      color:"#fb923c", desc:"Remove extra spaces and blank lines.",                   tags:["Clean"],          searches:"Trending" },
      { href:"/tools/remove-invisible-text",              icon:"👁️", label:"Invisible Text Remover",   color:"#ff6b6b", desc:"Remove zero-width & invisible characters.",              tags:["Security"],       searches:"New"      },
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
      { href:"/tools/stylish-text",                icon:"✨",  label:"Stylish Text Generator",   color:"#ffd166", desc:"108 Unicode fonts for Instagram & WhatsApp.",            tags:["Social","Bio"],   searches:"1M/mo"    },
      { href:"/tools/morse-code-convertor",                  icon:"📡",  label:"Morse Code Generator",     color:"#4fffb0", desc:"Encode/decode text to Morse code.",                      tags:["Fun"],            searches:"Niche"    },
      { href:"/tools/binary-to-text",              icon:"💻",  label:"Binary to Text",           color:"#fb923c", desc:"Decode binary code to readable text.",                   tags:["Dev"],            searches:"Coding"   },
      { href:"/tools/text-to-binary",              icon:"01",  label:"Text to Binary",           color:"#ffd166", desc:"Encode any text into binary.",                           tags:["Education"],      searches:"Math"     },
      { href:"/tools/ascii-converter",             icon:"🔢",  label:"ASCII Converter",          color:"#c084fc", desc:"Convert text to ASCII codes and back.",                  tags:["Data"],           searches:"Basics"   },
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
      { href:"/tools/css-gradient",                icon:"🌈",  label:"CSS Gradient Generator",   color:"#c084fc", desc:"Generate linear, radial & conic gradients.",             tags:["Design"],         searches:"Art"      },
      { href:"/tools/crontab-generator",           icon:"⏰",  label:"Crontab Generator",         color:"#4fffb0", desc:"Build cron job schedules easily.",                       tags:["Server"],         searches:"Dev"      },
      { href:"/tools/htaccess-redirect",           icon:"↩️", label:"HTACCESS Redirect",         color:"#fb923c", desc:"Generate .htaccess redirect rules.",                     tags:["Server"],         searches:"SEO"      },
      { href:"/tools/robots-text-Generator",                  icon:"🤖",  label:"Robots.txt Generator",     color:"#ffd166", desc:"Generate robots.txt for your website.",                  tags:["Bot"],            searches:"SEO"      },
      { href:"/tools/sitemap-generator",           icon:"🗺️", label:"XML Sitemap Generator",    color:"#00d4ff", desc:"Generate XML sitemaps for better SEO.",                  tags:["Map"],            searches:"SEO"      },
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
      { href:"/tools/random-line-picker",          icon:"🎯",  label:"Random Line Picker",       color:"#ffd166", desc:"Pick random lines from a list — for giveaways & draws.", tags:["Random","Fun"],   searches:"200k/mo"  },
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
      { href:"https://freepdfconvert.io/pdf-to-excel",    icon:"📊",  label:"PDF to Excel",        color:"#4fffb0", desc:"Convert PDF tables to editable Excel sheets professionally.", tags:["Pro","Hot"],    searches:"5M/mo"     },
      { href:"https://freepdfconvert.io/excel-to-pdf",    icon:"📄",  label:"Excel to PDF",        color:"#00d4ff", desc:"High-quality Excel to PDF conversion with formatting.",        tags:["Office"],      searches:"2M/mo"     },
      { href:"https://freepdfconvert.io/image-converter", icon:"🖼️", label:"Image Converter",      color:"#c084fc", desc:"Convert PNG to JPG, WebP and more without quality loss.",     tags:["HD"],          searches:"3M/mo"     },
      { href:"https://freepdfconvert.io",                 icon:"✨",  label:"All Pro Conversions",  color:"#ff6b6b", desc:"Access 100+ premium document tools & OCR technology.",        tags:["Explore"],     searches:"All-in-One", isPremium:true },   
];

export default function ToolPage({ title, icon, color, description, keywords, children, currentHref }) {
  const others = RELATED.filter(t => t.href !== currentHref);

  return (
    <>
      <style jsx>{`
        .tool-container {
          position: relative;
          z-index: 1;
          max-width: 940px;
          margin: 0 auto;
          padding: 40px 20px 80px;
          width: 100%;
          box-sizing: border-box;
        }
        .tool-header {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: 32px;
        }
        .other-tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 12px;
        }

        /* --- Full Mobile Optimization --- */
        @media (max-width: 640px) {
          .tool-container {
            padding: 20px 16px 60px;
          }
          .tool-header {
            flex-direction: column;
            gap: 16px;
            text-align: left;
          }
          .icon-wrapper {
            width: 56px !important;
            height: 56px !important;
            font-size: 26px !important;
            border-radius: 14px !important;
          }
          .breadcrumb-container {
            margin-bottom: 24px !important;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 10px;
            -webkit-overflow-scrolling: touch;
            mask-image: linear-gradient(to right, black 85%, transparent 100%);
          }
          .breadcrumb-container::-webkit-scrollbar {
            display: none; /* Hide scrollbar for cleaner look */
          }
          .other-tools-grid {
            grid-template-columns: repeat(2, 1fr); /* Force 2 columns */
            gap: 8px;
          }
          .related-tool-item {
            padding: 10px !important;
            font-size: 12px !important;
          }
        }
      `}</style>

      <Navbar />
      <main style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
        {/* Glow bg */}
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <div style={{ 
            position: "absolute", 
            top: 0, 
            left: "50%", 
            transform: "translateX(-50%)", 
            width: "100%", 
            maxWidth: 800, 
            height: 450, 
            background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
            filter: "blur(40px)"
          }} />
        </div>

        <div className="tool-container">
          {/* Breadcrumb - Responsive Scrollable */}
          <div className="fade-in breadcrumb-container" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--muted)" }}>
            <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--muted)" }}>Tools</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: "var(--text)", fontWeight: 600 }}>{title}</span>
          </div>

          {/* Header Section */}
          <div className="fade-up tool-header" style={{ marginTop: 24 }}>
            <div className="icon-wrapper" style={{ 
              width: 72, height: 72, borderRadius: 20, 
              background: color + "15", border: `1px solid ${color}35`, 
              display: "flex", alignItems: "center", justifyContent: "center", 
              fontSize: 32, flexShrink: 0,
              boxShadow: `0 8px 20px -6px ${color}30`
            }}>
              {icon}
            </div>
            <div style={{ width: "100%" }}>
              <h1 style={{ fontSize: "clamp(26px, 6vw, 40px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 8, color: "var(--text)", lineHeight: 1.1 }}>{title}</h1>
              <p style={{ fontSize: "clamp(14px, 2vw, 15.5px)", color: "var(--muted)", lineHeight: 1.6, maxWidth: 650, margin: 0 }}>{description}</p>
              
              {keywords && (
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
                  {keywords.map(k => (
                    <span key={k} style={{ fontSize: 9, color, background: color + "10", border: `1px solid ${color}20`, padding: "4px 10px", borderRadius: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>{k}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tool content Area */}
          <div className="fade-up" style={{ 
            background: "var(--bg2)", 
            border: "1px solid var(--border)", 
            borderRadius: 24, 
            padding: "clamp(20px, 5vw, 40px)", 
            marginBottom: 40,
            width: "100%",
            boxSizing: "border-box",
            boxShadow: "0 20px 50px -12px rgba(0,0,0,0.15)"
          }}>
            {children}
          </div>

          {/* Related Tools */}
          <div className="fade-up">
            <h3 style={{ fontSize: 11, fontWeight: 800, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 20, paddingLeft: 4 }}>Explore More Tools</h3>
            <div className="other-tools-grid">
              {others.map(t => (
                <Link key={t.href} href={t.href} style={{
                  display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
                  background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 16,
                  padding: "14px", fontSize: 13, color: "var(--text)", fontWeight: 600, transition: "all .2s ease"
                }}
                className="related-tool-item">
                  <span style={{ fontSize: 20 }}>{t.icon}</span>
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid var(--border)", padding: "40px 24px", textAlign: "center", marginTop: 40 }}>
          <p style={{ color: "var(--muted)", fontSize: 12, fontWeight: 500 }}>
            ⚡ <span style={{ color: "var(--text)" }}>ToolKit Pro</span> — Modern Tools for Modern Creators
          </p>
        </footer>
      </main>

      <style jsx global>{`
        .related-tool-item:hover {
          border-color: ${color} !important;
          transform: translateY(-3px);
          background: var(--bg1) !important;
          box-shadow: 0 10px 20px -10px ${color}40;
        }
        .fade-up {
          animation: fadeInUp 0.6s ease backwards;
        }
        .fade-in {
          animation: fadeIn 0.8s ease backwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}