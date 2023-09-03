import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartContext from "../../../store/cartContext";
import CheckoutItem from "./CheckoutItem";

const checkoutRoot = document.querySelector("#checkout-root");
export default function Checkout(props) {
  const ctx = useContext(CartContext);

  return ReactDOM.createPortal(
    <div className="Checkout">
      <div className="close">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => props.onHide()}></FontAwesomeIcon>
      </div>
      <div className="MealsDesc">
        <header className="Header">
          <h2 className="Title">餐品详情</h2>
        </header>
        <div className="Checkout-Meals">
          {ctx.items.map(item => <CheckoutItem meal={item} key={item.id}></CheckoutItem>)}
        </div>
        <footer className="Footer">
          <p className="TotalPrice">{ctx.totalPrice}</p>
        </footer>
      </div>
    </div>,
    checkoutRoot
  );
}
