"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function TextComparisonClient() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff, setDiff] = useState(null);

  const compareTexts = () => {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    const maxLines = Math.max(lines1.length, lines2.length);
    const results = [];

    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || "";
      const line2 = lines2[i] || "";
      
      results.push({
        lineNum: i + 1,
        content1: line1,
        content2: line2,
        isDifferent: line1 !== line2
      });
    }
    setDiff(results);
  };

  const clearAll = () => {
    setText1("");
    setText2("");
    setDiff(null);
  };

  return (
    <ToolPage
      title="Text Comparison"
      icon="⚖️"
      color="#6366f1"
      description="Compare two versions of text or code side-by-side. Highlights differences in red and green for easy identification."
      currentHref="/tools/text-comparison"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Dual Input Terminals */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <section>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <label style={{ fontSize: "12px", fontWeight: "900", color: "#6366f1", textTransform: "uppercase" }}>Original (A)</label>
              <span style={{ fontSize: "10px", color: "var(--muted)" }}>{text1.split('\n').length} lines</span>
            </div>
            <textarea
              className="textarea"
              rows={12}
              placeholder="Paste original text here..."
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              style={{ 
                fontSize: "13px", 
                fontFamily: "'Fira Code', 'Courier New', monospace", 
                borderRadius: "20px",
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                padding: "20px"
              }}
            />
          </section>

          <section>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <label style={{ fontSize: "12px", fontWeight: "900", color: "#10b981", textTransform: "uppercase" }}>Modified (B)</label>
              <span style={{ fontSize: "10px", color: "var(--muted)" }}>{text2.split('\n').length} lines</span>
            </div>
            <textarea
              className="textarea"
              rows={12}
              placeholder="Paste modified version here..."
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              style={{ 
                fontSize: "13px", 
                fontFamily: "'Fira Code', 'Courier New', monospace", 
                borderRadius: "20px",
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                padding: "20px"
              }}
            />
          </section>
        </div>

        {/* Action Bar */}
        <div style={{ display: "flex", gap: "15px" }}>
          <button 
            className="btn-primary" 
            onClick={compareTexts}
            style={{ 
              flex: 2, 
              background: "#6366f1", 
              height: "60px", 
              borderRadius: "18px",
              fontWeight: "900",
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)"
            }}
          >
            RUN DIFF CHECKER
          </button>
          <button 
            className="btn-ghost" 
            onClick={clearAll}
            style={{ 
              flex: 1, 
              border: "1px solid var(--border)",
              borderRadius: "18px",
              fontWeight: "700"
            }}
          >
            RESET
          </button>
        </div>

        {/* Results VIP View */}
        {diff && (
          <section style={{ 
            animation: "slideIn 0.4s ease-out",
            border: "1px solid var(--border)", 
            borderRadius: "28px", 
            overflow: "hidden",
            background: "var(--bg2)"
          }}>
            <div style={{ 
              padding: "20px 25px", 
              background: "var(--bg3)", 
              borderBottom: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <h3 style={{ fontSize: "14px", fontWeight: "900", margin: 0 }}>📊 DIFF REPORT</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ fontSize: "11px", background: "#ef444422", color: "#ef4444", padding: "4px 10px", borderRadius: "8px", fontWeight: "700" }}>
                  {diff.filter(d => d.isDifferent).length} CHANGES
                </span>
              </div>
            </div>

            <div style={{ maxHeight: "600px", overflowY: "auto", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px", fontFamily: "'Fira Code', monospace" }}>
                <thead>
                  <tr style={{ textAlign: "left", background: "var(--bg3)", color: "var(--muted)" }}>
                    <th style={{ padding: "12px", width: "50px", borderRight: "1px solid var(--border)", textAlign: "center" }}>LINE</th>
                    <th style={{ padding: "12px" }}>VERSION A</th>
                    <th style={{ padding: "12px", borderLeft: "1px solid var(--border)" }}>VERSION B</th>
                  </tr>
                </thead>
                <tbody>
                  {diff.map((row, idx) => (
                    <tr key={idx} style={{ 
                      borderBottom: "1px solid var(--border)",
                      background: row.isDifferent ? "rgba(99, 102, 241, 0.03)" : "transparent"
                    }}>
                      <td style={{ padding: "10px", color: "var(--muted)", borderRight: "1px solid var(--border)", textAlign: "center", background: "var(--bg3)" }}>
                        {row.lineNum}
                      </td>
                      <td style={{ 
                        padding: "10px", 
                        color: row.isDifferent ? "#ef4444" : "var(--text)",
                        background: row.isDifferent ? "#ef444415" : "transparent",
                        whiteSpace: "pre-wrap"
                      }}>
                        {row.content1 || <span style={{ opacity: 0.2 }}>∅</span>}
                      </td>
                      <td style={{ 
                        padding: "10px", 
                        borderLeft: "1px solid var(--border)", 
                        color: row.isDifferent ? "#10b981" : "var(--text)",
                        background: row.isDifferent ? "#10b98115" : "transparent",
                        whiteSpace: "pre-wrap"
                      }}>
                        {row.content2 || <span style={{ opacity: 0.2 }}>∅</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        

        {/* Pro Documentation */}
        <section style={{ 
          padding: "30px", borderRadius: "32px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "15px", fontWeight: "900" }}>Pro Tip: Code Review</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Line-by-line comparison is perfect for checking changes in <b>JSON, CSS, or plain text</b>. Differences are highlighted: <span style={{ color: "#ef4444" }}>Red (Removed)</span> and <span style={{ color: "#10b981" }}>Green (Added)</span>.
            </p>
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}