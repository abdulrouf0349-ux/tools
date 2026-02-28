"use client";
import Link from "next/link";

export default function ToolCard({ tool, index }) {
  return (
    <Link href={tool.href} className={`fade-up stagger-${index + 1}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <style jsx>{`
        .tool-card {
          padding: 24px; /* Default desktop padding */
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 18px;
          cursor: pointer;
          transition: all .25s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Mobile specific adjustments */
        @media (max-width: 640px) {
          .tool-card {
            padding: 16px; /* Mobile par thodi kam padding */
            border-radius: 14px;
          }
          .icon-box {
            width: 44px !important;
            height: 44px !important;
            font-size: 20px !important;
            border-radius: 12px !important;
          }
          .tool-title {
            font-size: 16px !important;
            margin-bottom: 6px !important;
          }
          .tool-desc {
            font-size: 13px !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .search-tag {
             padding: 2px 8px !important;
             font-size: 10px !important;
          }
          .cta-text {
            font-size: 13px !important;
          }
        }

        .tool-card:hover {
          border-color: ${tool.color}88 !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 60px ${tool.color}18;
        }
        
        .tool-card:hover .glow {
          opacity: 1 !important;
        }
      `}</style>

      <div className="tool-card">
        {/* Glow bg */}
        <div className="glow" style={{
          position: "absolute", top: -40, right: -40, width: 160, height: 160,
          borderRadius: "50%", background: tool.color + "18", filter: "blur(40px)",
          opacity: 0, transition: "opacity .3s", pointerEvents: "none"
        }} />

        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div className="icon-box" style={{
            width: 56, height: 56, borderRadius: 16,
            background: tool.color + "18", border: `1px solid ${tool.color}33`,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26
          }}>
            {tool.icon}
          </div>
          <span className="search-tag" style={{
            background: "var(--bg3)", border: "1px solid var(--border)",
            fontSize: 11, color: "var(--muted)", padding: "4px 10px", borderRadius: 20, fontWeight: 600
          }}>
            {tool.searches}
          </span>
        </div>

        <h2 className="tool-title" style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 10, letterSpacing: "-.3px" }}>
          {tool.label}
        </h2>
        
        <p className="tool-desc" style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.65, marginBottom: 16, flexGrow: 1 }}>
          {tool.desc}
        </p>

        {/* Tags - Optimized for space */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          {tool.tags?.map(t => (
            <span key={t} style={{
              fontSize: 10, color: tool.color,
              background: tool.color + "15", border: `1px solid ${tool.color}30`,
              padding: "2px 8px", borderRadius: 99, fontWeight: 600, textTransform: "uppercase"
            }}>{t}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="cta-text" style={{ display: "flex", alignItems: "center", gap: 6, color: tool.color, fontWeight: 700, fontSize: 14 }}>
          <span>Use Tool</span>
          <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
        </div>
      </div>
    </Link>
  );
}