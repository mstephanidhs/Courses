import { Fragment } from "react";
import { ReactDOM } from "react";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const modalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />)}
      {ReactDOM.createPortal(<modalOverlay>{props.children}</modalOverlay>)}
    </Fragment>
  );
};

export default Modal;
