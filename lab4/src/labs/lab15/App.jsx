import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>React Components Example</h1>

      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
