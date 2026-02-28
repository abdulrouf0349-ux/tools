"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function TextToSlugClient() {
  const [text, setText] = useState("");
  const [slug, setSlug] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const generatedSlug = text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")           // Space to -
      .replace(/[^\w\-]+/g, "")       // Remove non-word chars
      .replace(/\-\-+/g, "-")         // Double -- to single -
      .replace(/^-+/, "")             // Trim start -
      .replace(/-+$/, "");            // Trim end -
    
    setSlug(generatedSlug);
  }, [text]);

  const handleCopy = () => {
    if (!slug) return;
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Text to Slug"
      icon="🔗"
      color="#4fffb0"
      description="Instantly transform titles into clean, hyphenated URL slugs. Optimized for SEO and user-friendly web addresses."
      currentHref="/tools/text-to-slug"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Field */}
        <section>
          <label style={{ fontSize: "12px", fontWeight: "900", color: "#4fffb0", display: "block", marginBottom: "10px", textTransform: "uppercase" }}>
            Enter Title or Heading
          </label>
          <input 
            className="input" 
            type="text" 
            placeholder="e.g. How to Build a Website in 2026!" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: "18px", 
              padding: "20px", 
              borderRadius: "20px",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              color: "var(--text)"
            }}
          />
        </section>

        {/* Output Area */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#4fffb0", textTransform: "uppercase" }}>Generated Slug</label>
            {slug && <span style={{ fontSize: "10px", color: "var(--muted)" }}>{slug.length} characters</span>}
          </div>
          <div 
            onClick={handleCopy}
            style={{ 
              background: "var(--bg2)", 
              border: `2px solid ${slug ? "#4fffb033" : "var(--border)"}`, 
              borderRadius: "24px", 
              padding: "30px", 
              cursor: slug ? "pointer" : "default",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              textAlign: "center"
            }}
          >
            <code style={{ 
              fontSize: "22px", 
              color: slug ? "#4fffb0" : "var(--muted)", 
              wordBreak: "break-all",
              fontFamily: "'Fira Code', monospace",
              fontWeight: "600"
            }}>
              {slug || "your-optimized-slug"}
            </code>
            {slug && (
              <div style={{ marginTop: "15px", fontSize: "11px", fontWeight: "700", opacity: 0.5, color: "var(--text)" }}>
                {copied ? "✓ COPIED TO CLIPBOARD" : "CLICK BOX TO COPY"}
              </div>
            )}
          </div>
        </section>

        {/* Visual Link Preview */}
        {slug && (
          <section style={{ animation: "fadeIn 0.5s ease" }}>
             <div style={{ 
                padding: "20px", 
                borderRadius: "20px", 
                background: "rgba(79, 255, 176, 0.05)", 
                border: "1px dashed #4fffb044",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}>
                <span style={{ fontSize: "11px", fontWeight: "900", color: "#4fffb0" }}>BROWSER PREVIEW</span>
                <div style={{ fontSize: "14px", color: "var(--muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  https://yoursite.com/<span style={{ color: "#4fffb0", fontWeight: "bold" }}>{slug}</span>
                </div>
              </div>
          </section>
        )}

        

        {/* SEO Best Practices Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#4fffb0" }}>Keyword Placement</h4>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)", lineHeight: "1.5" }}>
              Include your primary keyword in the slug. Search engines use the URL to understand the page's context.
            </p>
          </div>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#4fffb0" }}>Avoid Stop Words</h4>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)", lineHeight: "1.5" }}>
              Keep it short by removing small words like "a", "the", "and", and "of" for a cleaner look.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}