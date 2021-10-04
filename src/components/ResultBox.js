import React from "react";
import Label from "./Label.js";

const ResultBox = (props) => {
  return (
    <Label text={props.text} readOnly={true} rows="1" cols="5" maxLength="4" />
  );
};

export default ResultBox;
