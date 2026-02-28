"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function RgbToHexClient() {
  const [r, setR] = useState(139);
  const [g, setG] = useState(92);
  const [b, setB] = useState(246);
  const [hex, setHex] = useState("#8B5CF6");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const toHex = (n) => {
      const h = Math.max(0, Math.min(255, n)).toString(16);
      return h.length === 1 ? "0" + h : h;
    };
    setHex(`#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase());
  }, [r, g, b]);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="RGB to HEX Converter"
      icon="🎨"
      color="#8b5cf6"
      description="Professional color converter to transform RGB values into web-safe HEX codes. Perfect for CSS, Figma, and design mockups."
      currentHref="/tools/rgb-to-hex"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 35 }}>
        
        {/* Visual Preview Sphere */}
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div style={{ 
            width: "200px", height: "200px", borderRadius: "50%", 
            background: hex, 
            border: "12px solid var(--bg2)",
            boxShadow: `0 25px 50px -12px ${hex}66`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            transform: "scale(1)"
          }}>
            <div style={{ 
              background: "rgba(0,0,0,0.15)", padding: "10px 20px", 
              borderRadius: "50px", color: "white", fontSize: "12px", 
              fontWeight: "900", letterSpacing: "1px", textTransform: "uppercase",
              backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)"
            }}>
              Preview
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{ 
              fontSize: "48px", fontWeight: "950", fontFamily: "monospace", 
              color: "var(--text)", letterSpacing: "2px", margin: "10px 0"
            }}>
              {hex}
            </div>
            <button 
              className="btn-primary" 
              onClick={handleCopy}
              style={{ 
                background: hex, color: "white", filter: "brightness(0.9)",
                padding: "12px 40px", borderRadius: "15px", fontWeight: "800",
                boxShadow: `0 10px 20px -5px ${hex}44`
              }}
            >
              {copied ? "✓ COPIED" : "COPY HEX CODE"}
            </button>
          </div>
        </section>

        {/* Precision Sliders */}
        <section style={{ 
          background: "var(--bg2)", padding: "35px", borderRadius: "32px", 
          border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 25 
        }}>
          {[
            { label: "Red", val: r, set: setR, color: "#ef4444", key: 'r' },
            { label: "Green", val: g, set: setG, color: "#22c55e", key: 'g' },
            { label: "Blue", val: b, set: setB, color: "#3b82f6", key: 'b' },
          ].map((item) => (
            <div key={item.key}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, alignItems: "center" }}>
                <label style={{ fontSize: "14px", fontWeight: "900", color: item.color, textTransform: "uppercase" }}>
                  {item.label}
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: "bold" }}>Value:</span>
                  <input 
                    type="number" min="0" max="255" value={item.val} 
                    onChange={(e) => item.set(Number(e.target.value))}
                    style={{ 
                      width: "70px", height: "35px", textAlign: "center", background: "var(--bg3)", 
                      border: "1px solid var(--border)", color: "var(--text)", borderRadius: "10px",
                      fontWeight: "bold", outline: "none"
                    }}
                  />
                </div>
              </div>
              <input 
                type="range" min="0" max="255" value={item.val} 
                onChange={(e) => item.set(Number(e.target.value))}
                style={{ 
                  width: "100%", accentColor: item.color, cursor: "pointer",
                  height: "8px", borderRadius: "10px"
                }}
              />
            </div>
          ))}
        </section>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 15 }}>
          <div style={{ padding: "20px", background: "var(--bg3)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: "900", marginBottom: "5px" }}>CSS FORMAT</div>
            <code style={{ fontSize: "14px", color: "#8b5cf6" }}>rgb({r}, {g}, {b})</code>
          </div>
          <div style={{ padding: "20px", background: "var(--bg3)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: "900", marginBottom: "5px" }}>PERCENTAGE</div>
            <code style={{ fontSize: "14px", color: "#8b5cf6" }}>
              {Math.round(r/2.55)}%, {Math.round(g/2.55)}%, {Math.round(b/2.55)}%
            </code>
          </div>
        </div>

        {/* SEO Info Card */}
        <div style={{ 
          padding: 25, borderRadius: "24px", background: "#8b5cf60a", 
          display: "flex", gap: 15, alignItems: "flex-start", border: "1px dashed #8b5cf644"
        }}>
          <div style={{ fontSize: 24 }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>HEX vs RGB</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              <b>HEX codes</b> are easier to copy/paste in CSS and design tools like Figma. <b>RGB</b> is better when you need to programmatically adjust transparency (RGBA) or animate colors in JavaScript.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}