"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function UrlCodecClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode"); // 'encode' or 'decode'
  const [copied, setCopied] = useState(false);

  const handleProcess = () => {
    try {
      if (!input.trim()) return;
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input));
      }
    } catch (err) {
      setOutput("⚠️ Error: Invalid URL or character sequence detected.");
    }
  };

  const handleCopy = () => {
    if (!output || output.startsWith("⚠️")) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="URL Encoder & Decoder"
      icon="🌐"
      color="#0ea5e9"
      description="Web browsers use specific characters in URLs. Our tool ensures your data is correctly formatted for the internet using standard percent-encoding."
      currentHref="/tools/url-codec"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Professional Mode Switcher */}
        <div style={{ 
          display: "flex", 
          background: "var(--bg2)", 
          padding: "8px", 
          borderRadius: "22px", 
          border: "2px solid var(--border)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
        }}>
          <button 
            onClick={() => { setMode("encode"); setOutput(""); }}
            style={{ 
              flex: 1, padding: "14px", borderRadius: "16px", fontSize: "15px", fontWeight: "800",
              background: mode === "encode" ? "#0ea5e9" : "transparent",
              color: mode === "encode" ? "white" : "var(--muted)",
              border: "none", cursor: "pointer", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            ENCODE URL
          </button>
          <button 
            onClick={() => { setMode("decode"); setOutput(""); }}
            style={{ 
              flex: 1, padding: "14px", borderRadius: "16px", fontSize: "15px", fontWeight: "800",
              background: mode === "decode" ? "#0ea5e9" : "transparent",
              color: mode === "decode" ? "white" : "var(--muted)",
              border: "none", cursor: "pointer", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            DECODE URL
          </button>
        </div>

        {/* Input Textarea Section */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
            <label style={{ fontSize: "11px", fontWeight: "900", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "1px" }}>
              {mode === "encode" ? "Input: Plain Text" : "Input: Encoded String"}
            </label>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>{input.length} chars</span>
          </div>
          <textarea
            className="textarea"
            rows={6}
            placeholder={mode === "encode" ? "e.g. hello world & symbols" : "e.g. hello%20world%20%26%20symbols"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ 
              fontSize: "16px", 
              background: "var(--bg3)", 
              fontFamily: "'Fira Code', monospace",
              padding: "20px",
              borderRadius: "24px",
              border: "2px solid var(--border)"
            }}
          />
        </section>

        {/* Action Button */}
        <button 
          className="btn-primary" 
          onClick={handleProcess}
          disabled={!input}
          style={{ 
            background: "#0ea5e9", 
            color: "white", 
            height: "65px",
            fontSize: "18px", 
            fontWeight: "900",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)",
            transition: "transform 0.2s"
          }}
        >
          {mode === "encode" ? "CONVERT TO %20 ENCODING" : "CONVERT TO PLAIN TEXT"}
        </button>

        {/* Result Showcase */}
        <section style={{ position: "relative" }}>
          <label style={{ fontSize: "11px", fontWeight: "900", opacity: 0.6, marginBottom: "12px", display: "block" }}>PROCESSED RESULT</label>
          <div style={{ 
            minHeight: "140px",
            padding: "25px",
            background: "var(--bg2)",
            color: output.startsWith("⚠️") ? "#ef4444" : "var(--text)",
            borderRadius: "28px",
            fontSize: "16px",
            fontFamily: "'Fira Code', monospace",
            lineHeight: "1.6",
            wordBreak: "break-all",
            border: `2px solid ${output.startsWith("⚠️") ? "#ef444433" : "var(--border)"}`,
            boxShadow: "inset 0 4px 12px rgba(0,0,0,0.05)"
          }}>
            {output || <span style={{ opacity: 0.2, fontStyle: "italic" }}>Your formatted URL will appear here...</span>}
          </div>

          {output && !output.startsWith("⚠️") && (
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute",
                right: "15px",
                bottom: "15px",
                padding: "10px 25px",
                borderRadius: "14px",
                background: copied ? "#22c55e" : "#0ea5e9",
                color: "white",
                fontSize: "12px",
                fontWeight: "900",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}
            >
              {copied ? "✓ COPIED" : "COPY OUTPUT"}
            </button>
          )}
        </section>

        

        {/* Educational Insight */}
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "rgba(14, 165, 233, 0.05)", 
          border: "1px dashed #0ea5e966", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>🌍</div>
          <div>
            <h5 style={{ margin: "0 0 5px 0", color: "#0ea5e9" }}>Why encode URLs?</h5>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              URLs can only be sent over the Internet using the <b>ASCII character-set</b>. Non-ASCII characters are replaced with a % followed by hex digits. This ensures that browsers don't confuse data with URL control characters like <code>/</code> or <code>?</code>.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}