"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function UuidGeneratorClient() {
  const [uuids, setUuids] = useState([]);
  const [count, setCount] = useState(1);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const generateUuid = () => {
    // RFC4122 v4 compliant generation using crypto API
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  };

  const handleGenerate = () => {
    const newUuids = Array.from({ length: count }, () => generateUuid());
    setUuids(newUuids);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <ToolPage
      title="UUID v4 Generator"
      icon="🆔"
      color="#6366f1"
      description="Universally Unique Identifiers are 128-bit labels used for information in computer systems. Use this tool to generate secure, collision-free IDs."
      currentHref="/tools/uuid-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Control Panel */}
        <section style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "28px",
          border: "2px solid var(--border)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-end" }}>
            <div style={{ flex: "1 1 150px" }}>
              <label style={{ fontSize: "11px", fontWeight: "900", color: "#6366f1", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
                Number of IDs (Max 50)
              </label>
              <input 
                type="number" 
                min="1" 
                max="50" 
                value={count}
                onChange={(e) => setCount(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
                style={{ 
                  width: "100%", 
                  padding: "16px", 
                  borderRadius: "16px", 
                  background: "var(--bg3)", 
                  border: "2px solid var(--border)",
                  color: "var(--text)",
                  fontSize: "18px",
                  fontWeight: "700"
                }}
              />
            </div>
            <button 
              className="btn-primary" 
              onClick={handleGenerate}
              style={{ 
                flex: "2 1 200px",
                height: "58px",
                background: "#6366f1", 
                fontSize: "16px",
                fontWeight: "900",
                borderRadius: "18px",
                boxShadow: "0 8px 20px rgba(99, 102, 241, 0.3)"
              }}
            >
              GENERATE NEW UUIDs ⚡
            </button>
          </div>
        </section>

        {/* Output List */}
        <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {uuids.map((uuid, index) => (
            <div 
              key={index}
              onClick={() => copyToClipboard(uuid, index)}
              style={{ 
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 25px",
                background: copiedIndex === index ? "rgba(34, 197, 94, 0.05)" : "var(--bg2)",
                border: `2px solid ${copiedIndex === index ? "#22c55e" : "var(--border)"}`,
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                animation: "slideIn 0.3s ease forwards",
                animationDelay: `${index * 0.05}s`,
                opacity: 0
              }}
            >
              <code style={{ 
                fontSize: "15px", 
                fontFamily: "'Fira Code', monospace", 
                color: "#818cf8",
                letterSpacing: "0.5px"
              }}>
                {uuid}
              </code>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ 
                  fontSize: "10px", 
                  fontWeight: "900", 
                  color: copiedIndex === index ? "#22c55e" : "var(--muted)" 
                }}>
                  {copiedIndex === index ? "✓ COPIED" : "COPY"}
                </span>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: copiedIndex === index ? "#22c55e" : "#6366f133" }}></div>
              </div>
            </div>
          ))}
        </section>

        

        {/* Technical Deep Dive */}
        <div style={{ 
          padding: "30px", 
          borderRadius: "28px", 
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(129, 140, 248, 0.05) 100%)", 
          border: "1px dashed #6366f166",
          display: "flex",
          gap: "25px",
          alignItems: "flex-start"
        }}>
          <div style={{ fontSize: "32px" }}>🛡️</div>
          <div>
            <h4 style={{ margin: "0 0 10px 0", color: "#6366f1", fontSize: "16px" }}>Safe for Production</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>
              Our generator uses the <code>crypto.getRandomValues()</code> API, which provides <b>cryptographically strong</b> random numbers. The UUID v4 format is the industry standard for ensuring zero collisions across distributed systems.
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </ToolPage>
  );
}