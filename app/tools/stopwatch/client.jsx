"use client";
import { useState, useRef } from "react";
import ToolPage from "@/components/ToolPage";

export default function StopwatchClient() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  const startStop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const addLap = () => {
    if (time > 0) {
      setLaps([{ id: laps.length + 1, time: formatTime(time) }, ...laps]);
    }
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return (
      minutes.toString().padStart(2, "0") + ":" +
      seconds.toString().padStart(2, "0") + "." +
      centiseconds.toString().padStart(2, "0")
    );
  };

  return (
    <ToolPage
      title="Online Stopwatch"
      icon="⏱️"
      color="#0ea5e9"
      description="Professional grade stopwatch for tracking laps, splits, and high-intensity tasks with millisecond precision."
      currentHref="/tools/stopwatch"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 35, alignItems: "center" }}>
        
        {/* Digital Chronometer Display */}
        <section style={{ width: "100%", position: "relative" }}>
          <div style={{ 
            background: "var(--bg2)", 
            padding: "60px 20px", 
            borderRadius: "48px", 
            textAlign: "center",
            border: "2px solid var(--border)",
            boxShadow: "0 20px 50px -15px rgba(14, 165, 233, 0.15)",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Ambient Background Pulse */}
            {isRunning && <div className="scanner-line" />}
            
            <div style={{ 
              fontSize: "clamp(48px, 10vw, 90px)", 
              fontWeight: "900", 
              fontFamily: "'Courier New', monospace", 
              color: "#0ea5e9",
              letterSpacing: "-3px",
              textShadow: "0 0 20px rgba(14, 165, 233, 0.3)"
            }}>
              {formatTime(time)}
            </div>
          </div>
        </section>

        {/* Tactical Controls */}
        <div style={{ display: "flex", gap: "15px", width: "100%" }}>
          <button 
            onClick={startStop}
            className="btn-primary"
            style={{ 
              flex: 2, 
              background: isRunning ? "#f43f5e" : "#0ea5e9", 
              fontSize: "16px", 
              fontWeight: "900",
              height: "65px",
              borderRadius: "20px",
              boxShadow: isRunning ? "0 10px 25px -5px rgba(244, 63, 94, 0.4)" : "0 10px 25px -5px rgba(14, 165, 233, 0.4)",
              letterSpacing: "1px"
            }}
          >
            {isRunning ? "PAUSE SESSION" : "START TIMER"}
          </button>
          
          <button 
            onClick={addLap}
            disabled={!isRunning}
            style={{ 
              flex: 1, 
              borderRadius: "20px", 
              background: "var(--bg3)", 
              border: "1px solid var(--border)",
              cursor: isRunning ? "pointer" : "not-allowed",
              opacity: isRunning ? 1 : 0.5,
              color: "var(--text)",
              fontWeight: "800",
              transition: "all 0.2s"
            }}
          >
            LAP
          </button>
          
          <button 
            onClick={reset}
            style={{ 
              flex: 1, 
              borderRadius: "20px", 
              background: "var(--bg2)", 
              border: "1px solid var(--border)",
              cursor: "pointer",
              color: "#64748b",
              fontWeight: "800"
            }}
          >
            RESET
          </button>
        </div>

        {/* Lap History Dashboard */}
        {laps.length > 0 && (
          <section style={{ 
            width: "100%", 
            background: "var(--bg2)", 
            borderRadius: "32px",
            border: "1px solid var(--border)",
            overflow: "hidden",
            animation: "slideUp 0.4s ease-out"
          }}>
            <div style={{ padding: "20px 25px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "900", color: "var(--muted)", margin: 0 }}>LAP HISTORY</h3>
              <span style={{ fontSize: "11px", background: "#0ea5e922", color: "#0ea5e9", padding: "4px 10px", borderRadius: "8px", fontWeight: "700" }}>
                {laps.length} LAPS RECORDED
              </span>
            </div>
            <div style={{ maxHeight: "250px", overflowY: "auto", padding: "10px" }}>
              <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
                <tbody>
                  {laps.map((lap, index) => (
                    <tr key={lap.id} style={{ background: "var(--bg3)", borderRadius: "12px" }}>
                      <td style={{ padding: "15px 20px", fontWeight: "800", borderRadius: "12px 0 0 12px", fontSize: "13px" }}>
                        <span style={{ opacity: 0.5, marginRight: "10px" }}>#{laps.length - index}</span>
                        Lap {lap.id}
                      </td>
                      <td style={{ 
                        padding: "15px 20px", 
                        textAlign: "right", 
                        fontFamily: "monospace", 
                        color: "#0ea5e9", 
                        fontWeight: "700",
                        fontSize: "16px",
                        borderRadius: "0 12px 12px 0"
                      }}>
                        {lap.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        

        {/* Performance Insight */}
        <section style={{ 
          padding: "25px", borderRadius: "32px", background: "var(--bg3)", 
          display: "flex", gap: "20px", alignItems: "center", border: "1px dashed var(--border)", width: "100%"
        }}>
          <div style={{ fontSize: "32px" }}>📈</div>
          <div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "15px", fontWeight: "900" }}>Track Your Progress</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              The Lap feature is essential for <b>Time Blocking</b>. Record how long each sub-task takes to identify bottlenecks in your workflow and improve your efficiency.
            </p>
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scanner-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0ea5e9, transparent);
          animation: scan 2s linear infinite;
          opacity: 0.3;
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
    </ToolPage>
  );
}