"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function TextToBinaryClient() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToBinary = (val) => {
    if (!val.trim()) return "";
    return val
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setText(val);
    setBinary(convertToBinary(val));
  };

  const handleCopy = () => {
    if (!binary) return;
    navigator.clipboard.writeText(binary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Text to Binary"
      icon="📟"
      color="#14b8a6"
      description="Translate your text into machine-readable binary code. Each character is converted into its 8-bit binary representation based on the ASCII/UTF-8 standard."
      currentHref="/tools/text-to-binary"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Terminal */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#14b8a6", textTransform: "uppercase", letterSpacing: "1px" }}>
              Input: Plain Text
            </label>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>{text.length} chars</span>
          </div>
          <textarea
            className="textarea"
            rows={5}
            placeholder="Type 'Hello World' here..."
            value={text}
            onChange={handleInputChange}
            style={{ 
              fontSize: "18px", 
              padding: "25px", 
              borderRadius: "24px",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              transition: "border-color 0.2s"
            }}
          />
        </section>

        {/* Output Terminal (Cyber Theme) */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#2dd4bf", textTransform: "uppercase" }}>
              Output: 8-Bit Binary
            </label>
            {binary && (
              <button 
                onClick={handleCopy}
                style={{
                  background: copied ? "#22c55e" : "#2dd4bf22",
                  color: copied ? "white" : "#2dd4bf",
                  border: `1px solid ${copied ? "#22c55e" : "#2dd4bf"}`,
                  padding: "4px 12px",
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                {copied ? "✓ COPIED" : "COPY CODE"}
              </button>
            )}
          </div>
          <div style={{ 
            minHeight: "180px",
            padding: "30px",
            background: "#0a0f18", // Darker tech background
            color: "#2dd4bf", // Matrix Teal
            borderRadius: "28px",
            fontSize: "16px",
            fontFamily: "'Fira Code', 'Courier New', monospace",
            lineHeight: "1.8",
            wordBreak: "break-all",
            border: "2px solid #1e293b",
            boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5), inset 0 2px 10px rgba(45, 212, 191, 0.05)",
            position: "relative"
          }}>
            {binary || <span style={{ opacity: 0.2 }}>01010100 01100101 01111000 01110100...</span>}
          </div>
        </section>

        

        {/* Binary Knowledge Cards */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "15px" 
        }}>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 5px 0", color: "#14b8a6", fontSize: "14px" }}>8-Bit Format</h5>
            <p style={{ margin: 0, fontSize: "11px", color: "var(--muted)" }}>Each character is padded with zeros to ensure a full byte (8 bits) for consistency.</p>
          </div>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 5px 0", color: "#14b8a6", fontSize: "14px" }}>Instant Encoding</h5>
            <p style={{ margin: 0, fontSize: "11px", color: "var(--muted)" }}>No "Convert" button needed. Our tool processes your text as you type.</p>
          </div>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 5px 0", color: "#14b8a6", fontSize: "14px" }}>Universal</h5>
            <p style={{ margin: 0, fontSize: "11px", color: "var(--muted)" }}>Supports symbols, numbers, and emojis by utilizing Unicode character codes.</p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}