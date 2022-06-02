import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="btn">
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
