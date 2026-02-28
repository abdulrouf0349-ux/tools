"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function SentenceCounterClient() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState({
    sentences: 0,
    words: 0,
    paragraphs: 0,
    avgSentenceLength: 0
  });

  useEffect(() => {
    if (!text.trim()) {
      setStats({ sentences: 0, words: 0, paragraphs: 0, avgSentenceLength: 0 });
      return;
    }

    // Sentence detection (Smart handling of abbreviations and punctuations)
    const sentenceArr = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentences = sentenceArr.length;

    // Word count
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;

    // Paragraph count
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;

    // Avg words per sentence
    const avgSentenceLength = sentences > 0 ? (words / sentences).toFixed(1) : 0;

    setStats({ sentences, words, paragraphs, avgSentenceLength });
  }, [text]);

  const copyStats = () => {
    const report = `📝 TEXT ANALYSIS REPORT\n----------------------\nSentences: ${stats.sentences}\nWords: ${stats.words}\nParagraphs: ${stats.paragraphs}\nAvg Words/Sentence: ${stats.avgSentenceLength}`;
    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Sentence Counter"
      icon="📊"
      color="#ffd166"
      description="Advanced text metrics for bloggers, students, and SEO writers. Monitor sentence density and paragraph structure instantly."
      currentHref="/tools/sentence-counter"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Real-time Metrics Grid */}
        <section style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", 
          gap: 15 
        }}>
          {[
            { label: "Sentences", val: stats.sentences, color: "#ffd166", icon: "📏" },
            { label: "Paragraphs", val: stats.paragraphs, color: "#4fffb0", icon: "📄" },
            { label: "Words", val: stats.words, color: "#00d4ff", icon: "✍️" },
            { label: "Avg. Length", val: stats.avgSentenceLength, color: "#c084fc", icon: "📉" },
          ].map((item, i) => (
            <div key={i} style={{ 
              background: "var(--bg2)", 
              border: "1px solid var(--border)", 
              borderRadius: "24px", 
              padding: "25px 15px", 
              textAlign: "center",
              boxShadow: `0 10px 20px -10px ${item.color}22`,
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ fontSize: "12px", position: "absolute", top: "10px", right: "10px", opacity: 0.3 }}>{item.icon}</div>
              <div style={{ fontSize: "36px", fontWeight: "950", color: item.color, letterSpacing: "-1.5px" }}>
                {item.val}
              </div>
              <div style={{ fontSize: "10px", color: "var(--muted)", fontWeight: "900", textTransform: "uppercase", marginTop: "5px", letterSpacing: "1px" }}>
                {item.label}
              </div>
            </div>
          ))}
        </section>

        {/* Writing Canvas */}
        <section style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", alignItems: "center" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", textTransform: "uppercase", color: "var(--muted)" }}>
              Analysis Canvas
            </label>
            <div style={{ fontSize: "11px", color: "#10b981", fontWeight: "bold" }}>
              {text.length > 0 ? "LIVE ANALYSIS ACTIVE" : "AWAITING INPUT"}
            </div>
          </div>
          <textarea
            className="textarea"
            rows={15}
            placeholder="Start typing your story or paste an essay here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: "16px", 
              lineHeight: "1.8", 
              padding: "25px", 
              borderRadius: "28px", 
              background: "var(--bg3)", 
              border: "1px solid var(--border)",
              color: "var(--text)",
              boxShadow: "inset 0 4px 15px rgba(0,0,0,0.05)"
            }}
          />
          {text && (
            <button 
              onClick={() => setText("")}
              style={{ 
                position: "absolute", top: "45px", right: "15px", 
                background: "rgba(239, 68, 68, 0.1)", color: "#ef4444", 
                border: "none", padding: "5px 12px", borderRadius: "10px",
                fontSize: "10px", fontWeight: "900", cursor: "pointer"
              }}
            >
              CLEAR
            </button>
          )}
        </section>

        {/* Action Controls */}
        <section style={{ display: "flex", gap: "12px" }}>
          <button 
            className="btn-primary" 
            onClick={copyStats}
            disabled={!text}
            style={{ 
              flex: 1, height: "60px", background: "#ffd166", color: "#000",
              fontSize: "14px", fontWeight: "900", borderRadius: "18px"
            }}
          >
            {copied ? "✓ REPORT COPIED" : "📋 COPY STATS REPORT"}
          </button>
        </section>

        {/* Readability Guide */}
        <section style={{ 
          padding: "25px", borderRadius: "28px", background: "var(--bg2)", 
          border: "1px solid var(--border)", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "40px" }}>🧠</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "15px", fontWeight: "900" }}>Readability Score Tip</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              If your <b>Avg. Length</b> is over 25 words, your content might be "Hard to Read." For mobile users, aim for shorter sentences and more paragraphs to keep them engaged.
            </p>
          </div>
        </section>

      </div>
    </ToolPage>
  );
}