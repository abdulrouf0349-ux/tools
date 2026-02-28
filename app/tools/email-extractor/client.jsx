"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function EmailExtractorClient() {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);
  const [copied, setCopied] = useState(false);

  const extractEmails = () => {
    // Advanced Regex to capture complex email patterns
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const found = text.match(emailRegex) || [];
    
    // De-duplication
    const uniqueEmails = [...new Set(found)];
    setEmails(uniqueEmails);
  };

  const copyToClipboard = () => {
    if (emails.length === 0) return;
    navigator.clipboard.writeText(emails.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setText("");
    setEmails([]);
  };

  return (
    <ToolPage
      title="Email Extractor"
      icon="📧"
      color="#ec4899"
      description="Quickly scan through messy text or code to find every email address. Clean, unique, and ready for your next campaign."
      currentHref="/tools/email-extractor"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Panel */}
        <div style={{ 
          background: "var(--bg2)", 
          padding: "24px", 
          borderRadius: "28px", 
          border: "1px solid var(--border)",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
        }}>
          <label className="label" style={{ fontWeight: 700, marginBottom: 12, display: "block" }}>Paste Messy Content</label>
          <textarea 
            className="input" 
            rows="8"
            placeholder="Paste text, HTML code, or data logs here... Example: admin@site.com"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              resize: "none", fontSize: "16px", background: "var(--bg1)", 
              padding: "20px", borderRadius: "16px", border: "1px solid var(--border)", 
              width: "100%", color: "var(--text)", lineHeight: "1.6"
            }}
          ></textarea>
          
          <div style={{ display: "flex", gap: 12, marginTop: 15 }}>
            <button 
              className="btn-primary" 
              onClick={extractEmails}
              style={{ 
                background: "#ec4899", flex: 2, padding: "16px", borderRadius: "14px", 
                fontWeight: "900", color: "#fff", border: "none", cursor: "pointer",
                boxShadow: "0 8px 15px -5px rgba(236, 72, 153, 0.4)"
              }}
            >
              Extract All Emails ⚡
            </button>
            <button 
              onClick={clearAll}
              style={{ 
                flex: 1, background: "var(--bg3)", border: "1px solid var(--border)", 
                borderRadius: "14px", cursor: "pointer", color: "var(--muted)",
                fontWeight: "700", transition: "0.2s"
              }}
            >
              Clear
            </button>
          </div>
        </div>

        {/* Results List */}
        {emails.length > 0 ? (
          <div style={{ animation: "fadeIn 0.5s ease-out" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ padding: "4px 10px", background: "#ec4899", color: "#fff", borderRadius: "8px", fontSize: "12px", fontWeight: "900" }}>
                  {emails.length}
                </span>
                <h3 style={{ fontSize: "16px", margin: 0, fontWeight: "700" }}>Found Addresses</h3>
              </div>
              <button 
                onClick={copyToClipboard}
                style={{ 
                  background: copied ? "#10b981" : "rgba(236, 72, 153, 0.1)", 
                  border: `1px solid ${copied ? "#10b981" : "#ec4899"}`,
                  color: copied ? "white" : "#ec4899",
                  padding: "8px 20px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "800",
                  transition: "0.3s"
                }}
              >
                {copied ? "✓ Copied List" : "Copy All Emails"}
              </button>
            </div>
            
            <div style={{ 
              background: "var(--bg2)", 
              padding: "15px", 
              borderRadius: "24px", 
              border: "1px solid var(--border)",
              maxHeight: "350px",
              overflowY: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 10
            }}>
              {emails.map((email, index) => (
                <div key={index} style={{ 
                  padding: "12px 18px", background: "var(--bg3)", borderRadius: "14px", 
                  fontSize: "13px", fontFamily: "var(--mono)", color: "#f472b6", 
                  border: "1px solid var(--border)", overflow: "hidden", textOverflow: "ellipsis"
                }}>
                  {email}
                </div>
              ))}
            </div>
          </div>
        ) : (
          text.trim() && (
            <div style={{ 
              textAlign: "center", padding: "50px", border: "2px dashed var(--border)", 
              borderRadius: "32px", color: "var(--muted)", background: "var(--bg1)" 
            }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>🔍</div>
              <p style={{ margin: 0, fontWeight: "600" }}>No email addresses detected yet.</p>
            </div>
          )
        )}

        {/* Business Logic Insight */}
        
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: 20, alignItems: "flex-start"
        }}>
          <div style={{ 
            fontSize: "24px", background: "#ec4899", width: "45px", height: "45px", 
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", flexShrink: 0 
          }}>🧠</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>Intelligent Lead Scraping</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Our extractor uses high-precision <b>Regex (Regular Expressions)</b> to scan through unstructured text, HTML, or JSON. It automatically filters out duplicate entries and validates common top-level domains (TLDs) to ensure your list is ready for marketing or outreach.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}