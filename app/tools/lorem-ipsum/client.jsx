"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function LoremClient() {
  const [count, setCount] = useState(3);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const LOREM_POOL = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.",
    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
    "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis.",
    "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."
  ];

  const generate = () => {
    const shuffled = [...LOREM_POOL].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    setResult({ paragraphs: selected });
  };

  const copyAll = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.paragraphs.join("\n\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Lorem Ipsum Generator"
      icon="📄"
      color="#c084fc"
      description="Create professional placeholder text for your mockups and wireframes. Simple, fast, and purely client-side."
      currentHref="/tools/lorem-ipsum"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>

        {/* Configuration Card */}
        <section style={{ 
          background: "var(--bg2)", padding: "35px", borderRadius: "32px", 
          border: "1px solid var(--border)", boxShadow: "0 10px 30px -10px rgba(192, 132, 252, 0.1)" 
        }}>
          <div style={{ marginBottom: "25px", textAlign: "center" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "900", color: "#c084fc", textTransform: "uppercase", letterSpacing: "1px" }}>
              Paragraph Settings
            </h2>
            <div style={{ fontSize: "48px", fontWeight: "900", margin: "10px 0" }}>{count}</div>
          </div>

          <input
            type="range" min={1} max={10} value={count}
            onChange={e => setCount(+e.target.value)}
            style={{ width: "100%", accentColor: "#c084fc", cursor: "pointer", height: "8px" }}
          />
          
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)", marginTop: 15, fontWeight: "600" }}>
            <span>MIN: 1</span>
            <span>MAX: 10</span>
          </div>

          <button
            className="btn-primary"
            onClick={generate}
            style={{ 
              width: "100%", background: "#c084fc", color: "#1a0030", 
              marginTop: "30px", padding: "18px", borderRadius: "18px", 
              fontWeight: "900", fontSize: "16px", boxShadow: "0 10px 20px -5px rgba(192, 132, 252, 0.4)" 
            }}
          >
            GENERATE TEXT 🚀
          </button>
        </section>

        {/* Results Section */}
        {result && (
          <div style={{ animation: "fadeIn 0.5s ease" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "900" }}>Generated Output</h3>
              <button
                onClick={copyAll}
                style={{ 
                  color: copied ? "#22c55e" : "#c084fc",
                  background: copied ? "rgba(34, 197, 94, 0.1)" : "var(--bg3)",
                  padding: "10px 20px", borderRadius: "14px", border: "1px solid var(--border)",
                  cursor: "pointer", fontSize: "13px", fontWeight: "800", transition: "0.2s"
                }}
              >
                {copied ? "✓ COPIED" : "COPY ALL"}
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              {result.paragraphs.map((p, i) => (
                <div
                  key={i}
                  style={{ 
                    background: "var(--bg3)", border: "1px solid var(--border)", 
                    borderRadius: "24px", padding: "25px", position: "relative"
                  }}
                >
                  <p style={{ margin: 0, fontSize: "15px", color: "var(--text)", lineHeight: "1.8", textAlign: "justify" }}>
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEO Knowledge Section */}
        <section style={{ 
          padding: "40px", borderRadius: "35px", background: "var(--bg3)", border: "1px solid var(--border)" 
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>What is Lorem Ipsum?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s. It helps designers see how text will look in a layout without being distracted by readable content.
          </p>
          
          

          <h3 style={{ fontSize: "17px", fontWeight: "800", marginTop: "25px", marginBottom: "10px" }}>Why use a generator?</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "2", paddingLeft: "20px" }}>
            <li><b>Visual Balance:</b> Unlike repeating "Text here, text here", Lorem Ipsum has a normal distribution of letters.</li>
            <li><b>Focus:</b> Allows clients to focus on the <b>layout</b> and <b>visuals</b> rather than proofreading the content.</li>
            <li><b>Versatility:</b> Used in web design, graphic design, and publishing.</li>
          </ul>
        </section>

      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ToolPage>
  );
}