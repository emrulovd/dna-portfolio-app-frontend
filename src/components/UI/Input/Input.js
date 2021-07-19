import React, { Fragment } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={`${classes.InputElement} ${props.className}`}
          type={props.inputType}
          name={props.name}
          value={props.value}
          onChange={props.change}
          required
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={`${classes.TextElement} ${props.className}`}
          type={props.inputType}
          name={props.name}
          value={props.value}
          onChange={props.change}
          required
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={`${props.className}`}
          name={props.name}
          onChange={props.change}
          required
        >
          {props.options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      );
      break;
    case "image":
      inputElement = (
        <input
          className={`${props.className}`}
          type={props.inputType}
          src={props.imageSrc}
          name={props.name}
          value={props.value}
          onChange={props.change}
          required
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={`${classes.InputElement} ${props.className}`}
          type={props.inputType}
          name={props.name}
          value={props.value}
          onChange={props.change}
          required
        />
      );
      break;
  }

  return (
    <Fragment>
      {props.elementType === "image" || props.elementType === "select" ? (
        <Fragment>{inputElement}</Fragment>
      ) : (
        <div
          className={
            props.elementType === "input" ? classes.Input : classes.Textarea
          }
        >
          {inputElement}
          <span className={`${classes.Label} ${props.className}`}>
            {props.label}
          </span>
          <span className={`${classes.Line} ${props.className}`}></span>
        </div>
      )}
    </Fragment>
  );
};

export default Input;
