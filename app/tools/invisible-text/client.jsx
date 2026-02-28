"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function InvisibleTextClient() {
  const [copied, setCopied] = useState(false);
  // The invisible character (Unicode U+3164 - Hangul Filler)
  const invisibleChar = "ㅤ"; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(invisibleChar);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Invisible Text Generator"
      icon="👻"
      color="#64748b"
      description="Create invisible characters for social media profiles, gaming tags, and empty messaging apps effortlessly."
      currentHref="/tools/invisible-text"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 35 }}>
        
        {/* h2 SEO Header */}
        <section style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "10px" }}>
            Copy Invisible Blank Space
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "14px" }}>Perfect for WhatsApp, Discord, PUBG, and Instagram.</p>
        </section>

        {/* Main Interaction Area */}
        <div style={{ 
          width: "100%", background: "var(--bg2)", padding: "50px 20px", 
          borderRadius: "32px", textAlign: "center", border: "2px dashed var(--border)",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ 
            position: "absolute", top: "50%", left: "50%", 
            transform: "translate(-50%, -50%)", fontSize: "150px", 
            opacity: 0.04, pointerEvents: "none" 
          }}>👻</div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <button 
              onClick={copyToClipboard}
              className="btn-primary"
              style={{ 
                background: copied ? "#10b981" : "#64748b", 
                padding: "20px 50px", fontSize: "20px", fontWeight: "900",
                boxShadow: "0 15px 30px -10px rgba(100, 116, 139, 0.4)",
                borderRadius: "18px", transition: "0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              }}
            >
              {copied ? "✓ COPIED!" : "COPY INVISIBLE TEXT"}
            </button>
            <p style={{ marginTop: "20px", fontSize: "12px", opacity: 0.6 }}>
              {copied ? "Character is now on your clipboard." : "Click to copy the Unicode U+3164 character."}
            </p>
          </div>
        </div>

        {/* Use Cases Grid */}
        <section>
          <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "20px", textAlign: "center" }}>Popular Use Cases</h3>
          <div style={{ 
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20
          }}>
            {[
              { platform: "WhatsApp", usage: "Send messages without any visible text." },
              { platform: "Instagram", usage: "Create a clean, empty bio or name." },
              { platform: "Discord", usage: "Set an invisible nickname for your server." },
              { platform: "Gaming", usage: "Use it for hidden names in PUBG or Free Fire." }
            ].map((item, i) => (
              <div key={i} style={{ 
                padding: "25px", background: "var(--bg3)", borderRadius: "24px", 
                border: "1px solid var(--border)", textAlign: "center"
              }}>
                <div style={{ fontWeight: "900", fontSize: "15px", marginBottom: "8px", color: "#64748b" }}>{item.platform}</div>
                <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.5" }}>{item.usage}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Knowledge Section for SEO */}
        <section style={{ 
          padding: "35px", borderRadius: "32px", background: "var(--bg3)", 
          border: "1px solid var(--border)", marginTop: "10px"
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>The Science of Invisible Characters</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            This tool uses the <b>Hangul Filler (Unicode U+3164)</b> character. Unlike a standard spacebar stroke (U+0020), which many apps "trim" or ignore when sent alone, the Hangul Filler is treated as a "Letter" by most systems. This is why you can use it to bypass "name cannot be empty" validation rules.
          </p>
          
          <h3 style={{ fontSize: "17px", fontWeight: "800", marginBottom: "10px" }}>Is it safe to use?</h3>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", margin: 0 }}>
            Yes, it is perfectly safe. It is a standard part of the Unicode set. However, some platforms might occasionally update their systems to filter these out. If it stops working on one app, it usually still works on others!
          </p>
        </section>

      </div>
    </ToolPage>
  );
}