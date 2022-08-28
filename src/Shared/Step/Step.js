import React from "react";
import "./Step.css";

const getClassForStep = (isActive) => {
  const activeClass = isActive ? "stepActiveLabel" : "";
  return `stepLabel ${activeClass}`;
};

export const Step = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={getClassForStep(props.active || props.completed)}
    >
      {props.label}
    </div>
  );
};
