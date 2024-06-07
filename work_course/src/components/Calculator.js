import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import History from "./History";
import "./styles/Calculator.css";
import { evaluate, round } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);

  const onButtonClick = (btn) => {
    switch (btn) {
      case "AC":
        setInput("");
        setAnswer("");
        break;
      case "⌫":
        setInput((prev) => prev.slice(0, -1));
        setAnswer("");
        break;
      case "=":
        calculateAns();
        break;
      case "±":
        setInput((prev) => (prev.charAt(0) === "-" ? prev.slice(1) : `-${prev}`));
        setAnswer("");
        break;
      default:
        handleInput(btn);
    }
  };

  const handleInput = (val) => {
    if (answer === "Невозможные данные") return;
    if (val === "x²") val = "^2";
    else if (val === "x³") val = "^3";
    else if (val === "³√") val = "^(1/3)";
    else if (val === "log") val = "log(";

    setInput((prev) => (prev.length < 14 ? prev + val : prev));
    setAnswer("");
  };

  const calculateAns = () => {
    if (input === "") return;
    let finalExpression = input.replaceAll("x", "*").replaceAll("÷", "/").replaceAll("√", "sqrt");

    try {
      if (!checkBracketBalanced(finalExpression)) throw new Error("Есть лишние скобки");
      const result = evaluate(finalExpression);
      setAnswer(round(result, 3));
      setHistory((prev) => [
        ...prev,
        { expression: input, result: round(result, 3) },
      ]);
    } catch {
      setAnswer("Invalid Input!!");
    }
  };

  const checkBracketBalanced = (expr) => {
    const stack = [];
    for (let char of expr) {
      if (char === "(") stack.push(char);
      else if (char === ")" && stack.length) stack.pop();
      else if (char === ")") return false;
    }
    return stack.length === 0;
  };

  return (
      <div className="container">
        <div className="main">
          <Display input={input} answer={answer} />
          <Buttons onButtonClick={onButtonClick} />
          <History history={history} />
        </div>
      </div>
  );
}

export default Calculator;
