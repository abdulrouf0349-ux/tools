"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function JsonValidatorClient() {
  const [input, setInput] = useState("");
  const [report, setReport] = useState(null);

  const validateJson = () => {
    if (!input.trim()) {
      setReport(null);
      return;
    }

    try {
      const parsed = JSON.parse(input);
      setReport({
        valid: true,
        message: "Your JSON is valid! The syntax follows standard RFC guidelines.",
        stats: {
          type: Array.isArray(parsed) ? "Array" : typeof parsed === 'object' ? "Object" : typeof parsed,
          keys: Array.isArray(parsed) ? parsed.length : (parsed && typeof parsed === 'object') ? Object.keys(parsed).length : 1
        }
      });
    } catch (err) {
      setReport({
        valid: false,
        message: err.message
      });
    }
  };

  return (
    <ToolPage
      title="JSON Validator"
      icon="🔍"
      color="#ef4444"
      description="Quickly validate your JSON data. Our linter identifies syntax errors, missing brackets, and formatting issues in real-time."
      currentHref="/tools/json-validator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Area */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <label className="label" style={{ marginBottom: 0 }}>Input JSON Code</label>
            <button 
              onClick={() => { setInput(""); setReport(null); }}
              style={{ background: "none", border: "none", color: "#ef4444", fontSize: "12px", cursor: "pointer", fontWeight: "700" }}
            >
              CLEAR ALL
            </button>
          </div>
          <textarea
            className="textarea"
            rows={12}
            placeholder='{ "error": "Paste messy JSON here..." }'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ 
              fontSize: 14, fontFamily: "'Fira Code', monospace", 
              background: "var(--bg2)", border: "1px solid var(--border)", 
              borderRadius: "20px", padding: "20px", transition: "0.3s border-color"
            }}
          />
        </section>

        {/* Validation Trigger */}
        <button 
          className="btn-primary" 
          onClick={validateJson}
          style={{ 
            background: "#ef4444", color: "white", fontWeight: "900",
            padding: "18px", fontSize: "16px", borderRadius: "16px",
            boxShadow: "0 10px 20px -5px rgba(239, 68, 68, 0.3)"
          }}
        >
          VALIDATE JSON SYNTAX 🚀
        </button>

        {/* Diagnostic Report */}
        {report && (
          <div style={{ 
            padding: "30px", borderRadius: "28px", 
            background: report.valid ? "rgba(34, 197, 94, 0.08)" : "rgba(239, 68, 68, 0.08)", 
            border: `2px solid ${report.valid ? "#22c55e" : "#ef4444"}`,
            animation: "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 15, marginBottom: 15 }}>
              <div style={{ 
                width: "40px", height: "40px", borderRadius: "50%", 
                background: report.valid ? "#22c55e" : "#ef4444",
                display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "20px"
              }}>
                {report.valid ? "✓" : "!"}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "900", color: report.valid ? "#166534" : "#991b1b" }}>
                  {report.valid ? "Syntax Analysis Passed" : "Syntax Analysis Failed"}
                </h3>
              </div>
            </div>
            
            <div style={{ 
              padding: "15px", borderRadius: "12px", background: "rgba(255,255,255,0.5)", 
              fontFamily: "monospace", fontSize: "14px", color: report.valid ? "#15803d" : "#b91c1c",
              border: "1px solid rgba(0,0,0,0.05)"
            }}>
              {report.message}
            </div>

            {report.valid && (
              <div style={{ 
                marginTop: 20, paddingTop: 20, borderTop: "1px solid rgba(34, 197, 94, 0.2)",
                display: "flex", flexWrap: "wrap", gap: 25
              }}>
                <div style={{ fontSize: "13px", color: "var(--muted)" }}>Structure: <b style={{color: "var(--text)"}}>{report.stats.type}</b></div>
                <div style={{ fontSize: "13px", color: "var(--muted)" }}>Total Elements: <b style={{color: "var(--text)"}}>{report.stats.keys}</b></div>
              </div>
            )}
          </div>
        )}

        {/* Educational Checklist */}
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "900", marginBottom: "15px" }}>Common JSON Debugging Guide</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "8px" }}>❌ Avoid Trailing Commas</h4>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
                JSON does not allow a comma after the last item in an object or array. Example: <code>{"{\"id\": 1,}"}</code> is invalid.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "8px" }}>❌ Use Double Quotes</h4>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
                All keys and string values must be wrapped in <b>double quotes (")</b>. Single quotes (') are not allowed.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "8px" }}>❌ Quote Every Key</h4>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
                Unlike JavaScript objects, JSON requires every property key to be a quoted string.
              </p>
            </div>
          </div>
        </section>

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