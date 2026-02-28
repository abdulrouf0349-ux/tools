"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function CurlToFetchClient() {
  const [curl, setCurl] = useState("");
  const [fetchCode, setFetchCode] = useState("");
  const [copied, setCopied] = useState(false);

  const convertCurlToFetch = () => {
    if (!curl.trim()) return;

    try {
      // Basic URL extraction
      const urlMatch = curl.match(/curl\s+(?:-X\s+\w+\s+)?['"]?([^'"]+)/);
      const url = urlMatch ? urlMatch[1] : "https://api.example.com/data";

      // Method detection
      const methodMatch = curl.match(/-X\s+(\w+)/);
      let method = methodMatch ? methodMatch[1].toUpperCase() : (curl.includes("--data") || curl.includes("-d") ? "POST" : "GET");

      // Headers parsing
      const headerMatches = [...curl.matchAll(/-H\s+['"]([^'"]+)['"]/g)];
      const headers = {};
      headerMatches.forEach(match => {
        const parts = match[1].split(/:\s*/);
        if (parts.length >= 2) {
          headers[parts[0]] = parts.slice(1).join(":");
        }
      });

      // Body parsing (Handles both single and double quotes)
      const bodyMatch = curl.match(/(?:--data|-d)\s+['"]?({[\s\S]+?})['"]?(?:\s|$)/);
      const body = bodyMatch ? bodyMatch[1] : null;

      const headersStr = JSON.stringify(headers, null, 2);

      const snippet = `const fetchData = async () => {
  const url = "${url}";
  const options = {
    method: "${method}",
    headers: ${headersStr}${body ? `,
    body: JSON.stringify(${body})` : ""}
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
  }
};

fetchData();`;

      setFetchCode(snippet);
    } catch (err) {
      setFetchCode("// Error: Unable to parse cURL. Ensure it's a valid command format.");
    }
  };

  const copyToClipboard = () => {
    if (!fetchCode) return;
    navigator.clipboard.writeText(fetchCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="cURL to Fetch Converter"
      icon="🚀"
      color="#c084fc"
      description="Instantly transform cURL terminal commands into modern JavaScript Fetch API snippets with error handling."
      currentHref="/tools/curl-to-fetch"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Input Area */}
        <div style={{ background: "var(--bg2)", padding: "24px", borderRadius: "24px", border: "1px solid var(--border)" }}>
          <label className="label" style={{ fontWeight: 700, marginBottom: "12px", display: "block" }}>Paste your cURL command</label>
          <textarea 
            className="input" 
            rows="6"
            placeholder="curl -X POST https://api.site.com/v1/user -H 'Content-Type: application/json' -d '{'name': 'Gemini'}'"
            value={curl}
            onChange={(e) => setCurl(e.target.value)}
            style={{ 
              background: "#0f0f17", color: "#f5e0dc", fontFamily: "var(--mono)",
              border: "1px solid #313244", resize: "none", width: "100%", padding: "15px",
              borderRadius: "14px", fontSize: "14px", lineHeight: "1.5"
            }}
          ></textarea>
          
          <button 
            className="btn-primary" 
            onClick={convertCurlToFetch}
            style={{ 
              background: "#c084fc", marginTop: "20px", color: "#fff", 
              width: "100%", padding: "16px", borderRadius: "14px", fontWeight: "900",
              boxShadow: "0 10px 20px -5px rgba(192, 132, 252, 0.4)" 
            }}
          >
            Generate Fetch Snippet ⚡
          </button>
        </div>

        {/* Output Area */}
        {fetchCode && (
          <div style={{ animation: "fadeIn 0.5s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ fontSize: "13px", color: "var(--muted)", fontWeight: "700" }}>JavaScript (Async/Await):</span>
              <button 
                onClick={copyToClipboard}
                style={{ 
                  background: copied ? "#10b981" : "rgba(192, 132, 252, 0.1)", 
                  color: copied ? "#fff" : "#c084fc",
                  border: `1px solid ${copied ? "#10b981" : "#c084fc"}`,
                  padding: "6px 18px", borderRadius: "10px", cursor: "pointer",
                  fontSize: "12px", fontWeight: "800", transition: "0.2s"
                }}
              >
                {copied ? "✓ Copied" : "Copy Code"}
              </button>
            </div>
            <pre style={{ 
              background: "#181825", padding: "24px", borderRadius: "20px", 
              overflowX: "auto", border: "1px solid #313244", color: "#a6adc8",
              fontSize: "13px", lineHeight: "1.7", fontFamily: "var(--mono)"
            }}>
              <code>{fetchCode}</code>
            </pre>
          </div>
        )}

        {/* Help / Docs */}
        
        <div style={{ marginTop: 10, padding: "25px", borderRadius: "24px", background: "var(--bg3)", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "10px" }}>Why use Fetch API over cURL?</h3>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
            The <b>Fetch API</b> is the modern standard for making asynchronous network requests in the browser. While cURL is perfect for testing in the terminal, Fetch allows you to handle data directly in your JavaScript application, manage application state, and provide a seamless user experience without page reloads.
          </p>
        </div>

      </div>
    </ToolPage>
  );
}