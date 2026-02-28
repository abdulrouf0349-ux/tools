"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function PasswordClient() {
  const [opts, setOpts] = useState({ length: 18, uppercase: true, lowercase: true, digits: true, symbols: true });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(null);

  const generate = () => {
    setLoading(true);
    
    // Smooth transition delay
    setTimeout(() => {
      const charset = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        digits: "0123456789",
        symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
      };

      let chars = "";
      if (opts.uppercase) chars += charset.uppercase;
      if (opts.lowercase) chars += charset.lowercase;
      if (opts.digits) chars += charset.digits;
      if (opts.symbols) chars += charset.symbols;

      if (!chars) {
        alert("Bhai, kam az kam aik character type toh select karein!");
        setLoading(false);
        return;
      }

      // Generate 3 unique variations using Web Crypto API
      const newPasswords = Array.from({ length: 3 }, () => {
        let password = "";
        const array = new Uint32Array(opts.length);
        window.crypto.getRandomValues(array);
        
        for (let i = 0; i < opts.length; i++) {
          password += chars[array[i] % chars.length];
        }
        return password;
      });

      // Entropy-based Strength Logic
      let strength = "Weak";
      if (opts.length >= 16 && opts.symbols && opts.digits) strength = "Strong";
      else if (opts.length >= 10 && (opts.digits || opts.uppercase)) strength = "Medium";

      setResult({ passwords: newPasswords, strength });
      setLoading(false);
    }, 450);
  };

  const copy = (text, i) => {
    navigator.clipboard.writeText(text);
    setCopied(i); 
    setTimeout(() => setCopied(null), 2000);
  };

  const strengthColor = { Strong: "#10b981", Medium: "#f59e0b", Weak: "#ef4444" };

  return (
    <ToolPage 
      title="Password Generator" 
      icon="🔐" 
      color="#ff6b6b"
      description="Create unhackable passwords using industry-standard randomization. No data is ever sent to our servers."
      currentHref="/tools/password-generator"
    >

      <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
        
        {/* Configuration Panel */}
        <section style={{ 
          background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)",
          boxShadow: "0 10px 30px -10px rgba(255, 107, 107, 0.1)"
        }}>
          <div style={{ marginBottom: "25px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
              <label className="label" style={{ fontWeight: "800" }}>Password Length</label>
              <span style={{ color: "#ff6b6b", fontWeight: "900", fontSize: "18px" }}>{opts.length}</span>
            </div>
            <input type="range" min={8} max={64} value={opts.length}
              onChange={e => setOpts(o => ({ ...o, length: +e.target.value }))}
              style={{ width: "100%", accentColor: "#ff6b6b", cursor: "pointer", height: "6px" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, marginBottom: "25px" }}>
            {[
              { key: "uppercase", label: "Uppercase (A-Z)" },
              { key: "lowercase", label: "Lowercase (a-z)" },
              { key: "digits", label: "Numbers (0-9)" },
              { key: "symbols", label: "Symbols (!@#$)" },
            ].map(({ key, label }) => (
              <label key={key} style={{ 
                display: "flex", flexDirection: "column", gap: 10, background: opts[key] ? "var(--bg3)" : "transparent",
                border: `2px solid ${opts[key] ? "#ff6b6b44" : "var(--border)"}`, 
                borderRadius: "18px", padding: "15px", cursor: "pointer", transition: "0.2s", textAlign: "center"
              }}>
                <input type="checkbox" checked={opts[key]} onChange={() => setOpts(o => ({ ...o, [key]: !o[key] }))}
                  style={{ width: 20, height: 20, accentColor: "#ff6b6b", margin: "0 auto" }} />
                <span style={{ fontSize: "11px", fontWeight: "800", color: opts[key] ? "var(--text)" : "var(--muted)" }}>{label}</span>
              </label>
            ))}
          </div>

          <button 
            className="btn-primary" 
            onClick={generate} 
            disabled={loading}
            style={{ 
              background: "#ff6b6b", width: "100%", height: "60px", borderRadius: "20px",
              fontSize: "16px", fontWeight: "900", letterSpacing: "1px", boxShadow: "0 8px 20px -6px rgba(255, 107, 107, 0.4)"
            }}
          >
            {loading ? "CALCULATING ENTROPY..." : "GENERATE SECURE PASSWORDS 🛡️"}
          </button>
        </section>

        {/* Results Section */}
        {result && (
          <section style={{ animation: "slideIn .4s cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "20px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase" }}>Calculated Variations</h3>
              <div style={{ 
                background: `${strengthColor[result.strength]}15`, padding: "6px 14px", borderRadius: "10px",
                border: `1px solid ${strengthColor[result.strength]}33`, color: strengthColor[result.strength],
                fontSize: "11px", fontWeight: "900"
              }}>
                {result.strength.toUpperCase()} SECURITY
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {result.passwords?.map((p, i) => (
                <div key={i} style={{ 
                  display: "flex", alignItems: "center", gap: 15, background: "var(--bg3)", 
                  border: "1px solid var(--border)", borderRadius: "20px", padding: "18px 25px",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.05)"
                }}>
                  <code style={{ 
                    flex: 1, fontSize: "16px", fontFamily: "'Fira Code', monospace", 
                    wordBreak: "break-all", color: "var(--text)", fontWeight: "600" 
                  }}>{p}</code>
                  <button 
                    onClick={() => copy(p, i)} 
                    style={{ 
                      background: copied === i ? "#10b981" : "#ff6b6b15",
                      color: copied === i ? "white" : "#ff6b6b",
                      border: `1px solid ${copied === i ? "#10b981" : "#ff6b6b44"}`,
                      padding: "10px 20px", borderRadius: "12px", fontSize: "12px", 
                      fontWeight: "900", cursor: "pointer", transition: "all 0.2s"
                    }}
                  >
                    {copied === i ? "COPIED!" : "COPY"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Security Info Card */}
        <section style={{ 
          padding: "30px", borderRadius: "32px", background: "var(--bg3)", border: "1px dashed var(--border)",
          display: "flex", gap: 20, alignItems: "start"
        }}>
          <div style={{ fontSize: "30px" }}>🛡️</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontWeight: "900" }}>Privacy Guarantee</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              We use the <b>Web Crypto API</b> to generate passwords directly on your device. This means your passwords are never sent over the internet and are completely invisible to us.
            </p>
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}