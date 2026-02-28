"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function ColorClient() {
  const [hex, setHex] = useState("#3B82F6");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(null);

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b, str: `rgb(${r}, ${g}, ${b})` };
  };

  const rgbToHsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  const handleConvert = () => {
    if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) return;
    let fullHex = hex;
    if (hex.length === 4) {
      fullHex = "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    const rgb = hexToRgb(fullHex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    setResult({
      hex: fullHex.toUpperCase(),
      rgb: rgb.str,
      hsl: hsl,
      r: rgb.r,
      g: rgb.g,
      b: rgb.b
    });
  };

  const copy = (val, key) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <style jsx>{`
        .color-input-container { display: grid; grid-template-columns: 80px 1fr; gap: 12px; width: 100%; }
        .color-pick-swatch { width: 100% !important; height: 54px !important; padding: 0; border: 2px solid var(--border); border-radius: 12px; cursor: pointer; background: var(--bg2); }
        .color-formats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        @media (max-width: 640px) {
          .color-input-container { grid-template-columns: 1fr; }
          .color-formats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <ToolPage
        title="Color Converter" 
        icon="🎨" 
        color="#fb923c"
        description="Convert HEX, RGB, and HSL codes instantly. Perfect for ensuring color consistency across your projects."
        currentHref="/tools/color-converter"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          {/* Input Section */}
          <div style={{ width: "100%" }}>
            <label className="label" style={{ display: "block", marginBottom: "10px", fontSize: "14px", fontWeight: "600" }}>
              Pick or Input HEX Code
            </label>
            <div className="color-input-container">
              <input
                type="color" className="color-pick-swatch" value={hex}
                onChange={e => { setHex(e.target.value); setResult(null); }}
              />
              <input
                className="input" value={hex} onChange={e => { setHex(e.target.value); setResult(null); }}
                placeholder="#3B82F6"
                style={{ fontFamily: "var(--mono)", fontSize: "16px", height: "54px", borderRadius: "12px", padding: "0 15px", width: "100%", background: "var(--bg1)", border: "1px solid var(--border)", color: "var(--text)" }}
              />
            </div>
          </div>

          <button 
            className="btn-primary" onClick={handleConvert} 
            style={{ background: "#fb923c", color: "white", height: "56px", fontSize: "16px", fontWeight: "800", borderRadius: "12px", border: "none", cursor: "pointer" }}
          >
            Convert Color ✨
          </button>

          {result && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Preview Card */}
              <div style={{ 
                width: "100%", height: "140px", borderRadius: "24px", background: result.hex, 
                border: "4px solid var(--bg2)", boxShadow: `0 20px 50px -12px ${result.hex}66`,
                display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden"
              }}>
                 <div style={{ background: "rgba(0,0,0,0.3)", padding: "8px 20px", borderRadius: "100px", fontSize: "12px", color: "#fff", fontWeight: "900", backdropFilter: "blur(10px)", letterSpacing: "1px" }}>
                   {result.hex}
                 </div>
              </div>

              {/* Format Cards */}
              <div className="color-formats-grid">
                {[["HEX", result.hex], ["RGB", result.rgb], ["HSL", result.hsl]].map(([k, v]) => (
                  <div key={k} onClick={() => copy(v, k)} style={{ background: "var(--bg3)", border: `2px solid ${copied === k ? "#fb923c" : "var(--border)"}`, borderRadius: "16px", padding: "16px", textAlign: "center", cursor: "pointer", transition: "0.2s" }}>
                    <div style={{ fontSize: "10px", color: "var(--muted)", fontWeight: "900", marginBottom: "6px" }}>{k}</div>
                    <div style={{ fontSize: "14px", fontFamily: "var(--mono)", color: "var(--text)", fontWeight: "700" }}>{v}</div>
                    <div style={{ fontSize: "11px", color: copied === k ? "#fb923c" : "var(--muted)", marginTop: "8px" }}>{copied === k ? "✓ Copied" : "Click to Copy"}</div>
                  </div>
                ))}
              </div>

              {/* RGB Breakdown */}
              <div style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "24px", padding: "24px" }}>
                <h4 style={{ margin: "0 0 20px 0", fontSize: "14px", fontWeight: "700" }}>RGB Channel Analysis</h4>
                {[["Red", result.r, "#ff6b6b"], ["Green", result.g, "#4fffb0"], ["Blue", result.b, "#00d4ff"]].map(([ch, val, color]) => (
                  <div key={ch} style={{ marginBottom: "18px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "8px" }}>
                      <span style={{ color, fontWeight: "900" }}>{ch.toUpperCase()}</span>
                      <span style={{ color: "var(--text)", fontWeight: "700" }}>{val} / 255</span>
                    </div>
                    <div style={{ height: "10px", background: "var(--bg3)", borderRadius: "10px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(val / 255) * 100}%`, background: color, transition: "width 0.5s ease" }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Design Tip */}
              <div style={{ padding: 20, borderRadius: 20, background: "rgba(251, 146, 60, 0.05)", border: "1px dashed rgba(251, 146, 60, 0.3)", display: "flex", gap: 15, alignItems: "center" }}>
                <div style={{ fontSize: 24 }}>🎨</div>
                <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
                  <b>Pro Tip:</b> Use HSL for better control over lightness and saturation in CSS variables. It makes creating dark/light mode themes much easier!
                </p>
              </div>
            </div>
          )}
        </div>
      </ToolPage>
    </>
  );
}