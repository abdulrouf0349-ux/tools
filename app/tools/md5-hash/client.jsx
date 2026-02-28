"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

// MD5 Helper Function (Lightweight & Fast)
function md5(string) {
  function k(n) { return Math.sin(n) * 2**32 | 0; }
  let b = [0, 1, 2, 3], s = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  let h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
  let words = (function(str) {
    let b = [], i, j;
    for (i = 0; i < str.length * 8; i += 8) b[i >> 5] |= (str.charCodeAt(i / 8) & 255) << (i % 32);
    b[i >> 5] |= 128 << (i % 32);
    b[(((i + 64) >>> 9) << 4) + 14] = i;
    return b;
  })(string);

  for (let j = 0; j < words.length; j += 16) {
    let [a, b, c, d] = h;
    for (let i = 0; i < 64; i++) {
      let f, g;
      if (i < 16) { f = (b & c) | (~b & d); g = i; }
      else if (i < 32) { f = (d & b) | (~d & c); g = (5 * i + 1) % 16; }
      else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) % 16; }
      else { f = c ^ (b | ~d); g = (7 * i) % 16; }
      let temp = d;
      d = c;
      c = b;
      b = (b + ((a + f + k(i + 1) + (words[j + g] || 0)) << (s[(i >> 4) * 4 + i % 4]) | (a + f + k(i + 1) + (words[j + g] || 0)) >>> (32 - s[(i >> 4) * 4 + i % 4]))) | 0;
      a = temp;
    }
    h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0; h[3] = (h[3] + d) | 0;
  }
  return h.map(v => (v >>> 0).toString(16).padStart(8, '0')).join('');
}

export default function Md5HashClient() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const [copied, setCopied] = useState(false);

  const generateHash = () => {
    if (!input.trim()) {
        setHash("");
        return;
    }
    setHash(md5(input));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="MD5 Hash Generator"
      icon="🔑"
      color="#64748b"
      description="Quickly generate MD5 cryptographic hashes. Fully secure, browser-side generation for developers and sysadmins."
      currentHref="/tools/md5-hash"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Card */}
        <section style={{ 
          background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)" 
        }}>
          <label className="label" style={{ fontWeight: "800", marginBottom: "12px" }}>Input String</label>
          <textarea
            className="textarea"
            rows={5}
            placeholder="Enter the text you want to hash..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ 
              fontSize: 16, background: "var(--bg3)", border: "1px solid var(--border)",
              borderRadius: "20px", padding: "20px", transition: "0.2s"
            }}
          />
          <button 
            className="btn-primary" 
            onClick={generateHash}
            style={{ 
              marginTop: "20px", background: "#64748b", color: "white", 
              fontWeight: "900", padding: "18px", borderRadius: "18px",
              boxShadow: "0 10px 15px -3px rgba(100, 116, 139, 0.3)"
            }}
          >
            GENERATE HASH ⚡
          </button>
        </section>

        {/* Result Display */}
        {hash && (
          <section style={{ animation: "fadeIn 0.4s ease" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "800", color: "var(--muted)", marginBottom: "15px", textTransform: "uppercase" }}>
                MD5 Fingerprint (32-bit Hex)
            </h3>
            <div style={{ 
              padding: "30px", background: "var(--bg3)", color: "#94a3b8",
              borderRadius: "28px", fontSize: "22px", fontFamily: "'Fira Code', monospace",
              textAlign: "center", border: "2px dashed #64748b44", wordBreak: "break-all",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)"
            }}>
              {hash}
            </div>

            <button 
              onClick={handleCopy}
              style={{
                marginTop: "15px", width: "100%", padding: "15px", borderRadius: "15px",
                background: copied ? "#22c55e" : "var(--bg2)",
                color: copied ? "white" : "var(--text)",
                border: "1px solid var(--border)", cursor: "pointer",
                fontWeight: "900", transition: "0.3s", letterSpacing: "1px"
              }}
            >
              {copied ? "✓ COPIED TO CLIPBOARD" : "COPY HASH"}
            </button>
          </section>
        )}

        {/* Educational Section */}
        <section style={{ 
          padding: "40px", borderRadius: "35px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>What is MD5 Hashing?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            The <b>MD5 Message-Digest Algorithm</b> is a widely used hash function that produces a 128-bit hash value. Although it was originally designed to be used as a cryptographic hash function, it has been found to suffer from extensive vulnerabilities.
          </p>

          [Image showing how a string transforms into a 32-character MD5 hash]

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginTop: "20px" }}>
            <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#64748b", marginBottom: "8px" }}>Checksums</h4>
              <p style={{ fontSize: "13px", margin: 0, opacity: 0.8 }}>Used to verify if a file downloaded from the internet has been corrupted during the process.</p>
            </div>
            <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "20px" }}>
              <h4 style={{ fontSize: "15px", fontWeight: "800", color: "#ef4444", marginBottom: "8px" }}>Security Note</h4>
              <p style={{ fontSize: "13px", margin: 0, opacity: 0.8 }}>MD5 is <b>not collision-resistant</b>. Do not use it for sensitive password storage or digital signatures.</p>
            </div>
          </div>
        </section>

      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </ToolPage>
  );
}