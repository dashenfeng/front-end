import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const checkoutRoot = document.querySelector("#checkout-root");

export default function Checkout(props) {
  return ReactDOM.createPortal(
    <div className="Checkout">
        <div className="close">
          <FontAwesomeIcon icon={faXmark} onClick={() => props.onHide()}></FontAwesomeIcon>
        </div>
       
    </div>,
    checkoutRoot
  );
}
