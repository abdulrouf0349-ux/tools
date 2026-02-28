"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const CATS = {
  length:      { icon: "📏", units: ["meter","km","cm","mm","mile","yard","foot","inch"] },
  weight:      { icon: "⚖️",  units: ["kg","gram","pound","ounce","ton"] },
  temperature: { icon: "🌡️", units: ["celsius","fahrenheit","kelvin"] },
  speed:       { icon: "💨", units: ["mph","kph","mps","knot"] },
  area:        { icon: "📐", units: ["sqm","sqkm","sqft","sqin","acre","hectare"] },
};

const FACTORS = {
  length: { meter: 1, km: 0.001, cm: 100, mm: 1000, mile: 0.000621371, yard: 1.09361, foot: 3.28084, inch: 39.3701 },
  weight: { kg: 1, gram: 1000, pound: 2.20462, ounce: 35.274, ton: 0.001 },
  speed: { kph: 1, mph: 0.621371, mps: 0.277778, knot: 0.539957 },
  area: { sqm: 1, sqkm: 0.000001, sqft: 10.7639, sqin: 1550, acre: 0.000247105, hectare: 0.0001 },
};

export default function UnitClient() {
  const [cat, setCat] = useState("length");
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("meter");
  const [to, setTo] = useState("km");
  const [result, setResult] = useState(null);

  const units = CATS[cat].units;
  const swap = () => { 
    const oldFrom = from;
    setFrom(to); 
    setTo(oldFrom); 
    setResult(null); 
  };

  const convert = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return;

    let resValue;
    if (cat === "temperature") {
      let tempInC;
      if (from === "celsius") tempInC = val;
      else if (from === "fahrenheit") tempInC = (val - 32) * 5/9;
      else if (from === "kelvin") tempInC = val - 273.15;

      if (to === "celsius") resValue = tempInC;
      else if (to === "fahrenheit") resValue = (tempInC * 9/5) + 32;
      else if (to === "kelvin") resValue = tempInC + 273.15;
    } else {
      const baseValue = val / FACTORS[cat][from];
      resValue = baseValue * FACTORS[cat][to];
    }

    setResult({
      from: `${val} ${from}`,
      to: `${resValue.toLocaleString(undefined, { maximumFractionDigits: 6 })} ${to}`
    });
  };

  return (
    <ToolPage
      title="Precision Unit Converter"
      icon="⚖️"
      color="#ffd166"
      description="Professional-grade conversion for technical and everyday measurements. Quick, reliable, and mobile-friendly."
      currentHref="/tools/unit-converter"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Category Navigation */}
        <section>
          <label style={{ fontSize: "12px", fontWeight: "900", color: "#ffd166", marginBottom: "12px", display: "block", textTransform: "uppercase" }}>Select Measurement Type</label>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {Object.entries(CATS).map(([key, v]) => (
              <button 
                key={key} 
                onClick={() => { setCat(key); setFrom(CATS[key].units[0]); setTo(CATS[key].units[1]); setResult(null); }}
                style={{
                  flex: "1 1 auto",
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: "center", 
                  gap: "8px", 
                  padding: "15px 10px", 
                  borderRadius: "20px",
                  border: `2px solid ${cat === key ? "#ffd166" : "var(--border)"}`,
                  background: cat === key ? "rgba(255, 209, 102, 0.1)" : "var(--bg3)",
                  color: cat === key ? "#ffd166" : "var(--text)",
                  cursor: "pointer", 
                  transition: "all 0.2s ease"
                }}
              >
                <span style={{ fontSize: "24px" }}>{v.icon}</span>
                <span style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase" }}>{key}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Input & Conversion Logic */}
        <section style={{ background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)" }}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{ fontSize: "11px", fontWeight: "800", opacity: 0.6, marginBottom: "8px", display: "block" }}>AMOUNT TO CONVERT</label>
            <input 
              className="input"
              type="number" 
              placeholder="e.g. 100" 
              value={value} 
              onChange={e => { setValue(e.target.value); setResult(null); }}
              style={{ fontSize: "24px", fontWeight: "bold", padding: "15px 20px", borderRadius: "18px" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: "15px", alignItems: "end" }}>
            <div>
              <label style={{ fontSize: "10px", fontWeight: "800", opacity: 0.6, marginBottom: "8px", display: "block" }}>FROM</label>
              <select 
                className="textarea" 
                value={from} 
                onChange={e => { setFrom(e.target.value); setResult(null); }}
                style={{ height: "55px", borderRadius: "16px", padding: "0 15px", fontSize: "14px", fontWeight: "bold" }}
              >
                {units.map(u => <option key={u} value={u}>{u.toUpperCase()}</option>)}
              </select>
            </div>
            
            <button 
              onClick={swap} 
              style={{ 
                height: "55px", 
                background: "var(--bg3)", 
                border: "2px solid var(--border)", 
                borderRadius: "16px", 
                fontSize: "24px", 
                color: "#ffd166",
                cursor: "pointer"
              }}
            >
              ⇄
            </button>

            <div>
              <label style={{ fontSize: "10px", fontWeight: "800", opacity: 0.6, marginBottom: "8px", display: "block" }}>TO</label>
              <select 
                className="textarea" 
                value={to} 
                onChange={e => { setTo(e.target.value); setResult(null); }}
                style={{ height: "55px", borderRadius: "16px", padding: "0 15px", fontSize: "14px", fontWeight: "bold" }}
              >
                {units.map(u => <option key={u} value={u}>{u.toUpperCase()}</option>)}
              </select>
            </div>
          </div>

          <button 
            className="btn-primary" 
            onClick={convert} 
            disabled={!value}
            style={{ 
              background: "#ffd166", 
              color: "#1a0f00", 
              width: "100%",
              height: "65px",
              borderRadius: "20px", 
              fontWeight: "900", 
              fontSize: "18px", 
              marginTop: "30px",
              boxShadow: value ? "0 10px 25px rgba(255, 209, 102, 0.2)" : "none"
            }}
          >
            CALCULATE CONVERSION
          </button>
        </section>

        {/* Result Showcase */}
        {result && (
          <section style={{ 
            animation: "scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)", 
            textAlign: "center", 
            background: "linear-gradient(145deg, var(--bg3) 0%, var(--bg2) 100%)",
            border: "2px solid #ffd16633", 
            borderRadius: "32px",
            padding: "40px 20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }}>
            <div style={{ fontSize: "11px", color: "#ffd166", fontWeight: "900", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "15px" }}>Result Found</div>
            <div style={{ fontSize: "42px", fontWeight: "900", color: "var(--text)", letterSpacing: "-1.5px", wordBreak: "break-all" }}>
              {result.to}
            </div>
            <div style={{ fontSize: "15px", color: "var(--muted)", marginTop: "10px", fontWeight: "500" }}>
              Based on your input of <b>{result.from}</b>
            </div>
          </section>
        )}

        

        {/* Educational Footer */}
        <div style={{ padding: "25px", background: "rgba(255, 209, 102, 0.05)", borderRadius: "24px", border: "1px dashed #ffd16666" }}>
          <h4 style={{ margin: "0 0 10px 0", color: "#ffd166", fontSize: "14px" }}>Why accuracy matters?</h4>
          <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>
            Precision is key in engineering and science. Our tool uses standard conversion constants ($1 \text km = 0.621371 \text miles$) to ensure your calculations are as close to perfection as possible.
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </ToolPage>
  );
}