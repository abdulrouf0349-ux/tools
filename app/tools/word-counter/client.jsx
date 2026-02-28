"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function WordCounterClient() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyze = () => {
    if (!text.trim()) return;

    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpace = text.replace(/\s/g, "").length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.split(/\n+/).filter(Boolean).length;
    const readingTime = Math.ceil(words / 200) || 1;

    setResult({
      words,
      characters,
      characters_no_space: charactersNoSpace,
      sentences,
      paragraphs,
      reading_time_minutes: readingTime
    });
  };

  const STATS = result ? [
    { label: "Words",          value: result.words,                color: "#4fffb0" },
    { label: "Characters",     value: result.characters,           color: "#00d4ff" },
    { label: "No Spaces",      value: result.characters_no_space,  color: "#c084fc" },
    { label: "Sentences",      value: result.sentences,            color: "#ffd166" },
    { label: "Paragraphs",     value: result.paragraphs,           color: "#fb923c" },
    { label: "Reading Time",    value: `${result.reading_time_minutes} min`, color: "#ff6b6b" },
  ] : [];

  return (
    <ToolPage
      title="Word Counter"
      icon="📝"
      color="#4fffb0"
      description="Whether you're writing a blog post, an essay, or a tweet, our analyzer provides deep insights into your content structure instantly."
      currentHref="/tools/word-counter"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Editor Section */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "flex-end" }}>
            <label style={{ fontSize: "11px", fontWeight: "900", color: "#4fffb0", textTransform: "uppercase", letterSpacing: "1px" }}>
              Content Editor
            </label>
            <div style={{ fontSize: "12px", color: "var(--muted)", fontWeight: "600" }}>
              <span style={{ color: "#4fffb0" }}>{text.length}</span> characters
            </div>
          </div>
          
          <textarea
            className="textarea"
            rows={12}
            placeholder="Start typing or paste your content here (e.g., your latest blog post or school assignment)..."
            value={text}
            onChange={e => { setText(e.target.value); if(!e.target.value) setResult(null); }}
            style={{ 
              fontSize: "16px", 
              lineHeight: "1.6",
              padding: "25px",
              borderRadius: "28px",
              background: "var(--bg2)",
              border: "2px solid var(--border)",
              boxShadow: "inset 0 4px 12px rgba(0,0,0,0.05)",
              transition: "border-color 0.3s"
            }}
          />

          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <button 
              className="btn-primary" 
              onClick={analyze} 
              disabled={!text.trim()} 
              style={{ 
                flex: 2,
                background: "#4fffb0", 
                color: "#0a0a0a", 
                fontWeight: "900", 
                height: "60px",
                borderRadius: "18px",
                fontSize: "16px",
                boxShadow: "0 10px 20px rgba(79, 255, 176, 0.2)"
              }}
            >
              ANALYZE CONTENT ⚡
            </button>
            <button 
              className="btn-ghost" 
              onClick={() => { setText(""); setResult(null); }}
              style={{ 
                flex: 1,
                border: "2px solid var(--border)",
                borderRadius: "18px",
                fontWeight: "700"
              }}
            >
              RESET
            </button>
          </div>
        </section>

        {/* Dashboard Results */}
        {result && (
          <section style={{ animation: "fadeUp 0.5s ease" }}>
            <label style={{ fontSize: "11px", fontWeight: "900", opacity: 0.6, marginBottom: "15px", display: "block", textTransform: "uppercase" }}>
              Detailed Statistics
            </label>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", 
              gap: "15px" 
            }}>
              {STATS.map(s => (
                <div 
                  key={s.label} 
                  style={{ 
                    background: "var(--bg3)", 
                    border: `2px solid ${s.color}22`, 
                    borderRadius: "22px", 
                    padding: "25px 20px", 
                    textAlign: "center",
                    transition: "transform 0.2s"
                  }}
                >
                  <div style={{ fontSize: "32px", fontWeight: "900", color: s.color, letterSpacing: "-1px", marginBottom: "5px" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        

        {/* Writer's Perks Card */}
        <div style={{ 
          padding: "30px", 
          borderRadius: "32px", 
          background: "linear-gradient(135deg, rgba(79, 255, 176, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)", 
          border: "1px solid #4fffb033",
          display: "flex",
          gap: "25px",
          alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>🚀</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", color: "#4fffb0", fontSize: "16px" }}>Optimized for SEO</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>
              Most SEO experts recommend a minimum of <b>1,500 words</b> for long-form articles. Use this tool to ensure your content hits the sweet spot for search engines without overstuffing.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .textarea:focus {
          border-color: #4fffb0 !important;
          outline: none;
        }
      `}</style>
    </ToolPage>
  );
}