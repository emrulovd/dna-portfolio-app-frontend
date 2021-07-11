import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.Backdrop}></div>;
};

const ModalOverlay = (props) => {
  return <Fragment></Fragment>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
