"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function BinaryConverterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("textToBinary");
  const [copied, setCopied] = useState(false);

  const convert = () => {
    if (!input.trim()) return;
    try {
      if (mode === "textToBinary") {
        const result = input
          .split("")
          .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
          .join(" ");
        setOutput(result);
      } else {
        const result = input
          .trim()
          .split(/\s+/)
          .map((bin) => {
            const charCode = parseInt(bin, 2);
            if (isNaN(charCode)) throw new Error();
            return String.fromCharCode(charCode);
          })
          .join("");
        setOutput(result);
      }
    } catch (err) {
      setOutput("⚠️ Invalid Binary Format! Please use 0s and 1s separated by spaces.");
    }
  };

  const swapMode = () => {
    setMode(mode === "textToBinary" ? "binaryToText" : "textToBinary");
    setInput("");
    setOutput("");
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Binary Translator"
      icon="📟"
      color="#22c55e"
      description="Convert text to binary code and decode binary back to plain text. Fast, secure, and professional."
      currentHref="/tools/binary-to-text"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Mode Switcher VIP */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 15, background: "var(--bg2)", padding: "15px", borderRadius: "16px", border: "1px solid var(--border)" }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: mode === "textToBinary" ? "#22c55e" : "var(--muted)" }}>Text Mode</span>
          <button 
            onClick={swapMode}
            style={{ width: "50px", height: "26px", borderRadius: "20px", background: "#22c55e33", border: "1px solid #22c55e", cursor: "pointer", position: "relative" }}
          >
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#22c55e", position: "absolute", top: "3px", left: mode === "textToBinary" ? "4px" : "26px", transition: "0.3s" }} />
          </button>
          <span style={{ fontWeight: 700, fontSize: 14, color: mode === "binaryToText" ? "#22c55e" : "var(--muted)" }}>Binary Mode</span>
        </div>

        {/* Input/Output Areas */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label className="label" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
              {mode === "textToBinary" ? "Plain Text Input" : "Binary Code Input"}
            </label>
            <textarea
              className="textarea"
              rows={5}
              placeholder={mode === "textToBinary" ? "Type your message here..." : "e.g. 01001000 01100101..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ width: "100%", fontFamily: "monospace", fontSize: 16, padding: "15px", borderRadius: "12px", background: "var(--bg1)", border: "1px solid var(--border)", color: "var(--text)" }}
            />
          </div>

          <button className="btn-primary" onClick={convert} disabled={!input} style={{ background: "#22c55e", color: "#052e16", padding: "16px", borderRadius: "14px", border: "none", fontWeight: "800", fontSize: "16px", cursor: "pointer", opacity: !input ? 0.6 : 1 }}>
            {mode === "textToBinary" ? "Convert Text to Binary ⚡" : "Translate Binary to Text 🔓"}
          </button>

          <div style={{ position: "relative" }}>
            <label className="label" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Result</label>
            <div style={{ minHeight: "120px", padding: "20px", borderRadius: "16px", background: "#0a0a0a", color: "#22c55e", fontFamily: "monospace", fontSize: "15px", border: "2px solid #166534", overflowWrap: "break-word" }}>
              {output || <span style={{ opacity: 0.3 }}>010101...</span>}
            </div>
            {output && !output.includes("⚠️") && (
              <button onClick={handleCopy} style={{ position: "absolute", right: "12px", bottom: "12px", padding: "8px 16px", borderRadius: "8px", background: copied ? "#22c55e" : "#166534", color: copied ? "#052e16" : "white", fontSize: "12px", fontWeight: "700", border: "none", cursor: "pointer" }}>
                {copied ? "✓ Copied" : "Copy Result"}
              </button>
            )}
          </div>
        </div>

        {/* Binary Encoding Diagram Suggestion */}
        

        {/* Educational Content */}
        <div style={{ marginTop: "20px", borderTop: "1px solid var(--border)", paddingTop: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>How the Binary Translator Works</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            Everything you see on a computer screen—images, text, videos—is stored as binary code. 
            A <strong>Binary Translator</strong> acts as a bridge between human language and computer language.
          </p>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginTop: "10px" }}>
            <li><strong>Text to Binary:</strong> Each character has an ASCII value (e.g., 'A' = 65). We convert 65 to base-2, which is <code>01000001</code>.</li>
            <li><strong>Binary to Text:</strong> We take 8-bit chunks, convert them to decimal, and find the corresponding character in the ASCII table.</li>
          </ul>
        </div>

        {/* Fact Box */}
        <div style={{ padding: 20, borderRadius: 16, background: "rgba(34, 197, 94, 0.05)", border: "1px dashed #22c55e", display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ fontSize: 24 }}>🧠</span>
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
            <b>Binary Fact:</b> Modern computers use <strong>8 bits</strong> to represent one character. This 8-bit sequence is known as a <strong>Byte</strong>.
          </p>
        </div>

      </div>
    </ToolPage>
  );
}