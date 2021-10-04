import React from "react";

const Label = (props) => {
  return (
    <textarea
      value={props.text}
      readOnly={props.readOnly}
      rows={props.rows}
      cols={props.cols}
      maxLength={props.maxLength}
      dir="rtl"
    />
  );
};

export default Label;
