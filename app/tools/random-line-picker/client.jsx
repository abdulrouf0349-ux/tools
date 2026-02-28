"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function RandomLinePickerClient() {
  const [text, setText] = useState("");
  const [winners, setWinners] = useState([]);
  const [pickCount, setPickCount] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);

  const pickRandomLines = () => {
    const lines = text.split(/\r?\n/).filter(line => line.trim() !== "");
    
    if (lines.length === 0) {
      alert("Yara, pehle list mein kuch names ya lines toh enter karein!");
      return;
    }

    setIsSpinning(true);
    
    // Aesthetic delay for the "Suspense" effect
    setTimeout(() => {
      const shuffled = [...lines].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.min(pickCount, lines.length));
      
      setWinners(selected);
      setIsSpinning(false);
    }, 1200);
  };

  const clearAll = () => {
    if (confirm("Clear everything?")) {
      setText("");
      setWinners([]);
      setPickCount(1);
    }
  };

  return (
    <ToolPage
      title="Random Line Picker"
      icon="🎲"
      color="#8b5cf6"
      description="Pick random winners for your contests or choose random items from a list. Simply paste your items and click shuffle."
      currentHref="/tools/random-line-picker"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Configuration */}
        <section style={{ 
          background: "var(--bg2)", padding: "35px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.15)"
        }}>
          <h2 style={{ fontSize: "14px", fontWeight: "900", color: "#8b5cf6", marginBottom: "15px", textTransform: "uppercase" }}>
            Paste Your List (One per line)
          </h2>
          <textarea 
            className="input" 
            rows="10"
            placeholder="Example:&#10;Alice Johnson&#10;Bob Smith&#10;Charlie Brown..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              resize: "none", fontSize: "17px", background: "var(--bg3)", 
              borderRadius: "24px", border: "1px solid var(--border)", padding: "25px",
              lineHeight: "1.6", marginBottom: "25px"
            }}
          ></textarea>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: 15, alignItems: "flex-end" }}>
            <div style={{ flex: "1 1 200px" }}>
              <label style={{ fontSize: "12px", fontWeight: "800", color: "var(--muted)", marginBottom: "8px", display: "block" }}>
                Number of Winners to Pick
              </label>
              <input 
                type="number" min="1" 
                value={pickCount} 
                onChange={(e) => setPickCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="input"
                style={{ background: "var(--bg3)", height: "55px", fontSize: "18px", fontWeight: "700", textAlign: "center" }}
              />
            </div>
            
            <button 
              className="btn-primary" 
              onClick={pickRandomLines}
              disabled={isSpinning || !text.trim()}
              style={{ 
                background: "#8b5cf6", flex: "2 1 300px", height: "55px", 
                fontSize: "16px", fontWeight: "900", letterSpacing: "1px",
                boxShadow: "0 8px 20px -5px rgba(139, 92, 246, 0.4)"
              }}
            >
              {isSpinning ? "🎲 SHUFFLING NAMES..." : "PICK THE WINNER(S) ✨"}
            </button>

            <button 
              onClick={clearAll}
              style={{ 
                height: "55px", padding: "0 25px", background: "var(--bg3)", 
                border: "1px solid var(--border)", borderRadius: "18px", cursor: "pointer", 
                color: "var(--muted)", fontWeight: "700", fontSize: "14px"
              }}
            >
              RESET
            </button>
          </div>
        </section>

        {/* Results Area */}
        {winners.length > 0 && !isSpinning && (
          <section style={{ animation: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}>
            <h3 style={{ textAlign: "center", color: "#8b5cf6", marginBottom: "25px", fontWeight: "900", fontSize: "22px" }}>
              🎉 {winners.length > 1 ? "THE WINNERS ARE" : "THE WINNER IS"}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 15 }}>
              {winners.map((winner, i) => (
                <div key={i} style={{ 
                  padding: "30px 20px", 
                  background: "linear-gradient(145deg, var(--bg2), var(--bg3))", 
                  border: "2px solid #8b5cf6", 
                  borderRadius: "24px",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "900",
                  color: "var(--text)",
                  boxShadow: "0 15px 35px -10px rgba(139, 92, 246, 0.2)",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <div style={{ position: "absolute", top: 10, right: 15, fontSize: "12px", opacity: 0.3 }}>#{i+1}</div>
                  {winner}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Info Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          <div style={{ padding: "30px", borderRadius: "32px", background: "var(--bg3)", border: "1px solid var(--border)" }}>
             <h4 style={{ fontWeight: "900", marginBottom: "10px", color: "#8b5cf6" }}>💯 Pure Randomness</h4>
             <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6", margin: 0 }}>
               Our algorithm uses the standard Javascript <code>Math.random()</code> engine to ensure that every line has an equal chance of being selected.
             </p>
          </div>
          <div style={{ padding: "30px", borderRadius: "32px", background: "var(--bg3)", border: "1px solid var(--border)" }}>
             <h4 style={{ fontWeight: "900", marginBottom: "10px", color: "#8b5cf6" }}>🔒 Private Processing</h4>
             <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6", margin: 0 }}>
               Your list is processed entirely in your browser. We never save or transmit the names or data you enter here.
             </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}