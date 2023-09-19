import React, { useEffect, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function FilterMeals(props) {
  const [keyWord, setKeyWord] = useState("");

  useEffect(()=>{
    const timer = setTimeout(()=>{
      props.onFilter(keyWord);
    },1000)
    
    return () => {
      clearTimeout(timer)
    }
  },[keyWord])
  
  const inputChangeHandler = (e) => {
    setKeyWord(e.target.value.trim());
    // props.onFilter(keyWord);
  };

  return (
    <div className="FilterMeals">
      <div className="inputOuter">
        <input
          value={keyWord}
          type="text"
          placeholder="请输入关键字"
          className="input"
          onChange={inputChangeHandler}></input>
        <FontAwesomeIcon icon={faSearch} className="icon"></FontAwesomeIcon>
      </div>
    </div>
  );
}
