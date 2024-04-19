import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const operators = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const digits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (clac == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : ""}&nbsp; {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {digits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
