"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function CrontabGeneratorClient() {
  const [cron, setCron] = useState("* * * * *");
  const [command, setCommand] = useState("curl -s https://api.yara.com/backup");
  const [settings, setSettings] = useState({
    min: "*", hour: "*", dom: "*", mon: "*", dow: "*"
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const { min, hour, dom, mon, dow } = settings;
    setCron(`${min} ${hour} ${dom} ${mon} ${dow}`);
  }, [settings]);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${cron} ${command}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const updateField = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <ToolPage
      title="Crontab Generator"
      icon="⏰"
      color="#10b981"
      description="Easily generate cron job schedules for Linux servers. Simplify your server automation with visual scheduling."
      currentHref="/tools/crontab-generator"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Visual Selector Grid */}
        <div>
          <label className="label" style={{ marginBottom: 12, display: "block", fontWeight: 700 }}>Schedule Settings</label>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", 
            gap: 12, background: "var(--bg2)", padding: "20px", borderRadius: "20px", border: "1px solid var(--border)"
          }}>
            {[
              { label: "Minute", field: "min", hint: "0-59" },
              { label: "Hour", field: "hour", hint: "0-23" },
              { label: "Day (Month)", field: "dom", hint: "1-31" },
              { label: "Month", field: "mon", hint: "1-12" },
              { label: "Day (Week)", field: "dow", hint: "0-6" },
            ].map((item) => (
              <div key={item.field}>
                <label style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 800, textTransform: "uppercase", marginBottom: 6, display: "block" }}>{item.label}</label>
                <input 
                  className="input" 
                  value={settings[item.field]} 
                  placeholder={item.hint}
                  onChange={(e) => updateField(item.field, e.target.value)}
                  style={{ textAlign: "center", fontWeight: "bold", color: "#10b981", fontSize: "16px", background: "var(--bg1)", border: "1px solid var(--border)", borderRadius: "10px", width: "100%" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Command Input */}
        <div>
          <label className="label" style={{ fontWeight: 700 }}>Command to Execute</label>
          <input 
            className="input" 
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="e.g., php /var/www/html/artisan schedule:run"
            style={{ padding: "15px", borderRadius: "14px", background: "var(--bg2)", border: "1px solid var(--border)", width: "100%", color: "var(--text)" }}
          />
        </div>

        {/* Final Output Display */}
        <div style={{ position: "relative" }}>
          <label className="label" style={{ fontWeight: 700 }}>Final Crontab Entry</label>
          <div style={{ 
            padding: "24px", 
            background: "#0a2e24", 
            color: "#6ee7b7", 
            borderRadius: "18px",
            fontFamily: "'Fira Code', 'Courier New', monospace",
            fontSize: "16px",
            textAlign: "left",
            border: "2px solid #10b98144",
            boxShadow: "0 10px 30px rgba(16, 185, 129, 0.1)",
            wordBreak: "break-all",
            position: "relative",
            overflow: "hidden"
          }}>
            <span style={{ color: "#10b981", marginRight: "10px", opacity: 0.5 }}>$</span>
            {cron} {command}
            <div style={{ position: "absolute", top: 0, right: 0, padding: "4px 10px", background: "#10b981", color: "#fff", fontSize: "10px", fontWeight: "bold" }}>STDOUT</div>
          </div>
          <button 
            onClick={handleCopy}
            style={{
              marginTop: "15px", width: "100%", padding: "14px", borderRadius: "12px",
              background: copied ? "#22c55e" : "#10b981", color: "white", 
              border: "none", cursor: "pointer", fontWeight: "900", transition: "0.2s"
            }}
          >
            {copied ? "✓ Copied to Clipboard" : "Copy Crontab Command"}
          </button>
        </div>

        {/* Quick Presets */}
        <div style={{ background: "var(--bg3)", padding: 20, borderRadius: 20, border: "1px solid var(--border)" }}>
          <h4 style={{ margin: "0 0 15px 0", fontSize: 13, fontWeight: 800, color: "var(--muted)", textTransform: "uppercase" }}>🚀 Common Presets:</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { label: "Every Minute", s: {min:"*", hour:"*", dom:"*", mon:"*", dow:"*"} },
              { label: "Every Hour", s: {min:"0", hour:"*", dom:"*", mon:"*", dow:"*"} },
              { label: "Midnight Daily", s: {min:"0", hour:"0", dom:"*", mon:"*", dow:"*"} },
              { label: "Weekly (Sun)", s: {min:"0", hour:"0", dom:"*", mon:"*", dow:"0"} },
              { label: "Monthly (1st)", s: {min:"0", hour:"0", dom:"1", mon:"*", dow:"*"} },
            ].map(preset => (
              <button 
                key={preset.label}
                onClick={() => setSettings(preset.s)} 
                style={{ padding: "8px 14px", borderRadius: "10px", background: "var(--bg1)", border: "1px solid var(--border)", fontSize: "12px", cursor: "pointer", color: "var(--text)", fontWeight: 600 }}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Guide Section */}
        <div style={{ marginTop: 20, borderTop: "1px solid var(--border)", paddingTop: 30 }}>
          <h3 style={{ fontSize: 18, marginBottom: 15 }}>Understanding Crontab Syntax</h3>
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
            A crontab file contains instructions to the <code>cron</code> daemon of the form: "run this command at this time on this date". 
            Each line has five time-and-date fields, followed by a command.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 20 }}>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>
              <b style={{ color: "var(--text)" }}>* (Asterisk)</b><br/>
              Matches all values in the field. e.g., an asterisk in the minute field means "every minute".
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>
              <b style={{ color: "var(--text)" }}>, (Comma)</b><br/>
              Specifies a list of values. e.g., <code>1,3,5</code> in the hour field.
            </div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>
              <b style={{ color: "var(--text)" }}>- (Dash)</b><br/>
              Specifies a range of values. e.g., <code>1-5</code> in the day-of-week field (Mon-Fri).
            </div>
          </div>
        </div>
      </div>
    </ToolPage>
  );
}