import React from "react";
import "./Input.css";

export const Input = (props) => {
  return (
    <div className="inputContainer">
      <span className="inputLabel">{props.label}</span>
      <input
        className="inputEle"
        type={props.type || "text"}
        placeholder={props.placeholder || 'Please Enter'}
      />
    </div>
  );
};
