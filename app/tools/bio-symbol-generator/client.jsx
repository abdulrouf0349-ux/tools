"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function BioSymbolGenerator() {
  const [copied, setCopied] = useState("");

  const categories = [
    { name: "Popular & Viral", symbols: ["✨", "🔥", "🚀", "💎", "👑", "🧿", "💯", "📍", "⚡", "🌈", "🦋", "🦄", "🌙", "🌊", "🍃", "🌸", "⭐", "🔮", "☯️", "💮"] },
    { name: "Aesthetic Stars", symbols: ["⭐", "🌟", "✨", "💫", "🌠", "🌌", "🌃", "🏮", "✴️", "✳️", "💥", "☄️", "💠", "💡", "🔅", "🔆", "🛸", "🔭", "🌙", "🌚"] },
    { name: "Hearts & Love", symbols: ["❤️", "💖", "💝", "🤍", "🖤", "🤎", "💜", "💙", "💚", "💛", "🧡", "❣️", "💕", "💞", "💓", "💗", "💘", "💟", "💌", "🤟"] },
    { name: "Music & Creative", symbols: ["🎵", "🎶", "🎧", "🎸", "🎹", "🎨", "🖌️", "📷", "🎬", "🎭", "🎤", "🎼", "🎻", "🎷", "🎺", "🎥", "🎞️", "🎟️", "🕹️", "🎮"] },
    { name: "Arrows & Pointers", symbols: ["➞", "➡", "➤", "➥", "➦", "➧", "➨", "➚", "➘", "➙", "➛", "➜", "➝", "➟", "➠", "➢", "➣", "➤", "➽", "➾"] },
    { name: "Nature & Vibes", symbols: ["🌵", "🌴", "🌲", "🌳", "🌱", "🌿", "🍀", "🍃", "🍂", "🍁", "🍄", "🐚", "🎋", "🌾", "🌻", "🌼", "🌷", "🌹", "🥀", "🌞"] },
    { name: "Office & Study", symbols: ["💼", "📊", "📈", "📉", "💻", "⌨️", "🖱️", "🖨️", "📓", "📚", "📝", "🖋️", "🖊️", "🖍️", "📍", "📌", "📎", "🖇️", "📏", "📐"] },
    { name: "Geometric & Shapes", symbols: ["◼️", "◻️", "◾", "◽", "▪️", "▫️", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "💠", "🔘", "🏁", "🚩", "🎌", "🏴", "🏳️", "⚪"] }
  ];

  const copyToClipboard = (symbol) => {
    navigator.clipboard.writeText(symbol);
    setCopied(symbol);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <ToolPage
      title="Bio Symbol Generator"
      icon="✨"
      color="#a29bfe"
      description="Mega collection of professional symbols and emojis to make your social media bios stand out."
      currentHref="/tools/bio-symbol-generator"
    >
      <style jsx>{`
        .symbol-container { display: grid; grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); gap: 12px; margin-top: 10px; }
        .symbol-card { background: var(--bg2); border: 1px solid var(--border); height: 60px; display: flex; align-items: center; justify-content: center; font-size: 24px; border-radius: 16px; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); user-select: none; }
        .symbol-card:hover { transform: translateY(-5px); border-color: #a29bfe; background: var(--bg3); box-shadow: 0 10px 15px -3px rgba(162, 155, 254, 0.1); }
        .symbol-card:active { transform: scale(0.9); }
        .category-title { font-size: 13px; font-weight: 800; color: var(--muted); text-transform: uppercase; letter-spacing: 1.5px; margin-top: 40px; margin-bottom: 15px; display: flex; align-items: center; gap: 15px; }
        .line { height: 1px; flex: 1; background: linear-gradient(to right, transparent, var(--border), transparent); }
        .copy-toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: #a29bfe; color: white; padding: 12px 24px; border-radius: 50px; font-weight: bold; box-shadow: 0 10px 25px rgba(162, 155, 254, 0.5); z-index: 1000; border: 2px solid rgba(255,255,255,0.2); }
      `}</style>

      <div style={{ paddingBottom: "40px" }}>
        <div style={{ background: "rgba(162, 155, 254, 0.1)", padding: "20px", borderRadius: "24px", border: "1px dashed #a29bfe", textAlign: "center", marginBottom: "30px" }}>
          <p style={{ margin: 0, fontSize: "15px", color: "var(--text)", fontWeight: "600" }}>
            🎨 Personalize your Bio: Just tap to copy any symbol!
          </p>
        </div>

        {categories.map((cat, idx) => (
          <div key={idx}>
            <div className="category-title">
              <span className="line"></span>
              {cat.name}
              <span className="line"></span>
            </div>
            <div className="symbol-container">
              {cat.symbols.map((sym, i) => (
                <div key={i} className="symbol-card" onClick={() => copyToClipboard(sym)} title="Click to Copy">
                  {sym}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* SEO Content Section */}
        <div style={{ marginTop: "60px", borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "15px" }}>Why Use Symbols in Your Bio?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7" }}>
            In the world of <strong>Instagram</strong> and <strong>TikTok</strong>, your bio is your first impression. Using 
            aesthetic symbols and professional dividers helps organize your information and makes your profile 
            visually appealing. Whether you are a brand, an influencer, or a gamer, our <strong>Bio Symbol Generator</strong> 
            provides the latest viral symbols to make your profile stand out.
          </p>
          <h3 style={{ fontSize: "17px", fontWeight: "700", marginTop: "20px", marginBottom: "10px" }}>Pro Bio Design Tips:</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>
            <li>Use <b>Arrows (➤)</b> to point towards your website link.</li>
            <li>Use <b>Stars (✨)</b> to highlight key achievements.</li>
            <li>Keep a consistent theme (e.g., all white hearts or all geometric shapes).</li>
            <li>Don't over-crowd; use symbols as accents, not as the main text.</li>
          </ul>
        </div>

        {copied && <div className="copy-toast">Copied {copied}! 🚀</div>}
      </div>
    </ToolPage>
  );
}