"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function FindReplaceClient() {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [useRegex, setUseRegex] = useState(false);
  const [matchCase, setMatchCase] = useState(false);
  const [replacedCount, setReplacedCount] = useState(0);

  const handleAction = () => {
    if (!text || !findText) return;

    try {
      let resultText = "";
      let count = 0;

      if (useRegex) {
        const flags = matchCase ? "g" : "gi";
        const regex = new RegExp(findText, flags);
        const matches = text.match(regex);
        count = matches ? matches.length : 0;
        resultText = text.replace(regex, replaceText);
      } else {
        const escapedFind = findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const flags = matchCase ? "g" : "gi";
        const regex = new RegExp(escapedFind, flags);
        const matches = text.match(regex);
        count = matches ? matches.length : 0;
        resultText = text.replace(regex, replaceText);
      }

      setText(resultText);
      setReplacedCount(count);
      setTimeout(() => setReplacedCount(0), 4000);
    } catch (err) {
      alert("Invalid Regular Expression. Please check your syntax.");
    }
  };

  return (
    <ToolPage
      title="Find & Replace"
      icon="🔍"
      color="#c084fc"
      description="Powerfully search and replace text patterns using standard strings or complex Regular Expressions (Regex)."
      currentHref="/tools/find-replace"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Main Editor */}
        <div style={{ position: "relative" }}>
          <label className="label" style={{ fontWeight: 800 }}>Content to Edit</label>
          <textarea
            className="textarea"
            rows={10}
            placeholder="Paste your content here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: 16, lineHeight: 1.6, background: "var(--bg2)", 
              border: "1px solid var(--border)", borderRadius: "24px", width: "100%", padding: "20px",
              color: "var(--text)"
            }}
          />
        </div>

        {/* Search & Replace Inputs */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
          gap: 16,
          background: "var(--bg3)",
          padding: "20px",
          borderRadius: "20px",
          border: "1px solid var(--border)"
        }}>
          <div>
            <label className="label" style={{ fontSize: "12px", opacity: 0.7 }}>SEARCH FOR</label>
            <input 
              className="input" 
              type="text" 
              placeholder="Target word or pattern..." 
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
              style={{ background: "var(--bg1)", border: "1px solid var(--border)", borderRadius: "12px", padding: "12px" }}
            />
          </div>
          <div>
            <label className="label" style={{ fontSize: "12px", opacity: 0.7 }}>REPLACE WITH</label>
            <input 
              className="input" 
              type="text" 
              placeholder="New text (leave empty to delete)..." 
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
              style={{ background: "var(--bg1)", border: "1px solid var(--border)", borderRadius: "12px", padding: "12px" }}
            />
          </div>
        </div>

        {/* Logic Toggles */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button 
            onClick={() => setMatchCase(!matchCase)}
            style={{
              padding: "10px 20px", borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: "pointer",
              border: `1px solid ${matchCase ? "#c084fc" : "var(--border)"}`,
              background: matchCase ? "rgba(192, 132, 252, 0.1)" : "var(--bg3)",
              color: matchCase ? "#c084fc" : "var(--muted)",
              transition: "0.2s"
            }}
          >
            {matchCase ? "●" : "○"} Match Case
          </button>
          <button 
            onClick={() => setUseRegex(!useRegex)}
            style={{
              padding: "10px 20px", borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: "pointer",
              border: `1px solid ${useRegex ? "#c084fc" : "var(--border)"}`,
              background: useRegex ? "rgba(192, 132, 252, 0.1)" : "var(--bg3)",
              color: useRegex ? "#c084fc" : "var(--muted)",
              transition: "0.2s"
            }}
          >
            {useRegex ? "●" : "○"} Use Regex (.*)
          </button>
        </div>

        {/* Execute Button */}
        <div style={{ position: "relative" }}>
          <button 
            className="btn-primary" 
            onClick={handleAction}
            disabled={!text || !findText}
            style={{ 
              background: "#c084fc", color: "#1a0030", width: "100%", 
              fontWeight: "900", padding: "18px", borderRadius: "16px",
              boxShadow: "0 10px 20px -5px rgba(192, 132, 252, 0.4)"
            }}
          >
            Replace All Occurrences ⚡
          </button>
          
          {replacedCount > 0 && (
            <div style={{ 
              position: "absolute", top: -45, left: "50%", transform: "translateX(-50%)",
              background: "#4fffb0", color: "#003d24", padding: "8px 20px", borderRadius: 12,
              fontSize: 13, fontWeight: "900", animation: "fadeUp .4s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}>
              ✨ Success! {replacedCount} matches updated.
            </div>
          )}
        </div>

        {/* SEO Context Card */}
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: 20, alignItems: "flex-start"
        }}>
          <div style={{ 
            fontSize: "24px", background: "#c084fc", width: "45px", height: "45px", 
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", flexShrink: 0 
          }}>🧠</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>Pattern Intelligence</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Our <b>Regex (Regular Expression)</b> engine allows for advanced pattern matching. Use <code>\d+</code> to find numbers or <code>\s+</code> for white spaces. Leaving the replacement field empty acts as a bulk delete tool.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}