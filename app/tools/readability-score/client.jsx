"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function ReadabilityScoreClient() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    sentences: 0, words: 0, syllables: 0, score: 0, grade: "N/A", color: "#8b5cf6"
  });

  const countSyllables = (word) => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const syllables = word.match(/[aeiouy]{1,2}/g);
    return syllables ? syllables.length : 1;
  };

  const calculateReadability = () => {
    if (!text.trim()) {
      setStats({ sentences: 0, words: 0, syllables: 0, score: 0, grade: "N/A", color: "#8b5cf6" });
      return;
    }

    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length || 1;
    const wordsArr = text.trim().split(/\s+/).filter(w => w.length > 0);
    const words = wordsArr.length;
    let totalSyllables = 0;
    wordsArr.forEach(word => { totalSyllables += countSyllables(word); });

    // Flesch Reading Ease Formula
    // $$206.835 - 1.015 \times \left(\frac{total\ words}{total\ sentences}\right) - 84.6 \times \left(\frac{total\ syllables}{total\ words}\right)$$
    const score = 206.835 - 1.015 * (words / sentences) - 84.6 * (totalSyllables / words);
    const finalScore = Math.max(0, Math.min(100, Math.round(score)));
    
    let grade = "Professional";
    let statusColor = "#ef4444"; // Default Red

    if (finalScore > 80) { grade = "Easy (6th Grade)"; statusColor = "#10b981"; }
    else if (finalScore > 60) { grade = "Standard (8th-9th Grade)"; statusColor = "#8b5cf6"; }
    else if (finalScore > 40) { grade = "Fairly Hard (College)"; statusColor = "#f59e0b"; }
    else { grade = "Very Hard (Graduate)"; statusColor = "#ef4444"; }

    setStats({
      sentences, words, syllables: totalSyllables,
      score: finalScore, grade, color: statusColor
    });
  };

  useEffect(() => {
    const timeout = setTimeout(calculateReadability, 300);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <ToolPage
      title="Readability Score Checker"
      icon="📖"
      color="#8b5cf6"
      description="Improve your content's clarity. Paste your text to see the reading level and word statistics in real-time."
      currentHref="/tools/readability-score-checker"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Editor Section */}
        <section style={{ 
          background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)"
        }}>
          <label style={{ fontSize: "14px", fontWeight: "800", color: "var(--muted)", marginBottom: "15px", display: "block", textTransform: "uppercase" }}>
            Draft Your Content
          </label>
          <textarea 
            className="input" 
            rows="12"
            placeholder="Type or paste your article here for a deep analysis..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              resize: "none", fontSize: "17px", lineHeight: "1.7", background: "var(--bg3)", 
              borderRadius: "24px", border: "1px solid var(--border)", padding: "25px"
            }}
          ></textarea>
        </section>

        {/* Results Dashboard */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          
          {/* Main Score Card */}
          <div style={{ 
            background: stats.color, color: "white", padding: "20px 30px", 
            borderRadius: "35px", textAlign: "center", gridColumn: "1 / -1",
            transition: "all 0.5s ease", position: "relative", overflow: "hidden"
          }}>
            <div style={{ fontSize: "12px", opacity: 0.9, fontWeight: "900", letterSpacing: "2px", textTransform: "uppercase" }}>Flesch Reading Ease</div>
            <div style={{ fontSize: "84px", fontWeight: "950", margin: "10px 0" }}>{stats.score}</div>
            <div style={{ fontSize: "20px", fontWeight: "800" }}>{stats.grade}</div>
            <div style={{ position: "absolute", right: -20, bottom: -20, fontSize: "120px", opacity: 0.1 }}>📊</div>
          </div>

          {/* Quick Stats */}
          {[
            { label: "Total Words", val: stats.words, icon: "📝" },
            { label: "Sentences", val: stats.sentences, icon: "📐" },
            { label: "Syllables", val: stats.syllables, icon: "🗣️" }
          ].map((item, idx) => (
            <div key={idx} style={{ 
              padding: "25px", background: "var(--bg3)", borderRadius: "28px", 
              border: "1px solid var(--border)", textAlign: "center", display: "flex", 
              flexDirection: "column", gap: 5 
            }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <div style={{ fontSize: "28px", fontWeight: "900" }}>{item.val}</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: "800", textTransform: "uppercase" }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Formula Display (Technical SEO Element) */}
        <section style={{ 
          padding: "30px", borderRadius: "32px", background: "var(--bg3)", border: "1px dashed var(--border)"
        }}>
          <h4 style={{ margin: "0 0 15px 0", fontWeight: "900", display: "flex", alignItems: "center", gap: 10 }}>
            <span>🧪</span> How is it calculated?
          </h4>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6", margin: 0 }}>
            The <b>Flesch Reading Ease</b> test is a world-standard for readability. Higher scores indicate material that is easier to read; lower scores indicate passages that are more difficult to read.
          </p>
       <div style={{ marginTop: "15px", fontSize: "14px", padding: "15px", background: "var(--bg2)", borderRadius: "12px", fontFamily: "monospace", textAlign: "center", color: "#8b5cf6" }}>
  {"Score = 206.835 - 1.015 (words / sentences) - 84.6 (syllables / words)"}
</div>
        </section>

      </div>
    </ToolPage>
  );
}