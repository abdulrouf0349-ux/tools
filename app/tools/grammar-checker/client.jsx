"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function GrammarCheckerClient() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  // VIP Patterns for Localized Logic
  const commonErrors = [
    { pattern: /\b(their)\b\s+(is|was|are|am)\b/gi, replacement: "there", message: "Use 'there' for locations." },
    { pattern: /\b(there)\b\s+(house|car|book|office|room|son|daughter)\b/gi, replacement: "their", message: "Use 'their' for possession." },
    { pattern: /\b(your)\b\s+(welcome|great|smart|going|doing|ready)\b/gi, replacement: "you're", message: "Did you mean 'you are' (you're)?" },
    { pattern: /\b(you're)\b\s+(name|car|home|job|work)\b/gi, replacement: "your", message: "Use 'your' for ownership." },
    { pattern: /\ba\b\s+([aeiou][a-z]+)\b/gi, replacement: "an", message: "Use 'an' before vowel sounds." },
    { pattern: /\ban\b\s+([^aeiou][a-z]+)\b/gi, replacement: "a", message: "Use 'a' before consonant sounds." },
    { pattern: /\bcant\b/gi, replacement: "can't", message: "Missing apostrophe." },
    { pattern: /\bdont\b/gi, replacement: "don't", message: "Missing apostrophe." },
    { pattern: /\bshould of\b/gi, replacement: "should have", message: "The correct form is 'should have'." }
  ];

  const checkGrammar = () => {
    if (!text.trim()) return;
    setIsChecking(true);
    
    setTimeout(() => {
      const found = [];
      commonErrors.forEach(err => {
        const regex = new RegExp(err.pattern);
        let match;
        while ((match = regex.exec(text)) !== null) {
          found.push({
            id: Math.random().toString(36).substring(2, 9),
            index: match.index,
            text: match[0],
            replacement: err.replacement,
            message: err.message
          });
          if (!regex.global) break;
        }
      });
      setSuggestions(found);
      setIsChecking(false);
    }, 800);
  };

  const fixError = (id, original, replacement) => {
    const errorObj = suggestions.find(s => s.id === id);
    if (!errorObj) return;

    const newText = text.substring(0, errorObj.index) + replacement + text.substring(errorObj.index + original.length);
    setText(newText);
    setSuggestions(prev => prev.filter(s => s.id !== id));
  };

  return (
    <ToolPage
      title="Grammar & Spell Checker"
      icon="✍️"
      color="#4f46e1"
      description="Refine your writing instantly. Our AI-driven patterns detect common mistakes to make your text professional and error-free."
      currentHref="/tools/grammar-checker"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Text Input Area */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <label className="label" style={{ fontWeight: 800 }}>Draft your text</label>
            <span style={{ fontSize: "11px", color: "var(--muted)", fontWeight: "600" }}>{text.split(/\s+/).filter(x => x).length} Words</span>
          </div>
          <textarea 
            className="input" 
            rows="10"
            placeholder="Paste your text here to scan for errors... (e.g., 'i dont like their is a apple')"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (suggestions.length > 0) setSuggestions([]);
            }}
            style={{ 
              resize: "none", fontSize: "16px", lineHeight: "1.7", padding: "20px",
              borderRadius: "28px", background: "var(--bg2)", width: "100%",
              border: suggestions.length > 0 ? "2px solid #ef4444" : "1px solid var(--border)",
              color: "var(--text)", transition: "0.3s"
            }}
          ></textarea>
          
          <button 
            onClick={checkGrammar}
            disabled={!text || isChecking}
            className="btn-primary"
            style={{ 
              position: "absolute", bottom: "20px", right: "20px",
              padding: "12px 28px", background: "#4f46e1", width: "auto",
              borderRadius: "14px", fontWeight: "900", boxShadow: "0 8px 20px -6px rgba(79, 70, 225, 0.5)"
            }}
          >
            {isChecking ? "🔍 Scanning..." : "Scan for Errors ✨"}
          </button>
        </div>

        {/* Suggestions Results */}
        {suggestions.length > 0 && (
          <div style={{ animation: "fadeInUp 0.4s ease-out" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 15 }}>
              <span style={{ background: "#ef4444", color: "#fff", padding: "4px 10px", borderRadius: "8px", fontSize: "12px", fontWeight: "900" }}>{suggestions.length}</span>
              <h3 style={{ fontSize: "15px", fontWeight: "800", margin: 0 }}>Improvements Suggested</h3>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {suggestions.map((s) => (
                <div key={s.id} style={{ 
                  padding: "20px", background: "var(--bg3)", borderRadius: "20px",
                  border: "1px solid var(--border)", borderLeft: "5px solid #ef4444", 
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 15
                }}>
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--muted)", marginBottom: 4, fontWeight: "600" }}>{s.message}</div>
                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                      <span style={{ color: "#ef4444", textDecoration: "line-through", opacity: 0.6 }}>{s.text}</span>
                      <span style={{ margin: "0 10px", color: "var(--muted)" }}>→</span>
                      <span style={{ color: "#10b981", background: "rgba(16, 185, 129, 0.1)", padding: "2px 8px", borderRadius: "6px" }}>{s.replacement}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => fixError(s.id, s.text, s.replacement)}
                    style={{ 
                      background: "#10b981", color: "white", border: "none", 
                      padding: "10px 20px", borderRadius: "12px", cursor: "pointer", 
                      fontSize: "12px", fontWeight: "900", whiteSpace: "nowrap"
                    }}
                  >
                    Apply Fix
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty/Clean State */}
        {!isChecking && text && suggestions.length === 0 && (
          <div style={{ 
            textAlign: "center", padding: "30px", border: "1px dashed #10b981", 
            borderRadius: "24px", background: "rgba(16, 185, 129, 0.05)", animation: "fadeIn 0.5s ease" 
          }}>
            <div style={{ fontSize: "24px", marginBottom: "8px" }}>🎉</div>
            <p style={{ margin: 0, color: "#10b981", fontWeight: "700", fontSize: "14px" }}>
              Excellent! No common grammar issues detected.
            </p>
          </div>
        )}

        {/* SEO Knowledge Base */}
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: 20, alignItems: "flex-start"
        }}>
          <div style={{ 
            fontSize: "22px", background: "#4f46e1", width: "45px", height: "45px", 
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", flexShrink: 0 
          }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>Why Grammar Matters for SEO</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Search engines prioritize content that provides a great user experience. High-quality, error-free writing increases <b>dwell time</b> and reduces <b>bounce rates</b>, which are critical signals for ranking higher on Google.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}