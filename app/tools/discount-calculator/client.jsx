"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function DiscountCalculatorClient() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [taxPercent, setTaxPercent] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateDiscount();
  }, [originalPrice, discountPercent, taxPercent]);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent) || 0;
    const tax = parseFloat(taxPercent) || 0;

    if (isNaN(price) || price <= 0) {
      setResult(null);
      return;
    }

    const savings = (price * discount) / 100;
    const priceAfterDiscount = price - savings;
    const taxAmount = (priceAfterDiscount * tax) / 100;
    const finalPrice = priceAfterDiscount + taxAmount;
    const totalOffPercent = price > 0 ? (((price - finalPrice) / price) * 100).toFixed(1) : 0;

    setResult({
      savings: savings.toFixed(2),
      taxAmount: taxAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
      effectiveDiscount: totalOffPercent
    });
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <ToolPage
      title="Discount Calculator"
      icon="🏷️"
      color="#f43f5e"
      description="Quickly calculate the sale price of items. Find out exactly how much you save and the final price after tax."
      currentHref="/tools/discount-calculator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Card */}
        <div style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "28px", 
          border: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 20,
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
        }}>
          <div>
            <label className="label" style={{ fontWeight: 700, marginBottom: 10, display: "block" }}>Original Price</label>
            <div style={{ position: "relative" }}>
              <input 
                type="number" className="input" 
                value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="0.00"
                style={{ fontSize: "18px", padding: "14px", paddingLeft: "45px", borderRadius: "14px", width: "100%", background: "var(--bg1)" }}
              />
              <span style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", fontWeight: "bold", color: "var(--muted)" }}>$</span>
            </div>
          </div>
          <div>
            <label className="label" style={{ fontWeight: 700, marginBottom: 10, display: "block" }}>Discount (%)</label>
            <input 
              type="number" className="input" 
              value={discountPercent} onChange={(e) => setDiscountPercent(e.target.value)}
              placeholder="20"
              style={{ fontSize: "18px", padding: "14px", borderRadius: "14px", width: "100%", background: "var(--bg1)" }}
            />
          </div>
          <div>
            <label className="label" style={{ fontWeight: 700, marginBottom: 10, display: "block" }}>Tax (%)</label>
            <input 
              type="number" className="input" 
              value={taxPercent} onChange={(e) => setTaxPercent(e.target.value)}
              placeholder="0"
              style={{ fontSize: "18px", padding: "14px", borderRadius: "14px", width: "100%", background: "var(--bg1)" }}
            />
          </div>
        </div>

        {/* Dynamic Receipt View */}
        {result ? (
          <div style={{ 
            background: "var(--bg2)", 
            border: "2px dashed #f43f5e", 
            padding: "35px", 
            borderRadius: "28px",
            animation: "fadeIn 0.5s ease",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Savings Badge */}
            <div style={{ position: "absolute", top: 0, right: 0, background: "#f43f5e", color: "#white", padding: "8px 20px", borderRadius: "0 0 0 20px", fontSize: "12px", fontWeight: "900", color: "white" }}>
              SAVING {result.effectiveDiscount}%
            </div>

            <div style={{ textAlign: "center", marginBottom: 30 }}>
              <span style={{ fontSize: 11, fontWeight: "900", textTransform: "uppercase", letterSpacing: 2, color: "var(--muted)" }}>Final Sale Price</span>
              <div style={{ fontSize: 48, fontWeight: "900", color: "#f43f5e" }}>${formatCurrency(result.finalPrice)}</div>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px" }}>
                <span style={{ color: "var(--muted)" }}>Original Listing:</span>
                <span style={{ fontWeight: "700", textDecoration: "line-through" }}>${formatCurrency(originalPrice)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px" }}>
                <span style={{ color: "var(--muted)" }}>Total Discount:</span>
                <span style={{ fontWeight: "800", color: "#10b981" }}>- ${formatCurrency(result.savings)}</span>
              </div>
              {parseFloat(result.taxAmount) > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px" }}>
                  <span style={{ color: "var(--muted)" }}>Sales Tax ({taxPercent}%):</span>
                  <span style={{ fontWeight: "700" }}>+ ${formatCurrency(result.taxAmount)}</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ 
            padding: "60px 20px", textAlign: "center", border: "2px dashed var(--border)", 
            borderRadius: "32px", color: "var(--muted)", background: "var(--bg1)" 
          }}>
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>🏷️</div>
            <p style={{ margin: 0, fontWeight: "600" }}>Enter price and discount to see the deal!</p>
          </div>
        )}

        {/* Shopping Wisdom */}
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: 20, alignItems: "flex-start"
        }}>
          <div style={{ 
            fontSize: "24px", background: "#f43f5e", width: "45px", height: "45px", 
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", flexShrink: 0 
          }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>Tax Calculation Tip</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Our tool applies the sales tax <b>after</b> the discount has been deducted. This is how most retail stores calculate the final bill, ensuring you only pay tax on the actual money spent.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}