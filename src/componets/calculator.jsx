// src/components/Calculator.jsx
import { useState } from "react";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { evaluateExpression } from "../logic/CalculatorLogic";
import "../styles/Calculator.css";

const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", "C", "=", "+"
];

export const Calculator = () => {
  const [input, setInput] = useState("");
  
  // Determine display class based on input length
  const getDisplayClass = () => {
    if (input.length > 15) return 'length-xl';
    if (input.length > 10) return 'length-lg';
    if (input.length > 8) return 'length-md';
    return '';
  };

  const handleClick = (value) => {
    const operators = ["/", "*", "-", "+"];
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      setInput(evaluateExpression(input));
    } else {
      const lastChar = input[input.length - 1];
      if (operators.includes(value) && operators.includes(lastChar)) {
        
        if (input === "" && operators.includes(value)) {
          return; 
        }
        
        setInput((prev) => prev.slice(0, -1) + value);
      } else {
        
        setInput((prev) => prev + value);
      }
      
    }    
  };

  return (
    <div className="calculator-container">
      <ThemeToggle />
      <div className="calculator">
        <div className={`display ${getDisplayClass()}`}>
          {input || "0"}
        </div>
        <div className="buttons">
          {buttons.map((btn, idx) => (
            <Button key={idx} value={btn} onClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};
