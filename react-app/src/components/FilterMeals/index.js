import React from 'react'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function FilterMeals(props) {

    const inputChangeHandler = e => {
        const keyWord = e.target.value.trim()
        props.onFilter(keyWord)
    }

  return (
    <div className='FilterMeals'>
        <div className='inputOuter'>
            <input type='text' placeholder='请输入关键字' className='input' onChange={inputChangeHandler}></input>
            <FontAwesomeIcon icon={faSearch} className='icon'></FontAwesomeIcon>
        </div>
    </div>
  )
}
