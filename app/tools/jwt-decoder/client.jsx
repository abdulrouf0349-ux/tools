"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function JwtDecoderClient() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState(null);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);

  const decodeJwt = () => {
    setError(null);
    setHeader(null);
    setPayload(null);

    if (!token.trim()) return;

    try {
      const parts = token.trim().split('.');
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format. A standard token must have 3 parts separated by dots (Header.Payload.Signature).");
      }

      const base64Decode = (str) => {
        try {
          // Fix Base64URL to standard Base64
          const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          return JSON.parse(jsonPayload);
        } catch (e) {
          throw new Error("Invalid encoding in token part.");
        }
      };

      setHeader(base64Decode(parts[0]));
      setPayload(base64Decode(parts[1]));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ToolPage
      title="JWT Decoder"
      icon="🔐"
      color="#d946ef"
      description="Inspect the contents of your JSON Web Tokens. Decoded locally in your browser for maximum security."
      currentHref="/tools/jwt-decoder"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Token Input */}
        <section>
          <label className="label" style={{ fontWeight: "800" }}>PASTE ENCODED TOKEN</label>
          <textarea
            className="textarea"
            rows={6}
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{ 
              fontSize: 13, fontFamily: "'Fira Code', monospace", 
              background: "var(--bg2)", border: "1px solid var(--border)",
              borderRadius: "18px", padding: "20px", wordBreak: "break-all"
            }}
          />
        </section>

        <button 
          className="btn-primary" 
          onClick={decodeJwt}
          style={{ 
            background: "#d946ef", color: "white", fontWeight: "900",
            padding: "18px", borderRadius: "16px", fontSize: "16px",
            boxShadow: "0 10px 20px -5px rgba(217, 70, 239, 0.4)"
          }}
        >
          DECODE TOKEN 🔓
        </button>

        {error && (
          <div style={{ 
            padding: "15px 25px", background: "#fee2e2", color: "#b91c1c", 
            borderRadius: "14px", border: "1px solid #fca5a5", fontSize: "14px", fontWeight: "600"
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Results View */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          <div className="card-section">
            <h3 style={{ fontSize: "14px", fontWeight: "800", color: "#fb7185", marginBottom: "12px", textTransform: "uppercase" }}>
              Header <span style={{ fontWeight: "400", opacity: 0.6 }}>(Algorithm & Type)</span>
            </h3>
            <pre style={{ 
              padding: "20px", background: "#0f172a", color: "#fb7185", 
              borderRadius: "20px", fontSize: "13px", border: "1px solid #fb718544", overflowX: "auto"
            }}>
              {header ? JSON.stringify(header, null, 2) : "// Awaiting input..."}
            </pre>
          </div>

          <div className="card-section">
            <h3 style={{ fontSize: "14px", fontWeight: "800", color: "#38bdf8", marginBottom: "12px", textTransform: "uppercase" }}>
              Payload <span style={{ fontWeight: "400", opacity: 0.6 }}>(Data & Claims)</span>
            </h3>
            <pre style={{ 
              padding: "20px", background: "#0f172a", color: "#38bdf8", 
              borderRadius: "20px", fontSize: "13px", border: "1px solid #38bdf844", overflowX: "auto"
            }}>
              {payload ? JSON.stringify(payload, null, 2) : "// Awaiting input..."}
            </pre>
          </div>
        </div>

        {/* Educational Diagram Section */}
        
        
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "900", marginBottom: "15px" }}>How JSON Web Tokens Work</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            A JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It consists of three parts separated by dots:
          </p>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "2", paddingLeft: "20px" }}>
            <li><b>Header:</b> Usually contains the hashing algorithm (e.g., HMAC SHA256 or RSA).</li>
            <li><b>Payload:</b> Contains the claims. Claims are statements about an entity (typically, the user) and additional data.</li>
            <li><b>Signature:</b> Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.</li>
          </ul>
        </section>

        {/* Security Alert */}
        <div style={{ 
          padding: 25, borderRadius: "24px", background: "rgba(245, 158, 11, 0.1)", 
          border: "1px solid #f59e0b", display: "flex", gap: 20, alignItems: "center"
        }}>
          <span style={{ fontSize: 32 }}>🛑</span>
          <div>
            <h4 style={{ margin: "0 0 5px 0", color: "#92400e", fontWeight: "900" }}>Crucial Security Reminder</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#92400e", opacity: 0.9, lineHeight: "1.5" }}>
              Decoding a JWT does <b>NOT</b> require a secret key. This means anyone with the token can see its content. <b>Never put sensitive information</b> like passwords or credit card numbers inside a JWT payload.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}