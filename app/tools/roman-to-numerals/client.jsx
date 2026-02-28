"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function RomanNumeralsClient() {
  const [roman, setRoman] = useState("MMXXVI");
  const [numeral, setNumeral] = useState("2026");
  const [error, setError] = useState("");

  const romanMap = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40,
    X: 10, IX: 9, V: 5, IV: 4, I: 1
  };

  const toRoman = (num) => {
    let n = parseInt(num);
    if (isNaN(n) || n <= 0 || n > 3999) return "";
    let result = "";
    for (let key in romanMap) {
      while (n >= romanMap[key]) {
        result += key;
        n -= romanMap[key];
      }
    }
    return result;
  };

  const toNumeral = (str) => {
    let s = str.toUpperCase();
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const current = romanMap[s[i]];
      const next = romanMap[s[i + 1]];
      if (next > current) {
        result += (next - current);
        i++;
      } else {
        result += current;
      }
    }
    return isNaN(result) ? "" : result;
  };

  const handleNumeralChange = (val) => {
    setNumeral(val);
    if (val === "") {
      setRoman("");
      setError("");
    } else if (val > 3999) {
      setError("Roman numerals usually stop at 3999");
      setRoman("");
    } else if (val < 1) {
      setError("Roman system has no symbols for 0 or negative numbers");
      setRoman("");
    } else {
      setRoman(toRoman(val));
      setError("");
    }
  };

  const handleRomanChange = (val) => {
    const upperVal = val.toUpperCase().trim();
    if (/^[IVXLCDM]*$/.test(upperVal)) {
      setRoman(upperVal);
      const calculated = toNumeral(upperVal);
      setNumeral(calculated);
      setError("");
    } else {
      setError("Use only Roman symbols: I, V, X, L, C, D, M");
    }
  };

  return (
    <ToolPage
      title="Roman Numerals Converter"
      icon="🏛️"
      color="#b45309"
      description="Translate classic Arabic numbers into ancient Roman symbols and vice-versa. Perfect for history, watch design, and monumental dates."
      currentHref="/tools/roman-numerals-converter"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Converter Shell */}
        <section style={{ 
          background: "#fffbeb", padding: "40px", borderRadius: "35px", 
          border: "2px solid #f59e0b", boxShadow: "0 20px 40px -15px rgba(180, 83, 9, 0.15)",
          position: "relative"
        }}>
          {/* Decimal Input */}
          <div style={{ marginBottom: 25 }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#b45309", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px", display: "block" }}>
              Arabic Number (1 - 3999)
            </label>
            <input 
              type="number"
              className="input" 
              value={numeral}
              onChange={(e) => handleNumeralChange(e.target.value)}
              placeholder="e.g. 2026"
              style={{ 
                background: "white", border: "1px solid #fcd34d", color: "#78350f", 
                fontSize: "24px", fontWeight: "800", height: "65px", padding: "0 25px"
              }}
            />
          </div>

          <div style={{ 
            display: "flex", alignItems: "center", justifyContent: "center", 
            margin: "10px 0", color: "#f59e0b", fontSize: "32px", fontWeight: "100" 
          }}>
            <span style={{ transform: "rotate(90deg)" }}>⇄</span>
          </div>

          {/* Roman Input */}
          <div style={{ marginTop: 10 }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#b45309", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px", display: "block" }}>
              Roman Numeral
            </label>
            <input 
              className="input" 
              value={roman}
              onChange={(e) => handleRomanChange(e.target.value)}
              placeholder="e.g. MMXXVI"
              style={{ 
                background: "white", border: "1px solid #fcd34d", color: "#78350f", 
                fontSize: "28px", fontFamily: "'Times New Roman', serif", 
                letterSpacing: "8px", height: "70px", padding: "0 25px", textAlign: "center",
                textShadow: "1px 1px 0px rgba(180, 83, 9, 0.1)"
              }}
            />
          </div>

          {error && (
            <div style={{ 
              marginTop: "20px", padding: "12px", background: "#fee2e2", 
              borderRadius: "12px", color: "#b91c1c", fontSize: "13px", 
              textAlign: "center", fontWeight: "700" 
            }}>
              ⚠️ {error}
            </div>
          )}
        </section>

        {/* Symbols Chart */}
        

[Image of Roman Numeral Chart 1 to 1000]

        <section style={{ 
          background: "var(--bg3)", padding: "25px", borderRadius: "28px", 
          border: "1px solid var(--border)" 
        }}>
          <h4 style={{ margin: "0 0 20px 0", fontSize: "13px", fontWeight: "900", color: "#b45309", textTransform: "uppercase", textAlign: "center" }}>
            Symbol Reference Guide
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))", gap: 12 }}>
            {Object.entries(romanMap).filter(([k]) => k.length === 1).map(([sym, val]) => (
              <div key={sym} style={{ 
                textAlign: "center", padding: "15px 10px", background: "var(--bg2)", 
                borderRadius: "15px", border: "1px solid var(--border)",
                transition: "transform 0.2s"
              }}>
                <div style={{ fontSize: "20px", fontWeight: "950", color: "#b45309", fontFamily: "serif" }}>{sym}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Tip */}
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "#b453090a", 
          display: "flex", gap: 20, alignItems: "flex-start", border: "1px dashed #b4530944" 
        }}>
          <div style={{ fontSize: "32px" }}>🏛️</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "15px", fontWeight: "900", color: "#78350f" }}>Did You Know?</h4>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
              Roman numerals are read from left to right. However, if a smaller value symbol appears before a larger one (like <b>IV</b> for 4), it is subtracted. Otherwise, they are added together!
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}