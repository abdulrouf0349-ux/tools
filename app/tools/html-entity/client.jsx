"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function HtmlEntityClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode"); // 'encode' for Text -> Entity, 'decode' for Entity -> Text
  const [copied, setCopied] = useState(false);

  const handleProcess = () => {
    if (!input.trim()) return;

    if (mode === "encode") {
      const div = document.createElement("div");
      div.textContent = input;
      setOutput(div.innerHTML);
    } else {
      const div = document.createElement("div");
      div.innerHTML = input;
      setOutput(div.textContent || div.innerText || "");
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="HTML Entity Converter"
      icon="<>"
      color="#f43f5e"
      description="Convert special characters to their corresponding HTML entities for safe web display and storage."
      currentHref="/tools/html-entity"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* h2 SEO Header */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px", color: "var(--text)" }}>
            Professional HTML Character Escaping
          </h2>
          
          <div style={{ 
            display: "flex", background: "var(--bg2)", padding: "6px", 
            borderRadius: "18px", border: "1px solid var(--border)", marginBottom: "20px"
          }}>
            {["encode", "decode"].map((m) => (
              <button 
                key={m}
                onClick={() => { setMode(m); setOutput(""); }}
                style={{ 
                  flex: 1, padding: "14px", borderRadius: "14px", fontSize: "14px", fontWeight: "800",
                  background: mode === m ? "#f43f5e" : "transparent",
                  color: mode === m ? "white" : "var(--muted)",
                  border: "none", cursor: "pointer", transition: "0.3s",
                  textTransform: "uppercase"
                }}
              >
                {m === "encode" ? "Encode (Text → &lt;)" : "Decode (&lt; → Text)"}
              </button>
            ))}
          </div>
        </section>

        {/* Input/Output Block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "10px", opacity: 0.8 }}>INPUT TEXT</h3>
            <textarea
              className="textarea"
              rows={5}
              placeholder={mode === "encode" ? "e.g. <div>Hello World</div>" : "e.g. &lt;div&gt;Hello World&lt;/div&gt;"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ fontSize: "16px", fontFamily: "monospace", borderRadius: "18px", background: "var(--bg1)" }}
            />
          </div>

          <button 
            className="btn-primary" 
            onClick={handleProcess}
            disabled={!input}
            style={{ 
              background: "#f43f5e", color: "white", padding: "18px", 
              fontSize: "16px", fontWeight: "900", borderRadius: "16px"
            }}
          >
            {mode === "encode" ? "PROCESS ENCODING ⚡" : "PROCESS DECODING 🔓"}
          </button>

          <div>
            <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "10px", opacity: 0.8 }}>CONVERTED RESULT</h3>
            <div style={{ position: "relative" }}>
              <div style={{ 
                minHeight: "130px", padding: "24px", background: "var(--bg3)",
                color: "var(--text)", borderRadius: "20px", fontSize: "15px",
                fontFamily: "monospace", lineHeight: "1.7", wordBreak: "break-all",
                border: "1px solid var(--border)", animation: "fadeIn 0.4s ease"
              }}>
                {output || <span style={{ opacity: 0.3 }}>Your result will appear here after processing...</span>}
              </div>
              {output && (
                <button 
                  onClick={handleCopy}
                  style={{
                    position: "absolute", right: "12px", bottom: "12px",
                    padding: "10px 24px", borderRadius: "12px", 
                    background: copied ? "#10b981" : "#f43f5e",
                    color: "white", fontSize: "12px", fontWeight: "900", border: "none", cursor: "pointer"
                  }}
                >
                  {copied ? "✓ COPIED" : "COPY CODE"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Semantic SEO Article Section */}
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", 
          border: "1px solid var(--border)", marginTop: "10px"
        }}>
          <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "15px" }}>Why Use HTML Entity Encoding?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            HTML entity encoding is a vital security practice used to prevent <b>Cross-Site Scripting (XSS)</b> attacks. By converting dangerous characters like <code>&lt;</code>, <code>&gt;</code>, and <code>&amp;</code> into their safe entity equivalents, you ensure the browser treats them as literal text rather than executable code.
          </p>
          
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "10px" }}>Common HTML Entities Reference</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 15, marginBottom: "20px" }}>
            {[
              { char: "<", ent: "&lt;", name: "Less Than" },
              { char: ">", ent: "&gt;", name: "Greater Than" },
              { char: "&", ent: "&amp;", name: "Ampersand" },
              { char: '"', ent: "&quot;", name: "Double Quote" },
              { char: "©", ent: "&copy;", name: "Copyright" }
            ].map((item, idx) => (
              <div key={idx} style={{ background: "var(--bg2)", padding: "12px", borderRadius: "14px", textAlign: "center", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "18px", fontWeight: "900", color: "#f43f5e" }}>{item.char}</div>
                <div style={{ fontSize: "12px", fontFamily: "monospace", margin: "4px 0" }}>{item.ent}</div>
                <div style={{ fontSize: "10px", opacity: 0.6, textTransform: "uppercase" }}>{item.name}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "10px" }}>Encoding for Documentation</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", margin: 0 }}>
            If you are writing a technical blog or documentation, you cannot simply paste HTML code into your markup. You must <b>encode</b> the tags so the browser renders the code visually for your readers. Our tool handles this instantly with 100% precision.
          </p>
        </section>

      </div>
    </ToolPage>
  );
}