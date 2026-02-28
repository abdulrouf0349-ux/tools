"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function SmallTextClient() {
  const [text, setText] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Unicode Mapping Tables
  const maps = {
    smallCaps: {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", 
      n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    },
    superscript: {
      a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ",
      n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᵠ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
      "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "0": "⁰"
    },
    subscript: {
      a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ", o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", 
      t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", 
      "8": "₈", "9": "₉", "0": "₀", "+": "₊", "-": "₋", "=": "₌", "(": "₍", ")": "₎"
    }
  };

  const transform = (type) => {
    return text.toLowerCase().split('').map(char => maps[type][char] || char).join('');
  };

  const handleCopy = (content, index) => {
    if (!text) return;
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const results = [
    { label: "Small Caps (The Pro Look)", content: transform("smallCaps"), color: "#c084fc" },
    { label: "Superscript (Tiny High)", content: transform("superscript"), color: "#fb7185" },
    { label: "Subscript (Tiny Low)", content: transform("subscript"), color: "#38bdf8" },
  ];

  return (
    <ToolPage
      title="Small Text Generator"
      icon="📐"
      color="#c084fc"
      description="Make your text stand out with tiny unicode magic. Perfect for names, bios, and captions."
      currentHref="/tools/small-text-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Main Input Section */}
        <section>
          <label style={{ fontSize: "12px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
            Input Your Text
          </label>
          <input 
            className="input" 
            type="text" 
            placeholder="Type your caption or name here..." 
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: "20px", padding: "24px", borderRadius: "24px",
              background: "var(--bg3)", border: "2px solid var(--border)",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
              color: "var(--text)"
            }}
          />
        </section>

        {/* Dynamic Results Grid */}
        <section style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {results.map((res, i) => (
            <div key={i} style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "25px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "transform 0.2s",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "10px", fontWeight: "900", color: res.color, textTransform: "uppercase", marginBottom: "10px", letterSpacing: "1.5px" }}>
                  {res.label}
                </div>
                <div style={{ 
                  fontSize: "28px", 
                  color: text ? "var(--text)" : "var(--muted)",
                  minHeight: "35px",
                  wordBreak: "break-all",
                  fontWeight: "500"
                }}>
                  {text ? res.content : "ᵗᵉˣᵗ ᵖʳᵉᵛⁱᵉʷ"}
                </div>
              </div>
              
              <button 
                onClick={() => handleCopy(res.content, i)}
                disabled={!text}
                style={{
                  background: copiedIndex === i ? "#22c55e" : `${res.color}22`,
                  color: copiedIndex === i ? "#fff" : res.color,
                  border: "none",
                  padding: "15px 25px",
                  borderRadius: "16px",
                  fontSize: "13px",
                  fontWeight: "900",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  transform: copiedIndex === i ? "scale(1.05)" : "scale(1)",
                  boxShadow: copiedIndex === i ? `0 10px 20px ${res.color}44` : "none"
                }}
              >
                {copiedIndex === i ? "✓ COPIED" : "COPY"}
              </button>
            </div>
          ))}
        </section>

        {/* Informational Illustration Placeholder */}
        

        {/* Technical Insight */}
        <section style={{ 
          padding: "25px", borderRadius: "28px", background: "var(--bg3)", 
          border: "1px dashed var(--border)", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>✨</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>Unicode vs Fonts</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Unlike fonts, these <b>Unicode characters</b> are universal. When you copy-paste them, they will look exactly like this on any device, whether it's an iPhone, Android, or PC.
            </p>
          </div>
        </section>

      </div>
    </ToolPage>
  );
}