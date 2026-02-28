"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function AlphabetizerClient() {
  const [text, setText] = useState("");
  const [order, setOrder] = useState("asc");
  const [copied, setCopied] = useState(false);

  const sortList = (sortOrder = order) => {
    if (!text.trim()) return;
    const lines = text.split("\n").filter(line => line.trim() !== "");
    const sorted = lines.sort((a, b) => {
      return sortOrder === "asc" 
        ? a.localeCompare(b, undefined, { sensitivity: 'base' })
        : b.localeCompare(a, undefined, { sensitivity: 'base' });
    });
    setText(sorted.join("\n"));
  };

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
    sortList(newOrder);
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Alphabetizer"
      icon="🔤"
      color="#8b5cf6"
      description="Instantly sort your lists in alphabetical or reverse-alphabetical order. Perfect for organizing names, keywords, and data."
      currentHref="/tools/alphabetizer"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Area */}
        <div style={{ width: "100%" }}>
          <label className="label" style={{ display: "block", marginBottom: 12, fontWeight: 600, fontSize: 14 }}>
            Paste Your List (One item per line)
          </label>
          <textarea
            className="textarea"
            rows={10}
            placeholder={"Apple\nZebra\nBanana\nOrange"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              width: "100%", fontSize: 16, lineHeight: 1.5, fontFamily: "monospace", padding: 15, borderRadius: 16, background: "var(--bg1)", border: "1px solid var(--border)", color: "var(--text)", outline: "none", resize: "vertical"
            }}
          />
        </div>

        {/* Sorting Controls */}
        <div className="controls-grid">
          <button 
            onClick={() => handleOrderChange("asc")}
            style={{
              padding: "14px", borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer",
              background: order === "asc" ? "#8b5cf615" : "var(--bg3)", color: order === "asc" ? "#8b5cf6" : "var(--muted)", border: `1px solid ${order === "asc" ? "#8b5cf6" : "var(--border)"}`, transition: "all 0.2s"
            }}
          >
            Sort A-Z ↑
          </button>
          <button 
            onClick={() => handleOrderChange("desc")}
            style={{
              padding: "14px", borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: "pointer",
              background: order === "desc" ? "#8b5cf615" : "var(--bg3)", color: order === "desc" ? "#8b5cf6" : "var(--muted)", border: `1px solid ${order === "desc" ? "#8b5cf6" : "var(--border)"}`, transition: "all 0.2s"
            }}
          >
            Sort Z-A ↓
          </button>
        </div>

        {/* Action Row */}
        <div className="action-row">
          <button 
            className="btn-primary" 
            onClick={() => sortList()}
            disabled={!text}
            style={{ flex: 2, background: "#8b5cf6", color: "white", padding: "14px", borderRadius: 12, border: "none", fontWeight: 800, cursor: "pointer", opacity: !text ? 0.5 : 1 }}
          >
            Sort Now ✨
          </button>
          <button 
            className="btn-ghost" 
            onClick={handleCopy}
            disabled={!text}
            style={{ flex: 1, padding: "14px", borderRadius: 12, background: "var(--bg2)", border: "1px solid var(--border)", color: copied ? "#10b981" : "var(--text)", fontWeight: 600, cursor: "pointer" }}
          >
            {copied ? "✓ Copied" : "Copy List"}
          </button>
        </div>

        {/* Features Info */}
        <div className="features-grid">
           <div style={{ padding: 15, background: "var(--bg2)", borderRadius: 16, border: "1px solid var(--border)", fontSize: 12, color: "var(--muted)" }}>
             ✅ <b>Case Insensitive:</b> 'apple' and 'Apple' are sorted logically.
           </div>
           <div style={{ padding: 15, background: "var(--bg2)", borderRadius: 16, border: "1px solid var(--border)", fontSize: 12, color: "var(--muted)" }}>
             🚫 <b>Clean Up:</b> Automatically removes empty lines.
           </div>
        </div>

        {/* ══════════════════════════════════════════════════
             🚀 SEO CONTENT SECTION
        ══════════════════════════════════════════════════ */}
        <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "30px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>Why Use an Online Alphabetizer?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            Whether you are a developer organizing <strong>SEO keywords</strong>, a teacher sorting student names, or 
            simply someone who loves order, our <strong>Online Alphabetizer</strong> is the fastest way to arrange 
            text lists. Manual sorting is time-consuming and prone to errors—our tool ensures 100% accuracy in milliseconds.
          </p>

          <h3 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Features of Our List Sorter:</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>
            <li><strong>A to Z Sorting:</strong> Arrange items in standard ascending order.</li>
            <li><strong>Z to A Sorting:</strong> Reverse the list with a single click for descending order.</li>
            <li><strong>Large Data Support:</strong> Handle lists with thousands of lines effortlessly.</li>
            <li><strong>Instant Copy:</strong> One-click copy to clipboard for quick workflow integration.</li>
          </ul>
        </div>

      </div>

      <style jsx>{`
        .controls-grid, .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .action-row { display: flex; gap: 12px; }
        @media (max-width: 600px) {
          .controls-grid, .features-grid, .action-row { grid-template-columns: 1fr; flex-direction: column; }
          .action-row button { width: 100%; }
        }
      `}</style>
    </ToolPage>
  );
}