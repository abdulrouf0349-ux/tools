"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const formatJson = (spaces = 2) => {
    try {
      setError(null);
      if (!input.trim()) return;
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, spaces));
    } catch (err) {
      setError("⚠️ INVALID JSON: " + err.message);
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      setError(null);
      if (!input.trim()) return;
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj));
    } catch (err) {
      setError("⚠️ INVALID JSON: " + err.message);
      setOutput("");
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="JSON Formatter & Validator"
      icon=" { } "
      color="#8b5cf6"
      description="Clean, format, and validate your JSON data instantly. Perfect for debugging API responses and configuration files."
      currentHref="/tools/json-formatter"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Area */}
        <section>
          <h2 style={{ fontSize: "18px", fontWeight: "900", marginBottom: "15px" }}>Paste Your Raw JSON Data</h2>
          <textarea
            className="textarea"
            rows={8}
            placeholder='{"status":"success","data":{"id":101,"user":"Gemini","tags":["ai","helper"]}}'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ 
              fontSize: 14, fontFamily: "'Fira Code', monospace", 
              background: "var(--bg2)", borderRadius: "16px", border: "1px solid var(--border)"
            }}
          />
        </section>

        {/* Action Buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
          <button 
            className="btn-primary" 
            onClick={() => formatJson(2)}
            style={{ background: "#8b5cf6", color: "white", padding: "15px", borderRadius: "12px", fontWeight: "800" }}
          >
            ✨ BEAUTIFY (2 SPACES)
          </button>
          <button 
            className="btn-primary" 
            onClick={() => formatJson(4)}
            style={{ background: "#6d28d9", color: "white", padding: "15px", borderRadius: "12px", fontWeight: "800" }}
          >
            🌈 BEAUTIFY (4 SPACES)
          </button>
          <button 
            className="btn-ghost" 
            onClick={minifyJson}
            style={{ border: "1px solid var(--border)", background: "var(--bg3)", padding: "15px", borderRadius: "12px", fontWeight: "800" }}
          >
            📦 MINIFY (COMPACT)
          </button>
        </div>

        {/* Output Section */}
        <section style={{ position: "relative" }}>
          <h3 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "10px", opacity: 0.9 }}>Formatted Result</h3>
          
          {error ? (
            <div style={{ 
              padding: "25px", background: "#fee2e2", color: "#991b1b", 
              borderRadius: "20px", border: "2px solid #ef4444", fontSize: "14px", fontWeight: "600",
              animation: "shake 0.3s ease-in-out"
            }}>
              {error}
            </div>
          ) : (
            <div style={{ 
              minHeight: "300px", padding: "24px", borderRadius: "24px",
              background: "#1e1e2e", color: "#a5b4fc", fontFamily: "'Fira Code', monospace",
              fontSize: "13px", border: "2px solid #334155", overflowX: "auto",
              whiteSpace: "pre", boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
            }}>
              {output || <span style={{ opacity: 0.3 }}>// Your formatted and valid JSON will appear here...</span>}
            </div>
          )}

          {output && (
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute", right: "15px", bottom: "15px",
                padding: "10px 25px", borderRadius: "12px", 
                background: copied ? "#22c55e" : "#8b5cf6",
                color: "white", fontSize: "12px", border: "none", cursor: "pointer", fontWeight: "900"
              }}
            >
              {copied ? "✓ COPIED" : "COPY JSON"}
            </button>
          )}
        </section>

        {/* Technical SEO Section */}
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>Why Use a JSON Formatter?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            JSON (JavaScript Object Notation) is the standard format for data exchange on the web. However, API responses are often minified to save bandwidth, making them impossible for humans to read. 
          </p>
          
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "10px" }}>Key Benefits:</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "2", paddingLeft: "20px" }}>
            <li><b>Syntax Validation:</b> Instantly catch missing commas, unclosed brackets, or incorrect quotes.</li>
            <li><b>Improved Readability:</b> Hierarchical indentation makes complex data structures easy to understand.</li>
            <li><b>Bandwidth Optimization:</b> Use the Minify feature to compress JSON for production-ready API calls.</li>
          </ul>

          
        </section>

      </div>
    </ToolPage>
  );
}