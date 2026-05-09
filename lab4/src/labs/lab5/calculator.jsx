import { useState } from "react";
function Calculator() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const calculate = () => {
    try {
      setInput(eval(input));
    } catch {
      setInput("Error");
    }
  };
  const clear = () => {
    setInput("");
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "200px", height: "30px", textAlign: "right" }}
      />
      <br /> <br />
      <div>
        {[1, 2, 3].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        {[4, 5, 6].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        {[7, 8, 9].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={clear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}
export default Calculator;
