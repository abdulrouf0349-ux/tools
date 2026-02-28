"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function OnlineNotepadClient() {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("System Ready");

  // Load saved note on startup (Client-side only)
  useEffect(() => {
    const savedNote = localStorage.getItem("toolkit_notepad_data");
    if (savedNote) {
      setNote(savedNote);
      setStatus("Last session restored");
      setTimeout(() => setStatus("System Ready"), 3000);
    }
  }, []);

  // Debounced Auto-save logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      localStorage.setItem("toolkit_notepad_data", note);
      if (note) {
        setStatus("All changes saved locally");
        setTimeout(() => setStatus("System Ready"), 2000);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [note]);

  const downloadNote = () => {
    const element = document.createElement("a");
    const file = new Blob([note], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `note-${new Date().toLocaleDateString()}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(note);
    const oldStatus = status;
    setStatus("📋 Copied to clipboard!");
    setTimeout(() => setStatus(oldStatus), 2000);
  };

  return (
    <ToolPage
      title="Online Notepad"
      icon="📝"
      color="#10b981"
      description="A distraction-free, secure online notepad. Your notes are stored locally in your browser, meaning they never touch our servers."
      currentHref="/tools/online-notepad"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
        
        {/* VIP Status & Info Bar */}
        <section style={{ 
          display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center",
          background: "var(--bg2)", padding: "15px 25px", borderRadius: "20px", border: "1px solid var(--border)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ 
              width: 10, height: 10, borderRadius: "50%", 
              background: status.includes("saved") || status.includes("Ready") ? "#10b981" : "#fbbf24",
              boxShadow: "0 0 10px rgba(16, 185, 129, 0.4)",
              transition: "0.3s"
            }} />
            <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--text)", letterSpacing: "0.5px" }}>
              {status.toUpperCase()}
            </span>
          </div>
          
          <div style={{ fontSize: "13px", color: "var(--muted)", fontWeight: "500" }}>
            <span style={{ margin: "0 10px" }}>Words: <b>{note.trim() ? note.trim().split(/\s+/).length : 0}</b></span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ margin: "0 10px" }}>Characters: <b>{note.length}</b></span>
          </div>
        </section>

        {/* The Notepad Editor */}
        <section style={{ position: "relative" }}>
          <textarea
            className="textarea"
            placeholder="Click here and start typing your ideas... everything is saved automatically!"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{ 
              minHeight: "500px", fontSize: "18px", lineHeight: "1.8", padding: "35px",
              borderRadius: "32px", background: "var(--bg2)", border: "1px solid var(--border)",
              boxShadow: "0 15px 40px -20px rgba(0,0,0,0.1)", resize: "vertical",
              fontFamily: "'Inter', sans-serif", outline: "none", color: "var(--text)"
            }}
          />
        </section>

        {/* Controls Grid */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 15 }}>
          <button onClick={copyToClipboard} className="btn-primary" style={{ background: "#10b981", padding: "18px" }}>
            COPY TO CLIPBOARD
          </button>
          
          <button onClick={downloadNote} className="btn-ghost" style={{ background: "var(--bg3)", border: "1px solid var(--border)", padding: "18px" }}>
            SAVE AS .TXT FILE
          </button>

          <button 
            onClick={() => { if(confirm("This will permanently delete your current note. Are you sure?")) setNote(""); }}
            className="btn-ghost" 
            style={{ border: "1px solid #ef444444", color: "#ef4444", padding: "18px" }}
          >
            CLEAR NOTEBOOK
          </button>
        </section>

        {/* Features & Why Us */}
        <section style={{ 
          padding: "40px", borderRadius: "35px", background: "var(--bg3)", border: "1px solid var(--border)",
          marginTop: "20px"
        }}>
          <h2 style={{ fontSize: "20px", fontWeight: "900", marginBottom: "25px", textAlign: "center" }}>Why use our Online Notepad?</h2>
          
          

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <div style={{ padding: "25px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "24px", marginBottom: "15px" }}>🛰️</div>
              <h4 style={{ fontWeight: "800", marginBottom: "10px" }}>Offline Access</h4>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
                Because we use LocalStorage, your notes are accessible even if you lose internet connection momentarily.
              </p>
            </div>
            <div style={{ padding: "25px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "24px", marginBottom: "15px" }}>🕵️</div>
              <h4 style={{ fontWeight: "800", marginBottom: "10px" }}>Zero Tracking</h4>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
                We don't have a database for your notes. Your thoughts are yours alone—stored only on your device.
              </p>
            </div>
            <div style={{ padding: "25px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "24px", marginBottom: "15px" }}>⚡</div>
              <h4 style={{ fontWeight: "800", marginBottom: "10px" }}>Lightning Fast</h4>
              <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
                No heavy features, no formatting bloat. Just pure, fast, and efficient text entry.
              </p>
            </div>
          </div>
        </section>

      </div>
    </ToolPage>
  );
}