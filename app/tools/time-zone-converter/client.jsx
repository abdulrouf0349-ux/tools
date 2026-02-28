"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function TimeZoneClient() {
  const [time, setTime] = useState(new Date());
  const [selectedZone, setSelectedZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (zone) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: zone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(time);
    } catch (e) {
      return "Invalid Zone";
    }
  };

  const formatDate = (zone) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: zone,
        dateStyle: "full",
      }).format(time);
    } catch (e) {
      return "";
    }
  };

  const commonZones = [
    { name: "Local Time", zone: Intl.DateTimeFormat().resolvedOptions().timeZone, label: "YOU" },
    { name: "London", zone: "Europe/London", label: "GMT" },
    { name: "New York", zone: "America/New_York", label: "EST" },
    { name: "Dubai", zone: "Asia/Dubai", label: "GST" },
    { name: "Karachi", zone: "Asia/Karachi", label: "PKT" },
    { name: "Tokyo", zone: "Asia/Tokyo", label: "JST" },
  ];

  return (
    <ToolPage
      title="World Clock & Time Zone"
      icon="🌐"
      color="#6366f1"
      description="Track global time in real-time. Perfect for coordinating meetings, tracking deadlines, or checking in with family across the globe."
      currentHref="/tools/time-zone"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 35 }}>
        
        {/* Quick Glance Grid */}
        <section>
          <label style={{ fontSize: "12px", fontWeight: "900", color: "#6366f1", marginBottom: "15px", display: "block", textTransform: "uppercase" }}>
            Global Hubs
          </label>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
            gap: "15px" 
          }}>
            {commonZones.map((z, i) => (
              <div key={i} style={{ 
                padding: "20px", 
                background: "var(--bg2)", 
                borderRadius: "24px", 
                border: "1px solid var(--border)",
                textAlign: "left",
                transition: "transform 0.2s"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <span style={{ fontSize: "13px", fontWeight: "bold", color: "var(--text)" }}>{z.name}</span>
                  <span style={{ fontSize: "10px", background: "#6366f122", color: "#6366f1", padding: "2px 6px", borderRadius: "5px", fontWeight: "bold" }}>{z.label}</span>
                </div>
                <div style={{ fontSize: "22px", fontWeight: "900", color: "#6366f1", fontFamily: "'Fira Code', monospace", marginTop: "10px" }}>
                  {formatTime(z.zone)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hero Focus Card */}
        <section style={{ 
          padding: "50px 30px", 
          background: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)", 
          borderRadius: "32px", 
          textAlign: "center",
          color: "white",
          boxShadow: "0 20px 50px -15px rgba(99, 102, 241, 0.5)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Decorative Background Elements */}
          <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "150px", opacity: 0.1 }}>🌍</div>
          
          <label style={{ fontSize: "14px", fontWeight: "800", opacity: 0.7, textTransform: "uppercase", letterSpacing: "2px" }}>Focus Zone</label>
          <div style={{ fontSize: "64px", fontWeight: "900", fontFamily: "'Fira Code', monospace", margin: "10px 0", letterSpacing: "-2px" }}>
            {formatTime(selectedZone)}
          </div>
          <div style={{ fontSize: "18px", fontWeight: "500", opacity: 0.9 }}>{formatDate(selectedZone)}</div>
          
          <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
            <select 
              className="textarea" 
              value={selectedZone} 
              onChange={(e) => setSelectedZone(e.target.value)}
              style={{ 
                maxWidth: "320px", 
                background: "rgba(255,255,255,0.15)", 
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                fontWeight: "bold",
                backdropFilter: "blur(10px)",
                height: "auto",
                padding: "12px 20px"
              }}
            >
              <optgroup label="Popular" style={{ color: "black" }}>
                <option value="UTC">Universal Time (UTC)</option>
                <option value="America/Los_Angeles">Los Angeles (PST)</option>
                <option value="Europe/Paris">Paris (CET)</option>
                <option value="Asia/Singapore">Singapore (SGT)</option>
              </optgroup>
              <optgroup label="Global" style={{ color: "black" }}>
                <option value="America/Chicago">Chicago (CST)</option>
                <option value="Asia/Kolkata">Mumbai (IST)</option>
                <option value="Australia/Sydney">Sydney (AEST)</option>
                <option value="Asia/Shanghai">Beijing (CST)</option>
              </optgroup>
            </select>
          </div>
        </section>

        

        {/* Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          <div style={{ padding: "25px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h4 style={{ margin: "0 0 10px 0", color: "#6366f1", fontSize: "16px" }}>Auto-Detection</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Our tool automatically detects your local system time and zone for instant comparison.
            </p>
          </div>
          <div style={{ padding: "25px", background: "var(--bg2)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h4 style={{ margin: "0 0 10px 0", color: "#6366f1", fontSize: "16px" }}>Zero Latency</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Time synchronization happens in your browser, ensuring high precision with zero server lag.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}