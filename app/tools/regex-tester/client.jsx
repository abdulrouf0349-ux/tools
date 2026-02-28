"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function RegexTesterClient() {
  const [pattern, setPattern] = useState("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("My email is yara@example.com and dev@clean-studio.pk");
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    testRegex();
  }, [pattern, flags, text]);

  const testRegex = () => {
    setError(null);
    setMatches([]);

    if (!pattern) return;

    try {
      const regex = new RegExp(pattern, flags);
      const allMatches = [];
      let match;

      if (flags.includes('g')) {
        while ((match = regex.exec(text)) !== null) {
          allMatches.push({
            value: match[0],
            index: match.index,
            groups: match.slice(1)
          });
          if (match.index === regex.lastIndex) regex.lastIndex++; 
        }
      } else {
        match = text.match(regex);
        if (match) {
          allMatches.push({
            value: match[0],
            index: match.index || 0,
            groups: match.slice(1)
          });
        }
      }
      setMatches(allMatches);
    } catch (err) {
      setError(err.message);
    }
  };

  const highlightedText = () => {
    if (!pattern || error || matches.length === 0) return text;

    let result = [];
    let lastIndex = 0;

    matches.forEach((match, i) => {
      // Text before match
      result.push(text.slice(lastIndex, match.index));
      // The match itself
      result.push(
        <mark key={i} style={{ 
          background: "#ec4899", 
          color: "white", 
          borderRadius: "4px", 
          padding: "0 2px" 
        }}>
          {match.value}
        </mark>
      );
      lastIndex = match.index + match.value.length;
    });

    result.push(text.slice(lastIndex));
    return result;
  };

  return (
    <ToolPage
      title="Regex Tester & Debugger"
      icon=" / / "
      color="#ec4899"
      description="Test your Regular Expressions in real-time. Debug patterns, check matches, and master Regex logic."
      keywords={["Regex Tester", "Regular Expression", "Pattern Matcher", "Javascript Regex"]}
      currentHref="/tools/regex-tester"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Regex Input Section */}
        <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
          <div style={{ flex: 1 }}>
            <label className="label">Regular Expression</label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 15, top: 12, color: "var(--muted)" }}>/</span>
              <input 
                className="input" 
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                style={{ paddingLeft: 25, fontFamily: "monospace", border: error ? "1px solid #ef4444" : "1px solid var(--border)" }}
              />
              <span style={{ position: "absolute", right: 15, top: 12, color: "var(--muted)" }}>/</span>
            </div>
          </div>
          <div style={{ width: 80 }}>
            <label className="label">Flags</label>
            <input 
              className="input" 
              value={flags}
              placeholder="gim"
              onChange={(e) => setFlags(e.target.value)}
              style={{ textAlign: "center", fontFamily: "monospace" }}
            />
          </div>
        </div>

        {error && <div style={{ fontSize: 12, color: "#ef4444", marginTop: -15 }}>⚠️ {error}</div>}

        {/* Test String Area */}
        <div>
          <label className="label">Test String</label>
          <div style={{ position: "relative", minHeight: "120px" }}>
            {/* Transparent Textarea for Input */}
            <textarea
              className="textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ 
                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                background: "transparent", color: "transparent", caretColor: "var(--text)",
                zIndex: 2, fontFamily: "monospace", fontSize: 15
              }}
            />
            {/* Highlighted Overlay */}
            <div style={{ 
              padding: "13px", borderRadius: "14px", background: "var(--bg2)",
              border: "1px solid var(--border)", minHeight: "120px", 
              fontFamily: "monospace", fontSize: 15, whiteSpace: "pre-wrap",
              wordBreak: "break-all", color: "var(--text)"
            }}>
              {highlightedText()}
            </div>
          </div>
        </div>

        {/* Match Details */}
        <div style={{ background: "var(--bg3)", padding: 20, borderRadius: 20, border: "1px solid var(--border)" }}>
          <h4 style={{ margin: "0 0 15px 0", fontSize: 14, display: "flex", justifyContent: "space-between" }}>
            <span>Matches ({matches.length})</span>
            <span style={{ color: "#ec4899" }}>Live Preview</span>
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {matches.length > 0 ? matches.map((m, i) => (
              <div key={i} style={{ padding: "5px 12px", background: "var(--bg)", border: "1px solid #ec489944", borderRadius: "8px", fontSize: 12 }}>
                <b style={{ color: "#ec4899" }}>#{i+1}:</b> {m.value}
              </div>
            )) : <span style={{ fontSize: 12, opacity: 0.5 }}>No matches found...</span>}
          </div>
        </div>

        

        {/* Cheat Sheet Tip */}
        <div style={{ padding: 20, borderRadius: 20, background: "#ec48990a", border: "1px dashed #ec489966" }}>
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
            <b>Quick Help:</b> <code style={{color: "#ec4899"}}>\d</code> (digit), <code style={{color: "#ec4899"}}>\w</code> (word), <code style={{color: "#ec4899"}}>\s</code> (whitespace), <code style={{color: "#ec4899"}}>^</code> (start), <code style={{color: "#ec4899"}}>$</code> (end).
          </p>
        </div>

      </div>
    </ToolPage>
  );
}