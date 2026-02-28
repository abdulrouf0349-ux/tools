"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function MorseCodeClient() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const [copied, setCopied] = useState(false);

  const morseMap = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
    'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
    'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
  };

  const reverseMorse = Object.fromEntries(Object.entries(morseMap).map(([k, v]) => [v, k]));

  // Auto-conversion Logic
  useEffect(() => {
    if (!text) {
      setMorse("");
      return;
    }
    const convert = text.toLowerCase().split('').map(char => {
      return morseMap[char] || char;
    }).join(' ');
    setMorse(convert);
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(morse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const decodeMorse = () => {
    const decoded = text.split(' ').map(m => reverseMorse[m] || m).join('');
    setText(decoded.toUpperCase());
  };

  return (
    <ToolPage
      title="Morse Code Converter"
      icon="📟"
      color="#64748b"
      description="The ultimate tool to encode and decode Morse code. Learn the international standard of telegraph communication."
      currentHref="/tools/morse-code"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Main Interface */}
        <section style={{ 
          background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)"
        }}>
          <label className="label" style={{ fontWeight: "800", marginBottom: "12px" }}>Enter Text or Morse Code</label>
          <textarea
            className="textarea"
            rows={6}
            placeholder="Type 'Hello' to see Morse, or type '.... . .-.. .-.. ---' to decode..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: 18, background: "var(--bg3)", border: "1px solid var(--border)",
              borderRadius: "20px", padding: "20px", fontFamily: "'Fira Code', monospace"
            }}
          />

          <div style={{ display: "flex", gap: 15, marginTop: "20px" }}>
             <button 
              className="btn-primary" 
              onClick={decodeMorse}
              style={{ flex: 2, background: "#64748b", color: "white", fontWeight: "900", padding: "15px", borderRadius: "15px" }}
            >
              DECODE FROM MORSE 🔓
            </button>
            <button 
              className="btn-ghost" 
              onClick={() => setText("")}
              style={{ flex: 1, border: "1px solid var(--border)", borderRadius: "15px", fontWeight: "700" }}
            >
              RESET
            </button>
          </div>
        </section>

        {/* Dynamic Output Result */}
        <section style={{ animation: "slideUp 0.5s ease" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "800", color: "var(--muted)", textTransform: "uppercase" }}>Translation Result</h3>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ 
              minHeight: "150px", padding: "30px", background: "#0f172a", color: "#38bdf8",
              borderRadius: "28px", fontSize: "26px", fontFamily: "'Fira Code', monospace",
              lineHeight: "1.6", wordBreak: "break-all", border: "2px solid #1e293b",
              boxShadow: "inset 0 4px 20px rgba(0,0,0,0.5)"
            }}>
              {morse || <span style={{ opacity: 0.2 }}>.-.. .. ... - . -.</span>}
            </div>
            {morse && (
              <button 
                onClick={handleCopy}
                style={{
                  position: "absolute", right: "20px", bottom: "20px",
                  padding: "10px 20px", borderRadius: "12px", 
                  background: copied ? "#22c55e" : "#38bdf822",
                  color: copied ? "white" : "#38bdf8",
                  fontSize: "13px", fontWeight: "900", border: "1px solid #38bdf844", cursor: "pointer"
                }}
              >
                {copied ? "✓ COPIED" : "COPY MORSE"}
              </button>
            )}
          </div>
        </section>

        {/* Educational Section */}
        <section style={{ 
          padding: "40px", borderRadius: "35px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "20px" }}>Morse Code Basics</h2>
          
          

          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginTop: "20px" }}>
            Morse code is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called <b>dots (.)</b> and <b>dashes (-)</b>.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: "25px" }}>
            <div style={{ background: "var(--bg2)", padding: "20px", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#38bdf8", marginBottom: "10px" }}>The Dot (.)</h4>
              <p style={{ fontSize: "13px", margin: 0 }}>The basic unit of time. Also called a 'dit'.</p>
            </div>
            <div style={{ background: "var(--bg2)", padding: "20px", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#38bdf8", marginBottom: "10px" }}>The Dash (-)</h4>
              <p style={{ fontSize: "13px", margin: 0 }}>Duration is three times as long as a dot. Also called a 'dah'.</p>
            </div>
            <div style={{ background: "var(--bg2)", padding: "20px", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#38bdf8", marginBottom: "10px" }}>Separation</h4>
              <p style={{ fontSize: "13px", margin: 0 }}>A single space separates letters, and a slash (/) separates words.</p>
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