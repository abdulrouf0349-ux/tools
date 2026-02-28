"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function SitemapGeneratorClient() {
  const [baseUrl, setBaseUrl] = useState("https://yourwebsite.com");
  const [links, setLinks] = useState("/\n/about\n/services\n/blog\n/contact");
  const [frequency, setFrequency] = useState("weekly");
  const [priority, setPriority] = useState("0.8");
  const [copied, setCopied] = useState(false);

  const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];
    const urlList = links.split('\n').filter(l => l.trim() !== "");
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    urlList.forEach(path => {
      const fullUrl = baseUrl.replace(/\/$/, '') + (path.startsWith('/') ? path : '/' + path);
      xml += `  <url>\n`;
      xml += `    <loc>${fullUrl}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${frequency}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSitemap());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputStyle = {
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: "14px",
    padding: "12px 15px",
    color: "var(--text)",
    fontSize: "14px",
    width: "100%",
    marginTop: "8px"
  };

  return (
    <ToolPage
      title="XML Sitemap Generator"
      icon="🗺️"
      color="#06b6d4"
      description="Tell search engines which pages are most important. Generate a valid XML schema sitemap to improve your site's crawlability."
      currentHref="/tools/xml-sitemap-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Configuration Panel */}
        <section style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "28px", 
          border: "1px solid var(--border)",
          boxShadow: "0 10px 30px -15px rgba(6, 182, 212, 0.1)"
        }}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#06b6d4", textTransform: "uppercase" }}>Root Domain URL</label>
            <input 
              style={inputStyle}
              value={baseUrl} 
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="https://example.com"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: "25px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "900", color: "#06b6d4", textTransform: "uppercase" }}>Crawl Frequency</label>
              <select style={inputStyle} value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                <option value="always">Always</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "900", color: "#06b6d4", textTransform: "uppercase" }}>Default Priority</label>
              <select style={inputStyle} value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="1.0">1.0 (Homepage/Main)</option>
                <option value="0.8">0.8 (Core Content)</option>
                <option value="0.5">0.5 (Utility/Posts)</option>
                <option value="0.3">0.3 (Archives/Old)</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#06b6d4", textTransform: "uppercase" }}>URL List (Paths Only)</label>
            <textarea 
              style={{ ...inputStyle, minHeight: "120px", fontFamily: "monospace" }}
              value={links}
              onChange={(e) => setLinks(e.target.value)}
              placeholder="/services"
            />
            <p style={{ fontSize: "10px", color: "var(--muted)", marginTop: "8px" }}>Enter one relative path per line (e.g., /about-us)</p>
          </div>
        </section>

        {/* Live Preview Box */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "800", color: "var(--text)" }}>XML Structure Preview</h3>
            <div style={{ fontSize: "10px", background: "#06b6d422", color: "#06b6d4", padding: "4px 8px", borderRadius: "6px", fontWeight: "bold" }}>VALID XML 0.9</div>
          </div>
          
          <div style={{ position: "relative" }}>
            <pre style={{ 
              padding: "30px", 
              background: "#083344", 
              color: "#22d3ee", 
              borderRadius: "24px",
              fontSize: "13px",
              fontFamily: "'Fira Code', 'Courier New', monospace",
              border: "1px solid #164e63",
              overflowX: "auto",
              maxHeight: "400px",
              boxShadow: "inset 0 4px 20px rgba(0,0,0,0.4)",
              lineHeight: "1.6"
            }}>
              {generateSitemap()}
            </pre>
            
            <button 
              onClick={handleCopy}
              style={{
                position: "absolute", right: "15px", bottom: "15px",
                padding: "12px 25px", borderRadius: "14px", 
                background: copied ? "#22c55e" : "#06b6d4",
                color: "white", fontSize: "12px", border: "none", 
                cursor: "pointer", fontWeight: "900", transition: "all 0.3s ease",
                boxShadow: "0 10px 20px -5px rgba(6, 182, 212, 0.4)"
              }}
            >
              {copied ? "✓ XML COPIED" : "COPY XML CONTENT"}
            </button>
          </div>
        </section>

        {/* Learning Card */}
        
        <section style={{ 
          padding: "25px", borderRadius: "28px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>🤖</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "15px", fontWeight: "900" }}>Where to put this?</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Download or copy this code, save it as <code>sitemap.xml</code>, and upload it to your website's root folder. Then, submit the link in <b>Google Search Console</b>.
            </p>
          </div>
        </section>

      </div>
    </ToolPage>
  );
}