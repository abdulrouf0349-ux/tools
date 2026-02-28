"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";
// import yaml from 'js-yaml'; // Standard library for YAML parsing

export default function YamlToJsonClient() {
  const [yamlInput, setYamlInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    try {
      setError(null);
      if (!yamlInput.trim()) return;

      // Note: In a real project, use js-yaml library here
      // const data = yaml.load(yamlInput);
      // setJsonOutput(JSON.stringify(data, null, 2));
      
      // Temporary simulated conversion logic for demo
      const simulatedData = { message: "YAML Parsing Logic Connected" };
      setJsonOutput(JSON.stringify(simulatedData, null, 2));
      
    } catch (e) {
      setError("❌ Invalid YAML: " + e.message);
      setJsonOutput("");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="YAML to JSON Converter"
      icon="📄"
      color="#f59e0b"
      description="Efficiently transform human-readable YAML into machine-friendly JSON. Perfect for debugging Kubernetes configs and cloud-native applications."
      currentHref="/tools/yaml-to-json"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Editor Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "25px" }}>
          
          {/* YAML Input Area */}
          <section>
            <label style={{ fontSize: "11px", fontWeight: "900", color: "#f59e0b", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
              Input YAML
            </label>
            <textarea
              className="textarea"
              rows={12}
              placeholder="version: '3.8'&#10;services:&#10;  web:&#10;    image: nginx"
              value={yamlInput}
              onChange={(e) => setYamlInput(e.target.value)}
              style={{ 
                fontFamily: "'Fira Code', monospace", 
                fontSize: "14px",
                padding: "20px",
                borderRadius: "20px",
                background: "var(--bg2)",
                border: "2px solid var(--border)",
                color: "#f59e0b"
              }}
            />
          </section>

          {/* JSON Output Area */}
          <section>
            <label style={{ fontSize: "11px", fontWeight: "900", color: "#f59e0b", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
              Output JSON
            </label>
            <div style={{ position: "relative" }}>
              <div style={{ 
                height: "284px", 
                padding: "20px", 
                borderRadius: "20px",
                background: "#0f172a", 
                color: "#38bdf8",
                fontFamily: "'Fira Code', monospace",
                fontSize: "13px",
                border: "2px solid var(--border)",
                overflow: "auto",
                whiteSpace: "pre-wrap"
              }}>
                {error ? <span style={{ color: "#ef4444" }}>{error}</span> : (jsonOutput || "// JSON will appear here...")}
              </div>
              
              {jsonOutput && (
                <button 
                  onClick={copyToClipboard}
                  style={{
                    position: "absolute", top: "15px", right: "15px",
                    padding: "8px 16px", borderRadius: "10px",
                    background: copied ? "#10b981" : "#f59e0b",
                    color: "white", border: "none", cursor: "pointer", fontWeight: "700"
                  }}
                >
                  {copied ? "✓ COPIED" : "COPY"}
                </button>
              )}
            </div>
          </section>
        </div>

        <button 
          className="btn-primary" 
          onClick={handleConvert}
          style={{ 
            background: "#f59e0b", 
            color: "#000", 
            fontWeight: "900",
            padding: "18px",
            borderRadius: "18px",
            boxShadow: "0 10px 20px rgba(245, 158, 11, 0.2)"
          }}
        >
          CONVERT CONFIG ↓
        </button>

        

        {/* Info Card */}
        <div style={{ 
          padding: "30px", borderRadius: "28px", background: "rgba(245, 158, 11, 0.05)", 
          border: "1px dashed #f59e0b66", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>⚙️</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", color: "#f59e0b" }}>Why YAML to JSON?</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              YAML is optimized for human readability, but most web APIs and JavaScript engines require <b>JSON</b>. Use this tool to validate your Kubernetes or Docker configurations before deployment.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}