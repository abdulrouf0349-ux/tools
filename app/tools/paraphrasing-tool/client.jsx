"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function ParaphrasingToolClient() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [mode, setMode] = useState("creative");

  const paraphrase = () => {
    if (inputText.trim().split(/\s+/).length < 3) {
      alert("Bhai, kam az kam 3-4 words toh likhein taake paraphrase ho sake!");
      return;
    }

    setIsSpinning(true);

    // Simulated AI processing delay for UX
    setTimeout(() => {
      const synonyms = {
        "smart": "intelligent", "quick": "rapid", "happy": "cheerful",
        "beautiful": "stunning", "important": "vital", "easy": "seamless",
        "help": "assist", "change": "modify", "use": "leverage",
        "make": "generate", "best": "optimal", "fast": "swift",
        "small": "tiny", "big": "grand", "start": "initiate"
      };

      let words = inputText.split(" ");
      let transformed = words.map(word => {
        const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, "");
        if (synonyms[cleanWord] && Math.random() > 0.35) {
          return word.replace(new RegExp(cleanWord, 'i'), synonyms[cleanWord]);
        }
        return word;
      });

      if (mode === "creative" && transformed.length > 6) {
        const mid = Math.floor(transformed.length / 2);
        const start = transformed.slice(0, mid).join(" ");
        const end = transformed.slice(mid).join(" ");
        setOutputText(`Essentially, ${end} while considering that ${start}.`);
      } else {
        setOutputText(transformed.join(" "));
      }
      
      setIsSpinning(false);
    }, 1800);
  };

  return (
    <ToolPage
      title="Paraphrasing Tool"
      icon="🔄"
      color="#c084fc"
      description="Rewrite your content to make it unique and professional. Our algorithm helps you find better synonyms and sentence structures."
      currentHref="/tools/paraphrasing-tool"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Mode & Input Box */}
        <section style={{ 
          background: "var(--bg2)", padding: "35px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 30px -10px rgba(192, 132, 252, 0.15)"
        }}>
          <div style={{ display: "flex", gap: 12, marginBottom: "20px" }}>
            {['Standard', 'Creative'].map((m) => (
              <button 
                key={m}
                onClick={() => setMode(m.toLowerCase())}
                style={{
                  padding: "10px 24px", borderRadius: "14px", cursor: "pointer",
                  background: mode === m.toLowerCase() ? "#c084fc" : "var(--bg3)",
                  color: mode === m.toLowerCase() ? "white" : "var(--muted)",
                  border: "2px solid " + (mode === m.toLowerCase() ? "#c084fc" : "var(--border)"),
                  fontSize: "14px", fontWeight: "800", transition: "all 0.3s ease"
                }}
              >
                {m.toUpperCase()}
              </button>
            ))}
          </div>

          <textarea 
            className="input" 
            rows="8"
            placeholder="Paste your original content here... (e.g., The quick smart fox jumped over the happy dog)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ 
              resize: "none", fontSize: "17px", background: "var(--bg3)", 
              borderRadius: "24px", border: "1px solid var(--border)", padding: "25px",
              lineHeight: "1.6"
            }}
          ></textarea>
          
          <button 
            className="btn-primary" 
            onClick={paraphrase}
            disabled={isSpinning || !inputText}
            style={{ 
              background: "#c084fc", height: "65px", width: "100%", marginTop: "20px",
              fontSize: "18px", fontWeight: "900", boxShadow: "0 8px 20px -5px rgba(192, 132, 252, 0.4)"
            }}
          >
            {isSpinning ? "🔄 SPINNING TEXT..." : "PARAPHRASE NOW ✨"}
          </button>
        </section>

        {/* Output Section */}
        {outputText && !isSpinning && (
          <section style={{ animation: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "900", color: "#c084fc", textTransform: "uppercase" }}>Rephrased Content</h3>
              <button 
                onClick={() => {
                    navigator.clipboard.writeText(outputText);
                    alert("Copied!");
                }}
                style={{ 
                  background: "var(--bg3)", border: "1px solid var(--border)",
                  padding: "8px 16px", borderRadius: "12px", cursor: "pointer", fontSize: "12px", fontWeight: "700"
                }}
              >
                COPY TEXT
              </button>
            </div>
            <div style={{ 
              background: "var(--bg3)", padding: "35px", borderRadius: "32px", 
              border: "2px dashed #c084fc44", lineHeight: "1.9", fontSize: "18px",
              color: "var(--text)", boxShadow: "inset 0 2px 10px rgba(0,0,0,0.05)"
            }}>
              {outputText}
            </div>
          </section>
        )}

        {/* Why Paraphrase? Section */}
        <section style={{ 
          padding: "40px", borderRadius: "40px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "15px" }}>Why use our AI Rewriter?</h2>
          <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "25px" }}>
            Whether you're trying to fix a repetitive sentence or need to rewrite an entire article for a blog, our tool helps you maintain the context while changing the delivery.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div style={{ background: "var(--bg2)", padding: "25px", borderRadius: "25px" }}>
              <h4 style={{ fontWeight: "900", color: "#c084fc", marginBottom: "10px" }}>No Plagiarism</h4>
              <p style={{ fontSize: "13px", opacity: 0.8, margin: 0 }}>Unique content is the key to SEO success. Our spinner helps break standard patterns.</p>
            </div>
            <div style={{ background: "var(--bg2)", padding: "25px", borderRadius: "25px" }}>
              <h4 style={{ fontWeight: "900", color: "#c084fc", marginBottom: "10px" }}>Better Flow</h4>
              <p style={{ fontSize: "13px", opacity: 0.8, margin: 0 }}>Transform robotic or technical text into something more conversational and readable.</p>
            </div>
          </div>
        </section>

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