import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick} type="button" value={props.caption}>
      {props.caption}
    </button>
  );
};

export default Button;
