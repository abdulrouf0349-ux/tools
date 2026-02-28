"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function DataConverterClient() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("GB");

  const units = {
    B: 1,
    KB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4,
    PB: 1024 ** 5,
  };

  const convert = (val, fromUnit) => {
    if (!val || isNaN(val)) return {};
    const bytes = val * units[fromUnit];
    return Object.keys(units).reduce((acc, u) => {
      // Localized string formatting for readability
      acc[u] = (bytes / units[u]).toLocaleString(undefined, { 
        maximumFractionDigits: 4,
        minimumFractionDigits: 0
      });
      return acc;
    }, {});
  };

  const results = convert(value, unit);

  return (
    <ToolPage
      title="Data Unit Converter"
      icon="💾"
      color="#3b82f6"
      description="Convert between Bytes, KB, MB, GB, TB, and PB. Precision calculations using the 1024 binary standard."
      currentHref="/tools/data-unit-converter"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Control Panel */}
        <div style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "28px", 
          border: "1px solid var(--border)",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          alignItems: "flex-end"
        }}>
          <div style={{ flex: "2 1 200px" }}>
            <label className="label" style={{ fontWeight: 700, marginBottom: 10, display: "block" }}>Enter Value</label>
            <input 
              type="number" 
              className="input" 
              placeholder="e.g. 500"
              value={value} 
              onChange={(e) => setValue(e.target.value)}
              style={{ fontSize: "18px", padding: "14px", borderRadius: "14px", width: "100%", background: "var(--bg1)" }}
            />
          </div>
          <div style={{ flex: "1 1 140px" }}>
            <label className="label" style={{ fontWeight: 700, marginBottom: 10, display: "block" }}>From Unit</label>
            <select 
              className="input" 
              value={unit} 
              onChange={(e) => setUnit(e.target.value)}
              style={{ padding: "14px", borderRadius: "14px", width: "100%", cursor: "pointer", fontWeight: "bold", background: "var(--bg1)" }}
            >
              {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
          gap: 15 
        }}>
          {Object.keys(units).map((u) => (
            <div key={u} style={{ 
              padding: "24px 15px", 
              background: u === unit ? "rgba(59, 130, 246, 0.08)" : "var(--bg2)", 
              borderRadius: "22px", 
              border: u === unit ? "2px solid #3b82f6" : "1px solid var(--border)",
              textAlign: "center",
              transition: "transform 0.2s, background 0.2s",
              overflow: "hidden", 
              display: "flex",
              flexDirection: "column",
              boxShadow: u === unit ? "0 8px 20px -8px rgba(59, 130, 246, 0.3)" : "none"
            }}>
              <div style={{ 
                fontSize: "11px", 
                color: u === unit ? "#3b82f6" : "var(--muted)", 
                fontWeight: "900", 
                textTransform: "uppercase", 
                letterSpacing: "1px",
                marginBottom: 10 
              }}>{u}</div>
              
              <div style={{ 
                fontSize: "20px", 
                fontWeight: "800", 
                color: u === unit ? "#3b82f6" : "var(--text)",
                wordBreak: "break-all",
                overflowX: "auto",
                fontFamily: "var(--mono)",
                lineHeight: "1.2"
              }}>
                {value ? results[u] : "0"}
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip Section */}
        <div style={{ 
          padding: "25px", 
          borderRadius: "24px", 
          background: "var(--bg3)", 
          display: "flex", 
          gap: 20, 
          alignItems: "flex-start", 
          border: "1px solid var(--border)"
        }}>
          <div style={{ 
            fontSize: "24px", 
            background: "#3b82f6", 
            width: "45px", 
            height: "45px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            borderRadius: "12px",
            flexShrink: 0
          }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>Binary (1024) vs Decimal (1000)</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Our converter uses the <b>Binary (1024)</b> standard, which is used by Operating Systems (Windows/Linux) to report file sizes. 
              Note that storage manufacturers often use the <b>Decimal (1000)</b> system on packaging, which is why a "1TB" drive often shows as only ~931GB in your system.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}