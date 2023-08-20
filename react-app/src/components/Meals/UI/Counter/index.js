import React, { Fragment } from "react";
import "./index.css";

export default function Counter(props) {
  return (
    <div className="box">
      {props.amount && props.amount !== 0 ? (
        <Fragment>
          <button className="sub">
            <span>-</span>
          </button>
          <span className="count">{props.amount}</span>
        </Fragment>
      ) : null}

      <button className="add">
        <span>+</span>
      </button>
    </div>
  );
}
