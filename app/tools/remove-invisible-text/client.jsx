"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function InvisibleTextClient() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({ hidden: 0, total: 0, active: false });
  const [copied, setCopied] = useState(false);

  const removeInvisible = () => {
    if (!text.trim()) return;

    // Comprehensive regex for zero-width and control characters
    const invisibleRegex = /[\u200B-\u200D\uFEFF\u200E\u200F\u202A-\u202E]/g;
    const matches = text.match(invisibleRegex);
    const count = matches ? matches.length : 0;
    
    const result = text.replace(invisibleRegex, "");
    
    setText(result);
    setStats({ hidden: count, total: result.length, active: true });

    // Reset status message after some time
    setTimeout(() => setStats(prev => ({ ...prev, active: false })), 4000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Invisible Text Remover"
      icon="👁️‍🗨️"
      color="#ff6b6b"
      description="Scan and remove 'ghost' characters like Zero-Width Spaces (ZWSP) that cause invisible bugs in your code and text."
      currentHref="/tools/invisible-text-remover"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
        
        {/* Editor Shell */}
        <section style={{ 
          background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 40px -15px rgba(255, 107, 107, 0.15)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
            <label style={{ fontSize: "11px", fontWeight: "900", color: "#ff6b6b", textTransform: "uppercase", letterSpacing: "1px" }}>
              Input Text (Suspected Ghost Chars)
            </label>
            {text && (
              <button onClick={() => setText("")} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "11px", fontWeight: "bold" }}>
                CLEAR ALL
              </button>
            )}
          </div>
          
          <textarea
            className="input"
            rows={10}
            placeholder="Paste your text here... Even if it looks normal, it might contain hidden characters!"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: "16px", fontFamily: "monospace", background: "var(--bg3)", padding: "25px",
              borderRadius: "24px", lineHeight: "1.6", border: "1px solid var(--border)", resize: "none"
            }}
          />
        </section>

        {/* Dynamic Status Feedback */}
        {stats.active && (
          <div style={{ 
            padding: "18px", borderRadius: "20px", textAlign: "center", fontWeight: "800", fontSize: "14px",
            animation: "slideUp 0.4s ease",
            background: stats.hidden > 0 ? "#ff6b6b15" : "#10b98115",
            border: stats.hidden > 0 ? "1px solid #ff6b6b44" : "1px solid #10b98144",
            color: stats.hidden > 0 ? "#ff6b6b" : "#10b981"
          }}>
            {stats.hidden > 0 
              ? `🎯 EXORCISED! Removed ${stats.hidden} hidden characters from your text.`
              : `✨ CLEAN! No invisible characters were detected.`
            }
          </div>
        )}

        {/* Action Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 15 }}>
          <button 
            className="btn-primary" 
            onClick={removeInvisible}
            disabled={!text}
            style={{ 
              background: "#ff6b6b", height: "60px", fontSize: "16px", fontWeight: "900",
              boxShadow: "0 8px 20px -5px rgba(255, 107, 107, 0.4)" 
            }}
          >
            SCAN & CLEAN TEXT ⚡
          </button>

          <button 
            onClick={handleCopy}
            disabled={!text}
            style={{ 
              height: "60px", background: "var(--bg3)", border: "1px solid var(--border)",
              borderRadius: "20px", color: copied ? "#10b981" : "var(--text)", 
              fontWeight: "800", cursor: "pointer", transition: "all 0.2s"
            }}
          >
            {copied ? "✓ COPIED TO CLIPBOARD" : "COPY CLEAN VERSION"}
          </button>
        </div>

        {/* Education Section */}
        <div style={{ 
          marginTop: "10px", padding: "30px", borderRadius: "32px", 
          background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h4 style={{ fontSize: "15px", fontWeight: "900", marginBottom: "15px", color: "#ff6b6b" }}>
             Why remove invisible characters?
          </h4>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", margin: 0 }}>
            Hidden Unicode symbols like the <b>Zero-Width Space</b> often find their way into your text from PDF copies or CMS editors. 
            They are "invisible" to humans but "visible" to computers—causing broken URLs, database errors, and logic bugs in code.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 15, marginTop: "20px" }}>
            {[
              { n: "U+200B", d: "Zero Width Space" },
              { n: "U+FEFF", d: "Byte Order Mark" },
              { n: "U+200C", d: "ZW Non-Joiner" },
              { n: "U+200D", d: "ZW Joiner" },
            ].map((char, i) => (
              <div key={i} style={{ padding: "12px", background: "var(--bg2)", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <code style={{ color: "#ff6b6b", fontSize: "12px" }}>{char.n}</code>
                <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "4px" }}>{char.d}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </ToolPage>
  );
}