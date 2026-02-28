"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function GstCalculatorClient() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState(18);
  const [gstType, setGstType] = useState("exclusive"); // exclusive or inclusive
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateGst();
  }, [amount, gstRate, gstType]);

  const calculateGst = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      setResult(null);
      return;
    }

    let gstAmount, netAmount, totalAmount;

    if (gstType === "exclusive") {
      // Amount is without GST
      gstAmount = (amt * gstRate) / 100;
      netAmount = amt;
      totalAmount = amt + gstAmount;
    } else {
      // Amount is already including GST
      gstAmount = amt - (amt * (100 / (100 + gstRate)));
      netAmount = amt - gstAmount;
      totalAmount = amt;
    }

    setResult({
      gstAmount: gstAmount.toFixed(2),
      netAmount: netAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    });
  };

  const formatNum = (num) => new Intl.NumberFormat('en-IN').format(num);

  return (
    <ToolPage
      title="GST Calculator"
      icon="💰"
      color="#0f172a"
      description="Simplify your business accounting. Calculate Goods and Services Tax (GST) inclusive or exclusive amounts with precision."
      currentHref="/tools/gst-calculator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Control Panel */}
        <div style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "28px", 
          border: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: 25,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
        }}>
          {/* Amount Input */}
          <div>
            <label className="label" style={{ fontWeight: 800, marginBottom: 12 }}>Transaction Amount (Rs.)</label>
            <input 
              type="number" 
              className="input" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 5000"
              style={{ 
                fontSize: "18px", padding: "15px", borderRadius: "16px", 
                background: "var(--bg1)", border: "1px solid var(--border)", color: "var(--text)"
              }}
            />
          </div>

          {/* Tax Type Toggle */}
          <div>
            <label className="label" style={{ fontWeight: 800, marginBottom: 12 }}>Calculation Method</label>
            <div style={{ 
              display: "flex", background: "var(--bg3)", padding: "6px", 
              borderRadius: "18px", border: "1px solid var(--border)" 
            }}>
              {["exclusive", "inclusive"].map((type) => (
                <button 
                  key={type}
                  onClick={() => setGstType(type)}
                  style={{ 
                    flex: 1, padding: "12px", borderRadius: "14px", border: "none",
                    background: gstType === type ? "#0f172a" : "transparent",
                    color: gstType === type ? "white" : "var(--muted)",
                    cursor: "pointer", fontWeight: "900", transition: "0.3s",
                    textTransform: "capitalize", fontSize: "14px"
                  }}
                >
                  GST {type}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Rate Selection */}
          <div>
            <label className="label" style={{ fontWeight: 800, marginBottom: 12 }}>Select GST Rate (%)</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
              {[5, 12, 18, 28].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setGstRate(rate)}
                  style={{
                    padding: "12px", borderRadius: "12px", border: "1px solid var(--border)",
                    background: gstRate === rate ? "rgba(15, 23, 42, 0.1)" : "var(--bg3)",
                    color: gstRate === rate ? "#0f172a" : "var(--text)",
                    borderColor: gstRate === rate ? "#0f172a" : "var(--border)",
                    fontWeight: "800", cursor: "pointer", transition: "0.2s"
                  }}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Breakdown Dashboard */}
        {result ? (
          <div style={{ 
            background: "#0f172a", color: "white", padding: "35px", 
            borderRadius: "28px", boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.3)",
            animation: "fadeInUp 0.5s ease"
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", opacity: 0.8 }}>
                <span style={{ fontSize: "14px", fontWeight: "600" }}>Net Amount (Base)</span>
                <span style={{ fontSize: "18px", fontWeight: "700" }}>₹ {formatNum(result.netAmount)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", opacity: 0.8 }}>GST Amount ({gstRate}%)</span>
                <span style={{ fontSize: "18px", fontWeight: "700", color: "#38bdf8" }}>+ ₹ {formatNum(result.gstAmount)}</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", margin: "10px 0" }}></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "16px", fontWeight: "900" }}>Total Amount</span>
                <span style={{ fontSize: "28px", fontWeight: "900", color: "#22c55e" }}>₹ {formatNum(result.totalAmount)}</span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ 
            padding: "50px", textAlign: "center", border: "2px dashed var(--border)", 
            borderRadius: "28px", color: "var(--muted)", background: "var(--bg3)"
          }}>
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>💹</div>
            <p style={{ margin: 0, fontWeight: "600" }}>Enter base amount to generate tax breakdown</p>
          </div>
        )}

        {/* Informational SEO Component */}
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: 20, alignItems: "flex-start"
        }}>
          <div style={{ 
            fontSize: "22px", background: "#0f172a", width: "45px", height: "45px", 
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", flexShrink: 0 
          }}>🧾</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>Taxation Guide</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              In <b>Inclusive</b> mode, we reverse-calculate to find the tax already baked into the price. This is useful for retail products. <b>Exclusive</b> mode adds tax on top of your base cost, standard for B2B services.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}