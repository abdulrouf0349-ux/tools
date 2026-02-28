"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function BinaryDecimalClient() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [error, setError] = useState("");

  const handleBinaryChange = (val) => {
    if (/^[0-1]*$/.test(val)) {
      setBinary(val);
      setError("");
      if (val === "") {
        setDecimal("");
      } else {
        setDecimal(parseInt(val, 2).toString());
      }
    } else {
      setError("Binary can only contain 0 and 1");
    }
  };

  const handleDecimalChange = (val) => {
    if (/^\d*$/.test(val)) {
      setDecimal(val);
      setError("");
      if (val === "") {
        setBinary("");
      } else {
        setBinary(Number(val).toString(2));
      }
    } else {
      setError("Decimal can only contain numbers 0-9");
    }
  };

  return (
    <ToolPage
      title="Binary to Decimal Converter"
      icon="01"
      color="#22c55e"
      description="Convert numbers between Binary (Base-2) and Decimal (Base-10) instantly. Perfect for computer science and digital logic tasks."
      currentHref="/tools/binary-decimal"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Main Interface */}
        <div style={{ background: "#052e16", padding: "30px", borderRadius: "28px", border: "2px solid #22c55e", boxShadow: "0 10px 40px rgba(34, 197, 94, 0.2)" }}>
          <div style={{ marginBottom: 25 }}>
            <label className="label" style={{ color: "#4ade80", fontWeight: "bold", display: "block", marginBottom: 8 }}>Binary (Base 2)</label>
            <input className="input" value={binary} onChange={(e) => handleBinaryChange(e.target.value)} placeholder="e.g. 101010"
              style={{ width: "100%", background: "#022c22", border: "1px solid #22c55e44", color: "#22c55e", fontSize: "24px", fontFamily: "monospace", letterSpacing: "2px", padding: "12px", borderRadius: "12px", outline: "none" }}
            />
          </div>

          <div style={{ textAlign: "center", marginBottom: 25, color: "#22c55e", opacity: 0.5, fontSize: 24 }}>⇅</div>

          <div>
            <label className="label" style={{ color: "#4ade80", fontWeight: "bold", display: "block", marginBottom: 8 }}>Decimal (Base 10)</label>
            <input className="input" value={decimal} onChange={(e) => handleDecimalChange(e.target.value)} placeholder="e.g. 42"
              style={{ width: "100%", background: "#022c22", border: "1px solid #22c55e44", color: "#22c55e", fontSize: "24px", fontFamily: "monospace", padding: "12px", borderRadius: "12px", outline: "none" }}
            />
          </div>

          {error && <div style={{ marginTop: 15, color: "#f87171", fontSize: 12, textAlign: "center" }}>⚠️ {error}</div>}
        </div>

        {/* Quick Reference Grid */}
        <div style={{ background: "var(--bg3)", padding: 20, borderRadius: 20, border: "1px solid var(--border)" }}>
          <h4 style={{ margin: "0 0 15px 0", fontSize: "14px", fontWeight: "700" }}>🔍 Binary to Decimal Table (4-bit)</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, textAlign: "center" }}>
            {[
              {b: "0001", d: "1"}, {b: "0010", d: "2"}, {b: "0100", d: "4"}, {b: "1000", d: "8"},
              {b: "0011", d: "3"}, {b: "0101", d: "5"}, {b: "0110", d: "6"}, {b: "1111", d: "15"}
            ].map((item, i) => (
              <div key={i} style={{ padding: 10, background: "var(--bg1)", borderRadius: 12, fontSize: 11, border: "1px solid var(--border)" }}>
                <div style={{ color: "#22c55e", fontWeight: "bold" }}>{item.b}</div>
                <div style={{ opacity: 0.7 }}>= {item.d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 🚀 SEO CONTENT SECTION */}
        <div style={{ marginTop: "20px", borderTop: "1px solid var(--border)", paddingTop: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>Understanding Binary and Decimal Systems</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            The <strong>Binary system</strong> is the language of computers, using only 0 and 1. The <strong>Decimal system</strong> is what humans use daily (0-9). 
            Our converter allows you to switch between these two seamlessly, which is essential for <strong>subnetting</strong>, 
            <strong>bitwise operations</strong>, and understanding <strong>ASCII codes</strong>.
          </p>

          <h3 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Binary to Decimal Conversion Formula:</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            To convert manually, use the positional weight method. For example, for 1011:
            <br />
            $$(1 \times 2^3) + (0 \times 2^2) + (1 \times 2^1) + (1 \times 2^0) = 8 + 0 + 2 + 1 = 11$$
          </p>
        </div>

        {/* Knowledge Footer */}
        <div style={{ padding: 20, borderRadius: 20, background: "rgba(34, 197, 94, 0.05)", border: "1px dashed rgba(34, 197, 94, 0.4)", display: "flex", gap: 15, alignItems: "center" }}>
          <div style={{ fontSize: 24 }}>💻</div>
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
            <b>Byte Fact:</b> 8 binary digits (bits) make one <b>Byte</b>. The maximum decimal value of a byte is 255 (11111111).
          </p>
        </div>
      </div>
    </ToolPage>
  );
}