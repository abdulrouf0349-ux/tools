"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function Base64DecodeClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDecode = () => {
    try {
      if (!input.trim()) return;
      const decoded = decodeURIComponent(
        escape(window.atob(input.trim().replace(/\s/g, "")))
      );
      setOutput(decoded);
      setError(false);
    } catch (err) {
      setOutput("⚠️ Invalid Base64 String! Please check your input and try again.");
      setError(true);
    }
  };

  const handleCopy = () => {
    if (!output || error) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Base64 Decoder"
      icon="🔓"
      color="#8b5cf6"
      description="Instantly decode Base64 encoded strings back into plain text. Perfect for developers and debugging data streams."
      currentHref="/tools/base64-decode"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Pad */}
        <div>
          <label className="label">Base64 Encoded Text</label>
          <textarea
            className="textarea"
            rows={6}
            placeholder="Paste your Base64 string here (e.g. SGVsbG8=)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ fontSize: 15, background: "var(--bg2)", border: "1px solid var(--border)", fontFamily: "monospace", width: "100%", padding: "15px", borderRadius: "12px", color: "var(--text)" }}
          />
        </div>

        {/* Decode Action */}
        <button 
          className="btn-primary" 
          onClick={handleDecode}
          disabled={!input}
          style={{ background: "#8b5cf6", color: "white", padding: "16px", fontSize: "15px", fontWeight: "900", borderRadius: "14px", border: "none", cursor: "pointer", opacity: !input ? 0.6 : 1 }}
        >
          DECODE DATA 🔓
        </button>

        {/* Output Pad */}
        <div style={{ position: "relative" }}>
          <label className="label">Decoded Result</label>
          <div style={{ 
            minHeight: "150px", padding: "20px", background: error ? "rgba(239, 68, 68, 0.1)" : "var(--bg3)",
            color: error ? "#ef4444" : "var(--text)", borderRadius: "18px", fontSize: "16px", fontFamily: "monospace",
            lineHeight: "1.6", wordBreak: "break-all", border: `1px solid ${error ? "#ef4444" : "var(--border)"}`
          }}>
            {output || <span style={{ opacity: 0.3 }}>Your decoded message will appear here...</span>}
          </div>

          {output && !error && (
            <button 
              onClick={handleCopy}
              style={{ position: "absolute", right: "12px", bottom: "12px", padding: "8px 20px", borderRadius: "10px", background: copied ? "#22c55e" : "#8b5cf6", color: "white", fontSize: "12px", fontWeight: "800", border: "none", cursor: "pointer" }}
            >
              {copied ? "✓ Copied" : "Copy Plain Text"}
            </button>
          )}
        </div>

        {/* Security Tip */}
        <div style={{ padding: 20, borderRadius: 20, background: "rgba(139, 92, 246, 0.05)", border: "1px dashed #8b5cf6", display: "flex", gap: 15, alignItems: "center" }}>
          <div style={{ fontSize: 24 }}>🛠️</div>
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
            <b>Pro Tip:</b> Base64 is <u>not</u> encryption. It is a binary-to-text encoding scheme. Do not use it for sensitive passwords without proper encryption.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
             🚀 SEO CONTENT SECTION
        ══════════════════════════════════════════════════ */}
        <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>How Does Our Base64 Decoder Work?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            Our <strong>online Base64 decoder</strong> uses standard algorithms to reverse the encoding process. 
            When data is encoded in Base64, it is converted into a string of ASCII characters. Our tool 
            takes that string and reconstructs the original <strong>UTF-8 plain text</strong>, making it 
            readable for humans again.
          </p>

          <h3 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Why Use Base64 Decoding?</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>
            <li><strong>Debugging APIs:</strong> Often, API responses or headers carry Base64 data that needs inspection.</li>
            <li><strong>Data Extraction:</strong> Extract text embedded in Data URIs or email attachments.</li>
            <li><strong>Cross-Platform Compatibility:</strong> Ensure data integrity when moving information between different systems.</li>
            <li><strong>Privacy Focused:</strong> All decoding happens locally—your data never leaves your computer.</li>
          </ul>
        </div>
      </div>
    </ToolPage>
  );
}