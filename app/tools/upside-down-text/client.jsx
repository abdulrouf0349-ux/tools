"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function UpsideDownTextClient() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const charMap = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
    'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
    'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
    'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': 'B', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ',
    'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ɾ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N',
    'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ',
    'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ',
    '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '0': '0', '.': '˙', ',': "'",
    "'": ',', '"': '„', '?': '¿', '!': '¡', '(': ')', ')': '(', '[': ']', ']': '[',
    '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾'
  };

  const flipText = (str) => {
    return str.split("").map(c => charMap[c] || c).reverse().join("");
  };

  const flipped = flipText(text);

  const copyToClipboard = () => {
    if (!flipped) return;
    navigator.clipboard.writeText(flipped);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Upside Down Text"
      icon="🙃"
      color="#f59e0b"
      description="Give your text a 180° twist. Perfect for stand-out social media captions, hidden messages, and creative usernames."
      currentHref="/tools/upside-down-text"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Zone */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#f59e0b", textTransform: "uppercase" }}>Original Message</label>
            <button onClick={() => setText("")} style={{ background: "none", border: "none", color: "#ef4444", fontSize: "11px", cursor: "pointer", fontWeight: "bold" }}>CLEAR</button>
          </div>
          <textarea 
            className="textarea" 
            rows="5"
            placeholder="Type anything here... (e.g., Surprise!)"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              fontSize: "18px", 
              borderRadius: "24px", 
              padding: "20px",
              background: "var(--bg2)",
              border: "2px solid var(--border)",
              transition: "border-color 0.3s"
            }}
          ></textarea>
        </section>

        {/* Dynamic Transition Icon */}
        <div style={{ 
          textAlign: "center", 
          fontSize: "24px", 
          color: "#f59e0b", 
          animation: "bounce 2s infinite",
          margin: "-10px 0" 
        }}>
          ↓
        </div>

        {/* Output Zone */}
        <section style={{ 
          background: "#1e293b", 
          padding: "35px 25px", 
          borderRadius: "32px", 
          border: "2px solid #f59e0b",
          boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Subtle Background Pattern */}
          <div style={{ position: "absolute", top: "10px", right: "10px", fontSize: "40px", opacity: 0.1, transform: "rotate(180deg)" }}>🙃</div>
          
          <label style={{ fontSize: "11px", fontWeight: "900", color: "#f59e0b", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "15px" }}>
            uʍop ǝpısdn ʇxǝʇ
          </label>
          
          <div style={{ 
            minHeight: "80px", 
            color: "white", 
            fontSize: "26px", 
            fontWeight: "500",
            wordBreak: "break-all",
            fontFamily: "'Courier New', monospace",
            lineHeight: "1.4"
          }}>
            {flipped || "ʇxǝʇ pǝddılɟ ɹnoʎ ǝǝs oʇ ǝdʎʇ"}
          </div>
          
          <button 
            onClick={copyToClipboard}
            className="btn-primary"
            style={{ 
              background: copied ? "#10b981" : "#f59e0b", 
              width: "100%",
              height: "60px",
              borderRadius: "18px",
              marginTop: "25px",
              fontWeight: "900",
              fontSize: "16px",
              color: "#1e293b",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
            }}
          >
            {copied ? "✓ COPIED TO CLIPBOARD" : "COPY FLIPPED TEXT"}
          </button>
        </section>

        {/* Usage Guide */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
          <div style={{ padding: "20px", background: "var(--bg3)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <span style={{ fontSize: "20px" }}>🤳</span>
            <h5 style={{ margin: "10px 0 5px 0", fontSize: "14px" }}>Social Media</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>Stand out in Instagram, TikTok, and Twitter feeds.</p>
          </div>
          <div style={{ padding: "20px", background: "var(--bg3)", borderRadius: "20px", border: "1px solid var(--border)" }}>
            <span style={{ fontSize: "20px" }}>🎮</span>
            <h5 style={{ margin: "10px 0 5px 0", fontSize: "14px" }}>Gaming</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>Create unique nicknames for Steam, Discord, or FPS games.</p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
    </ToolPage>
  );
}