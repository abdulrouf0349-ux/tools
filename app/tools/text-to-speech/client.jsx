"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function TextToSpeechClient() {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");

  useEffect(() => {
    const synth = window.speechSynthesis;
    const updateVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    updateVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = updateVoices;
    }
  }, [selectedVoice]);

  const speak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (!text) {
      alert("Bhai, pehle kuch likho toh sahi!");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    
    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <ToolPage
      title="AI Text to Speech"
      icon="🔊"
      color="#10b981"
      description="Turn your written words into crystal-clear audio. Perfect for proofreading, language learning, or simply giving your eyes a rest."
      currentHref="/tools/text-to-speech"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Studio */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#10b981", textTransform: "uppercase" }}>Text Input</label>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>{text.length} characters</span>
          </div>
          <textarea 
            className="textarea" 
            rows="8"
            placeholder="Paste your script, article, or message here and let the AI read it for you..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              resize: "none", 
              fontSize: "18px", 
              padding: "25px", 
              borderRadius: "28px",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              lineHeight: "1.6"
            }}
          />
        </section>

        {/* Audio Tuning Dashboard */}
        <section style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "32px", 
          border: "1px solid var(--border)",
          display: "grid",
          gap: "25px"
        }}>
          <div>
            <label style={{ fontSize: "12px", fontWeight: "900", color: "#10b981", display: "block", marginBottom: "12px" }}>VOICE PROFILE</label>
            <select 
              className="textarea" 
              value={selectedVoice} 
              onChange={(e) => setSelectedVoice(e.target.value)}
              style={{ padding: "12px", height: "auto", fontSize: "14px" }}
            >
              {voices.map((v, i) => (
                <option key={i} value={v.name}>{v.name} ({v.lang})</option>
              ))}
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ fontSize: "11px", fontWeight: "bold" }}>SPEED</label>
                <span style={{ fontSize: "11px", color: "#10b981" }}>{rate}x</span>
              </div>
              <input 
                type="range" min="0.5" max="2" step="0.1" 
                value={rate} onChange={(e) => setRate(e.target.value)}
                style={{ width: "100%", accentColor: "#10b981" }}
              />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <label style={{ fontSize: "11px", fontWeight: "bold" }}>PITCH</label>
                <span style={{ fontSize: "11px", color: "#10b981" }}>{pitch}</span>
              </div>
              <input 
                type="range" min="0" max="2" step="0.1" 
                value={pitch} onChange={(e) => setPitch(e.target.value)}
                style={{ width: "100%", accentColor: "#10b981" }}
              />
            </div>
          </div>
        </section>

        {/* Playback Button */}
        <button 
          onClick={speak}
          className="btn-primary"
          style={{ 
            background: isSpeaking ? "#ef4444" : "#10b981",
            color: "white",
            height: "70px",
            borderRadius: "24px",
            fontSize: "18px",
            fontWeight: "900",
            boxShadow: isSpeaking ? "0 10px 30px rgba(239, 68, 68, 0.3)" : "0 10px 30px rgba(16, 185, 129, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            transition: "all 0.3s ease"
          }}
        >
          {isSpeaking ? (
            <>
              <span className="pulse">●</span> STOP PLAYBACK
            </>
          ) : (
            <>▶ START READING ALOUD</>
          )}
        </button>

        

        {/* Features Info */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 5px 0", color: "#10b981" }}>Multilingual</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>Supports all system-installed voices, covering dozens of global languages.</p>
          </div>
          <div style={{ padding: "20px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 5px 0", color: "#10b981" }}>Privacy First</h5>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>Audio is synthesized locally in your browser. Your text never leaves your device.</p>
          </div>
        </div>

      </div>

      <style jsx>{`
        .pulse {
          animation: pulse-animation 1.5s infinite;
          color: white;
        }
        @keyframes pulse-animation {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </ToolPage>
  );
}