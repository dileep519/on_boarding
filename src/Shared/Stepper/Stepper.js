import React from "react";
import { HDivider } from "../../Shared/HDivider/HDivider";
import "./Stepper.css";

const getDivider = (index, childernLength, isActive, completed) => {
  if (index < childernLength - 1) {
    return <HDivider isActive={isActive} completed={completed} />;
  }
  return <></>;
};

export const Stepper = (props) => {

  const childernLength = (props.children && props.children.length) || 1;

  return (
    <div className="horizontalStepper">
      {childernLength === 1 ? (
        <React.Fragment>{props.children}</React.Fragment>
      ) : (
        <React.Fragment>
          {props.children.map((child, index) => {
            const isActive = index === props.active;
            const completed = props.active > index;
            return <React.Fragment key={index}>
              {child}
              {getDivider(index, childernLength, isActive, completed)}
            </React.Fragment>;
          })}
        </React.Fragment>
      )}
    </div>
  );
};
