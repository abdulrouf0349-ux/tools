"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function UsernameGenerator() {
  const [keyword, setKeyword] = useState("");
  const [usernames, setUsernames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copyStatus, setCopyStatus] = useState(null);

  const generateUsernames = () => {
    if (!keyword.trim()) return;
    setLoading(true);

    setTimeout(() => {
      const base = keyword.trim().toLowerCase().replace(/\s/g, "");
      
      const styles = [
        `${base}_vibe`, `the_${base}`, `i_am_${base}`, `${base}.official`,
        `${base}_aesthetic`, `its_${base}`, `simply${base}`, `${base}dx`,
        `${base}_xoxo`, `${base}_vibes`, `pure_${base}`, `${base}_studio`,
        `not_${base}`, `${base}_cloud`, `mr_${base}`, `miss_${base}`,
        `${base}_007`, `legend_${base}`, `${base}_nexus`, `${base}_aura`,
        `vivid_${base}`, `${base}_arc`, `ethereal_${base}`, `daily_${base}`
      ];

      const shuffled = styles.sort(() => 0.5 - Math.random()).slice(0, 16);
      setUsernames(shuffled);
      setLoading(false);
    }, 600);
  };

  const copyToClipboard = (name) => {
    navigator.clipboard.writeText(name);
    setCopyStatus(name);
    setTimeout(() => setCopyStatus(null), 1500);
  };

  return (
    <ToolPage
      title="Viral Username Generator"
      icon="🆔"
      color="#fb7185"
      description="Finding the perfect handle is hard. Our AI-style generator helps you find unique, aesthetic, and professional names for your online presence."
      currentHref="/tools/username-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 35 }}>
        
        {/* Input Dashboard */}
        <section style={{ 
          background: "var(--bg2)", 
          padding: "35px 25px", 
          borderRadius: "32px", 
          border: "2px solid var(--border)",
          textAlign: "center"
        }}>
          <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "800" }}>Your Brand Identity Starts Here</h3>
          <p style={{ margin: "0 0 25px 0", fontSize: "13px", color: "var(--muted)" }}>Enter your name, hobby, or niche keyword</p>
          
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", maxWidth: "600px", margin: "0 auto" }}>
            <input 
              style={{ 
                flex: "1 1 300px", 
                padding: "18px 25px", 
                borderRadius: "20px", 
                border: "2px solid var(--border)", 
                background: "var(--bg3)", 
                color: "var(--text)", 
                fontSize: "16px",
                fontWeight: "600",
                outline: "none"
              }}
              placeholder="e.g. Pixel, Zara, Fitness"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && generateUsernames()}
            />
            <button 
              onClick={generateUsernames}
              disabled={loading || !keyword}
              style={{ 
                flex: "1 1 150px",
                background: "#fb7185", 
                color: "white", 
                border: "none", 
                padding: "18px 30px", 
                borderRadius: "20px", 
                fontWeight: "900",
                fontSize: "15px",
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(251, 113, 133, 0.3)",
                transition: "all 0.2s"
              }}
            >
              {loading ? "SEARCHING..." : "FIND HANDLES"}
            </button>
          </div>
        </section>

        {/* Results Grid */}
        {usernames.length > 0 && (
          <section style={{ animation: "fadeUp 0.5s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", alignItems: "center" }}>
              <label style={{ fontSize: "11px", fontWeight: "900", color: "#fb7185", textTransform: "uppercase", letterSpacing: "2px" }}>Available Suggestions</label>
              <span style={{ fontSize: "11px", opacity: 0.5 }}>Click any name to copy</span>
            </div>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", 
              gap: "12px" 
            }}>
              {usernames.map((name, i) => (
                <div 
                  key={i} 
                  onClick={() => copyToClipboard(name)}
                  style={{ 
                    background: copyStatus === name ? "rgba(16, 185, 129, 0.1)" : "var(--bg2)", 
                    border: `2px solid ${copyStatus === name ? "#10b981" : "var(--border)"}`,
                    padding: "18px 10px", 
                    borderRadius: "18px", 
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    position: "relative"
                  }}
                >
                  <span style={{ color: "#fb7185", marginRight: "2px" }}>@</span>{name}
                  {copyStatus === name && <span style={{ fontSize: "10px", display: "block", color: "#10b981", marginTop: "4px" }}>COPIED!</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        

        {/* Niche Guide */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "25px", background: "rgba(251, 113, 133, 0.05)", borderRadius: "24px", border: "1px dashed #fb718566" }}>
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>✨</div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", color: "#fb7185" }}>Aesthetic Vibe</h4>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>
              Focus on lowercase and underscores for a minimal "Tumblr" or "Pinterest" aesthetic.
            </p>
          </div>
          <div style={{ padding: "25px", background: "rgba(251, 113, 133, 0.05)", borderRadius: "24px", border: "1px dashed #fb718566" }}>
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>🎮</div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", color: "#fb7185" }}>Gaming Nexus</h4>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>
              Use powerful nouns and suffixes like "Nexus", "Legend", or "DX" for gaming platforms.
            </p>
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}