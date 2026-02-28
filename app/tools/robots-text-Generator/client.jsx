"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function RobotsTxtClient() {
  const [allowAll, setAllowAll] = useState(true);
  const [disallowPaths, setDisallowPaths] = useState("/admin/\n/tmp/\n/private/");
  const [sitemap, setSitemap] = useState("https://yourdomain.com/sitemap.xml");
  const [copied, setCopied] = useState(false);

  const generateRobotsTxt = () => {
    let content = "User-agent: *\n";
    if (allowAll) {
      content += "Disallow: \n";
    }

    const paths = disallowPaths.split('\n').filter(p => p.trim() !== "");
    paths.forEach(path => {
      content += `Disallow: ${path.trim()}\n`;
    });

    if (sitemap.trim()) {
      content += `\nSitemap: ${sitemap.trim()}`;
    }

    return content;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateRobotsTxt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Robots.txt Generator"
      icon="🤖"
      color="#475569"
      description="Tell search engines which parts of your site to crawl. Optimize your crawl budget and keep sensitive directories private."
      currentHref="/tools/robots-txt-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Settings Panel */}
        <section style={{ 
          background: "var(--bg2)", padding: "30px", borderRadius: "32px", 
          border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 25 
        }}>
          {/* Main Toggle */}
          <div style={{ 
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "20px", background: "var(--bg3)", borderRadius: "20px"
          }}>
            <div>
              <h4 style={{ margin: "0 0 5px 0", fontSize: "16px", fontWeight: "800" }}>Allow All Search Engines?</h4>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)" }}>Recommended for most public websites.</p>
            </div>
            <button 
              onClick={() => setAllowAll(!allowAll)}
              style={{
                padding: "10px 25px", borderRadius: "14px",
                background: allowAll ? "#22c55e" : "#ef4444",
                color: "white", border: "none", fontWeight: "900", cursor: "pointer",
                transition: "all 0.3s ease", boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            >
              {allowAll ? "YES (Allow)" : "NO (Block)"}
            </button>
          </div>

          {/* Paths Input */}
          <div>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
              Paths to Disallow (One per line)
            </label>
            <textarea 
              className="input" 
              rows={5}
              value={disallowPaths}
              onChange={(e) => setDisallowPaths(e.target.value)}
              placeholder="/admin/"
              style={{ 
                fontFamily: "monospace", fontSize: "15px", background: "var(--bg3)", 
                padding: "20px", borderRadius: "20px", border: "1px solid var(--border)"
              }}
            />
          </div>

          {/* Sitemap Input */}
          <div>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase", marginBottom: "10px", display: "block" }}>
              Sitemap URL
            </label>
            <input 
              className="input" 
              value={sitemap}
              onChange={(e) => setSitemap(e.target.value)}
              placeholder="https://example.com/sitemap.xml"
              style={{ background: "var(--bg3)", height: "55px", borderRadius: "15px", padding: "0 20px" }}
            />
          </div>
        </section>

        {/* Live Preview Console */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "10px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase" }}>
              Generated Output
            </label>
            <span style={{ fontSize: "11px", color: "#22c55e", fontWeight: "bold" }}>● READY TO SAVE</span>
          </div>
          <div style={{ position: "relative" }}>
            <pre style={{ 
              padding: "30px", background: "#0f172a", color: "#38bdf8", 
              borderRadius: "28px", fontSize: "16px", fontFamily: "'Fira Code', monospace",
              border: "1px solid #1e293b", whiteSpace: "pre-wrap", overflowX: "auto",
              boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)", margin: 0
            }}>
              {generateRobotsTxt()}
            </pre>
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute", top: "15px", right: "15px",
                padding: "10px 20px", borderRadius: "12px", 
                background: copied ? "#22c55e" : "rgba(255,255,255,0.1)",
                color: "white", fontSize: "12px", border: "1px solid rgba(255,255,255,0.1)", 
                cursor: "pointer", fontWeight: "900", backdropFilter: "blur(10px)",
                transition: "all 0.2s"
              }}
            >
              {copied ? "✓ COPIED" : "COPY CODE"}
            </button>
          </div>
        </section>

        {/* SEO Tip Card */}
        <div style={{ 
          padding: 25, borderRadius: "24px", background: "#47556911", 
          display: "flex", gap: 15, alignItems: "center", border: "1px dashed #47556944"
        }}>
          <div style={{ fontSize: 32 }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>Where to place this?</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Download or copy this content and save it as a file named <b>robots.txt</b>. Upload it to the <b>root directory</b> of your website (e.g., <code>domain.com/robots.txt</code>).
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}