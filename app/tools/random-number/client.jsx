"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function RandomNumberClient() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [result, setResult] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  const generateRandom = () => {
    if (min >= max) {
      alert("Bhai, Maximum value Minimum se bari honi chahiye!");
      return;
    }

    setIsRolling(true);
    setResult(null);

    // Dramatic delay to build suspense
    setTimeout(() => {
      const minimum = Math.ceil(min);
      const maximum = Math.floor(max);
      const rand = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      setResult(rand);
      setIsRolling(false);
    }, 800);
  };

  return (
    <ToolPage
      title="Random Number Generator"
      icon="🎲"
      color="#8b5cf6"
      description="Need to pick a winner or a lucky number? Our RNG tool provides completely unbiased results in a single click."
      currentHref="/tools/random-number-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Configuration Panel */}
        <section style={{ 
          background: "var(--bg2)", padding: "35px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.1)"
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20, marginBottom: "25px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
                Min Value
              </label>
              <input 
                type="number" className="input" 
                value={min} onChange={(e) => setMin(Number(e.target.value))}
                style={{ background: "var(--bg3)", height: "60px", fontSize: "20px", fontWeight: "900", textAlign: "center" }}
              />
            </div>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
                Max Value
              </label>
              <input 
                type="number" className="input" 
                value={max} onChange={(e) => setMax(Number(e.target.value))}
                style={{ background: "var(--bg3)", height: "60px", fontSize: "20px", fontWeight: "900", textAlign: "center" }}
              />
            </div>
          </div>
          
          <button 
            className="btn-primary" 
            onClick={generateRandom}
            disabled={isRolling}
            style={{ 
              background: "#8b5cf6", width: "100%", height: "65px", fontSize: "18px", fontWeight: "900",
              boxShadow: "0 8px 25px -5px rgba(139, 92, 246, 0.5)", borderRadius: "20px"
            }}
          >
            {isRolling ? "🎲 ROLLING THE DICE..." : "GENERATE NUMBER ✨"}
          </button>
        </section>

        {/* Big Result Display */}
        <section style={{ 
          height: "280px", 
          background: "linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)", 
          borderRadius: "40px", 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          border: "4px solid #4338ca",
          position: "relative",
          overflow: "hidden",
          boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)"
        }}>
          <div style={{ position: "absolute", top: 20, left: 20, fontSize: 100, opacity: 0.05, filter: "grayscale(1)" }}>🔢</div>
          <div style={{ position: "absolute", bottom: 20, right: 20, fontSize: 100, opacity: 0.05, filter: "grayscale(1)" }}>🎲</div>

          {result !== null && !isRolling ? (
            <div style={{ textAlign: "center" }}>
              <div style={{ 
                fontSize: "120px", 
                fontWeight: "950", 
                color: "white", 
                lineHeight: "1",
                textShadow: "0 0 30px rgba(99, 102, 241, 0.6)",
                animation: "popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              }}>
                {result}
              </div>
              <div style={{ color: "#818cf8", fontWeight: "800", marginTop: "10px", fontSize: "14px", letterSpacing: "2px" }}>
                YOUR LUCKY NUMBER
              </div>
            </div>
          ) : isRolling ? (
            <div className="custom-loader"></div>
          ) : (
            <div style={{ color: "#4338ca", fontSize: "16px", fontWeight: "900", opacity: 0.8 }}>
              READY TO ROLL?
            </div>
          )}
        </section>

        {/* Stats / Trivia Card */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          <div style={{ padding: "25px", borderRadius: "28px", background: "var(--bg3)", border: "1px solid var(--border)" }}>
            <h4 style={{ fontWeight: "900", marginBottom: "8px", color: "#8b5cf6" }}>Fair & Fast</h4>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: "1.6" }}>
              Our generator works entirely client-side. No server lag, no rigged results. Just pure math.
            </p>
          </div>
          <div style={{ padding: "25px", borderRadius: "28px", background: "var(--bg3)", border: "1px solid var(--border)" }}>
            <h4 style={{ fontWeight: "900", marginBottom: "8px", color: "#8b5cf6" }}>Custom Ranges</h4>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: "1.6" }}>
              From a coin flip (1-2) to massive lottery ranges, our generator handles it all seamlessly.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes popIn {
          0% { transform: scale(0.3); opacity: 0; filter: blur(10px); }
          100% { transform: scale(1); opacity: 1; filter: blur(0); }
        }
        .custom-loader {
          width: 80px;
          height: 80px;
          border: 8px solid #4338ca22;
          border-top: 8px solid #8b5cf6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </ToolPage>
  );
}