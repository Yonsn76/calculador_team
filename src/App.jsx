// src/App.jsx
import { Calculator } from "./componets/calculator";
import "./styles/AnimatedTitle.css";

function App() {
  return (
    <div className="App">
      <div className="animated-title">
        <span>C</span>
        <span>a</span>
        <span>l</span>
        <span>c</span>
        <span>u</span>
        <span>l</span>
        <span>a</span>
        <span>d</span>
        <span>o</span>
        <span>r</span>
        <span>a</span>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
