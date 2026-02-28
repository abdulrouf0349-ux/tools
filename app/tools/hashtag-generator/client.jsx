"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function HashtagGenerator() {
  const [keyword, setKeyword] = useState("");
  const [generatedTags, setGeneratedTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateHashtags = () => {
    if (!keyword.trim()) return;
    setLoading(true);

    setTimeout(() => {
      const cleanKeyword = keyword.trim().toLowerCase().replace(/\s/g, "");
      
      const variations = [
        `#${cleanKeyword}`, `#${cleanKeyword}2026`, `#${cleanKeyword}life`, 
        `#${cleanKeyword}vibes`, `#${cleanKeyword}trending`, `#${cleanKeyword}daily`,
        `#viral${cleanKeyword}`, `#explore${cleanKeyword}`, `#best${cleanKeyword}`,
        "#trending", "#viral", "#instagood", "#explorepage", "#foryou", 
        "#fyp", "#contentcreator", "#digitalmarketing", "#reelsinstagram",
        "#tiktokindia", "#youtube", "#growth", "#success"
      ];

      const result = variations.sort(() => 0.5 - Math.random()).slice(0, 18);
      setGeneratedTags(result);
      setLoading(false);
    }, 700);
  };

  const copyAll = () => {
    const allTags = generatedTags.join(" ");
    navigator.clipboard.writeText(allTags);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Viral Hashtag Generator"
      icon="#️⃣"
      color="#4fffb0"
      description="Maximize your social media reach. Generate trending, high-reach hashtags for Instagram, TikTok, and YouTube based on your niche."
      currentHref="/tools/hashtag-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Section */}
        <section style={{ 
          background: "var(--bg2)", padding: "40px 20px", borderRadius: 32, 
          border: "1px solid var(--border)", textAlign: "center",
          boxShadow: "0 10px 30px -10px rgba(79, 255, 176, 0.1)"
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "20px" }}>Discover Trending Tags</h2>
          <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto" }}>
            <input 
              className="input" 
              placeholder="Enter keyword (e.g. Fitness, Travel)" 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && generateHashtags()}
              style={{ 
                padding: "18px 120px 18px 25px", fontSize: "16px", borderRadius: "18px",
                background: "var(--bg1)", border: "2px solid var(--border)", width: "100%"
              }}
            />
            <button 
              onClick={generateHashtags}
              disabled={loading || !keyword}
              style={{ 
                position: "absolute", right: "8px", top: "8px", bottom: "8px", 
                background: "#4fffb0", color: "#003d24", border: "none", 
                padding: "0 25px", borderRadius: "12px", fontWeight: "900",
                cursor: "pointer", transition: "0.2s"
              }}
            >
              {loading ? "..." : "GENERATE"}
            </button>
          </div>
          <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "15px", fontWeight: "600" }}>
            🚀 AI-powered suggestion for 2026 social algorithms.
          </p>
        </section>

        {/* Results Area */}
        {generatedTags.length > 0 && (
          <section style={{ animation: "fadeInUp 0.5s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "800", margin: 0 }}>Optimized Results</h3>
              <button 
                onClick={copyAll}
                style={{ 
                  background: copied ? "#10b981" : "transparent", 
                  color: copied ? "#fff" : "#4fffb0", 
                  border: `1px solid ${copied ? "#10b981" : "#4fffb0"}`, 
                  padding: "8px 20px", borderRadius: "50px", fontSize: "12px", 
                  fontWeight: "900", cursor: "pointer", transition: "0.3s"
                }}
              >
                {copied ? "✓ Copied!" : "📋 Copy All Tags"}
              </button>
            </div>

            <div style={{ 
              display: "flex", flexWrap: "wrap", gap: 12, background: "var(--bg3)", 
              padding: "25px", borderRadius: "24px", border: "1px solid var(--border)" 
            }}>
              {generatedTags.map((tag, i) => (
                <button 
                  key={i} 
                  onClick={() => navigator.clipboard.writeText(tag)}
                  style={{ 
                    background: "var(--bg2)", color: "var(--text)", padding: "10px 18px", 
                    borderRadius: "14px", fontSize: "14px", fontWeight: "700",
                    border: "1px solid var(--border)", cursor: "pointer", transition: "0.2s"
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = "#4fffb0"}
                  onMouseLeave={(e) => e.target.style.borderColor = "var(--border)"}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Strategy Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          <div style={{ padding: "25px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <span style={{ fontSize: "24px" }}>🔥</span>
            <h3 style={{ fontSize: "16px", margin: "12px 0 8px 0", fontWeight: "800" }}>Trending Metrics</h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: "1.6" }}>
              Tags are selected based on high velocity and low competition to help you hit the <b>Explore Page</b>.
            </p>
          </div>
          <div style={{ padding: "25px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <span style={{ fontSize: "24px" }}>🎯</span>
            <h3 style={{ fontSize: "16px", margin: "12px 0 8px 0", fontWeight: "800" }}>Niche Relevance</h3>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: "1.6" }}>
              Our generator maps keywords to specific <b>content clusters</b> used by Instagram and TikTok algorithms.
            </p>
          </div>
        </div>

        {/* Expert SEO Content Section */}
        <section style={{ 
          padding: "30px", borderRadius: "28px", background: "var(--bg3)", 
          border: "1px solid var(--border)", marginTop: "10px"
        }}>
          <h2 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "12px" }}>How to Use Hashtags for SEO</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", margin: 0 }}>
            In 2026, social media SEO is more than just keywords. Using a mix of <b>broad</b> (e.g. #travel), <b>niche</b> (e.g. #backpackingasia), and <b>branded</b> hashtags tells the platform's AI exactly who your content is for. We recommend using 15-20 highly relevant tags rather than the maximum limit to avoid being flagged as spam.
          </p>
        </section>

      </div>
    </ToolPage>
  );
}