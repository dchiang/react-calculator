import React from "react";

const Label = (props) => {
  return (
    //TO-DO:fix formula elements not displaying in the right order
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
