"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function MarkdownToHtmlClient() {
  const [markdown, setMarkdown] = useState("# Welcome to ToolKit Pro\n\nStart typing **Markdown** here and watch it transform into *clean HTML* instantly!\n\n### Why use Markdown?\n* It is easy to write.\n* It is very fast.\n* Developers love it.");
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);

  // Advanced Markdown Parser Logic (Client-side)
  const parseMarkdown = (text) => {
    if (!text) return "";
    let result = text
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^\s*\*\s+(.*$)/gim, '<li>$1</li>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank">$1</a>')
      .replace(/\n/gim, '<br />');
    
    // Wrap list items if they exist
    if (result.includes('<li>')) {
        // Simple logic: wrap consecutive li's would need a complex regex, 
        // but for a basic tool, raw li is often acceptable for copy-pasting.
    }
    return result;
  };

  useEffect(() => {
    setHtml(parseMarkdown(markdown));
  }, [markdown]);

  const handleCopy = () => {
    navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Markdown to HTML"
      icon="📝"
      color="#2563eb"
      description="Transform your Markdown syntax into semantic HTML code. Real-time rendering with side-by-side preview for maximum efficiency."
      currentHref="/tools/markdown-to-html"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Editor Area */}
        <section>
          <label className="label" style={{ fontWeight: "800", display: "flex", justifyContent: "space-between" }}>
            MARKDOWN EDITOR 
            <span style={{ fontSize: "11px", color: "var(--muted)", fontWeight: "400" }}>Supports: Headers, Bold, Italic, Lists, Links</span>
          </label>
          <textarea
            className="textarea"
            rows={10}
            placeholder="Write your Markdown..."
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            style={{ 
              fontSize: 15, fontFamily: "'Fira Code', monospace", 
              background: "var(--bg2)", border: "1px solid var(--border)",
              borderRadius: "24px", padding: "25px", lineHeight: "1.7"
            }}
          />
        </section>

        {/* Dual Pane Output */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 25 }}>
          
          {/* Code Output */}
          <div style={{ position: "relative" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "12px", textTransform: "uppercase", color: "var(--muted)" }}>Clean HTML Code</h3>
            <div style={{ 
              height: "300px", padding: "25px", borderRadius: "24px",
              background: "#0f172a", color: "#38bdf8", fontFamily: "'Fira Code', monospace",
              fontSize: "13px", border: "1px solid #1e293b", overflowY: "auto",
              whiteSpace: "pre-wrap", lineHeight: "1.6"
            }}>
              {html}
            </div>
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute", right: "15px", top: "45px",
                padding: "8px 16px", borderRadius: "10px", 
                background: copied ? "#22c55e" : "#2563eb",
                color: "white", fontSize: "12px", border: "none", cursor: "pointer",
                fontWeight: "700", boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)"
              }}
            >
              {copied ? "✓ COPIED" : "COPY CODE"}
            </button>
          </div>

          {/* Visual Preview */}
          <div>
            <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "12px", textTransform: "uppercase", color: "var(--muted)" }}>Live Visual Preview</h3>
            <div 
              className="preview-area"
              style={{ 
                height: "300px", padding: "25px", borderRadius: "24px",
                background: "white", color: "#1e293b", overflowY: "auto",
                border: "1px solid var(--border)", boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)"
              }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>

        {/* Quick Help Guide */}
        <section style={{ 
          padding: "35px", borderRadius: "35px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "900", marginBottom: "20px" }}>Markdown Syntax Reference</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            <div style={{ background: "var(--bg2)", padding: "15px", borderRadius: "16px" }}>
              <code style={{ color: "#2563eb", display: "block", marginBottom: "5px" }}># Heading 1</code>
              <span style={{ fontSize: "12px", color: "var(--muted)" }}>Main Title</span>
            </div>
            <div style={{ background: "var(--bg2)", padding: "15px", borderRadius: "16px" }}>
              <code style={{ color: "#2563eb", display: "block", marginBottom: "5px" }}>**Bold**</code>
              <span style={{ fontSize: "12px", color: "var(--muted)" }}>Strong Emphasis</span>
            </div>
            <div style={{ background: "var(--bg2)", padding: "15px", borderRadius: "16px" }}>
              <code style={{ color: "#2563eb", display: "block", marginBottom: "5px" }}>* List Item</code>
              <span style={{ fontSize: "12px", color: "var(--muted)" }}>Bullet Points</span>
            </div>
            <div style={{ background: "var(--bg2)", padding: "15px", borderRadius: "16px" }}>
              <code style={{ color: "#2563eb", display: "block", marginBottom: "5px" }}>[Link](url)</code>
              <span style={{ fontSize: "12px", color: "var(--muted)" }}>Hyperlinks</span>
            </div>
          </div>
        </section>

      </div>

      <style jsx>{`
        .preview-area h1 { font-size: 28px; margin-bottom: 15px; font-weight: 900; color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; }
        .preview-area h2 { font-size: 22px; margin-top: 20px; margin-bottom: 12px; font-weight: 800; color: #334155; }
        .preview-area h3 { font-size: 18px; margin-top: 15px; margin-bottom: 10px; font-weight: 700; color: #475569; }
        .preview-area strong { font-weight: 700; color: #1e293b; }
        .preview-area li { margin-left: 25px; margin-bottom: 5px; list-style-type: disc; }
        .preview-area a { color: #2563eb; text-decoration: underline; }
        .preview-area em { font-style: italic; }
      `}</style>
    </ToolPage>
  );
}