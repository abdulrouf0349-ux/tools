"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function XmlToJsonClient() {
  const [xml, setXml] = useState("");
  const [json, setJson] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const convertXmlToJson = () => {
    try {
      setError(null);
      if (!xml.trim()) return;

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "text/xml");

      const parseError = xmlDoc.getElementsByTagName("parsererror");
      if (parseError.length > 0) {
        throw new Error("Invalid XML structure detected. Please check your tags.");
      }

      const xmlToJson = (node) => {
        let obj = {};

        if (node.nodeType === 1) { // Element
          if (node.attributes.length > 0) {
            obj["@attributes"] = {};
            for (let j = 0; j < node.attributes.length; j++) {
              let attribute = node.attributes.item(j);
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (node.nodeType === 3) { // Text
          obj = node.nodeValue.trim();
        }

        if (node.hasChildNodes()) {
          for (let i = 0; i < node.childNodes.length; i++) {
            let item = node.childNodes.item(i);
            let nodeName = item.nodeName;

            // Skip whitespace nodes
            if (item.nodeType === 3 && !item.nodeValue.trim()) continue;

            let result = xmlToJson(item);

            if (typeof obj[nodeName] === "undefined") {
              obj[nodeName] = result;
            } else {
              if (!Array.isArray(obj[nodeName])) {
                let old = obj[nodeName];
                obj[nodeName] = [old];
              }
              obj[nodeName].push(result);
            }
          }
        }
        
        // If it's just a text node, return the value directly
        if (Object.keys(obj).length === 1 && obj["#text"]) return obj["#text"];
        return Object.keys(obj).length === 0 ? "" : obj;
      };

      const jsonObj = xmlToJson(xmlDoc.documentElement);
      setJson(JSON.stringify(jsonObj, null, 2));
    } catch (err) {
      setError("⚠️ Parse Error: " + err.message);
      setJson("");
    }
  };

  const handleCopy = () => {
    if (!json) return;
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="XML to JSON Converter"
      icon="📁"
      color="#8b5cf6"
      description="Transform rigid XML data into flexible JSON objects. Essential for modern web development, data migration, and API integration."
      currentHref="/tools/xml-to-json"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Editor Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          
          {/* Input Side */}
          <section>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <label style={{ fontSize: "11px", fontWeight: "900", color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "1px" }}>
                Source XML
              </label>
            </div>
            <textarea
              className="textarea"
              rows={12}
              placeholder='<root><user id="1"><name>Ali</name></user></root>'
              value={xml}
              onChange={(e) => setXml(e.target.value)}
              style={{ 
                fontFamily: "'Fira Code', monospace", 
                fontSize: "13px",
                background: "var(--bg2)",
                border: "2px solid var(--border)",
                padding: "20px",
                borderRadius: "20px",
                width: "100%",
                resize: "vertical"
              }}
            />
          </section>

          {/* Output Side */}
          <section>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <label style={{ fontSize: "11px", fontWeight: "900", color: "#8b5cf6", textTransform: "uppercase", letterSpacing: "1px" }}>
                JSON Result
              </label>
            </div>
            <div style={{ position: "relative" }}>
              {error ? (
                <div style={{ 
                  height: "270px", padding: "20px", background: "rgba(239, 68, 68, 0.05)", 
                  color: "#ef4444", borderRadius: "20px", border: "2px dashed #ef4444", 
                  fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center"
                }}>
                  {error}
                </div>
              ) : (
                <div style={{ 
                  height: "270px", padding: "20px", borderRadius: "20px",
                  background: "#12121e", color: "#a5b4fc", fontFamily: "'Fira Code', monospace",
                  fontSize: "13px", border: "2px solid var(--border)", overflow: "auto",
                  boxShadow: "inset 0 4px 20px rgba(0,0,0,0.3)"
                }}>
                  {json || <span style={{ opacity: 0.2 }}>// Your JSON will appear here after conversion</span>}
                </div>
              )}
              
              {json && (
                <button 
                  onClick={handleCopy}
                  style={{
                    position: "absolute", right: "15px", bottom: "15px",
                    padding: "10px 18px", borderRadius: "12px", 
                    background: copied ? "#10b981" : "#8b5cf6",
                    color: "white", fontSize: "12px", border: "none", cursor: "pointer",
                    fontWeight: "700", boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                  }}
                >
                  {copied ? "✓ COPIED" : "COPY JSON"}
                </button>
              )}
            </div>
          </section>
        </div>

        {/* Action Button */}
        <button 
          className="btn-primary" 
          onClick={convertXmlToJson}
          style={{ 
            background: "#8b5cf6", 
            color: "white", 
            fontWeight: "900",
            padding: "20px",
            borderRadius: "20px",
            fontSize: "16px",
            boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
            cursor: "pointer"
          }}
        >
          CONVERT TO JSON ↓
        </button>

        

        {/* Technical Insight */}
        <div style={{ 
          padding: "30px", borderRadius: "28px", background: "rgba(139, 92, 246, 0.05)", 
          border: "1px solid #8b5cf633", display: "flex", gap: "25px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>🚀</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", color: "#8b5cf6", fontSize: "16px" }}>Client-Side Transformation</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>
              Your data never leaves your computer. Our converter uses the browser's native <b>DOMParser</b> API to transform XML into a JavaScript object structure, ensuring 100% privacy and lightning-fast speed.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}