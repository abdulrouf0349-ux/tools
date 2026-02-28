"use client";
import { useState, useMemo } from "react";
import ToolPage from "@/components/ToolPage";

// Unicode Maps for transformation
const MAPS = {
  bold: { a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳", A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉", K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓", U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙" },
  italic: { a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻", A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑", K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡" },
  gothic: { a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷", A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ" },
  script: { a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏", A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟", E: "𝐸", F: "𝐹", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥", K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯", U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵" },
  bubble: { a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ", A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ", K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ", U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ" }
};

export default function StylishClient() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(null);
  const [filter, setFilter] = useState("all");

  const transform = (str, mapName) => str.split('').map(c => MAPS[mapName][c] || c).join('');

  const styles = useMemo(() => {
    if (!input.trim()) return [];
    return [
      { id: 1, cat: "basic", label: "Bold Sans", val: transform(input, 'bold') },
      { id: 2, cat: "basic", label: "Italic Sans", val: transform(input, 'italic') },
      { id: 3, cat: "fancy", label: "Royal Script", val: transform(input, 'script') },
      { id: 4, cat: "fancy", label: "Dark Gothic", val: transform(input, 'gothic') },
      { id: 5, cat: "symbols", label: "Bubble Text", val: transform(input, 'bubble') },
      { id: 6, cat: "symbols", label: "Sparkle", val: `✨ ${input} ✨` },
      { id: 7, cat: "fun", label: "Loading...", val: `[|||||] ${input} [|||||]` },
      { id: 8, cat: "fun", label: "Glitch", val: `҂ ${input} ҂` },
      { id: 9, cat: "symbols", label: "Star Box", val: `★彡 ${input} 彡★` },
      { id: 10, cat: "fancy", label: "Aesthetic", val: `╰┈➤ ${input}` },
    ];
  }, [input]);

  const filteredStyles = filter === "all" ? styles : styles.filter(s => s.cat === filter);

  const handleCopy = (val, id) => {
    navigator.clipboard.writeText(val);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <ToolPage
      title="Stylish Text Generator"
      icon="✨"
      color="#ffd166"
      description="Type your name or bio and instantly get dozens of cool, fancy fonts. Copy and paste into Instagram, TikTok, or WhatsApp."
      currentHref="/tools/stylish-text"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Magic Input Box */}
        <section>
          <div style={{ position: "relative" }}>
            <textarea
              className="textarea"
              rows={4}
              placeholder="e.g. Dream Big, Work Hard"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ 
                fontSize: "22px", 
                padding: "30px", 
                borderRadius: "32px",
                background: "var(--bg3)",
                border: "2px solid #ffd16644",
                color: "var(--text)",
                textAlign: "center",
                lineHeight: "1.4",
                boxShadow: "0 15px 35px -10px rgba(255, 209, 102, 0.1)"
              }}
            />
            {input && (
              <button 
                onClick={() => setInput("")}
                style={{ position: "absolute", top: 15, right: 15, background: "var(--bg2)", border: "none", borderRadius: "50%", width: "30px", height: "30px", cursor: "pointer", color: "var(--muted)" }}
              >
                ✕
              </button>
            )}
          </div>
        </section>

        {/* Filter Navigation */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          {["all", "basic", "fancy", "symbols", "fun"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "10px 20px", borderRadius: "99px", border: "1px solid var(--border)",
                background: filter === f ? "#ffd166" : "var(--bg2)",
                color: filter === f ? "#1a0f00" : "var(--muted)",
                fontSize: "13px", fontWeight: "800", cursor: "pointer", textTransform: "uppercase",
                transition: "all 0.2s"
              }}
            >
              {f === "all" ? "✨ All Styles" : f}
            </button>
          ))}
        </div>

        {/* Dynamic Font Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "15px" }}>
          {filteredStyles.length > 0 ? (
            filteredStyles.map(style => (
              <div
                key={style.id}
                onClick={() => handleCopy(style.val, style.id)}
                style={{
                  background: "var(--bg2)",
                  padding: "20px",
                  borderRadius: "24px",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}
                className="font-card"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "10px", fontWeight: "900", color: "var(--muted)", textTransform: "uppercase" }}>
                    {style.label}
                  </span>
                  {copied === style.id && (
                    <span style={{ fontSize: "10px", color: "#22c55e", fontWeight: "900" }}>✓ COPIED</span>
                  )}
                </div>
                <div style={{ 
                  fontSize: "20px", 
                  color: copied === style.id ? "#ffd166" : "var(--text)",
                  wordBreak: "break-all"
                }}>
                  {style.val}
                </div>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "50px", color: "var(--muted)" }}>
              <div style={{ fontSize: "40px", marginBottom: "15px" }}>✍️</div>
              <p>Start typing above to see the magic happen!</p>
            </div>
          )}
        </div>

        

        {/* Feature List */}
        <section style={{ 
          padding: "30px", borderRadius: "32px", background: "var(--bg3)", 
          border: "1px dashed #ffd16666", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>📱</div>
            <h5 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>Device Ready</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>Works on iOS, Android, and Windows browsers.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>🛡️</div>
            <h5 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>Privacy Safe</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>No data is sent to servers. Everything happens on your device.</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>✨</div>
            <h5 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>Social Pro</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>Perfect for bio, captions, and direct messages.</p>
          </div>
        </section>

      </div>

      <style jsx>{`
        .font-card:hover {
          transform: translateY(-5px);
          border-color: #ffd166;
          box-shadow: 0 10px 20px -10px rgba(255, 209, 102, 0.3);
        }
      `}</style>
    </ToolPage>
  );
}