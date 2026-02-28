"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function HtmlMinifierClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState(null);
  const [copied, setCopied] = useState(false);

  const minifyHtml = () => {
    if (!input.trim()) return;

    // VIP Minification Logic
    let minified = input
      .replace(/<\!--[\s\S]*?-->/g, '') // Remove comments
      .replace(/\s+/g, ' ')             // Collapse whitespace
      .replace(/>\s+</g, '><')          // Remove space between tags
      .trim();

    const originalSize = new Blob([input]).size;
    const minifiedSize = new Blob([minified]).size;
    const saving = originalSize > 0 ? ((originalSize - minifiedSize) / originalSize * 100).toFixed(1) : 0;

    setOutput(minified);
    setStats({
      old: originalSize,
      new: minifiedSize,
      percent: saving
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="HTML Minifier"
      icon="📉"
      color="#f43f5e"
      description="Improve your website's PageSpeed Insights score by compressing HTML code. Remove unnecessary bloat in seconds."
      currentHref="/tools/html-minifier"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* SEO Header - h2 */}
        <section>
          <h2 style={{ fontSize: "18px", fontWeight: "900", marginBottom: "15px", color: "var(--text)" }}>
            Optimize Your HTML for Maximum Performance
          </h2>
          <div style={{ marginBottom: "10px" }}>
            <label className="label" style={{ fontWeight: "700" }}>Paste Your Source HTML Code</label>
            <textarea
              className="textarea"
              rows={8}
              placeholder="<html> <body> <h1> Hello World </h1> </body> </html>"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ fontSize: 14, fontFamily: "monospace", background: "var(--bg2)", borderRadius: "16px" }}
            />
          </div>
          <button 
            className="btn-primary" 
            onClick={minifyHtml}
            disabled={!input}
            style={{ 
              background: "#f43f5e", color: "white", fontWeight: "900", 
              padding: "18px", borderRadius: "14px", width: "100%" 
            }}
          >
            MINIFY HTML CODE ⚡
          </button>
        </section>

        {/* Compression Statistics */}
        {stats && (
          <section style={{ animation: "fadeUp 0.4s ease" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "12px", textAlign: "center", opacity: 0.8 }}>
              COMPRESSION EFFICIENCY
            </h3>
            <div style={{ 
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 15, textAlign: "center" 
            }}>
              <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "10px", color: "var(--muted)", fontWeight: "900" }}>BEFORE</div>
                <div style={{ fontWeight: "800", fontSize: "16px" }}>{stats.old} B</div>
              </div>
              <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "10px", color: "var(--muted)", fontWeight: "900" }}>AFTER</div>
                <div style={{ fontWeight: "800", fontSize: "16px", color: "#22c55e" }}>{stats.new} B</div>
              </div>
              <div style={{ padding: "20px", background: "#f43f5e10", borderRadius: "20px", border: "1px solid #f43f5e33" }}>
                <div style={{ fontSize: "10px", color: "#f43f5e", fontWeight: "900" }}>SAVED</div>
                <div style={{ fontWeight: "800", fontSize: "16px", color: "#f43f5e" }}>{stats.percent}%</div>
              </div>
            </div>
          </section>
        )}

        {/* Output Section */}
        <section style={{ position: "relative" }}>
          <h3 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "10px" }}>Minified Result</h3>
          <textarea
            className="textarea"
            rows={6}
            readOnly
            value={output}
            placeholder="Minified code will appear here..."
            style={{ 
              background: "#1e1e2e", color: "#fb7185", fontFamily: "monospace", 
              fontSize: "13px", border: "2px solid #334155", borderRadius: "18px"
            }}
          />
          {output && (
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute", right: "12px", bottom: "12px",
                padding: "10px 24px", borderRadius: "12px", 
                background: copied ? "#22c55e" : "#f43f5e",
                color: "white", fontSize: "13px", fontWeight: "900", border: "none", cursor: "pointer"
              }}
            >
              {copied ? "✓ COPIED" : "COPY CODE"}
            </button>
          )}
        </section>

        {/* Informational SEO Content Section */}
        <section style={{ 
          padding: "30px", borderRadius: "28px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "12px" }}>Why Minify HTML for SEO?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", marginBottom: "15px" }}>
            Minification is the process of removing unnecessary characters from your source code without changing its functionality. For SEO, this is crucial as it reduces the <b>Total Byte Size</b> of your pages, leading to faster crawl rates by Googlebot.
          </p>
          <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "8px" }}>Impact on Core Web Vitals</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", margin: 0 }}>
            By minifying your HTML, you directly improve your <b>Largest Contentful Paint (LCP)</b> and <b>Time to First Byte (TTFB)</b>. Fast-loading pages provide a better user experience, which is a primary ranking signal in Google's modern search algorithm.
          </p>
        </section>

      </div>
    </ToolPage>
  );
}