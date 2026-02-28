"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function HexRgbClient() {
  const [hex, setHex] = useState("#8b5cf6");
  const [rgb, setRgb] = useState({ r: 139, g: 92, b: 246 });

  const hexToRgb = (hexStr) => {
    let cleanHex = hexStr.replace("#", "");
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split("").map(c => c + c).join("");
    }
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return isNaN(r) || isNaN(g) || isNaN(b) ? null : { r, g, b };
  };

  const handleHexInput = (val) => {
    setHex(val);
    const result = hexToRgb(val);
    if (result) setRgb(result);
  };

  const handleRgbInput = (channel, val) => {
    const newVal = Math.max(0, Math.min(255, Number(val)));
    const updatedRgb = { ...rgb, [channel]: newVal };
    setRgb(updatedRgb);
    const newHex = "#" + [updatedRgb.r, updatedRgb.g, updatedRgb.b]
      .map(x => x.toString(16).padStart(2, "0"))
      .join("");
    setHex(newHex);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolPage
      title="HEX to RGB Converter"
      icon="🎨"
      color="#ec4899"
      description="Convert hex color codes to RGB values and vice versa. High-precision tool for web designers and developers."
      currentHref="/tools/hex-rgb"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* h2 Tag for SEO - Main Tool Section */}
        <section>
          <h2 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "15px", color: "var(--text)" }}>
            Real-Time Color Format Conversion
          </h2>
          
          <div style={{ 
            height: "140px", width: "100%", borderRadius: "28px", background: hex,
            border: "8px solid var(--bg2)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center", transition: "0.3s ease"
          }}>
            <span style={{ 
              background: "rgba(255,255,255,0.95)", padding: "6px 16px", 
              borderRadius: "20px", fontSize: "13px", fontWeight: "900", color: "#000"
            }}>
              LIVE PREVIEW
            </span>
          </div>
        </section>

        {/* h3 Tag for Input Groups */}
        <div style={{ 
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 
        }}>
          {/* HEX Panel */}
          <div style={{ background: "var(--bg2)", padding: "25px", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "12px", opacity: 0.8 }}>HEXADECIMAL FORMAT</h3>
            <div style={{ display: "flex", gap: 12 }}>
              <input 
                type="color" value={hex} onChange={(e) => handleHexInput(e.target.value)} 
                style={{ width: 60, height: 50, border: "none", borderRadius: "12px", cursor: "pointer", background: "none" }}
              />
              <input 
                className="input" value={hex} onChange={(e) => handleHexInput(e.target.value)}
                style={{ textTransform: "uppercase", fontFamily: "monospace", fontSize: "18px", fontWeight: "700" }}
              />
            </div>
            <button 
              onClick={() => copyToClipboard(hex)}
              className="btn-primary"
              style={{ marginTop: 15, background: "var(--bg3)", color: "var(--text)", border: "1px solid var(--border)", padding: "12px", fontSize: "13px" }}
            >
              Copy Hex Code
            </button>
          </div>

          {/* RGB Panel */}
          <div style={{ background: "var(--bg2)", padding: "25px", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "12px", opacity: 0.8 }}>RGB CSS FORMAT</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {["r", "g", "b"].map(c => (
                <div key={c}>
                  <label style={{ fontSize: "11px", fontWeight: "900", color: c === "r" ? "#ef4444" : c === "g" ? "#22c55e" : "#3b82f6", display: "block", marginBottom: "4px", textTransform: "uppercase" }}>{c}</label>
                  <input type="number" className="input" value={rgb[c]} onChange={(e) => handleRgbInput(c, e.target.value)} style={{ fontWeight: "700", textAlign: "center" }} />
                </div>
              ))}
            </div>
            <button 
              onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}
              className="btn-primary"
              style={{ marginTop: 15, background: "var(--bg3)", color: "var(--text)", border: "1px solid var(--border)", padding: "12px", fontSize: "13px" }}
            >
              Copy RGB Value
            </button>
          </div>
        </div>

        {/* Rich SEO Content Section */}
        <section style={{ 
          padding: "30px", borderRadius: "28px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "12px" }}>Understanding HEX vs RGB</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", marginBottom: "15px" }}>
            Colors on the web are primarily defined using <b>Hexadecimal (HEX)</b> or <b>Red, Green, Blue (RGB)</b> models. While HEX is a compact 6-digit representation, RGB is essential when you need to control <b>transparency</b> using the alpha channel in CSS.
          </p>
          <h3 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "8px" }}>Why use our Color Converter?</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", margin: 0 }}>
            Our tool provides an instant <b>live preview</b> so you can visualize color changes as you tweak RGB values. This is crucial for maintaining design consistency across different platforms and ensures your <b>UI/UX</b> matches your brand guidelines exactly.
          </p>
        </section>

      </div>
    </ToolPage>
  );
}