"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function JsonToCsvClient() {
  const [jsonInput, setJsonInput] = useState("");
  const [csvOutput, setCsvOutput] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const convertToCsv = () => {
    try {
      setError(null);
      if (!jsonInput.trim()) return;

      const objArray = JSON.parse(jsonInput);
      const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
      
      if (!Array.isArray(array) || array.length === 0) {
        throw new Error("Input must be a non-empty JSON Array of objects. e.g. [{}, {}]");
      }

      // Extract unique headers from all objects to handle missing keys
      const allKeys = [...new Set(array.flatMap(obj => Object.keys(obj)))];
      const headers = allKeys.join(",");
      
      const rows = array.map(obj => {
        return allKeys.map(key => {
          let val = obj[key];
          let cell = val === null || val === undefined ? "" : val.toString();
          // Escape quotes and wrap in quotes if comma or newline exists
          if (cell.includes(",") || cell.includes('"') || cell.includes('\n')) {
            cell = `"${cell.replace(/"/g, '""')}"`;
          }
          return cell;
        }).join(",");
      });

      setCsvOutput([headers, ...rows].join("\n"));
    } catch (err) {
      setError("⚠️ " + (err.message.includes("position") ? "Invalid JSON syntax" : err.message));
      setCsvOutput("");
    }
  };

  const downloadCsv = () => {
    if (!csvOutput) return;
    const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `toolkitpro_export_${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <ToolPage
      title="JSON to CSV Converter"
      icon="📊"
      color="#059669"
      description="Convert structured JSON arrays into clean CSV format for Excel, Google Sheets, or any data analysis platform."
      currentHref="/tools/json-to-csv"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Section */}
        <section>
          <h2 style={{ fontSize: "18px", fontWeight: "900", marginBottom: "15px" }}>Paste JSON Array Data</h2>
          <textarea
            className="textarea"
            rows={10}
            placeholder='[{"id": 1, "name": "Yara", "role": "VIP"}, {"id": 2, "name": "Ali", "role": "Dev"}]'
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            style={{ 
              fontSize: 14, fontFamily: "'Fira Code', monospace", 
              background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: "18px"
            }}
          />
        </section>

        {/* Action Row */}
        <div style={{ display: "flex", gap: 15 }}>
          <button 
            className="btn-primary" 
            onClick={convertToCsv}
            style={{ flex: 2, background: "#059669", color: "white", fontWeight: "900", padding: "18px", borderRadius: "16px" }}
          >
            CONVERT TO CSV ↓
          </button>
          <button 
            className="btn-ghost" 
            onClick={() => { setJsonInput(""); setCsvOutput(""); setError(null); }}
            style={{ flex: 1, border: "1px solid var(--border)", borderRadius: "16px", background: "var(--bg3)" }}
          >
            CLEAR
          </button>
        </div>

        {/* Result Area */}
        <section style={{ position: "relative" }}>
          <h3 style={{ fontSize: "15px", fontWeight: "800", marginBottom: "10px", opacity: 0.9 }}>CSV Result (Tabular Text)</h3>
          {error ? (
            <div style={{ padding: "20px", background: "#fee2e2", color: "#991b1b", borderRadius: "20px", border: "2px solid #ef4444" }}>
              {error}
            </div>
          ) : (
            <div style={{ 
              minHeight: "200px", padding: "24px", borderRadius: "24px",
              background: "var(--bg3)", color: "var(--text)", fontFamily: "monospace",
              fontSize: "13px", border: "1px solid var(--border)", overflowX: "auto",
              whiteSpace: "pre", boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)"
            }}>
              {csvOutput || <span style={{ opacity: 0.3 }}>// Your converted CSV data will appear here...</span>}
            </div>
          )}

          {csvOutput && (
            <div style={{ position: "absolute", right: "15px", bottom: "15px", display: "flex", gap: 10 }}>
              <button 
                onClick={() => { navigator.clipboard.writeText(csvOutput); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                style={{ 
                    padding: "10px 20px", borderRadius: "12px", background: "var(--bg2)", 
                    color: "var(--text)", fontSize: "12px", border: "1px solid var(--border)", 
                    cursor: "pointer", fontWeight: "700" 
                }}
              >
                {copied ? "✓ COPIED" : "COPY"}
              </button>
              <button 
                onClick={downloadCsv}
                style={{ 
                    padding: "10px 25px", borderRadius: "12px", background: "#059669", 
                    color: "white", fontSize: "12px", border: "none", 
                    cursor: "pointer", fontWeight: "900" 
                }}
              >
                📥 DOWNLOAD .CSV
              </button>
            </div>
          )}
        </section>

        {/* SEO Knowledge Section */}
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>Why Convert JSON to CSV?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            While JSON is perfect for machine-to-machine communication, CSV (Comma-Separated Values) is the universal format for data presentation and analysis. Converting <b>JSON arrays</b> into CSV allows you to open complex data in software like Microsoft Excel, Google Sheets, or Tableau.
          </p>
          
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "10px" }}>Data Handling Features:</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "2", paddingLeft: "20px" }}>
            <li><b>Header Detection:</b> Automatically scans all objects to create the top-level CSV header row.</li>
            <li><b>Cell Sanitization:</b> Handles special characters and commas by automatically wrapping data in double quotes.</li>
            <li><b>Zero Dependencies:</b> Your data stays in your browser; we don't upload your JSON to any server.</li>
          </ul>
        </section>

      </div>
    </ToolPage>
  );
}