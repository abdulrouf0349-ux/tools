"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function PercentageCalculatorClient() {
  // Scenario 1: What is X% of Y?
  const [val1_1, setVal1_1] = useState("");
  const [val1_2, setVal1_2] = useState("");
  const [res1, setRes1] = useState(null);

  // Scenario 2: X is what % of Y?
  const [val2_1, setVal2_1] = useState("");
  const [val2_2, setVal2_2] = useState("");
  const [res2, setRes2] = useState(null);

  const calc1 = () => {
    if (val1_1 && val1_2) {
        const result = (parseFloat(val1_1) / 100) * parseFloat(val1_2);
        setRes1(result);
    }
  };

  const calc2 = () => {
    if (val2_1 && val2_2) {
        const result = (parseFloat(val2_1) / parseFloat(val2_2)) * 100;
        setRes2(result);
    }
  };

  return (
    <ToolPage
      title="Percentage Calculator"
      icon="🔢"
      color="#6366f1"
      description="Calculate math percentages instantly. Find out the percentage of a value or what percentage one number is of another."
      currentHref="/tools/percentage-calculator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Scenario 1: What is X% of Y? */}
        <section style={{ 
          background: "var(--bg2)", padding: "35px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.05)"
        }}>
          <h2 style={{ margin: "0 0 20px 0", fontSize: "16px", fontWeight: "900", color: "#6366f1", textTransform: "uppercase" }}>
            1. Find the Value (X% of Y)
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 15, flexWrap: "wrap" }}>
            <span style={{ fontWeight: "700" }}>What is</span>
            <input 
              type="number" className="input" style={{ width: 110, fontSize: "18px", textAlign: "center", background: "var(--bg3)" }} 
              placeholder="15" value={val1_1} onChange={(e) => setVal1_1(e.target.value)}
            />
            <span style={{ fontWeight: "700" }}>% of</span>
            <input 
              type="number" className="input" style={{ width: 140, fontSize: "18px", textAlign: "center", background: "var(--bg3)" }} 
              placeholder="1200" value={val1_2} onChange={(e) => setVal1_2(e.target.value)}
            />
            <button 
                className="btn-primary" 
                onClick={calc1} 
                style={{ background: "#6366f1", padding: "12px 25px", borderRadius: "14px", fontWeight: "800" }}
            >
                Calculate
            </button>
          </div>

          {res1 !== null && (
            <div style={{ 
                marginTop: "25px", padding: "20px", borderRadius: "18px", background: "#6366f111", 
                border: "1px solid #6366f133", animation: "slideUp 0.3s ease-out" 
            }}>
              <span style={{ fontSize: "14px", color: "var(--muted)", display: "block", marginBottom: "5px" }}>Calculated Result:</span>
              <span style={{ fontSize: "32px", fontWeight: "900", color: "#6366f1" }}>{res1.toLocaleString()}</span>
            </div>
          )}
        </section>

        {/* Scenario 2: X is what % of Y? */}
        <section style={{ 
          background: "var(--bg2)", padding: "35px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.05)"
        }}>
          <h2 style={{ margin: "0 0 20px 0", fontSize: "16px", fontWeight: "900", color: "#6366f1", textTransform: "uppercase" }}>
            2. Find the Percentage (X is ?% of Y)
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 15, flexWrap: "wrap" }}>
            <input 
              type="number" className="input" style={{ width: 110, fontSize: "18px", textAlign: "center", background: "var(--bg3)" }} 
              placeholder="45" value={val2_1} onChange={(e) => setVal2_1(e.target.value)}
            />
            <span style={{ fontWeight: "700" }}>is what % of</span>
            <input 
              type="number" className="input" style={{ width: 140, fontSize: "18px", textAlign: "center", background: "var(--bg3)" }} 
              placeholder="250" value={val2_2} onChange={(e) => setVal2_2(e.target.value)}
            />
            <button 
                className="btn-primary" 
                onClick={calc2} 
                style={{ background: "#6366f1", padding: "12px 25px", borderRadius: "14px", fontWeight: "800" }}
            >
                Calculate
            </button>
          </div>

          {res2 !== null && (
            <div style={{ 
                marginTop: "25px", padding: "20px", borderRadius: "18px", background: "#6366f111", 
                border: "1px solid #6366f133", animation: "slideUp 0.3s ease-out" 
            }}>
              <span style={{ fontSize: "14px", color: "var(--muted)", display: "block", marginBottom: "5px" }}>Calculated Result:</span>
              <span style={{ fontSize: "32px", fontWeight: "900", color: "#6366f1" }}>{res2.toFixed(2)}%</span>
            </div>
          )}
        </section>

        {/* Math Visual & Tip Card */}
        <section style={{ 
          padding: "30px", borderRadius: "35px", background: "var(--bg3)", 
          display: "flex", flexDirection: "column", gap: 20, border: "1px dashed var(--border)"
        }}>
          <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
            <div style={{ fontSize: "28px" }}>🧠</div>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--text)", lineHeight: "1.6", fontWeight: "600" }}>
              Quick Tip: To find a 10% discount, just move the decimal point one place to the left!
            </p>
          </div>

          

          <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>
            Percentages represent a part of a hundred. For example, <b>$$50\%$$</b> literally means <b>50 out of 100</b>. 
            When calculating, we use the formula: $$(Value / Total) \times 100$$.
          </p>
        </section>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}