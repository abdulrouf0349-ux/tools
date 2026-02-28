"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function RemoveDuplicatesClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [trimLines, setTrimLines] = useState(true);
  const [stats, setStats] = useState(null);
  const [copied, setCopied] = useState(false);

  const processText = () => {
    if (!input.trim()) return;

    let lines = input.split(/\r?\n/);
    const originalCount = lines.length;

    // Optional: Trim whitespace from each line
    if (trimLines) {
      lines = lines.map(line => line.trim());
    }

    // Remove empty lines if needed (optional filter)
    lines = lines.filter(line => line.length > 0);

    let uniqueLines;
    if (caseSensitive) {
      uniqueLines = [...new Set(lines)];
    } else {
      // Logic for case-insensitive deduplication while preserving original casing of first occurrence
      const seen = new Set();
      uniqueLines = lines.filter(line => {
        const lower = line.toLowerCase();
        return seen.has(lower) ? false : seen.add(lower);
      });
    }

    const result = uniqueLines.join("\n");
    setOutput(result);
    setStats({
      original: originalCount,
      unique: uniqueLines.length,
      removed: originalCount - uniqueLines.length
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Remove Duplicate Lines"
      icon="🧹"
      color="#8b5cf6"
      description="Clean up your data by removing redundant entries. Perfect for cleaning email lists, code snippets, or disorganized notes."
      currentHref="/tools/remove-duplicates"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Settings Panel */}
        <section style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "12px",
          padding: "20px",
          background: "var(--bg3)",
          borderRadius: "20px",
          border: "1px solid var(--border)"
        }}>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "14px" }}>
            <input type="checkbox" checked={caseSensitive} onChange={e => setCaseSensitive(e.target.checked)} style={{ accentColor: "#8b5cf6" }} />
            Case Sensitive
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "14px" }}>
            <input type="checkbox" checked={trimLines} onChange={e => setTrimLines(e.target.checked)} style={{ accentColor: "#8b5cf6" }} />
            Trim White Spaces
          </label>
        </section>

        {/* Editor Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          <section>
            <label className="label">Raw List</label>
            <textarea
              className="textarea"
              rows={12}
              placeholder="Apple&#10;Banana&#10;Apple&#10;Orange..."
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{ background: "var(--bg2)", fontSize: "14px", fontFamily: "monospace" }}
            />
          </section>

          <section>
            <label className="label">Unique Result</label>
            <div style={{ position: "relative" }}>
              <textarea
                className="textarea"
                rows={12}
                readOnly
                value={output}
                placeholder="Unique items will appear here..."
                style={{ background: "#0f172a", color: "#a5b4fc", fontSize: "14px", fontFamily: "monospace", border: "1px solid #8b5cf633" }}
              />
              {output && (
                <button 
                  onClick={handleCopy}
                  style={{ position: "absolute", right: "12px", bottom: "12px", background: copied ? "#22c55e" : "#8b5cf6", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "8px", fontSize: "12px", cursor: "pointer" }}
                >
                  {copied ? "Copied!" : "Copy List"}
                </button>
              )}
            </div>
          </section>
        </div>

        <button className="btn-primary" onClick={processText} style={{ background: "#8b5cf6", height: "55px", fontWeight: "800" }}>
          DEDUPLICATE LIST ⚡
        </button>

        

        {/* Stats Grid */}
        {stats && (
          <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", animation: "fadeUp 0.3s ease" }}>
            <div style={{ padding: "15px", background: "var(--bg3)", borderRadius: "14px", textAlign: "center", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "20px", fontWeight: "800", color: "var(--text)" }}>{stats.original}</div>
              <div style={{ fontSize: "10px", color: "var(--muted)", textTransform: "uppercase" }}>Original</div>
            </div>
            <div style={{ padding: "15px", background: "var(--bg3)", borderRadius: "14px", textAlign: "center", border: "1px solid #22c55e44" }}>
              <div style={{ fontSize: "20px", fontWeight: "800", color: "#22c55e" }}>{stats.unique}</div>
              <div style={{ fontSize: "10px", color: "var(--muted)", textTransform: "uppercase" }}>Unique</div>
            </div>
            <div style={{ padding: "15px", background: "var(--bg3)", borderRadius: "14px", textAlign: "center", border: "1px solid #ef444444" }}>
              <div style={{ fontSize: "20px", fontWeight: "800", color: "#ef4444" }}>{stats.removed}</div>
              <div style={{ fontSize: "10px", color: "var(--muted)", textTransform: "uppercase" }}>Duplicates</div>
            </div>
          </section>
        )}

      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}