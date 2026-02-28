"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function NumberExtractorClient() {
  const [text, setText] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [copied, setCopied] = useState(false);
  const [settings, setSettings] = useState({
    onlyIntegers: false,
    removeDuplicates: true
  });

  const extractNumbers = () => {
    // Regex for integers only or decimals/floats
    const regex = settings.onlyIntegers ? /\b\d+\b/g : /-?\d+(\.\d+)?/g;
    const found = text.match(regex) || [];
    
    let result = settings.removeDuplicates ? [...new Set(found)] : found;
    setNumbers(result);
  };

  const copyToClipboard = () => {
    if (numbers.length === 0) return;
    navigator.clipboard.writeText(numbers.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Number Extractor"
      icon="🔢"
      color="#0ea5e9"
      description="Instantly pull numerical values from documents, emails, or code. Filter for integers or include decimals and negative numbers."
      currentHref="/tools/number-extractor"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Section */}
        <section style={{ 
          background: "var(--bg2)", padding: "35px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.05)"
        }}>
          <label className="label" style={{ fontWeight: "800", marginBottom: "15px", display: "block" }}>Source Text</label>
          <textarea 
            className="input" 
            rows="8"
            placeholder="Paste your text here... e.g. Order #5021 for $120.50. Call +92-300-1234567"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              resize: "none", fontSize: "16px", background: "var(--bg3)", 
              borderRadius: "20px", border: "1px solid var(--border)", padding: "20px" 
            }}
          ></textarea>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: 25, margin: "25px 0" }}>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>
              <input 
                type="checkbox" 
                style={{ width: "18px", height: "18px", accentColor: "#0ea5e9" }}
                checked={settings.onlyIntegers} 
                onChange={() => setSettings({...settings, onlyIntegers: !settings.onlyIntegers})}
              />
              Whole Numbers Only
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>
              <input 
                type="checkbox" 
                style={{ width: "18px", height: "18px", accentColor: "#0ea5e9" }}
                checked={settings.removeDuplicates} 
                onChange={() => setSettings({...settings, removeDuplicates: !settings.removeDuplicates})}
              />
              Remove Duplicates
            </label>
          </div>

          <button 
            className="btn-primary" 
            onClick={extractNumbers}
            style={{ 
              background: "#0ea5e9", width: "100%", padding: "18px", 
              borderRadius: "18px", fontWeight: "900", letterSpacing: "0.5px"
            }}
          >
            EXTRACT NUMBERS 🚀
          </button>
        </section>

        {/* Results Section */}
        {numbers.length > 0 && (
          <section style={{ animation: "slideUp 0.4s ease-out" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "900", textTransform: "uppercase", color: "var(--muted)" }}>
                Found {numbers.length} unique items
              </h3>
              <button 
                onClick={copyToClipboard}
                style={{ 
                  background: copied ? "#10b981" : "var(--bg3)", 
                  border: "1px solid " + (copied ? "#10b981" : "var(--border)"),
                  color: copied ? "white" : "#0ea5e9",
                  padding: "10px 20px", borderRadius: "14px", cursor: "pointer", fontWeight: "800", transition: "0.2s"
                }}
              >
                {copied ? "✓ COPIED" : "COPY CSV"}
              </button>
            </div>
            
            <div style={{ 
              display: "flex", flexWrap: "wrap", gap: 12, padding: "30px",
              background: "var(--bg3)", borderRadius: "28px", border: "1px solid var(--border)",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.05)"
            }}>
              {numbers.map((num, i) => (
                <span key={i} style={{ 
                  padding: "8px 16px", background: "white", color: "#0ea5e9", 
                  borderRadius: "12px", fontFamily: "'Fira Code', monospace", 
                  fontSize: "15px", fontWeight: "700", border: "1px solid #0ea5e922",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
                }}>
                  {num}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Use Cases Section */}
        <section style={{ 
          padding: "40px", borderRadius: "35px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "20px" }}>Common Use Cases</h2>
          
          

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: "20px" }}>
            <div style={{ background: "var(--bg2)", padding: "20px", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#0ea5e9", marginBottom: "8px" }}>E-commerce</h4>
              <p style={{ fontSize: "13px", margin: 0, opacity: 0.8 }}>Quickly extract SKU numbers or product prices from descriptions.</p>
            </div>
            <div style={{ background: "var(--bg2)", padding: "20px", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#0ea5e9", marginBottom: "8px" }}>Phone Numbers</h4>
              <p style={{ fontSize: "13px", margin: 0, opacity: 0.8 }}>Scrape contact numbers from unformatted text files or emails.</p>
            </div>
            <div style={{ background: "var(--bg2)", padding: "20px", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#0ea5e9", marginBottom: "8px" }}>Financial Data</h4>
              <p style={{ fontSize: "13px", margin: 0, opacity: 0.8 }}>Pull currency values and transaction amounts from bank statements.</p>
            </div>
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}