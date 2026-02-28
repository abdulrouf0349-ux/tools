"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function CharacterMapClient() {
  const [selectedChar, setSelectedChar] = useState("");
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { name: "Popular", icon: "🔥", chars: ["❤️", "✨", "🔥", "✅", "❌", "⭐", "📍", "🚀", "💎", "👑", "💡", "⚡"] },
    { name: "Currency", icon: "💰", chars: ["$", "€", "£", "¥", "₹", "₽", "₿", "₩", "₪", "฿", "₫", "₭", "₮", "₼", "₵", "₾"] },
    { name: "Arrows", icon: "↗️", chars: ["←", "↑", "→", "↓", "↔", "↕", "↖", "↗", "↘", "↙", "↩", "↪", "🔃", "🔄", "➔", "➤"] },
    { name: "Math & Logic", icon: "➕", chars: ["+", "−", "×", "÷", "±", "≠", "≈", "∞", "√", "∑", "∫", "π", "∆", "≤", "≥", "‰", "¬"] },
    { name: "Legal & Marks", icon: "⚖️", chars: ["©", "®", "™", "§", "¶", "†", "‡", "•", "◦", "№", "ª", "º", "◊", "", "℮"] },
    { name: "Stars & Shapes", icon: "🔷", chars: ["★", "☆", "✫", "✪", "✬", "✦", "✧", "■", "□", "▲", "△", "▼", "▽", "◆", "◇", "○", "●"] },
    { name: "Social & Fun", icon: "💬", chars: ["✉️", "📞", "🌐", "🔔", "🎵", "📷", "🔒", "🔑", "🛡️", "🎁", "🎈", "🏆", "🎮", "🕹️", "💻"] }
  ];

  const copyToClipboard = async (char) => {
    try {
      await navigator.clipboard.writeText(char);
      setSelectedChar(char);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <ToolPage
      title="Ultra Character Map"
      icon="💎"
      color="#f59e0b"
      description="The most advanced symbol library. One-click copy for professional design and social media."
      currentHref="/tools/character-map"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Dashboard Section */}
        <div style={{ 
          display: "grid", gridTemplateColumns: "1fr 180px", gap: 20, 
          background: "var(--bg2)", padding: "25px", borderRadius: 24, border: "1px solid var(--border)"
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>
              {copied ? "✅ Copied: " + selectedChar : "Find your Symbol"}
            </h3>
            <p style={{ margin: "5px 0 15px 0", fontSize: 13, color: "var(--muted)" }}>
              Tap any character below to copy it instantly to your clipboard.
            </p>
            <input 
              type="text" placeholder="Search categories (e.g. math)..." 
              className="input" value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "100%", background: "var(--bg1)", border: "1px solid var(--border)", padding: "12px", borderRadius: "12px", color: "var(--text)" }}
            />
          </div>

          <div style={{ 
            background: "#f59e0b15", borderRadius: 20, display: "flex", alignItems: "center", 
            justifyContent: "center", fontSize: 60, color: "#f59e0b", border: "1px solid #f59e0b33"
          }}>
            {selectedChar || "💎"}
          </div>
        </div>

        {/* Categories Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: 35 }}>
          {categories.map((cat) => {
            const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
            if (searchTerm !== "" && !matchesSearch) return null;

            return (
              <div key={cat.name}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 15 }}>
                  <span style={{ fontSize: 22 }}>{cat.icon}</span>
                  <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{cat.name}</h4>
                  <div style={{ flex: 1, height: "1px", background: "var(--border)" }}></div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(55px, 1fr))", gap: 12 }}>
                  {cat.chars.map((char, i) => (
                    <button
                      key={i} onClick={() => copyToClipboard(char)} className="char-btn"
                      style={{
                        aspectRatio: "1/1", background: "var(--bg2)", border: "1px solid var(--border)",
                        borderRadius: 16, fontSize: 24, cursor: "pointer", color: "var(--text)",
                        transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center"
                      }}
                    >
                      {char}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* SEO Educational Content */}
        <div style={{ marginTop: "30px", borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "15px" }}>How to Use Special Characters?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7" }}>
            Special characters and symbols help break the monotony of plain text. In <b>professional documents</b>, 
            using the correct currency symbols ($ vs €) or mathematical signs (±, ∞) ensures accuracy. 
            For <b>social media</b>, icons like ✨ or 🚀 are proven to increase engagement rates.
          </p>
          
          <h3 style={{ fontSize: "17px", fontWeight: "700", marginTop: "20px" }}>Commonly Used Symbols:</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>
            <li><b>Copyright & Trademarks:</b> Use © for ownership and ™ for unregistered marks.</li>
            <li><b>Currency:</b> Easily access globally used symbols like ₿ (Bitcoin) or ₹ (Rupee).</li>
            <li><b>Arrows:</b> Perfect for call-to-actions in your newsletters or bios.</li>
          </ul>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .char-btn:hover {
            transform: translateY(-5px) scale(1.1);
            background: var(--bg3) !important;
            border-color: #f59e0b !important;
            box-shadow: 0 10px 20px rgba(245, 158, 11, 0.1);
          }
          .char-btn:active { transform: scale(0.9); }
        `}} />
      </div>
    </ToolPage>
  );
}