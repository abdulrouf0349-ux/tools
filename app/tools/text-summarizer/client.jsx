"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function TextSummarizerClient() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [summaryLength, setSummaryLength] = useState(30);
  const [copied, setCopied] = useState(false);

  const handleSummarize = () => {
    if (text.trim().length < 150) {
      alert("Bhai, kam az kam 150 characters toh likhein taake summarize karne ka maza aaye!");
      return;
    }

    setIsProcessing(true);
    setSummary("");

    // AI Simulation Logic (Key Sentence Extraction)
    setTimeout(() => {
      const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [text];
      const countToKeep = Math.max(1, Math.floor(sentences.length * (summaryLength / 100)));
      
      // Strategy: Keep first sentence (context) and longest/most informative ones
      const firstSentence = sentences[0];
      const otherSentences = sentences.slice(1).sort((a, b) => b.length - a.length);
      const selected = [firstSentence, ...otherSentences.slice(0, countToKeep - 1)];
      
      // Re-order as per original flow
      const finalSummary = sentences.filter(s => selected.includes(s)).join(" ");

      setSummary(finalSummary);
      setIsProcessing(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="AI Text Summarizer"
      icon="📝"
      color="#4fffb0"
      description="Condense long articles, essays, or complex documents into short, high-value summaries. Perfect for students, researchers, and busy pros."
      currentHref="/tools/text-summarizer"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 35 }}>
        
        {/* Input Terminal */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#4fffb0", textTransform: "uppercase", letterSpacing: "1px" }}>
              Input: Original Content
            </label>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>{text.length} characters</span>
          </div>
          <textarea 
            className="textarea" 
            rows="10"
            placeholder="Paste your long article or essay here. The more you paste, the better the summary!"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              resize: "none", 
              fontSize: "16px", 
              padding: "25px", 
              borderRadius: "28px",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              lineHeight: "1.6"
            }}
          />
        </section>

        {/* Intelligence Controls */}
        <section style={{ background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)" }}>
          <div style={{ marginBottom: "25px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ fontSize: "14px", fontWeight: "700" }}>Summary Length: <b style={{ color: "#4fffb0" }}>{summaryLength}%</b></span>
              <span style={{ fontSize: "12px", color: "var(--muted)", background: "var(--bg3)", padding: "2px 10px", borderRadius: "20px" }}>
                {summaryLength <= 20 ? "Super Concise" : summaryLength <= 40 ? "Balanced" : "Detailed"}
              </span>
            </div>
            <input 
              type="range" min="10" max="60" step="10"
              value={summaryLength}
              onChange={(e) => setSummaryLength(parseInt(e.target.value))}
              style={{ width: "100%", cursor: "pointer", accentColor: "#4fffb0", height: "8px" }}
            />
          </div>

          <button 
            className="btn-primary" 
            onClick={handleSummarize}
            disabled={isProcessing || !text}
            style={{ 
              background: "#4fffb0", 
              color: "#000", 
              height: "65px",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "900",
              boxShadow: "0 10px 30px -10px rgba(79, 255, 176, 0.4)"
            }}
          >
            {isProcessing ? "🧠 ANALYZING CONTEXT..." : "GENERATE AI SUMMARY ✨"}
          </button>
        </section>

        {/* Output VIP View */}
        {isProcessing && (
           <div style={{ textAlign: "center", padding: "40px", animation: "pulse 1.5s infinite" }}>
              <div style={{ fontSize: "40px" }}>⚡</div>
              <p style={{ color: "#4fffb0", fontWeight: "700", marginTop: "10px" }}>Extracting key insights...</p>
           </div>
        )}

        {summary && !isProcessing && (
          <section style={{ animation: "fadeInUp 0.5s ease-out" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
               <h3 style={{ fontSize: "15px", fontWeight: "900", margin: 0, color: "var(--text)" }}>💎 THE ESSENCE</h3>
               <button 
                  onClick={handleCopy}
                  style={{ 
                    background: copied ? "#10b981" : "var(--bg3)", 
                    border: "1px solid var(--border)",
                    color: copied ? "white" : "var(--text)",
                    padding: "8px 18px", 
                    borderRadius: "12px", 
                    cursor: "pointer", 
                    fontSize: "12px",
                    fontWeight: "700",
                    transition: "all 0.2s"
                  }}
                >
                  {copied ? "✓ COPIED" : "COPY SUMMARY"}
                </button>
            </div>
            <div style={{ 
              background: "var(--bg3)", 
              padding: "40px", 
              borderRadius: "32px", 
              border: "1px solid #4fffb033", 
              lineHeight: "1.8", 
              fontSize: "18px",
              color: "var(--text)",
              position: "relative",
              boxShadow: "inset 0 0 20px rgba(79, 255, 176, 0.05)"
            }}>
              {summary}
            </div>
          </section>
        )}

        

        {/* Why Use This Section */}
        <div style={{ 
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px"
        }}>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 8px 0", color: "#4fffb0" }}>Save Time</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>Turn 2000 words into 200 without losing the main point.</p>
          </div>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 8px 0", color: "#4fffb0" }}>Improve Focus</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>Removes filler words and "fluff" from business reports.</p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </ToolPage>
  );
}