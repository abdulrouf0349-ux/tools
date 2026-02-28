"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CATEGORIES = [
  {
    label: "🤖 AI & Content",
    tools: [
      { href: "/tools/ai-content-detector", label: "AI Content Detector" },
      { href: "/tools/text-summarizer", label: "AI Text Summarizer" },
      { href: "/tools/paraphrasing-tool", label: "Paraphrasing Tool" },
      { href: "/tools/grammar-checker", label: "Grammar Checker" },
      { href: "/tools/speech-to-text", label: "Speech to Text" },
      { href: "/tools/text-to-speech", label: "Text to Speech" },
    ]
  },
  {
    label: "✍️ Text Tools",
    tools: [
      { href: "/tools/word-counter", label: "Word Counter" },
      { href: "/tools/case-converter", label: "Case Converter" },
      { href: "/tools/find-replace", label: "Find & Replace" },
      { href: "/tools/remove-duplicates", label: "Remove Duplicates" },
      { href: "/tools/extra-spaces", label: "Extra Spaces" },
      { href: "/tools/alphabetizer", label: "Alphabetizer" },
      { href: "/tools/text-to-slug", label: "Text to Slug" },
      { href: "/tools/lorem-ipsum", label: "Lorem Ipsum" },
    ]
  },
  {
    label: "🛠️ Developer",
    tools: [
      { href: "/tools/json-formatter", label: "JSON Formatter" },
      { href: "/tools/json-validator", label: "JSON Validator" },
      { href: "/tools/curl-to-fetch", label: "cURL to Fetch" },
      { href: "/tools/password-generator", label: "Password Generator" },
      { href: "/tools/uuid-generator", label: "UUID Generator" },
      { href: "/tools/jwt-decoder", label: "JWT Decoder" },
      { href: "/tools/md5-hash", label: "MD5 Hash" },
      { href: "/tools/regex-tester", label: "RegEx Tester" },
    ]
  },
  {
    label: "🔒 Encode",
    tools: [
      { href: "/tools/base64-encode", label: "Base64 Encoder" },
      { href: "/tools/base64-decode", label: "Base64 Decoder" },
      { href: "/tools/url-codec", label: "URL Encoder/Decoder" },
      { href: "/tools/xml-to-json", label: "XML to JSON" },
      { href: "/tools/json-to-csv", label: "JSON to CSV" },
      { href: "/tools/binary-to-text", label: "Binary to Text" },
    ]
  },
  {
    label: "🧮 Calculators",
    tools: [
      { href: "/tools/percentage-calculator", label: "Percentage Calc" },
      { href: "/tools/age-calculator", label: "Age Calculator" },
      { href: "/tools/bmi-calculator", label: "BMI Calculator" },
      { href: "/tools/gst-calculator", label: "GST/Tax Calc" },
      { href: "/tools/emi-calculator", label: "EMI Calculator" },
      { href: "/tools/unit-converter", label: "Unit Converter" },
    ]
  },
  {
    label: "🌐 Web/SEO",
    tools: [
      { href: "/tools/css-gradient", label: "CSS Gradient" },
      { href: "/tools/robots-txt", label: "Robots.txt" },
      { href: "/tools/sitemap-generator", label: "XML Sitemap" },
      { href: "/tools/htaccess-redirect", label: "HTACCESS" },
      { href: "/tools/crontab-generator", label: "Crontab" },
    ]
  }
];

