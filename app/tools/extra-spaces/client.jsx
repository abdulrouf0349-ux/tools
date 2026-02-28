"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function ExtraSpacesClient() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({ removed: 0, show: false });
  const [copied, setCopied] = useState(false);

  const cleanText = () => {
    if (!text.trim()) return;

    const originalLength = text.length;
    
    // Core Cleanup Logic
    let result = text.replace(/[ \t]+/g, ' ');           // multiple spaces/tabs → single space
    result = result.replace(/\n{3,}/g, '\n\n');         // 3+ newlines → double newline
    result = result.split('\n').map(line => line.trim()).join('\n'); // Trim each line
    result = result.trim();                              // Trim entire block

    const finalLength = result.length;
    setText(result);
    setStats({ removed: originalLength - finalLength, show: true });

    // Reset status after 4 seconds
    setTimeout(() => setStats(prev => ({ ...prev, show: false })), 4000);
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Extra Space Remover"
      icon="🧽"
      color="#fb923c"
      description="Instantly strip away multiple spaces, redundant line breaks, and messy indents for a perfectly clean document."
      currentHref="/tools/extra-spaces"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input/Output Workspace */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <label className="label" style={{ fontWeight: 800 }}>Workspace</label>
            <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: "600" }}>
              {text.length} Characters
            </div>
          </div>
          <textarea
            className="textarea"
            rows={12}
            placeholder="Paste text with    irregular    spacing here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: 16, lineHeight: 1.6, background: "var(--bg2)", 
              border: "1px solid var(--border)", borderRadius: "24px", width: "100%", padding: "20px",
              color: "var(--text)", resize: "vertical", transition: "0.3s"
            }}
          />
        </div>

        {/* Dynamic Action Controls */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 15 }}>
          <button 
            className="btn-primary" 
            onClick={cleanText}
            disabled={!text.trim()}
            style={{ 
              background: "#fb923c", color: "#2d1600", fontWeight: "900",
              padding: "16px", borderRadius: "14px", border: "none", cursor: "pointer",
              boxShadow: "0 10px 20px -5px rgba(251, 146, 60, 0.4)", fontSize: "15px"
            }}
          >
            Clean All Spaces ✨
          </button>

          <button 
            onClick={handleCopy}
            disabled={!text.trim()}
            style={{ 
              background: copied ? "#10b981" : "var(--bg3)", border: "1px solid var(--border)", 
              borderRadius: "14px", cursor: "pointer", color: copied ? "#fff" : "var(--text)",
              fontWeight: "800", transition: "0.3s", padding: "16px"
            }}
          >
            {copied ? "✓ Copied to Clipboard" : "Copy Result"}
          </button>
        </div>

        {/* Impact Notification */}
        {stats.show && (
          <div style={{ 
            background: "rgba(16, 185, 129, 0.1)", color: "#10b981", padding: "15px", borderRadius: 16,
            textAlign: "center", fontWeight: "800", fontSize: "14px", border: "1px solid rgba(16, 185, 129, 0.2)",
            animation: "fadeInUp 0.4s ease-out"
          }}>
            🚀 Optimization complete! Removed {stats.removed} extra characters.
          </div>
        )}

        {/* Feature Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
          gap: 12 
        }}>
          {[
            { t: "Multi-Spaces", i: "␣", d: "Shrink spaces to 1" },
            { t: "Blank Lines", i: "↵", d: "Max 2 consecutive" },
            { t: "Trim Edges", i: "✂", d: "No start/end space" },
            { t: "Tabs & Indents", i: "→", d: "Normalize indents" },
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: "15px", background: "var(--bg3)", 
              border: "1px solid var(--border)", borderRadius: "18px",
              textAlign: "center"
            }}>
              <div style={{ color: "#fb923c", fontSize: "20px", fontWeight: "bold", marginBottom: 5 }}>{item.i}</div>
              <div style={{ fontSize: "12px", fontWeight: "800", marginBottom: 2 }}>{item.t}</div>
              <div style={{ fontSize: "10px", color: "var(--muted)" }}>{item.d}</div>
            </div>
          ))}
        </div>

        {/* Expert Tip */}
        <div style={{ 
          padding: "20px", borderRadius: "20px", background: "#fb923c0a", 
          border: "1px dashed #fb923c66", display: "flex", gap: 15, alignItems: "center"
        }}>
          <div style={{ fontSize: 24 }}>💡</div>
          <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.5" }}>
            <b>Formatting Tip:</b> Keeping redundant spaces can sometimes break code or increase file sizes in SEO metadata. This tool ensures your data remains lightweight and professional.
          </p>
        </div>

      </div>
    </ToolPage>
  );
}