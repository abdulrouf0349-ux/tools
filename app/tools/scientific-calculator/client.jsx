"use client";
import { useState } from "react";
import ToolPage from "@/components/ToolPage";

export default function ScientificCalculatorProClient() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [memory, setMemory] = useState(0);

  const handleInput = (value) => {
    if (display === "0" && !isNaN(value)) setDisplay(value);
    else if (display === "Syntax Error" || display === "Error") setDisplay(value);
    else setDisplay(display + value);
  };

  const clear = () => {
    setDisplay("0");
    setExpression("");
  };

  const deleteLast = () => {
    if (display.length > 1) setDisplay(display.slice(0, -1));
    else setDisplay("0");
  };

  const calculate = () => {
    try {
      let calcStr = display
        .replace(/π/g, Math.PI)
        .replace(/e/g, Math.E)
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/asin\(/g, "Math.asin(")
        .replace(/acos\(/g, "Math.acos(")
        .replace(/atan\(/g, "Math.atan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/√\(/g, "Math.sqrt(")
        .replace(/\^/g, "**")
        .replace(/abs\(/g, "Math.abs(")
        .replace(/(\d+)!/g, (match, n) => {
           let res = 1;
           for(let i=1; i<=n; i++) res *= i;
           return res;
        });

      const result = eval(calcStr);
      setExpression(display + " =");
      // Formatting result to avoid long floating point tails
      const finalResult = Number.isFinite(result) 
        ? parseFloat(result.toFixed(10)).toString() 
        : "Error";
      setDisplay(finalResult);
    } catch (err) {
      setDisplay("Syntax Error");
    }
  };

  const btnStyle = (bg = "#1e293b", color = "#f8fafc", gridColumn = "auto") => ({
    padding: "15px 5px",
    fontSize: "14px",
    fontWeight: "800",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.05)",
    cursor: "pointer",
    background: bg,
    color: color,
    transition: "all 0.2s",
    gridColumn: gridColumn,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 0 rgba(0,0,0,0.2)"
  });

  return (
    <ToolPage
      title="Scientific Calculator Pro"
      icon="🚀"
      color="#0f172a"
      description="Advanced math solver for engineering, physics, and academic research. Support for trigonometry, logarithms, and memory functions."
      currentHref="/tools/scientific-calculator"
    >
      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        
        {/* Physical Body */}
        <div style={{ 
          background: "#0f172a", padding: "25px", borderRadius: "35px", 
          border: "1px solid #1e293b", boxShadow: "0 30px 60px -12px rgba(0,0,0,0.6)"
        }}>
          
          {/* Digital Display Area */}
          <div style={{ 
            background: "#020617", padding: "25px", borderRadius: "20px", 
            marginBottom: "25px", textAlign: "right", border: "1px solid #1e293b",
            boxShadow: "inset 0 4px 20px rgba(0,0,0,0.8)"
          }}>
            <div style={{ fontSize: "12px", color: "#475569", minHeight: "18px", fontFamily: "monospace", letterSpacing: "1px" }}>
              {expression}
            </div>
            <div style={{ 
              fontSize: "36px", color: "#38bdf8", fontFamily: "'Courier New', monospace", 
              overflowX: "auto", whiteSpace: "nowrap", margin: "10px 0", scrollbarWidth: "none" 
            }}>
              {display}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
              <span style={{ fontSize: "9px", color: "#1e293b", background: memory !== 0 ? "#10b981" : "#1e293b", padding: "2px 6px", borderRadius: "4px", color: "white" }}>
                M-STILL
              </span>
              <span style={{ fontSize: "10px", color: "#334155", fontWeight: "bold" }}>
                RAD
              </span>
            </div>
          </div>

          {/* Keypad Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
            
            {/* Action Row */}
            <button style={btnStyle("#334155", "#94a3b8")} onClick={() => { setMemory(parseFloat(display) || 0); setDisplay("0"); }}>MS</button>
            <button style={btnStyle("#334155", "#94a3b8")} onClick={() => setDisplay(memory.toString())}>MR</button>
            <button style={btnStyle("#334155", "#94a3b8")} onClick={() => setMemory(0)}>MC</button>
            <button style={btnStyle("#ef4444", "#fff")} onClick={deleteLast}>DEL</button>
            <button style={btnStyle("#ef4444", "#fff")} onClick={clear}>AC</button>

            {/* Scientific Row 1 */}
            <button style={btnStyle()} onClick={() => handleInput("sin(")}>sin</button>
            <button style={btnStyle()} onClick={() => handleInput("cos(")}>cos</button>
            <button style={btnStyle()} onClick={() => handleInput("tan(")}>tan</button>
            <button style={btnStyle("#1e293b", "#38bdf8")} onClick={() => handleInput("π")}>π</button>
            <button style={btnStyle("#1e293b", "#38bdf8")} onClick={() => handleInput("e")}>e</button>

            {/* Scientific Row 2 */}
            <button style={btnStyle()} onClick={() => handleInput("asin(")}>sin⁻¹</button>
            <button style={btnStyle()} onClick={() => handleInput("acos(")}>cos⁻¹</button>
            <button style={btnStyle()} onClick={() => handleInput("atan(")}>tan⁻¹</button>
            <button style={btnStyle("#1e293b", "#38bdf8")} onClick={() => handleInput("!")}>n!</button>
            <button style={btnStyle("#1e293b", "#38bdf8")} onClick={() => handleInput("^")}>xʸ</button>

            {/* Scientific Row 3 */}
            <button style={btnStyle()} onClick={() => handleInput("√(")}>√</button>
            <button style={btnStyle()} onClick={() => handleInput("log(")}>log</button>
            <button style={btnStyle()} onClick={() => handleInput("ln(")}>ln</button>
            <button style={btnStyle()} onClick={() => handleInput("(")}>(</button>
            <button style={btnStyle()} onClick={() => handleInput(")")}>)</button>

            {/* Numbers & Basics */}
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("7")}>7</button>
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("8")}>8</button>
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("9")}>9</button>
            <button style={btnStyle("#334155", "#38bdf8")} onClick={() => handleInput("/")}>÷</button>
            <button style={btnStyle("#334155", "#38bdf8")} onClick={() => handleInput("%")}>mod</button>

            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("4")}>4</button>
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("5")}>5</button>
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("6")}>6</button>
            <button style={btnStyle("#334155", "#38bdf8")} onClick={() => handleInput("*")}>×</button>
            <button style={btnStyle("#334155", "#38bdf8")} onClick={() => handleInput("abs(")}>|x|</button>

            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("1")}>1</button>
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("2")}>2</button>
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("3")}>3</button>
            <button style={btnStyle("#334155", "#38bdf8")} onClick={() => handleInput("-")}>−</button>
            <button 
              style={btnStyle("#10b981", "#fff", "span 1 / span 1")} 
              onClick={calculate}
            >
              EXE
            </button>

            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("0")}>0</button>
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput("00")}>00</button>
            <button style={btnStyle("#1e293b", "#fff")} onClick={() => handleInput(".")}>.</button>
            <button style={btnStyle("#334155", "#38bdf8")} onClick={() => handleInput("+")}>+</button>
            <button style={btnStyle("#0ea5e9", "#fff")} onClick={calculate}>=</button>
          </div>
        </div>

        {/* Documentation / Legend */}
        <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div style={{ padding: "20px", background: "var(--bg3)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#38bdf8" }}>Memory System</h5>
            <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>
              <b>MS</b> stores the current number.<br/>
              <b>MR</b> retrieves it back.<br/>
              <b>MC</b> wipes the memory.
            </div>
          </div>
          <div style={{ padding: "20px", background: "var(--bg3)", borderRadius: "24px", border: "1px solid var(--border)" }}>
            <h5 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#10b981" }}>Pro Tip</h5>
            <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>
              Factorials work like <code>5!</code>. Logarithms are base-10, while <b>ln</b> is natural log (base-e).
            </div>
          </div>
        </div>
      </div>
    </ToolPage>
  );
}