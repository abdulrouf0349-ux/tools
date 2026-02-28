"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function Base64EncodeClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleEncode = () => {
    try {
      if (!input.trim()) return;
      // Using btoa with UTF-8 support (Standard for web)
      const encoded = btoa(unescape(encodeURIComponent(input)));
      setOutput(encoded);
    } catch (err) {
      setOutput("⚠️ Error: Could not encode text. Check your input.");
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
      title="Base64 Encoder"
      icon="🔐"
      color="#6366f1"
      description="Safely encode your text strings into Base64 format. Useful for data URI, basic auth, and binary-to-text transmission."
      currentHref="/tools/base64-encode"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Pad */}
        <div>
          <label className="label" style={{ display: "block", marginBottom: 10, fontWeight: "600" }}>Plain Text to Encode</label>
          <textarea
            className="textarea"
            rows={6}
            placeholder="Paste your text or sensitive data here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ 
              width: "100%", padding: "15px", fontSize: 16, background: "var(--bg2)", 
              border: "1px solid var(--border)", fontFamily: "monospace", color: "var(--text)",
              borderRadius: "12px"
            }}
          />
        </div>

        {/* Encode Action */}
        <button 
          className="btn-primary" 
          onClick={handleEncode}
          disabled={!input}
          style={{ 
            background: "#6366f1", color: "white", padding: "16px", fontSize: "15px", 
            fontWeight: "bold", borderRadius: "14px", border: "none", cursor: "pointer",
            boxShadow: "0 10px 20px rgba(99, 102, 241, 0.2)", opacity: !input ? 0.6 : 1
          }}
        >
          Encode String 🔒
        </button>

        {/* Output Pad */}
        <div style={{ position: "relative" }}>
          <label className="label" style={{ display: "block", marginBottom: 10, fontWeight: "600" }}>Base64 Result</label>
          <div style={{ 
            minHeight: "150px", padding: "20px", background: "var(--bg3)", color: "var(--text)", 
            borderRadius: "18px", fontSize: "14px", fontFamily: "monospace", lineHeight: "1.6", 
            wordBreak: "break-all", border: "1px solid var(--border)"
          }}>
            {output || <span style={{ opacity: 0.3 }}>Encoded result will appear here...</span>}
          </div>

          {output && !output.startsWith("⚠️") && (
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute", right: "12px", bottom: "12px", padding: "8px 20px", 
                borderRadius: "10px", background: copied ? "#22c55e" : "#6366f1", 
                color: "white", fontSize: "12px", fontWeight: "800", border: "none", cursor: "pointer"
              }}
            >
              {copied ? "✓ Copied" : "Copy Base64"}
            </button>
          )}
        </div>

        {/* Info Box */}
        <div style={{ 
          padding: 20, borderRadius: 20, background: "rgba(99, 102, 241, 0.05)", 
          border: "1px solid rgba(99, 102, 241, 0.2)", display: "flex", gap: 15, alignItems: "center"
        }}>
          <div style={{ fontSize: 24 }}>💡</div>
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
            <b>Pro Tip:</b> Base64 is perfect for embedding small images or fonts directly into your <strong>CSS</strong> or <strong>HTML</strong> files as Data URIs, reducing HTTP requests.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
             🚀 SEO CONTENT SECTION
        ══════════════════════════════════════════════════ */}
        <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>Why Use an Online Base64 Encoder?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            Our <strong>online Base64 encoder</strong> is an essential tool for developers and sysadmins. 
            Base64 encoding is widely used in <strong>web development</strong> to handle data that needs 
            to be stored and transferred over media that are designed to deal with textual data. This includes 
            creating <strong>Data URIs</strong>, generating <strong>Basic Auth headers</strong>, and 
            transferring complex symbols safely.
          </p>

          <h3 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Key Features:</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>
            <li><strong>Full UTF-8 Support:</strong> Correct encoding for foreign languages and symbols.</li>
            <li><strong>Browser-Based Security:</strong> Your data is never sent to a server. Everything happens on your device.</li>
            <li><strong>No Size Limits:</strong> Efficiently encode large blocks of text without lag.</li>
            <li><strong>Developer Optimized:</strong> Clean interface designed for speed and productivity.</li>
          </ul>
        </div>
      </div>
    </ToolPage>
  );
}