"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

const CASES = [
  { key: "upper",    label: "UPPERCASE",  example: "HELLO WORLD" },
  { key: "lower",    label: "lowercase",  example: "hello world" },
  { key: "title",    label: "Title Case", example: "Hello World" },
  { key: "sentence", label: "Sentence",   example: "Hello world" },
  { key: "camel",    label: "camelCase",  example: "helloWorld"  },
  { key: "snake",    label: "snake_case", example: "hello_world" },
  { key: "kebab",    label: "kebab-case", example: "hello-world" },
];

export default function CaseClient() {
  const [text, setText]     = useState("");
  const [result, setResult] = useState("");
  const [active, setActive] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = (caseType) => {
    if (!text.trim()) return;
    setActive(caseType);
    
    let convertedText = "";
    const input = text.trim();

    switch (caseType) {
      case "upper":
        convertedText = input.toUpperCase();
        break;
      case "lower":
        convertedText = input.toLowerCase();
        break;
      case "sentence":
        convertedText = input.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
        break;
      case "title":
        convertedText = input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        break;
      case "camel":
        convertedText = input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        break;
      case "snake":
        convertedText = input.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
        break;
      case "kebab":
        convertedText = input.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        break;
      default:
        convertedText = input;
    }
    setResult(convertedText);
  };

  const copy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .case-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
          .case-btn  { padding: 12px 10px !important; }
          .case-btn-label { font-size: 12px !important; }
          .case-btn-example { display: none !important; }
        }
      `}</style>

      <ToolPage
        title="Case Converter" 
        icon="🔡" 
        color="#00d4ff"
        description="Convert text between any format instantly. Perfect for developers, writers, and students."
        currentHref="/tools/case-converter"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Input Area */}
          <div>
            <label className="label" style={{ marginBottom: "10px", display: "block", fontWeight: "600" }}>Your Text</label>
            <textarea
              className="textarea"
              rows={6}
              placeholder="Paste your text here..."
              value={text}
              onChange={e => { setText(e.target.value); setResult(""); setActive(""); }}
              style={{ width: "100%", borderRadius: 16, border: "1px solid var(--border)", background: "var(--bg1)", padding: 15, color: "var(--text)", outline: "none", fontSize: "16px" }}
            />
          </div>

          {/* Controls */}
          <div>
            <label className="label" style={{ marginBottom: "10px", display: "block", fontWeight: "600" }}>Select Format</label>
            <div className="case-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 10 }}>
              {CASES.map(c => (
                <button
                  key={c.key}
                  className="case-btn"
                  onClick={() => convert(c.key)}
                  disabled={!text.trim()}
                  style={{
                    background: active === c.key ? "#00d4ff15" : "var(--bg2)",
                    border: `1px solid ${active === c.key ? "#00d4ff" : "var(--border)"}`,
                    borderRadius: 14, padding: "15px", cursor: "pointer", textAlign: "left", transition: "0.2s", opacity: !text.trim() ? 0.5 : 1,
                  }}
                >
                  <div className="case-btn-label" style={{ fontSize: "13px", fontWeight: "700", color: active === c.key ? "#00d4ff" : "var(--text)", marginBottom: "4px" }}>
                    {c.label}
                  </div>
                  <div className="case-btn-example" style={{ fontSize: "10px", color: "var(--muted)", opacity: 0.8 }}>
                    {c.example}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Result Box */}
          {result && (
            <div style={{ background: "var(--bg3)", padding: 25, borderRadius: 20, border: "2px solid #00d4ff22", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
                <span style={{ fontSize: "11px", color: "#00d4ff", fontWeight: "800", textTransform: "uppercase" }}>Result Output</span>
                <button 
                  onClick={copy} 
                  style={{ background: copied ? "#4fffb022" : "#00d4ff22", color: copied ? "#4fffb0" : "#00d4ff", border: "none", padding: "8px 16px", borderRadius: "10px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}
                >
                  {copied ? "✓ Copied" : "Copy Result"}
                </button>
              </div>
              <div style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--text)", whiteSpace: "pre-wrap", background: "rgba(0,0,0,0.2)", padding: "15px", borderRadius: "12px" }}>
                {result}
              </div>
            </div>
          )}

          {/* SEO Content Section */}
          <div style={{ marginTop: "20px", borderTop: "1px solid var(--border)", paddingTop: "30px" }}>
            <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>Why Use a Case Converter?</h2>
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
              Whether you're writing an essay or coding a new app, text formatting matters. 
              Our <strong>Case Converter</strong> helps you quickly fix accidentally clicked Caps Lock or format variable names for programming.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" }}>
              <div>
                <h4 style={{ fontSize: "15px", color: "var(--text)" }}>For Writers</h4>
                <p style={{ fontSize: "13px", color: "var(--muted)" }}>Convert messy notes into clean <b>Sentence case</b> or <b>Title Case</b> for headlines.</p>
              </div>
              <div>
                <h4 style={{ fontSize: "15px", color: "var(--text)" }}>For Developers</h4>
                <p style={{ fontSize: "13px", color: "var(--muted)" }}>Instantly switch between <b>camelCase</b>, <b>snake_case</b>, and <b>kebab-case</b> for clean code.</p>
              </div>
            </div>
          </div>

          {/* Pro Tip */}
          <div style={{ padding: 20, borderRadius: 20, background: "rgba(0, 212, 255, 0.05)", border: "1px dashed #00d4ff66", display: "flex", gap: 15, alignItems: "center" }}>
            <div style={{ fontSize: 24 }}>💡</div>
            <p style={{ margin: 0, fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>
              <b>Quick Tip:</b> Sentence case automatically capitalizes the first letter of every sentence, making it perfect for fixing quick drafts.
            </p>
          </div>
        </div>
      </ToolPage>
    </>
  );
}