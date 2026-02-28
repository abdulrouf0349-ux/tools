"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function InstagramCaptionGenerator() {
  const [topic, setTopic] = useState("");
  const [mood, setMood] = useState("Cool");
  const [platform, setPlatform] = useState("Instagram");
  const [captions, setCaptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const moods = ["Cool", "Funny", "Professional", "Aesthetic", "Motivation", "Savage"];

  const generateCaptions = () => {
    setLoading(true);
    setTimeout(() => {
      const baseCaptions = {
        Cool: [
          `Stay focused and extra sparkly. ✨ #${topic.replace(/\s/g, "")}`,
          `Life is better when you're laughing. 😎`,
          `Just me doing me. 🚀`,
        ],
        Funny: [
          `I’m on a seafood diet. I see food and I eat it. 🍕`,
          `Friday, my second favorite F word. 😉`,
          `I followed my heart and it led me to the fridge.`,
        ],
        Professional: [
          `Consistency is the key to success. 💼 #Growth`,
          `Turning dreams into plans. 📈`,
          `Innovation distinguishes between a leader and a follower.`,
        ],
        Aesthetic: [
          `Collect moments, not things. ☁️`,
          `Soul over beauty. ✨`,
          `Sunsets and silhouettes. 🌅`,
        ],
        Motivation: [
          `Don't stop until you're proud. 🔥`,
          `Your only limit is your mind. 🚀`,
          `Dream big, work hard, stay humble.`,
        ],
        Savage: [
          `Proof that I can do it better than you. 💅`,
          `My back is not a voicemail, say it to my face. 🐍`,
          `Jealousy is a terrible disease. Get well soon. 👋`,
        ]
      };

      const selected = baseCaptions[mood] || baseCaptions["Cool"];
      const finalized = selected.map(cap => cap.includes("#") ? cap : `${cap} #${topic.replace(/\s/g, "")}`);
      
      setCaptions(finalized);
      setLoading(false);
    }, 800);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolPage
      title="AI Caption Generator"
      icon="✍️"
      color="#ff6b6b"
      description="Create trendy, viral captions for Instagram, TikTok & Facebook using our smart generator."
      currentHref="/tools/instagram-caption-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* h2 SEO Header */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px", color: "var(--text)" }}>
            Generate High-Engagement Social Media Captions
          </h2>
          
          <div style={{ background: "var(--bg2)", padding: 30, borderRadius: "28px", border: "1px solid var(--border)" }}>
            <label className="label" style={{ fontWeight: "800" }}>What is your post about?</label>
            <input 
              className="input" 
              placeholder="e.g. Vacation in Bali, Morning Coffee, Gym Workout..." 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              style={{ marginBottom: 25, borderRadius: "14px", padding: "15px" }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 15, marginBottom: 25 }}>
              <div>
                <label className="label">Select Mood</label>
                <select className="input" value={mood} onChange={(e) => setMood(e.target.value)} style={{ borderRadius: "12px", background: "var(--bg3)" }}>
                  {moods.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Target Platform</label>
                <select className="input" value={platform} onChange={(e) => setPlatform(e.target.value)} style={{ borderRadius: "12px", background: "var(--bg3)" }}>
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>Facebook</option>
                  <option>LinkedIn</option>
                </select>
              </div>
            </div>

            <button 
              className="btn-primary" 
              onClick={generateCaptions}
              disabled={!topic || loading}
              style={{ width: "100%", background: "#ff6b6b", color: "white", padding: "18px", borderRadius: "18px", fontWeight: "900", fontSize: "16px" }}
            >
              {loading ? "🪄 Crafting Viral Magic..." : "🚀 GENERATE CAPTIONS"}
            </button>
          </div>
        </section>

        {/* Results Section */}
        {captions.length > 0 && (
          <section style={{ display: "flex", flexDirection: "column", gap: 15, animation: "fadeUp 0.4s ease" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "800", opacity: 0.9 }}>Choose Your Favorite Caption:</h3>
            {captions.map((cap, index) => (
              <div 
                key={index} 
                style={{ 
                  background: "var(--bg3)", padding: "24px", borderRadius: "20px", 
                  border: "1px solid var(--border)", display: "flex",
                  justifyContent: "space-between", alignItems: "center", gap: 20
                }}
              >
                <p style={{ margin: 0, fontSize: "15px", color: "var(--text)", lineHeight: "1.6", fontWeight: "500" }}>{cap}</p>
                <button 
                  onClick={() => copyToClipboard(cap)}
                  style={{ 
                    background: "#ff6b6b", color: "white", border: "none", 
                    padding: "10px 20px", borderRadius: "12px", fontWeight: "800", 
                    cursor: "pointer", fontSize: "12px", transition: "0.2s"
                  }}
                >
                  COPY
                </button>
              </div>
            ))}
          </section>
        )}

        {/* SEO Knowledge Section */}
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "15px" }}>Mastering the Social Media Algorithm</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            A great photo gets attention, but a <b>great caption</b> drives engagement. The Instagram and TikTok algorithms track "dwell time"—the amount of time users spend reading your post. Using <b>Mood-based captions</b> helps in creating a connection with your audience.
          </p>
          
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "10px" }}>Why Mood Selection Matters?</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "15px" }}>
            1. <b>Aesthetic:</b> Perfect for high-quality visuals and scenery.<br/>
            2. <b>Savage:</b> Best for high-confidence selfies to spark comments.<br/>
            3. <b>Professional:</b> Ideal for LinkedIn growth and personal branding.
          </p>

          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "10px" }}>Hashtag Strategy</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", margin: 0 }}>
            Our AI automatically mixes your topic into a custom hashtag. For <b>maximum reach</b>, we recommend adding 3-5 broad hashtags alongside the niche ones generated here.
          </p>
        </section>

      </div>
    </ToolPage>
  );
}