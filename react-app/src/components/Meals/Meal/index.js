import React from 'react'
import './index.css'
import Counter from '../UI/Counter'
/* 单个食物信息 */

export default function Meal(props) {
  // console.log(props,'123123');
  return (
    <div className='Meal'>
        <div className='ImgBox'>
            <img src={props.meal.img} alt='broken'></img>
        </div>
        <div>
            <h2 className='Title'>{props.meal.title}</h2>
            <p className='Desc'>{props.meal.desc}</p>
            <div className='PriceWrap'>
                <span className='Price'>{props.meal.price}</span>
                <Counter meal={props.meal} ></Counter>
            </div>
        </div>
    </div>
  )
}
