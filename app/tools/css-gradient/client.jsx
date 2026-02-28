"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function CssGradientClient() {
  const [color1, setColor1] = useState("#8b5cf6");
  const [color2, setColor2] = useState("#ec4899");
  const [angle, setAngle] = useState(90);
  const [type, setType] = useState("linear");
  const [copied, setCopied] = useState(false);

  const gradientCode = type === "linear" 
    ? `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`
    : `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`;

  // Production ready CSS output with fallback
  const cssOutput = `/* Background Fallback */\nbackground: ${color1};\n\n/* Gradient Background */\nbackground: ${gradientCode};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="CSS Gradient Generator"
      icon="🌈"
      color="#8b5cf6"
      description="Design stunning CSS gradients with real-time preview. Perfect for UI backgrounds and modern web components."
      currentHref="/tools/css-gradient"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Live Preview Display */}
        <div style={{ 
          height: "220px", 
          width: "100%", 
          borderRadius: "28px", 
          background: gradientCode,
          boxShadow: "0 20px 50px -15px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          border: "4px solid var(--bg2)"
        }}>
          <div style={{ 
            background: "rgba(255,255,255,0.15)", 
            backdropFilter: "blur(12px)",
            padding: "10px 24px",
            borderRadius: "100px",
            color: "white",
            fontWeight: "800",
            fontSize: "14px",
            letterSpacing: "1px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          }}>
            LIVE PREVIEW
          </div>
        </div>

        {/* Configuration Panel */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: 20,
          background: "var(--bg2)",
          padding: "25px",
          borderRadius: "24px",
          border: "1px solid var(--border)"
        }}>
          {/* Color Selectors */}
          <div>
            <label className="label" style={{ fontWeight: "700", marginBottom: "12px", display: "block" }}>Start Color</label>
            <div style={{ display: "flex", gap: 12 }}>
              <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} style={{ width: 55, height: 55, border: "2px solid var(--border)", borderRadius: 14, cursor: "pointer", background: "none" }} />
              <input className="input" value={color1} onChange={(e) => setColor1(e.target.value)} style={{ textTransform: "uppercase", fontFamily: "var(--mono)", fontSize: "14px" }} />
            </div>
          </div>

          <div>
            <label className="label" style={{ fontWeight: "700", marginBottom: "12px", display: "block" }}>End Color</label>
            <div style={{ display: "flex", gap: 12 }}>
              <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} style={{ width: 55, height: 55, border: "2px solid var(--border)", borderRadius: 14, cursor: "pointer", background: "none" }} />
              <input className="input" value={color2} onChange={(e) => setColor2(e.target.value)} style={{ textTransform: "uppercase", fontFamily: "var(--mono)", fontSize: "14px" }} />
            </div>
          </div>

          {/* Type Toggle */}
          <div>
            <label className="label" style={{ fontWeight: "700", marginBottom: "12px", display: "block" }}>Gradient Type</label>
            <div style={{ display: "flex", background: "var(--bg1)", padding: "4px", borderRadius: "12px", border: "1px solid var(--border)" }}>
              {["linear", "radial"].map((t) => (
                <button 
                  key={t}
                  onClick={() => setType(t)}
                  style={{ 
                    flex: 1, padding: "10px", border: "none", borderRadius: "8px", cursor: "pointer",
                    fontSize: "12px", fontWeight: "700", textTransform: "capitalize",
                    background: type === t ? "#8b5cf6" : "transparent",
                    color: type === t ? "white" : "var(--muted)",
                    transition: "0.2s"
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Angle Slider */}
          {type === "linear" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <label className="label" style={{ fontWeight: "700" }}>Angle</label>
                <span style={{ fontSize: "12px", color: "#8b5cf6", fontWeight: "900" }}>{angle}°</span>
              </div>
              <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(e.target.value)} style={{ width: "100%", accentColor: "#8b5cf6", cursor: "pointer" }} />
            </div>
          )}
        </div>

        {/* Code Output Section */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <label className="label" style={{ fontWeight: "700" }}>CSS Export</label>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>Supports all modern browsers</span>
          </div>
          <div style={{ position: "relative" }}>
            <pre style={{ 
              padding: "24px", background: "#0f172a", color: "#38bdf8", 
              borderRadius: "20px", fontSize: "14px", fontFamily: "var(--mono)",
              border: "1px solid #1e293b", overflowX: "auto", lineHeight: "1.6"
            }}>
              <code>{cssOutput}</code>
            </pre>
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute", right: "12px", top: "12px",
                padding: "10px 18px", borderRadius: "10px", 
                background: copied ? "#22c55e" : "#8b5cf6",
                color: "white", fontSize: "12px", border: "none", cursor: "pointer", fontWeight: "800",
                transition: "0.2s", boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
              }}
            >
              {copied ? "✓ Copied" : "Copy Code"}
            </button>
          </div>
        </div>

        {/* Educational Content */}
        <div style={{ marginTop: 20, borderTop: "1px solid var(--border)", paddingTop: 30 }}>
          <h3 style={{ fontSize: 18, marginBottom: 15 }}>Understanding CSS Gradients</h3>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
            CSS gradients allow you to display smooth transitions between two or more specified colors. 
            Unlike traditional background images, gradients are generated by the browser, which means they look 
            <b> sharp at any zoom level</b> and reduce HTTP requests, improving page load speed.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 20 }}>
            <div style={{ background: "var(--bg2)", padding: 15, borderRadius: 15, border: "1px solid var(--border)" }}>
              <h5 style={{ margin: "0 0 10px 0", color: "#8b5cf6" }}>Linear Gradients</h5>
              <p style={{ fontSize: 12, margin: 0, color: "var(--muted)" }}>Colors emerge from one side and blend towards the other. Controlled by angles (0° to 360°).</p>
            </div>
            <div style={{ background: "var(--bg2)", padding: 15, borderRadius: 15, border: "1px solid var(--border)" }}>
              <h5 style={{ margin: "0 0 10px 0", color: "#ec4899" }}>Radial Gradients</h5>
              <p style={{ fontSize: 12, margin: 0, color: "var(--muted)" }}>Defined by their center. Colors start from a single point and radiate outwards in a circular or elliptical shape.</p>
            </div>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}