import React from "react";
import Button from "./Button.js";

const Keyboard = (props) => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <Button caption="7" onClick={props.digitEventListener} />
            <Button caption="8" onClick={props.digitEventListener} />
            <Button caption="9" onClick={props.digitEventListener} />
          </td>
          <td>
            <Button caption="/" onClick={props.digitEventListener} />
          </td>
        </tr>
        <tr>
          <td>
            <Button caption="4" onClick={props.digitEventListener} />
            <Button caption="5" onClick={props.digitEventListener} />
            <Button caption="6" onClick={props.digitEventListener} />
          </td>
          <td>
            <Button caption="*" onClick={props.digitEventListener} />{" "}
          </td>
        </tr>
        <tr>
          <td>
            <Button caption="1" onClick={props.digitEventListener} />
            <Button caption="2" onClick={props.digitEventListener} />
            <Button caption="3" onClick={props.digitEventListener} />
          </td>
          <td>
            <Button caption="-" onClick={props.digitEventListener} />{" "}
          </td>
        </tr>
        <tr>
          <td>
            <Button caption="0" onClick={props.digitEventListener} />
            <Button caption="." onClick={props.digitEventListener} />
            <Button caption="C" onClick={props.digitEventListener} />
          </td>
          <td>
            <Button caption="+" onClick={props.digitEventListener} />
          </td>
        </tr>
        <tr>
          <Button caption="=" onClick={props.digitEventListener} width="50px" />
        </tr>
      </table>
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
        <Button caption="=" onClick={props.digitEventListener} />
        <Button caption="+" onClick={props.digitEventListener} />
      </div>
    </div>
  );
};

export default Keyboard;
