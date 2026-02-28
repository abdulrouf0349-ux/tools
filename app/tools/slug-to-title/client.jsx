"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function SlugToTitleClient() {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToTitle = (inputText) => {
    if (!inputText) return "";
    
    // 1. Remove hyphens and underscores
    let result = inputText.replace(/[-_]/g, " ");

    // 2. Remove extra spaces
    result = result.replace(/\s+/g, " ");

    // 3. Title Case conversion
    result = result.toLowerCase().split(" ").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");

    return result.trim();
  };

  const handleConvert = () => {
    const lines = slug.split("\n");
    const convertedLines = lines.map(line => convertToTitle(line));
    setTitle(convertedLines.join("\n"));
  };

  const copyToClipboard = () => {
    if (!title) return;
    navigator.clipboard.writeText(title);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Slug to Title Converter"
      icon="🔗"
      color="#4fffb0"
      description="Turn URL slugs like 'how-to-rank-on-google' into 'How To Rank On Google'. Supports bulk processing for entire sitemaps."
      currentHref="/tools/slug-to-title"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Workarea */}
        <section style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "32px", 
          border: "1px solid var(--border)",
          boxShadow: "0 10px 40px -15px rgba(79, 255, 176, 0.05)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#4fffb0", textTransform: "uppercase", letterSpacing: "1px" }}>
              Slug Input (One per line)
            </label>
            <span style={{ fontSize: "10px", color: "var(--muted)" }}>Supports - and _</span>
          </div>
          <textarea 
            className="input" 
            rows="8"
            placeholder="my-first-blog-post&#10;digital-marketing-2026"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            style={{ 
              resize: "none", 
              fontSize: "16px", 
              padding: "20px",
              borderRadius: "20px",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontFamily: "'Courier New', monospace",
              marginBottom: "20px"
            }}
          ></textarea>
          
          <button 
            className="btn-primary" 
            onClick={handleConvert}
            style={{ 
              background: "#4fffb0", 
              color: "#000", 
              width: "100%", 
              height: "55px", 
              borderRadius: "16px", 
              fontWeight: "900",
              fontSize: "15px",
              boxShadow: "0 15px 30px -10px rgba(79, 255, 176, 0.3)"
            }}
          >
            BEAUTIFY TITLES ✨
          </button>
        </section>

        {/* Output Workarea */}
        {title && (
          <section style={{ animation: "fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "800", color: "var(--text)", margin: 0 }}>Human Readable Titles:</h3>
              <button 
                onClick={copyToClipboard}
                style={{ 
                  background: copied ? "#10b981" : "rgba(79, 255, 176, 0.1)", 
                  border: "1px solid " + (copied ? "#10b981" : "#4fffb0"),
                  color: copied ? "white" : "#4fffb0",
                  padding: "8px 20px", borderRadius: "12px", cursor: "pointer", fontSize: "12px", fontWeight: "900",
                  transition: "all 0.2s"
                }}
              >
                {copied ? "✓ COPIED" : "COPY ALL"}
              </button>
            </div>
            
            <textarea 
              className="input" 
              rows="8"
              readOnly
              value={title}
              style={{ 
                background: "var(--bg2)", 
                padding: "25px", 
                fontSize: "18px", 
                lineHeight: "1.6",
                fontWeight: "700",
                borderRadius: "24px", 
                border: "2px solid #4fffb033",
                color: "var(--text)",
                resize: "none"
              }}
            ></textarea>
          </section>
        )}

        {/* Tool Education */}
        
        <section style={{ 
          padding: "25px", borderRadius: "28px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px", background: "#4fffb015", width: "60px", height: "60px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            🚀
          </div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "15px", fontWeight: "900" }}>Bulk Migration Hack</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Moving from one CMS to another? Paste your list of URLs here to generate H1 tags or Meta Titles for your spreadsheets in seconds.
            </p>
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}