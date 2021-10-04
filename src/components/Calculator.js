import React, { useState } from "react";
import Keyboard from "./Keyboard.js";
import ResultBox from "./ResultBox.js";

const Calculator = (props) => {
  const [formula, setFormula] = useState("");
  const [lastKeyPressed, setLastKeyPressed] = useState("");
  const [decimalUsed, setDecimalUsed] = useState(false);

  //TO-DO: decompose into diferent functions to handle events for each kind of button type (digits, funtional buttons, and operations)
  const handleClick = (event) => {
    let newKeyPressed = event.target.value;
    let newFormula;

    if (isNaN(newKeyPressed) && !(newKeyPressed === ".")) {
      setDecimalUsed(false);
    }

    if (newKeyPressed === "C") {
      newKeyPressed = "";
      newFormula = "";
      setLastKeyPressed(newKeyPressed);
      setFormula(newFormula);
    } else if (newKeyPressed === "." && decimalUsed === true) {
      return;
    } else if (lastKeyPressed === "" && newKeyPressed === "=") {
      return;
    } else if (
      lastKeyPressed === "=" &&
      isNaN(newKeyPressed) &&
      !(newKeyPressed === ".") &&
      !(newKeyPressed === "=")
    ) {
      newFormula = formula + newKeyPressed;
      setLastKeyPressed(newKeyPressed);
      setFormula(newFormula);
    } else if (lastKeyPressed === "=" && !isNaN(newKeyPressed)) {
      return;
    } else if (
      !(formula === "") &&
      !isNaN(lastKeyPressed) &&
      newKeyPressed === "="
    ) {
      newFormula = eval(formula);
      setLastKeyPressed(newKeyPressed);
      setFormula(newFormula);
      setDecimalUsed(false);
    } else if (formula === "" || !isNaN(lastKeyPressed)) {
      if (newKeyPressed === ".") {
        setDecimalUsed(true);
      }
      newFormula = formula + newKeyPressed;
      setLastKeyPressed(newKeyPressed);
      setFormula(newFormula);
    } else if (isNaN(lastKeyPressed) && !isNaN(newKeyPressed)) {
      newFormula = formula + newKeyPressed;
      setLastKeyPressed(newKeyPressed);
      setFormula(newFormula);
    }
    console.log(newFormula);
  };
  return (
    <div>
      <ResultBox text={formula} />
      {/*TO-DO: sent event handlers for each kind of button type*/}
      <Keyboard digitEventListener={handleClick} />
    </div>
  );
};

export default Calculator;
