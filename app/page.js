"use client";
import { useState, useCallback } from "react";

// ─── Config ────────────────────────────────────────────────────────────────
const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// ─── Tool Definitions ───────────────────────────────────────────────────────
const TOOLS = [
  { id: "word-counter",        icon: "📝", label: "Word Counter",       color: "#6EE7B7", desc: "Count words, chars & reading time" },
  { id: "case-converter",      icon: "🔡", label: "Case Converter",     color: "#93C5FD", desc: "UPPER, lower, Title, camelCase & more" },
  { id: "password-generator",  icon: "🔐", label: "Password Generator", color: "#FCA5A5", desc: "Secure random passwords instantly" },
  { id: "unit-converter",      icon: "⚖️",  label: "Unit Converter",    color: "#FCD34D", desc: "Length, weight, temp, speed & area" },
  { id: "lorem-ipsum",         icon: "📄", label: "Lorem Ipsum",        color: "#C4B5FD", desc: "Generate placeholder text" },
  { id: "color-converter",     icon: "🎨", label: "Color Converter",    color: "#FB923C", desc: "HEX → RGB → HSL instantly" },
];

// ─── API Helper ─────────────────────────────────────────────────────────────
async function callAPI(endpoint, body) {
  const res = await fetch(`${API}/api/${endpoint}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

// ─── Individual Tool Components ─────────────────────────────────────────────

function WordCounter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const analyze = async () => setResult(await callAPI("word-counter", { text }));

  return (
    <div style={styles.toolPanel}>
      <textarea
        style={styles.textarea}
        placeholder="Paste or type your text here..."
        value={text}
        onChange={e => { setText(e.target.value); setResult(null); }}
        rows={8}
      />
      <button style={styles.btn} onClick={analyze}>Analyze Text</button>
      {result && (
        <div style={styles.statsGrid}>
          {[
            ["Words", result.words],
            ["Characters", result.characters],
            ["Chars (no space)", result.characters_no_space],
            ["Sentences", result.sentences],
            ["Paragraphs", result.paragraphs],
            ["Read Time", `${result.reading_time_minutes} min`],
          ].map(([k, v]) => (
            <div key={k} style={styles.statCard}>
              <div style={styles.statValue}>{v}</div>
              <div style={styles.statLabel}>{k}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CaseConverter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const cases = ["upper","lower","title","sentence","camel","snake","kebab"];

  return (
    <div style={styles.toolPanel}>
      <textarea style={styles.textarea} placeholder="Enter your text..." value={text} onChange={e => setText(e.target.value)} rows={5} />
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:12 }}>
        {cases.map(c => (
          <button key={c} style={{...styles.btn, padding:"8px 14px", fontSize:13}}
            onClick={async () => { const r = await callAPI("case-converter",{text,case:c}); setResult(r.result); }}>
            {c}
          </button>
        ))}
      </div>
      {result && (
        <div style={styles.resultBox}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <span style={{color:"#9CA3AF",fontSize:13}}>Result</span>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(result)}>Copy</button>
          </div>
          <div style={{whiteSpace:"pre-wrap",wordBreak:"break-all"}}>{result}</div>
        </div>
      )}
    </div>
  );
}

function PasswordGenerator() {
  const [opts, setOpts] = useState({ length:16, uppercase:true, lowercase:true, digits:true, symbols:true });
  const [result, setResult] = useState(null);
  const toggle = k => setOpts(o => ({ ...o, [k]: !o[k] }));

  return (
    <div style={styles.toolPanel}>
      <div style={{ marginBottom:16 }}>
        <label style={styles.label}>Length: {opts.length}</label>
        <input type="range" min={8} max={64} value={opts.length}
          onChange={e => setOpts(o => ({...o, length: +e.target.value}))}
          style={{ width:"100%", marginTop:8 }} />
      </div>
      <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:16 }}>
        {["uppercase","lowercase","digits","symbols"].map(k => (
          <label key={k} style={styles.checkLabel}>
            <input type="checkbox" checked={opts[k]} onChange={() => toggle(k)} style={{marginRight:6}} />
            {k.charAt(0).toUpperCase()+k.slice(1)}
          </label>
        ))}
      </div>
      <button style={styles.btn} onClick={async () => setResult(await callAPI("password-generator", opts))}>
        Generate Passwords
      </button>
      {result && (
        <div style={{marginTop:16}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
            <span style={{color:"#9CA3AF",fontSize:13}}>Strength:</span>
            <span style={{
              padding:"2px 10px", borderRadius:20, fontSize:12, fontWeight:700,
              background: result.strength==="Strong"?"#065F46": result.strength==="Medium"?"#92400E":"#7F1D1D",
              color: result.strength==="Strong"?"#6EE7B7": result.strength==="Medium"?"#FCD34D":"#FCA5A5"
            }}>{result.strength}</span>
          </div>
          {result.passwords?.map((p,i) => (
            <div key={i} style={{...styles.resultBox, marginBottom:8, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <code style={{fontSize:13, letterSpacing:1, flex:1, wordBreak:"break-all"}}>{p}</code>
              <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(p)}>Copy</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function UnitConverter() {
  const categories = {
    length: { units:["meter","km","cm","mm","mile","yard","foot","inch"] },
    weight: { units:["kg","gram","pound","ounce","ton"] },
    temperature: { units:["celsius","fahrenheit","kelvin"] },
    speed: { units:["mph","kph","mps","knot"] },
    area: { units:["sqm","sqkm","sqft","sqin","acre","hectare"] },
  };
  const [cat, setCat] = useState("length");
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("meter");
  const [to, setTo] = useState("km");
  const [result, setResult] = useState(null);

  const units = categories[cat].units;

  return (
    <div style={styles.toolPanel}>
      <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:16 }}>
        {Object.keys(categories).map(c => (
          <button key={c} onClick={() => { setCat(c); setFrom(categories[c].units[0]); setTo(categories[c].units[1]); setResult(null); }}
            style={{...styles.btn, padding:"6px 14px", fontSize:13, background: cat===c?"#6EE7B7":"#1F2937", color: cat===c?"#111827":"#E5E7EB"}}>
            {c}
          </button>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr", gap:12, alignItems:"end", marginBottom:16 }}>
        <div>
          <label style={styles.label}>From</label>
          <select style={styles.select} value={from} onChange={e => setFrom(e.target.value)}>
            {units.map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
        <div style={{paddingBottom:4,fontSize:20,color:"#9CA3AF"}}>⇄</div>
        <div>
          <label style={styles.label}>To</label>
          <select style={styles.select} value={to} onChange={e => setTo(e.target.value)}>
            {units.map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
      </div>
      <input style={styles.input} type="number" placeholder="Enter value..." value={value} onChange={e => setValue(e.target.value)} />
      <button style={{...styles.btn, marginTop:12}} onClick={async () => setResult(await callAPI("unit-converter",{value:+value,from_unit:from,to_unit:to,category:cat}))}>
        Convert
      </button>
      {result && !result.error && (
        <div style={{...styles.resultBox, textAlign:"center", marginTop:16}}>
          <div style={{fontSize:28, fontWeight:800, color:"#6EE7B7"}}>{result.to}</div>
          <div style={{color:"#9CA3AF", marginTop:4, fontSize:14}}>{result.from} = {result.to}</div>
        </div>
      )}
    </div>
  );
}

function LoremIpsum() {
  const [count, setCount] = useState(3);
  const [result, setResult] = useState(null);

  return (
    <div style={styles.toolPanel}>
      <label style={styles.label}>Number of Paragraphs: {count}</label>
      <input type="range" min={1} max={10} value={count} onChange={e => setCount(+e.target.value)} style={{width:"100%",margin:"10px 0 16px"}} />
      <button style={styles.btn} onClick={async () => setResult(await callAPI("lorem-ipsum",{count}))}>Generate</button>
      {result && (
        <div style={{marginTop:16}}>
          <div style={{display:"flex",justifyContent:"flex-end",marginBottom:8}}>
            <button style={styles.copyBtn} onClick={() => navigator.clipboard.writeText(result.paragraphs.join('\n\n'))}>Copy All</button>
          </div>
          {result.paragraphs?.map((p,i) => (
            <div key={i} style={{...styles.resultBox, marginBottom:8, lineHeight:1.7, color:"#D1D5DB"}}>{p}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function ColorConverter() {
  const [hex, setHex] = useState("#3B82F6");
  const [result, setResult] = useState(null);

  return (
    <div style={styles.toolPanel}>
      <div style={{ display:"flex", gap:12, alignItems:"center", marginBottom:16 }}>
        <input type="color" value={hex} onChange={e => setHex(e.target.value)} style={{width:60, height:60, border:"none", borderRadius:8, cursor:"pointer", background:"none"}} />
        <input style={{...styles.input, marginBottom:0, fontFamily:"monospace", flex:1}} value={hex}
          onChange={e => setHex(e.target.value)} placeholder="#3B82F6" />
      </div>
      <button style={styles.btn} onClick={async () => setResult(await callAPI("color-converter",{hex}))}>Convert</button>
      {result && !result.error && (
        <div style={{marginTop:16}}>
          <div style={{width:"100%", height:80, borderRadius:12, background:result.hex, marginBottom:16, border:"1px solid #374151"}} />
          <div style={styles.statsGrid}>
            {[["HEX", result.hex], ["RGB", result.rgb], ["HSL", result.hsl]].map(([k,v]) => (
              <div key={k} style={{...styles.statCard, cursor:"pointer"}} onClick={() => navigator.clipboard.writeText(v)}>
                <div style={{...styles.statValue, fontSize:14}}>{v}</div>
                <div style={styles.statLabel}>{k} (click to copy)</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const TOOL_COMPONENTS = {
  "word-counter": WordCounter,
  "case-converter": CaseConverter,
  "password-generator": PasswordGenerator,
  "unit-converter": UnitConverter,
  "lorem-ipsum": LoremIpsum,
  "color-converter": ColorConverter,
};

// ─── Main App ────────────────────────────────────────────────────────────────
export default function ToolKitPro() {
  const [activeTool, setActiveTool] = useState(null);
  const ActiveComponent = activeTool ? TOOL_COMPONENTS[activeTool.id] : null;

  return (
    <div style={styles.page}>
      {/* BG decoration */}
      <div style={styles.bgBlob1} />
      <div style={styles.bgBlob2} />

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo} onClick={() => setActiveTool(null)}>
          <span style={styles.logoIcon}>⚡</span>
          <span style={styles.logoText}>ToolKit <span style={{color:"#6EE7B7"}}>Pro</span></span>
        </div>
        <div style={styles.headerRight}>
          <span style={styles.badge}>Free Forever</span>
          <span style={styles.badge}>No Signup</span>
        </div>
      </header>

      {/* Hero */}
      {!activeTool && (
        <section style={styles.hero}>
          <div style={styles.heroTag}>🌍 Trusted by developers worldwide</div>
          <h1 style={styles.heroTitle}>
            Every Tool<br />
            <span style={{color:"#6EE7B7"}}>You'll Ever Need</span>
          </h1>
          <p style={styles.heroSub}>
            Free online tools — no login, no ads, no limits. Just results.
          </p>
        </section>
      )}

      {/* Breadcrumb when tool is open */}
      {activeTool && (
        <div style={styles.breadcrumb}>
          <button style={styles.backBtn} onClick={() => setActiveTool(null)}>← All Tools</button>
          <span style={{color:"#9CA3AF"}}>/</span>
          <span style={{color:"#E5E7EB"}}>{activeTool.icon} {activeTool.label}</span>
        </div>
      )}

      {/* Tool Grid */}
      {!activeTool && (
        <section style={styles.grid}>
          {TOOLS.map(tool => (
            <div key={tool.id} style={styles.card} onClick={() => setActiveTool(tool)}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = tool.color; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#1F2937"; }}>
              <div style={{...styles.cardIcon, background: tool.color+"22", color: tool.color}}>{tool.icon}</div>
              <div style={styles.cardTitle}>{tool.label}</div>
              <div style={styles.cardDesc}>{tool.desc}</div>
              <div style={{...styles.cardCta, color: tool.color}}>Use Tool →</div>
            </div>
          ))}
        </section>
      )}

      {/* Active Tool */}
      {activeTool && ActiveComponent && (
        <section style={styles.toolSection}>
          <h2 style={styles.toolTitle}>{activeTool.icon} {activeTool.label}</h2>
          <p style={{color:"#9CA3AF", marginBottom:24}}>{activeTool.desc}</p>
          <ActiveComponent />
        </section>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={{margin:0, color:"#4B5563"}}>
          ⚡ ToolKit Pro — Free tools, forever. Built with Next.js + Django.
        </p>
      </footer>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = {
  page: { minHeight:"100vh", background:"#030712", color:"#E5E7EB", fontFamily:"'Syne', 'Space Grotesk', system-ui, sans-serif", overflowX:"hidden", position:"relative" },
  bgBlob1: { position:"fixed", top:-200, right:-200, width:600, height:600, background:"radial-gradient(circle, #064E3B33 0%, transparent 70%)", pointerEvents:"none", zIndex:0 },
  bgBlob2: { position:"fixed", bottom:-200, left:-200, width:500, height:500, background:"radial-gradient(circle, #1E3A5F33 0%, transparent 70%)", pointerEvents:"none", zIndex:0 },
  header: { display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 40px", borderBottom:"1px solid #111827", position:"relative", zIndex:10 },
  logo: { display:"flex", alignItems:"center", gap:10, cursor:"pointer" },
  logoIcon: { fontSize:24 },
  logoText: { fontSize:22, fontWeight:800, letterSpacing:-0.5 },
  headerRight: { display:"flex", gap:8 },
  badge: { background:"#111827", border:"1px solid #1F2937", padding:"4px 12px", borderRadius:20, fontSize:12, color:"#6B7280" },
  hero: { textAlign:"center", padding:"80px 24px 40px", position:"relative", zIndex:1 },
  heroTag: { display:"inline-block", background:"#064E3B33", border:"1px solid #065F46", color:"#6EE7B7", padding:"6px 16px", borderRadius:20, fontSize:13, marginBottom:24 },
  heroTitle: { fontSize:"clamp(36px,6vw,72px)", fontWeight:900, lineHeight:1.1, margin:"0 0 20px", letterSpacing:-2 },
  heroSub: { fontSize:18, color:"#9CA3AF", maxWidth:480, margin:"0 auto" },
  grid: { display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:20, padding:"40px", maxWidth:1200, margin:"0 auto", position:"relative", zIndex:1 },
  card: { background:"#0D1117", border:"1px solid #1F2937", borderRadius:16, padding:28, cursor:"pointer", transition:"all 0.25s ease" },
  cardIcon: { width:52, height:52, borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, marginBottom:16 },
  cardTitle: { fontSize:18, fontWeight:700, marginBottom:8 },
  cardDesc: { fontSize:14, color:"#6B7280", lineHeight:1.6, marginBottom:16 },
  cardCta: { fontSize:13, fontWeight:600 },
  breadcrumb: { display:"flex", alignItems:"center", gap:12, padding:"16px 40px", borderBottom:"1px solid #111827", position:"relative", zIndex:1 },
  backBtn: { background:"none", border:"1px solid #1F2937", color:"#9CA3AF", padding:"6px 14px", borderRadius:8, cursor:"pointer", fontSize:13 },
  toolSection: { maxWidth:760, margin:"0 auto", padding:"40px 24px", position:"relative", zIndex:1 },
  toolTitle: { fontSize:28, fontWeight:800, marginBottom:8, letterSpacing:-0.5 },
  toolPanel: { background:"#0D1117", border:"1px solid #1F2937", borderRadius:16, padding:28 },
  textarea: { width:"100%", minHeight:140, background:"#111827", border:"1px solid #1F2937", borderRadius:10, padding:14, color:"#E5E7EB", fontSize:14, fontFamily:"inherit", resize:"vertical", outline:"none", boxSizing:"border-box" },
  input: { width:"100%", background:"#111827", border:"1px solid #1F2937", borderRadius:10, padding:"12px 14px", color:"#E5E7EB", fontSize:14, outline:"none", boxSizing:"border-box", marginBottom:8 },
  select: { width:"100%", background:"#111827", border:"1px solid #1F2937", borderRadius:10, padding:"12px 14px", color:"#E5E7EB", fontSize:14, outline:"none" },
  btn: { background:"#6EE7B7", color:"#064E3B", padding:"12px 24px", borderRadius:10, border:"none", cursor:"pointer", fontWeight:700, fontSize:15, fontFamily:"inherit" },
  copyBtn: { background:"#1F2937", color:"#9CA3AF", padding:"6px 14px", borderRadius:8, border:"1px solid #374151", cursor:"pointer", fontSize:12, fontFamily:"inherit" },
  statsGrid: { display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))", gap:12, marginTop:16 },
  statCard: { background:"#111827", border:"1px solid #1F2937", borderRadius:10, padding:16, textAlign:"center" },
  statValue: { fontSize:22, fontWeight:800, color:"#6EE7B7" },
  statLabel: { fontSize:12, color:"#6B7280", marginTop:4 },
  resultBox: { background:"#111827", border:"1px solid #1F2937", borderRadius:10, padding:16, marginTop:16 },
  label: { fontSize:13, color:"#9CA3AF", fontWeight:600 },
  checkLabel: { display:"flex", alignItems:"center", fontSize:14, color:"#D1D5DB", cursor:"pointer" },
  footer: { textAlign:"center", padding:"40px 24px", borderTop:"1px solid #111827", marginTop:60, position:"relative", zIndex:1 },
};