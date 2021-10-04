import React from "react";
import Button from "./Button.js";

const Keyboard = (props) => {
  //TO-DO: add styles support and refactor presentation if needed
  return (
    <div>
      <Button caption="7" onClick={props.digitEventListener} />
      <Button caption="8" onClick={props.digitEventListener} />
      <Button caption="9" onClick={props.digitEventListener} />
      <Button caption="/" onClick={props.digitEventListener} />
      <br />
      <Button caption="4" onClick={props.digitEventListener} />
      <Button caption="5" onClick={props.digitEventListener} />
      <Button caption="6" onClick={props.digitEventListener} />
      <Button caption="*" onClick={props.digitEventListener} />
      <br />
      <Button caption="1" onClick={props.digitEventListener} />
      <Button caption="2" onClick={props.digitEventListener} />
      <Button caption="3" onClick={props.digitEventListener} />
      <Button caption="-" onClick={props.digitEventListener} />
      <br />
      <Button caption="0" onClick={props.digitEventListener} />
      <Button caption="." onClick={props.digitEventListener} />
      <Button caption="C" onClick={props.digitEventListener} />
      <Button caption="+" onClick={props.digitEventListener} />
      <br />
      <Button caption="=" onClick={props.digitEventListener} />
    </div>
  );
};

export default Keyboard;
