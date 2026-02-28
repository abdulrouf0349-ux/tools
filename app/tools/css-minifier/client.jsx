"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function CssMinifierClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState(null);
  const [copied, setCopied] = useState(false);

  const minifyCss = () => {
    if (!input.trim()) return;

    // Advanced CSS Minification Logic
    let minified = input
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\n+/g, '')               // Remove newlines
      .replace(/\s+/g, ' ')             // Collapse multiple spaces
      .replace(/\s*([\{\}:;,])\s*/g, '$1') // Remove spaces around symbols
      .replace(/;}/g, '}')               // Remove last semicolon before closing brace
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

  const clearAll = () => {
    setInput("");
    setOutput("");
    setStats(null);
  };

  return (
    <ToolPage
      title="CSS Minifier"
      icon="🎨"
      color="#3b82f6"
      description="Compress your CSS files to the smallest possible size. Boost your website's performance by reducing stylesheet weight."
      currentHref="/tools/css-minifier"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Section */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <label className="label" style={{ fontWeight: 700 }}>Paste Your CSS Code</label>
            <button onClick={clearAll} style={{ background: "none", border: "none", color: "#ef4444", fontSize: "12px", cursor: "pointer", fontWeight: "700" }}>Clear All</button>
          </div>
          <textarea
            className="textarea"
            rows={10}
            placeholder={".header {\n  display: block;\n  padding: 20px;\n  /* Design by Gemini */\n}"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ fontSize: 13, fontFamily: "var(--mono)", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 16, width: "100%", padding: 15, color: "var(--text)" }}
          />
        </div>

        {/* Action Button */}
        <button 
          className="btn-primary" 
          onClick={minifyCss}
          style={{ 
            background: "#3b82f6", color: "white", fontWeight: "900", padding: "16px",
            borderRadius: "14px", border: "none", cursor: "pointer",
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
            fontSize: "16px"
          }}
        >
          Minify CSS Now ⚡
        </button>

        {/* Efficiency Dashboard */}
        {stats && (
          <div style={{ 
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12 
          }}>
            <div style={{ padding: "20px 15px", background: "var(--bg2)", borderRadius: 20, border: "1px solid var(--border)", textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "var(--muted)", fontWeight: "800", marginBottom: 5 }}>ORIGINAL</div>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>{stats.old} <span style={{fontSize: 12}}>B</span></div>
            </div>
            <div style={{ padding: "20px 15px", background: "var(--bg2)", borderRadius: 20, border: "1px solid var(--border)", textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "var(--muted)", fontWeight: "800", marginBottom: 5 }}>MINIFIED</div>
              <div style={{ fontSize: "18px", fontWeight: "bold", color: "#22c55e" }}>{stats.new} <span style={{fontSize: 12}}>B</span></div>
            </div>
            <div style={{ padding: "20px 15px", background: "#3b82f610", borderRadius: 20, border: "1px solid #3b82f633", textAlign: "center" }}>
              <div style={{ fontSize: 10, color: "#3b82f6", fontWeight: "800", marginBottom: 5 }}>SAVINGS</div>
              <div style={{ fontSize: "18px", fontWeight: "bold", color: "#3b82f6" }}>{stats.percent}%</div>
            </div>
          </div>
        )}

        {/* Output Section */}
        <div style={{ position: "relative" }}>
          <label className="label" style={{ fontWeight: 700, display: "block", marginBottom: 10 }}>Compressed Result</label>
          <div style={{ position: "relative" }}>
            <textarea
              className="textarea"
              rows={6}
              readOnly
              value={output}
              style={{ 
                background: "#0f172a", color: "#38bdf8", 
                fontFamily: "var(--mono)", fontSize: "13px",
                border: "1px solid #1e293b", borderRadius: 16, width: "100%", padding: 15,
                lineHeight: "1.6"
              }}
            />
            {output && (
              <button 
                onClick={handleCopy}
                style={{
                  position: "absolute", right: "12px", top: "12px",
                  padding: "10px 16px", borderRadius: "10px", 
                  background: copied ? "#22c55e" : "#3b82f6",
                  color: "white", fontSize: "12px", border: "none", cursor: "pointer", fontWeight: "800",
                  transition: "0.2s"
                }}
              >
                {copied ? "✓ Copied" : "Copy Code"}
              </button>
            )}
          </div>
        </div>

        {/* Pro Content */}
        <div style={{ marginTop: 20, padding: "25px", borderRadius: "24px", background: "var(--bg3)", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "12px" }}>How Minification Works?</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            Minification is the process of removing unnecessary characters from code without changing its functionality. 
            For CSS, this means stripping away:
          </p>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginTop: 10 }}>
            <li><b>Whitespace:</b> Spaces and tabs used for indentation.</li>
            <li><b>Comments:</b> Code documentation meant for humans, not browsers.</li>
            <li><b>Newlines:</b> Line breaks that make code readable but increase file size.</li>
          </ul>
        </div>

      </div>
    </ToolPage>
  );
}