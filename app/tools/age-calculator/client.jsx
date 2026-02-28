"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;
    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const diffTime = Math.abs(today - birth);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);

    setAge({ years, months, days, totalDays, totalWeeks });
  };

  return (
    <ToolPage
      title="Professional Age Calculator"
      icon="🎂"
      color="#f472b6"
      description="Find your chronological age and see exactly how many years, months, and days old you are with our free DOB calculator."
      currentHref="/tools/age-calculator"
    >
      <div className="calc-wrapper" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        
        {/* Input Section */}
        <div style={{ 
          background: "var(--bg2)", 
          padding: "clamp(20px, 5vw, 30px)", 
          borderRadius: "24px", 
          border: "1px solid var(--border)",
          textAlign: "center",
          width: "100%"
        }}>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "var(--muted)", marginBottom: "15px", textTransform: "uppercase" }}>
            Enter Your Date of Birth
          </label>
          <input 
            type="date" 
            className="input" 
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            style={{ width: "100%", maxWidth: "300px", margin: "0 auto", fontSize: "16px", textAlign: "center", cursor: "pointer", display: "block" }}
          />
          <button 
            className="btn-primary" 
            onClick={calculateAge}
            style={{ marginTop: "20px", background: "#f472b6", color: "white", fontWeight: "900", width: "100%", maxWidth: "300px", padding: "15px" }}
          >
            Calculate Age ✨
          </button>
        </div>

        {/* Result Display */}
        {age && (
          <div className="fade-in">
            <div style={{ background: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)", padding: "clamp(30px, 6vw, 45px) 15px", borderRadius: "24px", color: "white", textAlign: "center", marginBottom: "15px" }}>
              <div style={{ fontSize: "12px", opacity: 0.9, marginBottom: "8px", textTransform: "uppercase", fontWeight: "bold" }}>Your Exact Age</div>
              <div style={{ fontSize: "clamp(24px, 7vw, 36px)", fontWeight: "900", wordWrap: "break-word" }}>
                {age.years} Years, {age.months} Months, {age.days} Days
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-label">TOTAL WEEKS</div>
                <div className="stat-value">{age.totalWeeks.toLocaleString()}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">TOTAL DAYS</div>
                <div className="stat-value">{age.totalDays.toLocaleString()}</div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════
             🚀 SEO CONTENT SECTION (Visual & Keyword Rich)
        ══════════════════════════════════════════════════ */}
        <div style={{ marginTop: "40px", borderTop: "1px solid var(--border)", paddingTop: "30px", textAlign: "left" }}>
          <h2 style={{ fontSize: "20px", color: "var(--foreground)", marginBottom: "15px" }}>How to Use the Online Age Calculator?</h2>
          <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.6" }}>
            Our <strong>Free Age Calculator</strong> is designed to give you the most accurate results. Simply select your 
            birth date from the calendar and click "Calculate". Within a second, you will see your 
            <strong> exact age in years, months, and days</strong>.
          </p>

          <h3 style={{ fontSize: "18px", color: "var(--foreground)", marginTop: "20px", marginBottom: "10px" }}>Why use our Chronological Age Tool?</h3>
          <ul style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", paddingLeft: "20px" }}>
            <li><strong>100% Accuracy:</strong> We account for leap years and varying month lengths.</li>
            <li><strong>Deep Insights:</strong> Get your age broken down into total weeks and days.</li>
            <li><strong>Privacy First:</strong> Your birth data is processed locally and never stored.</li>
          </ul>
        </div>

      </div>

      <style jsx>{`
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .stat-card { padding: 20px 10px; background: var(--bg2); border: 1px solid var(--border); border-radius: 20px; text-align: center; }
        .stat-label { font-size: 10px; color: var(--muted); font-weight: bold; margin-bottom: 5px; }
        .stat-value { font-size: 18px; font-weight: 900; color: #f472b6; }
        .fade-in { animation: fadeInUp 0.5s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 500px) { .stats-grid { grid-template-columns: 1fr; } }
      `}</style>
    </ToolPage>
  );
}