"use client";
import { useState, useEffect, useRef } from "react";
import ToolPage from "@/components/ToolPage";

export default function SpeechToTextClient() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
    
    if (!SpeechRecognition) {
      setError("Your browser does not support Speech Recognition. Please try Chrome or Edge.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event) => {
      let currentTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setTranscript(currentTranscript);
    };

    recognitionRef.current.onerror = (event) => {
      if (event.error === 'not-allowed') {
        setError("Microphone access denied! Please enable mic permissions in your browser.");
      } else {
        setError("Speech Recognition Error: " + event.error);
      }
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };
  }, []);

  const toggleListening = () => {
    setError("");
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleCopy = () => {
    if (!transcript) return;
    navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="Speech to Text"
      icon="🎙️"
      color="#ef4444"
      description="Professional-grade voice dictation. Speak naturally and watch your words appear instantly on the screen."
      currentHref="/tools/speech-to-text"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Error Notification */}
        {error && (
          <div style={{ 
            padding: "18px 24px", background: "#fef2f2", color: "#ef4444", 
            borderRadius: "20px", border: "1px solid #fee2e2", fontSize: "14px", 
            fontWeight: "700", display: "flex", alignItems: "center", gap: "12px"
          }}>
            <span style={{ fontSize: "20px" }}>⚠️</span> {error}
          </div>
        )}

        {/* Live Visualizer & Control */}
        <div style={{ 
          display: "flex", flexDirection: "column", alignItems: "center", gap: 25,
          background: "var(--bg2)", padding: "50px 30px", borderRadius: "32px", 
          border: "1px solid var(--border)", position: "relative", overflow: "hidden"
        }}>
          {/* Pulsing Aura when listening */}
          {isListening && (
            <div className="pulse-aura" style={{
              position: "absolute", width: "120px", height: "120px", 
              borderRadius: "50%", background: "#ef444422", zIndex: 0
            }} />
          )}

          <button 
            onClick={toggleListening}
            className={isListening ? "active-mic" : ""}
            style={{
              width: "100px", height: "100px", borderRadius: "50%", border: "none",
              background: isListening ? "#ef4444" : "var(--bg3)",
              color: isListening ? "white" : "#ef4444",
              fontSize: "40px", cursor: "pointer", zIndex: 1,
              boxShadow: isListening ? "0 0 40px rgba(239, 68, 68, 0.4)" : "0 10px 20px rgba(0,0,0,0.1)",
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            }}
          >
            {isListening ? "■" : "🎙️"}
          </button>
          
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <h3 style={{ margin: "0 0 5px 0", fontSize: "18px", fontWeight: "900" }}>
              {isListening ? "ON AIR: LISTENING" : "START DICTATION"}
            </h3>
            <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)", fontWeight: "600" }}>
              {isListening ? "Your voice is being transcribed..." : "Click the mic to begin recording"}
            </p>
          </div>
        </div>

        {/* Transcript Area */}
        <div style={{ position: "relative" }}>
           <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
            <label style={{ fontSize: "12px", fontWeight: "900", textTransform: "uppercase", color: "var(--muted)" }}>
              Live Transcript
            </label>
            {transcript && (
              <button onClick={() => setTranscript("")} style={{ background: "none", border: "none", color: "#ef4444", fontSize: "11px", fontWeight: "800", cursor: "pointer" }}>
                CLEAR TEXT
              </button>
            )}
          </div>
          <textarea 
            className="textarea" 
            rows="10" 
            readOnly
            value={transcript}
            placeholder="Words will appear here as you speak..."
            style={{ 
              background: "var(--bg3)", 
              padding: "25px", 
              fontSize: "18px", 
              borderRadius: "28px",
              lineHeight: "1.7",
              border: "1px solid var(--border)",
              color: "var(--text)",
              boxShadow: "inset 0 4px 15px rgba(0,0,0,0.05)"
            }}
          ></textarea>
        </div>

        {/* Action Button */}
        <button 
          className="btn-primary" 
          onClick={handleCopy}
          disabled={!transcript}
          style={{ 
            height: "60px", background: copied ? "#22c55e" : "#ef4444", 
            color: "white", borderRadius: "20px", fontWeight: "900", fontSize: "15px"
          }}
        >
          {copied ? "✓ TRANSCRIPT COPIED" : "📋 COPY TRANSCRIPT"}
        </button>

        {/* Troubleshooting Tip */}
        <section style={{ 
          padding: "25px", borderRadius: "28px", background: "var(--bg2)", 
          border: "1px dashed var(--border)", display: "flex", gap: "20px", alignItems: "center"
        }}>
          <div style={{ fontSize: "32px" }}>💡</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "14px", fontWeight: "900" }}>Pro Tip for Accuracy</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              For the best results, use a headset and speak in a quiet room. You can also add punctuation by saying "period", "comma", or "new line".
            </p>
          </div>
        </section>

      </div>

      <style jsx>{`
        .active-mic {
          animation: scalePulse 1.5s infinite;
        }
        @keyframes scalePulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .pulse-aura {
          animation: auraExpand 1.5s infinite;
        }
        @keyframes auraExpand {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </ToolPage>
  );
}