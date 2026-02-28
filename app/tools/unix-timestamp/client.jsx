"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function UnixTimestampClient() {
  const [currentTimestamp, setCurrentTimestamp] = useState(Math.floor(Date.now() / 1000));
  const [inputValue, setInputValue] = useState("");
  const [resultDate, setResultDate] = useState(null);
  const [copied, setCopied] = useState(false);

  // Live clock effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTimestamp(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const convertToHuman = () => {
    if (!inputValue) return;
    try {
      const ts = parseInt(inputValue);
      // Check if it's milliseconds (13 digits) or seconds (10 digits)
      const date = ts > 9999999999 ? new Date(ts) : new Date(ts * 1000);
      
      if (isNaN(date.getTime())) throw new Error("Invalid");

      setResultDate({
        utc: date.toUTCString(),
        local: date.toLocaleString(),
        iso: date.toISOString()
      });
    } catch (e) {
      alert("Bhai, valid timestamp enter karo!");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Unix Epoch Converter"
      icon="🕒"
      color="#6366f1"
      description="The standard way to handle time in computing. Convert between seconds since the epoch and human-friendly calendar dates."
      currentHref="/tools/unix-timestamp"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Real-time Monitor */}
        <section style={{ 
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", 
          padding: "40px 20px", 
          borderRadius: "32px", 
          textAlign: "center",
          border: "1px solid #4338ca",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
        }}>
          <div style={{ fontSize: "12px", fontWeight: "900", color: "#818cf8", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "15px" }}>
            Current Unix Epoch Time
          </div>
          <div style={{ 
            fontSize: "56px", 
            fontWeight: "900", 
            color: "white", 
            fontFamily: "'Courier New', monospace",
            textShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
            marginBottom: "20px"
          }}>
            {currentTimestamp}
          </div>
          <button 
            onClick={() => copyToClipboard(currentTimestamp.toString())}
            style={{ 
              background: copied ? "#10b981" : "rgba(255,255,255,0.1)", 
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", padding: "12px 30px", borderRadius: "14px", cursor: "pointer",
              fontWeight: "bold", fontSize: "14px", transition: "all 0.3s ease"
            }}
          >
            {copied ? "✓ Copied!" : "Copy Live Timestamp"}
          </button>
        </section>

        {/* Conversion Engine */}
        <section style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "28px", 
          border: "1px solid var(--border)" 
        }}>
          <label style={{ fontSize: "11px", fontWeight: "800", opacity: 0.6, marginBottom: "10px", display: "block" }}>CONVERT TO HUMAN DATE</label>
          <div style={{ display: "flex", gap: "12px", marginBottom: "25px" }}>
            <input 
              className="textarea" 
              placeholder="Enter seconds (e.g. 1740758400)"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ fontFamily: "monospace", fontSize: "20px", height: "60px", padding: "0 20px" }}
            />
            <button 
              className="btn-primary" 
              onClick={convertToHuman}
              style={{ background: "#6366f1", width: "150px", borderRadius: "16px", fontWeight: "900" }}
            >
              DECODE
            </button>
          </div>

          {resultDate && (
            <div style={{ display: "grid", gap: "10px", animation: "fadeIn 0.4s ease" }}>
              <div style={{ background: "var(--bg3)", padding: "15px 20px", borderRadius: "16px", borderLeft: "4px solid #6366f1" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", fontWeight: "bold" }}>UTC TIME</span>
                <div style={{ fontSize: "15px", fontWeight: "bold", marginTop: "4px" }}>{resultDate.utc}</div>
              </div>
              <div style={{ background: "var(--bg3)", padding: "15px 20px", borderRadius: "16px", borderLeft: "4px solid #818cf8" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", fontWeight: "bold" }}>YOUR LOCAL TIME</span>
                <div style={{ fontSize: "15px", fontWeight: "bold", marginTop: "4px" }}>{resultDate.local}</div>
              </div>
              <div style={{ background: "var(--bg3)", padding: "15px 20px", borderRadius: "16px", borderLeft: "4px solid #a5b4fc" }}>
                <span style={{ fontSize: "10px", color: "var(--muted)", fontWeight: "bold" }}>ISO 8601</span>
                <div style={{ fontSize: "15px", fontWeight: "bold", marginTop: "4px", fontFamily: "monospace" }}>{resultDate.iso}</div>
              </div>
            </div>
          )}
        </section>

        

        {/* Knowledge Base */}
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "rgba(99, 102, 241, 0.05)", 
          border: "1px dashed #6366f166", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>💡</div>
          <div>
            <h5 style={{ margin: "0 0 5px 0", color: "#6366f1" }}>Did you know?</h5>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              The <b>Year 2038 problem</b> (Y2K38) is coming! On January 19, 2038, 32-bit Unix systems will overflow. Our tool is 64-bit ready, so you're safe here!
            </p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}