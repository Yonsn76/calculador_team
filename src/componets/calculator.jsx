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

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      setInput(evaluateExpression(input));
    } else {
      const lastChar = input[input.length - 1];
      const operators = ["/", "*", "-", "+"];
      if (operators.includes(value) && operators.includes(lastChar)) {
        return;
      }
      setInput((prev) => prev + value);
    }    
  };

  return (
    <div className="calculator-container">
      <ThemeToggle />
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {buttons.map((btn, idx) => (
            <Button key={idx} value={btn} onClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};
