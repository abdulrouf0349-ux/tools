"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function JsDeobfuscateClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const deobfuscateJs = () => {
    if (!input.trim()) return;

    try {
      // Step 1: Basic Un-minification & Beautification
      let formatted = input
        .replace(/;/g, ";\n")
        .replace(/{/g, " {\n  ")
        .replace(/}/g, "\n}\n")
        .replace(/,/g, ", ");

      // Step 2: Hex (\xXX) & Unicode (\uXXXX) Decoding
      formatted = formatted.replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => {
        return String.fromCharCode(parseInt(hex, 16));
      });

      formatted = formatted.replace(/\\u([0-9A-Fa-f]{4})/g, (match, hex) => {
        return String.fromCharCode(parseInt(hex, 16));
      });

      // Step 3: Removing common array obfuscation artifacts (simplified logic)
      formatted = formatted.replace(/\[\s*['"]([^'"]+)['"]\s*\]/g, ".$1"); // Convert ['log'] to .log

      setOutput(formatted);
    } catch (err) {
      setOutput("// ⚠️ ERROR: The script format is highly complex. Partial decoding failed.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="JS Deobfuscator"
      icon="🕵️"
      color="#22c55e"
      description="Reveal the hidden logic in protected or obfuscated JavaScript files. Ideal for security audits."
      currentHref="/tools/js-deobfuscate"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Header SEO section */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: "900", color: "var(--text)", marginBottom: "15px" }}>
            Unpack and Decode Obfuscated JavaScript
          </h2>
          <div>
            <label className="label" style={{ color: "#22c55e", fontWeight: "700" }}>PASTE ENCODED SCRIPT</label>
            <textarea
              className="textarea"
              rows={10}
              placeholder={"var _0x5a2b=['\\x48\\x65\\x6c\\x6c\\x6f'];\nconsole['log'](_0x5a2b[0]);"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ 
                fontSize: "13px", fontFamily: "'Courier New', monospace", 
                background: "#05160c", color: "#4ade80", border: "1px solid #22c55e44",
                borderRadius: "18px", padding: "20px"
              }}
            />
          </div>
        </section>

        <button 
          className="btn-primary" 
          onClick={deobfuscateJs}
          disabled={!input}
          style={{ 
            background: "#22c55e", color: "#05160c", padding: "18px",
            fontSize: "16px", fontWeight: "900", borderRadius: "16px",
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
          }}
        >
          DEOBFUSCATE SCRIPT 🔓
        </button>

        {/* Output Section */}
        <section>
          <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "10px", opacity: 0.8 }}>DECODED OUTPUT</h3>
          <div style={{ position: "relative" }}>
            <div style={{ 
              minHeight: "250px", padding: "24px", background: "#0f172a",
              color: "#86efac", borderRadius: "24px", fontSize: "13px",
              fontFamily: "'Courier New', monospace", lineHeight: "1.7",
              whiteSpace: "pre-wrap", border: "1px solid #1e293b", overflowX: "auto"
            }}>
              {output || <span style={{ opacity: 0.3 }}>// The clean code will appear here after analysis...</span>}
            </div>

            {output && (
              <button 
                onClick={handleCopy}
                style={{
                  position: "absolute", right: "12px", bottom: "12px",
                  padding: "10px 24px", borderRadius: "12px", 
                  background: copied ? "#10b981" : "#22c55e",
                  color: "#05160c", fontSize: "12px", fontWeight: "900", border: "none", cursor: "pointer"
                }}
              >
                {copied ? "✓ COPIED" : "COPY CODE"}
              </button>
            )}
          </div>
        </section>

        {/* Informational SEO Content Section */}
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>Understanding Code Obfuscation</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            JavaScript obfuscation is a technique used to make code unreadable to humans while remaining functional for machines. Developers use it to protect their intellectual property, but unfortunately, it is also widely used by cybercriminals to hide malicious <b>payloads</b> in scripts.
          </p>
          
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "10px" }}>Key Features of our Deobfuscator:</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "2", paddingLeft: "20px" }}>
            <li><b>Hex String Decoding:</b> Automatically converts <code>\xXX</code> sequences back into plain text.</li>
            <li><b>Unicode Normalization:</b> Resolves <code>\uXXXX</code> characters for better readability.</li>
            <li><b>Array Mapping Cleanup:</b> Simplifies complex array-based lookups often found in modern obfuscators.</li>
            <li><b>Instant Formatting:</b> Adds proper indentation and line breaks to minified blobs.</li>
          </ul>

          <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "15px", fontStyle: "italic" }}>
            <b>Note:</b> This tool is for educational and security audit purposes. Always be cautious when running scripts that were previously obfuscated.
          </p>
        </section>

      </div>
    </ToolPage>
  );
}