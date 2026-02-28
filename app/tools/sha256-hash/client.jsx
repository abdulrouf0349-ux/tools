"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function Sha256HashClient() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateSha256 = async (text) => {
    if (!text) {
      setHash("");
      return;
    }
    setLoading(true);
    try {
      const msgBuffer = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
      setHash(hashHex);
    } catch (err) {
      console.error("Hashing failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="SHA-256 Hash Generator"
      icon="🛡️"
      color="#0ea5e9"
      description="Cryptographic hash functions are the backbone of modern security. Generate a 64-character unique signature for any input data."
      currentHref="/tools/sha256-hash-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Section */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", alignItems: "center" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", textTransform: "uppercase", color: "var(--muted)" }}>
              Data to be Hashed
            </label>
            <span style={{ fontSize: "10px", color: "#0ea5e9", fontWeight: "800" }}>🔒 AES-LEVEL SECURITY</span>
          </div>
          <textarea
            className="textarea"
            rows={6}
            placeholder="Enter sensitive data, text, or strings to generate their hash..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              generateSha256(e.target.value);
            }}
            style={{ 
              fontSize: "15px", 
              background: "var(--bg3)", 
              border: "1px solid var(--border)",
              fontFamily: "'Fira Code', monospace",
              padding: "20px",
              borderRadius: "24px",
              boxShadow: "inset 0 2px 8px rgba(0,0,0,0.05)"
            }}
          />
        </section>

        {/* Dynamic Status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
           <div style={{ 
             width: "8px", height: "8px", borderRadius: "50%", 
             background: loading ? "#f59e0b" : "#22c55e",
             boxShadow: loading ? "0 0 10px #f59e0b" : "0 0 10px #22c55e"
           }} />
           <span style={{ fontSize: "11px", fontWeight: "700", opacity: 0.7 }}>
             {loading ? "PROCESSING CRYPTOGRAPHY..." : "LOCAL BROWSER-SIDE HASHING ACTIVE"}
           </span>
        </div>

        {/* Output Signature Box */}
        <section>
          <label style={{ fontSize: "12px", fontWeight: "900", textTransform: "uppercase", color: "var(--muted)", marginBottom: "10px", display: "block" }}>
            Generated SHA-256 Signature
          </label>
          <div style={{ position: "relative" }}>
            <div style={{ 
              minHeight: "120px",
              padding: "35px 25px",
              background: "#020617",
              color: "#38bdf8",
              borderRadius: "28px",
              fontSize: "18px",
              fontFamily: "'Courier New', monospace",
              textAlign: "center",
              lineHeight: "1.4",
              border: "1px solid #1e293b",
              wordBreak: "break-all",
              boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {hash || "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}
            </div>

            {hash && (
              <button 
                onClick={handleCopy}
                style={{
                  position: "absolute", bottom: "12px", right: "12px",
                  padding: "10px 20px", borderRadius: "14px",
                  background: copied ? "#22c55e" : "#0ea5e9",
                  color: "white", fontSize: "12px", fontWeight: "900",
                  border: "none", cursor: "pointer", transition: "all 0.2s"
                }}
              >
                {copied ? "✓ COPIED" : "COPY HASH"}
              </button>
            )}
          </div>
        </section>

        {/* Information Architecture */}
        
        <section style={{ 
          padding: "25px", borderRadius: "28px", background: "var(--bg2)", 
          border: "1px solid var(--border)", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ 
            fontSize: "30px", background: "#0ea5e915", width: "60px", height: "60px", 
            borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            🛰️
          </div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>One-Way Function</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              SHA-256 is a <b>deterministic</b> function. The same input will always result in the same hash, but you can never "decrypt" a hash back into the original text.
            </p>
          </div>
        </section>

      </div>
    </ToolPage>
  );
}