import React, { useState } from "react";
import Keyboard from "./Keyboard.js";
import ResultBox from "./ResultBox.js";

const Calculator = (props) => {
  const [formula, setFormula] = useState("");
  const [lastKeyPressed, setLastKeyPressed] = useState("");
  const handleClick = (event) => {
    const newKeyPressed = event.target.value;
    let newFormula;
    if (lastKeyPressed === "" || !isNaN(lastKeyPressed)) {
      newFormula = formula + newKeyPressed;
    } else if (!isNaN(lastKeyPressed) && newKeyPressed === "=") {
      alert(formula);
      newFormula = eval(formula);
    } else if (isNaN(lastKeyPressed) && !isNaN(newKeyPressed)) {
      newFormula = formula + newKeyPressed;
    }
    setFormula(newFormula);
    setLastKeyPressed(newKeyPressed);
  };
  return (
    <div>
      <ResultBox text={formula} />
      <Keyboard digitEventListener={handleClick} />
    </div>
  );
};

export default Calculator;
