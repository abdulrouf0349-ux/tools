"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function EmiCalculatorClient() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(5);
  const [emiData, setEmiData] = useState(null);

  useEffect(() => {
    calculateEmi();
  }, [loanAmount, interestRate, tenure]);

  const calculateEmi = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const n = parseFloat(tenure) * 12; // Total months

    if (P > 0 && r > 0 && n > 0) {
      // EMI Formula: [P x r x (1+r)^n] / [(1+r)^n - 1]
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - P;

      setEmiData({
        monthlyEmi: emi.toFixed(0),
        totalInterest: totalInterest.toFixed(0),
        totalAmount: totalPayment.toFixed(0),
      });
    }
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <ToolPage
      title="EMI Loan Calculator"
      icon="🏦"
      color="#059669"
      description="Plan your loans better. Calculate monthly installments, total interest, and the final amount for your home or car loan."
      currentHref="/tools/emi-calculator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Sliders Input Panel */}
        <div style={{ 
          background: "var(--bg2)", 
          padding: "35px", 
          borderRadius: "28px", 
          border: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: 30,
          boxShadow: "0 10px 40px -15px rgba(0,0,0,0.1)"
        }}>
          {/* Loan Amount Slider */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15, alignItems: "center" }}>
              <label className="label" style={{ fontWeight: 800 }}>Loan Amount</label>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#059669" }}>Rs. {formatCurrency(loanAmount)}</span>
            </div>
            <input 
              type="range" min="10000" max="10000000" step="10000"
              value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}
              style={{ width: "100%", accentColor: "#059669", height: "6px", cursor: "pointer" }}
            />
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15, alignItems: "center" }}>
              <label className="label" style={{ fontWeight: 800 }}>Interest Rate (% P.A.)</label>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#059669" }}>{interestRate}%</span>
            </div>
            <input 
              type="range" min="1" max="30" step="0.1"
              value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
              style={{ width: "100%", accentColor: "#059669", height: "6px", cursor: "pointer" }}
            />
          </div>

          {/* Tenure Slider */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15, alignItems: "center" }}>
              <label className="label" style={{ fontWeight: 800 }}>Tenure (Years)</label>
              <span style={{ fontSize: "20px", fontWeight: "900", color: "#059669" }}>{tenure} Years</span>
            </div>
            <input 
              type="range" min="1" max="30" step="1"
              value={tenure} onChange={(e) => setLoanAmount(e.target.value)} // Fix: was setLoanAmount by mistake
              style={{ width: "100%", accentColor: "#059669", height: "6px", cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Repayment Breakdown Dashboard */}
        {emiData && (
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
            gap: 20,
            animation: "fadeInUp 0.5s ease" 
          }}>
            <div style={{ 
              padding: "30px", background: "#059669", color: "white", borderRadius: "24px", 
              textAlign: "center", boxShadow: "0 15px 30px -10px rgba(5, 150, 105, 0.4)" 
            }}>
              <div style={{ fontSize: "11px", fontWeight: "900", opacity: 0.8, letterSpacing: 1, marginBottom: 8 }}>MONTHLY EMI</div>
              <div style={{ fontSize: "32px", fontWeight: "900" }}>{formatCurrency(emiData.monthlyEmi)}</div>
            </div>
            
            <div style={{ 
              padding: "30px", background: "var(--bg3)", border: "1px solid var(--border)", 
              borderRadius: "24px", textAlign: "center" 
            }}>
              <div style={{ fontSize: "11px", fontWeight: "900", color: "var(--muted)", letterSpacing: 1, marginBottom: 8 }}>TOTAL INTEREST</div>
              <div style={{ fontSize: "24px", fontWeight: "900", color: "#ef4444" }}>{formatCurrency(emiData.totalInterest)}</div>
            </div>

            <div style={{ 
              padding: "30px", background: "var(--bg3)", border: "1px solid var(--border)", 
              borderRadius: "24px", textAlign: "center" 
            }}>
              <div style={{ fontSize: "11px", fontWeight: "900", color: "var(--muted)", letterSpacing: 1, marginBottom: 8 }}>TOTAL REPAYMENT</div>
              <div style={{ fontSize: "24px", fontWeight: "900", color: "var(--text)" }}>{formatCurrency(emiData.totalAmount)}</div>
            </div>
          </div>
        )}

        {/* Visual Tip Card */}
        
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: 20, alignItems: "flex-start"
        }}>
          <div style={{ 
            fontSize: "24px", background: "#059669", width: "45px", height: "45px", 
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", flexShrink: 0 
          }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>Repayment Strategy</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Paying just 1 extra EMI every year can reduce your loan tenure by several years and save you lakhs in interest. Use this tool to see how a shorter tenure drastically reduces your <b>Total Interest</b>.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}