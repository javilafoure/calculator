"use client";
import React, { useState } from "react";
import Buttons from "./components/Buttons.jsx";
import Display from "./components/display.jsx";

export default function Home() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [isResult, setIsResult] = useState(false);

  const handleButtonClick = (value) => {
    if (!isNaN(value) || value === ".") {
      setInput(isResult ? value : input + value);
      setIsResult(false);
    } else if (["+", "-", "x", "/"].includes(value)) {
      setPrevValue(input);
      setInput("");
      setOperator(value);
      setIsResult(false);
    } else if (value === "=") {
      if (prevValue !== null && input !== "") {
        const num1 = parseFloat(prevValue);
        const num2 = parseFloat(input);
        let result;

        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "x":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Error";
            break;
          default:
            return;
        }

        setInput(result.toString());
        setPrevValue(null);
        setOperator(null);
        setIsResult(true);
      }
    } else if (value === "AC") {
      setInput("");
      setPrevValue(null);
      setOperator(null);
      setIsResult(false);
    } else if (value === "C") {
      setInput("");
      setIsResult(false);
    }
  };

  return (
    <div className="page w-full h-full flex-col flex justify-center items-center">
      <h1 className="text-4xl font-bold mt-10">Esto es una calculadora</h1>
      <div className="body w-80 bg-slate-400 mt-10 rounded-2xl shadow-slate-400 shadow-md">
        <Display total={input} />
        <Buttons onClick={handleButtonClick} />
      </div>
    </div>
  );
}
