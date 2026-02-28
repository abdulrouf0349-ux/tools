"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function AsciiConverterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("textToAscii");
  const [copied, setCopied] = useState(false);

  const convert = () => {
    if (!input.trim()) return;
    try {
      if (mode === "textToAscii") {
        const result = input.split("").map((char) => char.charCodeAt(0)).join(" ");
        setOutput(result);
      } else {
        const result = input.trim().split(/\s+/).map((code) => {
          const num = parseInt(code);
          if (isNaN(num)) throw new Error();
          return String.fromCharCode(num);
        }).join("");
        setOutput(result);
      }
    } catch (err) {
      setOutput("⚠️ Error: Please enter valid numeric ASCII codes (e.g., 72 101).");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="ASCII Converter"
      icon="🔢"
      color="#3b82f6"
      description="Convert text to ASCII decimal codes and decode ASCII numbers back to plain text instantly."
      currentHref="/tools/ascii-converter"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Mode Switcher */}
        <div style={{ display: "flex", background: "var(--bg2)", padding: "6px", borderRadius: "16px", border: "1px solid var(--border)", width: "100%" }}>
          <button 
            onClick={() => { setMode("textToAscii"); setInput(""); setOutput(""); }}
            style={{ flex: 1, padding: "12px 8px", borderRadius: "12px", fontSize: "14px", fontWeight: "700", background: mode === "textToAscii" ? "#3b82f6" : "transparent", color: mode === "textToAscii" ? "white" : "var(--muted)", border: "none", cursor: "pointer", transition: "0.2s" }}
          > Text to ASCII </button>
          <button 
            onClick={() => { setMode("asciiToText"); setInput(""); setOutput(""); }}
            style={{ flex: 1, padding: "12px 8px", borderRadius: "12px", fontSize: "14px", fontWeight: "700", background: mode === "asciiToText" ? "#3b82f6" : "transparent", color: mode === "asciiToText" ? "white" : "var(--muted)", border: "none", cursor: "pointer", transition: "0.2s" }}
          > ASCII to Text </button>
        </div>

        {/* Converter Interface */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ width: "100%" }}>
            <label style={{ display: "block", marginBottom: 10, fontSize: "14px", fontWeight: "600" }}>
              {mode === "textToAscii" ? "Enter Plain Text" : "Enter ASCII Decimal Codes"}
            </label>
            <textarea
              className="textarea"
              rows={5}
              placeholder={mode === "textToAscii" ? "Type something..." : "e.g. 72 101 108 108 111"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ width: "100%", fontFamily: "monospace", fontSize: 16, padding: "15px", borderRadius: "14px", background: "var(--bg1)", border: "1px solid var(--border)", color: "var(--text)", resize: "vertical" }}
            />
          </div>

          <button className="btn-primary" onClick={convert} disabled={!input} style={{ background: "#3b82f6", color: "white", padding: "16px", borderRadius: "12px", border: "none", fontWeight: "800", fontSize: "16px", cursor: "pointer", opacity: !input ? 0.6 : 1 }}>
            Transform Data ⚡
          </button>

          <div style={{ position: "relative", width: "100%" }}>
            <label style={{ display: "block", marginBottom: 10, fontSize: "14px", fontWeight: "600" }}>Result</label>
            <div style={{ minHeight: "120px", padding: "20px", borderRadius: "16px", background: "var(--bg3)", color: "var(--text)", fontFamily: "monospace", fontSize: "18px", border: "1px solid var(--border)", overflowWrap: "break-word", position: "relative" }}>
              {output || <span style={{ opacity: 0.3 }}>Your conversion will appear here...</span>}
              {output && (
                <button onClick={handleCopy} style={{ position: "absolute", right: "12px", top: "12px", padding: "6px 14px", borderRadius: "8px", background: "var(--bg2)", color: copied ? "#10b981" : "var(--text)", fontSize: "12px", fontWeight: "600", border: "1px solid var(--border)", cursor: "pointer" }}>
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Fact Box */}
        <div style={{ padding: "16px", borderRadius: "16px", background: "rgba(59, 130, 246, 0.05)", border: "1px dashed rgba(59, 130, 246, 0.3)", display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ fontSize: 24 }}>💡</span>
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
            <b>Pro Tip:</b> ASCII values range from 0 to 127. Values from 128 to 255 belong to Extended ASCII. Our <strong>Text to ASCII converter</strong> supports standard character mapping for high accuracy.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
             🚀 SEO CONTENT SECTION
        ══════════════════════════════════════════════════ */}
        <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>What is an ASCII Converter?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            An <strong>ASCII Converter</strong> is a digital tool that translates characters into their numeric representations 
            based on the American Standard Code for Information Interchange. This is essential for developers, data 
            analysts, and computer science students who need to understand how computers interpret text at a low level.
          </p>

          <h3 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Why Use Our ASCII Tool?</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>
            <li><strong>Bi-Directional Conversion:</strong> Easily switch between <strong>text-to-ascii</strong> and <strong>ascii-to-text</strong> modes.</li>
            <li><strong>Developer Friendly:</strong> Output is formatted with clean spacing, perfect for coding and debugging.</li>
            <li><strong>Instant Decoding:</strong> Paste long strings of decimal codes to instantly recover the original message.</li>
            <li><strong>100% Free & Secure:</strong> No data is sent to servers; all conversions happen right in your browser.</li>
          </ul>
        </div>

      </div>

      <style jsx>{`
        .btn-primary:active { transform: scale(0.98); }
        @media (max-width: 480px) { .textarea { font-size: 14px !important; } }
      `}</style>
    </ToolPage>
  );
}