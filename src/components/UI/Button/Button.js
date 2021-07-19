import React, { Fragment } from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  let buttonType = null;

  switch (props.buttonTheme) {
    case "black":
      buttonType = (
        <a className={`${classes.Anchor} ${props.className}`} href="1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button
            className={classes.Button}
            type={props.buttonType}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        </a>
      );
      break;
    case "white":
      buttonType = (
        <a className={`${classes.AnchorWhite} ${props.className}`} href={() => false}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button
            className={classes.ButtonWhite}
            type={props.buttonType}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        </a>
      );
      break;
    default:
      buttonType = (
        <a className={`${classes.Anchor} ${props.className}`} href={() => false}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <button
            className={classes.Button}
            type={props.buttonType}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        </a>
      );
      break;
  }

  return <Fragment>{buttonType}</Fragment>;
};

export default Button;
