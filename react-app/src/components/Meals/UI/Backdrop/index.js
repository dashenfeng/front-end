import React from "react";
import "./index.css";
import ReactDOM from "react-dom";

const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = function Backdrop(props) {
  return ReactDOM.createPortal(
    <div {...props} className={`Backdrop ${props.className}`}>
      {props.children}
    </div>,
    backdropRoot
  );
};

export default Backdrop;
