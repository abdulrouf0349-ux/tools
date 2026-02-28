"use client";
import { useState, useMemo } from "react";
import ToolPage from "@/components/ToolPage";

export default function KeywordDensityClient() {
  const [text, setText] = useState("");
  const [minWordLength, setMinWordLength] = useState(3);

  const stats = useMemo(() => {
    if (!text.trim()) return [];

    // Cleaning text: remove punctuation and split into words
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(word => word.length >= minWordLength && !/^\d+$/.test(word)); // Filter short words and pure numbers

    const totalWords = words.length;
    if (totalWords === 0) return [];

    const frequencyMap = {};
    words.forEach(word => {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });

    return Object.entries(frequencyMap)
      .map(([word, count]) => ({
        word,
        count,
        percentage: ((count / totalWords) * 100).toFixed(2)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15); 
  }, [text, minWordLength]);

  const totalWordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <ToolPage
      title="Keyword Density Checker"
      icon="📈"
      color="#06b6d4"
      description="Analyze your content's keyword frequency. Maintain the perfect balance for SEO and ensure your text is optimized for search engines."
      currentHref="/tools/keyword-density"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Editor & Controls */}
        <section style={{ 
          background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "800", margin: 0 }}>Paste Your Content Below</h2>
            <div style={{ fontSize: "12px", background: "var(--bg3)", padding: "6px 12px", borderRadius: "20px", color: "var(--muted)" }}>
              Total Word Count: <b style={{ color: "#06b6d4" }}>{totalWordCount}</b>
            </div>
          </div>
          
          <textarea 
            className="input" 
            rows="12"
            placeholder="Type or paste your article here to see the real-time keyword breakdown..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              resize: "none", fontSize: "16px", lineHeight: "1.7", marginBottom: "20px",
              padding: "20px", borderRadius: "20px", border: "1px solid var(--border)"
            }}
          ></textarea>
          
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <label className="label" style={{ margin: 0, fontSize: "13px", fontWeight: "700" }}>Ignore words shorter than:</label>
            <input 
              type="number" min="1" max="15" 
              value={minWordLength} 
              onChange={(e) => setMinWordLength(parseInt(e.target.value) || 1)}
              style={{ 
                width: "70px", padding: "8px", borderRadius: "10px", 
                border: "1px solid var(--border)", background: "var(--bg3)", color: "var(--text)", textAlign: "center" 
              }}
            />
          </div>
        </section>

        {/* Results Visualizer */}
        {stats.length > 0 ? (
          <section style={{ animation: "fadeIn 0.5s ease" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "900", marginBottom: "20px" }}>Top 15 Ranking Keywords</h3>
            <div style={{ 
              background: "var(--bg2)", borderRadius: "28px", border: "1px solid var(--border)", 
              overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
            }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead style={{ background: "var(--bg3)" }}>
                  <tr>
                    <th style={{ padding: "18px 25px", fontSize: "13px", color: "var(--muted)", textTransform: "uppercase" }}>Keyword</th>
                    <th style={{ padding: "18px 25px", fontSize: "13px", color: "var(--muted)", textTransform: "uppercase" }}>Count</th>
                    <th style={{ padding: "18px 25px", fontSize: "13px", color: "var(--muted)", textTransform: "uppercase" }}>Density Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((item, index) => (
                    <tr key={index} style={{ borderTop: "1px solid var(--border)", transition: "0.2s" }}>
                      <td style={{ padding: "15px 25px", fontWeight: "800", color: "#0891b2" }}>{item.word}</td>
                      <td style={{ padding: "15px 25px", fontWeight: "600" }}>{item.count}</td>
                      <td style={{ padding: "15px 25px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                          <div style={{ flex: 1, height: "8px", background: "var(--bg3)", borderRadius: "4px", overflow: "hidden" }}>
                            <div style={{ 
                              width: `${Math.min(item.percentage * 10, 100)}%`, 
                              height: "100%", 
                              background: item.percentage > 3 ? "#ef4444" : "#06b6d4",
                              borderRadius: "4px",
                              transition: "width 0.5s ease"
                            }}></div>
                          </div>
                          <span style={{ fontSize: "13px", fontWeight: "700", minWidth: "50px", color: item.percentage > 3 ? "#ef4444" : "var(--text)" }}>
                            {item.percentage}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <div style={{ 
            padding: "60px", textAlign: "center", border: "2px dashed var(--border)", 
            borderRadius: "32px", color: "var(--muted)", background: "var(--bg2)" 
          }}>
            <span style={{ fontSize: "40px", display: "block", marginBottom: "15px" }}>📊</span>
            Paste your article to analyze SEO keyword patterns.
          </div>
        )}

        {/* SEO Knowledge Base */}
        <section style={{ 
          padding: "40px", borderRadius: "35px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "20px" }}>What is Keyword Density?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            Keyword density refers to the percentage of times a specific keyword or phrase appears on a webpage compared to the total number of words on that page. In the world of <b>Search Engine Optimization (SEO)</b>, it is used to determine whether a webpage is relevant to a specific topic.
          </p>

          

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginTop: "20px" }}>
            <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "10px", color: "#06b6d4" }}>The 1-2% Rule</h4>
              <p style={{ fontSize: "13px", margin: 0, opacity: 0.8 }}>Most experts recommend a density of 1% to 2% for your primary focus keyword to rank well without being spammy.</p>
            </div>
            <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "10px", color: "#ef4444" }}>Keyword Stuffing</h4>
              <p style={{ fontSize: "13px", margin: 0, opacity: 0.8 }}>Going over 3% can trigger Google's spam filters, leading to penalties or lower search rankings.</p>
            </div>
          </div>
        </section>

      </div>
    </ToolPage>
  );
}