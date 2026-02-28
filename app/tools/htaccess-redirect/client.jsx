"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function HtaccessRedirectClient() {
  const [oldUrl, setOldUrl] = useState("/old-page");
  const [newUrl, setNewUrl] = useState("https://yara.com/new-page");
  const [type, setType] = useState("301");
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    const status = type === "301" ? "permanent" : "temp";
    return `# ${type} Redirect (${status}) - Generated via ToolKit Pro\nRedirect ${type} ${oldUrl} ${newUrl}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title=".htaccess Redirect Generator"
      icon="🔃"
      color="#f59e0b"
      description="Create error-free 301 and 302 redirect rules for your Apache server. Essential for SEO-friendly website migrations and URL restructuring."
      currentHref="/tools/htaccess-redirect"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* h2 Tag for SEO Context */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px", color: "var(--text)" }}>
            Configure Your Redirect Rule
          </h2>
          <div style={{ 
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20,
            background: "var(--bg2)", padding: "30px", borderRadius: "28px", border: "1px solid var(--border)"
          }}>
            <div>
              <label className="label" style={{ fontWeight: "800" }}>Source Path (Old)</label>
              <input 
                className="input" value={oldUrl} onChange={(e) => setOldUrl(e.target.value)}
                placeholder="/old-slug" style={{ borderRadius: "12px", background: "var(--bg1)" }}
              />
              <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "8px" }}>Relatve path, e.g., <code>/old-url</code></p>
            </div>

            <div>
              <label className="label" style={{ fontWeight: "800" }}>Destination URL (New)</label>
              <input 
                className="input" value={newUrl} onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://site.com/new-url" style={{ borderRadius: "12px", background: "var(--bg1)" }}
              />
              <p style={{ fontSize: "11px", color: "var(--muted)", marginTop: "8px" }}>Absolute URL is highly recommended</p>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "800", marginBottom: "10px", opacity: 0.8 }}>SELECT HTTP STATUS CODE</h3>
              <select 
                className="input" value={type} onChange={(e) => setType(e.target.value)}
                style={{ background: "var(--bg3)", cursor: "pointer", fontWeight: "700" }}
              >
                <option value="301">301 - Moved Permanently (SEO Link Juice Preservation)</option>
                <option value="302">302 - Found / Temporary (Maintenance Only)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Code Output with h3 Header */}
        <section>
          <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "12px" }}>Generated Apache Code</h3>
          <div style={{ position: "relative" }}>
            <pre style={{ 
              padding: "30px", background: "#1e1b16", color: "#fbbf24", 
              borderRadius: "24px", fontSize: "15px", fontFamily: "monospace",
              border: "1px solid #78350f", whiteSpace: "pre-wrap", overflowX: "auto"
            }}>
              {generateCode()}
            </pre>
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute", right: "15px", bottom: "15px",
                padding: "12px 24px", borderRadius: "14px", 
                background: copied ? "#10b981" : "#f59e0b",
                color: "white", fontSize: "13px", border: "none", cursor: "pointer", fontWeight: "900",
                transition: "0.3s"
              }}
            >
              {copied ? "✓ Copied to Clipboard" : "Copy Code"}
            </button>
          </div>
        </section>

        {/* Deep SEO Article Content */}
        
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 15
        }}>
          <h2 style={{ fontSize: "22px", fontWeight: "900", margin: 0 }}>SEO Guide: Why Redirects Matter</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", margin: 0 }}>
            Redirects are a critical part of <b>technical SEO</b>. When you change a URL without a proper redirect, users and search engines will hit a 404 error, leading to a loss in ranking and traffic.
          </p>
          
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginTop: "10px" }}>The Power of a 301 Redirect</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", margin: 0 }}>
            A <b>301 redirect</b> tells Google that the old page has moved forever. This signal allows search engines to transfer roughly <b>90-99% of ranking power</b> (Link Juice) to the new destination. It is the gold standard for site migrations.
          </p>

          <h3 style={{ fontSize: "17px", fontWeight: "800", marginTop: "10px" }}>When to use 302 Redirects?</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", margin: 0 }}>
            Use a <b>302 redirect</b> only for temporary purposes, such as A/B testing or when a product is out of stock. Unlike 301s, 302s do not pass authority, so the old URL remains indexed.
          </p>
        </section>

      </div>
    </ToolPage>
  );
}