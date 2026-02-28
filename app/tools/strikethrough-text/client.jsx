"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function StrikethroughClient() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  // Unicode Strikethrough Logic
  const strikeText = (str) => {
    if (!str) return "";
    return str.split('').map(char => char + '\u0336').join('');
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(strikeText(text));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Strikethrough Text"
      icon="<s>"
      color="#94a3b8"
      description="Create text with a horizontal line through the center. Perfect for social media, to-do lists, and showing corrections."
      currentHref="/tools/strikethrough-text"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        
        {/* Input Terminal */}
        <section>
          <label style={{ fontSize: "12px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px", display: "block" }}>
            Step 1: Type Your Message
          </label>
          <textarea
            className="textarea"
            rows={5}
            placeholder="e.g. This is a bad idea. (Wait, strike that!)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: "18px", 
              padding: "24px", 
              borderRadius: "24px",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              lineHeight: "1.6",
              transition: "border-color 0.2s"
            }}
          />
        </section>

        {/* Live Preview Display */}
        <section>
          <label style={{ fontSize: "12px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
            Step 2: Live Preview
          </label>
          <div style={{ 
            background: "var(--bg2)", 
            border: "2px dashed var(--border)", 
            borderRadius: "28px", 
            padding: "40px 25px",
            minHeight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative"
          }}>
            <div style={{ 
              fontSize: "32px", 
              color: text ? "var(--text)" : "var(--muted)",
              wordBreak: "break-word",
              fontWeight: "600",
              opacity: text ? 1 : 0.3
            }}>
              {text ? strikeText(text) : "T̶y̶p̶e̶ ̶h̶e̶r̶e̶.̶.̶.̶"}
            </div>
          </div>
        </section>

        {/* Control Center */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "15px" }}>
          <button 
            className="btn-primary" 
            onClick={handleCopy}
            disabled={!text}
            style={{ 
              background: copied ? "#10b981" : "#94a3b8", 
              color: "#fff",
              height: "60px",
              borderRadius: "18px",
              fontSize: "15px",
              fontWeight: "900",
              boxShadow: text ? "0 10px 25px -5px rgba(148, 163, 184, 0.4)" : "none",
              cursor: text ? "pointer" : "not-allowed"
            }}
          >
            {copied ? "✓ COPIED TO CLIPBOARD" : "COPY STRIKETHROUGH"}
          </button>
          
          <button 
            className="btn-ghost" 
            onClick={() => setText("")}
            disabled={!text}
            style={{ 
              border: "1px solid var(--border)",
              borderRadius: "18px",
              fontWeight: "700"
            }}
          >
            CLEAR
          </button>
        </div>

        {/* Technical Visualization */}
        
        <p style={{ textAlign: "center", fontSize: "12px", color: "var(--muted)", marginTop: "-20px" }}>
          <i>Illustration: How Unicode overlays characters to create the strike effect.</i>
        </p>

        {/* Knowledge Base */}
        <section style={{ 
          padding: "30px", borderRadius: "32px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: "25px", alignItems: "flex-start"
        }}>
          <div style={{ fontSize: "32px", background: "#94a3b822", width: "60px", height: "60px", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            🧠
          </div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "900" }}>Why use Unicode?</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>
              Standard <code>&lt;s&gt;</code> or <code>&lt;strike&gt;</code> HTML tags only work inside websites. This generator uses <b>Combining Long Stroke Overlay (U+0336)</b>. This special character "travels" with your text, making it compatible with Discord, YouTube comments, and even your iPhone's Notes app.
            </p>
          </div>
        </section>

      </div>
    </ToolPage>
  );
}