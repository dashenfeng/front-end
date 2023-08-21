import React, { Fragment } from "react";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";

export default function Counter(props) {
  return (
    <div className="box">
      {props.amount && props.amount !== 0 ? (
        <Fragment>
          <button className="sub">
          <FontAwesomeIcon icon={faMinus}/>
          </button>
          <span className="count">{props.amount}</span>
        </Fragment>
      ) : null}

      <button className="add">
      <FontAwesomeIcon icon={faPlus}/>
      </button>
    </div>
  );
}
