"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function ReverseTextClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("char"); // char, word, line
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    handleReverse();
  }, [input, mode]);

  const handleReverse = () => {
    if (!input) {
      setOutput("");
      return;
    }

    let result = "";
    if (mode === "char") {
      // "Hello" -> "olleH"
      result = input.split("").reverse().join("");
    } else if (mode === "word") {
      // "Hello World" -> "World Hello"
      result = input.split(/\s+/).reverse().join(" ");
    } else if (mode === "line") {
      // Line 1 \n Line 2 -> Line 2 \n Line 1
      result = input.split(/\r?\n/).reverse().join("\n");
    }
    setOutput(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Reverse Text Generator"
      icon="🔄"
      color="#00d4ff"
      description="Flip your content upside down or backward. Choose between character-level mirroring, word-order reversing, or line flipping."
      currentHref="/tools/reverse-text"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
        
        {/* Mode Selector */}
        <section style={{ 
          display: "flex", 
          gap: "10px", 
          background: "var(--bg3)", 
          padding: "8px", 
          borderRadius: "16px",
          border: "1px solid var(--border)"
        }}>
          {[
            { id: "char", label: "Mirror Chars", icon: "🔡" },
            { id: "word", label: "Reverse Words", icon: "🔤" },
            { id: "line", label: "Flip Lines", icon: "📑" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setMode(item.id)}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                background: mode === item.id ? "#00d4ff" : "transparent",
                color: mode === item.id ? "#000" : "var(--muted)",
                fontWeight: "700",
                fontSize: "13px",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </section>

        {/* Input/Output Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <section>
            <label style={{ fontSize: "11px", fontWeight: "900", color: "#00d4ff", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
              Your Normal Text
            </label>
            <textarea
              className="textarea"
              rows={6}
              placeholder="Type or paste something here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ background: "var(--bg2)", fontSize: "16px", borderRadius: "20px" }}
            />
          </section>

          

          <section style={{ position: "relative" }}>
            <label style={{ fontSize: "11px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
              Reversed Output ({mode})
            </label>
            <textarea
              className="textarea"
              rows={6}
              readOnly
              value={output}
              placeholder="Output will appear here..."
              style={{ 
                background: "#0f172a", 
                color: "#00d4ff", 
                fontSize: "18px", 
                fontWeight: "600",
                borderRadius: "20px",
                border: "2px solid #00d4ff33"
              }}
            />
            
            {output && (
              <button 
                onClick={copyToClipboard}
                style={{
                  position: "absolute",
                  right: "15px",
                  bottom: "15px",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  background: copied ? "#22c55e" : "#00d4ff",
                  color: "#000",
                  fontWeight: "800",
                  fontSize: "12px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,212,255,0.3)"
                }}
              >
                {copied ? "✓ COPIED" : "COPY TEXT"}
              </button>
            )}
          </section>
        </div>

        {/* Fun Tip */}
        <div style={{ 
          padding: "20px", 
          borderRadius: "20px", 
          background: "rgba(0, 212, 255, 0.05)", 
          border: "1px dashed #00d4ff66",
          display: "flex",
          gap: "15px",
          alignItems: "center"
        }}>
          <span style={{ fontSize: "24px" }}>🎭</span>
          <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.5" }}>
            <b>Palindrome Check:</b> Did you know? If a word stays the same when reversed (like "level" or "radar"), it's called a palindrome. Try testing one!
          </p>
        </div>

      </div>
    </ToolPage>
  );
}