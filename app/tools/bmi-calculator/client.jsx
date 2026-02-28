"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function BmiCalculatorClient() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBmi = () => {
    if (!weight || !height) return;

    // BMI Formula: weight (kg) / [height (m)]^2
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    let color = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "#3b82f6"; // Blue
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal Weight";
      color = "#10b981"; // Green
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
      color = "#f59e0b"; // Orange
    } else {
      category = "Obese";
      color = "#ef4444"; // Red
    }

    setResult({ bmi, category, color });
  };

  return (
    <ToolPage
      title="BMI Calculator"
      icon="⚖️"
      color="#10b981"
      description="Calculate your Body Mass Index (BMI) instantly. A simple tool to check if you are in a healthy weight range."
      currentHref="/tools/bmi-calculator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Controls */}
        <div style={{ 
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, 
          background: "var(--bg2)", padding: "30px", borderRadius: "24px", border: "1px solid var(--border)" 
        }}>
          <div>
            <label className="label" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Weight (kg)</label>
            <input 
              type="number" className="input" value={weight} 
              onChange={(e) => setWeight(e.target.value)} placeholder="e.g. 70"
              style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid var(--border)", background: "var(--bg1)", color: "var(--text)" }}
            />
          </div>
          <div>
            <label className="label" style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Height (cm)</label>
            <input 
              type="number" className="input" value={height} 
              onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 175"
              style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid var(--border)", background: "var(--bg1)", color: "var(--text)" }}
            />
          </div>
          <button 
            className="btn-primary" onClick={calculateBmi}
            style={{ 
              gridColumn: "1 / -1", background: "#10b981", color: "white", padding: "16px",
              fontWeight: "900", marginTop: "10px", borderRadius: "12px", border: "none", cursor: "pointer"
            }}
          >
            Calculate BMI 🚀
          </button>
        </div>

        {/* Dynamic Result Card */}
        {result && (
          <div style={{ 
            background: result.color, padding: "40px 20px", borderRadius: "24px", color: "white", 
            textAlign: "center", boxShadow: `0 10px 30px ${result.color}44`, transition: "all 0.3s ease" 
          }}>
            <div style={{ fontSize: "14px", opacity: 0.9, textTransform: "uppercase", letterSpacing: "1px" }}>Your Score</div>
            <div style={{ fontSize: "64px", fontWeight: "900", lineHeight: "1" }}>{result.bmi}</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "10px" }}>{result.category}</div>
          </div>
        )}

        {/* BMI Table */}
        <div style={{ background: "var(--bg3)", borderRadius: "20px", padding: "20px", border: "1px solid var(--border)" }}>
          <h4 style={{ margin: "0 0 15px 0", fontSize: "14px", textAlign: "center", fontWeight: "700" }}>BMI Categories Guide</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Underweight", range: "< 18.5", color: "#3b82f6" },
              { label: "Normal", range: "18.5 - 24.9", color: "#10b981" },
              { label: "Overweight", range: "25.0 - 29.9", color: "#f59e0b" },
              { label: "Obese", range: "30.0 +", color: "#ef4444" }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px", borderRadius: "8px", background: "var(--bg)", borderLeft: `4px solid ${item.color}` }}>
                <span style={{ fontSize: "13px", fontWeight: "bold" }}>{item.label}</span>
                <span style={{ fontSize: "13px", opacity: 0.7 }}>{item.range}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🚀 SEO CONTENT SECTION */}
        <div style={{ marginTop: "20px", borderTop: "1px solid var(--border)", paddingTop: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>Understanding Your BMI Result</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. 
            It is a widely used screening tool to identify possible weight problems for adults.
          </p>
          <h3 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>The BMI Formula</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            Our calculator uses the standard metric formula:
            <br />
BMI = weight (kg) / height (m)²          </p>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6", marginTop: "10px" }}>
            A high BMI can be an indicator of high body fatness, while a low BMI can be an indicator of being underweight. 
            However, it is important to remember that BMI is not a diagnostic tool.
          </p>
        </div>

        {/* Health Tip */}
        <div style={{ padding: 20, borderRadius: 20, background: "rgba(16, 185, 129, 0.05)", border: "1px dashed rgba(16, 185, 129, 0.4)", display: "flex", gap: 15, alignItems: "center" }}>
          <div style={{ fontSize: 24 }}>🥗</div>
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
            <b>Important:</b> BMI doesn't distinguish between muscle and fat. Athletes often have a high BMI due to muscle mass. Always consult a healthcare provider for medical advice.
          </p>
        </div>
      </div>
    </ToolPage>
  );
}