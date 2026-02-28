"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function TitleCaseClient() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToTitleCase = () => {
    if (!text.trim()) return;

    // Smart logic for editorial titles
    const minorWords = ["a", "an", "and", "as", "at", "but", "by", "for", "if", "in", "nor", "of", "on", "or", "so", "the", "to", "up", "yet"];

    const result = text
      .toLowerCase()
      .split(" ")
      .map((word, index, array) => {
        if (
          index > 0 &&
          index !== array.length - 1 &&
          minorWords.includes(word)
        ) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    setText(result);
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transform = (type) => {
    if (!text.trim()) return;
    if (type === "upper") setText(text.toUpperCase());
    if (type === "lower") setText(text.toLowerCase());
  };

  return (
    <ToolPage
      title="Title Case Converter"
      icon="Aa"
      color="#6366f1"
      description="Polishing your headlines has never been easier. Use our smart converter for blog posts, essays, and professional documents."
      currentHref="/tools/title-case"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Studio */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#6366f1", textTransform: "uppercase" }}>Original Text</label>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>{text.length} characters</span>
          </div>
          <textarea
            className="textarea"
            rows={8}
            placeholder="Type or paste your text here (e.g. how to build a billion dollar startup)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: "18px", 
              padding: "25px", 
              borderRadius: "28px",
              background: "var(--bg3)",
              border: "2px solid var(--border)",
              lineHeight: "1.6",
              transition: "all 0.3s ease"
            }}
          />
        </section>

        {/* Transformation Controls */}
        <section style={{ 
          background: "var(--bg2)", 
          padding: "25px", 
          borderRadius: "32px", 
          border: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
            gap: "15px" 
          }}>
            <button 
              className="btn-primary" 
              onClick={convertToTitleCase}
              disabled={!text}
              style={{ background: "#6366f1", borderRadius: "18px", height: "55px", fontWeight: "900" }}
            >
              TITLE CASE ✨
            </button>
            <button 
              className="btn-ghost" 
              onClick={() => transform("upper")}
              disabled={!text}
              style={{ border: "2px solid var(--border)", borderRadius: "18px", height: "55px" }}
            >
              UPPERCASE
            </button>
            <button 
              className="btn-ghost" 
              onClick={() => transform("lower")}
              disabled={!text}
              style={{ border: "2px solid var(--border)", borderRadius: "18px", height: "55px" }}
            >
              lowercase
            </button>
          </div>

          <div style={{ display: "flex", gap: "15px" }}>
            <button 
              onClick={handleCopy}
              disabled={!text}
              style={{ 
                flex: 3,
                height: "60px",
                borderRadius: "18px",
                background: copied ? "#4fffb0" : "var(--bg3)", 
                color: copied ? "#003d24" : "var(--text)",
                border: "2px solid var(--border)",
                fontWeight: "900",
                fontSize: "15px",
                transition: "all 0.3s"
              }}
            >
              {copied ? "✓ COPIED SUCCESSFULLY" : "COPY FORMATTED TEXT"}
            </button>
            <button 
              onClick={() => setText("")}
              style={{ 
                flex: 1, 
                borderRadius: "18px", 
                background: "transparent", 
                border: "2px solid var(--border)",
                fontSize: "13px",
                fontWeight: "bold",
                color: "#ef4444"
              }}
            >
              CLEAR
            </button>
          </div>
        </section>

        {/* Dynamic Tip Section */}
        <div style={{ 
          padding: "25px", 
          borderRadius: "24px", 
          background: "rgba(99, 102, 241, 0.05)", 
          border: "1px dashed #6366f166",
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>🖋️</div>
          <div>
            <h5 style={{ margin: "0 0 5px 0", color: "#6366f1" }}>Editorial Intelligence</h5>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Our engine understands the difference between a preposition and a main word. Words like <b>'if'</b>, <b>'for'</b>, and <b>'the'</b> are only capitalized if they appear first in your sentence.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}