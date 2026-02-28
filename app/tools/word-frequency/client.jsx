"use client";
import { useState, useMemo } from "react";
import ToolPage from "@/components/ToolPage";

export default function WordFrequencyClient() {
  const [text, setText] = useState("");
  const [minChars, setMinChars] = useState(3);

  const frequencyData = useMemo(() => {
    if (!text.trim()) return [];

    // Clean text: remove punctuation and split by whitespace
    const words = text
      .toLowerCase()
      .replace(/[.,!?;:()"[\]]/g, " ")
      .split(/\s+/)
      .filter(word => word.length >= minChars);

    const freqMap = {};
    words.forEach(word => {
      freqMap[word] = (freqMap[word] || 0) + 1;
    });

    return Object.entries(freqMap)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);
  }, [text, minChars]);

  return (
    <ToolPage
      title="Word Frequency Counter"
      icon="📈"
      color="#ec4899"
      description="Deeply analyze your text to reveal hidden patterns. See which words dominate your content and optimize your keyword density for search engines."
      currentHref="/tools/word-frequency"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Section */}
        <section>
          <label style={{ fontSize: "11px", fontWeight: "900", color: "#ec4899", textTransform: "uppercase", display: "block", marginBottom: "12px", letterSpacing: "1px" }}>
            Source Text for Analysis
          </label>
          <textarea
            className="textarea"
            rows={10}
            placeholder="Paste your article, essay, or raw data here to start the frequency breakdown..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: "16px", 
              padding: "25px", 
              borderRadius: "28px", 
              background: "var(--bg2)", 
              border: "2px solid var(--border)",
              boxShadow: "inset 0 4px 12px rgba(0,0,0,0.05)"
            }}
          />
        </section>

        {/* Dynamic Controls */}
        <section style={{ 
          background: "var(--bg3)", 
          padding: "20px 25px", 
          borderRadius: "22px", 
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700" }}>Minimum Word Length:</span>
            <input 
              type="range" min="1" max="10" 
              value={minChars} 
              onChange={(e) => setMinChars(parseInt(e.target.value))}
              style={{ accentColor: "#ec4899", cursor: "pointer", width: "120px" }}
            />
            <b style={{ color: "#ec4899", minWidth: "30px" }}>{minChars}</b>
          </div>
          <div style={{ fontSize: "12px", color: "var(--muted)" }}>
            Filtering out words shorter than {minChars} letters.
          </div>
        </section>

        

        {/* Frequency Results List */}
        <section>
          <h3 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            Top Keywords <span style={{ fontSize: "12px", background: "#ec489920", color: "#ec4899", padding: "4px 10px", borderRadius: "10px" }}>Top 20</span>
          </h3>
          
          {frequencyData.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px" }}>
              {frequencyData.map((item, i) => {
                const percentage = ((item.count / frequencyData[0].count) * 100).toFixed(0);
                return (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "16px 20px",
                    background: "var(--bg2)",
                    border: "2px solid var(--border)",
                    borderRadius: "18px",
                    gap: "15px",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    {/* Visual Density Bar */}
                    <div style={{ 
                      position: "absolute", left: 0, bottom: 0, height: "4px", 
                      width: `${percentage}%`, background: "#ec4899", opacity: 0.3 
                    }} />

                    <div style={{ 
                      width: "32px", height: "32px", borderRadius: "10px", 
                      background: "#ec4899", color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "12px", fontWeight: "900"
                    }}>
                      {i + 1}
                    </div>
                    <div style={{ flex: 1, fontWeight: "700", fontSize: "16px", color: "var(--text)" }}>
                      {item.word}
                    </div>
                    <div style={{ 
                      padding: "6px 15px", background: "var(--bg3)", 
                      borderRadius: "12px", fontSize: "13px", fontWeight: "800",
                      color: "#ec4899", border: "1px solid #ec489933"
                    }}>
                      {item.count} <span style={{ fontSize: "10px", opacity: 0.6 }}>USES</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ 
              textAlign: "center", padding: "60px", color: "var(--muted)",
              background: "var(--bg2)", border: "2px dashed var(--border)", borderRadius: "32px"
            }}>
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>📉</div>
              <p style={{ fontWeight: "600" }}>Input some text to see the data magic happen.</p>
            </div>
          )}
        </section>

        {/* Pro Tip Box */}
        <div style={{ 
          padding: "30px", borderRadius: "28px", background: "rgba(236, 72, 153, 0.05)", 
          border: "1px solid #ec489933", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>💡</div>
          <div>
            <h5 style={{ margin: "0 0 5px 0", color: "#ec4899", fontWeight: "800" }}>SEO Pro Tip</h5>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Search engines prefer <b>Natural Language Processing (NLP)</b>. If your primary keyword density is over 3%, try replacing some instances with <b>LSI (Latent Semantic Indexing)</b> keywords—basically synonyms that mean the same thing!
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}