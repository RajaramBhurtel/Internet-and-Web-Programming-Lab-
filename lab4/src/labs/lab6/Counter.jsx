import { useState } from "react";
import "./index.css";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h1>Simple Counter</h1>
      <h2 className="count">{count}</h2>
      <div className="buttons">
        <button onClick={decrement} className="btn red">
          Decrement
        </button>
        <button onClick={reset} className="btn gray">
          Reset
        </button>
        <button onClick={increment} className="btn green">
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
