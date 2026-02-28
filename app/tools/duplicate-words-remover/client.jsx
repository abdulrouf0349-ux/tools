"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function DuplicateWordsClient() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({ removed: 0, show: false });
  const [matchCase, setMatchCase] = useState(false);

  const removeDuplicates = () => {
    if (!text || !text.trim()) return;

    // Normalizing text into words
    const allWords = text.split(/\s+/);
    const seen = new Set();
    const result = [];
    let count = 0;

    for (let word of allWords) {
      if (word === "") continue;

      // Clean punctuation for comparison only
      const clean = word.replace(/[.,!?;:()]/g, "");
      const checkVal = matchCase ? clean : clean.toLowerCase();

      if (checkVal && seen.has(checkVal)) {
        count++;
      } else {
        if (checkVal) seen.add(checkVal);
        result.push(word);
      }
    }

    const cleanedText = result.join(" ");
    setText(cleanedText);
    setStats({ removed: count, show: true });
    
    // Auto-hide the success toast
    setTimeout(() => setStats(prev => ({ ...prev, show: false })), 4000);
  };

  const handleClear = () => {
    setText("");
    setStats({ removed: 0, show: false });
  };

  return (
    <ToolPage
      title="Duplicate Word Remover"
      icon="👯"
      color="#2dd4bf"
      description="Instantly strip away repetitive words to make your writing professional, concise, and error-free."
      currentHref="/tools/duplicate-words"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Textarea Section */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <label className="label" style={{ fontWeight: "700" }}>Your Content</label>
            <button 
              onClick={handleClear} 
              style={{ background: "none", border: "none", color: "#ef4444", fontSize: "12px", cursor: "pointer", fontWeight: "700" }}
            >
              Clear All
            </button>
          </div>
          <textarea
            className="textarea"
            rows={10}
            placeholder="Example: This is a test test to to remove duplicates..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: 16, lineHeight: 1.6, background: "var(--bg2)", 
              border: "1px solid var(--border)", borderRadius: "20px", width: "100%", padding: "20px",
              color: "var(--text)", resize: "vertical"
            }}
          />
        </div>

        {/* Action Row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 15, alignItems: "center" }}>
          <button 
            className="btn-primary" 
            onClick={removeDuplicates}
            disabled={!text.trim()}
            style={{ 
              background: "#2dd4bf", color: "#003d24", fontWeight: "900", flex: "2",
              padding: "16px", borderRadius: "14px", border: "none", cursor: "pointer",
              boxShadow: "0 10px 20px -5px rgba(45, 212, 191, 0.4)", fontSize: "15px"
            }}
          >
            Clean Redundant Words ⚡
          </button>

          <button 
            onClick={() => setMatchCase(!matchCase)}
            style={{
              padding: "16px", borderRadius: 14, fontSize: "14px", fontWeight: 800, cursor: "pointer",
              border: `1px solid ${matchCase ? "#2dd4bf" : "var(--border)"}`,
              background: matchCase ? "rgba(45, 212, 191, 0.1)" : "var(--bg3)",
              color: matchCase ? "#2dd4bf" : "var(--muted)",
              transition: "0.2s", flex: "1"
            }}
          >
            {matchCase ? "✓" : "○"} Match Case
          </button>
        </div>

        {/* Floating Success Notification */}
        {stats.show && (
          <div style={{ 
            background: "#4fffb0", color: "#003d24", padding: "12px 24px", borderRadius: 16,
            textAlign: "center", fontWeight: "800", fontSize: "14px", border: "2px solid #003d2410",
            animation: "fadeInUp 0.4s ease-out"
          }}>
            🎉 Cleaned! Removed {stats.removed} duplicate words.
          </div>
        )}

        {/* Pro Content Card */}
        
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: 20, alignItems: "flex-start"
        }}>
          <div style={{ 
            fontSize: "24px", background: "#2dd4bf", width: "45px", height: "45px", 
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", flexShrink: 0 
          }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>The "The The" Problem</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Double word typing errors are the most common mistakes missed by standard spellcheckers. 
              Our tool scans the entire text block and ensures each word appears uniquely in its context, 
              preserving your punctuation and structure while removing the noise.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}