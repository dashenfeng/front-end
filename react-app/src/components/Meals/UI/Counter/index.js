import React, { Fragment, useContext } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../..//store/cartContext.js";

export default function Counter(props) {
  const Cart = useContext(CartContext);
  // console.log(props,'props....');
  const addHandler = () => {
    Cart.addMealHandler(props.meal);
    // console.log(props.meal.amount,'props.amount');
  };
  const subHandler = () => {
    Cart.subMealHandler(props.meal);
  };

  return (
    <div className="box">
      {props.meal.amount && props.meal.amount !== 0 ? (
        <Fragment>
          <button className="sub">
            <FontAwesomeIcon icon={faMinus} onClick={subHandler} />
          </button>
          <span className="count">{props.meal.amount}</span>
        </Fragment>
      ) : null}

      <button className="add">
        <FontAwesomeIcon icon={faPlus} onClick={addHandler} />
      </button>
    </div>
  );
}
