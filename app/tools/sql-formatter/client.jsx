"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function SqlFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const formatSql = () => {
    if (!input.trim()) return;

    // Enhanced SQL Formatting Logic
    let formatted = input
      .replace(/\s+/g, " ") 
      .replace(/\s*,\s*/g, ",\n  ") 
      .replace(/\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|HAVING|LIMIT|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|UPDATE|SET|DELETE|INSERT INTO|VALUES|CREATE|ALTER|DROP|TABLE|DATABASE|AND|OR|ON|UNION)\b/gi, 
        (match) => "\n" + match.toUpperCase() + "\n ") 
      .replace(/\n+/g, "\n") 
      .trim();

    setOutput(formatted);
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  return (
    <ToolPage
      title="SQL Formatter"
      icon="🗄️"
      color="#64748b"
      description="Don't struggle with unreadable queries. Our formatter adds proper indentation and line breaks to your SQL code automatically."
      currentHref="/tools/sql-formatter"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Terminal */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
              Messy SQL Input
            </label>
            <button onClick={clearAll} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: "11px", fontWeight: "700", cursor: "pointer" }}>
              CLEAR ALL
            </button>
          </div>
          <textarea
            className="textarea"
            rows={8}
            placeholder="select * from users inner join orders on users.id = orders.user_id where status='active' group by region..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ 
              fontSize: "14px", 
              fontFamily: "'Fira Code', 'Courier New', monospace", 
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              padding: "20px",
              borderRadius: "24px",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.05)"
            }}
          />
        </section>

        {/* Action Button */}
        <button 
          className="btn-primary" 
          onClick={formatSql}
          style={{ 
            background: "#64748b", 
            color: "white", 
            fontWeight: "900",
            padding: "20px",
            fontSize: "16px",
            borderRadius: "18px",
            boxShadow: "0 10px 25px -5px rgba(100, 116, 139, 0.4)",
            letterSpacing: "0.5px"
          }}
        >
          BEAUTIFY QUERY ⚡
        </button>

        {/* Formatted Output Console */}
        <section>
          <label style={{ fontSize: "12px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase", marginBottom: "12px", display: "block" }}>
            Clean SQL Output
          </label>
          <div style={{ position: "relative" }}>
            <div style={{ 
              minHeight: "220px",
              padding: "30px",
              background: "#0f172a", 
              color: "#e2e8f0", 
              borderRadius: "28px",
              fontSize: "14px",
              fontFamily: "'Fira Code', 'Courier New', monospace",
              lineHeight: "1.8",
              whiteSpace: "pre-wrap",
              border: "1px solid #334155",
              boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
              overflowX: "auto"
            }}>
              {output || <span style={{ opacity: 0.3 }}>-- Your clean query will appear here...</span>}
            </div>

            {output && (
              <button 
                onClick={handleCopy}
                style={{
                  position: "absolute",
                  right: "15px",
                  bottom: "15px",
                  padding: "12px 25px",
                  borderRadius: "14px",
                  background: copied ? "#22c55e" : "#334155",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "900",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
                }}
              >
                {copied ? "✓ COPIED" : "COPY CLEAN SQL"}
              </button>
            )}
          </div>
        </section>

        {/* Informational Graphic Placeholder */}
        

        {/* Learning Insight */}
        <section style={{ 
          padding: "25px", 
          borderRadius: "28px", 
          background: "var(--bg2)", 
          border: "1px dashed var(--border)",
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>Better Code, Better Performance</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Formatting your SQL helps you spot <b>missing JOIN conditions</b> or <b>redundant WHERE clauses</b> that could slow down your database. Clean code is the first step in query optimization.
            </p>
          </div>
        </section>

      </div>
    </ToolPage>
  );
}