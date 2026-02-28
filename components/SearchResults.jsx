"use client";

import { useState } from "react";

export default function SearchBox({ allTools }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const filtered = query.trim().length > 0
    ? allTools.filter(tool =>
        tool.label.toLowerCase().includes(query.toLowerCase()) ||
        tool.desc.toLowerCase().includes(query.toLowerCase()) ||
        (tool.tags && tool.tags.some(t => t.toLowerCase().includes(query.toLowerCase())))
      )
    : [];

  const highlight = (text) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part)
        ? <mark key={i} style={{ background: "#4fffb030", color: "#4fffb0", borderRadius: 3, padding: "0 2px" }}>{part}</mark>
        : part
    );
  };

  return (
    <div className="search-container">
      <style jsx>{`
        .search-container {
          position: relative;
          max-width: 640px;
          margin: 0 auto 40px;
          padding: 0 20px;
        }
        .search-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          background: ${focused ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"};
          border: 1px solid ${focused ? "#4fffb060" : "rgba(255,255,255,0.15)"};
          border-radius: 16px;
          padding: 14px 18px;
          transition: all 0.2s ease;
          box-shadow: ${focused ? "0 0 0 4px rgba(79, 255, 176, 0.1)" : "none"};
        }
        .results-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 20px;
          right: 20px;
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          overflow: hidden;
          zIndex: 1000;
          box-shadow: 0 20px 50px rgba(0,0,0,0.8);
          max-height: 400px;
          overflow-y: auto;
        }

        /* Mobile Adjustments */
        @media (max-width: 640px) {
          .search-container {
            margin-bottom: 30px;
            padding: 0 16px;
          }
          .search-bar {
            padding: 12px 14px;
            border-radius: 12px;
          }
          .results-dropdown {
            left: 10px;
            right: 10px;
            max-height: 60vh; /* Mobile par screen ke mutabiq height */
          }
          .result-item {
            padding: 10px !important;
          }
          .tool-icon-small {
            width: 32px !important;
            height: 32px !important;
            font-size: 14px !important;
          }
          .tag-hide-mobile {
            display: none !important; /* Mobile par dropdown mein tags chupa diye space ke liye */
          }
        }
      `}</style>

      {/* Search Input Box */}
      <div className="search-bar">
        <span style={{ fontSize: 18, opacity: 0.5 }}>🔍</span>
        <input
          type="text"
          placeholder="Search tools... (e.g. JSON, PDF)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "white",
            fontSize: "15px",
            width: "100%"
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "6px",
              color: "gray",
              cursor: "pointer",
              padding: "4px 8px",
              fontSize: "10px"
            }}
          >
            CLEAR
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {query.trim().length > 0 && (
        <div className="results-dropdown">
          {filtered.length === 0 ? (
            <div style={{ padding: "30px 20px", textAlign: "center", color: "gray", fontSize: 14 }}>
              No tools found for "<strong>{query}</strong>"
            </div>
          ) : (
            <>
              <div style={{ padding: "10px 15px", fontSize: 10, color: "gray", fontWeight: 800, textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                {filtered.length} Results Found
              </div>
              {filtered.map((tool) => (
                <a
                  key={tool.href}
                  href={tool.href}
                  className="result-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 15px",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <div className="tool-icon-small" style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: `${tool.color}15`, border: `1px solid ${tool.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0
                  }}>
                    {tool.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 2 }}>
                      {highlight(tool.label)}
                    </div>
                    <div style={{ fontSize: 12, color: "gray", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {highlight(tool.desc)}
                    </div>
                  </div>

                  <div className="tag-hide-mobile">
                    {tool.tags?.slice(0, 1).map(tag => (
                      <span key={tag} style={{
                        fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4,
                        background: `${tool.color}20`, color: tool.color, border: `1px solid ${tool.color}30`
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}