export default function Navbar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <style>{`
        @media (max-width: 1100px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 1101px) {
          .nav-mobile-menu { display: none !important; }
          .nav-hamburger { display: none !important; }
        }
        .nav-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(13, 17, 28, 0.98);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 12px;
          min-width: 240px;
          box-shadow: 0 20px 60px rgba(0,0,0,.6);
          animation: fadeIn .2s ease;
          z-index: 100;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4px;
          margin-top: 8px;
        }

        /* Invisible bridge taake mouse gap mein se guzre to menu band na ho */
        .nav-dropdown::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 10px;
          background: transparent;
        }

        .nav-dropdown a { display:block; padding:10px 14px; border-radius:10px; text-decoration:none; font-size:13px; color:var(--muted); transition:all .2s; white-space:nowrap; }
        .nav-dropdown a:hover { background:var(--bg3); color:var(--accent); transform: translateX(5px); }
        .nav-dropdown a.active { color:var(--accent); background:#4fffb012; font-weight: 600; }
        
        .nav-cat-btn { position:relative; display: flex; align-items: center; height: 100%; }
        
        .nav-mobile-menu { animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        @keyframes fadeIn { from{opacity:0;transform:translateX(-50%) translateY(10px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes slideDown { from{opacity:0;transform:translateY(-20px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <nav style={{ position:"sticky", top:0, zIndex:100, background:"rgba(5,8,16,.85)", backdropFilter:"blur(24px)", borderBottom:"1px solid var(--border)" }}>
        <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", height:70, gap:12 }}>

          {/* Logo */}
          <Link href="/" onClick={()=>{setMenuOpen(false);setActiveDropdown(null);}}
            style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", flexShrink:0, marginRight: 20 }}>
            <div style={{ width:36, height:36, borderRadius:10, background:"linear-gradient(135deg,#4fffb0,#00d4ff)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, fontWeight:900, color:"#020a0f" }}>⚡</div>
            <span style={{ fontSize:20, fontWeight:800, color:"var(--text)", letterSpacing:"-.5px" }}>
              Toolkit<span style={{ color:"var(--accent)" }}>Pro</span>
            </span>
          </Link>

          {/* Desktop Dropdowns */}
          <div className="nav-desktop" style={{ display:"flex", gap:4, flex:1, height: "100%", alignItems:"center" }}
            onMouseLeave={()=>setActiveDropdown(null)}>
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="nav-cat-btn" 
                   onMouseEnter={()=>setActiveDropdown(i)}
                   onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}>
                <button style={{
                  display:"flex", alignItems:"center", gap:6, padding:"8px 14px", borderRadius:10,
                  background: activeDropdown === i ? "var(--bg3)" : "transparent", border:"none", cursor:"pointer",
                  fontSize:14, fontWeight:500, color: activeDropdown === i ? "var(--text)" : "var(--muted)", fontFamily:"var(--font)",
                  transition:"all .2s"
                }}>
                  {cat.label} <span style={{ fontSize:10, opacity:.5, transform: activeDropdown === i ? "rotate(180deg)" : "none", transition: "0.2s" }}>▾</span>
                </button>
                {activeDropdown === i && (
                  <div className="nav-dropdown">
                    {cat.tools.map(t => (
                      <Link key={t.href} href={t.href} className={path===t.href?"active":""} onClick={()=>setActiveDropdown(null)}>
                        {t.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Badge */}
          <div className="nav-desktop" style={{ flexShrink:0, background:"linear-gradient(to right, #4fffb015, #00d4ff15)", border:"1px solid #4fffb030", color:"var(--accent)", fontSize:11, fontWeight:700, padding:"6px 14px", borderRadius:30, letterSpacing:".5px" }}>
            100+ TOOLS FREE
          </div>

          <div className="nav-hamburger" style={{ display:"none", flex:1 }} />

          {/* Mobile Toggle */}
          <button className="nav-hamburger" onClick={()=>setMenuOpen(o=>!o)}
            style={{ display:"none", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:5, width:44, height:44, background:"var(--bg3)", border:"1px solid var(--border)", borderRadius:12, cursor:"pointer", padding:0, flexShrink:0 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:"block", width:20, height:2,
                background:menuOpen?"#4fffb0":"var(--text)", borderRadius:2,
                transform: menuOpen ? (i===0?"translateY(7px) rotate(45deg)":i===2?"translateY(-7px) rotate(-45deg)":"none") : "none",
                opacity: menuOpen&&i===1 ? 0 : 1,
                transition:"all .3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}/>
            ))}
          </button>
        </div>

        {/* Mobile Sidebar/Menu */}
        {menuOpen && (
          <div className="nav-mobile-menu" style={{ borderTop:"1px solid var(--border)", background:"rgba(8,12,24,0.99)", padding:"20px", maxHeight:"calc(100vh - 70px)", overflowY:"auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
              {CATEGORIES.map((cat, ci) => (
                <div key={ci}>
                  <div style={{ fontSize:12, fontWeight:800, color:"var(--accent)", textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:12, opacity: 0.8 }}>{cat.label}</div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                    {cat.tools.map(t => (
                      <Link key={t.href} href={t.href} onClick={()=>setMenuOpen(false)}
                        style={{ 
                          display:"flex", alignItems:"center", padding:"12px", borderRadius:12, textDecoration:"none", 
                          background:path===t.href?"#4fffb010":"var(--bg2)", 
                          border:`1px solid ${path===t.href?"#4fffb040":"var(--border)"}`, 
                          color:path===t.href?"#4fffb0":"var(--text)", 
                          fontSize:13, fontWeight:path===t.href?600:400 
                        }}>
                        {t.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign:"center", color:"var(--muted)", fontSize:12, marginTop:40, padding: "20px", borderTop: "1px solid var(--border)" }}>
              🚀 Powered by ToolkitPro v2.0
            </div>
          </div>
        )}
      </nav>
    </>
  );
}