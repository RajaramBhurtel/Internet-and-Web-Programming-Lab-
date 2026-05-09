import React from "react";
import Parent from "./components/Parent";

function App() {
  const studentName = "Rajaram Bhurtel";

  return (
    <div>
      <h1>Props Drilling Example</h1>
      <Parent name={studentName} />
    </div>
  );
}

export default App;
