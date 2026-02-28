"use client";
import { useState, useEffect } from "react";
import ToolPage from "@/components/ToolPage";

export default function DateDiffClient() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState("");
  const [diff, setDiff] = useState(null);

  const calculateDiff = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Logic for absolute difference
    const timeDiff = Math.abs(end - start);
    const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDaysAfterWeeks = totalDays % 7;

    // Years, Months, Days Detailed Breakdown
    let d1 = new Date(startDate);
    let d2 = new Date(endDate);
    if (d1 > d2) [d1, d2] = [d2, d1]; // Ensure d1 is always earlier

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setDiff({ years, months, days, totalDays, totalWeeks, remainingDaysAfterWeeks });
  };

  useEffect(() => {
    if (startDate && endDate) calculateDiff();
  }, [startDate, endDate]);

  return (
    <ToolPage
      title="Date Difference Calculator"
      icon="📅"
      color="#0ea5e9"
      description="Find the precise duration between two dates. Ideal for tracking milestones, project timelines, or calculating exact age."
      currentHref="/tools/date-diff"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
        
        {/* Input Dashboard */}
        <div style={{ 
          background: "var(--bg2)", 
          padding: "30px", 
          borderRadius: "28px", 
          border: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 25,
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
        }}>
          <div>
            <label className="label" style={{ fontWeight: 700, marginBottom: 12, display: "block" }}>Start Date</label>
            <input 
              type="date" className="input" 
              value={startDate} onChange={(e) => setStartDate(e.target.value)}
              style={{ colorScheme: "dark", fontSize: "16px", padding: "12px", borderRadius: "14px", width: "100%" }}
            />
          </div>
          <div>
            <label className="label" style={{ fontWeight: 700, marginBottom: 12, display: "block" }}>End Date</label>
            <input 
              type="date" className="input" 
              value={endDate} onChange={(e) => setEndDate(e.target.value)}
              style={{ colorScheme: "dark", fontSize: "16px", padding: "12px", borderRadius: "14px", width: "100%" }}
            />
          </div>
        </div>

        {/* Results Visualization */}
        {diff ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 25, animation: "fadeIn 0.5s ease" }}>
            
            {/* Main Grid: Y/M/D */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
              gap: 15 
            }}>
              {[
                { label: "YEARS", val: diff.years },
                { label: "MONTHS", val: diff.months },
                { label: "DAYS", val: diff.days }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  padding: "25px 15px", 
                  background: "rgba(14, 165, 233, 0.08)", 
                  borderRadius: "24px", 
                  border: "2px solid #0ea5e9", 
                  textAlign: "center",
                  boxShadow: "0 8px 20px -10px rgba(14, 165, 233, 0.3)"
                }}>
                  <div style={{ fontSize: "11px", fontWeight: "900", color: "#0ea5e9", letterSpacing: "1px", marginBottom: 8 }}>{item.label}</div>
                  <div style={{ fontSize: "36px", fontWeight: "900", color: "var(--text)" }}>{item.val}</div>
                </div>
              ))}
            </div>

            {/* Total Summary Breakdown */}
            <div style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 15
            }}>
              <div style={{ 
                padding: "20px", background: "var(--bg3)", borderRadius: "20px", 
                border: "1px solid var(--border)", textAlign: "center" 
              }}>
                <div style={{ fontSize: "12px", color: "var(--muted)", marginBottom: 5 }}>TOTAL DAYS</div>
                <div style={{ fontSize: "20px", fontWeight: "800" }}>{diff.totalDays.toLocaleString()}</div>
              </div>
              <div style={{ 
                padding: "20px", background: "var(--bg3)", borderRadius: "20px", 
                border: "1px solid var(--border)", textAlign: "center" 
              }}>
                <div style={{ fontSize: "12px", color: "var(--muted)", marginBottom: 5 }}>WEEKS & DAYS</div>
                <div style={{ fontSize: "20px", fontWeight: "800" }}>
                  {diff.totalWeeks}w {diff.remainingDaysAfterWeeks}d
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ 
            padding: "60px 20px", textAlign: "center", border: "2px dashed var(--border)", 
            borderRadius: "32px", color: "var(--muted)", background: "var(--bg1)" 
          }}>
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>⏳</div>
            <p style={{ margin: 0, fontWeight: "600" }}>Pick two dates to calculate the span!</p>
          </div>
        )}

        {/* Planning Logic Card */}
        
        <div style={{ 
          padding: "25px", borderRadius: "24px", background: "var(--bg3)", 
          border: "1px solid var(--border)", display: "flex", gap: 20, alignItems: "flex-start"
        }}>
          <div style={{ 
            fontSize: "24px", background: "#0ea5e9", width: "45px", height: "45px", 
            display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", flexShrink: 0 
          }}>🗓️</div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: "800" }}>How is this calculated?</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>
              Our logic uses the <b>Gregorian Calendar</b> standard. It accounts for varying month lengths (28, 30, or 31 days) and leap years to ensure that your years, months, and days breakdown is 100% accurate relative to the calendar cycle.
            </p>
          </div>
        </div>

      </div>
    </ToolPage>
  );
}