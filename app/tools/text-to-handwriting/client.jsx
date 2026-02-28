"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function TextToHandwritingClient() {
  const [text, setText] = useState("Assalam-o-Alaikum!\n\nDigital text ko haath se likha hua banayein. Line alignment ka masla solve ho gaya hai—aap size change karein, text lines ke upar hi rahega.\n\nHappy Writing!");
  const [font, setFont] = useState("'Dancing Script', cursive");
  const [fontSize, setFontSize] = useState(24);
  const [color, setColor] = useState("#1e3a8a");
  const [paperType, setPaperType] = useState("lined");
  const [downloading, setDownloading] = useState(false);
  
  const lineSpacing = fontSize * 1.5; 

  const fonts = [
    { name: "Royal Cursive", value: "'Dancing Script', cursive" },
    { name: "Modern Pen", value: "'Caveat', cursive" },
    { name: "Messy Scribble", value: "'Indie Flower', cursive" },
    { name: "Clean Journal", value: "'Shadows Into Light', cursive" },
    { name: "Architect Hand", value: "'Architects Daughter', cursive" },
    { name: "School Notes", value: "'Patrick Hand', cursive" },
    { name: "Classic Script", value: "'Great Vibes', cursive" },
  ];

  const handleDownload = async () => {
    setDownloading(true);
    const element = document.querySelector(".paper-canvas");
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: [0.3, 0.3],
        filename: 'handwritten-document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      alert("Download failed. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <ToolPage
      title="Handwriting Studio"
      icon="✍️"
      color="#06b6d4"
      description="Create realistic handwritten documents from digital text. Adjust fonts, ink colors, and paper styles for the perfect look."
      currentHref="/tools/text-to-handwriting"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Caveat&family=Dancing+Script&family=Great+Vibes&family=Indie+Flower&family=Patrick+Hand&family=Shadows+Into+Light&display=swap');
        
        .paper-canvas {
          background: #ffffff;
          background-image: ${paperType === 'lined' ? `linear-gradient(#e5e7eb 1px, transparent 1px)` : 'none'};
          background-size: 100% ${lineSpacing}px;
          line-height: ${lineSpacing}px !important;
          padding: ${lineSpacing}px 40px ${lineSpacing}px 70px !important;
          min-height: 842px; /* A4 Ratio */
          border: 1px solid #d1d5db;
          position: relative;
          color: ${color};
          font-family: ${font};
          font-size: ${fontSize}px;
          outline: none;
          white-space: pre-wrap;
          word-wrap: break-word;
          transition: all 0.2s;
        }

        .paper-canvas::before {
          content: "";
          position: absolute;
          left: 55px;
          top: 0;
          bottom: 0;
          width: 1.5px;
          background: #fca5a5;
          opacity: 0.6;
        }
      `}} />

      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Studio Controls */}
        <div style={{ 
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: 20, background: "var(--bg2)", padding: "30px", borderRadius: "32px", border: "1px solid var(--border)" 
        }}>
          <section>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#06b6d4", display: "block", marginBottom: "8px" }}>🖋️ CHOOSE PEN STYLE</label>
            <select className="textarea" value={font} onChange={(e) => setFont(e.target.value)} style={{ padding: "12px", height: "auto" }}>
              {fonts.map(f => <option key={f.value} value={f.value}>{f.name}</option>)}
            </select>
          </section>

          <section>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#06b6d4", display: "block", marginBottom: "8px" }}>📏 FONT SIZE: {fontSize}px</label>
            <input type="range" min="16" max="36" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} style={{ width: "100%", accentColor: "#06b6d4" }} />
          </section>

          <section>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#06b6d4", display: "block", marginBottom: "8px" }}>🎨 INK & PAPER</label>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <div style={{ display: "flex", gap: 8 }}>
                {["#1e3a8a", "#000000", "#dc2626"].map(c => (
                  <div key={c} onClick={() => setColor(c)} style={{ width: 28, height: 28, borderRadius: "50%", background: c, cursor: "pointer", border: color === c ? "3px solid #06b6d4" : "2px solid white", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }} />
                ))}
              </div>
              <div style={{ width: "1px", height: "20px", background: "var(--border)" }} />
              <button onClick={() => setPaperType(paperType === 'lined' ? 'blank' : 'lined')} style={{ fontSize: "11px", fontWeight: "bold", background: "var(--bg3)", border: "1px solid var(--border)", padding: "6px 12px", borderRadius: "8px" }}>
                {paperType === 'lined' ? "Lined" : "Blank"}
              </button>
            </div>
          </section>
        </div>

        {/* Live Preview Paper */}
        
        <div style={{ 
          background: "#9ca3af", 
          padding: "20px", 
          borderRadius: "12px", 
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.2)",
          overflowX: "auto"
        }}>
          <div 
            className="paper-canvas" 
            contentEditable 
            suppressContentEditableWarning
            onInput={(e) => setText(e.currentTarget.innerText)}
          >
            {text}
          </div>
        </div>

        {/* Download Action */}
        <div style={{ textAlign: "center" }}>
          <button 
            className="btn-primary" 
            onClick={handleDownload} 
            disabled={downloading}
            style={{ 
              padding: "18px 60px", 
              background: "#06b6d4", 
              fontSize: "16px",
              borderRadius: "50px", 
              fontWeight: "900",
              boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)"
            }}
          >
            {downloading ? "📥 GENERATING PDF..." : "DOWNLOAD HANDWRITTEN PDF"}
          </button>
          <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "15px" }}>
            Tip: For the best look, use a font size between <b>22px and 26px</b>.
          </p>
        </div>

      </div>
    </ToolPage>
  );
}